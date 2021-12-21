
import LandingPage from "./landing.js";
import Tabs from "./tabs.js";
import Menu from "./menu.js";
import ReservePage from "./reserve.js";

LandingPage()

const content = document.querySelector("#content");

const landing = LandingPage()
const tabs = Tabs()
const menu = Menu()
const reserve = ReservePage()

content.appendChild(tabs)
content.appendChild(landing)

tabs.home.onclick = function(event) {
	reserve.remove()
	menu.remove()
	content.appendChild(landing)
}
tabs.menu.onclick = function(event) {
	landing.remove()
	reserve.remove()
	content.appendChild(menu)
}
tabs.reserve.onclick = function(event) {
	landing.remove()
	menu.remove()
	content.appendChild(reserve)
}

