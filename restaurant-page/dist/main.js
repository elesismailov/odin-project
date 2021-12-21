/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage)
/* harmony export */ });


function LandingPage() {

	const wrapper = document.createElement("main");
	const intro = document.createElement("section");
	const h1 = document.createElement("h1");

	const description = document.createElement("section");
	const p1 = document.createElement("p");
	const p2 = document.createElement("p");

	intro.id = "intro";
	h1.innerHTML = "A perfect place for a night";

	description.id = "description";
	p1.innerHTML = "The Lounge has five bar seats, a plush banquette that seats ten, a roomy lounge banquette that seats twelve and two more stools off to the corner. It also has two bartending stations to keep the drinks flowing, large bronzed mirrors on the walls, blackened mirrors on the ceiling, an intimate dance floor with penny tiles from the original hotel back in 1880’s, its own private entry and exit, and a cave-like, full bathroom.";
	p2.innerHTML = "When using The Lounge to host your event it can play its own music, has an intimate dance floor, and has the ability to project onto the walls for private screenings, big games or award shows. ";

	intro.appendChild(h1);

	description.appendChild(p1);
	description.appendChild(p2);

	wrapper.appendChild(intro)
	wrapper.appendChild(description)

	return wrapper
}

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const menuItems = [
	{
		title: "Keep it up",
		imgURL: "./assets/images/1.jpg"
	},
	{
		title: "Fly Ahead",
		imgURL: "./assets/images/2.jpg"
	},
	{
		title: "Brain Bone",
		imgURL: "./assets/images/3.jpg"
	},
	{
		title: "Alias Down",
		imgURL: "./assets/images/4.jpg"
	},
	{
		title: "Veritgo Beach",
		imgURL: "./assets/images/5.jpg"
	},
	{
		title: "Downright Leave",
		imgURL: "./assets/images/6.jpg"
	},
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _menu_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items.js */ "./src/menu-items.js");




function Menu() {

	const menu = document.createElement("section");
	const gridWrapper = document.createElement("div");
	const h1 = document.createElement("h1");

	menu.id = "menu";
	gridWrapper.className = "grid-wrapper";

	h1.innerHTML = "Menu";


	_menu_items_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach( item => {
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

/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReservePage)
/* harmony export */ });


function ReservePage() {

	const wrapper = document.createElement("section");
	const form = document.createElement("form");
	const p = document.createElement("p");
	const email = document.createElement("input");
	const number = document.createElement("input");
	const submit = document.createElement("button");

	wrapper.id = "reserve";

	email.placeholder = "example@email.com"
	email.type = "email";
	email.name = "email";

	number.placeholder = "+123 456 789";
	number.type = "text";
	number.name = "number";

	p.innerHTML = "Please fill out the form so we can contact you."

	submit.type = "submit";
	submit.innerHTML = "Reserve"

	form.appendChild(p);
	form.appendChild(email);
	form.appendChild(number);
	form.appendChild(submit);

	wrapper.appendChild(form)
	return wrapper;
}

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
/* harmony export */ });


function Tabs() {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/landing.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _reserve_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve.js */ "./src/reserve.js");






