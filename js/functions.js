function createGridDisplay(dom, noOfColumn, noOfRow, size) {
  let grids, cellCount;
  cellCount = noOfColumn * noOfRow;
  grids = "";

  dom.style =
    `grid-template-columns: repeat(${noOfColumn}, ${size});` +
    "\n" +
    `grid-template-rows: repeat(${noOfRow}, ${size});`;

  for (let y = 0; y < noOfRow; y++) {
    let gridCell;
    for (let x = 0; x < noOfColumn; x++) {
      gridCell = '<div class="cell"' + `coord="(${x}, ${y})"></div>`;

      grids = grids + gridCell + "\n";
    }
  }

  dom.innerHTML = grids;
}

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

  cellArray = etchASketchDisplay.getElementsByClassName("cell");
  cellArray = Array.prototype.slice.call(cellArray);

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

  colorSelectionItem.forEach((element) => {
    element.classList.remove("selected");
  });

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
