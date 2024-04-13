// Erase default text and change color
let title = document.getElementById("title");
title.style.color = "#AAAAAA";

function eraseTitleDefault(event) {
  event.stopPropagation();
  if (/^Title$/.test(title.innerHTML)) {
    title.innerHTML = "";
    title.style.color = "white";
  }
}

function restoreTitleDefault() {
  if (title.innerHTML == "") {
    title.innerHTML = "Title";
    title.style.color = "#AAAAAA";
  }
  saveTitleToLocalStorage();
}

title.addEventListener("click", eraseTitleDefault);
window.addEventListener("click", restoreTitleDefault);

// Initializing the todo list
let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");

// Create task function
const createTask = (task) => {
  let listItem = document.createElement("li");
  let taskText = document.createElement("span");
  taskText.textContent = task;
	taskText.contentEditable = "true";
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "\u2715";
  deleteButton.style.display = "none";

  // Adding all elements to listItem in correct order
  listItem.appendChild(checkBox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Event listeners for the checkbox and delete/edit button
  checkBox.addEventListener("change", function() {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
			task.classList.add("completed");
    } else {
      taskText.style.textDecoration = "none";
			task.classList.remove("completed");
    }
  });

  deleteButton.addEventListener("click", function() {
    todoList.removeChild(listItem);
	saveTasksToLocalStorage();
  });
	
	// Show delete button when editing
	taskText.addEventListener("focus", function() {
		deleteButton.style.display = "inline";
	});
	taskText.addEventListener("focusout", function() {
		setTimeout(() => {
			deleteButton.style.display = "none";
		}, 500);
	});

	// EventListener to save on "Enter"
  taskText.addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
			todoInput.focus();
		} else if (event.key === "Backspace" || event.key === "Delete") { // Does not work, need to fix **************************************************
			todoList.removeChild(listItem);
		}
	});

	saveTasksToLocalStorage();
}

// Adding task to list on "Submit"
const addNewTask = (event) => {
  event.preventDefault();
  let newTask = todoInput.value;

  if (newTask === "") {
    todoInput.placeholder = "Please enter a new task."
  } else {
    createTask(newTask);
    newTask = "";
    todoInput.value = newTask;
    todoInput.focus();
  }
}
todoForm.addEventListener("submit", addNewTask);

// Adding task to list on "Enter"
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addNewTask(event);
  }
});

// Save each task to local storage for later use
const saveTasksToLocalStorage = () => {
    const tasks = [];
    document.querySelectorAll("#todoList li").forEach(task => {
      let taskText = task.querySelector("span").textContent;
      let isCompleted = task.classList.contains("completed");
      tasks.push({
        text: taskText,
        completed: isCompleted
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

const saveTitleToLocalStorage = () => {
	localStorage.setItem("title", title.innerText);
}

// Calls all the previous tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
	const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
	savedTasks.forEach(task => {
		createTask(task.text);
	});
	// Set title from memory
	title.innerText = localStorage.getItem("title") || "Title";
	if (/^Title$/.test(title.innerHTML)) {
		title.style.color = "#AAAAAA";
	  } else {
		title.style.color = "white";
	  }
});
