// get required html elements;
const gridSlider = document.getElementById('grid-size');
const grid = document.querySelector(".grid");
const colorPicker = document.getElementById('color');
const modeDropdown = document.getElementById('mode');

// set mouseDown default state
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

document.getElementById('size-label').innerHTML = gridSlider.value + ' x ' + gridSlider.value;

// reset function
function reset() {
  grid.textContent = "";
  colorPicker.value = "#333333"
  buildGrid(gridSlider.value);
}
// event listener that that detects input change and calls buildGrid() with input value
gridSlider.addEventListener("input", ()=> {
  document.getElementById('size-label').innerHTML = gridSlider.value + ' x ' + gridSlider.value;
  reset();
})

// add listener to reset button
document.getElementById("resetBtn").addEventListener('click', reset)

// function that returns random RGB value
function getRandomColor(){
  let randomValueOne = Math.floor(Math.random() * 255)
  let randomValueTwo = Math.floor(Math.random() * 255)
  let randomValueThree = Math.floor(Math.random() * 255)
  return `rgb(${randomValueOne}, ${randomValueTwo}, ${randomValueThree})`
}
// function that changes grid item color based on selected color
function changeColor(e) {
  let color = colorPicker.value;
  if(e.type === "mouseover" && !mouseDown) return;
  if(modeDropdown.value === "party") {
    e.target.style.cssText = `background-color: ${getRandomColor()}`
  }else{
    e.target.style.cssText = `background-color: ${color};`
  }

} 
// builds grid items inside grid container based on slider input value
function buildGrid(value) {
  let totalItems = value * value
  grid.style.cssText = 
  `grid-template: repeat(${value}, 1fr) / repeat(${value}, 1fr);`;

  for(i=0; i < totalItems; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener('mouseover', changeColor)
    gridItem.addEventListener('mousedown', changeColor)
    grid.appendChild(gridItem);
  }
}

buildGrid(gridSlider.value);