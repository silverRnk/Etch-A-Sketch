const menuColorPicker = document.querySelector(".pen-color");
const menuEraser = document.querySelector(".eraser");
const colorSelectionDisplay =
  menuColorPicker.querySelector(".color-selection");
console.log(colorSelectionDisplay.classList);

let colorSelectionItem = colorSelectionDisplay.querySelectorAll(
  ".color-selection-item"
);
colorSelectionItem = Array.from(colorSelectionItem);

showColorSelected();

menuColorPicker.querySelector(".pen").addEventListener("click", () => {
  console.log("hello");
  colorSelectionDisplay.classList.toggle("show");
});

menuEraser.addEventListener("click", () => {
  eraseAll();
});

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
