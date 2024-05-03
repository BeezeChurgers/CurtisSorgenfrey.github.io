
// Setting main value
let display = document.getElementById("screen").textContent;

// Number buttons
function seven() {
	if (display === "0") {
		display = "7";
	} else {
		display = display + "7";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function eight() {
	if (display === "0") {
		display = "8";
	} else {
		display = display + "8";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function nine() {
	if (display === "0") {
		display = "9";
	} else {
		display = display + "9";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function four() {
	if (display === "0") {
		display = "4";
	} else {
		display = display + "4";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function five() {
	if (display === "0") {
		display = "5";
	} else {
		display = display + "5";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function six() {
	if (display === "0") {
		display = "6";
	} else {
		display = display + "6";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function one() {
	if (display === "0") {
		display = "1";
	} else {
		display = display + "1";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function two() {
	if (display === "0") {
		display = "2";
	} else {
		display = display + "2";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function three() {
	if (display === "0") {
		display = "3";
	} else {
		display = display + "3";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function zero() {
	if (display === "0") {
		display = "0";
	} else {
		display = display + "0";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

function decimal() {
	if (display === "0") {
		display = "0.";
	} else {
		display = display + ".";
	}
	document.getElementById("screen").textContent = display;
	document.getElementById("clear").textContent = "C";
}

// Operations
let num1 = 0;
let num2 = 0;
let calc = 0;
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;

function add() {
	num1 = Number(display);
	addition = true;
	display = "0";
	document.getElementById("screen").textContent = display;
}

function subtract() {
	num1 = Number(display);
	subtraction = true;
	display = "0";
	document.getElementById("screen").textContent = display;
}

function multiply() {
	num1 = Number(display);
	multiplication = true;
	display = "0";
	document.getElementById("screen").textContent = display;
}

function divide() {
	num1 = Number(display);
	division = true;
	display = "0";
	document.getElementById("screen").textContent = display;
}

function equals() {
	num2 = Number(display);
	
if (addition === true) {
	calc = (num1 + num2);
	addition = false;
}

if (subtraction === true) {
	calc = (num1 - num2);
	subtraction = false;
}

if (multiplication === true) {
	calc = (num1 * num2);
	multiplication = false;
}

if (division === true) {
	calc = (num1 / num2);
	division = false;
}

	display = String(calc);
	document.getElementById("screen").textContent = display;
}

// Setting up secondary function
function wipe() {
	document.getElementById("screen").textContent = "0";
	document.getElementById("clear").textContent = "AC";
	display = "0"
	num1 = 0;
	num2 = 0;
	calc = 0;
	addition = false;
	subtraction = false;
	multiplication = false;
	division = false;
}

function negative() {
	display = String((-1)*(Number(display)));
	document.getElementById("screen").textContent = display;
}

function percent() {
	display = String((Number(display)/100));
	document.getElementById("screen").textContent = display;
}
