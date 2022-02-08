const container = document.getElementById('container');
const buttonReset = document.getElementById('clean-grid');
const gridItems = document.getElementsByClassName('grid-item');
console.log(gridItems);

let gridSize = parseInt(
  prompt('Choose the size of the grid. Has to be NxN squares(Maximum 100):')
);

buttonReset.addEventListener('click', () => {
  Array.from(gridItems).forEach((gridItem) => resetGrid(gridItem));
  gridSize = parseInt(
    prompt('Choose the size of the grid. Has to be NxN squares(Maximum 100):')
  );
  makeRows(gridSize, gridSize);
  addColors();
  console.log('Borrando grid');
});

function addColors() {
  Array.from(gridItems).forEach((gridItem) =>
    gridItem.addEventListener('mouseenter', changeColor)
  );

  function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
  }
}

function resetGrid(gridItem) {
  container.removeChild(gridItem);
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
}

makeRows(gridSize, gridSize);
addColors();
