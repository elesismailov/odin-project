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





(0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()

const content = document.querySelector("#content");

const landing = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
const tabs = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7OztBQUd4Qjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQyw4REFBaUI7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTHVDO0FBQ1Y7QUFDQTs7QUFFN0IsdURBQVc7O0FBRVg7O0FBRUEsZ0JBQWdCLHVEQUFXO0FBQzNCLGFBQWEsb0RBQUk7QUFDakIsYUFBYSxvREFBSTs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1pdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKCkge1xuXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblx0Y29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRpbnRyby5pZCA9IFwiaW50cm9cIjtcblx0aDEuaW5uZXJIVE1MID0gXCJBIHBlcmZlY3QgcGxhY2UgZm9yIGEgbmlnaHRcIjtcblxuXHRkZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcblx0cDEuaW5uZXJIVE1MID0gXCJUaGUgTG91bmdlIGhhcyBmaXZlIGJhciBzZWF0cywgYSBwbHVzaCBiYW5xdWV0dGUgdGhhdCBzZWF0cyB0ZW4sIGEgcm9vbXkgbG91bmdlIGJhbnF1ZXR0ZSB0aGF0IHNlYXRzIHR3ZWx2ZSBhbmQgdHdvIG1vcmUgc3Rvb2xzIG9mZiB0byB0aGUgY29ybmVyLiBJdCBhbHNvIGhhcyB0d28gYmFydGVuZGluZyBzdGF0aW9ucyB0byBrZWVwIHRoZSBkcmlua3MgZmxvd2luZywgbGFyZ2UgYnJvbnplZCBtaXJyb3JzIG9uIHRoZSB3YWxscywgYmxhY2tlbmVkIG1pcnJvcnMgb24gdGhlIGNlaWxpbmcsIGFuIGludGltYXRlIGRhbmNlIGZsb29yIHdpdGggcGVubnkgdGlsZXMgZnJvbSB0aGUgb3JpZ2luYWwgaG90ZWwgYmFjayBpbiAxODgw4oCZcywgaXRzIG93biBwcml2YXRlIGVudHJ5IGFuZCBleGl0LCBhbmQgYSBjYXZlLWxpa2UsIGZ1bGwgYmF0aHJvb20uXCI7XG5cdHAyLmlubmVySFRNTCA9IFwiV2hlbiB1c2luZyBUaGUgTG91bmdlIHRvIGhvc3QgeW91ciBldmVudCBpdCBjYW4gcGxheSBpdHMgb3duIG11c2ljLCBoYXMgYW4gaW50aW1hdGUgZGFuY2UgZmxvb3IsIGFuZCBoYXMgdGhlIGFiaWxpdHkgdG8gcHJvamVjdCBvbnRvIHRoZSB3YWxscyBmb3IgcHJpdmF0ZSBzY3JlZW5pbmdzLCBiaWcgZ2FtZXMgb3IgYXdhcmQgc2hvd3MuIFwiO1xuXG5cdGludHJvLmFwcGVuZENoaWxkKGgxKTtcblxuXHRkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwMSk7XG5cdGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHAyKTtcblxuXHR3cmFwcGVyLmFwcGVuZENoaWxkKGludHJvKVxuXHR3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG5cdHJldHVybiB3cmFwcGVyXG59IiwiXG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcblx0e1xuXHRcdHRpdGxlOiBcIktlZXAgaXQgdXBcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzEuanBnXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkZseSBBaGVhZFwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvMi5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQnJhaW4gQm9uZVwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvMy5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQWxpYXMgRG93blwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvNC5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiVmVyaXRnbyBCZWFjaFwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvNS5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiRG93bnJpZ2h0IExlYXZlXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy82LmpwZ1wiXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbXM7IiwiXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gXCIuL21lbnUtaXRlbXMuanNcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG5cblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBncmlkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5cdG1lbnUuaWQgPSBcIm1lbnVcIjtcblx0Z3JpZFdyYXBwZXIuY2xhc3NOYW1lID0gXCJncmlkLXdyYXBwZXJcIjtcblxuXHRoMS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuXG5cdG1lbnVJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG5cdFx0d3JhcHBlci5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuXHRcdGgyLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG5cdFx0aW1nLnNyYyA9IGl0ZW0uaW1nVVJMO1xuXG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChoMilcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGltZylcblxuXHRcdGdyaWRXcmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpXG5cdH0pXG5cblxuXHRtZW51LmFwcGVuZENoaWxkKGgxKVxuXHRtZW51LmFwcGVuZENoaWxkKGdyaWRXcmFwcGVyKVxuXG5cdHJldHVybiBtZW51XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYnMoKSB7XG5cblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0Y29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCByZXNlcnZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXHRuYXYuaWQgPSBcInRhYnNcIjtcblxuXHRob21lLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuXHRtZW51LmlubmVySFRNTCA9IFwiTWVudVwiO1x0XG5cdHJlc2VydmUuaW5uZXJIVE1MID0gXCJSZXNlcnZlXCI7XG5cblx0aG9tZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcIjBcIilcdFxuXHRtZW51LnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiMVwiKVxuXHRyZXNlcnZlLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiMlwiKVxuXG5cdGhvbWUub25jbGljayA9IGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKFwidGhpcyBpcyBob21lXCIpfVxuXG5cdG5hdi5hcHBlbmRDaGlsZChob21lKVxuXHRuYXYuYXBwZW5kQ2hpbGQobWVudSlcblx0bmF2LmFwcGVuZENoaWxkKHJlc2VydmUpXG5cblx0bmF2LmhvbWUgPSBob21lO1xuXHRuYXYubWVudSA9IG1lbnU7XG5cdG5hdi5yZXNlcnZlID0gcmVzZXJ2ZTtcblxuXHRyZXR1cm4gbmF2XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tIFwiLi9sYW5kaW5nLmpzXCI7XG5pbXBvcnQgVGFicyBmcm9tIFwiLi90YWJzLmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbkxhbmRpbmdQYWdlKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbGFuZGluZyA9IExhbmRpbmdQYWdlKClcbmNvbnN0IHRhYnMgPSBUYWJzKClcbmNvbnN0IG1lbnUgPSBNZW51KClcblxuY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKVxuY29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxuXG50YWJzLmhvbWUub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxufVxudGFicy5tZW51Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcbn1cbnRhYnMucmVzZXJ2ZS5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gbWVudS5yZW1vdmUoKVxuXHQvLyBjb250ZW50LmFwcGVuZENoaWxkKGxhbmRpbmcpXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==