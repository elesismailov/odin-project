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




(0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
console.log (" hello from set up !!!")

const content = document.querySelector("#content");

const landing = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
const tabs = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])()


// document.body.appendChild(LandingPage())
content.appendChild(landing)
content.appendChild(tabs)

// setTimeout(() => landing.remove(), 2000)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0x1QztBQUNWOztBQUU3Qix1REFBVztBQUNYOztBQUVBOztBQUVBLGdCQUFnQix1REFBVztBQUMzQixhQUFhLG9EQUFJOzs7QUFHakI7QUFDQTtBQUNBOztBQUVBLDJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcblxuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0aW50cm8uaWQgPSBcImludHJvXCI7XG5cdGgxLmlubmVySFRNTCA9IFwiQSBwZXJmZWN0IHBsYWNlIGZvciBhIG5pZ2h0XCI7XG5cblx0ZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG5cdHAxLmlubmVySFRNTCA9IFwiVGhlIExvdW5nZSBoYXMgZml2ZSBiYXIgc2VhdHMsIGEgcGx1c2ggYmFucXVldHRlIHRoYXQgc2VhdHMgdGVuLCBhIHJvb215IGxvdW5nZSBiYW5xdWV0dGUgdGhhdCBzZWF0cyB0d2VsdmUgYW5kIHR3byBtb3JlIHN0b29scyBvZmYgdG8gdGhlIGNvcm5lci4gSXQgYWxzbyBoYXMgdHdvIGJhcnRlbmRpbmcgc3RhdGlvbnMgdG8ga2VlcCB0aGUgZHJpbmtzIGZsb3dpbmcsIGxhcmdlIGJyb256ZWQgbWlycm9ycyBvbiB0aGUgd2FsbHMsIGJsYWNrZW5lZCBtaXJyb3JzIG9uIHRoZSBjZWlsaW5nLCBhbiBpbnRpbWF0ZSBkYW5jZSBmbG9vciB3aXRoIHBlbm55IHRpbGVzIGZyb20gdGhlIG9yaWdpbmFsIGhvdGVsIGJhY2sgaW4gMTg4MOKAmXMsIGl0cyBvd24gcHJpdmF0ZSBlbnRyeSBhbmQgZXhpdCwgYW5kIGEgY2F2ZS1saWtlLCBmdWxsIGJhdGhyb29tLlwiO1xuXHRwMi5pbm5lckhUTUwgPSBcIldoZW4gdXNpbmcgVGhlIExvdW5nZSB0byBob3N0IHlvdXIgZXZlbnQgaXQgY2FuIHBsYXkgaXRzIG93biBtdXNpYywgaGFzIGFuIGludGltYXRlIGRhbmNlIGZsb29yLCBhbmQgaGFzIHRoZSBhYmlsaXR5IHRvIHByb2plY3Qgb250byB0aGUgd2FsbHMgZm9yIHByaXZhdGUgc2NyZWVuaW5ncywgYmlnIGdhbWVzIG9yIGF3YXJkIHNob3dzLiBcIjtcblxuXHRpbnRyby5hcHBlbmRDaGlsZChoMSk7XG5cblx0ZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocDEpO1xuXHRkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwMik7XG5cblx0d3JhcHBlci5hcHBlbmRDaGlsZChpbnRybylcblx0d3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuXHRyZXR1cm4gd3JhcHBlclxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJzKCkge1xuXHRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCIuL2xhbmRpbmcuanNcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL3RhYnMuanNcIjtcblxuTGFuZGluZ1BhZ2UoKVxuY29uc29sZS5sb2cgKFwiIGhlbGxvIGZyb20gc2V0IHVwICEhIVwiKVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBsYW5kaW5nID0gTGFuZGluZ1BhZ2UoKVxuY29uc3QgdGFicyA9IFRhYnMoKVxuXG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTGFuZGluZ1BhZ2UoKSlcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobGFuZGluZylcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFicylcblxuLy8gc2V0VGltZW91dCgoKSA9PiBsYW5kaW5nLnJlbW92ZSgpLCAyMDAwKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==