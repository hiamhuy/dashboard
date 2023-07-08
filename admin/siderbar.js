const toggle = document.querySelector(".toggle-nav");
const nav = document.getElementById("sidebar");

toggle.addEventListener("click", () => {
	nav.classList.toggle("mini-sidebar");
});

if (window.innerWidth < 768) {
	nav.classList.add("mini-sidebar");
}
const navLinks = document.querySelectorAll(".item-link li");
const iconShowNav = document.querySelector(".icon i");
const listLinkChild = document.querySelectorAll(".child-link li");

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
listLinkChild.forEach((child) => {
	child.addEventListener("click", () => {
		listLinkChild.forEach((_child) => {
			_child.classList.remove("active-child");
		});
		child.classList.add("active-child");
	});
});

//Header
const action = ".action";
const classAction = document.querySelector(action);
const boxProfile = document.querySelector(".profile");
boxProfile.addEventListener("click", () => {
	setTimeout(() => {
		if (!classAction.classList.contains("active")) {
			classAction.classList.add("active");
		}
	}, 0);
});
document.addEventListener("click", (e) => {
	const isClosest = e.target.closest(action);
	if (!isClosest && classAction.classList.contains("active")) {
		classAction.classList.remove("active");
	}
});

//Sidebar Menu
class MenuItem {
	id;
	parentId;
	icon;
	title;
	route;
	isCollapsed;
	children = [MenuItem];

	constructor(id, parentId, icon, title, route, isCollapsed, children) {
		this.id = id;
		this.parentId = parentId;
		this.icon = icon;
		this.title = title;
		this.route = route;
		this.isCollapsed = isCollapsed;
		this.children = children;
	}
}

function getMenuItems() {
	return [
		new MenuItem("1", "", "a", "title", "/", "", "", []),
		new MenuItem("2", "", "b", "title", "/", "", "", [
			new MenuItem("1", "2", "ba", "test1", "/", ""),
			new MenuItem("2", "2", "c", "test2", "/"),
		]),
		new MenuItem("3", "", "c", "title", "/", "", "", []),
		new MenuItem("4", "", "d", "title", "/", "", "", []),
		new MenuItem("5", "", "e", "title", "/", "", "", []),
	];
}
let arr = getMenuItems();
console.log("arr", arr);
