function colorChanger() {
	let x = document.getElementById("logo");
	x.style.background = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}