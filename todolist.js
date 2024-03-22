let note = document.getElementById("note");
let title = document.getElementById("title");
let checkBox = document.getElementById("checkboxes");

// Erase default text and change color
function eraseTitleDefault(event) {
    event.stopPropagation();
	if (/Title/.test(title.innerHTML)) {
		title.innerHTML = "";
        title.style.color = "white";
	}
}

function restoreTitleDefault() {
	if (title.innerHTML == "") {
		title.innerHTML = "Title";
        title.style.color = "#AAAAAA";
	}
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

// Make new note when pressing ENTER
