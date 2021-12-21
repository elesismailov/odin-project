
import LandingPage from "./landing.js";
import Tabs from "./tabs.js";
import Menu from "./menu.js";

LandingPage()

const content = document.querySelector("#content");

const landing = LandingPage()
const tabs = Tabs()
const menu = Menu()

content.appendChild(tabs)
content.appendChild(landing)

tabs.home.onclick = function(event) {
	menu.remove()
	content.appendChild(landing)
}
tabs.menu.onclick = function(event) {
	landing.remove()
	content.appendChild(menu)
}
tabs.reserve.onclick = function(event) {
	// menu.remove()
	// content.appendChild(landing)
}

