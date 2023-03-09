

//takes an element DOM, no of Column and Row in numbers, and
// size in string
function createGridDisplay(dom, noOfColumn, noOfRow, size){
    let grids, cellCount;
    cellCount = noOfColumn*noOfRow;
    grids = ''
    //create a grid cell
    dom.style=
    `grid-template-columns: repeat(${noOfColumn}, ${size});` + 
    '\n' + `grid-template-rows: repeat(${noOfRow}, ${size});`;

    //create a grid element
    for(let y=0; y<noOfRow; y++){
        let gridCell;
        for(let x=0; x<noOfColumn; x++){
            gridCell = 
            '<div class="cell"'+
            `coord="(${x}, ${y})"></div>`;

            grids = grids + gridCell + '\n';
        }
    }

    dom.innerHTML = grids;
    
    
}

//Change element style background-color
function changeElementBackgroundlColor(element, color){
    element.style = `background-color: ${color}`
}

//Get color selection array of Elements
// then return the color of selected
// item in string
function getSelectedColor(colorSelectionArray){
    let findSelected = (array) => {
        let isElementSelected = (element) => {
            if(element == 'true'){
                return true
            }else{
                return false
            }
        }
        console.log(isElementSelected(array.slice(0, 1)[0].getAttribute("selected")));
        if(isElementSelected(array.slice(0, 1)[0].getAttribute("selected"))){
            return array.slice(0, 1)[0].getAttribute("color");
        }else{
            return findSelected(array.slice(1, array.length));
        }
    }

    return findSelected(colorSelectionArray);
}

function createEtchASketchGrid(noOfColumn, noOfRow, color) {
  let etchASketchDisplay, cellArray, isMouseDown;
  cellArray = [];
  isMouseDown = false;
  etchASketchDisplay = document.querySelector(".content");

  //defines the Cells in Array
  cellArray = etchASketchDisplay
    .getElementsByClassName("cell");
  cellArray = Array.prototype
    .slice.call(cellArray);

  createGridDisplay(
    etchASketchDisplay,
    noOfColumn, 
    noOfRow, 
    "1fr");

  etchASketchDisplay.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  etchASketchDisplay.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  cellArray.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        let colorSelection = document.querySelectorAll(
          ".color-selection-item"
        );
        colorSelection = Array.from(colorSelection);
        console.log(color);
        changeElementBackgroundlColor(
          element,
          getSelectedColor(colorSelection)
        );
      }
    });
  });
}

function showColorSelected() {
    let colorSelectionItem = document.querySelectorAll(
      ".color-selection-item"
    );
    colorSelectionItem = Array.from(colorSelectionItem);
  
    //remove deselect
    colorSelectionItem.forEach((element) => {
      element.classList.remove("selected");
    });
  
    //Show selected color
    colorSelectionItem.forEach((element) => {
      if (element.getAttribute("selected") == "true") {
        element.classList.add("selected");
      }
    });
  }
  
  function eraseAll() {
    let cellArrays = document.querySelectorAll(".cell");
  
    cellArrays.forEach((element) => {
      element.style = "background-color: transparent";
    });
  }