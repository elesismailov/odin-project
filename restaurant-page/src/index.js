
import LandingPage from "./landing.js";
import Tabs from "./tabs.js";

LandingPage()
console.log (" hello from set up !!!")

const content = document.querySelector("#content");

const landing = LandingPage()
const tabs = Tabs()


// document.body.appendChild(LandingPage())
content.appendChild(landing)
content.appendChild(tabs)

// setTimeout(() => landing.remove(), 2000)