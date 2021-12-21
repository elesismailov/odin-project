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

	const wrapper = document.createElement("div")

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

const landing = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
const tabs = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
const reserve = (0,_reserve_js__WEBPACK_IMPORTED_MODULE_3__["default"])()

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7OztBQUd4Qjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQyw4REFBaUI7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlOztBQUVmOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMdUM7QUFDVjtBQUNBO0FBQ1U7O0FBRXZDLHVEQUFXOztBQUVYOztBQUVBLGdCQUFnQix1REFBVztBQUMzQixhQUFhLG9EQUFJO0FBQ2pCLGFBQWEsb0RBQUk7QUFDakIsZ0JBQWdCLHVEQUFXOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sYW5kaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNlcnZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXHRjb25zdCBpbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGludHJvLmlkID0gXCJpbnRyb1wiO1xuXHRoMS5pbm5lckhUTUwgPSBcIkEgcGVyZmVjdCBwbGFjZSBmb3IgYSBuaWdodFwiO1xuXG5cdGRlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuXHRwMS5pbm5lckhUTUwgPSBcIlRoZSBMb3VuZ2UgaGFzIGZpdmUgYmFyIHNlYXRzLCBhIHBsdXNoIGJhbnF1ZXR0ZSB0aGF0IHNlYXRzIHRlbiwgYSByb29teSBsb3VuZ2UgYmFucXVldHRlIHRoYXQgc2VhdHMgdHdlbHZlIGFuZCB0d28gbW9yZSBzdG9vbHMgb2ZmIHRvIHRoZSBjb3JuZXIuIEl0IGFsc28gaGFzIHR3byBiYXJ0ZW5kaW5nIHN0YXRpb25zIHRvIGtlZXAgdGhlIGRyaW5rcyBmbG93aW5nLCBsYXJnZSBicm9uemVkIG1pcnJvcnMgb24gdGhlIHdhbGxzLCBibGFja2VuZWQgbWlycm9ycyBvbiB0aGUgY2VpbGluZywgYW4gaW50aW1hdGUgZGFuY2UgZmxvb3Igd2l0aCBwZW5ueSB0aWxlcyBmcm9tIHRoZSBvcmlnaW5hbCBob3RlbCBiYWNrIGluIDE4ODDigJlzLCBpdHMgb3duIHByaXZhdGUgZW50cnkgYW5kIGV4aXQsIGFuZCBhIGNhdmUtbGlrZSwgZnVsbCBiYXRocm9vbS5cIjtcblx0cDIuaW5uZXJIVE1MID0gXCJXaGVuIHVzaW5nIFRoZSBMb3VuZ2UgdG8gaG9zdCB5b3VyIGV2ZW50IGl0IGNhbiBwbGF5IGl0cyBvd24gbXVzaWMsIGhhcyBhbiBpbnRpbWF0ZSBkYW5jZSBmbG9vciwgYW5kIGhhcyB0aGUgYWJpbGl0eSB0byBwcm9qZWN0IG9udG8gdGhlIHdhbGxzIGZvciBwcml2YXRlIHNjcmVlbmluZ3MsIGJpZyBnYW1lcyBvciBhd2FyZCBzaG93cy4gXCI7XG5cblx0aW50cm8uYXBwZW5kQ2hpbGQoaDEpO1xuXG5cdGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHAxKTtcblx0ZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocDIpO1xuXG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW50cm8pXG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cblx0cmV0dXJuIHdyYXBwZXJcbn0iLCJcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuXHR7XG5cdFx0dGl0bGU6IFwiS2VlcCBpdCB1cFwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvMS5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiRmx5IEFoZWFkXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy8yLmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJCcmFpbiBCb25lXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy8zLmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJBbGlhcyBEb3duXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy80LmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJWZXJpdGdvIEJlYWNoXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy81LmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJEb3ducmlnaHQgTGVhdmVcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzYuanBnXCJcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVJdGVtczsiLCJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vbWVudS1pdGVtcy5qc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcblxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cblx0bWVudS5pZCA9IFwibWVudVwiO1xuXHRncmlkV3JhcHBlci5jbGFzc05hbWUgPSBcImdyaWQtd3JhcHBlclwiO1xuXG5cdGgxLmlubmVySFRNTCA9IFwiTWVudVwiO1xuXG5cblx0bWVudUl0ZW1zLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cblx0XHR3cmFwcGVyLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG5cdFx0aDIuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcblx0XHRpbWcuc3JjID0gaXRlbS5pbWdVUkw7XG5cblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGgyKVxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKVxuXG5cdFx0Z3JpZFdyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlcilcblx0fSlcblxuXG5cdG1lbnUuYXBwZW5kQ2hpbGQoaDEpXG5cdG1lbnUuYXBwZW5kQ2hpbGQoZ3JpZFdyYXBwZXIpXG5cblx0cmV0dXJuIG1lbnVcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXJ2ZVBhZ2UoKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuXHRyZXR1cm4gd3JhcHBlcjtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFicygpIHtcblxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdG5hdi5pZCA9IFwidGFic1wiO1xuXG5cdGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cdG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XHRcblx0cmVzZXJ2ZS5pbm5lckhUTUwgPSBcIlJlc2VydmVcIjtcblxuXHRob21lLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiMFwiKVx0XG5cdG1lbnUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIxXCIpXG5cdHJlc2VydmUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIyXCIpXG5cblx0aG9tZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWVcIil9XG5cblx0bmF2LmFwcGVuZENoaWxkKGhvbWUpXG5cdG5hdi5hcHBlbmRDaGlsZChtZW51KVxuXHRuYXYuYXBwZW5kQ2hpbGQocmVzZXJ2ZSlcblxuXHRuYXYuaG9tZSA9IGhvbWU7XG5cdG5hdi5tZW51ID0gbWVudTtcblx0bmF2LnJlc2VydmUgPSByZXNlcnZlO1xuXG5cdHJldHVybiBuYXZcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL2xhbmRpbmcuanNcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL3RhYnMuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBSZXNlcnZlUGFnZSBmcm9tIFwiLi9yZXNlcnZlLmpzXCI7XG5cbkxhbmRpbmdQYWdlKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbGFuZGluZyA9IExhbmRpbmdQYWdlKClcbmNvbnN0IHRhYnMgPSBUYWJzKClcbmNvbnN0IG1lbnUgPSBNZW51KClcbmNvbnN0IHJlc2VydmUgPSBSZXNlcnZlUGFnZSgpXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFicylcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZylcblxudGFicy5ob21lLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRyZXNlcnZlLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxufVxudGFicy5tZW51Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdHJlc2VydmUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChtZW51KVxufVxudGFicy5yZXNlcnZlLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlKVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=