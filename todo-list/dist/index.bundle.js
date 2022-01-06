/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%;\n}\n\n.colors {\n  --pretty-pink: #ff00f040;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: #fff none repeat scroll 0% 0%;\n  font-family: \"Helvetica\", sans-serif;\n  font-size: 1.6rem;\n}\n\nul, ol, li, details, summary {\n  list-style: none;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n}\n\n#sidebar {\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 6.4rem;\n  z-index: 99;\n}\n#sidebar nav {\n  background: #fff;\n  box-shadow: pink 1px 1px 35px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4.8rem 0 0;\n  gap: 2.8rem;\n}\n#sidebar nav .sidebar-icon {\n  background: #fff;\n  width: 4.8rem;\n  height: 4.8rem;\n  border-radius: 5rem;\n  font-size: 2.6rem;\n  transition: all 250ms linear;\n  position: relative;\n}\n#sidebar nav .sidebar-icon:hover {\n  border-radius: 1.5rem;\n}\n#sidebar nav .sidebar-icon .tooltip {\n  background: #333;\n  color: #fff;\n  border-radius: 7px;\n  font-size: 1.6rem;\n  padding: 1rem;\n  pointer-events: none;\n  position: absolute;\n  top: 0.6rem;\n  left: 75px;\n  width: max-content;\n  transition: 100ms linear;\n  transform: scale(0);\n}\n#sidebar nav .sidebar-icon:hover .tooltip {\n  transform: scale(1);\n}\n@media screen and (max-width: 600px) {\n  #sidebar {\n    height: 9vh;\n    width: 100vw;\n    top: unset;\n    bottom: 0;\n  }\n  #sidebar nav {\n    background: #fff;\n    width: 100%;\n    height: 100%;\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 0;\n  }\n  #sidebar nav .sidebar-icon {\n    background: #8762b1;\n    color: #fff;\n  }\n  #sidebar nav .sidebar-icon .tooltip {\n    display: none;\n  }\n}\n\n#all-projects {\n  margin-left: 6.4rem;\n  position: relative;\n  padding: 2.4rem;\n}\n#all-projects h1 {\n  color: #38162b;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#all-projects > ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));\n  gap: 2rem;\n  justify-items: center;\n}\n#all-projects > ul > li {\n  width: 25rem;\n  height: 25rem;\n}\n#all-projects > ul .project {\n  width: 25rem;\n  height: 25rem;\n  background: #fff;\n  box-shadow: 1px 8px 35px -7px;\n  border-radius: 0.8rem;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  text-align: left;\n  color: #333;\n}\n#all-projects > ul .project h2 {\n  font-size: 2rem;\n}\n#all-projects > ul .project .msg {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n}\n#all-projects > ul .project > ul {\n  padding: 1.4rem;\n}\n@media screen and (max-width: 600px) {\n  #all-projects {\n    margin: 0;\n    padding-bottom: 11vh;\n  }\n}\n\n#project-page {\n  padding: 2.4rem;\n  position: absolute;\n  background-color: #8000ff;\n  min-height: 100vh;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n#project-page .back {\n  width: 4rem;\n  height: 4rem;\n  background: #fff;\n  border-radius: 10rem;\n  margin-bottom: 1rem;\n}\n#project-page .back:hover {\n  filter: brightness(0.9);\n}\n#project-page .back:active {\n  filter: brightness(0.8);\n}\n#project-page header {\n  position: fixed;\n  top: 0;\n  left: 6.4rem;\n  padding: 2.4rem 2.4rem 1rem;\n  z-index: 1;\n  width: calc(100% - 6.4rem);\n  background-color: #8000ff;\n  box-shadow: #843d84 0px -11px 29px 1px;\n  padding-bottom: 1rem;\n}\n#project-page header .title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#project-page header .title-wrapper h1 {\n  margin: 0;\n}\n#project-page header .title-wrapper button {\n  width: 7rem;\n  height: 3rem;\n  border-radius: 4px;\n  background: #fff;\n  font-size: 1.5rem;\n}\n#project-page h2 {\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 3rem;\n}\n#project-page .msg {\n  height: 100vh;\n  width: 100vw;\n  max-width: unset;\n  top: 0;\n  left: 3.2rem;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n#project-page ul {\n  margin-top: 17.4rem;\n  overflow: auto;\n}\n@media screen and (max-width: 600px) {\n  #project-page {\n    padding-bottom: 11vh;\n  }\n  #project-page header {\n    width: 100%;\n    left: 0;\n  }\n}\n\n#quick-task form {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  border-radius: 4px;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  color: #fff;\n}\n#quick-task form .line-through {\n  text-decoration: line-through;\n}\n#quick-task form input[type=text] {\n  height: 3rem;\n  border: none;\n  appearance: none;\n  color: #fff;\n  background: transparent;\n  font-size: 1.6rem;\n  outline: none;\n  flex-grow: 1;\n  width: 100%;\n}\n#quick-task form input[type=text]::placeholder {\n  color: #fff;\n}\n#quick-task form input[type=checkbox][checked=\"\"] {\n  background: #03f3f3;\n}\n#quick-task form select {\n  height: 3rem;\n  width: 4rem;\n  background: #fff;\n  border: none;\n  appearance: none;\n  margin: 0 1rem;\n}\n#quick-task form .plus {\n  width: 6rem;\n  height: 3rem;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  align-items: center;\n  font-size: 3rem;\n}\n#quick-task form .input {\n  display: flex;\n  flex-grow: 1;\n}\n#quick-task form .checkbox {\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#quick-task form input[type=checkbox] {\n  margin: 0 1rem 0 1rem;\n  appearance: none;\n  border-radius: 10rem;\n  border: 1px solid #fff;\n  background: transparent;\n  width: 2.1rem;\n  height: 2.1rem;\n}\n#quick-task form .priority {\n  width: 0.5rem;\n  height: 3rem;\n  display: inline-block;\n  margin-right: 0.5rem;\n  border-radius: 4px 0 0 4px;\n  background: #fff;\n}\n#quick-task form .project-dropdown {\n  position: relative;\n}\n#quick-task form .project-dropdown button {\n  width: 10rem;\n  height: 3rem;\n  border-radius: 4px;\n}\n#quick-task form .project-dropdown ul {\n  position: absolute;\n  background: #fff;\n  border-radius: 4px;\n  display: none;\n  top: -100px;\n}\n#quick-task form .project-dropdown ul li {\n  margin-bottom: 2px;\n}\n#quick-task form .project-dropdown > button[aria-expanded=true] ~ ul {\n  display: block;\n}\n\n#all-tasks {\n  margin-left: 6.4rem;\n  padding: 2.4rem;\n  background-color: #fff;\n  min-height: 100vh;\n}\n#all-tasks header {\n  position: fixed;\n  background-color: #fff;\n  box-shadow: #662c66 0px -11px 29px 1px;\n  top: 0;\n  left: 6.4rem;\n  padding: 2.4rem 2.4rem 1rem;\n  z-index: 1;\n  width: calc(100% - 6.4rem);\n}\n#all-tasks h1 {\n  color: #38162b;\n}\n#all-tasks h1, #all-tasks h2 {\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#all-tasks .msg {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n#all-tasks ul {\n  margin-top: 13.2rem;\n  overflow: auto;\n}\n@media (max-width: 600px) {\n  #all-tasks {\n    margin-left: 0;\n    min-height: 100vh;\n    padding-bottom: 11vh;\n  }\n  #all-tasks header {\n    left: 0;\n    width: 100%;\n  }\n}\n\n.last-active {\n  margin-bottom: 5rem;\n}\n\n.details-task {\n  display: flex;\n  align-items: center;\n  background: grey;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.details-task > div .edit-form {\n  display: flex;\n  padding: 2.4rem;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.details-task > div .edit-form > * {\n  flex: 0 48%;\n}\n.details-task > div .edit-form button {\n  max-width: 10rem;\n  margin-left: auto;\n  padding: 0.6rem;\n  border-radius: 4px;\n  background: #2466e4;\n  color: #fff;\n  font-size: 1.5rem;\n}\n.details-task > div .edit-form button:hover {\n  filter: brightness(1.1);\n}\n.details-task > div .edit-form button:active {\n  filter: brightness(0.9);\n}\n.details-task > div .edit-form textarea {\n  flex: 1 100%;\n  min-height: 100px;\n  border-radius: 4px;\n  appearance: none;\n  border: none;\n  padding: 1rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1.6rem;\n  background: #ffffff80;\n}\n.details-task > div .edit-form .priority-select {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.details-task > div .edit-form .priority-select label {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.details-task > div .edit-form .priority-select label input {\n  display: inline-block;\n  background: purple;\n}\n.details-task .task {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  max-width: 60rem;\n  margin: auto;\n  color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.details-task .task .line-through {\n  text-decoration: line-through;\n}\n.details-task .task input, .details-task .task button {\n  width: 3rem;\n  height: 3rem;\n  background: #fff;\n}\n.details-task .task input {\n  margin-right: 1rem;\n}\n.details-task .task input[type=checkbox] {\n  appearance: none;\n  border-radius: 10rem;\n  border: 1px solid #fff;\n  background: transparent;\n  width: 2.1rem;\n  height: 2.1rem;\n}\n.details-task .task input[type=checkbox][checked=\"\"] {\n  background: #03f3f3;\n}\n.details-task .task .special {\n  margin-left: auto;\n}\n.details-task .task .project-title {\n  margin: 0 1rem 0 auto;\n  transform: translateX(3rem);\n  transition: 250ms ease;\n}\n.details-task .task .delete-task {\n  transform: translateX(100%);\n  transition: 250ms ease;\n  cursor: pointer;\n  font-size: 2rem;\n}\n.details-task .task .priority {\n  width: 0.5rem;\n  height: 3rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n.details-task .task .priority-3 {\n  background: red;\n}\n.details-task .task .priority-2 {\n  background: yellow;\n}\n.details-task .task .priority-1 {\n  background: green;\n}\n.details-task .task .priority-0 {\n  background: transparent;\n}\n.details-task .task:hover .project-title {\n  transform: translateX(0);\n}\n.details-task .task:hover .delete-task {\n  transform: translateX(0);\n}\n@media (max-width: 600px) {\n  .details-task .task .project-title {\n    display: none;\n  }\n  .details-task .task .delete-task {\n    transform: none;\n    margin-left: auto;\n  }\n}\n\n#new-project form {\n  box-shadow: pink 1px 7px 24px -2px;\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  border-radius: 4px;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 3rem;\n  color: #1234ac;\n  overflow: hidden;\n}\n#new-project form input[type=text] {\n  height: 4rem;\n  border: none;\n  appearance: none;\n  color: #000;\n  background: transparent;\n  padding-left: 2rem;\n  font-size: 1.6rem;\n  outline: none;\n  width: 100%;\n}\n#new-project form input[type=text]::placeholder {\n  color: #ccc;\n}\n#new-project form label {\n  flex-grow: 1;\n}\n#new-project form .plus {\n  width: 8rem;\n  height: 4rem;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\n\tfont-size: 62.5%;\n}\n\n\n\n.colors {\n\t--pretty-pink: #ff00f040;\n}\n\n* {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbody {\n\tbackground: #fff none repeat scroll 0% 0%;\n\tfont-family: \"Helvetica\", sans-serif;\n\tfont-size: 1.6rem;\n}\n\nul, ol, li, details, summary {\n\tlist-style: none;\n}\nbutton {\n\tappearance: none;\n\tborder: none;\n\t// &:hover {filter: brightness(1.1)}\n\t// &:active {filter: brightness(0.9)}\n}\n// p {\n// \tmargin-bottom: -4px;\n// }\n\n#sidebar {\n\tbackground: transparent;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 6.4rem;\n\tz-index: 99;\n\tnav {\n\t\tbackground: #fff;\n\t\tbox-shadow: pink 1px 1px 35px;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding: 4.8rem 0 0;\n\t\tgap: 2.8rem;\n\n\t\t.sidebar-icon {\n\t\t\tbackground: #fff;\n\t\t\twidth: 4.8rem;\n\t\t\theight: 4.8rem;\n\t\t\tborder-radius: 5rem;\n\t\t\tfont-size: 2.6rem;\n\t\t\ttransition: all 250ms linear;\n\t\t\tposition: relative;\n\t\t\t&:hover {\n\t\t\t\tborder-radius: 1.5rem;\n\t\t\t}\n\n\t\t\t.tooltip {\n\t\t\t\tbackground: #333;\n\t\t\t\tcolor: #fff;\n\t\t\t\tborder-radius: 7px;\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tpadding: 1rem;\n\t\t\t\t\n\t\t\t\tpointer-events: none;\n\t\t\t\t\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: .6rem;\n\t\t\t\tleft: 75px;\n\n\t\t\t\twidth: max-content;\n\t\t\t\ttransition: 100ms linear;\n\t\t\t\ttransform: scale(0);\n\t\t\t}\n\t\t\t&:hover .tooltip {\n\t\t\t\ttransform: scale(1);\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: 9vh;\n\t\twidth: 100vw;\n\t\ttop: unset;\n\t\tbottom: 0;\n\t\tnav {\n\t\t\tbackground: #fff;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-around;\n\t\t\tpadding: 0;\n\t\t\t.sidebar-icon {\n\t\t\t\tbackground: #8762b1;\n\t\t\t\tcolor: #fff;\n\t\t\t\t.tooltip {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\n\n#all-projects {\n\tmargin-left: 6.4rem;\n\tposition: relative;\n\tpadding: 2.4rem;\n\th1 {\n\t\tcolor: #38162b;\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tmargin-bottom: 2rem;\n\t}\n\t> ul {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill,minmax(25rem, 1fr));\n\t\tgap: 2rem;\n\t\tjustify-items: center;\n\t\t> li {\n\t\t\twidth: 25rem;\n\t\t\theight: 25rem;\n\t\t}\n\t\t.project {\n\t\t\twidth: 25rem;\n\t\t\theight: 25rem;\n\t\t\tbackground: #fff;\n\t\t\tbox-shadow: 1px 8px 35px -7px;\n\t\t\tborder-radius: .8rem;\n\t\t\tpadding: 2rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 1.6rem;\n\t\t\ttext-align: left;\n\t\t\tcolor: #333;\n\t\t\th2{\n\t\t\t\tfont-size: 2rem;\n\t\t\t}\n\t\t\t.msg {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 1.7rem;\n\t\t\t}\n\t\t\t> ul {\n\t\t\t\tpadding: 1.4rem;\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 0;\n\t\tpadding-bottom: 11vh;\n\t}\n}\n\n\n#project-page {\n\tpadding: 2.4rem;\n\tposition: absolute;\n\tbackground-color: #8000ff;\n\tmin-height: 100vh;\n\t// height: 100%;\n\twidth: 100%;\n\tleft: 0;\n\ttop: 0;\n\t.back {\n\t\twidth: 4rem;\n\t\theight: 4rem;\n\t\tbackground: #fff;\n\t\tborder-radius: 10rem;\n\t\tmargin-bottom: 1rem;\n\t\t&:hover {filter: brightness(0.9)}\n\t\t&:active {filter: brightness(0.8)}\n\t}\n\theader {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 6.4rem;\n\t\tpadding: 2.4rem 2.4rem 1rem;\n\t\tz-index: 1;\n\t\twidth: calc(100% - 6.4rem);\n\t\t\n\t\tbackground-color: #8000ff;\n\t\tbox-shadow: #843d84 0px -11px 29px 1px;\n\t\tpadding-bottom: 1rem;\n\t\t// max-width: 120rem;\n\t\t// margin: auto;\n\t\t.title-wrapper {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t\t\n\t\t\tmax-width: 60rem;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 2rem;\n\t\t\th1 {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t\twidth: 7rem;\n\t\t\t\theight: 3rem;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tbackground: #fff;\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t}\n\t\t}\n\t}\n\th2 {\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tmargin-bottom: 3rem;\n\t}\n\t.msg {\n\t\theight:100vh;\n\t\twidth: 100vw;\n\t\tmax-width: unset;\n\t\ttop: 0;\n\t\tleft: 3.2rem;\n\t\tposition: fixed;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor: #fff;\n\t}\n\tul {\n\t\t// max-height: 400px;\n\t\tmargin-top: 17.4rem;\n\t\toverflow: auto;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tpadding-bottom: 11vh;\n\t\theader {\n\t\t\twidth: 100%;\n\t\t\tleft: 0;\n\n\t\t}\n\t}\n}\n\n\n#quick-task form{\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #ffffff40;\n\tborder-radius: 4px;\n\tmax-width: 60rem;\n\tmargin: auto;\n\tmargin-bottom: 1rem;\n\tcolor: #fff;\n\t// overflow: hidden;\n\t.line-through {\n\t\ttext-decoration: line-through;\n\t}\n\tinput[type='text'] {\n\t\theight: 3rem;\n\t\tborder: none;\n\t\tappearance: none;\n\t\tcolor: #fff;\n\t\tbackground: transparent;\n\t\tfont-size: 1.6rem;\n\t\toutline: none;\n\t\tflex-grow: 1;\n\t\twidth: 100%;\n\t\t&::placeholder {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\tinput[type='checkbox'][checked=''] {\n\t\tbackground: #03f3f3;\n\t}\n\tselect {\n\t\theight: 3rem;\n\t\twidth: 4rem;\n\t\tbackground: #fff;\n\t\tborder: none;\n\t\tappearance: none;\n\t\tmargin: 0 1rem;\n\t\t// border-radius: 0 4px 4px 0;\n\t}\n\t.plus {\n\t\twidth: 6rem;\n\t\theight: 3rem;\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tcolor: #fff;\n\t\talign-items: center;\n\t\tfont-size: 3rem;\n\t}\n\t.input {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t}\n\t.checkbox {\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\tinput[type='checkbox'] {\n\t\tmargin: 0 1rem 0 1rem;\n\t\tappearance: none;\n\t\tborder-radius: 10rem;\n\t\tborder: 1px solid #fff;\n\t\tbackground: transparent;\n\t\twidth: 2.1rem;\n\t\theight: 2.1rem;\n\t}\n\n\t.priority {\n\t\twidth: .5rem;\n\t\theight: 3rem;\n\t\tdisplay: inline-block;\n\t\tmargin-right: 0.5rem;\n\t\tborder-radius: 4px 0 0 4px;\n\t\tbackground: #fff;\n\t}\n\n\t.project-dropdown {\n\t\t// background: yellow;\n\n\t\tposition: relative;\n\t\tbutton {\n\t\t\twidth: 10rem;\n\t\t\theight: 3rem;\n\t\t\tborder-radius: 4px;\n\t\t}\n\t\tul {\n\t\t\tposition: absolute;\n\t\t\tbackground: #fff;\n\t\t\tborder-radius: 4px;\n\t\t\tdisplay: none;\n\t\t\ttop: -100px;\n\t\t\tli {\n\t\t\t\tmargin-bottom: 2px;\n\t\t\t}\n\t\t}\n\t\t> button[aria-expanded='true'] ~ ul {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n\n\n#all-tasks {\n\t\n\tmargin-left: 6.4rem;\n\tpadding: 2.4rem;\n\tbackground-color: #fff;\n\tmin-height: 100vh;\n\t// width: 100%;\n\n\theader {\n\t\tposition: fixed;\n\t\tbackground-color: #fff;\n\t\t// box-shadow: #521952 0px -11px 81px 1px;\n\t\tbox-shadow: #662c66 0px -11px 29px 1px;\n\t\ttop: 0;\n\t\tleft: 6.4rem;\n\t\tpadding: 2.4rem 2.4rem 1rem;\n\t\tz-index: 1;\n\t\twidth: calc(100% - 6.4rem);\n\t}\n\th1 {\n\t\tcolor: #38162b;\n\t}\n\th1, h2 {\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tmargin-bottom: 2rem;\n\t}\n\t.msg {\n\t\theight: 40vh;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor: #fff;\n\t}\n\tul {\n\t\t// max-height: 400px;\n\t\tmargin-top: 13.2rem;\n\t\toverflow: auto;\n\t}\n\t@media (max-width: 600px) {\n\t\tmargin-left: 0;\n\t\tmin-height: 100vh;\n\t\tpadding-bottom: 11vh;\n\t\theader {\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n\n.last-active {\n\tmargin-bottom: 5rem;\n}\n.details-task {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: grey;\n\t\n\tmax-width: 60rem;\n\tmargin: auto;\n\tmargin-bottom: 2rem;\n\n\tborder-radius: 4px;\n\toverflow: hidden;\n\t> div {\n\t\t.edit-form {\n\t\t\tdisplay: flex;\n\t\t\tpadding: 2.4rem;\n\t\t\tgap: 2rem;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t\t> * {\n\t\t\t\tflex: 0 48%;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t\tmax-width: 10rem;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tpadding: .6rem;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tbackground: #2466e4;\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t&:hover {filter: brightness(1.1)}\n\t\t\t\t&:active {filter: brightness(0.9)}\n\t\t\t}\n\t\t\ttextarea {\n\t\t\t\tflex: 1 100%;\n\t\t\t\tmin-height: 100px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tappearance: none;\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 1rem;\n\t\t\t\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tbackground: #ffffff80;\n\t\t\t}\n\t\t\t.priority-select {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tgap: 1rem;\n\t\t\t\tlabel {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 1rem;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tinput {\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tbackground: purple;\n\t\t\t\t\t\t// width: 100%;\n\t\t\t\t\t\t// height: 100%;\n\t\t\t\t\t\t// appearance: none;\n\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.task {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tbackground: #ffffff40;\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tcolor: #fff;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\t.line-through {\n\t\t\ttext-decoration: line-through;\n\t\t}\n\t\tinput, button {\n\t\t\twidth: 3rem;\n\t\t\theight: 3rem;\n\t\t\tbackground: #fff;\n\t\t}\n\t\tinput {\n\t\t\tmargin-right: 1rem;\n\t\t}\n\t\tinput[type='checkbox'] {\n\t\t\tappearance: none;\n\t\t\tborder-radius: 10rem;\n\t\t\tborder: 1px solid #fff;\n\t\t\tbackground: transparent;\n\t\t\twidth: 2.1rem;\n\t\t\theight: 2.1rem;\n\t\t}\n\t\tinput[type='checkbox'][checked=''] {\n\t\t\tbackground: #03f3f3;\n\t\t}\n\t\t.special {\n\t\t\tmargin-left: auto;\n\t\t}\n\t\t.project-title {\n\t\t\tmargin: 0 1rem 0 auto;\n\t\t\ttransform: translateX(3rem);\n\t\t\ttransition: 250ms ease;\n\t\t}\n\t\t.delete-task {\n\t\t\ttransform: translateX(100%);\n\t\t\ttransition: 250ms ease;\n\t\t\tcursor: pointer;\n\t\t\tfont-size: 2rem;\n\t\t\t// background: transparent;\n\t\t\t// color: #FFF;\n\t\t}\n\t\t.priority {\n\t\t\twidth: .5rem;\n\t\t\theight: 3rem;\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-right: 1rem;\n\t\t\t&-3{background: red;}\n\t\t\t&-2{background: yellow;}\n\t\t\t&-1{background: green;}\n\t\t\t&-0{background: transparent;}\n\t\t}\n\n\t\t&:hover .project-title {\n\t\t\ttransform: translateX(0)\n\t\t}\n\t\t&:hover .delete-task {\n\t\t\ttransform: translateX(0)\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.project-title {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.delete-task {\n\t\t\t\ttransform: none;\n\t\t\t\tmargin-left: auto;\n\t\t\t}\n\t\t}\n\t}\n}\n\n\n\n#new-project form{\n\tbox-shadow: pink 1px 7px 24px -2px;\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #ffffff40;\n\tborder-radius: 4px;\n\tmax-width: 60rem;\n\tmargin: auto;\n\tmargin-bottom: 3rem;\n\tcolor: #1234ac;\n\toverflow: hidden;\n\n\tinput[type='text'] {\n\t\theight: 4rem;\n\t\tborder: none;\n\t\tappearance: none;\n\t\tcolor: #000;\n\t\tbackground: transparent;\n\t\tpadding-left: 2rem;\n\t\tfont-size: 1.6rem;\n\t\toutline: none;\n\t\twidth: 100%;\n\t\t&::placeholder {\n\t\t\tcolor: #ccc;\n\t\t}\n\t}\n\tlabel {\n\t\tflex-grow: 1;\n\t}\n\t.plus {\n\t\twidth: 8rem;\n\t\theight: 4rem;\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-size: 3rem;\n\t\tcolor: #000;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/AllProjects.js":
/*!***************************************!*\
  !*** ./src/components/AllProjects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllProjects)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/components/Project.js");
/* harmony import */ var _NewProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProject.js */ "./src/components/NewProject.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sort.js */ "./src/sort.js");






function AllProjects(projects) {

	const wrapper = document.createElement("div");
	const ul = document.createElement("ul");
	const h1 = document.createElement('h1');

	wrapper.id = "all-projects";
	
	h1.innerHTML = "All Projects";

	function renderUl() {
		wrapper.innerHTML = '';
		ul.innerHTML = '';

		wrapper.appendChild(h1)
		wrapper.appendChild((0,_NewProject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(renderUl))

		projects.forEach( pr => {
			const li = document.createElement("li");
			const project = document.createElement("div");
			const title = document.createElement("h2");
			const taskUl = document.createElement("ul");
			const tasks = (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__.sortByComplete)(pr.tasks)[0].slice(0, 8);
			
			project.onclick = ()=> {
				wrapper.innerHTML = '';
				wrapper.appendChild((0,_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pr, renderUl))
			}

			project.className = "project";
			title.innerHTML = pr.title;
			project.appendChild(title);

			if (tasks.length === 0) {
				const msg = document.createElement('h3')
				msg.className = "msg"
				msg.textContent = "No Tasks Here!";
				project.appendChild(msg)
			} else {
				tasks.forEach(task => {
					const title = document.createElement("p");
					const taskLi = document.createElement("li");
					title.innerHTML = task.title;
					taskLi.appendChild(title)
					taskUl.appendChild(taskLi);
				})
				project.appendChild(taskUl);
			}


			li.appendChild(project)
			ul.appendChild(li)
			wrapper.appendChild(ul);
		})
	}
	renderUl()
	wrapper.render = renderUl;
	return wrapper;

}

/***/ }),

