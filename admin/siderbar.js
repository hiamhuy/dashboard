const toggle = document.querySelector(".toggle-nav i");
const nav = document.getElementById("siderbar");

toggle.addEventListener("click", () => {
	nav.classList.toggle("mini-siderbar");
});

if (window.innerWidth < 768) {
	nav.classList.add("mini-siderbar");
}

const navLinks = document.querySelectorAll(".item-link li");
const iconShowNav = document.querySelector(".icon i");
const listLinkChild = document.querySelector(".child-link");

// function showListLink() {
// 	iconShowNav.addEventListener("click", () => {
// 		if (listLinkChild.classList.contains("block")) {
// 			listLinkChild.classList.remove("block");
// 		} else {
// 			listLinkChild.classList.add("block");
// 		}
// 	});
// }
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.forEach((l) => {
			l.classList.remove("active");
		});
		link.classList.add("active");
		// showListLink();
	});
});
