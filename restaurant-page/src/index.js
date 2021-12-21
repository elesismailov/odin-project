
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

landing.scrl = {top: 0, left: 0}
menu.scrl = {top: 0, left: 0}
reserve.scrl = {top: 0, left: 0}

content.appendChild(tabs)
content.appendChild(landing)
tabs.sticky(tabs.home)
// content.appendChild(reserve)

tabs.home.onclick = function(event) {
	reserve.scrl.top = window.scrollY
	menu.scrl.top = window.scrollY

	reserve.remove()
	menu.remove()
	content.appendChild(landing)
	tabs.sticky(tabs.home)
	window.scrollTo(landing.scrl)
}
tabs.menu.onclick = function(event) {
	landing.scrl.top = window.scrollY
	reserve.scrl.top = window.scrollY

	landing.remove()
	reserve.remove()
	content.appendChild(menu)
	tabs.sticky(tabs.menu)
	window.scrollTo(menu.scrl)
}
tabs.reserve.onclick = function(event) {
	landing.scrl.top = window.scrollY
	menu.scrl.top = window.scrollY

	landing.remove()
	menu.remove()
	content.appendChild(reserve)
	tabs.sticky(tabs.reserve)
	window.scrollTo(reserve.scrl)
}
/*
PROBLEM: 
when between tabs skipping the need scrolled tab,
the scroll value is overriden
*/