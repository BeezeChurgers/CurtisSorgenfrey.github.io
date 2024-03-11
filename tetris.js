const reset = document.querySelector(".reset")
const pause = document.querySelector(".pause")
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score');
const linesDisplay = document.querySelector('.lines');
const displaySquares = document.querySelectorAll(".nextGrid div");
let squares = Array.from(grid.querySelectorAll('div'));
const width = 10;
const height = 20;
let currentPosition = 4;
let currentIndex = 0;
let timerId;
let score = 0;
let lines = 0;
let colors = ["blockL", "blockLm", "blockZ", "blockZm", "blockT", "blockO", "blockI"];
let isAtBottom = false;
let multiplier = 1;

// Keyboard Controls
let move = (event) => {
	if (event.key === "d") {
		moveRight();
	}	else if (event.key === "a") {
		moveLeft();
	} else if (event.key === "s") {
		moveDown();
	} else if (event.key === "w") {
		rotateRight();
	} else if (event.key === "q") {
		rotateLeft();
	}
}

window.addEventListener("keypress", move);

// Touch Controls
grid.addEventListener("touchstart", handleTouchStart, false);        
grid.addEventListener("touchmove", handleTouchMove, false);
grid.addEventListener("touchend", handleTouchEnd, false);        


let xDown = null;                                                        
let yDown = null;
let touchTime;
let touchStart;
let touchEnd;
let touchDir = 0;

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

function handleTouchEnd() {
	touchEnd = Date.now();
	touchTime = touchEnd - touchStart;
	if (touchTime < 100) {
		rotateRight();
	} else if (touchTime > 100) {
		if (touchDir === 1) {
			moveLeft();
		} else if (touchDir === 2) {
			moveRight();
		} else if (touchDir === 3) {
			while (!isAtBottom) {
				moveDown();
			}
			isAtBottom = false;
		}
		touchDir = 0;
	}
	event.preventDefault(); // Stop double tap zoom
}
                                                                         
