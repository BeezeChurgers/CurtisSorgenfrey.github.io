// Changes logo color
function colorChanger() {
	let x = document.getElementById("logo");
	x.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
  
// Logo animation on click

  
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