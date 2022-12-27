const btn = document.querySelector(".btn");

const startGame = () => {
  let level = document.getElementById("level").value;

  window.location.href = "app.html?" + level;
};

btn.addEventListener("click", startGame);

const changeLevel = (event) => {
  if (event.target.value === "") {
    btn.setAttribute("disabled", true);
  } else {
    btn.removeAttribute("disabled");
  }
};

const level = document.getElementById("level");
level.addEventListener("change", changeLevel);
