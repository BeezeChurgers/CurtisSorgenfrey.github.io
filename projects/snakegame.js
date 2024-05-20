// Initial Settings
let direction = 'right',
  speed = 150,
  ticker = null,
  fruitCell = [],
  score = 0,
  size = 25;

let snakeCells = [
  [6, 2],
  [5, 2],
  [4, 2],
  [3, 2],
  [2, 2]
];

let snakeHead = [6, 2];

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
  // Add checkerboard pattern class
  $('tr:even').find('td:odd').addClass('checkerBoard');
  $('tr:odd').find('td:even').addClass('checkerBoard');
}

// Render fruit
const renderFruitCell = () => {
  // Remove fruit class from last spot first
  $('td').removeClass('fruitCell');
  // Make random coordinates
  const randomCell = [Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)];
  // Add class to cell from random values
  $('tr').eq(randomCell[1]).find('td').eq(randomCell[0]).addClass('fruitCell');
  // Test spot: $('body').append(`<p style='color: white'>${randomCell}</p>`);
}

// Render snake
const renderSnake = () => {
  // Remove snake class from last spot first
  $('td').removeClass('snakeCell snakeHead');
  // Add class to cells from snake array values
  for (let cell in snakeCells) {
    $('tr').eq(snakeCells[cell][1]).find('td').eq(snakeCells[cell][0]).addClass('snakeCell');
  }
  // Add class for snake head
  $('tr').eq(snakeHead[1]).find('td').eq(snakeHead[0]).addClass('snakeHead');
}

/*
// Switch for movement direction
const getNewDirection = (event) => {
  // Test keys: $('body').append(`<p style='color: white'>${event.key}</p>`);
  switch (event.key) {
    case 'd':
    case 'ArrowRight':
      direction = 'right';
      break;
    case 'a':
    case 'ArrowLeft':
      direction = 'left';
      break;
    case 'w':
    case 'ArrowUp':
      direction = 'up';
      break;
    case 's':
    case 'ArrowDown':
      direction = 'down';
      break;
  }
  move(direction);
  renderSnake();
}

// Move
const move = (newDirection) => {
  switch (newDirection) {
    case 'right':
      moveRight();
      break;
    case 'left':
      moveLeft();
      break;
    case 'up':
      moveUp();
      break;
    case 'down':
      moveDown();
      break;
  }
}

// Move right
const moveRight = () => {
  snakeHead[0] = snakeHead[0] + 1;
}

// Move left
const moveLeft = () => {
  snakeHead[0] = snakeHead[0] - 1;
}

// Move up
const moveUp = () => {
  snakeHead[1] = snakeHead[1] - 1;
}

// Move down
const moveDown = () => {
  snakeHead[1] = snakeHead[1] + 1;
}

// Start game with timer
function startGame() {
  renderSnake();
  ticker = setInterval(move(direction), speed);
}
*/

// Touch Controls
let xDown = null,
  yDown = null,
  touchTime,
  touchStart,
  touchEnd,
  touchDir = 0;

function getTouches(event) {
  return event.touches ||
    event.originalEvent.touches;
}

function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
  touchStart = Date.now();
  event.preventDefault(); // Stop double tap zoom
}

function handleTouchEnd(event) {
  touchEnd = Date.now();
  touchTime = touchEnd - touchStart;
  if (touchTime > 100) {
    if (touchDir === 1) {
      getNewDirection(37);
    } else if (touchDir === 2) {
      getNewDirection(39);
    } else if (touchDir === 3) {
      getNewDirection(40);
    } else if (touchDir === 4) {
      getNewDirection(38);
    }
    touchDir = 0;
  }
  event.preventDefault(); // Stop double tap zoom
}

