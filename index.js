function scrollHeader() {
	const ele = document.getElementsByClassName('header-items');
	const logo = document.getElementById("logo-image");
	const header = document.getElementById("header");
	if(document.body.scrollTop>=80) {
		header.style.height="3.5vw";
		logo.style.height="3vw";
		logo.style.width ="3vw";
		for(let i=0;i<ele.length;i++) {
			ele[i].classList.add("header-items-scrolled"); 
		}
	}
	else {
		header.style.height="7vw";
		logo.style.height="6vw";
		logo.style.width ="6vw";
		for(let i=0;i<ele.length;i++) {
			ele[i].classList.remove("header-items-scrolled"); 
		}
	}
} 