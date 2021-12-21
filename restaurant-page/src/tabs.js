

export default function Tabs() {

	const nav = document.createElement("nav");
	const home = document.createElement("button");
	const menu = document.createElement("button");
	const reserve = document.createElement("button");
	const follow = document.createElement("span");

	follow.id = "tab-sticky";

	nav.id = "tabs";

	home.innerHTML = "Home";
	menu.innerHTML = "Menu";	
	reserve.innerHTML = "Reserve";

	home.setAttribute("data-tab", "0")	
	menu.setAttribute("data-tab", "1")
	reserve.setAttribute("data-tab", "2")

	home.onclick = function() {console.log("this is home")}

	nav.appendChild(home)
	nav.appendChild(menu)
	nav.appendChild(reserve)

	nav.home = home;
	nav.menu = menu;
	nav.reserve = reserve;

	nav.sticky = function(el) {
		follow.remove()
		el.appendChild(follow)
	}

	return nav
}