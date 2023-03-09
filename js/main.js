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

//Menu
const menuColorPicker = document.querySelector(".pen-color");
const menuEraser = document.querySelector(".eraser");
let colorSelectionDisplay =
  menuColorPicker.querySelector(".color-selection");
console.log(colorSelectionDisplay.classList);
menuColorPicker.querySelector(".pen").addEventListener("click", () => {
  console.log("hello");
  colorSelectionDisplay.classList.toggle("show");
});

menuEraser.addEventListener("click", () => {
  eraseAll();
});

let selectedColor = "red";
let colorSelectionItem = colorSelectionDisplay.querySelectorAll(
  ".color-selection-item"
);
colorSelectionItem = Array.from(colorSelectionItem);

colorSelectionItem.forEach((item) => {
  item.addEventListener("click", () => {
    colorSelectionItem.forEach((element) => {
      element.setAttribute("selected", "false");
    });

    item.setAttribute("selected", true);

    showColorSelected();
  });
});

let sizeSelectionElement, sizeSelectionCard;

createEtchASketchGrid(10, 10, selectedColor);

sizeSelectionCard = document.querySelector(".size-selection");

sizeSelectionElement = document.querySelectorAll(".size-selection-item");

sizeSelectionElement = Array.from(sizeSelectionElement);

sizeSelectionElement.forEach((selectionItem) => {
  selectionItem.addEventListener("click", () => {
    let cols, rows, etchASketchDisplay;
    cols = Number(selectionItem.getAttribute("Cols"));
    rows = Number(selectionItem.getAttribute("Rows"));

    createEtchASketchGrid(cols, rows, selectedColor);
    sizeSelectionCard.style = "display:none;";
  });
});
