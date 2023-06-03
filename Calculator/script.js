const body = document.getElementById("body");
const screen1 = document.getElementById("screen");
const buttons = {};
for (let i = 0; i <= 9; i++) {
  buttons["b" + i] = document.getElementById("b" + i);
}

const be = document.getElementById("be");
const bd = document.getElementById("bd");
const bD = document.getElementById("bD");
const bs = document.getElementById("bs");
const bm = document.getElementById("bm");
const ba = document.getElementById("ba");

function bu1() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 1;
  }
}
function bu2() {  
  if (screen1.textContent.length < 7) {
    screen1.textContent + 2;
  }
}
function bu3() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 3;
  }
}
function bu4() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 4;
  }
}
function bu5() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 5;
  }
}
function bu6() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 6;
  }
}
function bu7() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 7;
  }
}
function bu8() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 8;
  }
}
function bu9() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 9;
  }
}
function bu0() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + 0;
  }
}
function bud() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + ".";
  }
}
function buD() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + "/";
  }
}
function bus() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + "-";
  }
}
function bua() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + "+";
  }
}
function bum() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + "X";
  }
}
function bue() {
  if (screen1.textContent.length < 7) {
    screen1.textContent + "=";
  }
}
