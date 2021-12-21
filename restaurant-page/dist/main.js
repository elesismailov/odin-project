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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7OztBQUd4Qjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQyw4REFBaUI7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHVDO0FBQ1Y7QUFDQTtBQUNVOztBQUV2Qyx1REFBVzs7QUFFWDs7QUFFQSxhQUFhLG9EQUFJO0FBQ2pCLGdCQUFnQix1REFBVztBQUMzQixhQUFhLG9EQUFJO0FBQ2pCLGdCQUFnQix1REFBVzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2VydmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcblxuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0aW50cm8uaWQgPSBcImludHJvXCI7XG5cdGgxLmlubmVySFRNTCA9IFwiQSBwZXJmZWN0IHBsYWNlIGZvciBhIG5pZ2h0XCI7XG5cblx0ZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG5cdHAxLmlubmVySFRNTCA9IFwiVGhlIExvdW5nZSBoYXMgZml2ZSBiYXIgc2VhdHMsIGEgcGx1c2ggYmFucXVldHRlIHRoYXQgc2VhdHMgdGVuLCBhIHJvb215IGxvdW5nZSBiYW5xdWV0dGUgdGhhdCBzZWF0cyB0d2VsdmUgYW5kIHR3byBtb3JlIHN0b29scyBvZmYgdG8gdGhlIGNvcm5lci4gSXQgYWxzbyBoYXMgdHdvIGJhcnRlbmRpbmcgc3RhdGlvbnMgdG8ga2VlcCB0aGUgZHJpbmtzIGZsb3dpbmcsIGxhcmdlIGJyb256ZWQgbWlycm9ycyBvbiB0aGUgd2FsbHMsIGJsYWNrZW5lZCBtaXJyb3JzIG9uIHRoZSBjZWlsaW5nLCBhbiBpbnRpbWF0ZSBkYW5jZSBmbG9vciB3aXRoIHBlbm55IHRpbGVzIGZyb20gdGhlIG9yaWdpbmFsIGhvdGVsIGJhY2sgaW4gMTg4MOKAmXMsIGl0cyBvd24gcHJpdmF0ZSBlbnRyeSBhbmQgZXhpdCwgYW5kIGEgY2F2ZS1saWtlLCBmdWxsIGJhdGhyb29tLlwiO1xuXHRwMi5pbm5lckhUTUwgPSBcIldoZW4gdXNpbmcgVGhlIExvdW5nZSB0byBob3N0IHlvdXIgZXZlbnQgaXQgY2FuIHBsYXkgaXRzIG93biBtdXNpYywgaGFzIGFuIGludGltYXRlIGRhbmNlIGZsb29yLCBhbmQgaGFzIHRoZSBhYmlsaXR5IHRvIHByb2plY3Qgb250byB0aGUgd2FsbHMgZm9yIHByaXZhdGUgc2NyZWVuaW5ncywgYmlnIGdhbWVzIG9yIGF3YXJkIHNob3dzLiBcIjtcblxuXHRpbnRyby5hcHBlbmRDaGlsZChoMSk7XG5cblx0ZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocDEpO1xuXHRkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwMik7XG5cblx0d3JhcHBlci5hcHBlbmRDaGlsZChpbnRybylcblx0d3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuXHRyZXR1cm4gd3JhcHBlclxufSIsIlxuXG5jb25zdCBtZW51SXRlbXMgPSBbXG5cdHtcblx0XHR0aXRsZTogXCJLZWVwIGl0IHVwXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy8xLmpwZ1wiXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogXCJGbHkgQWhlYWRcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzIuanBnXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkJyYWluIEJvbmVcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzMuanBnXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkFsaWFzIERvd25cIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzQuanBnXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIlZlcml0Z28gQmVhY2hcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzUuanBnXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkRvd25yaWdodCBMZWF2ZVwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvNi5qcGdcIlxuXHR9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUl0ZW1zOyIsIlxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9tZW51LWl0ZW1zLmpzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgZ3JpZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuXHRtZW51LmlkID0gXCJtZW51XCI7XG5cdGdyaWRXcmFwcGVyLmNsYXNzTmFtZSA9IFwiZ3JpZC13cmFwcGVyXCI7XG5cblx0aDEuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cblxuXHRtZW51SXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Y29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuXHRcdHdyYXBwZXIuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcblx0XHRoMi5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xuXHRcdGltZy5zcmMgPSBpdGVtLmltZ1VSTDtcblxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpXG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChpbWcpXG5cblx0XHRncmlkV3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyKVxuXHR9KVxuXG5cblx0bWVudS5hcHBlbmRDaGlsZChoMSlcblx0bWVudS5hcHBlbmRDaGlsZChncmlkV3JhcHBlcilcblxuXHRyZXR1cm4gbWVudVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNlcnZlUGFnZSgpIHtcblxuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdHdyYXBwZXIuaWQgPSBcInJlc2VydmVcIjtcblxuXHRlbWFpbC5wbGFjZWhvbGRlciA9IFwiZXhhbXBsZUBlbWFpbC5jb21cIlxuXHRlbWFpbC50eXBlID0gXCJlbWFpbFwiO1xuXHRlbWFpbC5uYW1lID0gXCJlbWFpbFwiO1xuXG5cdG51bWJlci5wbGFjZWhvbGRlciA9IFwiKzEyMyA0NTYgNzg5XCI7XG5cdG51bWJlci50eXBlID0gXCJ0ZXh0XCI7XG5cdG51bWJlci5uYW1lID0gXCJudW1iZXJcIjtcblxuXHRwLmlubmVySFRNTCA9IFwiUGxlYXNlIGZpbGwgb3V0IHRoZSBmb3JtIHNvIHdlIGNhbiBjb250YWN0IHlvdS5cIlxuXG5cdHN1Ym1pdC50eXBlID0gXCJzdWJtaXRcIjtcblx0c3VibWl0LmlubmVySFRNTCA9IFwiUmVzZXJ2ZVwiXG5cblx0Zm9ybS5hcHBlbmRDaGlsZChwKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChlbWFpbCk7XG5cdGZvcm0uYXBwZW5kQ2hpbGQobnVtYmVyKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybSlcblx0cmV0dXJuIHdyYXBwZXI7XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYnMoKSB7XG5cblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0Y29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCByZXNlcnZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgZm9sbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cblx0Zm9sbG93LmlkID0gXCJ0YWItc3RpY2t5XCI7XG5cblx0bmF2LmlkID0gXCJ0YWJzXCI7XG5cblx0aG9tZS5pbm5lckhUTUwgPSBcIkhvbWVcIjtcblx0bWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcdFxuXHRyZXNlcnZlLmlubmVySFRNTCA9IFwiUmVzZXJ2ZVwiO1xuXG5cdGhvbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIwXCIpXHRcblx0bWVudS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcIjFcIilcblx0cmVzZXJ2ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcIjJcIilcblxuXHRob21lLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhcInRoaXMgaXMgaG9tZVwiKX1cblxuXHRuYXYuYXBwZW5kQ2hpbGQoaG9tZSlcblx0bmF2LmFwcGVuZENoaWxkKG1lbnUpXG5cdG5hdi5hcHBlbmRDaGlsZChyZXNlcnZlKVxuXG5cdG5hdi5ob21lID0gaG9tZTtcblx0bmF2Lm1lbnUgPSBtZW51O1xuXHRuYXYucmVzZXJ2ZSA9IHJlc2VydmU7XG5cblx0bmF2LnN0aWNreSA9IGZ1bmN0aW9uKGVsKSB7XG5cdFx0Zm9sbG93LnJlbW92ZSgpXG5cdFx0ZWwuYXBwZW5kQ2hpbGQoZm9sbG93KVxuXHR9XG5cblx0cmV0dXJuIG5hdlxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgTGFuZGluZ1BhZ2UgZnJvbSBcIi4vbGFuZGluZy5qc1wiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIi4vdGFicy5qc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IFJlc2VydmVQYWdlIGZyb20gXCIuL3Jlc2VydmUuanNcIjtcblxuTGFuZGluZ1BhZ2UoKVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCB0YWJzID0gVGFicygpXG5jb25zdCBsYW5kaW5nID0gTGFuZGluZ1BhZ2UoKVxuY29uc3QgbWVudSA9IE1lbnUoKVxuY29uc3QgcmVzZXJ2ZSA9IFJlc2VydmVQYWdlKClcblxuY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKVxuY29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxudGFicy5zdGlja3kodGFicy5ob21lKVxuLy8gY29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlKVxuXG50YWJzLmhvbWUub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdHJlc2VydmUucmVtb3ZlKClcblx0bWVudS5yZW1vdmUoKVxuXHRjb250ZW50LmFwcGVuZENoaWxkKGxhbmRpbmcpXG5cdHRhYnMuc3RpY2t5KHRhYnMuaG9tZSlcbn1cbnRhYnMubWVudS5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0bGFuZGluZy5yZW1vdmUoKVxuXHRyZXNlcnZlLnJlbW92ZSgpXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcblx0dGFicy5zdGlja3kodGFicy5tZW51KVxufVxudGFicy5yZXNlcnZlLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlKVxuXHR0YWJzLnN0aWNreSh0YWJzLnJlc2VydmUpXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==