(0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

const content = document.querySelector("#content");

const tabs = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const landing = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
const reserve = (0,_reserve_js__WEBPACK_IMPORTED_MODULE_3__["default"])()

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7OztBQUd4Qjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQyw4REFBaUI7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHVDO0FBQ1Y7QUFDQTtBQUNVOztBQUV2Qyx1REFBVzs7QUFFWDs7QUFFQSxhQUFhLG9EQUFJO0FBQ2pCLGdCQUFnQix1REFBVztBQUMzQixhQUFhLG9EQUFJO0FBQ2pCLGdCQUFnQix1REFBVzs7QUFFM0IsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNlcnZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXHRjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGludHJvLmlkID0gXCJpbnRyb1wiO1xuXHRoMS5pbm5lckhUTUwgPSBcIkEgcGVyZmVjdCBwbGFjZSBmb3IgYSBuaWdodFwiO1xuXG5cdGRlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuXHRwMS5pbm5lckhUTUwgPSBcIlRoZSBMb3VuZ2UgaGFzIGZpdmUgYmFyIHNlYXRzLCBhIHBsdXNoIGJhbnF1ZXR0ZSB0aGF0IHNlYXRzIHRlbiwgYSByb29teSBsb3VuZ2UgYmFucXVldHRlIHRoYXQgc2VhdHMgdHdlbHZlIGFuZCB0d28gbW9yZSBzdG9vbHMgb2ZmIHRvIHRoZSBjb3JuZXIuIEl0IGFsc28gaGFzIHR3byBiYXJ0ZW5kaW5nIHN0YXRpb25zIHRvIGtlZXAgdGhlIGRyaW5rcyBmbG93aW5nLCBsYXJnZSBicm9uemVkIG1pcnJvcnMgb24gdGhlIHdhbGxzLCBibGFja2VuZWQgbWlycm9ycyBvbiB0aGUgY2VpbGluZywgYW4gaW50aW1hdGUgZGFuY2UgZmxvb3Igd2l0aCBwZW5ueSB0aWxlcyBmcm9tIHRoZSBvcmlnaW5hbCBob3RlbCBiYWNrIGluIDE4ODDigJlzLCBpdHMgb3duIHByaXZhdGUgZW50cnkgYW5kIGV4aXQsIGFuZCBhIGNhdmUtbGlrZSwgZnVsbCBiYXRocm9vbS5cIjtcblx0cDIuaW5uZXJIVE1MID0gXCJXaGVuIHVzaW5nIFRoZSBMb3VuZ2UgdG8gaG9zdCB5b3VyIGV2ZW50IGl0IGNhbiBwbGF5IGl0cyBvd24gbXVzaWMsIGhhcyBhbiBpbnRpbWF0ZSBkYW5jZSBmbG9vciwgYW5kIGhhcyB0aGUgYWJpbGl0eSB0byBwcm9qZWN0IG9udG8gdGhlIHdhbGxzIGZvciBwcml2YXRlIHNjcmVlbmluZ3MsIGJpZyBnYW1lcyBvciBhd2FyZCBzaG93cy4gXCI7XG5cblx0aW50cm8uYXBwZW5kQ2hpbGQoaDEpO1xuXG5cdGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHAxKTtcblx0ZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocDIpO1xuXG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW50cm8pXG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cblx0cmV0dXJuIHdyYXBwZXJcbn0iLCJcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiS2VlcCBpdCB1cFwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvMS5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiRmx5IEFoZWFkXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy8yLmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJCcmFpbiBCb25lXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy8zLmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBbGlhcyBEb3duXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy80LmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJWZXJpdGdvIEJlYWNoXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy81LmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJEb3ducmlnaHQgTGVhdmVcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzYuanBnXCJcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVJdGVtczsiLCJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vbWVudS1pdGVtcy5qc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcblxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cblx0bWVudS5pZCA9IFwibWVudVwiO1xuXHRncmlkV3JhcHBlci5jbGFzc05hbWUgPSBcImdyaWQtd3JhcHBlclwiO1xuXG5cdGgxLmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG5cblx0bWVudUl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cblx0XHR3cmFwcGVyLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG5cdFx0aDIuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcblx0XHRpbWcuc3JjID0gaXRlbS5pbWdVUkw7XG5cblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGgyKVxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKVxuXG5cdFx0Z3JpZFdyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlcilcblx0fSlcblxuXG5cdG1lbnUuYXBwZW5kQ2hpbGQoaDEpXG5cdG1lbnUuYXBwZW5kQ2hpbGQoZ3JpZFdyYXBwZXIpXG5cblx0cmV0dXJuIG1lbnVcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2ZVBhZ2UoKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXHR3cmFwcGVyLmlkID0gXCJyZXNlcnZlXCI7XG5cblx0ZW1haWwucGxhY2Vob2xkZXIgPSBcImV4YW1wbGVAZW1haWwuY29tXCJcblx0ZW1haWwudHlwZSA9IFwiZW1haWxcIjtcblx0ZW1haWwubmFtZSA9IFwiZW1haWxcIjtcblxuXHRudW1iZXIucGxhY2Vob2xkZXIgPSBcIisxMjMgNDU2IDc4OVwiO1xuXHRudW1iZXIudHlwZSA9IFwidGV4dFwiO1xuXHRudW1iZXIubmFtZSA9IFwibnVtYmVyXCI7XG5cblx0cC5pbm5lckhUTUwgPSBcIlBsZWFzZSBmaWxsIG91dCB0aGUgZm9ybSBzbyB3ZSBjYW4gY29udGFjdCB5b3UuXCJcblxuXHRzdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XG5cdHN1Ym1pdC5pbm5lckhUTUwgPSBcIlJlc2VydmVcIlxuXG5cdGZvcm0uYXBwZW5kQ2hpbGQocCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXHRmb3JtLmFwcGVuZENoaWxkKG51bWJlcik7XG5cdGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuXHR3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5cdHJldHVybiB3cmFwcGVyO1xufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJzKCkge1xuXG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgcmVzZXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IGZvbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG5cdGZvbGxvdy5pZCA9IFwidGFiLXN0aWNreVwiO1xuXG5cdG5hdi5pZCA9IFwidGFic1wiO1xuXG5cdGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cdG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XHRcblx0cmVzZXJ2ZS5pbm5lckhUTUwgPSBcIlJlc2VydmVcIjtcblxuXHRob21lLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiMFwiKVx0XG5cdG1lbnUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIxXCIpXG5cdHJlc2VydmUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIyXCIpXG5cblx0aG9tZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWVcIil9XG5cblx0bmF2LmFwcGVuZENoaWxkKGhvbWUpXG5cdG5hdi5hcHBlbmRDaGlsZChtZW51KVxuXHRuYXYuYXBwZW5kQ2hpbGQocmVzZXJ2ZSlcblxuXHRuYXYuaG9tZSA9IGhvbWU7XG5cdG5hdi5tZW51ID0gbWVudTtcblx0bmF2LnJlc2VydmUgPSByZXNlcnZlO1xuXG5cdG5hdi5zdGlja3kgPSBmdW5jdGlvbihlbCkge1xuXHRcdGZvbGxvdy5yZW1vdmUoKVxuXHRcdGVsLmFwcGVuZENoaWxkKGZvbGxvdylcblx0fVxuXG5cdHJldHVybiBuYXZcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL2xhbmRpbmcuanNcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL3RhYnMuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBSZXNlcnZlUGFnZSBmcm9tIFwiLi9yZXNlcnZlLmpzXCI7XG5cbkxhbmRpbmdQYWdlKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgdGFicyA9IFRhYnMoKVxuY29uc3QgbGFuZGluZyA9IExhbmRpbmdQYWdlKClcbmNvbnN0IG1lbnUgPSBNZW51KClcbmNvbnN0IHJlc2VydmUgPSBSZXNlcnZlUGFnZSgpXG5cbmxhbmRpbmcuc2NybCA9IHt0b3A6IDAsIGxlZnQ6IDB9XG5tZW51LnNjcmwgPSB7dG9wOiAwLCBsZWZ0OiAwfVxucmVzZXJ2ZS5zY3JsID0ge3RvcDogMCwgbGVmdDogMH1cblxuY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKVxuY29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxudGFicy5zdGlja3kodGFicy5ob21lKVxuLy8gY29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlKVxuXG50YWJzLmhvbWUub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdHJlc2VydmUuc2NybC50b3AgPSB3aW5kb3cuc2Nyb2xsWVxuXHRtZW51LnNjcmwudG9wID0gd2luZG93LnNjcm9sbFlcblxuXHRyZXNlcnZlLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxuXHR0YWJzLnN0aWNreSh0YWJzLmhvbWUpXG5cdHdpbmRvdy5zY3JvbGxUbyhsYW5kaW5nLnNjcmwpXG59XG50YWJzLm1lbnUub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGxhbmRpbmcuc2NybC50b3AgPSB3aW5kb3cuc2Nyb2xsWVxuXHRyZXNlcnZlLnNjcmwudG9wID0gd2luZG93LnNjcm9sbFlcblxuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdHJlc2VydmUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChtZW51KVxuXHR0YWJzLnN0aWNreSh0YWJzLm1lbnUpXG5cdHdpbmRvdy5zY3JvbGxUbyhtZW51LnNjcmwpXG59XG50YWJzLnJlc2VydmUub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGxhbmRpbmcuc2NybC50b3AgPSB3aW5kb3cuc2Nyb2xsWVxuXHRtZW51LnNjcmwudG9wID0gd2luZG93LnNjcm9sbFlcblxuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlKVxuXHR0YWJzLnN0aWNreSh0YWJzLnJlc2VydmUpXG5cdHdpbmRvdy5zY3JvbGxUbyhyZXNlcnZlLnNjcmwpXG59XG4vKlxuUFJPQkxFTTogXG53aGVuIGJldHdlZW4gdGFicyBza2lwcGluZyB0aGUgbmVlZCBzY3JvbGxlZCB0YWIsXG50aGUgc2Nyb2xsIHZhbHVlIGlzIG92ZXJyaWRlblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=