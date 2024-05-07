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

// Render Snake
const renderSnake = () => {
    $('td').removeClass('snakeCell snakeHead');
    // Iterates through snake array, adds snake class
    for (let cell in snakeCells) {
    // Locates row, finds td decendents of that row, and adds class to specific column
    $('tr').eq(snakeCells[cell][0]).find('td').eq(snakeCells[cell][1]).addClass('snakeCell');
    }
    // Does the same thing for the head
    $('tr').eq(snakeHead[0]).find('td').eq(snakeHead[1]).addClass('snakeHead');
}

// Randomly selects a cell to put the fruit in
function getFruitCell() {
    // Picks random row based on number of rows, and random column based on first row length
    fruitCell = [getRandomNumber($('tr').length), getRandomNumber($('tr:eq(0)>td').length)];
}

// Shows game over
function gameOver() {
    // Animates game over in from the bottom
    $('div.gameOver').fadeIn('slow', function() {
        $(this).animate({
            bottom: 20
        }, 'slow');
    });
    // Stops interval so game stops
    clearInterval(ticker);
}

function updateSnakeCell() {
    var snakeNewHead = [];
    // Uses switch to update snake head array
    switch (direction) {
        case 'right':
            snakeNewHead = [snakeHead[0], snakeHead[1] + 1];
            break;
        case 'left':
            snakeNewHead = [snakeHead[0], snakeHead[1] - 1];
            break;
        case 'up':
            snakeNewHead = [snakeHead[0] - 1, snakeHead[1]];
            break;
        case 'down':
            snakeNewHead = [snakeHead[0] + 1, snakeHead[1]];
            break;
    }
    
    // Determines if snake head runs into any wall by going negative or over 25 in any direction
    if (snakeNewHead[0] < 0 || snakeNewHead[1] < 0) {
        gameOver();
        return;
    } else if (snakeNewHead[0] >= size || snakeNewHead[1] >= size) {
        gameOver();
        return;
    }

    const newCell = $('tr').eq(snakeNewHead[0]).find('td').eq(snakeNewHead[1]);
    if (newCell.length == 0) {
        gameOver();
    } else {
        if (newCell.hasClass('snakeCell')) {
            gameOver();
        } else {
            if (newCell.hasClass('fruitCell')) {
                snakeCells.push([]);
                getFruitCell();
                renderFruitCell();
                score += 10;
                $('#scoreBoard').html('Your Score : ' + score);
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

function getRandomNumber(limit) {
  return parseInt(Math.random() * limit % limit);
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

function renderBoard() {
  var rowhtml = '';
  for (var i = 0; i < size; i++) {
    rowhtml += '<td cellpadding="0" cellspacing="0"></td>'
  }
  html = [];
  for (var i = 0; i < size; i++) {
    html.push('<tr cellpadding="0" cellspacing="0">' + rowhtml + '</tr>');
  }
  $(document.body).append('<table id="gamefield">' + html.join('\n') + '</table>');
  getFruitCell();
}

function renderFruitCell() {
  $('td').removeClass('fruitCell');
  $('tr').eq(fruitCell[0]).find('td').eq(fruitCell[1]).addClass('fruitCell');
}

function startGame() {
  ticker = setInterval(updateSnakeCell, speed);
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