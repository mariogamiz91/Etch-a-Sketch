const container = document.getElementById('container');
const gridSizeButton = document.getElementById('gridSizeButton');
const DEFAULT_SIZE = 16; // Default 16x16 grid
const MAX_SIZE = 100;    // Max allowed grid size

// Function to create the grid
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
  
    // Set size of each square depending on grid size
    const squareSize = 960 / size;
  
    // Create grid squares
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
  
      // Add hover effect
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      });
  
      container.appendChild(square);
    }
  }

  // Function to prompt user for grid size
function setGridSize() {
    let userInput = prompt(`Enter grid size (Max ${MAX_SIZE}):`, DEFAULT_SIZE);
    let gridSize = parseInt(userInput);
  
    // Validate input
    if (isNaN(gridSize) || gridSize < 1 || gridSize > MAX_SIZE) {
      alert('Invalid input! Please enter a number between 1 and ' + MAX_SIZE);
    } else {
      createGrid(gridSize);
    }
  }
  
  // Set default grid on load
createGrid(DEFAULT_SIZE);

// Add event listener to button
gridSizeButton.addEventListener('click', setGridSize);
