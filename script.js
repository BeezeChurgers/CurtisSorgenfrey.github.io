// Recent Projects Carousel --------------------------------------------------
const recentProjects = [{
  id: 1,
  name: "calculator",
  img: "images/calculator.png",
  text: "Calculator equipped with fully functional clickable buttons. Dark mode uses \"prefers-color-scheme\" CSS method.",
  link: "calculator.html"
},
{
  id: 2,
  name: "tic-tac-toe",
  img: "https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-1024x1024-bmwf454z.png",
  text: "Tic Tac Toe game with both pvp and pve modes. PvE offers intelligent Neural Network computer player, learning as you play with the power of Brain.js.",
  link: "tictactoe.html"
},
{
  id: 3,
  name: "to-do list",
  img: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/10/google-keep-list.jpeg",
  text: "To Do List using iseditable elements.",
  link: "todolist.html"
},
{
  id: 4,
  name: "Tetris",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
  text: "Tetris uses flexbox structure, testing class lists to move tetrominoes. The game uses arrays to itterate colors, and intervals to increase play speed.",
  link: "tetris.html"
},
{
  id: 5,
  name: "Countdown",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
  text: "Simple countdown app.",
  link: "countdown.html"
},
{
  id: 6,
  name: "Audio Recorder",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
  text: "Audio recording app using blob and file objects, with automatic download and title.",
  link: "audiorecorder.html"
},
{
  id: 7,
  name: "Summarizer",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
  text: "Summarize your podcast or video with the power of Transformers.js.",
  link: "summarizer.html"
}
]
// Select Items
const img = document.getElementById("recentProjectsImg");
const description = document.getElementById("recentProjectsDescription");
const link = document.getElementById("projectLink");
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const randomBtn = document.querySelector('.randomBtn');
// Set starting item
let currentItem = 0;
// Load initial item
window.addEventListener("DOMContentLoaded", function() {
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


// Qualifications Carousel --------------------------------------------------
const qualifications = [{
  id: 1,
  name: "HTML",
  img: "images/html.png",
  text: ""
},
{
  id: 2,
  name: "CSS",
  img: "images/css.png",
  text: ""
},
{
  id: 3,
  name: "JavaScript",
  img: "images/javascript.png",
  text: ""
},
/*
{
  id: 4,
  name: "git",
  img: "",
  text: ""
},
{
  id: 5,
  name: "TypeScript",
  img: "",
  text: ""
}
*/
]
// Select Items
const title = document.getElementById("qualificationsTitle");
const qDescription = document.getElementById("qualificationsDescription");
const qImg = document.getElementById("qualificationsImg");
// Set starting item
let currentItemQ = 0;
// Load initial item
window.addEventListener("DOMContentLoaded", function() {
showQualifications();
});
// Show recent project based on item
function showQualifications() {
const item = qualifications[currentItemQ];
title.innerText = item.name;
qImg.src = item.img;
qDescription.textContent = item.text;
}
/*
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
*/
// Loop through qualifications every 10 seconds
function loopQualifications() {
currentItemQ++;
if (currentItemQ > qualifications.length - 1) {
  currentItemQ = 0;
}
showQualifications();
}
setInterval(loopQualifications, 5000);