/***/ "./src/components/AllTasks.js":
/*!************************************!*\
  !*** ./src/components/AllTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AllTasks)
/* harmony export */ });
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sort.js */ "./src/sort.js");
/* harmony import */ var _QuickTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickTask.js */ "./src/components/QuickTask.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ "./src/components/Task.js");






function AllTasks(projects, rerender) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const msg = document.createElement("h2");
    const header = document.createElement('header')
    const quickTask = (0,_QuickTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])(undefined, renderUl)
    wrapper.id = "all-tasks";

    h1.innerHTML = "All Tasks";

    header.appendChild(h1);
    header.appendChild(quickTask)
    
    msg.className = "msg"
    msg.innerHTML = "No tasks here!";
    
    const tasks = [];

    function renderUl() {
        quickTask.render()
        tasks.length = 0;
        projects.forEach(project => tasks.push(...project.tasks))
        
        ul.innerHTML = "";
        if (!tasks.length) {
            wrapper.appendChild(msg);
        } else {
            msg.remove()
            wrapper.appendChild(ul);
            let done = (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByDateDone)((0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByComplete)(tasks)[1]);
            let undone = (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByPriority)(
                (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByDate)((0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByComplete)(tasks)[0])
            );
            undone.forEach((t) => {
                ul.appendChild((0,_Task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, renderUl, ));
            });
            ul.lastElementChild
                ? ul.lastElementChild.classList.add("last-active")
                : 0;
            done.forEach((t) => {
                ul.appendChild((0,_Task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, renderUl, ));
            });
        }
    }
    renderUl();
    wrapper.appendChild(header)
    wrapper.appendChild(ul)
	wrapper.render = renderUl;
    return wrapper;
}


