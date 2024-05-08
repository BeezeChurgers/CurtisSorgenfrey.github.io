// Initial Settings
let direction = 'right',
    speed = 150,
    ticker = null,
    fruitCell = [],
    score = 0,
    size = 25;

let snakeCells = [
    [2, 6],
    [2, 5],
    [2, 4],
    [2, 3],
    [2, 2]
];

let snakeHead = [2, 6];

// Render the board
const renderBoard = () => {
  // Build table
  // Make columns first
  let columns = '';
  for (let i = 0; i < size; i++) {
    columns += '<td></td>';
  }
  // Make table
  $('body').append('<table></table>');
  // Add rows to table with columns embedded
  for (let i = 0; i < size; i++) {
    $('table').append(`<tr>${columns}</tr>`);
  }
}

// Render fruit
const renderFruitCell = () => {
  // Remove fruit class from last spot first
  $('td').removeClass('fruitCell');
  // Make random coordinates
  const randomCell = [Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)];
  // Add class to cell from random values
  $('tr').eq(randomCell[0]).find('td').eq(randomCell[1]).addClass('fruitCell');
  // Test spot: $('body').append(`<p style='color: white'>${randomCell}</p>`);
}

// Render snake
const renderSnake = () => {
  // Remove snake class from last spot first
  $('td').removeClass('snakeCell');
  $('td').removeClass('snakeHead');
  // Add class to cells from snake array values
  for (let cell in snakeCells) {
    $('tr').eq(snakeCells[cell][0]).find('td').eq(snakeCells[cell][1]).addClass('snakeCell');
  }
  // Add class for snake head
  $('tr').eq(snakeHead[0]).find('td').eq(snakeHead[1]).addClass('snakeHead');
}

// Switch for movement direction
const getNewDirection = (keyCode) => {
  switch (direction) {
    case 39:
      // Right
      snakeHead[1] = snakeHead[1] + 1;
      break;
    case 37:
      // Left
      snakeNewHead = [snakeHead[0], snakeHead[1] - 1];
      break;
    case 38:
      // Up
      snakeNewHead = [snakeHead[0] - 1, snakeHead[1]];
      break;
    case 40:
      // Down
      snakeNewHead = [snakeHead[0] + 1, snakeHead[1]];
      break;
  }
  renderSnake();
}

// Render and start game when document is loaded
$(document).ready(function() {
  renderBoard();
  renderFruitCell();
  $(document).bind('keydown', function(e) {
    getNewDirection(e.keyCode);
  });
  startGame();
  $('table').click();
});