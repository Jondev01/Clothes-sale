var hamburger = document.getElementsByClassName('hamburger')[0];
hamburger.addEventListener("click", displaySidebar);

function showDrop(){
	let el = document.getElementsByClassName('drop-down')[0];
	if(el.style.display == "block")
		el.style.display = "none";
	else el.style.display = "block";
}

function displaySidebar(){
	let sideBar = document.getElementsByTagName('nav')[0];
	if(sideBar.style.display == "none"){
		document.getElementsByClassName('container')[0].style.opacity = 0.5;
		sideBar.style.display = "block";
	}
	else{
		document.getElementsByClassName('container')[0].style.opacity = 1;
		sideBar.style.display = "none";
	}
}