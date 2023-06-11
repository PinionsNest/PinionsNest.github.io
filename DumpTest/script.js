const no = document.getElementById("no")
const yes = document.getElementById("yes")
const text = document.getElementById("text")
const body = document.getElementById("body")

let x = 150
let clicked = 0;

function move() {
    clicked += 1;
    setInterval(function move() {
        no.style.top = (Math.random() * (625 - 275) + 275) + "px"
        no.style.left = (Math.random() * (860 - 625) + 625) + "px"
    } , 200)

    if(clicked > 1){
        yes.remove()
        no.remove()
        body.remove()
        text.textContent = "Damn boy! You are anything but dump!"
    } 
}

function dump() {
  yes.remove()
  no.remove()
  body.remove()
  text.textContent = "I knew it! Get the fuck out off here you dump bitch!"
}


