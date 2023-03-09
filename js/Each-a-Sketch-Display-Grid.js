
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
  let colorSelectionItem = document
    .querySelectorAll('.color-selection-item');
  colorSelectionItem = Array.from(colorSelectionItem);

  //remove deselect
  colorSelectionItem.forEach(element => {
    element.classList.remove('selected')
  })

  //Show selected color
  colorSelectionItem.forEach(element => {
    if(element.getAttribute('selected') == 'true'){
      element.classList.add('selected')
    }
  })

}

function eraseAll(){
  let cellArrays = document.querySelectorAll('.cell');
  
  cellArrays.forEach(element => {
    element.style = 'background-color: transparent'
  })

}

  //Menu
  const menuColorPicker = document.querySelector('.pen-color');
  const menuEraser = document.querySelector('.eraser')
  let colorSelectionDisplay = menuColorPicker
      .querySelector('.color-selection');
      console.log(colorSelectionDisplay.classList);
  menuColorPicker.querySelector('.pen').addEventListener('click',
    () => {
      console.log('hello');
      colorSelectionDisplay.classList.toggle("show");
    });

  menuEraser.addEventListener('click', () => {
    eraseAll();
  })

  let selectedColor = "red";
  let colorSelectionItem = colorSelectionDisplay
    .querySelectorAll('.color-selection-item');
  colorSelectionItem = Array.from(colorSelectionItem);

  colorSelectionItem.forEach(item => {
    item.addEventListener('click', () => {

      colorSelectionItem.forEach(element => {
        element.setAttribute('selected', 'false')
      });

      item.setAttribute('selected', true);

      showColorSelected();
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
