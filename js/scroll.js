/* Scroll*/
document.addEventListener("scroll", function() {
	topMenuSize = document.getElementById("top_header").clientHeight 
	if (window.pageYOffset > topMenuSize) {
		document.getElementById("menu_container").classList.add("fixedMenu")
		document.getElementById("content_container").classList.add("fixedMainContainer")
	}
	else {
		document.getElementById("menu_container").classList.remove("fixedMenu")
		document.getElementById("content_container").classList.remove("fixedMainContainer")
	}
});
