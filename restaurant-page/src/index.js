
import LandingPage from "./landing.js";
import Tabs from "./tabs.js";
import Menu from "./menu.js";

LandingPage()

const content = document.querySelector("#content");

const landing = LandingPage()
const tabs = Tabs()
const menu = Menu()

// document.body.appendChild(LandingPage())
content.appendChild(tabs)
content.appendChild(menu)
// content.appendChild(landing)

// setTimeout(() => landing.remove(), 2000)