/*
// Play animation when section title is visible
let logoBox = document.getElementById("logoHolder");
let logoTitle = document.getElementById("logoTitle");
logoBox.classList.add("boxShadow");
logoTitle.classList.add("titleShadow");

function logoAppearMain() {
    const {
      top,
      left,
      bottom,
      right
    } = logoBox.getBoundingClientRect();
    const {
      innerHeight,
      innerWidth
    } = window;
    if ( ( (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight) ) && ( (left > 0 && left < innerWidth) || (right > 0 && right < innerWidth) ) ) {
			logoBox.classList.add("boxShadow");
      logoTitle.classList.add("titleShadow");
		} else {
			logoBox.classList.remove("boxShadow");
      logoTitle.classList.remove("titleShadow");
		}
}

let recentProjectsBox = document.getElementById("projectFlow");
let recentProjectsTitle = document.getElementById("recentProjectsTitle");

function logoAppearRecentProjects() {
    const {
      top,
      left,
      bottom,
      right
    } = recentProjectsBox.getBoundingClientRect();
    const {
      innerHeight,
      innerWidth
    } = window;
    if ( ( (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight) ) && ( (left > 0 && left < innerWidth) || (right > 0 && right < innerWidth) ) ) {
			recentProjectsBox.classList.add("boxShadow");
      recentProjectsTitle.classList.add("titleShadow");
		} else {
			recentProjectsBox.classList.remove("boxShadow");
      recentProjectsTitle.classList.remove("titleShadow");
		}
}

let qualificationsBox = document.getElementById("codeFlow");
let qualificationsTitle = document.getElementById("qualificationsTitle");

function logoAppearQualifications() {
    const {
      top,
      left,
      bottom,
      right
    } = qualificationsBox.getBoundingClientRect();
    const {
      innerHeight,
      innerWidth
    } = window;
    if ( ( (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight) ) && ( (left > 0 && left < innerWidth) || (right > 0 && right < innerWidth) ) ) {
			qualificationsBox.classList.add("boxShadow");
      qualificationsTitle.classList.add("titleShadow");
		} else {
			qualificationsBox.classList.remove("boxShadow");
      qualificationsTitle.classList.remove("titleShadow");
		}
}

let contactBox = document.getElementById("contactInfo");
let contactTitle = document.getElementById("contactTitle");

function logoAppearContact() {
    const {
      top,
      left,
      bottom,
      right
    } = contactBox.getBoundingClientRect();
    const {
      innerHeight,
      innerWidth
    } = window;
    if ( ( (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight) ) && ( (left > 0 && left < innerWidth) || (right > 0 && right < innerWidth) ) ) {
			contactBox.classList.add("boxShadow");
      contactTitle.classList.add("titleShadow");
		} else {
			contactBox.classList.remove("boxShadow");
      contactTitle.classList.remove("titleShadow");
		}
}

function logoAppear() {
  logoAppearMain();
  logoAppearRecentProjects();
  logoAppearQualifications();
  logoAppearContact();
}
*/

// Recent Projects Carousel
const recentProjects = [
  {
    id: 1,
    name: "calculator",
    img: "images/calculator.png",
    text: "The ultimate calculator application built entirely with JavaScript. Whether you're a student solving complex equations or a professional crunching numbers, it is your go-to tool for all your mathematical needs.",
    link: "calculator.html"
  },
  {
    id: 2,
    name: "tic-tac-toe",
    img: "https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-1024x1024-bmwf454z.png",
    text: "Tic Tac Toe game developed entirely in JavaScript. TicTacJS offers a seamless gaming experience with its intuitive user interface and responsive design, allowing players to enjoy the classic game on any device.",
    link: "tictactoe.html"
  },
  {
    id: 3,
    name: "to-do list",
    img: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/10/google-keep-list.jpeg",
    text: "Built using JavaScript, our to-do list application seamlessly organizes your tasks with ease. From adding new items to marking them complete, it streamlines your workflow, keeping you productive throughout the day.",
    link: "todolist.html"
  },
  {
    id: 4,
    name: "Tetris",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
    text: "Harnessing the power of JavaScript, our Tetris game delivers an immersive gaming experience right in your browser. Rotate and stack blocks strategically to clear lines and achieve high scores, offering endless hours of addictive fun for players of all ages.",
    link: "tetris.html"
  }
]
// Select Items
const img = document.getElementById("recentProjectsImg");
const description = document.getElementById("recentProjectsDescription");
const link = document.getElementById("projectLink");
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
const randomBtn = document.querySelector('.randomBtn')
// Set starting item
let currentItem = 0;
// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  showProject();
});
// Show recent project based on item
function showProject() {
  const item = recentProjects[currentItem];
  img.src = item.link;
  description.textContent = item.text;
  link.href = item.link;
}
// Show next project
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > recentProjects.length - 1) {
    currentItem = 0;
  }
  showProject();
});
// Show prev project
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = recentProjects.length - 1;
  }
  showProject();
});
// Show random project
randomBtn.addEventListener('click', function() {
  let rand = Math.floor(Math.random() * 4);
  while (rand === currentItem) {
    rand = Math.floor(Math.random() * 4);
  }
  currentItem = rand;
  showProject();
});
// Loop through projects every 10 seconds
function loopProjects() {
  currentItem++;
  if (currentItem > recentProjects.length - 1) {
    currentItem = 0;
  }
  showProject();
}
setInterval(loopProjects, 10000);

/*
// Changes logo color
function colorChanger() {
	let x = document.getElementById("logo");
	x.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
  
// Logo animation on click
*/