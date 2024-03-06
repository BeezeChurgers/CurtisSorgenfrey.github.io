// wsdocument.addEventListener('DOMContentLoaded', () => {

const grid = document.querySelector('.grid')
let squares = Array.from(grid.querySelectorAll('div'))
const width = 10
const height = 20
let currentPosition = 4


	// The Tetrominoes
	const lTetromino = [
		[1, width + 1, width * 2 + 1, 2],
		[width, width + 1, width + 2, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2],
		[width, width * 2, width * 2 + 1, width * 2 + 2]
	]
	
	const zTetromino = [
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1]
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
	
	const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
	
	// Randomly select tetromino
	let random = Math.floor(Math.random()*theTetrominoes.length)
	let currentRotation = 0
	let current = theTetrominoes[random][currentRotation]
	
	// Draw the shape
	function draw() {
		current.forEach( index => (
			squares[currentPosition + index].classList.add('block')
		))
	}
	
	// Undraw the shape
	function undraw() {
		current.forEach( index => (
			squares[currentPosition + index].classList.remove('block')
		))
	}
	
	// Move down shape
	function moveDown() {
		undraw();
		currentPosition += width;
		draw();
	}

    // Move right shape
	function moveRight() {
		undraw();
		currentPosition += 1;
		draw();
	}

    // Move left shape
	function moveLeft() {
		undraw();
		currentPosition -= 1;
		draw();
	}
	
	// Creating Swiping trigger
	// Getting Horizontal Movement of Mouse
	let getMouseX = (event) => event.movementX;
	// Getting vertical Movement of Mouse
	let getMouseY = (event) => event.movementY;
	
	// Initializing grid array
	let gridArr = new Array(171);
	for (let i = 0; i<gridArr.length; i++) {
		gridArr[i] = 0;
	}
	
	// Testing movement
	let move = (event) => {
		if (event.key === "d") {
			if ((currentPosition % 10) != 9) {
				moveRight();
			}
		}	else if (event.key === "a") {
			if ((currentPosition % 10) != 0) {
				moveLeft();
			}
		} else if (event.key === "s") {
			if ((currentPosition + 10) < 171) {
				moveDown();
			}
		}
	}
	
	window.addEventListener("keypress", move);
	
/*}

)*/