function handleTouchMove(event) {
	
	event.preventDefault(); // Prevent scrolling

    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = event.touches[0].clientX;                                    
    let yUp = event.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
			touchDir = 1; // left swipe
        } else {
            touchDir = 2; // right swipe
        }                       
    } else {
        if ( yDiff < 0 ) {
            touchDir = 3; // down swipe 
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
}

/*
// Double Tap to Rotate
let timeout;
let lastTap = 0;
grid.addEventListener('touchend', function(event) {
	event.preventDefault();
    let currentTime = new Date().getTime();
    let tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0) {
        rotateRight();
    } else {
        timeout = setTimeout(function() {
            clearTimeout(timeout);
        }, 500);
    }
    lastTap = currentTime;
});
*/

	// The Tetrominoes
	const lTetromino = [
		[1, width + 1, width * 2 + 1, 2],
		[width, width + 1, width + 2, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2],
		[width, width * 2, width * 2 + 1, width * 2 + 2]
	]
	
	const mirlTetromino = [
		[1, width + 1, width * 2 + 1, 0],
		[width + 2, width * 2, width * 2 + 1, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2 + 2],
		[width, width + 1, width + 2, width * 2]
	]
	
	const zTetromino = [
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1]
	]
	
	const mirzTetromino = [
		[2, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width * 2 + 2, width * 2 + 1],
		[2, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width * 2 + 2, width * 2 + 1]
	]
	
	const tTetromino = [
		[1, width, width + 1, width + 2],
		[1, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width + 2, width * 2 + 1],
		[1, width, width + 1, width * 2 + 1]
	]
	
	const oTetromino = [
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1]
	]
	
	const iTetromino = [
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3]
	]
	
	const theTetrominoes = [lTetromino, mirlTetromino, zTetromino, mirzTetromino, tTetromino, oTetromino, iTetromino]
	
	// Randomly select tetromino
	let random = Math.floor(Math.random()*theTetrominoes.length);
	let currentRotation = 0;
	let current = theTetrominoes[random][currentRotation];
	
	// Draw the shape
	function draw() {
		current.forEach( index => (
			squares[currentPosition + index].classList.add(colors[random])
		));
	}
	
	// Undraw the shape
	function undraw() {
		current.forEach( index => (
			squares[currentPosition + index].classList.remove(colors[random])
		));
	}
	
	// Move down shape
	function moveDown() {
		undraw();
		currentPosition += width;
		draw();
		freeze();
	}

  // Move right shape
	function moveRight() {
		undraw();
		isAtRightEdge();
		draw();
	}

  // Move left shape
	function moveLeft() {
		undraw();
		isAtLeftEdge();
		draw();
	}

	// Check Left and right edge
	function isAtLeftEdge() {
		const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
		if (!isAtLeftEdge) {
			currentPosition -= 1;
		}
		if (current.some(index => squares[currentPosition + index].classList.contains("block2"))) {
			currentPosition += 1;
		}
	}

	function isAtRightEdge() {
		const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
		if (!isAtRightEdge) {
			currentPosition += 1;
		}
		if (current.some(index => squares[currentPosition + index].classList.contains("block2"))) {
			currentPosition -= 1;
		}
	}
	
	// Rotate shape right
	function rotateRight() {
		undraw();
		if (current.some(index => (currentPosition + index) % width === 0) || current.some(index => (currentPosition + index) % width === width - 1)) {
			draw(); // Prevent rotating near side or other tetrominoes
		} else {
			currentRotation = (currentRotation + 1) % 4;
			current = theTetrominoes[random][currentRotation];
			draw();
		}
	}
	
	// Rotate shape right
	function rotateLeft() {
		undraw();
		if (current.some(index => (currentPosition + index) % width === 0) || current.some(index => (currentPosition + index) % width === width - 1)) {
			draw(); // Prevent rotating near side or other tetrominoes
		} else {
			currentRotation = (currentRotation + 3) % 4;
			current = theTetrominoes[random][currentRotation];
			draw();
		}
	}

	// Show next Tetromino
	const displayWidth = 4;
	const displayIndex = 0;
	let nextRandom = 0;

	const smallTetrominoes = [
		[1, displayWidth + 1, displayWidth * 2 + 1, 2],
		[1, displayWidth + 1, displayWidth * 2 + 1, 0],
		[0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
		[2, displayWidth + 1, displayWidth + 2, displayWidth * 2 + 1],
		[1, displayWidth, displayWidth + 1, displayWidth + 2],
		[0, 1, displayWidth, displayWidth + 1],
		[1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1]
	]

	function displayShape() {
		displaySquares.forEach(square => {
			square.classList.remove("blockL");
			square.classList.remove("blockLm");
			square.classList.remove("blockZ");
			square.classList.remove("blockZm");
			square.classList.remove("blockT");
			square.classList.remove("blockO");
			square.classList.remove("blockI");
		});
		smallTetrominoes[nextRandom].forEach(index => {
			displaySquares[displayIndex + index].classList.add(colors[nextRandom])
		});
	}

	function freeze() {
		if(current.some(index => squares[currentPosition + index + width].classList.contains("block3") || squares[currentPosition + index + width].classList.contains("block2"))) {
			current.forEach(index => squares[index + currentPosition].classList.add("block2"));
			random = nextRandom;
			nextRandom = Math.floor(Math.random() * theTetrominoes.length);
			current = theTetrominoes[random][currentRotation];
			currentPosition = 4;
			draw();
			displayShape();
			gameOver();
			addScore();
			isAtBottom = true;
		}
	}

	// Reset Game to play again
	reset.addEventListener("click", () => {
		undraw();
		for (let square of squares) {
			square.classList.remove("block2");
			square.classList.remove("blockL");
			square.classList.remove("blockLm");
			square.classList.remove("blockZ");
			square.classList.remove("blockZm");
			square.classList.remove("blockT");
			square.classList.remove("blockO");
			square.classList.remove("blockI");
		}
		clearInterval(timerId);
		timerId = setInterval(moveDown, 1000);
		score = 0;
		lines = 0;
		scoreDisplay.innerHTML = `${score} Points`;
		linesDisplay.innerHTML = `${lines} Lines`;
		random = nextRandom;
		nextRandom = Math.floor(Math.random() * theTetrominoes.length);
		current = theTetrominoes[random][currentRotation];
		currentPosition = 4;
		displayShape();
		draw();
		pause.innerHTML = "&#10074;&#10074; Pause";
		// Allow movement again
		window.addEventListener("keypress", move);
		grid.addEventListener("touchstart", handleTouchStart, false);        
		grid.addEventListener("touchmove", handleTouchMove, false);
		grid.addEventListener("touchend", handleTouchEnd, false);    
	});

	// Start game when page loads
	window.addEventListener("load", () => {
		if(timerId) {
			clearInterval(timerId);
			timerId = null;
		} else {
			draw();
			timerId = setInterval(moveDown, 1000);
			nextRandom = Math.floor(Math.random() * theTetrominoes.length);
			displayShape();
		}
	});

	// Pause Button
	pause.addEventListener("click", () => {
		if(timerId) {
			clearInterval(timerId);
			timerId = null;
			pause.innerHTML = "&#9658; Play";
			// Stop movement
			window.removeEventListener("keypress", move);
			grid.removeEventListener("touchstart", handleTouchStart, false);        
			grid.removeEventListener("touchmove", handleTouchMove, false);
			grid.removeEventListener("touchend", handleTouchEnd, false);    
		} else {
			timerId = setInterval(moveDown, 1000-(50*lines));
			pause.innerHTML = "&#10073;&#10073; Pause";
			// Allow movement again
			window.addEventListener("keypress", move);
			grid.addEventListener("touchstart", handleTouchStart, false);        
			grid.addEventListener("touchmove", handleTouchMove, false);
			grid.addEventListener("touchend", handleTouchEnd, false);    
		}
	});
	
	// Game Over
	function gameOver() {
		if (current.some(index => squares[currentPosition + index].classList.contains("block2"))) {
			scoreDisplay.innerHTML = `${score} Points Game Over`;
			clearInterval(timerId);
			timerId = null;
			// Stop movement
			window.removeEventListener("keypress", move);
			grid.removeEventListener("touchstart", handleTouchStart, false);        
			grid.removeEventListener("touchmove", handleTouchMove, false);
			grid.removeEventListener("touchend", handleTouchEnd, false); 
		}
	}
	
	// Add Score
	function addScore() {
		for (currentIndex = 0; currentIndex < 209; currentIndex += width) {
			const row = [
				currentIndex,
				currentIndex + 1,
				currentIndex + 2,
				currentIndex + 3,
				currentIndex + 4,
				currentIndex + 5,
				currentIndex + 6,
				currentIndex + 7,
				currentIndex + 8,
				currentIndex + 9,
			];
			if (row.every(index => squares[index].classList.contains("block2"))) {
				score += 10 * multiplier;
				if (multiplier * 50 <= score) {
					multiplier++;
				}
				clearInterval(timerId);
				lines += 1;
				scoreDisplay.innerHTML = `${score} Points`;
				linesDisplay.innerHTML = `${lines} Lines`;
				row.forEach(index => {
					squares[index].classList.remove("block2") || squares[index].classList.remove(colors[random])
				});

				undraw(); // Prevent parts from being left behind

				// Splice Array
				const squaresRemoved = squares.splice(currentIndex, width);
				for (let i=0; i<squaresRemoved.length; i++) {
					squaresRemoved[i].classList.remove("blockL");
					squaresRemoved[i].classList.remove("blockLm");
					squaresRemoved[i].classList.remove("blockZ");
					squaresRemoved[i].classList.remove("blockZm");
					squaresRemoved[i].classList.remove("blockT");
					squaresRemoved[i].classList.remove("blockO");
					squaresRemoved[i].classList.remove("blockI");
				}
				squares = squaresRemoved.concat(squares);
				squares.forEach(cell => grid.appendChild(cell));

				// Moving Cutoff back up
				for (let i = 0; i<10; i++) {
					squares[i].classList.add("cutOff");
					squares[i + 10].classList.remove("cutOff");
				}
				
				timerId = setInterval(moveDown, 1000-(50*lines)); // Not reseting time until after splice to give program time
			}
		}
	}