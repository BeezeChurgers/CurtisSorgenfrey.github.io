// Setting darkmode function
let checkBoxDM = document.getElementById("darkMode");
checkBoxDM.addEventListener("click", darkModeSwitch);
window.addEventListener("load", darkModeSwitch);
function darkModeSwitch() {
	if (checkBoxDM.checked) {
		// Changing text
		document.querySelector("h1").style.color = "white";
		document.querySelector("body").style.backgroundColor = "black";
		
		// Making loop to change all of the grids
		let grids = document.getElementsByClassName("grid");
		for (let i=0; i<grids.length; i++) {
			grids[i].style.border = "1vw solid white";
		}
		
		// Changing Dark Mode Label
		document.getElementById("darkModeLabel").style.color = "white";
		document.getElementById("reset").style.color = "white";
		document.getElementById("reset").style.border = "0.5vw solid white";
		document.getElementById("PvE").style.color = "white";
		document.getElementById("PvE").style.border = "0.5vw solid white";
    document.getElementById("scoreBoard").style.color = "white";
			
		// Changing Win marker
		document.getElementById("win").style.backgroundColor = "white";
		
	} else {
		// Changing text
		document.querySelector("h1").style.color = "black";
		document.querySelector("body").style.backgroundColor = "white";
		
		// Making loop to change all of the grids
		let grids = document.getElementsByClassName("grid");
		for (let i=0; i<grids.length; i++) {
			grids[i].style.border = "1vw solid black";
			
		// Changing Dark Mode Label
		document.getElementById("darkModeLabel").style.color = "black";
		document.getElementById("reset").style.color = "black";
		document.getElementById("reset").style.border = "0.5vw solid black";
		document.getElementById("PvE").style.color = "black";
		document.getElementById("PvE").style.border = "0.5vw solid black";
    document.getElementById("scoreBoard").style.color = "black";
			
		// Changing Win marker
		document.getElementById("win").style.backgroundColor = "black";
		}
	}
}

// Setting variables
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

// Setting Player Order
let playerOne = true;

// Setting Win Variable
let win = document.getElementById("win");

// Setting Winning Games
let scoreBoard = new Array(9).fill(0);
function checkWinning() {
	for (let i=0; i<3; i++) {
		// Checking Vertical
		if ((scoreBoard[i]+scoreBoard[i+3]+scoreBoard[i+6]) === 9 || (scoreBoard[i]+scoreBoard[i+3]+scoreBoard[i+6]) === 12) {
			// Adding win marker
			if (i === 0) {
				win.classList.add("win4");
			} else if (i === 1) {
				win.classList.add("win5");
			} else {
				win.classList.add("win6");
			}
			// Loop to prevent more plays
			for (let j=0; j<scoreBoard.length; j++) {
				scoreBoard[j] = 1;
			}
            // Updating displayed score
            updateScore(playerOne);
		}
		// Checking Horizontal
		if ((scoreBoard[3*i]+scoreBoard[3*i+1]+scoreBoard[3*i+2]) === 9 || (scoreBoard[3*i]+scoreBoard[3*i+1]+scoreBoard[3*i+2]) === 12) {
			if (i === 0) {
				win.classList.add("win1");
			} else if (i === 1) {
				win.classList.add("win2");
			} else {
				win.classList.add("win3");
			}
			for (let j=0; j<scoreBoard.length; j++) {
				scoreBoard[j] = 1;
			}
            updateScore(playerOne);
		}
		// Checking Diagonal
		if ((scoreBoard[i]+scoreBoard[4]+scoreBoard[8-i]) === 9 || (scoreBoard[i]+scoreBoard[4]+scoreBoard[8-i]) === 12) {
		if (i === 0) {
				win.classList.add("win7");
			} else if (i === 2) {
				win.classList.add("win8");
			}
			for (let j=0; j<scoreBoard.length; j++) {
				scoreBoard[j] = 1;
			}
            updateScore(playerOne);
		}
	}
}

// Updating score
function updateScore(winner) {
    let s1 = document.getElementById("s1");
    let s2 = document.getElementById("s2");
    if (!winner) {
        s1.innerHTML = Number(s1.innerHTML) + 1;
    } else {
        s2.innerHTML = Number(s2.innerHTML) + 1;
    }
}

