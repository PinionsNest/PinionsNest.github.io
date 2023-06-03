const input = document.getElementById("input");
const all = document.getElementById("all");
const body = document.getElementById("body");
const form = document.getElementById("form");
const left = document.getElementById("left");
let x = Math.floor(Math.random() * 100);
const n = document.createElement("p");
let Tries = 10;
body.appendChild(n);
n.style.color = "#0653b8";
left.textContent = "Attempts left: " + Tries;

function get(event) {
  event.preventDefault();
  Tries -= 1;

  if (x == input.value && Tries > 0) {
    all.remove();

    n.textContent = "Congratulations! You guessed the correct number.";

    setTimeout(() => {
      n.textContent = "Wanna try again?";
    }, 1500);
    setTimeout(() => {
      location.reload();
    }, 2500);
  } else if (Tries > -1 && x != input.value) {
    input.value = "";
    left.textContent = "Attempts left: " + Tries;
  } else if (Tries < 0 && x != input.value) {
    all.remove();
    n.textContent = "Alase! You have no attempts left!";
    setTimeout(() => {
      n.textContent = "Wanna try again?";
    }, 1500);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }
}
