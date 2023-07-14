const inputField = document.getElementById("listInput");
const outputTable = document.getElementById("show");
const statusParagraph = document.getElementById("p");
const toggleButton = document.getElementById("n2");
const audioPlayer = document.getElementById("audio");

function submitList(event) {
  //Used to prevent the page from refreshing every time the form is submitted.
  event.preventDefault();

  const todoItem = {
    text: inputField.value,
    notdone: "Ongoing...",
    done: "Done",
  };

  // Getting the value from the input box.
  const inputValue = todoItem.text;

  // Creating all the additional elements.
  const tableRow = document.createElement("tr");
  const statusCell = document.createElement("td");
  const todoCell = document.createElement("td");
  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");

  // Getting the table tag into a variable.

  // Removing border from the delete column.
  deleteCell.setAttribute("style", "background: linear-gradient(to right, #46237a00, #8a4fff00);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0);text-align:start;");

  // Adding new elements into the table tag.
  tableRow.appendChild(statusCell);
  tableRow.appendChild(todoCell);
  tableRow.appendChild(deleteCell);
  deleteCell.appendChild(deleteButton);
  outputTable.appendChild(tableRow);

  // Adding text to the elements.
  statusCell.textContent = todoItem.notdone;
  todoCell.textContent = inputValue;
  deleteButton.textContent = "Delete";

  // Resetting the input value.
  inputField.value = "";

  // Making the delete button delete the whole row.
  deleteButton.addEventListener("click", function () {
    tableRow.remove();
  });

  //Function to change color according to status.
  function changeColor() {
    if (statusCell.textContent === "Ongoing...") {
      statusCell.setAttribute("style", "background: linear-gradient(to right, #46237a00, #8a4fff00);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      todoCell.setAttribute("style", "background: linear-gradient(to right, #46237a00, #8a4fff00);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      statusCell.textContent = "Done";
    } else if (statusCell.textContent === "Done") {
      statusCell.setAttribute("style", "background: linear-gradient(to right, #46237a, #8a4fff);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      todoCell.setAttribute("style", "background: linear-gradient(to right, #46237a, #8a4fff);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);");
      statusCell.textContent = "Ongoing...";
    }
  }

  // Recoloring the status column to indicate that it is done.
  statusCell.addEventListener("click", changeColor);

  // Recoloring the todo list column to indicate that it is done.
  todoCell.addEventListener("click", changeColor);
}

console.log("Wtf are you doing in the console?")

function toggleMusic() {
  if (toggleButton.textContent === "Music: Off") {
    audioPlayer.setAttribute("autoplay", "");
    audioPlayer.setAttribute("loop", "");
    audioPlayer.setAttribute("src", "backgroundmusic.mp3");
    audioPlayer.setAttribute("type", "audio/mp3");

    audioPlayer.volume = 0.25;

    toggleButton.textContent = "Music: On";
  } else {
    audioPlayer.volume = 0;

    toggleButton.textContent = "Music: Off";
  }
}
