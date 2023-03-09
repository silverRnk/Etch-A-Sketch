const menuColorPicker = document.querySelector(".pen-color");
const menuEraser = document.querySelector(".eraser-icons");
const menuEraserSlider = document.querySelector('.slide-eraser>input');

const colorSelectionDisplay =
  menuColorPicker.querySelector(".color-selection");
console.log(colorSelectionDisplay.classList);

let colorSelectionItem,
 sizeSelectionElement,
 sizeSelectionCard;

colorSelectionItem = colorSelectionDisplay.querySelectorAll(
  ".color-selection-item"
);
colorSelectionItem = Array.from(colorSelectionItem);

sizeSelectionCard = document.querySelector(".size-selection");
sizeSelectionElement = document.querySelectorAll(".size-selection-item");
sizeSelectionElement = Array.from(sizeSelectionElement);

createEtchASketchGrid(10, 10);

showColorSelected();

menuEraser.addEventListener("click", () => {
  eraseAll();
});

menuEraserSlider.addEventListener('input',
 () => {
  eraseColumnCells(menuEraserSlider.value);
 })

colorSelectionItem.forEach((item) => {
  item.addEventListener("click", () => {
    colorSelectionItem.forEach((element) => {
      element.setAttribute("selected", "false");
    });

    item.setAttribute("selected", true);
    showColorSelected();
  });
});



sizeSelectionElement.forEach((selectionItem) => {
  selectionItem.addEventListener("click", () => {
    let cols, rows;
    cols = Number(selectionItem.getAttribute("Cols"));
    rows = Number(selectionItem.getAttribute("Rows"));

    createEtchASketchGrid(cols, rows);
    sizeSelectionCard.style = "display:none;";
  });
});