/***/ }),

/***/ "./src/components/NewProject.js":
/*!**************************************!*\
  !*** ./src/components/NewProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewProject)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.js");



function NewProject(rerender) {

    const wrapper = document.createElement("div");
    wrapper.id = 'new-project';

    let html = `
        <form>
            <label>
                <input name='title' type="text" placeholder="New Project..." maxlength="25"/>
            </label>
            <button class="plus" type="submit">+</button>
        </form>
    `;
    wrapper.innerHTML = html;


    wrapper.querySelector("form").addEventListener('submit', function(event) {
        event.preventDefault()
        if (this.title.value.trim()) {
            try{_state__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(this.title.value.trim())}
            catch (err) {console.info('it says', err)}
            this.title.value = '';
            rerender()
            _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveState()
        }
    })
    
    return wrapper;
}

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sort.js */ "./src/sort.js");
/* harmony import */ var _QuickTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickTask.js */ "./src/components/QuickTask.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ "./src/components/Task.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.js */ "./src/state.js");





function ProjectComponent(project, rerender) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const backBtn = document.createElement("button");
    const msg = document.createElement("h2");
    const h1wrapper = document.createElement("div")

    const header = document.createElement("header");
    const del = document.createElement("button");
    wrapper.id = "project-page";

    backBtn.onclick = () => {
        document.body.style.overflow = "auto";
        wrapper.remove();
        rerender();
    };
    del.onclick = () => {
        _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteProject(+del.dataset.id);
        _state_js__WEBPACK_IMPORTED_MODULE_3__["default"].saveState();
        wrapper.remove();
        rerender();
    };

    backBtn.innerHTML = "<";
    backBtn.className = "back";

    h1.innerHTML = project.title;
    del.textContent = "Delete";
    del.dataset.id = project.id;
    h1wrapper.className = 'title-wrapper'
    
    h1wrapper.appendChild(h1);
    project.title !== "Personal" ? h1wrapper.appendChild(del) : 0;

    header.appendChild(backBtn);
    header.appendChild(h1wrapper)
    header.appendChild((0,_QuickTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project, renderUl));

    wrapper.appendChild(header);

    msg.className = "msg";
    msg.innerHTML = "No tasks Here!";

    function renderUl() {
        ul.innerHTML = "";
        if (!project.tasks.length) {
            wrapper.appendChild(msg);
        } else {
            msg.remove();
            wrapper.appendChild(ul);

            let done = (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByDateDone)((0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByComplete)(project.tasks)[1]);
            let undone = (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByPriority)(
                (0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByDate)((0,_sort_js__WEBPACK_IMPORTED_MODULE_0__.sortByComplete)(project.tasks)[0])
            );

            undone.forEach((t) => {
                ul.appendChild((0,_Task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, renderUl, project));
            });
            ul.lastElementChild
                ? ul.lastElementChild.classList.add("last-active")
                : 0;
            done.forEach((t) => {
                ul.appendChild((0,_Task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t, renderUl, project));
            });
        }
    }
    renderUl();

    return wrapper;
}


/***/ }),

/***/ "./src/components/QuickTask.js":
/*!*************************************!*\
  !*** ./src/components/QuickTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickTask)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo-factory.js */ "./src/todo-factory.js");




function QuickTask(project, rerender) {
    
    const wrapper = document.createElement("div");
    let projectIsGiven = project ? true : false;

    wrapper.id = 'quick-task';

    let html = `
        <form>
			<span class="priority"></span>
            <label class='checkbox'><input name='isComplete' type="checkbox"></label>
            
            <label class='input'><input name='title' type="text" placeholder="New Task..."/></label>
            ${!project ? `
            <div class="project-dropdown" >
                <button name='project' data-value='${_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects[0].title}' class="select-project" aria-expanded="false">${_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects[0].title}</button>
                <ul class='project-options'></ul>
            </div>
            ` : ''}
            <select name='priority'>
                <option value='0'>None</option>
                <option value='1'>!</option>
                <option value='2'>!!</option>
                <option value='3' selected>!!!</option>
            </select>
            <button type='submit' class="plus">+</button>
        </form>
    `;
    wrapper.innerHTML = html;

    function render() {
        try{
            let ul = wrapper.querySelector('.project-options')
            ul.innerHTML = _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.map(p => {
                return `<li><button data-value='${p.title}' class='project-option'>${p.title}</button></li>`
            }).join('');

            wrapper.querySelector('.select-project').addEventListener('click', function(event) {
                if (event.explicitOriginalTarget !== this) return 
                event.preventDefault()
                wrapper.querySelector('.select-project').setAttribute("aria-expanded", true)
                function open(event) {
                    if (event.target.className !== "project-option" && event.target !== wrapper.querySelector('.select-project')) {
                        wrapper.querySelector('.select-project').setAttribute("aria-expanded", false)
                        document.removeEventListener('click', open)
                    }
                }
                document.addEventListener('click', open)
            })
            wrapper.querySelectorAll('.project-option').forEach(opt => {
                opt.addEventListener('click', function(event) {
                    event.preventDefault()
                    wrapper.querySelector('.select-project').dataset.value = this.dataset.value;
                    wrapper.querySelector('.select-project').innerHTML = this.dataset.value;
                    wrapper.querySelector('.select-project').setAttribute("aria-expanded", false)
                })
            })
        } catch (err) {
            console.info(err)
        }
    }

    
    wrapper.querySelector("form").onsubmit = function(event) {
        event.preventDefault()
        project = !project
            ? _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.find(p => this.project.dataset.value === p.title)
            : project;
        project.addTask(
            (0,_todo_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
                this.title.value.trim() ? this.title.value : "New Task",
                undefined,
                this.priority.value,
                this.isComplete.checked,
                project.title,
            )
        );
        this.title.value = '';
        rerender()
        _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveState()
        project = projectIsGiven ? project : null;
    }

    render()
    wrapper.render = render;
    return wrapper
}

// bug: the checked='' attribute is not being added to the input, 
// but the 'checked' value changes

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });


function Sidebar(setTab) {

	const wrapper = document.createElement("div");
	const nav = document.createElement("nav");

	wrapper.id = "sidebar";

	nav.appendChild(SidebarIcon(0, "P", 'Projects'))
	nav.appendChild(SidebarIcon(1, "T", 'Tasks'))
	// nav.appendChild(SidebarIcon(2, "#", 'Tags'))
	
	wrapper.appendChild(nav)

	nav.addEventListener('click', function(event) {
		if (event.target.nodeName === "BUTTON") {
			setTab(+event.target.dataset.tab)
		}
	})

	return (wrapper);
}

function SidebarIcon(n, i, ii) {
	const icon = document.createElement("button")
	icon.className = "sidebar-icon";

	icon.innerHTML = i;
	icon.dataset.tab = n;
	icon.appendChild(IconTooltip("💡 " + ii))

	return (icon);
}


