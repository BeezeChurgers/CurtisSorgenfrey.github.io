// Changes logo color
function colorChanger() {
	let x = document.getElementById("logo");
	x.style.background = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }
  
  // Logo animation on click
  
  // Play animation when section title is visible
  let recentProjectsTitle = document.getElementById("projectFlow");
  let elementIsVisibleInViewport = false;
  
  function logoAppear() {
	  var {
		top,
		left,
		bottom,
		right
	  } = recentProjectsTitle.getBoundingClientRect();
	  const {
		innerHeight,
		innerWidth
	  } = window;
	  if (((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))) {
			  elementIsVisibleInViewport = true;
		  }
		  if (elementIsVisibleInViewport) {
			  recentProjectsTitle.classList.add("test");
		  } else {
			  recentProjectsTitle.classList.remove("test");
		  }
		  elementIsVisibleInViewport = false;
  }