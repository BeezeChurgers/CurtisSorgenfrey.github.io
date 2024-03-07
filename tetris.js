const startBtn = document.querySelector("button")
const grid = document.querySelector('.grid');
const displaySquares = document.querySelectorAll(".nextGrid div");
let squares = Array.from(grid.querySelectorAll('div'));
const width = 10;
const height = 20;
let currentPosition = 4;
let timerId;

// Control blocks
let move = (event) => {
	if (event.key === "d") {
		moveRight();
	}	else if (event.key === "a") {
		moveLeft();
	} else if (event.key === "s") {
		moveDown();
	} else if (event.key === "e") {
		rotateRight();
	} else if (event.key === "q") {
		rotateLeft();
	}
}

window.addEventListener("keypress", move);


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
			squares[currentPosition + index].classList.add('block')
		));
	}
	
	// Undraw the shape
	function undraw() {
		current.forEach( index => (
			squares[currentPosition + index].classList.remove('block')
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
		const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
		if (!isAtRightEdge) {
			currentPosition += 1;
		}
		if (current.some(index => squares[currentPosition + index].classList.contains("block2"))) {
			currentPosition -= 1;
		}
		draw();
	}

  // Move left shape
	function moveLeft() {
		undraw();
		const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
		if (!isAtLeftEdge) {
			currentPosition -= 1;
		}
		if (current.some(index => squares[currentPosition + index].classList.contains("block2"))) {
			currentPosition += 1;
		}
		draw();
	}
	
	// Rotate shape right
	function rotateRight() {
		undraw();
		currentRotation = (currentRotation + 1) % 4;
		current = theTetrominoes[random][currentRotation];
		draw();
	}
	
	// Rotate shape right
	function rotateLeft() {
		undraw();
		currentRotation = (currentRotation + 3) % 4;
		current = theTetrominoes[random][currentRotation];
		draw();
	}

	// Show next Tetromino
	const displayWidth = 4;
	const displayIndex = 0;
	let nextRandom = 0;

	const smallTetrominoes = [
		[1, width + 1, width * 2 + 1, 2],
		[1, width + 1, width * 2 + 1, 0],
		[0, width, width + 1, width * 2 + 1],
		[2, width + 1, width + 2, width * 2 + 1],
		[1, width, width + 1, width + 2],
		[0, 1, width, width + 1],
		[1, width + 1, width * 2 + 1, width * 3 + 1]
	]

	function displayShape() {
		displaySquares.forEach(square => {
			square.classList.remove("block");
		});
		smallTetrominoes[nextRandom].forEach(index => {
			displaySquares[displayIndex + index].classList.add("block")
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
		}
	}

	startBtn.addEventListener("click", () => {
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


	
	// Creating Swiping trigger
	// Getting Horizontal Movement of Mouse
	let getMouseX = (event) => event.movementX;
	// Getting vertical Movement of Mouse
	let getMouseY = (event) => event.movementY;