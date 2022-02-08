const container = document.getElementById('container');
const buttonReset = document.getElementById('clean-grid');
const gridItems = document.getElementsByClassName('grid-item');

// Creates the grid with the rows and columns given by the user
function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
}

// Ask and validate the size of the grid
let gridSize = parseInt(
  prompt('Choose the size of the grid. Has to be NxN squares(Maximum 64):')
);
while (gridSize > 64) {
  gridSize = parseInt(prompt('Maximum size is 64:'));
}

// Reset the grid and ask for a new size
buttonReset.addEventListener('click', () => {
  Array.from(gridItems).forEach((gridItem) => resetGrid(gridItem));
  gridSize = parseInt(
    prompt('Choose the size of the grid. Has to be NxN squares(Maximum 64):')
  );
  while (gridSize > 64) {
    gridSize = parseInt(prompt('Maximum size is 64:'));
  }
  createGrid(gridSize, gridSize);
  addColors();
  console.log('Borrando grid');
});

function resetGrid(gridItem) {
  container.removeChild(gridItem);
}

// Function to add colors to the grid items
function addColors() {
  Array.from(gridItems).forEach((gridItem) =>
    gridItem.addEventListener('mouseenter', changeColor)
  );

  function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
  }
}

createGrid(gridSize, gridSize);
addColors();
