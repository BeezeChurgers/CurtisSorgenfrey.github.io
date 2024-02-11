// Mobile responsive size
var siteWidth = 1280;
var scale = screen.width /siteWidth;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

function colorChanger() {
	let x = document.getElementById("logo");
	x.style.background = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}