// Playing computer PvE
let pveSwitch = document.getElementById("PvE");
let pve = false;
let random = Math.floor(Math.random() * 9) + 1;

pveSwitch.addEventListener("click", () => {
	if (!pve) {
		pve = true;
		pveSwitch.innerHTML = "PvE";
		computersTurn();
	} else {
		pve = false;
		pveSwitch.innerHTML = "PvP";
	}
});

// Initiallizing Neural Network
const network = new brain.NeuralNetwork();
let networkHolder = network;

// Arrays to help train network
const lettersToNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const trainingArr = [
	{input:[0,0,0,0,0,0,0,0,0], output:{one:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{two:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{three:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{four:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{five:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{six:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{seven:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{eight:1}},
  {input:[0,0,0,0,0,0,0,0,0], output:{nine:1}}
];

// Train the Network with input objects
networkHolder.train(trainingArr);

// Teaching good or bad play
function goodOrBad(arr1, arr2) {
	for (let i=0; i<3; i++) {
		if ((scoreBoard[i]+scoreBoard[i+3]+scoreBoard[i+6]) == 6 || (scoreBoard[3*i]+scoreBoard[3*i+1]+scoreBoard[3*i+2]) == 6 || (scoreBoard[i]+scoreBoard[4]+scoreBoard[8-i]) == 6) {
			let numberName = lettersToNumbers[indexOfMax(arr2)];
			const outputObject = {};
			outputObject[numberName] = 0;
			const newTrainingObject = { input:arr1, output:outputObject };
			const newTrainingArr = trainingArr.concat([newTrainingObject]);
			//trainingArr.push(newTrainingObject);
			const newNetwork = new brain.NeuralNetwork();
			networkHolder = newNetwork;
			networkHolder.train(newTrainingArr);
			console.log(newTrainingArr);
		} else if ((scoreBoard[i]+scoreBoard[i+3]+scoreBoard[i+6]) == 12 || (scoreBoard[3*i]+scoreBoard[3*i+1]+scoreBoard[3*i+2]) == 12 || (scoreBoard[i]+scoreBoard[4]+scoreBoard[8-i]) == 12) {
			let numberName = lettersToNumbers[indexOfMax(arr2)];
			const outputObject = {};
			outputObject[numberName] = 1;
			const newTrainingObject = { input:arr1, output:outputObject };
			const newTrainingArr = trainingArr.concat([newTrainingObject]);
			//trainingArr.push(newTrainingObject);
			const newNetwork = new brain.NeuralNetwork();
			networkHolder = newNetwork;
			networkHolder.train(newTrainingArr);
			console.log(newTrainingArr);
		}
	}
}

// Find max value of gameMoveArr
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

// Computer plays Neural Network
function computersTurn() {
	if (pve && !playerOne) {
		// What is the expected output of current game?
		let result = networkHolder.run(scoreBoard);
		// Test best spot to play
		let gameMoveArr = [
			result.one,
			result.two,
			result.three,
			result.four,
			result.five,
			result.six,
			result.seven,
			result.eight,
			result.nine
		];
		if (scoreBoard[indexOfMax(gameMoveArr)] == 0) {
			const placeHolder = scoreBoard;
			makeO(indexOfMax(gameMoveArr) + 1);
			goodOrBad(placeHolder, gameMoveArr);
		} else {
			// Makes spot zero to try the next best spot
			gameMoveArr[indexOfMax(gameMoveArr)] = 0;
			// Jumps into a loop to play the next availible spot
			for (let i=0; i<gameMoveArr.length; i++) {
				if (scoreBoard[indexOfMax(gameMoveArr)] == 0) {
					const placeHolder2 = scoreBoard;
					makeO(indexOfMax(gameMoveArr) + 1);
					goodOrBad(placeHolder2, gameMoveArr);
					break;
				} else {
					gameMoveArr[indexOfMax(gameMoveArr)] = 0;
				}
			}
		}
		checkWinning();
	}
}

// Computer plays random
/*
function computersTurn() {
	if (pve && !playerOne) {
		random = Math.floor(Math.random() * 9) + 1;
		if (scoreBoard[random - 1] === 0) {
			makeO(random);
		} else {
		// Jumps into a loop to play the next availible spot
			for (let i=0; i<scoreBoard.length; i++) {
				random = (random % 9) + 1;
				if (scoreBoard[random - 1] === 0) {
					makeO(random);
					break;
				}
			}
		}
	// Didn't work
		while (!playerOne) {
			if (scoreBoard[random - 1] === 0) {
				makeO(random);
				break;
			} else {
				random = Math.floor(Math.random() * 9) + 1;
			}
		}
		checkWinning();
	}
}
*/

// Makes an x
function makeX(square) {
	// Fills with an x
	document.getElementById(`shape${square}`).classList.add("xr"); 
	document.getElementById(`shape${square}x`).classList.add("xl");
	playerOne = false;
	// Changes player indicator on top
	document.getElementById("p1").style.display = "none";
	document.getElementById("p2").style.display = "inline";
	// Update scoreBoard
	scoreBoard[square-1] = 3;
}

// Makes an o
function makeO(square) {
	// Fills with an o
	document.getElementById(`shape${square}`).classList.add("o");
	playerOne = true;
	// Changes player indicator on top
	document.getElementById("p2").style.display = "none"; 
	document.getElementById("p1").style.display = "inline";
	// Update scoreBoard
	scoreBoard[square-1] = 4;
}

// Clicking boxes
box1.addEventListener("click", () => {
	if (scoreBoard[0] === 0) {
		if (playerOne) {
			makeX(1);
		} else {
			makeO(1);
		}
		// Checks if somebody won
		checkWinning();
		// Adding computer's move
		computersTurn();
	}
});

box2.addEventListener("click", () => {
	if (scoreBoard[1] === 0) {
		if (playerOne) {
			makeX(2);
		} else {
			makeO(2);
		}
		checkWinning();
		computersTurn();
	}
});

box3.addEventListener("click", () => {
	if (scoreBoard[2] === 0) {
		if (playerOne) {
			makeX(3);
		} else {
			makeO(3);
		}
		checkWinning();
		computersTurn();
	}
});

box4.addEventListener("click", () => {
	if (scoreBoard[3] === 0) {
		if (playerOne) {
			makeX(4);
		} else {
			makeO(4);
		}
		checkWinning();
		computersTurn();
	}
});

box5.addEventListener("click", () => {
	if (scoreBoard[4] === 0) {
		if (playerOne) {
			makeX(5);
		} else {
			makeO(5);
		}
		checkWinning();
		computersTurn();
	}
});

box6.addEventListener("click", () => {
	if (scoreBoard[5] === 0) {
		if (playerOne) {
			makeX(6);
		} else {
			makeO(6);
		}
		checkWinning();
		computersTurn();
	}
});

box7.addEventListener("click", () => {
	if (scoreBoard[6] === 0) {
		if (playerOne) {
			makeX(7);
		} else {
			makeO(7);
		}
		checkWinning();
		computersTurn();
	}
});

box8.addEventListener("click", () => {
	if (scoreBoard[7] === 0) {
		if (playerOne) {
			makeX(8);
		} else {
			makeO(8);
		}
		checkWinning();
		computersTurn();
	}
});

box9.addEventListener("click", () => {
	if (scoreBoard[8] === 0) {
		if (playerOne) {
			makeX(9);
		} else {
			makeO(9);
		}
		checkWinning();
		computersTurn();
	}
});

// Reset Button
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
	// Reseting scoreBoard
	for (let i=0; i<scoreBoard.length; i++) {
        // Wiping scoreboard
		scoreBoard[i] = 0;
        // Removing x's and o's
        document.getElementById("shape"+(i+1)).classList.remove("xr");
	    document.getElementById("shape"+(i+1)+"x").classList.remove("xl");
        document.getElementById("shape"+(i+1)).classList.remove("o");
        // Removing win line
        document.getElementById("win").classList.remove("win"+(i+1));
	}
	// Let computer play if it is its turn
	computersTurn();
});