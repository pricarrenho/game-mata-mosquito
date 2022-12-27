let width = window.innerWidth;
let height = window.innerHeight;
let lifes = 3;
let time = 100;

let createMosquitoTime = 1500;

let level = window.location.search;
level = level.replace("?", "");

if (level === "normal") {
  createMosquitoTime = 1500;
} else if (level === "dificil") {
  createMosquitoTime = 1000;
} else {
  createMosquitoTime = 750;
}

function adjustGameStageSize() {
  width = window.innerWidth;
  height = window.innerHeight;
}

const randomSize = () => {
  let mosquitoClass = Math.floor(Math.random() * 3);

  if (mosquitoClass === 0) {
    return "mosquitoOne";
  } else if (mosquitoClass === 1) {
    return "mosquitoTwo";
  } else {
    return "mosquitoThree";
  }
};

const randomSide = () => {
  let mosquitoClass = Math.floor(Math.random() * 2);

  if (mosquitoClass === 0) {
    return "ladoA";
  } else {
    return "ladoB";
  }
};

const randomPosition = () => {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    const hearthLifes = document.getElementById("v" + lifes);
    if (hearthLifes) hearthLifes.src = "imagens/heart_empty.png";

    if (lifes < 1) {
      window.location.href = "game_over.html";
      return;
    } else {
      lifes--;
    }
  }

  let positionX = Math.floor(Math.random() * width) - 90;
  let positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  let mosquito = document.createElement("img");

  mosquito.src = "imagens/mosquito.png";
  mosquito.className = `${randomSize()} ${randomSide()}`;
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";

  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
};

let stopwatch = setInterval(() => {
  if (time < 0) {
    clearInterval(stopwatch);
    clearInterval(createMosquito);
    window.location.href = "win.html";
  } else {
    document.getElementById("stopwatch").innerHTML = time;
    time -= 1;
  }
}, 1000);

let createMosquito = setInterval(() => {
  randomPosition();
}, createMosquitoTime);

const body = document.querySelector("body");
body.addEventListener("resize", adjustGameStageSize);
