
import LandingPage from "./landing.js";
import Tabs from "./tabs.js";
import Menu from "./menu.js";
import ReservePage from "./reserve.js";

LandingPage()

const content = document.querySelector("#content");

const tabs = Tabs()
const landing = LandingPage()
const menu = Menu()
const reserve = ReservePage()

content.appendChild(tabs)
content.appendChild(landing)
tabs.sticky(tabs.home)
// content.appendChild(reserve)

tabs.home.onclick = function(event) {
	reserve.remove()
	menu.remove()
	content.appendChild(landing)
	tabs.sticky(tabs.home)
}
tabs.menu.onclick = function(event) {
	landing.remove()
	reserve.remove()
	content.appendChild(menu)
	tabs.sticky(tabs.menu)
}
tabs.reserve.onclick = function(event) {
	landing.remove()
	menu.remove()
	content.appendChild(reserve)
	tabs.sticky(tabs.reserve)
}

