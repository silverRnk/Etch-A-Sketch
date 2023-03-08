
function main(noOfColumn, noOfRow) {
  let etchASketchDisplay, cellArray, isMouseDown;
  cellArray = [];
  isMouseDown = false;

  etchASketchDisplay = document.querySelector(".content");

  createGridDisplay(etchASketchDisplay, noOfColumn, noOfRow, "1fr");

  //defines the Cells in Array
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
        changeElementBackgroundlColor(element, "blue");
      }
    });
  });
}

let sizeSelectionElement, sizeSelectionCard;

main(10, 10);

sizeSelectionCard = document.querySelector('.size-selection');

sizeSelectionElement = document
    .querySelectorAll('.size-selection-item')

sizeSelectionElement = Array.from(sizeSelectionElement)

sizeSelectionElement.forEach(selectionItem => {
    selectionItem.addEventListener(
    'click', 
    () => {
        let cols, rows;
        cols = Number(selectionItem.getAttribute('Cols'));
        rows = Number(selectionItem.getAttribute('Rows'));

        main(cols, rows);
        sizeSelectionCard.style = 'display:none;'
    })
})
