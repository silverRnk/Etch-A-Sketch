//defines the etch a sketch cell
class EtchASketchCell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = 'transparent';
    }
    
    changeCellColor(color) {
        this.color = color;
    }
}


// takes the no of column and no of row in numbers 
//then return a array of array of EtchASketchCell
function createEtchASketchGrid(height, width){
    let column = [];
    for(let y = 0; y<height;y++){
        let row = [];
        for(let x = 0; x<width; x++){
            row[x] = new EtchASketchCell(x, y);
        }
        column[y] = row;
    }
    return column;
    
}

let oneByOne = createEtchASketchGrid(1, 1);
let tenByTen = createEtchASketchGrid(10, 10);

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