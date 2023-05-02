// get required html elements;
const gridSlider = document.getElementById('grid-size');
const grid = document.querySelector(".grid");
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

document.getElementById('size-label').innerHTML = gridSlider.value + ' x ' + gridSlider.value;

// event listener that that detects input change and calls buildGrid() with input value
gridSlider.addEventListener("input", ()=> {
  document.getElementById('size-label').innerHTML = gridSlider.value + ' x ' + gridSlider.value;
  grid.textContent = "";
  buildGrid(gridSlider.value);
})



// function that changes grid item color based on selected color
function changeColor(e) {
  if(e.type === "mouseover" && !mouseDown) return;
  e.target.style.cssText = "background-color: black;"

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