function IconTooltip(i) {
	const span = document.createElement('span');

	span.className = "tooltip";
	span.innerHTML = i;

	return span
}

/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ "./src/state.js");



function Task(t, rerender, pr) {
    const li = document.createElement("li");
    li.innerHTML = `
        <details class="details-task">
            <summary class='task'>
                <span class="priority priority-${t.priority}"></span>
                <input type="checkbox" ${t.isComplete ? "checked" : ""}>
                <p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
                ${!pr ? `<p class="project-title">${t.project}</p>`: ''}
                <button class="delete-task  ${pr ? 'special' : ''}" data-id="${t.id}">x</button>
            </summary>
            <div>
                <form class="edit-form">
                    <div class="priority-select">
                        <label>None<input type="radio" name="priority" id="" value="0"/></label>
                        <label>!<input type="radio" name="priority" id="" value="1"/></label>
                        <label>!!<input type="radio" name="priority" id="" value="2"/></label>
                        <label>!!!<input type="radio" name="priority" id="" value="3"/></label>
                    </div>
                    <select name="project" id="">
                    </select>
                    <textarea spellcheck="false" placeholder="Description..." name="description" id=""></textarea>
                    <button type="submit">Save</button>
                </form>
            </div>
        </details>
	`;

    let form = li.querySelector(".edit-form");
    form.description.value = t.description;

    form.oninput = function (event) {
        if (t.project !== this.project.value) t.changeProject(this.project.value);

        t.edit(
            this.priority.value, 
            this.description.value,
        );
    }
    form.onsubmit = function(event) {
        event.preventDefault()
        rerender()
        _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveState()
    }

    // set the priority checkbox
    form.querySelector(`input[value='${t.priority}']`).checked = "true"

    // add projects to form project dropdown
    _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.forEach(project => {
        form.project.innerHTML +=
         `<option value="${project.title}" ${t.project === project.title ? "selected" : ""}>${project.title}</option>`;
    })

    // set project if not defined
    let name = _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.find(project => project.title === t.project)
    let project = !pr ? _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.find(project => project.title === t.project) : pr;

    li.querySelector("input").addEventListener("change", function (event) {
        t.markComplete(this.checked);
        rerender();
        _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveState()
    });
    li.querySelector('.delete-task').addEventListener('click', function(event) {
        project.deleteTask(+this.dataset.id)
        rerender()
        _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveState()
    })
    
    return li;
}

/***/ }),

/***/ "./src/debouncer.js":
/*!**************************!*\
  !*** ./src/debouncer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debouncer)
/* harmony export */ });


function debouncer(f, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            f(...args)
        }, delay)
    }
}

/***/ }),

/***/ "./src/project-factory.js":
/*!********************************!*\
  !*** ./src/project-factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });


const proto = {
	addTask(task) {
		task.project = this.title;
		this.tasks.push(task);
	},
	deleteTask(id) {
		const index = this.tasks.indexOf(this.tasks.find(task => task.id === id));
		this.tasks.splice(index, 1)
	},
}
function Project(title="New Project", tasks=[], id = new Date().getTime()) {
	return Object.assign({}, proto, {title, tasks, id});

}


/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortByPriority": () => (/* binding */ sortByPriority),
/* harmony export */   "sortByDateDone": () => (/* binding */ sortByDateDone),
/* harmony export */   "sortByDate": () => (/* binding */ sortByDate),
/* harmony export */   "sortByComplete": () => (/* binding */ sortByComplete)
/* harmony export */ });



function sortByComplete(arr) {
    let arr1 = arr.filter((task) => !task.isComplete);
    let arr2 = arr.filter((task) => task.isComplete);
    return [arr1, arr2];
}

function sortByDate(arr) {
    return arr.sort((a, b) => a.date.getTime() - b.date.getTime());
}

function sortByPriority(arr) {
    return arr.sort((a, b) => b.priority - a.priority);
}
function sortByDateDone(arr) {
    return arr.sort((a, b) => b.dateDone.getTime() - a.dateDone.getTime());
}



/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debouncer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debouncer.js */ "./src/debouncer.js");
/* harmony import */ var _project_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-factory.js */ "./src/project-factory.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");





const state = {
	activeTab: 0,
	setTab(tab) {
		this.activeTab = tab;
	},

	addProject(title) {
		if (!this.projects.every(p => p.title !== title)) {
			throw new Error("The project already exists!")
		}
		this.projects.push((0,_project_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(title))
	},
	deleteProject(id) {
		const index = this.projects.indexOf(this.projects.find(p => p.id === id));
		this.projects.splice(index, 1)
	},

	saveState() {
		localStorage.setItem('state', JSON.stringify(this))
	},
	retrieveState() {
		if (!localStorage.state) {
			localStorage.setItem('state', JSON.stringify(this))
			return
		}
		let data = JSON.parse(localStorage.state);
		
		let projects = [];
		data.projects.forEach(p => {		// p - is just a shell of data, no methods
			let tasks = [];
			p.tasks.forEach(t => {		// t - is just a shell of data, no methods
				tasks.push(
                    (0,_todo_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                        t.title,
                        new Date(t.date),
                        t.priority,
                        t.isComplete,
                        t.project,
                        t.description,
                        new Date(t.dateDone),
                        t.subtasks,
                        t.id
                    )
                );
			})
			projects.push((0,_project_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p.title, tasks, p.id))
		})
		Object.defineProperty(this, 'activeTab', {'value': data.activeTab})
		Object.defineProperty(this, 'projects', {'value': projects})

	},
	projects: [
		(0,_project_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Personal"),
	],
}

state.retrieveState()

state.saveState = state.saveState.bind(state)
state.saveState = (0,_debouncer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.saveState, 400)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/todo-factory.js":
/*!*****************************!*\
  !*** ./src/todo-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _debouncer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debouncer.js */ "./src/debouncer.js");



const proto = {
    edit(
        priority = this.priority,
        description = this.description,
        title = this.title,
        isComplete = this.isComplete,
        subtasks = this.subtasks
    ) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.subtasks = subtasks;
        this.isComplete = isComplete;
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveState();
    },
    markComplete(value) {
        this.isComplete = value;
        this.dateDone = value ? new Date() : null;
    },
    changeProject(newProjectTitle) {
        const old_ = _state__WEBPACK_IMPORTED_MODULE_0__["default"].projects.find((p) => p.title === this.project);
        const new_ = _state__WEBPACK_IMPORTED_MODULE_0__["default"].projects.find((p) => p.title === newProjectTitle);

        new_.addTask(this);
        old_.deleteTask(this.id);
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].saveState();
    },
};

function Todo(
    title = "New task",
    date = new Date(),
    priority = 0, // 0 - none, 1 - low, 2 - middle, 3 - high
    isComplete = false,
    project = "Personal",
    description = "",
    dateDone = isComplete ? new Date() : null,
    subtasks = [],
    id = new Date().getTime()
) {
    let todo = {
        title,
        description,
        date,
        priority,
        subtasks,
        project,
        isComplete,
        dateDone,
        id,
    };
    let placeholder = Object.assign({}, proto, todo);
    placeholder.edit = placeholder.edit.bind(placeholder);
    placeholder.edit = (0,_debouncer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placeholder.edit, 500);

    return placeholder;
}

/*
	this is not a factory function
	a factory function supposed expose an interaface
	but this one actually just returns the object itself
 */


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/state.js");
/* harmony import */ var _todo_factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-factory.js */ "./src/todo-factory.js");
/* harmony import */ var _components_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar.js */ "./src/components/Sidebar.js");
/* harmony import */ var _components_AllProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AllProjects.js */ "./src/components/AllProjects.js");
/* harmony import */ var _components_AllTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AllTasks.js */ "./src/components/AllTasks.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");









document.body.innerHTML = "<div id='root'></div>"

const root = document.querySelector('#root');

const sidebar = (0,_components_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])((tab) => {
	if(_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].activeTab !== tab) {
		_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTab(tab)
		render();
	}
});

const tabs = [
	(0,_components_AllProjects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects), 
	(0,_components_AllTasks_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects, render),
	// document.createElement('span'),
];


root.appendChild(sidebar)

function render() {

	root.childNodes.forEach(node => {
		if(node.id !== "sidebar") node.remove();
	})

	root.appendChild(tabs[_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].activeTab])
	
	tabs[_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].activeTab].render()
	_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveState()
}

