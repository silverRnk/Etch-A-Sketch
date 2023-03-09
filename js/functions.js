//takes an element DOM, no of Column and Row in numbers, and
// size in string
function createGridDisplay(dom, noOfColumn, noOfRow, size) {
  let grids, cellCount;
  cellCount = noOfColumn * noOfRow;
  grids = "";

  //create a grid cell
  dom.style =
    `grid-template-columns: repeat(${noOfColumn}, ${size});` +
    "\n" +
    `grid-template-rows: repeat(${noOfRow}, ${size});`;

  //create a grid element
  for (let y = 0; y < noOfRow; y++) {
    let gridCell;
    for (let x = 0; x < noOfColumn; x++) {
      gridCell = '<div class="cell"' + `x-coord="${x}" `
      + `y-coord="${y}"` + "></div>";

      grids = grids + gridCell + "\n";
    }
  }

  dom.innerHTML = grids;
}

/*
color is 'red', 'green, 'blue', or 'rnd_rgb'
element is html element
*/
//Change element style background-color
function changeElementBackgroundlColor(element, color) {
  if (color != "rnd_rgb") {
    element.style = `background-color: ${color}`;
  } else {
    let red, green, blue;
    red = Math.floor(Math.random() * 205 + 25);
    green = Math.floor(Math.random() * 205 + 25);
    blue = Math.floor(Math.random() * 205 + 25);
    element.style = "background-color:" + `rgb(${red}, ${green}, ${blue})`;
  }
}

//Get color selection array of Elements
// then return the color of selected
// item in string
function getSelectedColor(colorSelectionArray) {
  let findSelected = (array) => {
    let isElementSelected = (element) => {
      if (element == "true") {
        return true;
      } else {
        return false;
      }
    };

    if (array.length === 0) {
      alert("Invlid color selection");
      return "red";
    } else {
      if (isElementSelected(array[0].getAttribute("selected"))) {
        return array[0].getAttribute("color");
      } else {
        return findSelected(array.slice(1));
      }
    }
  };

  return findSelected(colorSelectionArray);
}

function createEtchASketchGrid(noOfColumn, noOfRow) {
  let etchASketchDisplay, cellArray, isMouseDown;
  cellArray = [];
  isMouseDown = false;
  etchASketchDisplay = document.querySelector(".content");

  createGridDisplay(etchASketchDisplay, noOfColumn, noOfRow, "1fr");

  //defines the Cells in Array
  cellArray = etchASketchDisplay.getElementsByClassName("cell");
  cellArray = Array.prototype.slice.call(cellArray);

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
        changeElementBackgroundlColor(
          element,
          getSelectedColor(colorSelection)
        );
      }
    });

    element.addEventListener("mousedown", () => {
      let colorSelection = document.querySelectorAll(
        ".color-selection-item"
      );

      isMouseDown = true;
      colorSelection = Array.from(colorSelection);
      changeElementBackgroundlColor(
        element,
        getSelectedColor(colorSelection)
      );
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

//get the column in number then delete erase the column
function eraseColumnCells(colm){
  let cellArrayColms= document
  .querySelectorAll(`.cell[x-coord="${colm}"]`);

  cellArrayColms = Array.from(cellArrayColms);

  cellArrayColms.forEach(element => {
    element.style = "background-color:transparent;"
  })
}
