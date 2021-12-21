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

const tabs = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const landing = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
const reserve = (0,_reserve_js__WEBPACK_IMPORTED_MODULE_3__["default"])()

content.appendChild(tabs)
content.appendChild(landing)
// content.appendChild(reserve)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7OztBQUd4Qjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsQ0FBQyw4REFBaUI7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0x1QztBQUNWO0FBQ0E7QUFDVTs7QUFFdkMsdURBQVc7O0FBRVg7O0FBRUEsYUFBYSxvREFBSTtBQUNqQixnQkFBZ0IsdURBQVc7QUFDM0IsYUFBYSxvREFBSTtBQUNqQixnQkFBZ0IsdURBQVc7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1pdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzZXJ2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKCkge1xuXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblx0Y29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRpbnRyby5pZCA9IFwiaW50cm9cIjtcblx0aDEuaW5uZXJIVE1MID0gXCJBIHBlcmZlY3QgcGxhY2UgZm9yIGEgbmlnaHRcIjtcblxuXHRkZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcblx0cDEuaW5uZXJIVE1MID0gXCJUaGUgTG91bmdlIGhhcyBmaXZlIGJhciBzZWF0cywgYSBwbHVzaCBiYW5xdWV0dGUgdGhhdCBzZWF0cyB0ZW4sIGEgcm9vbXkgbG91bmdlIGJhbnF1ZXR0ZSB0aGF0IHNlYXRzIHR3ZWx2ZSBhbmQgdHdvIG1vcmUgc3Rvb2xzIG9mZiB0byB0aGUgY29ybmVyLiBJdCBhbHNvIGhhcyB0d28gYmFydGVuZGluZyBzdGF0aW9ucyB0byBrZWVwIHRoZSBkcmlua3MgZmxvd2luZywgbGFyZ2UgYnJvbnplZCBtaXJyb3JzIG9uIHRoZSB3YWxscywgYmxhY2tlbmVkIG1pcnJvcnMgb24gdGhlIGNlaWxpbmcsIGFuIGludGltYXRlIGRhbmNlIGZsb29yIHdpdGggcGVubnkgdGlsZXMgZnJvbSB0aGUgb3JpZ2luYWwgaG90ZWwgYmFjayBpbiAxODgw4oCZcywgaXRzIG93biBwcml2YXRlIGVudHJ5IGFuZCBleGl0LCBhbmQgYSBjYXZlLWxpa2UsIGZ1bGwgYmF0aHJvb20uXCI7XG5cdHAyLmlubmVySFRNTCA9IFwiV2hlbiB1c2luZyBUaGUgTG91bmdlIHRvIGhvc3QgeW91ciBldmVudCBpdCBjYW4gcGxheSBpdHMgb3duIG11c2ljLCBoYXMgYW4gaW50aW1hdGUgZGFuY2UgZmxvb3IsIGFuZCBoYXMgdGhlIGFiaWxpdHkgdG8gcHJvamVjdCBvbnRvIHRoZSB3YWxscyBmb3IgcHJpdmF0ZSBzY3JlZW5pbmdzLCBiaWcgZ2FtZXMgb3IgYXdhcmQgc2hvd3MuIFwiO1xuXG5cdGludHJvLmFwcGVuZENoaWxkKGgxKTtcblxuXHRkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwMSk7XG5cdGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHAyKTtcblxuXHR3cmFwcGVyLmFwcGVuZENoaWxkKGludHJvKVxuXHR3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG5cdHJldHVybiB3cmFwcGVyXG59IiwiXG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcblx0e1xuXHRcdHRpdGxlOiBcIktlZXAgaXQgdXBcIixcblx0XHRpbWdVUkw6IFwiLi9hc3NldHMvaW1hZ2VzLzEuanBnXCJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkZseSBBaGVhZFwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvMi5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQnJhaW4gQm9uZVwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvMy5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiQWxpYXMgRG93blwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvNC5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiVmVyaXRnbyBCZWFjaFwiLFxuXHRcdGltZ1VSTDogXCIuL2Fzc2V0cy9pbWFnZXMvNS5qcGdcIlxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6IFwiRG93bnJpZ2h0IExlYXZlXCIsXG5cdFx0aW1nVVJMOiBcIi4vYXNzZXRzL2ltYWdlcy82LmpwZ1wiXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbXM7IiwiXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gXCIuL21lbnUtaXRlbXMuanNcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG5cblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBncmlkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5cdG1lbnUuaWQgPSBcIm1lbnVcIjtcblx0Z3JpZFdyYXBwZXIuY2xhc3NOYW1lID0gXCJncmlkLXdyYXBwZXJcIjtcblxuXHRoMS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuXG5cdG1lbnVJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG5cdFx0d3JhcHBlci5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuXHRcdGgyLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG5cdFx0aW1nLnNyYyA9IGl0ZW0uaW1nVVJMO1xuXG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChoMilcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGltZylcblxuXHRcdGdyaWRXcmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpXG5cdH0pXG5cblxuXHRtZW51LmFwcGVuZENoaWxkKGgxKVxuXHRtZW51LmFwcGVuZENoaWxkKGdyaWRXcmFwcGVyKVxuXG5cdHJldHVybiBtZW51XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2VydmVQYWdlKCkge1xuXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cblx0d3JhcHBlci5pZCA9IFwicmVzZXJ2ZVwiO1xuXG5cdGVtYWlsLnBsYWNlaG9sZGVyID0gXCJleGFtcGxlQGVtYWlsLmNvbVwiXG5cdGVtYWlsLnR5cGUgPSBcImVtYWlsXCI7XG5cdGVtYWlsLm5hbWUgPSBcImVtYWlsXCI7XG5cblx0bnVtYmVyLnBsYWNlaG9sZGVyID0gXCIrMTIzIDQ1NiA3ODlcIjtcblx0bnVtYmVyLnR5cGUgPSBcInRleHRcIjtcblx0bnVtYmVyLm5hbWUgPSBcIm51bWJlclwiO1xuXG5cdHAuaW5uZXJIVE1MID0gXCJQbGVhc2UgZmlsbCBvdXQgdGhlIGZvcm0gc28gd2UgY2FuIGNvbnRhY3QgeW91LlwiXG5cblx0c3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xuXHRzdWJtaXQuaW5uZXJIVE1MID0gXCJSZXNlcnZlXCJcblxuXHRmb3JtLmFwcGVuZENoaWxkKHApO1xuXHRmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcblx0Zm9ybS5hcHBlbmRDaGlsZChudW1iZXIpO1xuXHRmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cblx0d3JhcHBlci5hcHBlbmRDaGlsZChmb3JtKVxuXHRyZXR1cm4gd3JhcHBlcjtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFicygpIHtcblxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdG5hdi5pZCA9IFwidGFic1wiO1xuXG5cdGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XG5cdG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XHRcblx0cmVzZXJ2ZS5pbm5lckhUTUwgPSBcIlJlc2VydmVcIjtcblxuXHRob21lLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIFwiMFwiKVx0XG5cdG1lbnUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIxXCIpXG5cdHJlc2VydmUuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCIyXCIpXG5cblx0aG9tZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJ0aGlzIGlzIGhvbWVcIil9XG5cblx0bmF2LmFwcGVuZENoaWxkKGhvbWUpXG5cdG5hdi5hcHBlbmRDaGlsZChtZW51KVxuXHRuYXYuYXBwZW5kQ2hpbGQocmVzZXJ2ZSlcblxuXHRuYXYuaG9tZSA9IGhvbWU7XG5cdG5hdi5tZW51ID0gbWVudTtcblx0bmF2LnJlc2VydmUgPSByZXNlcnZlO1xuXG5cdHJldHVybiBuYXZcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL2xhbmRpbmcuanNcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL3RhYnMuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBSZXNlcnZlUGFnZSBmcm9tIFwiLi9yZXNlcnZlLmpzXCI7XG5cbkxhbmRpbmdQYWdlKClcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgdGFicyA9IFRhYnMoKVxuY29uc3QgbGFuZGluZyA9IExhbmRpbmdQYWdlKClcbmNvbnN0IG1lbnUgPSBNZW51KClcbmNvbnN0IHJlc2VydmUgPSBSZXNlcnZlUGFnZSgpXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFicylcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZylcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzZXJ2ZSlcblxudGFicy5ob21lLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRyZXNlcnZlLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nKVxufVxudGFicy5tZW51Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdHJlc2VydmUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChtZW51KVxufVxudGFicy5yZXNlcnZlLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRsYW5kaW5nLnJlbW92ZSgpXG5cdG1lbnUucmVtb3ZlKClcblx0Y29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlKVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=