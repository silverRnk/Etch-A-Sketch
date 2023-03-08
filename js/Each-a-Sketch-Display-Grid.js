
function main(noOfColumn, noOfRow, color) {
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
        let colorSelection = document
        .querySelectorAll('.color-selection-item');
        colorSelection = Array.from(colorSelection)
        console.log(color);
        changeElementBackgroundlColor(element, 
          getSelectedColor(colorSelection));
      }
    });
  });
}

function showColorSelected(){
  let colorSelections = document
    .querySelectorAll('.color-selection-item');
  colorSelection = Array.from(colorSelections);

  //remove deselect
  colorSelections.forEach(element => {
    element.classList.remove()
  })

}

  //Menu
  const menuColorPicker = document.querySelector('.pen-color');
  let colorSelection = menuColorPicker
      .querySelector('.color-selection');
      console.log(colorSelection.classList);
  menuColorPicker.querySelector('.pen').addEventListener('click',
    () => {
      
      colorSelection.classList.toggle("show");
    });
  let selectedColor = "red";
  let colorSelectionItem = colorSelection
    .querySelectorAll('.color-selection-item');
  colorSelectionItem = Array.from(colorSelectionItem);

  colorSelectionItem.forEach(item => {
    item.addEventListener('click', () => {

      selectedColor = item.getAttribute("color")
    })
  })

let sizeSelectionElement, sizeSelectionCard;

main(10, 10, selectedColor);

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

        main(cols, rows, selectedColor);
        sizeSelectionCard.style = 'display:none;'
    })
})
