// Sticky Navbar

window.onscroll = function () {myFunction()};
var header = document.getElementsById("navbarSupportedContent");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}