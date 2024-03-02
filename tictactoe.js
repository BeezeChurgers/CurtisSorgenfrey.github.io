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
let scoreBoard = new Array(9);
for (let i=0; i<scoreBoard.length; i++) {
	scoreBoard[i] = 0;
}
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

// Clicking boxes
box1.addEventListener("click", () => {
	if (scoreBoard[0] === 0) {
		if (playerOne) {
			// Makes an x
			document.getElementById("shape1").classList.add("xr"); 
			document.getElementById("shape1x").classList.add("xl");
			playerOne = false;
			// Changes player indicator on top
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			// Update scoreBoard
			scoreBoard[0] = 3;
		} else {
			// Makes an o
			document.getElementById("shape1").classList.add("o");
			playerOne = true;
			// Changes player indicator on top
			document.getElementById("p2").style.display = "none"; 
			document.getElementById("p1").style.display = "inline";
			// Update scoreBoard
			scoreBoard[0] = 4;
		}
		// Checks if somebody won
		checkWinning();
	}
});

box2.addEventListener("click", () => {
	if (scoreBoard[1] === 0) {
		if (playerOne) {
			document.getElementById("shape2").classList.add("xr");
			document.getElementById("shape2x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[1] = 3;
		} else {
			document.getElementById("shape2").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[1] = 4;
		}
		checkWinning();
	}
});

box3.addEventListener("click", () => {
	if (scoreBoard[2] === 0) {
		if (playerOne) {
			document.getElementById("shape3").classList.add("xr");
			document.getElementById("shape3x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[2] = 3;
		} else {
			document.getElementById("shape3").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[2] = 4;
		}
		checkWinning();
	}
});

box4.addEventListener("click", () => {
	if (scoreBoard[3] === 0) {
		if (playerOne) {
			document.getElementById("shape4").classList.add("xr");
			document.getElementById("shape4x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[3] = 3;
		} else {
			document.getElementById("shape4").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[3] = 4;
		}
		checkWinning();
	}
});

box5.addEventListener("click", () => {
	if (scoreBoard[4] === 0) {
		if (playerOne) {
			document.getElementById("shape5").classList.add("xr");
			document.getElementById("shape5x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[4] = 3;
		} else {
			document.getElementById("shape5").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[4] = 4;
		}
		checkWinning();
	}
});

box6.addEventListener("click", () => {
	if (scoreBoard[5] === 0) {
		if (playerOne) {
			document.getElementById("shape6").classList.add("xr");
			document.getElementById("shape6x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[5] = 3;
		} else {
			document.getElementById("shape6").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[5] = 4;
		}
		checkWinning();
	}
});

box7.addEventListener("click", () => {
	if (scoreBoard[6] === 0) {
		if (playerOne) {
			document.getElementById("shape7").classList.add("xr");
			document.getElementById("shape7x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[6] = 3;
		} else {
			document.getElementById("shape7").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[6] = 4;
		}
		checkWinning();
	}
});

box8.addEventListener("click", () => {
	if (scoreBoard[7] === 0) {
		if (playerOne) {
			document.getElementById("shape8").classList.add("xr");
			document.getElementById("shape8x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[7] = 3;
		} else {
			document.getElementById("shape8").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[7] = 4;
		}
		checkWinning();
	}
});

box9.addEventListener("click", () => {
	if (scoreBoard[8] === 0) {
		if (playerOne) {
			document.getElementById("shape9").classList.add("xr");
			document.getElementById("shape9x").classList.add("xl");
			playerOne = false;
			document.getElementById("p1").style.display = "none";
			document.getElementById("p2").style.display = "inline";
			scoreBoard[8] = 3;
		} else {
			document.getElementById("shape9").classList.add("o");
			playerOne = true;
			document.getElementById("p2").style.display = "none";
			document.getElementById("p1").style.display = "inline";
			scoreBoard[8] = 4;
		}
		checkWinning();
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
});