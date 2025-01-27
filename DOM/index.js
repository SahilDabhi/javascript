let startButton = document.getElementById("myStart");
let stopButton = document.getElementById("myStop");
let valueButton = document.getElementById("myValue");
let form = document.getElementById("form");
let div = document.getElementById("div");
let para = document.getElementById("para");
let buttonContainer = document.getElementById("container");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const orangeButton = document.getElementById("orange");
const textTarget = document.getElementById("text");

let button = document.querySelectorAll(".button");

//---------------------------------------------------------

let divMain = document.getElementById("main");

let input = document.querySelector("input");

console.log(button);
console.log(button[0]);

let value = 0;

//--------------------------------------------------------------------------------------------------

function buttonClicked() {
  console.log("button clicked");
}

startButton.addEventListener("click", buttonClicked);

startButton.addEventListener("click", () => {
  if (startButton.innerText === "Start") {
    startButton.innerText = "Begin";
  } else {
    startButton.innerText = "Start";
  }
});

//------------------------------------------------------------------------------------------------

valueButton.addEventListener("click", () => {
  value++;
  console.log(value);
});

//------------------------------------------------------------------------------------------------

stopButton.addEventListener("click", () => {
  stopButton.classList.toggle("btn-red");
  divMain.style.backgroundColor = "grey";
});

//------------------------------------------------------------------------------------------------

input.addEventListener("change", () => {
  console.log(input.value);
});

//----------------------------------------------------------------------------------------------

para.addEventListener("click", () => {
  alert("para tag clicked");
});

div.addEventListener("click", () => {
  alert("div tag clicked");
});

form.addEventListener("click", () => {
  alert("form tag clicked");
});

// event bubbling

//----------------------------------------------------------------------------------------------

buttonContainer.addEventListener("click", (event) => {
  console.log(event.target);
});

// ------------------------------------------------------------------------------------------
redButton.addEventListener("click", () => {
  // console.log("red button clicked");
  redButton.style.backgroundColor = "red";
  textTarget.innerHTML = "REd clicked ";
});
