let angle = [];
let radius = 10;
let centerX = 650;
let centerY = 300;
let speed = [];
const balls = [];
let div = document.createElement("div");
let button = document.getElementById("c")
document.body.appendChild(div);
let numberofvballs = 30;

function move() {
  centerX = Math.random() * (750 - 550) + 550;
  centerY = Math.random() * (400 - 200) + 200;
}

function start() {
    button.remove()
for (let i = 0; i < numberofvballs; i++) {
  speed.push((0.001 * numberofvballs) - (i * 0.001));
  angle.push(0);
  let ball = document.createElement("p");
  div.appendChild(ball);
  balls.push(ball);
  animate(i);
  setInterval(move, 1000);
}

function animate(index) {
  let x = centerX + Math.cos(angle[index]) * (radius * index);
  let y = centerY + Math.sin(angle[index]) * (radius * index);
  angle[index] -= speed[index];
  balls[index].style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(() => animate(index));
}
}

