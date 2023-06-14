const listInput = document.getElementById("listInput");
const output = document.getElementById("show");
const p1 = document.getElementById("p")
const n1 = document.getElementById("n2");
const m = document.getElementById("audio")


function submitList(event) {
  //Used to prevent the page from refreshing every time the form is submitted.
  event.preventDefault();

  const todo = {
    text: listInput.value,
    notdone: "Ongoing...",
    done: "Done",
  };

  // Getting the value from the input box.
  const x = todo.text;

  // Creating all the additional elements.
  const y = document.createElement("tr");
  const z1 = document.createElement("td");
  const z2 = document.createElement("td");
  const z3 = document.createElement("td");
  const z31 = document.createElement("button");

  // Getting the table tag into a variable.


  // Removing border from the delete column.
  z3.setAttribute("style", "background: linear-gradient(to right, #46237a00, #8a4fff00);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0);text-align:start;");

  // Adding new elements into the table tag.
  y.appendChild(z1);
  y.appendChild(z2);
  y.appendChild(z3);
  z3.appendChild(z31);
  output.appendChild(y);

  // Adding text to the elements.
  z1.textContent = todo.notdone;
  z2.textContent = x;
  z31.textContent = "Delete";

  // Resetting the input value.
  listInput.value = "";

  // Making the delete button delete the whole row.
  z31.addEventListener("click", function () {
    y.remove();
  });

  //Function to change color according to status.
  function colorChange() {
    if (z1.textContent === "Ongoing...") {
      z1.setAttribute("style", "background: linear-gradient(to right, #46237a00, #8a4fff00);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      z2.setAttribute("style", "background: linear-gradient(to right, #46237a00, #8a4fff00);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      z1.textContent = "Done";
    } else if (z1.textContent === "Done") {
      z1.setAttribute("style", "background: linear-gradient(to right, #46237a, #8a4fff);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      z2.setAttribute("style", "background: linear-gradient(to right, #46237a, #8a4fff);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      z1.textContent = "Ongoing...";
    }
  }

  // Recoloring the status colomn to indicate that it is done.
  z1.addEventListener("click", colorChange);

  // Recoloring the todolist column to indicate that it is done.
  z2.addEventListener("click", colorChange);
}



console.log("Wtf are yo doing in the console?")


function on() {
  if (n1.textContent === "Music: Off") {
    // m.setAttribute("controls", "")
    m.setAttribute("autoplay", "")
    m.setAttribute("loop", "")
    m.setAttribute("src", "backgroundmusic.mp3")
    m.setAttribute("type", "audio/mp3")

    m.volume = 0.25;

    n1.textContent = "Music: On";
  }
  else{
    m.volume = 0;

    n1.textContent = "Music: Off"
  }
} 