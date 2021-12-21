
import menuItems from "./menu-items.js"


export default function Menu() {

	const menu = document.createElement("section");
	const gridWrapper = document.createElement("div");
	const h1 = document.createElement("h1");

	menu.id = "menu";
	gridWrapper.className = "grid-wrapper";

	h1.innerHTML = "Menu";


	menuItems.forEach( item => {
		const wrapper = document.createElement("div");
		const h2 = document.createElement("h2");
		const img = document.createElement("img");

		wrapper.className = "menu-item";
		h2.innerHTML = item.title;
		img.src = item.imgURL;

		wrapper.appendChild(h2)
		wrapper.appendChild(img)

		gridWrapper.appendChild(wrapper)
	})


	menu.appendChild(h1)
	menu.appendChild(gridWrapper)

	return menu
}