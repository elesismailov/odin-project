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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: #3f00ff none repeat scroll 0% 0%;\n  font-family: \"Helvetica\", sans-serif;\n  font-size: 1.6rem;\n}\n\nul, ol, li, details, summary {\n  list-style: none;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n}\n\n#sidebar {\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 6.4rem;\n  z-index: 99;\n}\n#sidebar nav {\n  background: #8762b1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4.8rem 0 0;\n  gap: 2.8rem;\n}\n#sidebar nav .sidebar-icon {\n  background: #fff;\n  width: 4.8rem;\n  height: 4.8rem;\n  border-radius: 5rem;\n  font-size: 2.6rem;\n  transition: all 250ms linear;\n  position: relative;\n}\n#sidebar nav .sidebar-icon:hover {\n  border-radius: 1.5rem;\n}\n#sidebar nav .sidebar-icon .tooltip {\n  background: #333;\n  color: #fff;\n  border-radius: 7px;\n  font-size: 1.6rem;\n  padding: 1rem;\n  pointer-events: none;\n  position: absolute;\n  top: 0.6rem;\n  left: 75px;\n  width: max-content;\n  transition: 100ms linear;\n  transform: scale(0);\n}\n#sidebar nav .sidebar-icon:hover .tooltip {\n  transform: scale(1);\n}\n@media screen and (max-width: 600px) {\n  #sidebar {\n    height: 9vh;\n    width: 100vw;\n    top: unset;\n    bottom: 0;\n  }\n  #sidebar nav {\n    background: #fff;\n    width: 100%;\n    height: 100%;\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 0;\n  }\n  #sidebar nav .sidebar-icon {\n    background: #8762b1;\n    color: #fff;\n  }\n  #sidebar nav .sidebar-icon .tooltip {\n    display: none;\n  }\n}\n\n#all-projects {\n  margin-left: 6.4rem;\n  position: relative;\n  padding: 2.4rem;\n}\n#all-projects h1 {\n  color: #fff;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#all-projects > ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));\n  gap: 2rem;\n  justify-items: center;\n}\n#all-projects > ul > li {\n  width: 25rem;\n  height: 25rem;\n}\n#all-projects > ul .project {\n  width: 25rem;\n  height: 25rem;\n  background: #fff;\n  border-radius: 0.8rem;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  text-align: left;\n  color: #333;\n}\n#all-projects > ul .project h2 {\n  font-size: 2rem;\n}\n#all-projects > ul .project .msg {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n}\n#all-projects > ul .project > ul {\n  padding: 1.4rem;\n}\n@media screen and (max-width: 600px) {\n  #all-projects {\n    margin: 0;\n    padding-bottom: 11vh;\n  }\n}\n\n#project-page {\n  padding: 2.4rem;\n  position: absolute;\n  background-color: #8000ff;\n  min-height: 100vh;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n#project-page .back {\n  width: 4rem;\n  height: 4rem;\n  background: #fff;\n  border-radius: 10rem;\n  margin-bottom: 1rem;\n}\n#project-page .back:hover {\n  filter: brightness(0.9);\n}\n#project-page .back:active {\n  filter: brightness(0.8);\n}\n#project-page header {\n  position: fixed;\n  top: 0;\n  left: 6.4rem;\n  padding: 2.4rem 2.4rem 1rem;\n  z-index: 1;\n  width: calc(100% - 6.4rem);\n  background-color: #8000ff;\n  box-shadow: #843d84 0px -11px 29px 1px;\n  padding-bottom: 1rem;\n}\n#project-page header .title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#project-page header .title-wrapper h1 {\n  margin: 0;\n}\n#project-page header .title-wrapper button {\n  width: 7rem;\n  height: 3rem;\n  border-radius: 4px;\n  background: #fff;\n  font-size: 1.5rem;\n}\n#project-page h2 {\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 3rem;\n}\n#project-page .msg {\n  height: 100vh;\n  width: 100vw;\n  max-width: unset;\n  top: 0;\n  left: 3.2rem;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n#project-page ul {\n  margin-top: 17.4rem;\n  overflow: auto;\n}\n@media screen and (max-width: 600px) {\n  #project-page {\n    padding-bottom: 11vh;\n  }\n  #project-page header {\n    width: 100%;\n    left: 0;\n  }\n}\n\n#quick-task form {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  border-radius: 4px;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  color: #fff;\n}\n#quick-task form .line-through {\n  text-decoration: line-through;\n}\n#quick-task form input[type=text] {\n  height: 3rem;\n  border: none;\n  appearance: none;\n  color: #fff;\n  background: transparent;\n  font-size: 1.6rem;\n  outline: none;\n  flex-grow: 1;\n  width: 100%;\n}\n#quick-task form input[type=text]::placeholder {\n  color: #fff;\n}\n#quick-task form input[type=checkbox][checked=\"\"] {\n  background: #03f3f3;\n}\n#quick-task form select {\n  height: 3rem;\n  width: 4rem;\n  background: #fff;\n  border: none;\n  appearance: none;\n  margin: 0 1rem;\n}\n#quick-task form .plus {\n  width: 6rem;\n  height: 3rem;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  align-items: center;\n  font-size: 3rem;\n}\n#quick-task form .input {\n  display: flex;\n  flex-grow: 1;\n}\n#quick-task form .checkbox {\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#quick-task form input[type=checkbox] {\n  margin: 0 1rem 0 1rem;\n  appearance: none;\n  border-radius: 10rem;\n  border: 1px solid #fff;\n  background: transparent;\n  width: 2.1rem;\n  height: 2.1rem;\n}\n#quick-task form .priority {\n  width: 0.5rem;\n  height: 3rem;\n  display: inline-block;\n  margin-right: 0.5rem;\n  border-radius: 4px 0 0 4px;\n  background: #fff;\n}\n#quick-task form .project-dropdown {\n  position: relative;\n}\n#quick-task form .project-dropdown button {\n  width: 10rem;\n  height: 3rem;\n  border-radius: 4px;\n}\n#quick-task form .project-dropdown ul {\n  position: absolute;\n  background: #fff;\n  border-radius: 4px;\n  display: none;\n  top: -100px;\n}\n#quick-task form .project-dropdown ul li {\n  margin-bottom: 2px;\n}\n#quick-task form .project-dropdown > button[aria-expanded=true] ~ ul {\n  display: block;\n}\n\n#all-tasks {\n  margin-left: 6.4rem;\n  padding: 2.4rem;\n  background-color: #831b83;\n  min-height: 100vh;\n}\n#all-tasks header {\n  position: fixed;\n  background-color: #831b83;\n  box-shadow: #662c66 0px -11px 29px 1px;\n  top: 0;\n  left: 6.4rem;\n  padding: 2.4rem 2.4rem 1rem;\n  z-index: 1;\n  width: calc(100% - 6.4rem);\n}\n#all-tasks h1 {\n  color: #fff;\n}\n#all-tasks h1, #all-tasks h2 {\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#all-tasks .msg {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n#all-tasks ul {\n  margin-top: 13.2rem;\n  overflow: auto;\n}\n@media (max-width: 600px) {\n  #all-tasks {\n    margin-left: 0;\n    min-height: 100vh;\n    padding-bottom: 11vh;\n  }\n  #all-tasks header {\n    left: 0;\n    width: 100%;\n  }\n}\n\n.last-active {\n  margin-bottom: 5rem;\n}\n\n.details-task {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.details-task > div .edit-form {\n  display: flex;\n  padding: 2.4rem;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.details-task > div .edit-form > * {\n  flex: 0 48%;\n}\n.details-task > div .edit-form button {\n  max-width: 10rem;\n  margin-left: auto;\n  padding: 0.6rem;\n  border-radius: 4px;\n  background: #2466e4;\n  color: #fff;\n  font-size: 1.5rem;\n}\n.details-task > div .edit-form button:hover {\n  filter: brightness(1.1);\n}\n.details-task > div .edit-form button:active {\n  filter: brightness(0.9);\n}\n.details-task > div .edit-form textarea {\n  flex: 1 100%;\n  min-height: 100px;\n  border-radius: 4px;\n  appearance: none;\n  border: none;\n  padding: 1rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1.6rem;\n  background: #ffffff80;\n}\n.details-task > div .edit-form .priority-select {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.details-task > div .edit-form .priority-select label {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.details-task > div .edit-form .priority-select label input {\n  display: inline-block;\n  background: purple;\n}\n.details-task .task {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  max-width: 60rem;\n  margin: auto;\n  color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.details-task .task .line-through {\n  text-decoration: line-through;\n}\n.details-task .task input, .details-task .task button {\n  width: 3rem;\n  height: 3rem;\n  background: #fff;\n}\n.details-task .task input {\n  margin-right: 1rem;\n}\n.details-task .task input[type=checkbox] {\n  appearance: none;\n  border-radius: 10rem;\n  border: 1px solid #fff;\n  background: transparent;\n  width: 2.1rem;\n  height: 2.1rem;\n}\n.details-task .task input[type=checkbox][checked=\"\"] {\n  background: #03f3f3;\n}\n.details-task .task .special {\n  margin-left: auto;\n}\n.details-task .task .project-title {\n  margin: 0 1rem 0 auto;\n  transform: translateX(3rem);\n  transition: 250ms ease;\n}\n.details-task .task .delete-task {\n  transform: translateX(100%);\n  transition: 250ms ease;\n  cursor: pointer;\n  font-size: 2rem;\n}\n.details-task .task .priority {\n  width: 0.5rem;\n  height: 3rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n.details-task .task .priority-3 {\n  background: red;\n}\n.details-task .task .priority-2 {\n  background: yellow;\n}\n.details-task .task .priority-1 {\n  background: green;\n}\n.details-task .task .priority-0 {\n  background: transparent;\n}\n.details-task .task:hover .project-title {\n  transform: translateX(0);\n}\n.details-task .task:hover .delete-task {\n  transform: translateX(0);\n}\n@media (max-width: 600px) {\n  .details-task .task .project-title {\n    display: none;\n  }\n  .details-task .task .delete-task {\n    transform: none;\n    margin-left: auto;\n  }\n}\n\n#new-project form {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  border-radius: 4px;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 3rem;\n  color: #fff;\n  overflow: hidden;\n}\n#new-project form input[type=text] {\n  height: 4rem;\n  border: none;\n  appearance: none;\n  color: #fff;\n  background: transparent;\n  padding-left: 2rem;\n  font-size: 1.6rem;\n  outline: none;\n  width: 100%;\n}\n#new-project form input[type=text]::placeholder {\n  color: #fff;\n}\n#new-project form label {\n  flex-grow: 1;\n}\n#new-project form .plus {\n  width: 8rem;\n  height: 4rem;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\n\tfont-size: 62.5%;\n}\n\n* {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbody {\n\tbackground: rgb(63, 0, 255) none repeat scroll 0% 0%;\n\tfont-family: \"Helvetica\", sans-serif;\n\tfont-size: 1.6rem;\n}\n\nul, ol, li, details, summary {\n\tlist-style: none;\n}\nbutton {\n\tappearance: none;\n\tborder: none;\n\t// &:hover {filter: brightness(1.1)}\n\t// &:active {filter: brightness(0.9)}\n}\n// p {\n// \tmargin-bottom: -4px;\n// }\n\n#sidebar {\n\tbackground: transparent;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\theight: 100vh;\n\twidth: 6.4rem;\n\tz-index: 99;\n\tnav {\n\t\tbackground: #8762b1;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding: 4.8rem 0 0;\n\t\tgap: 2.8rem;\n\n\t\t.sidebar-icon {\n\t\t\tbackground: #fff;\n\t\t\twidth: 4.8rem;\n\t\t\theight: 4.8rem;\n\t\t\tborder-radius: 5rem;\n\t\t\tfont-size: 2.6rem;\n\t\t\ttransition: all 250ms linear;\n\t\t\tposition: relative;\n\t\t\t&:hover {\n\t\t\t\tborder-radius: 1.5rem;\n\t\t\t}\n\n\t\t\t.tooltip {\n\t\t\t\tbackground: #333;\n\t\t\t\tcolor: #fff;\n\t\t\t\tborder-radius: 7px;\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tpadding: 1rem;\n\t\t\t\t\n\t\t\t\tpointer-events: none;\n\t\t\t\t\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: .6rem;\n\t\t\t\tleft: 75px;\n\n\t\t\t\twidth: max-content;\n\t\t\t\ttransition: 100ms linear;\n\t\t\t\ttransform: scale(0);\n\t\t\t}\n\t\t\t&:hover .tooltip {\n\t\t\t\ttransform: scale(1);\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: 9vh;\n\t\twidth: 100vw;\n\t\ttop: unset;\n\t\tbottom: 0;\n\t\tnav {\n\t\t\tbackground: #fff;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-around;\n\t\t\tpadding: 0;\n\t\t\t.sidebar-icon {\n\t\t\t\tbackground: #8762b1;\n\t\t\t\tcolor: #fff;\n\t\t\t\t.tooltip {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\n\n#all-projects {\n\tmargin-left: 6.4rem;\n\tposition: relative;\n\tpadding: 2.4rem;\n\th1 {\n\t\tcolor: #fff;\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tmargin-bottom: 2rem;\n\t}\n\t> ul {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fill,minmax(25rem, 1fr));\n\t\tgap: 2rem;\n\t\tjustify-items: center;\n\t\t> li {\n\t\t\twidth: 25rem;\n\t\t\theight: 25rem;\n\t\t}\n\t\t.project {\n\t\t\twidth: 25rem;\n\t\t\theight: 25rem;\n\t\t\tbackground: #fff;\n\t\t\tborder-radius: .8rem;\n\t\t\tpadding: 2rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-size: 1.6rem;\n\t\t\ttext-align: left;\n\t\t\tcolor: #333;\n\t\t\th2{\n\t\t\t\tfont-size: 2rem;\n\t\t\t}\n\t\t\t.msg {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 1.7rem;\n\t\t\t}\n\t\t\t> ul {\n\t\t\t\tpadding: 1.4rem;\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 0;\n\t\tpadding-bottom: 11vh;\n\t}\n}\n\n\n#project-page {\n\tpadding: 2.4rem;\n\tposition: absolute;\n\tbackground-color: #8000ff;\n\tmin-height: 100vh;\n\t// height: 100%;\n\twidth: 100%;\n\tleft: 0;\n\ttop: 0;\n\t.back {\n\t\twidth: 4rem;\n\t\theight: 4rem;\n\t\tbackground: #fff;\n\t\tborder-radius: 10rem;\n\t\tmargin-bottom: 1rem;\n\t\t&:hover {filter: brightness(0.9)}\n\t\t&:active {filter: brightness(0.8)}\n\t}\n\theader {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 6.4rem;\n\t\tpadding: 2.4rem 2.4rem 1rem;\n\t\tz-index: 1;\n\t\twidth: calc(100% - 6.4rem);\n\t\t\n\t\tbackground-color: #8000ff;\n\t\tbox-shadow: #843d84 0px -11px 29px 1px;\n\t\tpadding-bottom: 1rem;\n\t\t// max-width: 120rem;\n\t\t// margin: auto;\n\t\t.title-wrapper {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t\t\n\t\t\tmax-width: 60rem;\n\t\t\tmargin: auto;\n\t\t\tmargin-bottom: 2rem;\n\t\t\th1 {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t\twidth: 7rem;\n\t\t\t\theight: 3rem;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tbackground: #fff;\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t}\n\t\t}\n\t}\n\th2 {\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tmargin-bottom: 3rem;\n\t}\n\t.msg {\n\t\theight:100vh;\n\t\twidth: 100vw;\n\t\tmax-width: unset;\n\t\ttop: 0;\n\t\tleft: 3.2rem;\n\t\tposition: fixed;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor: #fff;\n\t}\n\tul {\n\t\t// max-height: 400px;\n\t\tmargin-top: 17.4rem;\n\t\toverflow: auto;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tpadding-bottom: 11vh;\n\t\theader {\n\t\t\twidth: 100%;\n\t\t\tleft: 0;\n\n\t\t}\n\t}\n}\n\n\n#quick-task form{\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #ffffff40;\n\tborder-radius: 4px;\n\tmax-width: 60rem;\n\tmargin: auto;\n\tmargin-bottom: 1rem;\n\tcolor: #fff;\n\t// overflow: hidden;\n\t.line-through {\n\t\ttext-decoration: line-through;\n\t}\n\tinput[type='text'] {\n\t\theight: 3rem;\n\t\tborder: none;\n\t\tappearance: none;\n\t\tcolor: #fff;\n\t\tbackground: transparent;\n\t\tfont-size: 1.6rem;\n\t\toutline: none;\n\t\tflex-grow: 1;\n\t\twidth: 100%;\n\t\t&::placeholder {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\tinput[type='checkbox'][checked=''] {\n\t\tbackground: #03f3f3;\n\t}\n\tselect {\n\t\theight: 3rem;\n\t\twidth: 4rem;\n\t\tbackground: #fff;\n\t\tborder: none;\n\t\tappearance: none;\n\t\tmargin: 0 1rem;\n\t\t// border-radius: 0 4px 4px 0;\n\t}\n\t.plus {\n\t\twidth: 6rem;\n\t\theight: 3rem;\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tcolor: #fff;\n\t\talign-items: center;\n\t\tfont-size: 3rem;\n\t}\n\t.input {\n\t\tdisplay: flex;\n\t\tflex-grow: 1;\n\t}\n\t.checkbox {\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\tinput[type='checkbox'] {\n\t\tmargin: 0 1rem 0 1rem;\n\t\tappearance: none;\n\t\tborder-radius: 10rem;\n\t\tborder: 1px solid #fff;\n\t\tbackground: transparent;\n\t\twidth: 2.1rem;\n\t\theight: 2.1rem;\n\t}\n\n\t.priority {\n\t\twidth: .5rem;\n\t\theight: 3rem;\n\t\tdisplay: inline-block;\n\t\tmargin-right: 0.5rem;\n\t\tborder-radius: 4px 0 0 4px;\n\t\tbackground: #fff;\n\t}\n\n\t.project-dropdown {\n\t\t// background: yellow;\n\n\t\tposition: relative;\n\t\tbutton {\n\t\t\twidth: 10rem;\n\t\t\theight: 3rem;\n\t\t\tborder-radius: 4px;\n\t\t}\n\t\tul {\n\t\t\tposition: absolute;\n\t\t\tbackground: #fff;\n\t\t\tborder-radius: 4px;\n\t\t\tdisplay: none;\n\t\t\ttop: -100px;\n\t\t\tli {\n\t\t\t\tmargin-bottom: 2px;\n\t\t\t}\n\t\t}\n\t\t> button[aria-expanded='true'] ~ ul {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n\n\n#all-tasks {\n\t\n\tmargin-left: 6.4rem;\n\tpadding: 2.4rem;\n\tbackground-color: #831b83;\n\tmin-height: 100vh;\n\t// width: 100%;\n\n\theader {\n\t\tposition: fixed;\n\t\tbackground-color: #831b83;\n\t\t// box-shadow: #521952 0px -11px 81px 1px;\n\t\tbox-shadow: #662c66 0px -11px 29px 1px;\n\t\ttop: 0;\n\t\tleft: 6.4rem;\n\t\tpadding: 2.4rem 2.4rem 1rem;\n\t\tz-index: 1;\n\t\twidth: calc(100% - 6.4rem);\n\t}\n\th1 {\n\t\tcolor: #fff;\n\t}\n\th1, h2 {\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tmargin-bottom: 2rem;\n\t}\n\t.msg {\n\t\theight: 40vh;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor: #fff;\n\t}\n\tul {\n\t\t// max-height: 400px;\n\t\tmargin-top: 13.2rem;\n\t\toverflow: auto;\n\t}\n\t@media (max-width: 600px) {\n\t\tmargin-left: 0;\n\t\tmin-height: 100vh;\n\t\tpadding-bottom: 11vh;\n\t\theader {\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n}\n\n\n.last-active {\n\tmargin-bottom: 5rem;\n}\n.details-task {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #ffffff40;\n\tmax-width: 60rem;\n\tmargin: auto;\n\tmargin-bottom: 2rem;\n\n\tborder-radius: 4px;\n\toverflow: hidden;\n\t> div {\n\t\t.edit-form {\n\t\t\tdisplay: flex;\n\t\t\tpadding: 2.4rem;\n\t\t\tgap: 2rem;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t\t> * {\n\t\t\t\tflex: 0 48%;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t\tmax-width: 10rem;\n\t\t\t\tmargin-left: auto;\n\t\t\t\tpadding: .6rem;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tbackground: #2466e4;\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\t&:hover {filter: brightness(1.1)}\n\t\t\t\t&:active {filter: brightness(0.9)}\n\t\t\t}\n\t\t\ttextarea {\n\t\t\t\tflex: 1 100%;\n\t\t\t\tmin-height: 100px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tappearance: none;\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 1rem;\n\t\t\t\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tbackground: #ffffff80;\n\t\t\t}\n\t\t\t.priority-select {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tgap: 1rem;\n\t\t\t\tlabel {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tgap: 1rem;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tinput {\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tbackground: purple;\n\t\t\t\t\t\t// width: 100%;\n\t\t\t\t\t\t// height: 100%;\n\t\t\t\t\t\t// appearance: none;\n\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.task {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tbackground: #ffffff40;\n\t\tmax-width: 60rem;\n\t\tmargin: auto;\n\t\tcolor: #fff;\n\t\tborder-radius: 4px;\n\t\toverflow: hidden;\n\t\t.line-through {\n\t\t\ttext-decoration: line-through;\n\t\t}\n\t\tinput, button {\n\t\t\twidth: 3rem;\n\t\t\theight: 3rem;\n\t\t\tbackground: #fff;\n\t\t}\n\t\tinput {\n\t\t\tmargin-right: 1rem;\n\t\t}\n\t\tinput[type='checkbox'] {\n\t\t\tappearance: none;\n\t\t\tborder-radius: 10rem;\n\t\t\tborder: 1px solid #fff;\n\t\t\tbackground: transparent;\n\t\t\twidth: 2.1rem;\n\t\t\theight: 2.1rem;\n\t\t}\n\t\tinput[type='checkbox'][checked=''] {\n\t\t\tbackground: #03f3f3;\n\t\t}\n\t\t.special {\n\t\t\tmargin-left: auto;\n\t\t}\n\t\t.project-title {\n\t\t\tmargin: 0 1rem 0 auto;\n\t\t\ttransform: translateX(3rem);\n\t\t\ttransition: 250ms ease;\n\t\t}\n\t\t.delete-task {\n\t\t\ttransform: translateX(100%);\n\t\t\ttransition: 250ms ease;\n\t\t\tcursor: pointer;\n\t\t\tfont-size: 2rem;\n\t\t\t// background: transparent;\n\t\t\t// color: #FFF;\n\t\t}\n\t\t.priority {\n\t\t\twidth: .5rem;\n\t\t\theight: 3rem;\n\t\t\tdisplay: inline-block;\n\t\t\tmargin-right: 1rem;\n\t\t\t&-3{background: red;}\n\t\t\t&-2{background: yellow;}\n\t\t\t&-1{background: green;}\n\t\t\t&-0{background: transparent;}\n\t\t}\n\n\t\t&:hover .project-title {\n\t\t\ttransform: translateX(0)\n\t\t}\n\t\t&:hover .delete-task {\n\t\t\ttransform: translateX(0)\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.project-title {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.delete-task {\n\t\t\t\ttransform: none;\n\t\t\t\tmargin-left: auto;\n\t\t\t}\n\t\t}\n\t}\n}\n\n\n\n\n\n#new-project form{\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #ffffff40;\n\tborder-radius: 4px;\n\tmax-width: 60rem;\n\tmargin: auto;\n\tmargin-bottom: 3rem;\n\tcolor: #fff;\n\toverflow: hidden;\n\n\tinput[type='text'] {\n\t\theight: 4rem;\n\t\tborder: none;\n\t\tappearance: none;\n\t\tcolor: #fff;\n\t\tbackground: transparent;\n\t\tpadding-left: 2rem;\n\t\tfont-size: 1.6rem;\n\t\toutline: none;\n\t\twidth: 100%;\n\t\t&::placeholder {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\tlabel {\n\t\tflex-grow: 1;\n\t}\n\t.plus {\n\t\twidth: 8rem;\n\t\theight: 4rem;\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-size: 3rem;\n\t\tcolor: #fff;\n\t}\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcs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c3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9OZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvUXVpY2tUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVib3VuY2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzNmMDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxudWwsIG9sLCBsaSwgZGV0YWlscywgc3VtbWFyeSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiA2LjRyZW07XFxuICB6LWluZGV4OiA5OTtcXG59XFxuI3NpZGViYXIgbmF2IHtcXG4gIGJhY2tncm91bmQ6ICM4NzYyYjE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDA7XFxuICBnYXA6IDIuOHJlbTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiA0LjhyZW07XFxuICBoZWlnaHQ6IDQuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNzaWRlYmFyIG5hdiAuc2lkZWJhci1pY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb24gLnRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNnJlbTtcXG4gIGxlZnQ6IDc1cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4jc2lkZWJhciBuYXYgLnNpZGViYXItaWNvbjpob3ZlciAudG9vbHRpcCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3NpZGViYXIge1xcbiAgICBoZWlnaHQ6IDl2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB0b3A6IHVuc2V0O1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuICAjc2lkZWJhciBuYXYge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gICNzaWRlYmFyIG5hdiAuc2lkZWJhci1pY29uIHtcXG4gICAgYmFja2dyb3VuZDogIzg3NjJiMTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICAjc2lkZWJhciBuYXYgLnNpZGViYXItaWNvbiAudG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbiNhbGwtcHJvamVjdHMge1xcbiAgbWFyZ2luLWxlZnQ6IDYuNHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG59XFxuI2FsbC1wcm9qZWN0cyBoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4jYWxsLXByb2plY3RzID4gdWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1cmVtLCAxZnIpKTtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsID4gbGkge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsIC5wcm9qZWN0IHtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbiNhbGwtcHJvamVjdHMgPiB1bCAucHJvamVjdCBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbiNhbGwtcHJvamVjdHMgPiB1bCAucHJvamVjdCAubXNnIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG4jYWxsLXByb2plY3RzID4gdWwgLnByb2plY3QgPiB1bCB7XFxuICBwYWRkaW5nOiAxLjRyZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjYWxsLXByb2plY3RzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTF2aDtcXG4gIH1cXG59XFxuXFxuI3Byb2plY3QtcGFnZSB7XFxuICBwYWRkaW5nOiAyLjRyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMGZmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbiNwcm9qZWN0LXBhZ2UgLmJhY2sge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4jcHJvamVjdC1wYWdlIC5iYWNrOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG4jcHJvamVjdC1wYWdlIC5iYWNrOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI3Byb2plY3QtcGFnZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNi40cmVtO1xcbiAgcGFkZGluZzogMi40cmVtIDIuNHJlbSAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2LjRyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBmZjtcXG4gIGJveC1zaGFkb3c6ICM4NDNkODQgMHB4IC0xMXB4IDI5cHggMXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgaGVhZGVyIC50aXRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgaGVhZGVyIC50aXRsZS13cmFwcGVyIGgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuI3Byb2plY3QtcGFnZSBoZWFkZXIgLnRpdGxlLXdyYXBwZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4jcHJvamVjdC1wYWdlIGgyIHtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG4jcHJvamVjdC1wYWdlIC5tc2cge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1heC13aWR0aDogdW5zZXQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzLjJyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNwcm9qZWN0LXBhZ2UgdWwge1xcbiAgbWFyZ2luLXRvcDogMTcuNHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3Byb2plY3QtcGFnZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMXZoO1xcbiAgfVxcbiAgI3Byb2plY3QtcGFnZSBoZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG59XFxuXFxuI3F1aWNrLXRhc2sgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY0MDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNxdWljay10YXNrIGZvcm0gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNxdWljay10YXNrIGZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF1bY2hlY2tlZD1cXFwiXFxcIl0ge1xcbiAgYmFja2dyb3VuZDogIzAzZjNmMztcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wbHVzIHtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbiNxdWljay10YXNrIGZvcm0gLmlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLmNoZWNrYm94IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogMi4xcmVtO1xcbiAgaGVpZ2h0OiAyLjFyZW07XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnByaW9yaXR5IHtcXG4gIHdpZHRoOiAwLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAucHJvamVjdC1kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnByb2plY3QtZHJvcGRvd24gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAucHJvamVjdC1kcm9wZG93biB1bCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogLTEwMHB4O1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wcm9qZWN0LWRyb3Bkb3duIHVsIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAucHJvamVjdC1kcm9wZG93biA+IGJ1dHRvblthcmlhLWV4cGFuZGVkPXRydWVdIH4gdWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNhbGwtdGFza3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDYuNHJlbTtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzFiODM7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuI2FsbC10YXNrcyBoZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzMWI4MztcXG4gIGJveC1zaGFkb3c6ICM2NjJjNjYgMHB4IC0xMXB4IDI5cHggMXB4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNi40cmVtO1xcbiAgcGFkZGluZzogMi40cmVtIDIuNHJlbSAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2LjRyZW0pO1xcbn1cXG4jYWxsLXRhc2tzIGgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4jYWxsLXRhc2tzIGgxLCAjYWxsLXRhc2tzIGgyIHtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4jYWxsLXRhc2tzIC5tc2cge1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4jYWxsLXRhc2tzIHVsIHtcXG4gIG1hcmdpbi10b3A6IDEzLjJyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAjYWxsLXRhc2tzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTF2aDtcXG4gIH1cXG4gICNhbGwtdGFza3MgaGVhZGVyIHtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5sYXN0LWFjdGl2ZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uZGV0YWlscy10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjQwO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlscy10YXNrID4gZGl2IC5lZGl0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtID4gKiB7XFxuICBmbGV4OiAwIDQ4JTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjMjQ2NmU0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbjphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSB0ZXh0YXJlYSB7XFxuICBmbGV4OiAxIDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmODA7XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSAucHJpb3JpdHktc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSAucHJpb3JpdHktc2VsZWN0IGxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlscy10YXNrID4gZGl2IC5lZGl0LWZvcm0gLnByaW9yaXR5LXNlbGVjdCBsYWJlbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgaW5wdXQsIC5kZXRhaWxzLXRhc2sgLnRhc2sgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayBpbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDIuMXJlbTtcXG4gIGhlaWdodDogMi4xcmVtO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdW2NoZWNrZWQ9XFxcIlxcXCJdIHtcXG4gIGJhY2tncm91bmQ6ICMwM2YzZjM7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnNwZWNpYWwge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnByb2plY3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDFyZW0gMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAuZGVsZXRlLXRhc2sge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAucHJpb3JpdHktMyB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnByaW9yaXR5LTIge1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5wcmlvcml0eS0xIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5wcmlvcml0eS0wIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrOmhvdmVyIC5wcm9qZWN0LXRpdGxlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzazpob3ZlciAuZGVsZXRlLXRhc2sge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5kZXRhaWxzLXRhc2sgLnRhc2sgLnByb2plY3QtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRldGFpbHMtdGFzayAudGFzayAuZGVsZXRlLXRhc2sge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4jbmV3LXByb2plY3QgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY0MDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jbmV3LXByb2plY3QgZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNuZXctcHJvamVjdCBmb3JtIGlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4jbmV3LXByb2plY3QgZm9ybSBsYWJlbCB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbiNuZXctcHJvamVjdCBmb3JtIC5wbHVzIHtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0MsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRDs7QUFFQTtFQUNDLDRDQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQUNEOztBQUVBO0VBQ0MsZ0JBQUE7QUFDRDs7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQUVEOztBQU1BO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFIRDtBQUlDO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUZIO0FBR0c7RUFDQyxxQkFBQTtBQURKO0FBSUc7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUVBLG9CQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0c7RUFDQyxtQkFBQTtBQUxKO0FBU0M7RUFwREQ7SUFxREUsV0FBQTtJQUNBLFlBQUE7SUFDQSxV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QW9CRztFQUFJLGtCQUFBO0FBakJQO0FBa0JHO0VBQUksaUJBQUE7QUFmUDtBQWdCRztFQUFJLHVCQUFBO0FBYlA7QUFnQkU7RUFDQyx3QkFBQTtBQWRIO0FBZ0JFO0VBQ0Msd0JBQUE7QUFkSDtBQWdCRTtFQUNDO0lBQ0MsYUFBQTtFQWRGO0VBZ0JDO0lBQ0MsZUFBQTtJQUNBLGlCQUFBO0VBZEY7QUFDRjs7QUF1QkE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFwQkQ7QUFzQkM7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBcEJGO0FBcUJFO0VBQ0MsV0FBQTtBQW5CSDtBQXNCQztFQUNDLFlBQUE7QUFwQkY7QUFzQkM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXBCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0Zm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDYzLCAwLCAyNTUpIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTtcXG5cXHRmb250LWZhbWlseTogXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbnVsLCBvbCwgbGksIGRldGFpbHMsIHN1bW1hcnkge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ly8gJjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuXFx0Ly8gJjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpfVxcbn1cXG4vLyBwIHtcXG4vLyBcXHRtYXJnaW4tYm90dG9tOiAtNHB4O1xcbi8vIH1cXG5cXG4jc2lkZWJhciB7XFxuXFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDYuNHJlbTtcXG5cXHR6LWluZGV4OiA5OTtcXG5cXHRuYXYge1xcblxcdFxcdGJhY2tncm91bmQ6ICM4NzYyYjE7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHBhZGRpbmc6IDQuOHJlbSAwIDA7XFxuXFx0XFx0Z2FwOiAyLjhyZW07XFxuXFxuXFx0XFx0LnNpZGViYXItaWNvbiB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRcXHR3aWR0aDogNC44cmVtO1xcblxcdFxcdFxcdGhlaWdodDogNC44cmVtO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVyZW07XFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyLjZyZW07XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMS41cmVtO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQudG9vbHRpcCB7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogIzMzMztcXG5cXHRcXHRcXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMXJlbTtcXG5cXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHRcXHRcXHRcXHRcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0XFx0XFx0dG9wOiAuNnJlbTtcXG5cXHRcXHRcXHRcXHRsZWZ0OiA3NXB4O1xcblxcblxcdFxcdFxcdFxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHRcXHRcXHRcXHR0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0Jjpob3ZlciAudG9vbHRpcCB7XFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcblxcdFxcdGhlaWdodDogOXZoO1xcblxcdFxcdHdpZHRoOiAxMDB2dztcXG5cXHRcXHR0b3A6IHVuc2V0O1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHRuYXYge1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0XFx0XFx0cGFkZGluZzogMDtcXG5cXHRcXHRcXHQuc2lkZWJhci1pY29uIHtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjODc2MmIxO1xcblxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdFxcdFxcdC50b29sdGlwIHtcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXFxuI2FsbC1wcm9qZWN0cyB7XFxuXFx0bWFyZ2luLWxlZnQ6IDYuNHJlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZzogMi40cmVtO1xcblxcdGgxIHtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRtYXgtd2lkdGg6IDYwcmVtO1xcblxcdFxcdG1hcmdpbjogYXV0bztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcblxcdH1cXG5cXHQ+IHVsIHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMjVyZW0sIDFmcikpO1xcblxcdFxcdGdhcDogMnJlbTtcXG5cXHRcXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0PiBsaSB7XFxuXFx0XFx0XFx0d2lkdGg6IDI1cmVtO1xcblxcdFxcdFxcdGhlaWdodDogMjVyZW07XFxuXFx0XFx0fVxcblxcdFxcdC5wcm9qZWN0IHtcXG5cXHRcXHRcXHR3aWR0aDogMjVyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiAyNXJlbTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IC44cmVtO1xcblxcdFxcdFxcdHBhZGRpbmc6IDJyZW07XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0XFx0XFx0Y29sb3I6ICMzMzM7XFxuXFx0XFx0XFx0aDJ7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHQubXNnIHtcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS43cmVtO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHQ+IHVsIHtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxLjRyZW07XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDExdmg7XFxuXFx0fVxcbn1cXG5cXG5cXG4jcHJvamVjdC1wYWdlIHtcXG5cXHRwYWRkaW5nOiAyLjRyZW07XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4MDAwZmY7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0Ly8gaGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdC5iYWNrIHtcXG5cXHRcXHR3aWR0aDogNHJlbTtcXG5cXHRcXHRoZWlnaHQ6IDRyZW07XFxuXFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHJlbTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdFxcdCY6aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpfVxcblxcdFxcdCY6YWN0aXZlIHtmaWx0ZXI6IGJyaWdodG5lc3MoMC44KX1cXG5cXHR9XFxuXFx0aGVhZGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDYuNHJlbTtcXG5cXHRcXHRwYWRkaW5nOiAyLjRyZW0gMi40cmVtIDFyZW07XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHR3aWR0aDogY2FsYygxMDAlIC0gNi40cmVtKTtcXG5cXHRcXHRcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMGZmO1xcblxcdFxcdGJveC1zaGFkb3c6ICM4NDNkODQgMHB4IC0xMXB4IDI5cHggMXB4O1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcblxcdFxcdC8vIG1heC13aWR0aDogMTIwcmVtO1xcblxcdFxcdC8vIG1hcmdpbjogYXV0bztcXG5cXHRcXHQudGl0bGUtd3JhcHBlciB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDYwcmVtO1xcblxcdFxcdFxcdG1hcmdpbjogYXV0bztcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcblxcdFxcdFxcdGgxIHtcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdGJ1dHRvbiB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDdyZW07XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcdGgyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDYwcmVtO1xcblxcdFxcdG1hcmdpbjogYXV0bztcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzcmVtO1xcblxcdH1cXG5cXHQubXNnIHtcXG5cXHRcXHRoZWlnaHQ6MTAwdmg7XFxuXFx0XFx0d2lkdGg6IDEwMHZ3O1xcblxcdFxcdG1heC13aWR0aDogdW5zZXQ7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDMuMnJlbTtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXHR1bCB7XFxuXFx0XFx0Ly8gbWF4LWhlaWdodDogNDAwcHg7XFxuXFx0XFx0bWFyZ2luLXRvcDogMTcuNHJlbTtcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXG5cXHR9XFxuXFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTF2aDtcXG5cXHRcXHRoZWFkZXIge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGxlZnQ6IDA7XFxuXFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXFxuI3F1aWNrLXRhc2sgZm9ybXtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogI2ZmZmZmZjQwO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRtYXgtd2lkdGg6IDYwcmVtO1xcblxcdG1hcmdpbjogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdC8vIG92ZXJmbG93OiBoaWRkZW47XFxuXFx0LmxpbmUtdGhyb3VnaCB7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFx0fVxcblxcdGlucHV0W3R5cGU9J3RleHQnXSB7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcdFxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdFxcdG91dGxpbmU6IG5vbmU7XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdCY6OnBsYWNlaG9sZGVyIHtcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdGlucHV0W3R5cGU9J2NoZWNrYm94J11bY2hlY2tlZD0nJ10ge1xcblxcdFxcdGJhY2tncm91bmQ6ICMwM2YzZjM7XFxuXFx0fVxcblxcdHNlbGVjdCB7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdHdpZHRoOiA0cmVtO1xcblxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0Ym9yZGVyOiBub25lO1xcblxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0bWFyZ2luOiAwIDFyZW07XFxuXFx0XFx0Ly8gYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxuXFx0fVxcblxcdC5wbHVzIHtcXG5cXHRcXHR3aWR0aDogNnJlbTtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHR9XFxuXFx0LmlucHV0IHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZ3JvdzogMTtcXG5cXHR9XFxuXFx0LmNoZWNrYm94IHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0fVxcblxcdGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcblxcdFxcdG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG5cXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuXFx0XFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuXFx0XFx0d2lkdGg6IDIuMXJlbTtcXG5cXHRcXHRoZWlnaHQ6IDIuMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnByaW9yaXR5IHtcXG5cXHRcXHR3aWR0aDogLjVyZW07XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kcm9wZG93biB7XFxuXFx0XFx0Ly8gYmFja2dyb3VuZDogeWVsbG93O1xcblxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdHdpZHRoOiAxMHJlbTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdH1cXG5cXHRcXHR1bCB7XFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0XFx0dG9wOiAtMTAwcHg7XFxuXFx0XFx0XFx0bGkge1xcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDJweDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdFxcdD4gYnV0dG9uW2FyaWEtZXhwYW5kZWQ9J3RydWUnXSB+IHVsIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cXG5cXG4jYWxsLXRhc2tzIHtcXG5cXHRcXG5cXHRtYXJnaW4tbGVmdDogNi40cmVtO1xcblxcdHBhZGRpbmc6IDIuNHJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODMxYjgzO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdC8vIHdpZHRoOiAxMDAlO1xcblxcblxcdGhlYWRlciB7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM4MzFiODM7XFxuXFx0XFx0Ly8gYm94LXNoYWRvdzogIzUyMTk1MiAwcHggLTExcHggODFweCAxcHg7XFxuXFx0XFx0Ym94LXNoYWRvdzogIzY2MmM2NiAwcHggLTExcHggMjlweCAxcHg7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDYuNHJlbTtcXG5cXHRcXHRwYWRkaW5nOiAyLjRyZW0gMi40cmVtIDFyZW07XFxuXFx0XFx0ei1pbmRleDogMTtcXG5cXHRcXHR3aWR0aDogY2FsYygxMDAlIC0gNi40cmVtKTtcXG5cXHR9XFxuXFx0aDEge1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXHRoMSwgaDIge1xcblxcdFxcdG1heC13aWR0aDogNjByZW07XFxuXFx0XFx0bWFyZ2luOiBhdXRvO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFx0fVxcblxcdC5tc2cge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcdHVsIHtcXG5cXHRcXHQvLyBtYXgtaGVpZ2h0OiA0MDBweDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMy4ycmVtO1xcblxcdFxcdG92ZXJmbG93OiBhdXRvO1xcblxcdH1cXG5cXHRAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTF2aDtcXG5cXHRcXHRoZWFkZXIge1xcblxcdFxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXFxuLmxhc3QtYWN0aXZlIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG4uZGV0YWlscy10YXNrIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogI2ZmZmZmZjQwO1xcblxcdG1heC13aWR0aDogNjByZW07XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0PiBkaXYge1xcblxcdFxcdC5lZGl0LWZvcm0ge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0cGFkZGluZzogMi40cmVtO1xcblxcdFxcdFxcdGdhcDogMnJlbTtcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRcXHQ+ICoge1xcblxcdFxcdFxcdFxcdGZsZXg6IDAgNDglO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdFxcdG1heC13aWR0aDogMTByZW07XFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0XFx0XFx0cGFkZGluZzogLjZyZW07XFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6ICMyNDY2ZTQ7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSl9XFxuXFx0XFx0XFx0XFx0JjphY3RpdmUge2ZpbHRlcjogYnJpZ2h0bmVzcygwLjkpfVxcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHR0ZXh0YXJlYSB7XFxuXFx0XFx0XFx0XFx0ZmxleDogMSAxMDAlO1xcblxcdFxcdFxcdFxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRcXHRcXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdFxcdFxcdFxcdGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiAjZmZmZmZmODA7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdC5wcmlvcml0eS1zZWxlY3Qge1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdFxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRcXHRcXHRsYWJlbCB7XFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0XFx0XFx0aW5wdXQge1xcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiBwdXJwbGU7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Ly8gd2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0XFx0XFx0XFx0Ly8gaGVpZ2h0OiAxMDAlO1xcblxcdFxcdFxcdFxcdFxcdFxcdC8vIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQudGFzayB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQ6ICNmZmZmZmY0MDtcXG5cXHRcXHRtYXgtd2lkdGg6IDYwcmVtO1xcblxcdFxcdG1hcmdpbjogYXV0bztcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRcXHQubGluZS10aHJvdWdoIHtcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHRcXHR9XFxuXFx0XFx0aW5wdXQsIGJ1dHRvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDNyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0XFx0fVxcblxcdFxcdGlucHV0IHtcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0XFx0fVxcblxcdFxcdGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcblxcdFxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMTByZW07XFxuXFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRcXHR3aWR0aDogMi4xcmVtO1xcblxcdFxcdFxcdGhlaWdodDogMi4xcmVtO1xcblxcdFxcdH1cXG5cXHRcXHRpbnB1dFt0eXBlPSdjaGVja2JveCddW2NoZWNrZWQ9JyddIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiAjMDNmM2YzO1xcblxcdFxcdH1cXG5cXHRcXHQuc3BlY2lhbCB7XFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0fVxcblxcdFxcdC5wcm9qZWN0LXRpdGxlIHtcXG5cXHRcXHRcXHRtYXJnaW46IDAgMXJlbSAwIGF1dG87XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XFxuXFx0XFx0fVxcblxcdFxcdC5kZWxldGUtdGFzayB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDI1MG1zIGVhc2U7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRcXHQvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRcXHQvLyBjb2xvcjogI0ZGRjtcXG5cXHRcXHR9XFxuXFx0XFx0LnByaW9yaXR5IHtcXG5cXHRcXHRcXHR3aWR0aDogLjVyZW07XFxuXFx0XFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0XFx0XFx0Ji0ze2JhY2tncm91bmQ6IHJlZDt9XFxuXFx0XFx0XFx0Ji0ye2JhY2tncm91bmQ6IHllbGxvdzt9XFxuXFx0XFx0XFx0Ji0xe2JhY2tncm91bmQ6IGdyZWVuO31cXG5cXHRcXHRcXHQmLTB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmOmhvdmVyIC5wcm9qZWN0LXRpdGxlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG5cXHRcXHR9XFxuXFx0XFx0Jjpob3ZlciAuZGVsZXRlLXRhc2sge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcblxcdFxcdH1cXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXHRcXHRcXHQucHJvamVjdC10aXRsZSB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0LmRlbGV0ZS10YXNrIHtcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IG5vbmU7XFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblxcblxcblxcblxcbiNuZXctcHJvamVjdCBmb3Jte1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdG1heC13aWR0aDogNjByZW07XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDNyZW07XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG5cXHRpbnB1dFt0eXBlPSd0ZXh0J10ge1xcblxcdFxcdGhlaWdodDogNHJlbTtcXG5cXHRcXHRib3JkZXI6IG5vbmU7XFxuXFx0XFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFx0XFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHQmOjpwbGFjZWhvbGRlciB7XFxuXFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRsYWJlbCB7XFxuXFx0XFx0ZmxleC1ncm93OiAxO1xcblxcdH1cXG5cXHQucGx1cyB7XFxuXFx0XFx0d2lkdGg6IDhyZW07XFxuXFx0XFx0aGVpZ2h0OiA0cmVtO1xcblxcdFxcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCBQcm9qZWN0Q29tcG9uZW50IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBOZXdQcm9qZWN0IGZyb20gXCIuL05ld1Byb2plY3QuanNcIjtcbmltcG9ydCB7IHNvcnRCeUNvbXBsZXRlIH0gZnJvbSBcIi4uL3NvcnQuanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxQcm9qZWN0cyhwcm9qZWN0cykge1xuXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG5cdHdyYXBwZXIuaWQgPSBcImFsbC1wcm9qZWN0c1wiO1xuXHRcblx0aDEuaW5uZXJIVE1MID0gXCJBbGwgUHJvamVjdHNcIjtcblxuXHRmdW5jdGlvbiByZW5kZXJVbCgpIHtcblx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuXHRcdHVsLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChoMSlcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKE5ld1Byb2plY3QocmVuZGVyVWwpKVxuXG5cdFx0cHJvamVjdHMuZm9yRWFjaCggcHIgPT4ge1xuXHRcdFx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRcdFx0Y29uc3QgdGFza1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRcdFx0Y29uc3QgdGFza3MgPSBzb3J0QnlDb21wbGV0ZShwci50YXNrcylbMF0uc2xpY2UoMCwgOCk7XG5cdFx0XHRcblx0XHRcdHByb2plY3Qub25jbGljayA9ICgpPT4ge1xuXHRcdFx0XHR3cmFwcGVyLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKFByb2plY3RDb21wb25lbnQocHIsIHJlbmRlclVsKSlcblx0XHRcdH1cblxuXHRcdFx0cHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHByLnRpdGxlO1xuXHRcdFx0cHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0XHRcdGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Y29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXHRcdFx0XHRtc2cuY2xhc3NOYW1lID0gXCJtc2dcIlxuXHRcdFx0XHRtc2cudGV4dENvbnRlbnQgPSBcIk5vIFRhc2tzIEhlcmUhXCI7XG5cdFx0XHRcdHByb2plY3QuYXBwZW5kQ2hpbGQobXNnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRcdFx0XHRcdGNvbnN0IHRhc2tMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdFx0XHR0aXRsZS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuXHRcdFx0XHRcdHRhc2tMaS5hcHBlbmRDaGlsZCh0aXRsZSlcblx0XHRcdFx0XHR0YXNrVWwuYXBwZW5kQ2hpbGQodGFza0xpKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0cHJvamVjdC5hcHBlbmRDaGlsZCh0YXNrVWwpO1xuXHRcdFx0fVxuXG5cblx0XHRcdGxpLmFwcGVuZENoaWxkKHByb2plY3QpXG5cdFx0XHR1bC5hcHBlbmRDaGlsZChsaSlcblx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQodWwpO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyVWwoKVxuXHR3cmFwcGVyLnJlbmRlciA9IHJlbmRlclVsO1xuXHRyZXR1cm4gd3JhcHBlcjtcblxufSIsIlxuaW1wb3J0IHtzb3J0QnlQcmlvcml0eSwgc29ydEJ5RGF0ZURvbmUsIHNvcnRCeURhdGUsIHNvcnRCeUNvbXBsZXRlfSBmcm9tIFwiLi4vc29ydC5qc1wiXG5pbXBvcnQgUXVpY2tUYXNrIGZyb20gJy4vUXVpY2tUYXNrLmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbFRhc2tzKHByb2plY3RzLCByZXJlbmRlcikge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGNvbnN0IHF1aWNrVGFzayA9IFF1aWNrVGFzayh1bmRlZmluZWQsIHJlbmRlclVsKVxuICAgIHdyYXBwZXIuaWQgPSBcImFsbC10YXNrc1wiO1xuXG4gICAgaDEuaW5uZXJIVE1MID0gXCJBbGwgVGFza3NcIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHF1aWNrVGFzaylcbiAgICBcbiAgICBtc2cuY2xhc3NOYW1lID0gXCJtc2dcIlxuICAgIG1zZy5pbm5lckhUTUwgPSBcIk5vIHRhc2tzIGhlcmUhXCI7XG4gICAgXG4gICAgY29uc3QgdGFza3MgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclVsKCkge1xuICAgICAgICBxdWlja1Rhc2sucmVuZGVyKClcbiAgICAgICAgdGFza3MubGVuZ3RoID0gMDtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcykpXG4gICAgICAgIFxuICAgICAgICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXNnLnJlbW92ZSgpXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgICAgIGxldCBkb25lID0gc29ydEJ5RGF0ZURvbmUoc29ydEJ5Q29tcGxldGUodGFza3MpWzFdKTtcbiAgICAgICAgICAgIGxldCB1bmRvbmUgPSBzb3J0QnlQcmlvcml0eShcbiAgICAgICAgICAgICAgICBzb3J0QnlEYXRlKHNvcnRCeUNvbXBsZXRlKHRhc2tzKVswXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB1bmRvbmUuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKFRhc2sodCwgcmVuZGVyVWwsICkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1bC5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICAgICAgPyB1bC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJsYXN0LWFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgIGRvbmUuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKFRhc2sodCwgcmVuZGVyVWwsICkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyVWwoKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHVsKVxuXHR3cmFwcGVyLnJlbmRlciA9IHJlbmRlclVsO1xuICAgIHJldHVybiB3cmFwcGVyO1xufVxuIiwiXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Byb2plY3QocmVyZW5kZXIpIHtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuaWQgPSAnbmV3LXByb2plY3QnO1xuXG4gICAgbGV0IGh0bWwgPSBgXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSd0aXRsZScgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5ldyBQcm9qZWN0Li4uXCIgbWF4bGVuZ3RoPVwiMjVcIi8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBsdXNcIiB0eXBlPVwic3VibWl0XCI+KzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgYDtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IGh0bWw7XG5cblxuICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcy50aXRsZS52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgIHRyeXtzdGF0ZS5hZGRQcm9qZWN0KHRoaXMudGl0bGUudmFsdWUudHJpbSgpKX1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtjb25zb2xlLmluZm8oJ2l0IHNheXMnLCBlcnIpfVxuICAgICAgICAgICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcmVyZW5kZXIoKVxuICAgICAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59IiwiaW1wb3J0IHtcbiAgICBzb3J0QnlQcmlvcml0eSxcbiAgICBzb3J0QnlEYXRlRG9uZSxcbiAgICBzb3J0QnlEYXRlLFxuICAgIHNvcnRCeUNvbXBsZXRlLFxufSBmcm9tIFwiLi4vc29ydC5qc1wiO1xuaW1wb3J0IFF1aWNrVGFzayBmcm9tIFwiLi9RdWlja1Rhc2suanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENvbXBvbmVudChwcm9qZWN0LCByZXJlbmRlcikge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBoMXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgd3JhcHBlci5pZCA9IFwicHJvamVjdC1wYWdlXCI7XG5cbiAgICBiYWNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICAgICAgd3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgcmVyZW5kZXIoKTtcbiAgICB9O1xuICAgIGRlbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzdGF0ZS5kZWxldGVQcm9qZWN0KCtkZWwuZGF0YXNldC5pZCk7XG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICByZXJlbmRlcigpO1xuICAgIH07XG5cbiAgICBiYWNrQnRuLmlubmVySFRNTCA9IFwiPFwiO1xuICAgIGJhY2tCdG4uY2xhc3NOYW1lID0gXCJiYWNrXCI7XG5cbiAgICBoMS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGRlbC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZGVsLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuICAgIGgxd3JhcHBlci5jbGFzc05hbWUgPSAndGl0bGUtd3JhcHBlcidcbiAgICBcbiAgICBoMXdyYXBwZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2plY3QudGl0bGUgIT09IFwiUGVyc29uYWxcIiA/IGgxd3JhcHBlci5hcHBlbmRDaGlsZChkZWwpIDogMDtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDF3cmFwcGVyKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChRdWlja1Rhc2socHJvamVjdCwgcmVuZGVyVWwpKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIG1zZy5jbGFzc05hbWUgPSBcIm1zZ1wiO1xuICAgIG1zZy5pbm5lckhUTUwgPSBcIk5vIHRhc2tzIEhlcmUhXCI7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVbCgpIHtcbiAgICAgICAgdWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKCFwcm9qZWN0LnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXNnLnJlbW92ZSgpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICAgICAgICAgIGxldCBkb25lID0gc29ydEJ5RGF0ZURvbmUoc29ydEJ5Q29tcGxldGUocHJvamVjdC50YXNrcylbMV0pO1xuICAgICAgICAgICAgbGV0IHVuZG9uZSA9IHNvcnRCeVByaW9yaXR5KFxuICAgICAgICAgICAgICAgIHNvcnRCeURhdGUoc29ydEJ5Q29tcGxldGUocHJvamVjdC50YXNrcylbMF0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1bmRvbmUuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKFRhc2sodCwgcmVuZGVyVWwsIHByb2plY3QpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWwubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgICAgICAgID8gdWwubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwibGFzdC1hY3RpdmVcIilcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICBkb25lLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChUYXNrKHQsIHJlbmRlclVsLCBwcm9qZWN0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJVbCgpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi90b2RvLWZhY3RvcnkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpY2tUYXNrKHByb2plY3QsIHJlcmVuZGVyKSB7XG4gICAgXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHByb2plY3RJc0dpdmVuID0gcHJvamVjdCA/IHRydWUgOiBmYWxzZTtcblxuICAgIHdyYXBwZXIuaWQgPSAncXVpY2stdGFzayc7XG5cbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgPGZvcm0+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInByaW9yaXR5XCI+PC9zcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdjaGVja2JveCc+PGlucHV0IG5hbWU9J2lzQ29tcGxldGUnIHR5cGU9XCJjaGVja2JveFwiPjwvbGFiZWw+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0naW5wdXQnPjxpbnB1dCBuYW1lPSd0aXRsZScgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5ldyBUYXNrLi4uXCIvPjwvbGFiZWw+XG4gICAgICAgICAgICAkeyFwcm9qZWN0ID8gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZHJvcGRvd25cIiA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPSdwcm9qZWN0JyBkYXRhLXZhbHVlPScke3N0YXRlLnByb2plY3RzWzBdLnRpdGxlfScgY2xhc3M9XCJzZWxlY3QtcHJvamVjdFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPiR7c3RhdGUucHJvamVjdHNbMF0udGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPSdwcm9qZWN0LW9wdGlvbnMnPjwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0ncHJpb3JpdHknPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzAnPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScxJz4hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMic+ISE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczJyBzZWxlY3RlZD4hISE8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzPVwicGx1c1wiPis8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGA7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgdWwgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW9wdGlvbnMnKVxuICAgICAgICAgICAgdWwuaW5uZXJIVE1MID0gc3RhdGUucHJvamVjdHMubWFwKHAgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGxpPjxidXR0b24gZGF0YS12YWx1ZT0nJHtwLnRpdGxlfScgY2xhc3M9J3Byb2plY3Qtb3B0aW9uJz4ke3AudGl0bGV9PC9idXR0b24+PC9saT5gXG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmV4cGxpY2l0T3JpZ2luYWxUYXJnZXQgIT09IHRoaXMpIHJldHVybiBcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb3BlbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSAhPT0gXCJwcm9qZWN0LW9wdGlvblwiICYmIGV2ZW50LnRhcmdldCAhPT0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICBvcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0JykuZGF0YXNldC52YWx1ZSA9IHRoaXMuZGF0YXNldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LXByb2plY3QnKS5pbm5lckhUTUwgPSB0aGlzLmRhdGFzZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0Jykuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5vbnN1Ym1pdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcHJvamVjdCA9ICFwcm9qZWN0XG4gICAgICAgICAgICA/IHN0YXRlLnByb2plY3RzLmZpbmQocCA9PiB0aGlzLnByb2plY3QuZGF0YXNldC52YWx1ZSA9PT0gcC50aXRsZSlcbiAgICAgICAgICAgIDogcHJvamVjdDtcbiAgICAgICAgcHJvamVjdC5hZGRUYXNrKFxuICAgICAgICAgICAgVG9kbyhcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlLnZhbHVlLnRyaW0oKSA/IHRoaXMudGl0bGUudmFsdWUgOiBcIk5ldyBUYXNrXCIsXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRoaXMucHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBsZXRlLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgcHJvamVjdC50aXRsZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICByZXJlbmRlcigpXG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpXG4gICAgICAgIHByb2plY3QgPSBwcm9qZWN0SXNHaXZlbiA/IHByb2plY3QgOiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpXG4gICAgd3JhcHBlci5yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHdyYXBwZXJcbn1cblxuLy8gYnVnOiB0aGUgY2hlY2tlZD0nJyBhdHRyaWJ1dGUgaXMgbm90IGJlaW5nIGFkZGVkIHRvIHRoZSBpbnB1dCwgXG4vLyBidXQgdGhlICdjaGVja2VkJyB2YWx1ZSBjaGFuZ2VzIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoc2V0VGFiKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cblx0d3JhcHBlci5pZCA9IFwic2lkZWJhclwiO1xuXG5cdG5hdi5hcHBlbmRDaGlsZChTaWRlYmFySWNvbigwLCBcIlBcIiwgJ1Byb2plY3RzJykpXG5cdG5hdi5hcHBlbmRDaGlsZChTaWRlYmFySWNvbigxLCBcIlRcIiwgJ1Rhc2tzJykpXG5cdC8vIG5hdi5hcHBlbmRDaGlsZChTaWRlYmFySWNvbigyLCBcIiNcIiwgJ1RhZ3MnKSlcblx0XG5cdHdyYXBwZXIuYXBwZW5kQ2hpbGQobmF2KVxuXG5cdG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJCVVRUT05cIikge1xuXHRcdFx0c2V0VGFiKCtldmVudC50YXJnZXQuZGF0YXNldC50YWIpXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiAod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIFNpZGViYXJJY29uKG4sIGksIGlpKSB7XG5cdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5cdGljb24uY2xhc3NOYW1lID0gXCJzaWRlYmFyLWljb25cIjtcblxuXHRpY29uLmlubmVySFRNTCA9IGk7XG5cdGljb24uZGF0YXNldC50YWIgPSBuO1xuXHRpY29uLmFwcGVuZENoaWxkKEljb25Ub29sdGlwKFwi8J+SoSBcIiArIGlpKSlcblxuXHRyZXR1cm4gKGljb24pO1xufVxuXG5cbmZ1bmN0aW9uIEljb25Ub29sdGlwKGkpIHtcblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuXHRzcGFuLmNsYXNzTmFtZSA9IFwidG9vbHRpcFwiO1xuXHRzcGFuLmlubmVySFRNTCA9IGk7XG5cblx0cmV0dXJuIHNwYW5cbn0iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4uL3N0YXRlLmpzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh0LCByZXJlbmRlciwgcHIpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkZXRhaWxzIGNsYXNzPVwiZGV0YWlscy10YXNrXCI+XG4gICAgICAgICAgICA8c3VtbWFyeSBjbGFzcz0ndGFzayc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmlvcml0eSBwcmlvcml0eS0ke3QucHJpb3JpdHl9XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3QuaXNDb21wbGV0ZSA/IFwiY2hlY2tlZFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLXRpdGxlICR7dC5pc0NvbXBsZXRlID8gXCJsaW5lLXRocm91Z2hcIiA6IFwiXCJ9XCI+JHt0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAkeyFwciA/IGA8cCBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3QucHJvamVjdH08L3A+YDogJyd9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10YXNrICAke3ByID8gJ3NwZWNpYWwnIDogJyd9XCIgZGF0YS1pZD1cIiR7dC5pZH1cIj54PC9idXR0b24+XG4gICAgICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZWRpdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob25lPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiXCIgdmFsdWU9XCIwXCIvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+ITxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIlwiIHZhbHVlPVwiMVwiLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiEhPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiXCIgdmFsdWU9XCIyXCIvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+ISEhPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiXCIgdmFsdWU9XCIzXCIvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzcGVsbGNoZWNrPVwiZmFsc2VcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGV0YWlscz5cblx0YDtcblxuICAgIGxldCBmb3JtID0gbGkucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm1cIik7XG4gICAgZm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IHQuZGVzY3JpcHRpb247XG5cbiAgICBmb3JtLm9uaW5wdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHQucHJvamVjdCAhPT0gdGhpcy5wcm9qZWN0LnZhbHVlKSB0LmNoYW5nZVByb2plY3QodGhpcy5wcm9qZWN0LnZhbHVlKTtcblxuICAgICAgICB0LmVkaXQoXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5LnZhbHVlLCBcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICk7XG4gICAgfVxuICAgIGZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJlcmVuZGVyKClcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKClcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHByaW9yaXR5IGNoZWNrYm94XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT0nJHt0LnByaW9yaXR5fSddYCkuY2hlY2tlZCA9IFwidHJ1ZVwiXG5cbiAgICAvLyBhZGQgcHJvamVjdHMgdG8gZm9ybSBwcm9qZWN0IGRyb3Bkb3duXG4gICAgc3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgZm9ybS5wcm9qZWN0LmlubmVySFRNTCArPVxuICAgICAgICAgYDxvcHRpb24gdmFsdWU9XCIke3Byb2plY3QudGl0bGV9XCIgJHt0LnByb2plY3QgPT09IHByb2plY3QudGl0bGUgPyBcInNlbGVjdGVkXCIgOiBcIlwifT4ke3Byb2plY3QudGl0bGV9PC9vcHRpb24+YDtcbiAgICB9KVxuXG4gICAgLy8gc2V0IHByb2plY3QgaWYgbm90IGRlZmluZWRcbiAgICBsZXQgbmFtZSA9IHN0YXRlLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09PSB0LnByb2plY3QpXG4gICAgbGV0IHByb2plY3QgPSAhcHIgPyBzdGF0ZS5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdC5wcm9qZWN0KSA6IHByO1xuXG4gICAgbGkucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHQubWFya0NvbXBsZXRlKHRoaXMuY2hlY2tlZCk7XG4gICAgICAgIHJlcmVuZGVyKCk7XG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpXG4gICAgfSk7XG4gICAgbGkucXVlcnlTZWxlY3RvcignLmRlbGV0ZS10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBwcm9qZWN0LmRlbGV0ZVRhc2soK3RoaXMuZGF0YXNldC5pZClcbiAgICAgICAgcmVyZW5kZXIoKVxuICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIGxpO1xufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZXIoZiwgZGVsYXkpIHtcbiAgICBsZXQgdGltZXI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZiguLi5hcmdzKVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9XG59IiwiXG5cbmNvbnN0IHByb3RvID0ge1xuXHRhZGRUYXNrKHRhc2spIHtcblx0XHR0YXNrLnByb2plY3QgPSB0aGlzLnRpdGxlO1xuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0fSxcblx0ZGVsZXRlVGFzayhpZCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5pbmRleE9mKHRoaXMudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IGlkKSk7XG5cdFx0dGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpXG5cdH0sXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHRpdGxlPVwiTmV3IFByb2plY3RcIiwgdGFza3M9W10sIGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCB7dGl0bGUsIHRhc2tzLCBpZH0pO1xuXG59XG4iLCJcblxuXG5mdW5jdGlvbiBzb3J0QnlDb21wbGV0ZShhcnIpIHtcbiAgICBsZXQgYXJyMSA9IGFyci5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmlzQ29tcGxldGUpO1xuICAgIGxldCBhcnIyID0gYXJyLmZpbHRlcigodGFzaykgPT4gdGFzay5pc0NvbXBsZXRlKTtcbiAgICByZXR1cm4gW2FycjEsIGFycjJdO1xufVxuXG5mdW5jdGlvbiBzb3J0QnlEYXRlKGFycikge1xuICAgIHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4gYS5kYXRlLmdldFRpbWUoKSAtIGIuZGF0ZS5nZXRUaW1lKCkpO1xufVxuXG5mdW5jdGlvbiBzb3J0QnlQcmlvcml0eShhcnIpIHtcbiAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbn1cbmZ1bmN0aW9uIHNvcnRCeURhdGVEb25lKGFycikge1xuICAgIHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4gYi5kYXRlRG9uZS5nZXRUaW1lKCkgLSBhLmRhdGVEb25lLmdldFRpbWUoKSk7XG59XG5cbmV4cG9ydCB7c29ydEJ5UHJpb3JpdHksIHNvcnRCeURhdGVEb25lLCBzb3J0QnlEYXRlLCBzb3J0QnlDb21wbGV0ZX0iLCJcbmltcG9ydCBkZWJvdW5jZXIgZnJvbSBcIi4vZGVib3VuY2VyLmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LWZhY3RvcnkuanNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8tZmFjdG9yeS5qc1wiO1xuXG5jb25zdCBzdGF0ZSA9IHtcblx0YWN0aXZlVGFiOiAwLFxuXHRzZXRUYWIodGFiKSB7XG5cdFx0dGhpcy5hY3RpdmVUYWIgPSB0YWI7XG5cdH0sXG5cblx0YWRkUHJvamVjdCh0aXRsZSkge1xuXHRcdGlmICghdGhpcy5wcm9qZWN0cy5ldmVyeShwID0+IHAudGl0bGUgIT09IHRpdGxlKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb2plY3QgYWxyZWFkeSBleGlzdHMhXCIpXG5cdFx0fVxuXHRcdHRoaXMucHJvamVjdHMucHVzaChQcm9qZWN0KHRpdGxlKSlcblx0fSxcblx0ZGVsZXRlUHJvamVjdChpZCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHRoaXMucHJvamVjdHMuZmluZChwID0+IHAuaWQgPT09IGlkKSk7XG5cdFx0dGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXG5cdH0sXG5cblx0c2F2ZVN0YXRlKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsIEpTT04uc3RyaW5naWZ5KHRoaXMpKVxuXHR9LFxuXHRyZXRyaWV2ZVN0YXRlKCkge1xuXHRcdGlmICghbG9jYWxTdG9yYWdlLnN0YXRlKSB7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzKSlcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnN0YXRlKTtcblx0XHRcblx0XHRsZXQgcHJvamVjdHMgPSBbXTtcblx0XHRkYXRhLnByb2plY3RzLmZvckVhY2gocCA9PiB7XHRcdC8vIHAgLSBpcyBqdXN0IGEgc2hlbGwgb2YgZGF0YSwgbm8gbWV0aG9kc1xuXHRcdFx0bGV0IHRhc2tzID0gW107XG5cdFx0XHRwLnRhc2tzLmZvckVhY2godCA9PiB7XHRcdC8vIHQgLSBpcyBqdXN0IGEgc2hlbGwgb2YgZGF0YSwgbm8gbWV0aG9kc1xuXHRcdFx0XHR0YXNrcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBUb2RvKFxuICAgICAgICAgICAgICAgICAgICAgICAgdC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5pc0NvbXBsZXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcm9qZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHQuZGF0ZURvbmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5zdWJ0YXNrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuaWRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG5cdFx0XHR9KVxuXHRcdFx0cHJvamVjdHMucHVzaChQcm9qZWN0KHAudGl0bGUsIHRhc2tzLCBwLmlkKSlcblx0XHR9KVxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYWN0aXZlVGFiJywgeyd2YWx1ZSc6IGRhdGEuYWN0aXZlVGFifSlcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Byb2plY3RzJywgeyd2YWx1ZSc6IHByb2plY3RzfSlcblxuXHR9LFxuXHRwcm9qZWN0czogW1xuXHRcdFByb2plY3QoXCJQZXJzb25hbFwiKSxcblx0XSxcbn1cblxuc3RhdGUucmV0cmlldmVTdGF0ZSgpXG5cbnN0YXRlLnNhdmVTdGF0ZSA9IHN0YXRlLnNhdmVTdGF0ZS5iaW5kKHN0YXRlKVxuc3RhdGUuc2F2ZVN0YXRlID0gZGVib3VuY2VyKHN0YXRlLnNhdmVTdGF0ZSwgNDAwKVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZTsiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBkZWJvdW5jZXIgZnJvbSBcIi4vZGVib3VuY2VyLmpzXCI7XG5cbmNvbnN0IHByb3RvID0ge1xuICAgIGVkaXQoXG4gICAgICAgIHByaW9yaXR5ID0gdGhpcy5wcmlvcml0eSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB0aXRsZSA9IHRoaXMudGl0bGUsXG4gICAgICAgIGlzQ29tcGxldGUgPSB0aGlzLmlzQ29tcGxldGUsXG4gICAgICAgIHN1YnRhc2tzID0gdGhpcy5zdWJ0YXNrc1xuICAgICkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnN1YnRhc2tzID0gc3VidGFza3M7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpO1xuICAgIH0sXG4gICAgbWFya0NvbXBsZXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmRhdGVEb25lID0gdmFsdWUgPyBuZXcgRGF0ZSgpIDogbnVsbDtcbiAgICB9LFxuICAgIGNoYW5nZVByb2plY3QobmV3UHJvamVjdFRpdGxlKSB7XG4gICAgICAgIGNvbnN0IG9sZF8gPSBzdGF0ZS5wcm9qZWN0cy5maW5kKChwKSA9PiBwLnRpdGxlID09PSB0aGlzLnByb2plY3QpO1xuICAgICAgICBjb25zdCBuZXdfID0gc3RhdGUucHJvamVjdHMuZmluZCgocCkgPT4gcC50aXRsZSA9PT0gbmV3UHJvamVjdFRpdGxlKTtcblxuICAgICAgICBuZXdfLmFkZFRhc2sodGhpcyk7XG4gICAgICAgIG9sZF8uZGVsZXRlVGFzayh0aGlzLmlkKTtcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oXG4gICAgdGl0bGUgPSBcIk5ldyB0YXNrXCIsXG4gICAgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgcHJpb3JpdHkgPSAwLCAvLyAwIC0gbm9uZSwgMSAtIGxvdywgMiAtIG1pZGRsZSwgMyAtIGhpZ2hcbiAgICBpc0NvbXBsZXRlID0gZmFsc2UsXG4gICAgcHJvamVjdCA9IFwiUGVyc29uYWxcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gICAgZGF0ZURvbmUgPSBpc0NvbXBsZXRlID8gbmV3IERhdGUoKSA6IG51bGwsXG4gICAgc3VidGFza3MgPSBbXSxcbiAgICBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4pIHtcbiAgICBsZXQgdG9kbyA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3VidGFza3MsXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGlzQ29tcGxldGUsXG4gICAgICAgIGRhdGVEb25lLFxuICAgICAgICBpZCxcbiAgICB9O1xuICAgIGxldCBwbGFjZWhvbGRlciA9IE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCB0b2RvKTtcbiAgICBwbGFjZWhvbGRlci5lZGl0ID0gcGxhY2Vob2xkZXIuZWRpdC5iaW5kKHBsYWNlaG9sZGVyKTtcbiAgICBwbGFjZWhvbGRlci5lZGl0ID0gZGVib3VuY2VyKHBsYWNlaG9sZGVyLmVkaXQsIDUwMCk7XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG59XG5cbi8qXG5cdHRoaXMgaXMgbm90IGEgZmFjdG9yeSBmdW5jdGlvblxuXHRhIGZhY3RvcnkgZnVuY3Rpb24gc3VwcG9zZWQgZXhwb3NlIGFuIGludGVyYWZhY2Vcblx0YnV0IHRoaXMgb25lIGFjdHVhbGx5IGp1c3QgcmV0dXJucyB0aGUgb2JqZWN0IGl0c2VsZlxuICovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGUuanNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8tZmFjdG9yeS5qc1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50cy9TaWRlYmFyLmpzXCI7XG5pbXBvcnQgQWxsUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9BbGxQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IEFsbFRhc2tzIGZyb20gXCIuL2NvbXBvbmVudHMvQWxsVGFza3MuanNcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdyb290Jz48L2Rpdj5cIlxuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcblxuY29uc3Qgc2lkZWJhciA9IFNpZGViYXIoKHRhYikgPT4ge1xuXHRpZihzdGF0ZS5hY3RpdmVUYWIgIT09IHRhYikge1xuXHRcdHN0YXRlLnNldFRhYih0YWIpXG5cdFx0cmVuZGVyKCk7XG5cdH1cbn0pO1xuXG5jb25zdCB0YWJzID0gW1xuXHRBbGxQcm9qZWN0cyhzdGF0ZS5wcm9qZWN0cyksIFxuXHRBbGxUYXNrcyhzdGF0ZS5wcm9qZWN0cywgcmVuZGVyKSxcblx0Ly8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXTtcblxuXG5yb290LmFwcGVuZENoaWxkKHNpZGViYXIpXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcblxuXHRyb290LmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcblx0XHRpZihub2RlLmlkICE9PSBcInNpZGViYXJcIikgbm9kZS5yZW1vdmUoKTtcblx0fSlcblxuXHRyb290LmFwcGVuZENoaWxkKHRhYnNbc3RhdGUuYWN0aXZlVGFiXSlcblx0XG5cdHRhYnNbc3RhdGUuYWN0aXZlVGFiXS5yZW5kZXIoKVxuXHRzdGF0ZS5zYXZlU3RhdGUoKVxufVxuXG5yZW5kZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==