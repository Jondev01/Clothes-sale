var hamburger = document.getElementsByClassName('hamburger')[0];
var sideBar = document.getElementsByTagName('nav')[0];
var container = document.getElementsByClassName('container')[0];
hamburger.addEventListener("click", displaySidebar);

function largeScreen(x){
	let nav = document.getElementsByTagName('nav')[0];
	if(x.matches){
		nav.style.display = "block";
		nav.style.overflow = "visible";
		container.style.opacity = 1;
		document.body.style.backgroundColor = "white";
	}

	else{
		nav.style.display = "none";
		nav.style.overflow = "scroll";
	}
}

function showDrop(){
	let el = document.getElementsByClassName('drop-down')[0];
	if(el.style.display == "block")
		el.style.display = "none";
	else el.style.display = "block";
}

function displaySidebar(){
	if(sideBar.style.display == "none"){
		container.style.opacity = 0.5;
		document.body.style.backgroundColor = "#aaa";
		sideBar.style.display = "block";
	}
	else{
		document.getElementsByClassName('container')[0].style.opacity = 1;
		sideBar.style.display = "none";
		document.body.style.backgroundColor = "white";
	}
}

var x = window.matchMedia("(min-width: 1130px)");
largeScreen(x);
x.addEventListener("change",largeScreen);
