const snake = document.getElementById("snake");
const text = document.getElementById("text");
const s = document.getElementById("speed");
const legit = document.getElementById("legit");
const box = document.getElementById("box");
let moving = true;
let movingto = "No Were";
let positiony = 372.5;
let positionx = 637.5;
const speed = [1];
let once = true;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
snake.style.left = positionx + "px";
snake.style.top = positiony + "px";

function txt() {
  text.innerHTML =
    "going: " +
    movingto +
    "<br> X-Coordinate: " +
    (Math.floor(positionx) - 637) +
    "<br> Y-Coordinate: " +
    (Math.floor(positiony) - 372) * -1;
  s.textContent = "Current Speed: " + Math.floor(speed[0]);
}
setInterval(() => {
  if (movingto !== "No Were") {
    speed[0] += 0.1;
  }
}, 100);
setInterval(() => {
  if (positionx > 925 || positiony > 660 || positionx < 350 || positiony < 85) {
    positionx = 637.5;
    positiony = 372.5;
    snake.style.left = positionx + "px";
    snake.style.top = positiony + "px";
    legit.textContent = "Its a legit run";
    snake.remove();
    text.remove();
    s.remove();
    box.remove();
    legit.setAttribute("style", "border: #fff solid 2px;")
    setTimeout(() => {
      txt();
      location.reload();
      alert("Your Score Is: " + Math.floor(speed[0]));

      legit.textContent = "Its a legit run";

    }, 100);
  }
  txt();
}, 1);

setInterval(() => {
  if (legit.textContent !== "") {
    location.reload();
  }
}, 500);

function moveDown() {
  positiony = positiony + speed[0];
  snake.style.top = positiony + "px";
  if (moving && movingto === "down") {
    requestAnimationFrame(moveDown);
  }
}

function moveUp() {
  positiony = positiony - speed[0];
  snake.style.top = positiony + "px";
  if (moving && movingto === "up") {
    requestAnimationFrame(moveUp);
  }
}

function moveLeft() {
  positionx = positionx - speed[0];
  snake.style.left = positionx + "px";
  if (moving && movingto === "left") {
    requestAnimationFrame(moveLeft);
  }
}

function moveRight() {
  positionx = positionx + speed[0];
  snake.style.left = positionx + "px";
  if (moving && movingto === "right") {
    requestAnimationFrame(moveRight);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" && movingto !== "up" && once && x1 === 0) {
    window.requestAnimationFrame(moveDown);
    movingto = "down";
    moving = true;
    x1 = 1;
    x3 = 0;
    x4 = 0;
  } else if (
    event.key === "ArrowUp" &&
    movingto !== "down" &&
    once &&
    x2 === 0
  ) {
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
    x2 = 1;
    x3 = 0;
    x4 = 0;
  } else if (
    event.key === "ArrowLeft" &&
    movingto !== "right" &&
    once &&
    x3 === 0
  ) {
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
    x3 = 1;
    x1 = 0;
    x2 = 0;
  } else if (
    event.key === "ArrowRight" &&
    movingto !== "left" &&
    once &&
    x4 === 0
  ) {
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
    x4 = 1;
    x1 = 0;
    x2 = 0;
  }
  if (event.key === "s" && movingto !== "up" && once && x1 === 0) {
    window.requestAnimationFrame(moveDown);
    movingto = "down";
    moving = true;
    x1 = 1;
    x3 = 0;
    x4 = 0;
  } else if (event.key === "w" && movingto !== "down" && once && x2 === 0) {
    window.requestAnimationFrame(moveUp);
    movingto = "up";
    moving = true;
    x2 = 1;
    x3 = 0;
    x4 = 0;
  } else if (event.key === "a" && movingto !== "right" && once && x3 === 0) {
    window.requestAnimationFrame(moveLeft);
    movingto = "left";
    moving = true;
    x3 = 1;
    x1 = 0;
    x2 = 0;
  } else if (event.key === "d" && movingto !== "left" && once && x4 === 0) {
    window.requestAnimationFrame(moveRight);
    movingto = "right";
    moving = true;
    x4 = 1;
    x1 = 0;
    x2 = 0;
  }
});
console.log("Please dont use Macro! :'(");