render()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1B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TSwyREFBZTtBQUNyQixDQUFDLDJEQUFlO0FBQ2hCOztBQUVBLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9OZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvUXVpY2tUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVib3VuY2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbi5jb2xvcnMge1xcbiAgLS1wcmV0dHktcGluazogI2ZmMDBmMDQwO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbnVsLCBvbCwgbGksIGRldGFpbHMsIHN1bW1hcnkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogNi40cmVtO1xcbiAgei1pbmRleDogOTk7XFxufVxcbiNzaWRlYmFyIG5hdiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogcGluayAxcHggMXB4IDM1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDA7XFxuICBnYXA6IDIuOHJlbTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiA0LjhyZW07XFxuICBoZWlnaHQ6IDQuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNzaWRlYmFyIG5hdiAuc2lkZWJhci1pY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb24gLnRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNnJlbTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4jc2lkZWJhciBuYXYgLnNpZGViYXItaWNvbjpob3ZlciAudG9vbHRpcCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3NpZGViYXIge1xcbiAgICBoZWlnaHQ6IDl2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0b3A6IHVuc2V0O1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuICAjc2lkZWJhciBuYXYge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gICNzaWRlYmFyIG5hdiAuc2lkZWJhci1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogIzg3NjJiMTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICAjc2lkZWJhciBuYXYgLnNpZGViYXItaWNvbiAudG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbiNhbGwtcHJvamVjdHMge1xcbiAgbWFyZ2luLWxlZnQ6IDYuNHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG59XFxuI2FsbC1wcm9qZWN0cyBoMSB7XFxuICBjb2xvcjogIzM4MTYyYjtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4jYWxsLXByb2plY3RzID4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1cmVtLCAxZnIpKTtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsIC5wcm9qZWN0IHtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMXB4IDhweCAzNXB4IC03cHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsIC5wcm9qZWN0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsIC5wcm9qZWN0IC5tc2cge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbiNhbGwtcHJvamVjdHMgPiB1bCAucHJvamVjdCA+IHVsIHtcXG4gIHBhZGRpbmc6IDEuNHJlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICNhbGwtcHJvamVjdHMge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMXZoO1xcbiAgfVxcbn1cXG5cXG4jcHJvamVjdC1wYWdlIHtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDAwZmY7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuI3Byb2plY3QtcGFnZSAuYmFjayB7XFxuICB3aWR0aDogNHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgLmJhY2s6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbiNwcm9qZWN0LXBhZ2UgLmJhY2s6YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbn1cXG4jcHJvamVjdC1wYWdlIGhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA2LjRyZW07XFxuICBwYWRkaW5nOiAyLjRyZW0gMi40cmVtIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYuNHJlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMGZmO1xcbiAgYm94LXNoYWRvdzogIzg0M2Q4NCAwcHggLTExcHggMjlweCAxcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuI3Byb2plY3QtcGFnZSBoZWFkZXIgLnRpdGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuI3Byb2plY3QtcGFnZSBoZWFkZXIgLnRpdGxlLXdyYXBwZXIgaDEge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jcHJvamVjdC1wYWdlIGhlYWRlciAudGl0bGUtd3JhcHBlciBidXR0b24ge1xcbiAgd2lkdGg6IDdyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgaDIge1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgLm1zZyB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LXdpZHRoOiB1bnNldDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDMuMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI3Byb2plY3QtcGFnZSB1bCB7XFxuICBtYXJnaW4tdG9wOiAxNy40cmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjcHJvamVjdC1wYWdlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDExdmg7XFxuICB9XFxuICAjcHJvamVjdC1wYWdlIGhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcbn1cXG5cXG4jcXVpY2stdGFzayBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjQwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XVtjaGVja2VkPVxcXCJcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiAjMDNmM2YzO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogNHJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnBsdXMge1xcbiAgd2lkdGg6IDZyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAuaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAuY2hlY2tib3gge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAyLjFyZW07XFxuICBoZWlnaHQ6IDIuMXJlbTtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wcm9qZWN0LWRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAucHJvamVjdC1kcm9wZG93biBidXR0b24ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wcm9qZWN0LWRyb3Bkb3duIHVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiAtMTAwcHg7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnByb2plY3QtZHJvcGRvd24gdWwgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wcm9qZWN0LWRyb3Bkb3duID4gYnV0dG9uW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gfiB1bCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2FsbC10YXNrcyB7XFxuICBtYXJnaW4tbGVmdDogNi40cmVtO1xcbiAgcGFkZGluZzogMi40cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4jYWxsLXRhc2tzIGhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogIzY2MmM2NiAwcHggLTExcHggMjlweCAxcHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA2LjRyZW07XFxuICBwYWRkaW5nOiAyLjRyZW0gMi40cmVtIDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYuNHJlbSk7XFxufVxcbiNhbGwtdGFza3MgaDEge1xcbiAgY29sb3I6ICMzODE2MmI7XFxufVxcbiNhbGwtdGFza3MgaDEsICNhbGwtdGFza3MgaDIge1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbiNhbGwtdGFza3MgLm1zZyB7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNhbGwtdGFza3MgdWwge1xcbiAgbWFyZ2luLXRvcDogMTMuMnJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICNhbGwtdGFza3Mge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMXZoO1xcbiAgfVxcbiAgI2FsbC10YXNrcyBoZWFkZXIge1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmxhc3QtYWN0aXZlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcblxcbi5kZXRhaWxzLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlscy10YXNrID4gZGl2IC5lZGl0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtID4gKiB7XFxuICBmbGV4OiAwIDQ4JTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjMjQ2NmU0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbjphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSB0ZXh0YXJlYSB7XFxuICBmbGV4OiAxIDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmODA7XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSAucHJpb3JpdHktc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSAucHJpb3JpdHktc2VsZWN0IGxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlscy10YXNrID4gZGl2IC5lZGl0LWZvcm0gLnByaW9yaXR5LXNlbGVjdCBsYWJlbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgaW5wdXQsIC5kZXRhaWxzLXRhc2sgLnRhc2sgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayBpbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDIuMXJlbTtcXG4gIGhlaWdodDogMi4xcmVtO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdW2NoZWNrZWQ9XFxcIlxcXCJdIHtcXG4gIGJhY2tncm91bmQ6ICMwM2YzZjM7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnNwZWNpYWwge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnByb2plY3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDFyZW0gMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAuZGVsZXRlLXRhc2sge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAucHJpb3JpdHktMyB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnByaW9yaXR5LTIge1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5wcmlvcml0eS0xIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5wcmlvcml0eS0wIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrOmhvdmVyIC5wcm9qZWN0LXRpdGxlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzazpob3ZlciAuZGVsZXRlLXRhc2sge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5kZXRhaWxzLXRhc2sgLnRhc2sgLnByb2plY3QtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRldGFpbHMtdGFzayAudGFzayAuZGVsZXRlLXRhc2sge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4jbmV3LXByb2plY3QgZm9ybSB7XFxuICBib3gtc2hhZG93OiBwaW5rIDFweCA3cHggMjRweCAtMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGNvbG9yOiAjMTIzNGFjO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI25ldy1wcm9qZWN0IGZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jbmV3LXByb2plY3QgZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuI25ldy1wcm9qZWN0IGZvcm0gbGFiZWwge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4jbmV3LXByb2plY3QgZm9ybSAucGx1cyB7XFxuICB3aWR0aDogOHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLGdCQUFBO0FBQ0Q7O0FBSUE7RUFDQyx3QkFBQTtBQUREOztBQUlBO0VBQ0Msc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUREOztBQUlBO0VBQ0MseUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FBREQ7O0FBSUE7RUFDQyxnQkFBQTtBQUREOztBQUdBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0FBQUQ7O0FBUUE7RUFDQyx1QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUxEO0FBTUM7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpGO0FBTUU7RUFDQyxn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emU6IDYyLjUlO1xcbn1cXG5cXG5cXG5cXG4uY29sb3JzIHtcXG5cXHQtLXByZXR0eS1waW5rOiAjZmYwMGYwNDA7XFxufVxcblxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxudWwsIG9sLCBsaSwgZGV0YWlscywgc3VtbWFyeSB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHQvLyAmOmhvdmVyIHtmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKX1cXG5cXHQvLyAmOmFjdGl2ZSB7ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSl9XFxufVxcbi8vIHAge1xcbi8vIFxcdG1hcmdpbi1ib3R0b206IC00cHg7XFxuLy8gfVxcblxcbiNzaWRlYmFyIHtcXG5cXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogNi40cmVtO1xcblxcdHotaW5kZXg6IDk5O1xcblxcdG5hdiB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRib3gtc2hhZG93OiBwaW5rIDFweCAxcHggMzVweDtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZzogNC44cmVtIDAgMDtcXG5cXHRcXHRnYXA6IDIuOHJlbTtcXG5cXG5cXHRcXHQuc2lkZWJhci1pY29uIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdFxcdFxcdHdpZHRoOiA0LjhyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiA0LjhyZW07XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXJlbTtcXG5cXHRcXHRcXHRmb250LXNpemU6IDIuNnJlbTtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMjUwbXMgbGluZWFyO1xcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdC50b29sdGlwIHtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMzMzO1xcblxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdFxcdFxcdFxcdFxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHRcXHR0b3A6IC42cmVtO1xcblxcdFxcdFxcdFxcdGxlZnQ6IDc1cHg7XFxuXFxuXFx0XFx0XFx0XFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IDEwMG1zIGxpbmVhcjtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHQmOmhvdmVyIC50b29sdGlwIHtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFx0XFx0aGVpZ2h0OiA5dmg7XFxuXFx0XFx0d2lkdGg6IDEwMHZ3O1xcblxcdFxcdHRvcDogdW5zZXQ7XFxuXFx0XFx0Ym90dG9tOiAwO1xcblxcdFxcdG5hdiB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcblxcdFxcdFxcdC5zaWRlYmFyLWljb24ge1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICM4NzYyYjE7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0XFx0LnRvb2x0aXAge1xcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5cXG4jYWxsLXByb2plY3RzIHtcXG5cXHRtYXJnaW4tbGVmdDogNi40cmVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRwYWRkaW5nOiAyLjRyZW07XFxuXFx0aDEge1xcblxcdFxcdGNvbG9yOiAjMzgxNjJiO1xcblxcdFxcdG1heC13aWR0aDogNjByZW07XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFx0fVxcblxcdD4gdWwge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgyNXJlbSwgMWZyKSk7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdFxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRcXHQ+IGxpIHtcXG5cXHRcXHRcXHR3aWR0aDogMjVyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiAyNXJlbTtcXG5cXHRcXHR9XFxuXFx0XFx0LnByb2plY3Qge1xcblxcdFxcdFxcdHdpZHRoOiAyNXJlbTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDI1cmVtO1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0Ym94LXNoYWRvdzogMXB4IDhweCAzNXB4IC03cHg7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogLjhyZW07XFxuXFx0XFx0XFx0cGFkZGluZzogMnJlbTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0XFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRcXHRcXHRjb2xvcjogIzMzMztcXG5cXHRcXHRcXHRoMntcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdC5tc2cge1xcblxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjdyZW07XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdD4gdWwge1xcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDEuNHJlbTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTF2aDtcXG5cXHR9XFxufVxcblxcblxcbiNwcm9qZWN0LXBhZ2Uge1xcblxcdHBhZGRpbmc6IDIuNHJlbTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzgwMDBmZjtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHQvLyBoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0LmJhY2sge1xcblxcdFxcdHdpZHRoOiA0cmVtO1xcblxcdFxcdGhlaWdodDogNHJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0XFx0Jjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSl9XFxuXFx0XFx0JjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjgpfVxcblxcdH1cXG5cXHRoZWFkZXIge1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0bGVmdDogNi40cmVtO1xcblxcdFxcdHBhZGRpbmc6IDIuNHJlbSAyLjRyZW0gMXJlbTtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdHdpZHRoOiBjYWxjKDEwMCUgLSA2LjRyZW0pO1xcblxcdFxcdFxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM4MDAwZmY7XFxuXFx0XFx0Ym94LXNoYWRvdzogIzg0M2Q4NCAwcHggLTExcHggMjlweCAxcHg7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxuXFx0XFx0Ly8gbWF4LXdpZHRoOiAxMjByZW07XFxuXFx0XFx0Ly8gbWFyZ2luOiBhdXRvO1xcblxcdFxcdC50aXRsZS13cmFwcGVyIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdFxcblxcdFxcdFxcdG1heC13aWR0aDogNjByZW07XFxuXFx0XFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFx0XFx0XFx0aDEge1xcblxcdFxcdFxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0YnV0dG9uIHtcXG5cXHRcXHRcXHRcXHR3aWR0aDogN3JlbTtcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFx0aDIge1xcblxcdFxcdG1heC13aWR0aDogNjByZW07XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxuXFx0fVxcblxcdC5tc2cge1xcblxcdFxcdGhlaWdodDoxMDB2aDtcXG5cXHRcXHR3aWR0aDogMTAwdnc7XFxuXFx0XFx0bWF4LXdpZHRoOiB1bnNldDtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0bGVmdDogMy4ycmVtO1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcdHVsIHtcXG5cXHRcXHQvLyBtYXgtaGVpZ2h0OiA0MDBweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxNy40cmVtO1xcblxcdFxcdG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG5cXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxMXZoO1xcblxcdFxcdGhlYWRlciB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0bGVmdDogMDtcXG5cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5cXG4jcXVpY2stdGFzayBmb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdG1heC13aWR0aDogNjByZW07XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Ly8gb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHQubGluZS10aHJvdWdoIHtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHR9XFxuXFx0aW5wdXRbdHlwZT0ndGV4dCddIHtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0Jjo6cGxhY2Vob2xkZXIge1xcblxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0aW5wdXRbdHlwZT0nY2hlY2tib3gnXVtjaGVja2VkPScnXSB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzAzZjNmMztcXG5cXHR9XFxuXFx0c2VsZWN0IHtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0XFx0d2lkdGg6IDRyZW07XFxuXFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHRtYXJnaW46IDAgMXJlbTtcXG5cXHRcXHQvLyBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG5cXHR9XFxuXFx0LnBsdXMge1xcblxcdFxcdHdpZHRoOiA2cmVtO1xcblxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdH1cXG5cXHQuaW5wdXQge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdH1cXG5cXHQuY2hlY2tib3gge1xcblxcdFxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR9XFxuXFx0aW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuXFx0XFx0bWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcblxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMTByZW07XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHR3aWR0aDogMi4xcmVtO1xcblxcdFxcdGhlaWdodDogMi4xcmVtO1xcblxcdH1cXG5cXG5cXHQucHJpb3JpdHkge1xcblxcdFxcdHdpZHRoOiAuNXJlbTtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xcblxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWRyb3Bkb3duIHtcXG5cXHRcXHQvLyBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxuXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdGJ1dHRvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwcmVtO1xcblxcdFxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0XFx0fVxcblxcdFxcdHVsIHtcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHRcXHR0b3A6IC0xMDBweDtcXG5cXHRcXHRcXHRsaSB7XFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMnB4O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0PiBidXR0b25bYXJpYS1leHBhbmRlZD0ndHJ1ZSddIH4gdWwge1xcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblxcbiNhbGwtdGFza3Mge1xcblxcdFxcblxcdG1hcmdpbi1sZWZ0OiA2LjRyZW07XFxuXFx0cGFkZGluZzogMi40cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0Ly8gd2lkdGg6IDEwMCU7XFxuXFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHQvLyBib3gtc2hhZG93OiAjNTIxOTUyIDBweCAtMTFweCA4MXB4IDFweDtcXG5cXHRcXHRib3gtc2hhZG93OiAjNjYyYzY2IDBweCAtMTFweCAyOXB4IDFweDtcXG5cXHRcXHR0b3A6IDA7XFxuXFx0XFx0bGVmdDogNi40cmVtO1xcblxcdFxcdHBhZGRpbmc6IDIuNHJlbSAyLjRyZW0gMXJlbTtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdHdpZHRoOiBjYWxjKDEwMCUgLSA2LjRyZW0pO1xcblxcdH1cXG5cXHRoMSB7XFxuXFx0XFx0Y29sb3I6ICMzODE2MmI7XFxuXFx0fVxcblxcdGgxLCBoMiB7XFxuXFx0XFx0bWF4LXdpZHRoOiA2MHJlbTtcXG5cXHRcXHRtYXJnaW46IGF1dG87XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcXG5cXHR9XFxuXFx0Lm1zZyB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFx0dWwge1xcblxcdFxcdC8vIG1heC1oZWlnaHQ6IDQwMHB4O1xcblxcdFxcdG1hcmdpbi10b3A6IDEzLjJyZW07XFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0fVxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxMXZoO1xcblxcdFxcdGhlYWRlciB7XFxuXFx0XFx0XFx0bGVmdDogMDtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5cXG4ubGFzdC1hY3RpdmUge1xcblxcdG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiBncmV5O1xcblxcdFxcblxcdG1heC13aWR0aDogNjByZW07XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0PiBkaXYge1xcblxcdFxcdC5lZGl0LWZvcm0ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0cGFkZGluZzogMi40cmVtO1xcblxcdFxcdFxcdGdhcDogMnJlbTtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRcXHQ+ICoge1xcblxcdFxcdFxcdFxcdGZsZXg6IDAgNDglO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdFxcdG1heC13aWR0aDogMTByZW07XFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0XFx0XFx0cGFkZGluZzogLjZyZW07XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICMyNDY2ZTQ7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuXFx0XFx0XFx0XFx0JjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpfVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHR0ZXh0YXJlYSB7XFxuXFx0XFx0XFx0XFx0ZmxleDogMSAxMDAlO1xcblxcdFxcdFxcdFxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdFxcdFxcdFxcdGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmZmZmODA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdC5wcmlvcml0eS1zZWxlY3Qge1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRcXHRcXHRsYWJlbCB7XFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0XFx0XFx0aW5wdXQge1xcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiBwdXJwbGU7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Ly8gd2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Ly8gaGVpZ2h0OiAxMDAlO1xcblxcdFxcdFxcdFxcdFxcdFxcdC8vIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQudGFzayB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQ6ICNmZmZmZmY0MDtcXG5cXHRcXHRtYXgtd2lkdGg6IDYwcmVtO1xcblxcdFxcdG1hcmdpbjogYXV0bztcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHQubGluZS10aHJvdWdoIHtcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHRcXHR9XFxuXFx0XFx0aW5wdXQsIGJ1dHRvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDNyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0fVxcblxcdFxcdGlucHV0IHtcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0XFx0fVxcblxcdFxcdGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcblxcdFxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMTByZW07XFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRcXHR3aWR0aDogMi4xcmVtO1xcblxcdFxcdFxcdGhlaWdodDogMi4xcmVtO1xcblxcdFxcdH1cXG5cXHRcXHRpbnB1dFt0eXBlPSdjaGVja2JveCddW2NoZWNrZWQ9JyddIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMDNmM2YzO1xcblxcdFxcdH1cXG5cXHRcXHQuc3BlY2lhbCB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0fVxcblxcdFxcdC5wcm9qZWN0LXRpdGxlIHtcXG5cXHRcXHRcXHRtYXJnaW46IDAgMXJlbSAwIGF1dG87XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XFxuXFx0XFx0fVxcblxcdFxcdC5kZWxldGUtdGFzayB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRcXHQvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRcXHQvLyBjb2xvcjogI0ZGRjtcXG5cXHRcXHR9XFxuXFx0XFx0LnByaW9yaXR5IHtcXG5cXHRcXHRcXHR3aWR0aDogLjVyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0XFx0XFx0Ji0ze2JhY2tncm91bmQ6IHJlZDt9XFxuXFx0XFx0XFx0Ji0ye2JhY2tncm91bmQ6IHllbGxvdzt9XFxuXFx0XFx0XFx0Ji0xe2JhY2tncm91bmQ6IGdyZWVuO31cXG5cXHRcXHRcXHQmLTB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmOmhvdmVyIC5wcm9qZWN0LXRpdGxlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG5cXHRcXHR9XFxuXFx0XFx0Jjpob3ZlciAuZGVsZXRlLXRhc2sge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcblxcdFxcdH1cXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXHRcXHRcXHQucHJvamVjdC10aXRsZSB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0LmRlbGV0ZS10YXNrIHtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IG5vbmU7XFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblxcblxcbiNuZXctcHJvamVjdCBmb3Jte1xcblxcdGJveC1zaGFkb3c6IHBpbmsgMXB4IDdweCAyNHB4IC0ycHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQ6ICNmZmZmZmY0MDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0bWF4LXdpZHRoOiA2MHJlbTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogM3JlbTtcXG5cXHRjb2xvcjogIzEyMzRhYztcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcblxcdGlucHV0W3R5cGU9J3RleHQnXSB7XFxuXFx0XFx0aGVpZ2h0OiA0cmVtO1xcblxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdGNvbG9yOiAjMDAwO1xcblxcdFxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcdFxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRcXHRvdXRsaW5lOiBub25lO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdCY6OnBsYWNlaG9sZGVyIHtcXG5cXHRcXHRcXHRjb2xvcjogI2NjYztcXG5cXHRcXHR9XFxuXFx0fVxcblxcdGxhYmVsIHtcXG5cXHRcXHRmbGV4LWdyb3c6IDE7XFxuXFx0fVxcblxcdC5wbHVzIHtcXG5cXHRcXHR3aWR0aDogOHJlbTtcXG5cXHRcXHRoZWlnaHQ6IDRyZW07XFxuXFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRcXHRjb2xvcjogIzAwMDtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IE5ld1Byb2plY3QgZnJvbSBcIi4vTmV3UHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc29ydEJ5Q29tcGxldGUgfSBmcm9tIFwiLi4vc29ydC5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbFByb2plY3RzKHByb2plY3RzKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cblx0d3JhcHBlci5pZCA9IFwiYWxsLXByb2plY3RzXCI7XG5cdFxuXHRoMS5pbm5lckhUTUwgPSBcIkFsbCBQcm9qZWN0c1wiO1xuXG5cdGZ1bmN0aW9uIHJlbmRlclVsKCkge1xuXHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0dWwuaW5uZXJIVE1MID0gJyc7XG5cblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGgxKVxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoTmV3UHJvamVjdChyZW5kZXJVbCkpXG5cblx0XHRwcm9qZWN0cy5mb3JFYWNoKCBwciA9PiB7XG5cdFx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdFx0XHRjb25zdCB0YXNrVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdFx0XHRjb25zdCB0YXNrcyA9IHNvcnRCeUNvbXBsZXRlKHByLnRhc2tzKVswXS5zbGljZSgwLCA4KTtcblx0XHRcdFxuXHRcdFx0cHJvamVjdC5vbmNsaWNrID0gKCk9PiB7XG5cdFx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoUHJvamVjdENvbXBvbmVudChwciwgcmVuZGVyVWwpKVxuXHRcdFx0fVxuXG5cdFx0XHRwcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuXHRcdFx0dGl0bGUuaW5uZXJIVE1MID0gcHIudGl0bGU7XG5cdFx0XHRwcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRcdFx0aWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cdFx0XHRcdG1zZy5jbGFzc05hbWUgPSBcIm1zZ1wiXG5cdFx0XHRcdG1zZy50ZXh0Q29udGVudCA9IFwiTm8gVGFza3MgSGVyZSFcIjtcblx0XHRcdFx0cHJvamVjdC5hcHBlbmRDaGlsZChtc2cpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRcdFx0Y29uc3QgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG5cdFx0XHRcdFx0dGFza0xpLmFwcGVuZENoaWxkKHRpdGxlKVxuXHRcdFx0XHRcdHRhc2tVbC5hcHBlbmRDaGlsZCh0YXNrTGkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRwcm9qZWN0LmFwcGVuZENoaWxkKHRhc2tVbCk7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGkuYXBwZW5kQ2hpbGQocHJvamVjdClcblx0XHRcdHVsLmFwcGVuZENoaWxkKGxpKVxuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZCh1bCk7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXJVbCgpXG5cdHdyYXBwZXIucmVuZGVyID0gcmVuZGVyVWw7XG5cdHJldHVybiB3cmFwcGVyO1xuXG59IiwiXG5pbXBvcnQge3NvcnRCeVByaW9yaXR5LCBzb3J0QnlEYXRlRG9uZSwgc29ydEJ5RGF0ZSwgc29ydEJ5Q29tcGxldGV9IGZyb20gXCIuLi9zb3J0LmpzXCJcbmltcG9ydCBRdWlja1Rhc2sgZnJvbSAnLi9RdWlja1Rhc2suanMnXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsVGFza3MocHJvamVjdHMsIHJlcmVuZGVyKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgcXVpY2tUYXNrID0gUXVpY2tUYXNrKHVuZGVmaW5lZCwgcmVuZGVyVWwpXG4gICAgd3JhcHBlci5pZCA9IFwiYWxsLXRhc2tzXCI7XG5cbiAgICBoMS5pbm5lckhUTUwgPSBcIkFsbCBUYXNrc1wiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocXVpY2tUYXNrKVxuICAgIFxuICAgIG1zZy5jbGFzc05hbWUgPSBcIm1zZ1wiXG4gICAgbXNnLmlubmVySFRNTCA9IFwiTm8gdGFza3MgaGVyZSFcIjtcbiAgICBcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVWwoKSB7XG4gICAgICAgIHF1aWNrVGFzay5yZW5kZXIoKVxuICAgICAgICB0YXNrcy5sZW5ndGggPSAwO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gdGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKSlcbiAgICAgICAgXG4gICAgICAgIHVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtc2cucmVtb3ZlKClcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICAgICAgbGV0IGRvbmUgPSBzb3J0QnlEYXRlRG9uZShzb3J0QnlDb21wbGV0ZSh0YXNrcylbMV0pO1xuICAgICAgICAgICAgbGV0IHVuZG9uZSA9IHNvcnRCeVByaW9yaXR5KFxuICAgICAgICAgICAgICAgIHNvcnRCeURhdGUoc29ydEJ5Q29tcGxldGUodGFza3MpWzBdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHVuZG9uZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoVGFzayh0LCByZW5kZXJVbCwgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVsLmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgICAgICA/IHVsLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcImxhc3QtYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgZG9uZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoVGFzayh0LCByZW5kZXJVbCwgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJVbCgpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodWwpXG5cdHdyYXBwZXIucmVuZGVyID0gcmVuZGVyVWw7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UHJvamVjdChyZXJlbmRlcikge1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5pZCA9ICduZXctcHJvamVjdCc7XG5cbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9J3RpdGxlJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmV3IFByb2plY3QuLi5cIiBtYXhsZW5ndGg9XCIyNVwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGx1c1wiIHR5cGU9XCJzdWJtaXRcIj4rPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gaHRtbDtcblxuXG4gICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzLnRpdGxlLnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgdHJ5e3N0YXRlLmFkZFByb2plY3QodGhpcy50aXRsZS52YWx1ZS50cmltKCkpfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge2NvbnNvbGUuaW5mbygnaXQgc2F5cycsIGVycil9XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICByZXJlbmRlcigpXG4gICAgICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gd3JhcHBlcjtcbn0iLCJpbXBvcnQge1xuICAgIHNvcnRCeVByaW9yaXR5LFxuICAgIHNvcnRCeURhdGVEb25lLFxuICAgIHNvcnRCeURhdGUsXG4gICAgc29ydEJ5Q29tcGxldGUsXG59IGZyb20gXCIuLi9zb3J0LmpzXCI7XG5pbXBvcnQgUXVpY2tUYXNrIGZyb20gXCIuL1F1aWNrVGFzay5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuLi9zdGF0ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q29tcG9uZW50KHByb2plY3QsIHJlcmVuZGVyKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGgxd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB3cmFwcGVyLmlkID0gXCJwcm9qZWN0LXBhZ2VcIjtcblxuICAgIGJhY2tCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICByZXJlbmRlcigpO1xuICAgIH07XG4gICAgZGVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmRlbGV0ZVByb2plY3QoK2RlbC5kYXRhc2V0LmlkKTtcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKCk7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIHJlcmVuZGVyKCk7XG4gICAgfTtcblxuICAgIGJhY2tCdG4uaW5uZXJIVE1MID0gXCI8XCI7XG4gICAgYmFja0J0bi5jbGFzc05hbWUgPSBcImJhY2tcIjtcblxuICAgIGgxLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gICAgZGVsLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWwuZGF0YXNldC5pZCA9IHByb2plY3QuaWQ7XG4gICAgaDF3cmFwcGVyLmNsYXNzTmFtZSA9ICd0aXRsZS13cmFwcGVyJ1xuICAgIFxuICAgIGgxd3JhcHBlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgcHJvamVjdC50aXRsZSAhPT0gXCJQZXJzb25hbFwiID8gaDF3cmFwcGVyLmFwcGVuZENoaWxkKGRlbCkgOiAwO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMXdyYXBwZXIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKFF1aWNrVGFzayhwcm9qZWN0LCByZW5kZXJVbCkpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbXNnLmNsYXNzTmFtZSA9IFwibXNnXCI7XG4gICAgbXNnLmlubmVySFRNTCA9IFwiTm8gdGFza3MgSGVyZSFcIjtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclVsKCkge1xuICAgICAgICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoIXByb2plY3QudGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtc2cucmVtb3ZlKCk7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgICAgICAgICAgbGV0IGRvbmUgPSBzb3J0QnlEYXRlRG9uZShzb3J0QnlDb21wbGV0ZShwcm9qZWN0LnRhc2tzKVsxXSk7XG4gICAgICAgICAgICBsZXQgdW5kb25lID0gc29ydEJ5UHJpb3JpdHkoXG4gICAgICAgICAgICAgICAgc29ydEJ5RGF0ZShzb3J0QnlDb21wbGV0ZShwcm9qZWN0LnRhc2tzKVswXSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHVuZG9uZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoVGFzayh0LCByZW5kZXJVbCwgcHJvamVjdCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1bC5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICAgICAgPyB1bC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJsYXN0LWFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgIGRvbmUuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKFRhc2sodCwgcmVuZGVyVWwsIHByb2plY3QpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlclVsKCk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cbiIsIlxuaW1wb3J0IHN0YXRlIGZyb20gXCIuLi9zdGF0ZS5qc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG8tZmFjdG9yeS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWlja1Rhc2socHJvamVjdCwgcmVyZW5kZXIpIHtcbiAgICBcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJvamVjdElzR2l2ZW4gPSBwcm9qZWN0ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgd3JhcHBlci5pZCA9ICdxdWljay10YXNrJztcblxuICAgIGxldCBodG1sID0gYFxuICAgICAgICA8Zm9ybT5cblx0XHRcdDxzcGFuIGNsYXNzPVwicHJpb3JpdHlcIj48L3NwYW4+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9J2NoZWNrYm94Jz48aW5wdXQgbmFtZT0naXNDb21wbGV0ZScgdHlwZT1cImNoZWNrYm94XCI+PC9sYWJlbD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdpbnB1dCc+PGlucHV0IG5hbWU9J3RpdGxlJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmV3IFRhc2suLi5cIi8+PC9sYWJlbD5cbiAgICAgICAgICAgICR7IXByb2plY3QgPyBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kcm9wZG93blwiID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9J3Byb2plY3QnIGRhdGEtdmFsdWU9JyR7c3RhdGUucHJvamVjdHNbMF0udGl0bGV9JyBjbGFzcz1cInNlbGVjdC1wcm9qZWN0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JHtzdGF0ZS5wcm9qZWN0c1swXS50aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9J3Byb2plY3Qtb3B0aW9ucyc+PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSdwcmlvcml0eSc+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEnPiE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyJz4hITwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMnIHNlbGVjdGVkPiEhITwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3M9XCJwbHVzXCI+KzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgYDtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCB1bCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnByb2plY3Qtb3B0aW9ucycpXG4gICAgICAgICAgICB1bC5pbm5lckhUTUwgPSBzdGF0ZS5wcm9qZWN0cy5tYXAocCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8bGk+PGJ1dHRvbiBkYXRhLXZhbHVlPScke3AudGl0bGV9JyBjbGFzcz0ncHJvamVjdC1vcHRpb24nPiR7cC50aXRsZX08L2J1dHRvbj48L2xpPmBcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZXhwbGljaXRPcmlnaW5hbFRhcmdldCAhPT0gdGhpcykgcmV0dXJuIFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvcGVuKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lICE9PSBcInByb2plY3Qtb3B0aW9uXCIgJiYgZXZlbnQudGFyZ2V0ICE9PSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtb3B0aW9uJykuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICAgIG9wdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKS5kYXRhc2V0LnZhbHVlID0gdGhpcy5kYXRhc2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpLmlubmVySFRNTCA9IHRoaXMuZGF0YXNldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLm9uc3VibWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBwcm9qZWN0ID0gIXByb2plY3RcbiAgICAgICAgICAgID8gc3RhdGUucHJvamVjdHMuZmluZChwID0+IHRoaXMucHJvamVjdC5kYXRhc2V0LnZhbHVlID09PSBwLnRpdGxlKVxuICAgICAgICAgICAgOiBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2soXG4gICAgICAgICAgICBUb2RvKFxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUudmFsdWUudHJpbSgpID8gdGhpcy50aXRsZS52YWx1ZSA6IFwiTmV3IFRhc2tcIixcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRpdGxlLFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIHJlcmVuZGVyKClcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKClcbiAgICAgICAgcHJvamVjdCA9IHByb2plY3RJc0dpdmVuID8gcHJvamVjdCA6IG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyKClcbiAgICB3cmFwcGVyLnJlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG4vLyBidWc6IHRoZSBjaGVja2VkPScnIGF0dHJpYnV0ZSBpcyBub3QgYmVpbmcgYWRkZWQgdG8gdGhlIGlucHV0LCBcbi8vIGJ1dCB0aGUgJ2NoZWNrZWQnIHZhbHVlIGNoYW5nZXMiLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcihzZXRUYWIpIHtcblxuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuXHR3cmFwcGVyLmlkID0gXCJzaWRlYmFyXCI7XG5cblx0bmF2LmFwcGVuZENoaWxkKFNpZGViYXJJY29uKDAsIFwiUFwiLCAnUHJvamVjdHMnKSlcblx0bmF2LmFwcGVuZENoaWxkKFNpZGViYXJJY29uKDEsIFwiVFwiLCAnVGFza3MnKSlcblx0Ly8gbmF2LmFwcGVuZENoaWxkKFNpZGViYXJJY29uKDIsIFwiI1wiLCAnVGFncycpKVxuXHRcblx0d3JhcHBlci5hcHBlbmRDaGlsZChuYXYpXG5cblx0bmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09PSBcIkJVVFRPTlwiKSB7XG5cdFx0XHRzZXRUYWIoK2V2ZW50LnRhcmdldC5kYXRhc2V0LnRhYilcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuICh3cmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhckljb24obiwgaSwgaWkpIHtcblx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblx0aWNvbi5jbGFzc05hbWUgPSBcInNpZGViYXItaWNvblwiO1xuXG5cdGljb24uaW5uZXJIVE1MID0gaTtcblx0aWNvbi5kYXRhc2V0LnRhYiA9IG47XG5cdGljb24uYXBwZW5kQ2hpbGQoSWNvblRvb2x0aXAoXCLwn5KhIFwiICsgaWkpKVxuXG5cdHJldHVybiAoaWNvbik7XG59XG5cblxuZnVuY3Rpb24gSWNvblRvb2x0aXAoaSkge1xuXHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5cdHNwYW4uY2xhc3NOYW1lID0gXCJ0b29sdGlwXCI7XG5cdHNwYW4uaW5uZXJIVE1MID0gaTtcblxuXHRyZXR1cm4gc3BhblxufSIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHQsIHJlcmVuZGVyLCBwcikge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRldGFpbHMgY2xhc3M9XCJkZXRhaWxzLXRhc2tcIj5cbiAgICAgICAgICAgIDxzdW1tYXJ5IGNsYXNzPSd0YXNrJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5IHByaW9yaXR5LSR7dC5wcmlvcml0eX1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7dC5pc0NvbXBsZXRlID8gXCJjaGVja2VkXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2stdGl0bGUgJHt0LmlzQ29tcGxldGUgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIn1cIj4ke3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICR7IXByID8gYDxwIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7dC5wcm9qZWN0fTwvcD5gOiAnJ31cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRhc2sgICR7cHIgPyAnc3BlY2lhbCcgOiAnJ31cIiBkYXRhLWlkPVwiJHt0LmlkfVwiPng8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJlZGl0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbmU8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJcIiB2YWx1ZT1cIjBcIi8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4hPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiXCIgdmFsdWU9XCIxXCIvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+ISE8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJcIiB2YWx1ZT1cIjJcIi8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4hISE8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJcIiB2YWx1ZT1cIjNcIi8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByb2plY3RcIiBpZD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kZXRhaWxzPlxuXHRgO1xuXG4gICAgbGV0IGZvcm0gPSBsaS5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybVwiKTtcbiAgICBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlID0gdC5kZXNjcmlwdGlvbjtcblxuICAgIGZvcm0ub25pbnB1dCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodC5wcm9qZWN0ICE9PSB0aGlzLnByb2plY3QudmFsdWUpIHQuY2hhbmdlUHJvamVjdCh0aGlzLnByb2plY3QudmFsdWUpO1xuXG4gICAgICAgIHQuZWRpdChcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkudmFsdWUsIFxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZm9ybS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcmVyZW5kZXIoKVxuICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgcHJpb3JpdHkgY2hlY2tib3hcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPScke3QucHJpb3JpdHl9J11gKS5jaGVja2VkID0gXCJ0cnVlXCJcblxuICAgIC8vIGFkZCBwcm9qZWN0cyB0byBmb3JtIHByb2plY3QgZHJvcGRvd25cbiAgICBzdGF0ZS5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBmb3JtLnByb2plY3QuaW5uZXJIVE1MICs9XG4gICAgICAgICBgPG9wdGlvbiB2YWx1ZT1cIiR7cHJvamVjdC50aXRsZX1cIiAke3QucHJvamVjdCA9PT0gcHJvamVjdC50aXRsZSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9PiR7cHJvamVjdC50aXRsZX08L29wdGlvbj5gO1xuICAgIH0pXG5cbiAgICAvLyBzZXQgcHJvamVjdCBpZiBub3QgZGVmaW5lZFxuICAgIGxldCBuYW1lID0gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHQucHJvamVjdClcbiAgICBsZXQgcHJvamVjdCA9ICFwciA/IHN0YXRlLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSB0LnByb2plY3QpIDogcHI7XG5cbiAgICBsaS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdC5tYXJrQ29tcGxldGUodGhpcy5jaGVja2VkKTtcbiAgICAgICAgcmVyZW5kZXIoKTtcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKClcbiAgICB9KTtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHByb2plY3QuZGVsZXRlVGFzaygrdGhpcy5kYXRhc2V0LmlkKVxuICAgICAgICByZXJlbmRlcigpXG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpXG4gICAgfSlcbiAgICBcbiAgICByZXR1cm4gbGk7XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlcihmLCBkZWxheSkge1xuICAgIGxldCB0aW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmKC4uLmFyZ3MpXG4gICAgICAgIH0sIGRlbGF5KVxuICAgIH1cbn0iLCJcblxuY29uc3QgcHJvdG8gPSB7XG5cdGFkZFRhc2sodGFzaykge1xuXHRcdHRhc2sucHJvamVjdCA9IHRoaXMudGl0bGU7XG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHR9LFxuXHRkZWxldGVUYXNrKGlkKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGhpcy50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gaWQpKTtcblx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSlcblx0fSxcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QodGl0bGU9XCJOZXcgUHJvamVjdFwiLCB0YXNrcz1bXSwgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIHt0aXRsZSwgdGFza3MsIGlkfSk7XG5cbn1cbiIsIlxuXG5cbmZ1bmN0aW9uIHNvcnRCeUNvbXBsZXRlKGFycikge1xuICAgIGxldCBhcnIxID0gYXJyLmZpbHRlcigodGFzaykgPT4gIXRhc2suaXNDb21wbGV0ZSk7XG4gICAgbGV0IGFycjIgPSBhcnIuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlzQ29tcGxldGUpO1xuICAgIHJldHVybiBbYXJyMSwgYXJyMl07XG59XG5cbmZ1bmN0aW9uIHNvcnRCeURhdGUoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBhLmRhdGUuZ2V0VGltZSgpIC0gYi5kYXRlLmdldFRpbWUoKSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRCeVByaW9yaXR5KGFycikge1xuICAgIHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xufVxuZnVuY3Rpb24gc29ydEJ5RGF0ZURvbmUoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBiLmRhdGVEb25lLmdldFRpbWUoKSAtIGEuZGF0ZURvbmUuZ2V0VGltZSgpKTtcbn1cblxuZXhwb3J0IHtzb3J0QnlQcmlvcml0eSwgc29ydEJ5RGF0ZURvbmUsIHNvcnRCeURhdGUsIHNvcnRCeUNvbXBsZXRlfSIsIlxuaW1wb3J0IGRlYm91bmNlciBmcm9tIFwiLi9kZWJvdW5jZXIuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QtZmFjdG9yeS5qc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kby1mYWN0b3J5LmpzXCI7XG5cbmNvbnN0IHN0YXRlID0ge1xuXHRhY3RpdmVUYWI6IDAsXG5cdHNldFRhYih0YWIpIHtcblx0XHR0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcblx0fSxcblxuXHRhZGRQcm9qZWN0KHRpdGxlKSB7XG5cdFx0aWYgKCF0aGlzLnByb2plY3RzLmV2ZXJ5KHAgPT4gcC50aXRsZSAhPT0gdGl0bGUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIilcblx0XHR9XG5cdFx0dGhpcy5wcm9qZWN0cy5wdXNoKFByb2plY3QodGl0bGUpKVxuXHR9LFxuXHRkZWxldGVQcm9qZWN0KGlkKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmluZGV4T2YodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gaWQpKTtcblx0XHR0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcblx0fSxcblxuXHRzYXZlU3RhdGUoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcykpXG5cdH0sXG5cdHJldHJpZXZlU3RhdGUoKSB7XG5cdFx0aWYgKCFsb2NhbFN0b3JhZ2Uuc3RhdGUpIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsIEpTT04uc3RyaW5naWZ5KHRoaXMpKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc3RhdGUpO1xuXHRcdFxuXHRcdGxldCBwcm9qZWN0cyA9IFtdO1xuXHRcdGRhdGEucHJvamVjdHMuZm9yRWFjaChwID0+IHtcdFx0Ly8gcCAtIGlzIGp1c3QgYSBzaGVsbCBvZiBkYXRhLCBubyBtZXRob2RzXG5cdFx0XHRsZXQgdGFza3MgPSBbXTtcblx0XHRcdHAudGFza3MuZm9yRWFjaCh0ID0+IHtcdFx0Ly8gdCAtIGlzIGp1c3QgYSBzaGVsbCBvZiBkYXRhLCBubyBtZXRob2RzXG5cdFx0XHRcdHRhc2tzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIFRvZG8oXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmlzQ29tcGxldGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodC5kYXRlRG9uZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnN1YnRhc2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5pZFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcblx0XHRcdH0pXG5cdFx0XHRwcm9qZWN0cy5wdXNoKFByb2plY3QocC50aXRsZSwgdGFza3MsIHAuaWQpKVxuXHRcdH0pXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdhY3RpdmVUYWInLCB7J3ZhbHVlJzogZGF0YS5hY3RpdmVUYWJ9KVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncHJvamVjdHMnLCB7J3ZhbHVlJzogcHJvamVjdHN9KVxuXG5cdH0sXG5cdHByb2plY3RzOiBbXG5cdFx0UHJvamVjdChcIlBlcnNvbmFsXCIpLFxuXHRdLFxufVxuXG5zdGF0ZS5yZXRyaWV2ZVN0YXRlKClcblxuc3RhdGUuc2F2ZVN0YXRlID0gc3RhdGUuc2F2ZVN0YXRlLmJpbmQoc3RhdGUpXG5zdGF0ZS5zYXZlU3RhdGUgPSBkZWJvdW5jZXIoc3RhdGUuc2F2ZVN0YXRlLCA0MDApXG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlOyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IGRlYm91bmNlciBmcm9tIFwiLi9kZWJvdW5jZXIuanNcIjtcblxuY29uc3QgcHJvdG8gPSB7XG4gICAgZWRpdChcbiAgICAgICAgcHJpb3JpdHkgPSB0aGlzLnByaW9yaXR5LFxuICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIHRpdGxlID0gdGhpcy50aXRsZSxcbiAgICAgICAgaXNDb21wbGV0ZSA9IHRoaXMuaXNDb21wbGV0ZSxcbiAgICAgICAgc3VidGFza3MgPSB0aGlzLnN1YnRhc2tzXG4gICAgKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3VidGFza3MgPSBzdWJ0YXNrcztcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gaXNDb21wbGV0ZTtcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKCk7XG4gICAgfSxcbiAgICBtYXJrQ29tcGxldGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZGF0ZURvbmUgPSB2YWx1ZSA/IG5ldyBEYXRlKCkgOiBudWxsO1xuICAgIH0sXG4gICAgY2hhbmdlUHJvamVjdChuZXdQcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3Qgb2xkXyA9IHN0YXRlLnByb2plY3RzLmZpbmQoKHApID0+IHAudGl0bGUgPT09IHRoaXMucHJvamVjdCk7XG4gICAgICAgIGNvbnN0IG5ld18gPSBzdGF0ZS5wcm9qZWN0cy5maW5kKChwKSA9PiBwLnRpdGxlID09PSBuZXdQcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgIG5ld18uYWRkVGFzayh0aGlzKTtcbiAgICAgICAgb2xkXy5kZWxldGVUYXNrKHRoaXMuaWQpO1xuICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyhcbiAgICB0aXRsZSA9IFwiTmV3IHRhc2tcIixcbiAgICBkYXRlID0gbmV3IERhdGUoKSxcbiAgICBwcmlvcml0eSA9IDAsIC8vIDAgLSBub25lLCAxIC0gbG93LCAyIC0gbWlkZGxlLCAzIC0gaGlnaFxuICAgIGlzQ29tcGxldGUgPSBmYWxzZSxcbiAgICBwcm9qZWN0ID0gXCJQZXJzb25hbFwiLFxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgICBkYXRlRG9uZSA9IGlzQ29tcGxldGUgPyBuZXcgRGF0ZSgpIDogbnVsbCxcbiAgICBzdWJ0YXNrcyA9IFtdLFxuICAgIGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbikge1xuICAgIGxldCB0b2RvID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBzdWJ0YXNrcyxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgaXNDb21wbGV0ZSxcbiAgICAgICAgZGF0ZURvbmUsXG4gICAgICAgIGlkLFxuICAgIH07XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIHRvZG8pO1xuICAgIHBsYWNlaG9sZGVyLmVkaXQgPSBwbGFjZWhvbGRlci5lZGl0LmJpbmQocGxhY2Vob2xkZXIpO1xuICAgIHBsYWNlaG9sZGVyLmVkaXQgPSBkZWJvdW5jZXIocGxhY2Vob2xkZXIuZWRpdCwgNTAwKTtcblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbn1cblxuLypcblx0dGhpcyBpcyBub3QgYSBmYWN0b3J5IGZ1bmN0aW9uXG5cdGEgZmFjdG9yeSBmdW5jdGlvbiBzdXBwb3NlZCBleHBvc2UgYW4gaW50ZXJhZmFjZVxuXHRidXQgdGhpcyBvbmUgYWN0dWFsbHkganVzdCByZXR1cm5zIHRoZSBvYmplY3QgaXRzZWxmXG4gKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kby1mYWN0b3J5LmpzXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnRzL1NpZGViYXIuanNcIjtcbmltcG9ydCBBbGxQcm9qZWN0cyBmcm9tIFwiLi9jb21wb25lbnRzL0FsbFByb2plY3RzLmpzXCI7XG5pbXBvcnQgQWxsVGFza3MgZnJvbSBcIi4vY29tcG9uZW50cy9BbGxUYXNrcy5qc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9J3Jvb3QnPjwvZGl2PlwiXG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuXG5jb25zdCBzaWRlYmFyID0gU2lkZWJhcigodGFiKSA9PiB7XG5cdGlmKHN0YXRlLmFjdGl2ZVRhYiAhPT0gdGFiKSB7XG5cdFx0c3RhdGUuc2V0VGFiKHRhYilcblx0XHRyZW5kZXIoKTtcblx0fVxufSk7XG5cbmNvbnN0IHRhYnMgPSBbXG5cdEFsbFByb2plY3RzKHN0YXRlLnByb2plY3RzKSwgXG5cdEFsbFRhc2tzKHN0YXRlLnByb2plY3RzLCByZW5kZXIpLFxuXHQvLyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5dO1xuXG5cbnJvb3QuYXBwZW5kQ2hpbGQoc2lkZWJhcilcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuXG5cdHJvb3QuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuXHRcdGlmKG5vZGUuaWQgIT09IFwic2lkZWJhclwiKSBub2RlLnJlbW92ZSgpO1xuXHR9KVxuXG5cdHJvb3QuYXBwZW5kQ2hpbGQodGFic1tzdGF0ZS5hY3RpdmVUYWJdKVxuXHRcblx0dGFic1tzdGF0ZS5hY3RpdmVUYWJdLnJlbmRlcigpXG5cdHN0YXRlLnNhdmVTdGF0ZSgpXG59XG5cbnJlbmRlcigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9