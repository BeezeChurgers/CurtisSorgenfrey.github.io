let note = document.getElementById("note");
let title = document.getElementById("title");
let isInTitle = false;
note.style.color = "#AAAAAA";
title.style.color = "#AAAAAA";

// Erase default text and change color
function eraseTitleDefault(event) {
  event.stopPropagation();
	if (/Title/.test(title.innerHTML)) {
		title.innerHTML = "";
        title.style.color = "white";
	}
	inInTitle = true;
}

function restoreTitleDefault() {
	if (title.innerHTML == "") {
		title.innerHTML = "Title";
        title.style.color = "#AAAAAA";
	}
	inInTitle = false;
}

title.addEventListener("click", eraseTitleDefault);
window.addEventListener("click", restoreTitleDefault);

function eraseNoteDefault(event) {
    event.stopPropagation();
    if (note.innerHTML == "Take a note...") {
        note.innerHTML = "";
        note.style.color = "white";
    }
}

function restoreNoteDefault() {
	if (note.innerHTML == "") {
		note.innerHTML = "Take a note...";
        note.style.color = "#AAAAAA";
	}
}

note.addEventListener("click", eraseNoteDefault);
window.addEventListener("click", restoreNoteDefault);

// Convert paragraphs to list
let checkBox = document.getElementById("checkboxes");
let isCheckBox = false;
let form = document.querySelector("form");
let main = document.querySelector("main");

function makeCheckBox() {
	if (isCheckBox) {
		const labels = document.querySelectorAll("label");
		const boxes = document.querySelectorAll("input");
		const brs = document.querySelectorAll("br");
		for (let i = 0; i < labels.length; i++) {
			let paragraph = document.createElement("p");
			paragraph.innerText = labels[i].innerHTML;
			main.appendChild(paragraph);
			paragraph.contentEditable = true;
			labels[i].remove();
			boxes[i].remove();
			brs[i].remove();
		}
		isCheckBox = false;
	} else {
		const paragraphs = document.querySelectorAll("p");
		for (let i = 0; i < paragraphs.length; i++) {
			/*let listItem = document.createElement("li");
			listItem.innerText = paragraphs[i].innerHTML;
			list.appendChild(listItem);
			listItem.contentEditable = true;
			paragraphs[i].remove();*/
			let box = document.createElement("input");
			box.type = "checkbox";
			box.id = i;
			form.appendChild(box);
			let label = document.createElement("label");
			label.for = i;
			label.innerText = paragraphs[i].innerText;
			label.contentEditable = true;
			form.appendChild(label);
			let br = document.createElement("br");
			form.appendChild(br);
			paragraphs[i].remove();
		}
		isCheckBox = true;
	}
}

checkBox.addEventListener("click", makeCheckBox);

// Enter creates new element
function createNewLine(event) {
	if (event.key === "Enter" && isInTitle) {
		if (isCheckBox) {
			document.getElementsByTagName("label")[0].focus();
		} else {
			document.getElementsByTagName("p")[0].focus();
		}
	} else if (event.key === "Enter" && isCheckBox) {
		event.preventDefault();
		let box = document.createElement("input");
		box.type = "checkbox";
		form.appendChild(box);
		let label = document.createElement("label");
		label.contentEditable = true;
		form.appendChild(label);
		let br = document.createElement("br");
		form.appendChild(br);
		label.focus();
	} else if (event.key === "Enter" && !isCheckBox) {
		event.preventDefault();
		let paragraph = document.createElement("p");
		paragraph.innerText = "";
		main.appendChild(paragraph);
		paragraph.contentEditable = true;
		paragraph.focus();
	}
}

window.addEventListener("keypress", createNewLine);