function handleTouchMove(event) {
  event.preventDefault(); // Prevent scrolling
  if (!xDown || !yDown) {
    return;
  }
  let xUp = event.touches[0].clientX;
  let yUp = event.touches[0].clientY;
  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;
  if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
    if (xDiff > 0) {
      touchDir = 1; // left swipe
    } else {
      touchDir = 2; // right swipe
    }
  } else {
    if (yDiff < 0) {
      touchDir = 3; // down swipe 
    } else {
      touchDir = 4; // up swipe
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

// Pause button
const pause = () => {
  if (ticker) {
    // Stop timer
    clearInterval(ticker);
    ticker = null;
    $('#pause').html('&#9658; Play');
    // Prevent movement
    $(document).unbind('keydown', function (e) {
      if (ticker) {
        getNewDirection(e.keyCode);
      }
    });
    // Touch Controls
    document.removeEventListener('touchstart', handleTouchStart, false);
    document.removeEventListener('touchmove', handleTouchMove, false);
    document.removeEventListener('touchend', handleTouchEnd, false);
  } else {
    // Start timer
    ticker = setInterval(updateSnakeCell, speed);
    $('#pause').html('&#10073;&#10073; Pause');
    // Allow movement
    $(document).bind('keydown', function (e) {
      if (ticker) {
        getNewDirection(e.keyCode);
      }
    });
    // Touch Controls
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);
  }
}

// Start of copied code from https://codepen.io/emanuelebermani/pen/QjQReQ?editors=0010
function getFruitCell() {
  fruitCell = [getRandomNumber($('tr').length), getRandomNumber($('tr:eq(0)>td').length)];
}

function gameOver() {
  $('div.gameOver').fadeIn('slow', function () {
    $(this).animate({
      top: 270
    }, 'slow');
  });
  clearInterval(ticker);
}

function updateSnakeCell() {
  var snakeNewHead = [];
  switch (direction) {
    case 'right':
      snakeNewHead = [snakeHead[0] + 1, snakeHead[1]];
      break;
    case 'left':
      snakeNewHead = [snakeHead[0] - 1, snakeHead[1]];
      break;
    case 'up':
      snakeNewHead = [snakeHead[0], snakeHead[1] - 1];
      break;
    case 'down':
      snakeNewHead = [snakeHead[0], snakeHead[1] + 1];
      break;
  }
  var newCell = {
    length: 0
  }
  if (snakeNewHead[0] < 0 || snakeNewHead[1] < 0) {
    gameOver();
    return;
  } else if (snakeNewHead[0] >= size || snakeNewHead[1] >= size) {
    gameOver();
    return;
  }
  var newCell = $('tr').eq(snakeNewHead[1]).find('td').eq(snakeNewHead[0]);
  if (newCell.length == 0) {
    gameOver();
  } else {
    if (newCell.hasClass('snakeCell')) {
      gameOver();
    } else {
      if (newCell.hasClass('fruitCell')) {
        snakeCells.push([]);
        //getFruitCell();
        renderFruitCell();
        score += 10;
        $('#score').html('Your Score : ' + score);
        speed = speed - 2 > 50 ? speed - 2 : speed;
        clearInterval(ticker);
        startGame();
      }
      for (var i = (snakeCells.length - 1); i > 0; i--) {
        snakeCells[i] = snakeCells[i - 1];
      }
      snakeCells[0] = snakeHead = snakeNewHead;
      renderSnake();
    }
  }
}

function getNewDirection(keyCode) {
  var codes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  if (typeof codes[keyCode] != 'undefined') {
    var newDirection = codes[keyCode],
      changeDirection = true;
    switch (direction) {
      case 'up':
        changeDirection = newDirection != 'down';
        break;
      case 'down':
        changeDirection = newDirection != 'up';
        break;
      case 'right':
        changeDirection = newDirection != 'left';
        break;
      case 'left':
        changeDirection = newDirection != 'right';
        break;
    }
    direction = changeDirection ? newDirection : direction;
  }
}

function startGame() {
  ticker = setInterval(updateSnakeCell, speed);
}

// Render and start game when document is loaded
$(document).ready(function () {
  renderBoard();
  renderFruitCell();
  $(document).bind('keydown', function (e) {
    if (ticker) {
      getNewDirection(e.keyCode);
    }
  });

  startGame();
  $('#pause').bind('click', pause);
});

// Touch Controls
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);