const mario = document.getElementById("mario");
const mush = document.getElementById("mush");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (mario.classList != "jump") {
    mario.classList.add("jump");
  }
  setTimeout(function () {
    mario.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let marioTop = parseInt(
    window.getComputedStyle(mario).getPropertyValue("top")
  );
  let mushLeft = parseInt(
    window.getComputedStyle(mush).getPropertyValue("left")
  );

  if (mushLeft < 90 && mushLeft > 0 && marioTop >= 140) {
    alert("Game Over");
  }
}, 10);
