let angle = [];
let radius = 10;
let centerX = 650;
let centerY = 300;
let speed = [];
const balls = [];
let div = document.createElement("div");
let button = document.getElementById("c");
document.body.appendChild(div);
let numberofballs = prompt("How many balls do u want? [Number Only]");
let head = document.getElementById("head");

function start() {
  button.remove();
  head.remove();
  for (let i = 0; i < numberofballs; i++) {
    speed.push(0.001 * numberofballs - i * 0.001);
    angle.push(0);
    let ball = document.createElement("p");
    div.appendChild(ball);
    balls.push(ball);
    animate(i);
  }

  function animate(index) {
    let x = centerX + Math.cos(angle[index]) * (radius * index);
    let y = centerY + Math.sin(angle[index]) * (radius * index);
    angle[index] -= speed[index];
    balls[index].style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(() => animate(index));
  }
}
