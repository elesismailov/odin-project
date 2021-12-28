/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 62.5%;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: #a300ff none repeat scroll 0% 0%;\n  font-family: \"Helvetica\", sans-serif;\n  font-size: 1.6rem;\n}\n\nul, ol, li, details, summary {\n  list-style: none;\n}\n\nbutton {\n  appearance: none;\n  border: none;\n}\n\n#sidebar {\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 6.4rem;\n  z-index: 99;\n}\n#sidebar nav {\n  background: #8762b1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4.8rem 0 0;\n  gap: 2.8rem;\n}\n#sidebar nav .sidebar-icon {\n  background: #fff;\n  width: 4.8rem;\n  height: 4.8rem;\n  border-radius: 5rem;\n  font-size: 2.6rem;\n  transition: all 250ms linear;\n  position: relative;\n}\n#sidebar nav .sidebar-icon:hover {\n  border-radius: 1.5rem;\n}\n#sidebar nav .sidebar-icon .tooltip {\n  background: #333;\n  color: #fff;\n  border-radius: 7px;\n  font-size: 1.6rem;\n  padding: 1rem;\n  position: absolute;\n  top: 0.6rem;\n  left: 75px;\n  width: max-content;\n  transition: 100ms linear;\n  transform: scale(0);\n}\n#sidebar nav .sidebar-icon:hover .tooltip {\n  transform: scale(1);\n}\n\n#all-projects {\n  margin-left: 6.4rem;\n  position: relative;\n  padding: 2.4rem;\n}\n#all-projects h1 {\n  color: #fff;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#all-projects > ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));\n  gap: 2rem;\n  justify-items: center;\n}\n#all-projects > ul > li {\n  width: 25rem;\n  height: 25rem;\n}\n#all-projects > ul .project {\n  width: 25rem;\n  height: 25rem;\n  background: #fff;\n  border-radius: 0.8rem;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.6rem;\n  text-align: left;\n  color: #333;\n}\n#all-projects > ul .project h2 {\n  font-size: 2rem;\n}\n#all-projects > ul .project .msg {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n}\n#all-projects > ul .project > ul {\n  padding: 1.4rem;\n}\n\n#project-page {\n  padding: 2.4rem;\n  position: absolute;\n  background-color: #8000ff;\n  min-height: 100vh;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n#project-page .back {\n  width: 4rem;\n  height: 4rem;\n  background: #fff;\n  border-radius: 10rem;\n  margin-bottom: 1rem;\n}\n#project-page .back:hover {\n  filter: brightness(0.9);\n}\n#project-page .back:active {\n  filter: brightness(0.8);\n}\n#project-page header {\n  position: fixed;\n  top: 0;\n  left: 6.4rem;\n  padding: 2.4rem 2.4rem 1rem;\n  z-index: 1;\n  width: calc(100% - 6.4rem);\n  background-color: #8000ff;\n  box-shadow: #843d84 0px -11px 29px 1px;\n  padding-bottom: 1rem;\n}\n#project-page header .title-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#project-page header .title-wrapper h1 {\n  margin: 0;\n}\n#project-page header .title-wrapper button {\n  width: 7rem;\n  height: 3rem;\n  border-radius: 4px;\n  background: #fff;\n  font-size: 1.5rem;\n}\n#project-page h2 {\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 3rem;\n}\n#project-page .msg {\n  height: 100vh;\n  width: 100vw;\n  max-width: unset;\n  top: 0;\n  left: 3.2rem;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n#project-page ul {\n  margin-top: 17.4rem;\n  overflow: auto;\n}\n\n#quick-task form {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  border-radius: 4px;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 1rem;\n  color: #fff;\n}\n#quick-task form .line-through {\n  text-decoration: line-through;\n}\n#quick-task form input[type=text] {\n  height: 3rem;\n  border: none;\n  appearance: none;\n  color: #fff;\n  background: transparent;\n  font-size: 1.6rem;\n  outline: none;\n  flex-grow: 1;\n}\n#quick-task form input[type=text]::placeholder {\n  color: #fff;\n}\n#quick-task form input[type=checkbox][checked=\"\"] {\n  background: #03f3f3;\n}\n#quick-task form select {\n  height: 3rem;\n  width: 3rem;\n  background: #fff;\n  border: none;\n  appearance: none;\n  border-radius: 0 4px 4px 0;\n}\n#quick-task form .plus {\n  width: 3rem;\n  height: 3rem;\n  background: transparent;\n  margin-right: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n}\n#quick-task form label {\n  display: flex;\n  flex-grow: 1;\n}\n#quick-task form input[type=checkbox] {\n  margin: 0 1rem 0 1rem;\n  appearance: none;\n  border-radius: 10rem;\n  border: 1px solid #fff;\n  background: transparent;\n  width: 2.1rem;\n  height: 2.1rem;\n}\n#quick-task form .priority {\n  width: 0.5rem;\n  height: 3rem;\n  display: inline-block;\n  margin-right: 0.5rem;\n  border-radius: 4px 0 0 4px;\n  background: #fff;\n}\n#quick-task form .project-dropdown {\n  position: relative;\n}\n#quick-task form .project-dropdown button {\n  width: 10rem;\n  height: 3rem;\n  border-radius: 4px;\n}\n#quick-task form .project-dropdown ul {\n  position: absolute;\n  background: #fff;\n  border-radius: 4px;\n  display: none;\n  top: -100px;\n}\n#quick-task form .project-dropdown ul li {\n  margin-bottom: 2px;\n}\n#quick-task form .project-dropdown > button[aria-expanded=true] ~ ul {\n  display: block;\n}\n\n#all-tasks {\n  margin-left: 6.4rem;\n  padding: 2.4rem;\n  background-color: #831b83;\n  min-height: 100vh;\n}\n#all-tasks header {\n  position: fixed;\n  background-color: #831b83;\n  box-shadow: #662c66 0px -11px 29px 1px;\n  top: 0;\n  left: 6.4rem;\n  padding: 2.4rem 2.4rem 1rem;\n  z-index: 1;\n  width: calc(100% - 6.4rem);\n}\n#all-tasks h1 {\n  color: #fff;\n}\n#all-tasks h1, #all-tasks h2 {\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n#all-tasks .msg {\n  height: 40vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n}\n#all-tasks ul {\n  margin-top: 13.2rem;\n  overflow: auto;\n}\n\n.last-active {\n  margin-bottom: 5rem;\n}\n\n.details-task {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.details-task > div .edit-form {\n  display: flex;\n  padding: 2.4rem;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.details-task > div .edit-form > * {\n  flex: 0 48%;\n}\n.details-task > div .edit-form button {\n  max-width: 10rem;\n  margin-left: auto;\n  padding: 0.6rem;\n  border-radius: 4px;\n  background: #2466e4;\n  color: #fff;\n  font-size: 1.5rem;\n}\n.details-task > div .edit-form button:hover {\n  filter: brightness(1.1);\n}\n.details-task > div .edit-form button:active {\n  filter: brightness(0.9);\n}\n.details-task > div .edit-form textarea {\n  flex: 1 100%;\n  min-height: 100px;\n  border-radius: 4px;\n  appearance: none;\n  border: none;\n  padding: 1rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1.6rem;\n  background: #ffffff80;\n}\n.details-task > div .edit-form .priority-select {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.details-task > div .edit-form .priority-select label {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.details-task > div .edit-form .priority-select label input {\n  display: inline-block;\n  background: purple;\n}\n.details-task .task {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  max-width: 60rem;\n  margin: auto;\n  color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.details-task .task .line-through {\n  text-decoration: line-through;\n}\n.details-task .task input, .details-task .task button {\n  width: 3rem;\n  height: 3rem;\n  background: #fff;\n}\n.details-task .task input {\n  margin-right: 1rem;\n}\n.details-task .task input[type=checkbox] {\n  appearance: none;\n  border-radius: 10rem;\n  border: 1px solid #fff;\n  background: transparent;\n  width: 2.1rem;\n  height: 2.1rem;\n}\n.details-task .task input[type=checkbox][checked=\"\"] {\n  background: #03f3f3;\n}\n.details-task .task .special {\n  margin-left: auto;\n}\n.details-task .task .project-title {\n  margin: 0 1rem 0 auto;\n  transform: translateX(3rem);\n  transition: 250ms ease;\n}\n.details-task .task .delete-task {\n  transform: translateX(100%);\n  transition: 250ms ease;\n  cursor: pointer;\n  font-size: 2rem;\n}\n.details-task .task .priority {\n  width: 0.5rem;\n  height: 3rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n.details-task .task .priority-3 {\n  background: red;\n}\n.details-task .task .priority-2 {\n  background: yellow;\n}\n.details-task .task .priority-1 {\n  background: green;\n}\n.details-task .task .priority-0 {\n  background: transparent;\n}\n.details-task .task:hover .project-title {\n  transform: translateX(0);\n}\n.details-task .task:hover .delete-task {\n  transform: translateX(0);\n}\n\n#new-project form {\n  display: flex;\n  align-items: center;\n  background: #ffffff40;\n  border-radius: 4px;\n  max-width: 60rem;\n  margin: auto;\n  margin-bottom: 3rem;\n  color: #fff;\n  overflow: hidden;\n}\n#new-project form input[type=text] {\n  height: 4rem;\n  border: none;\n  appearance: none;\n  color: #fff;\n  background: transparent;\n  font-size: 1.6rem;\n  outline: none;\n  flex-grow: 1;\n}\n#new-project form input[type=text]::placeholder {\n  color: #fff;\n}\n#new-project form .plus {\n  width: 4rem;\n  height: 4rem;\n  background: transparent;\n  margin: 0 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3rem;\n}\n#new-project form label {\n  display: flex;\n  flex-grow: 1;\n}\n#new-project form button {\n  width: 10rem;\n  height: 4rem;\n  border-radius: 4px;\n  background: #fff;\n  font-size: 1.5rem;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
                <span class="plus">+</span>
                <input name='title' type="text" placeholder="New Project..." maxlength="25"/>
            </label>
            <button type="submit">Add</button>
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
    wrapper.id = 'quick-task';

    let html = `
        <form>
			<span class="priority"></span>
            <label>
                <span class="plus">+</span>
                <input name='title' type="text" placeholder="New Task..."/>
            </label>
            ${!project ? `
            <div class="project-dropdown" >
                <button name='project' data-value='${_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects[0].title}' class="select-project" aria-expanded="false">${_state_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects[0].title}</button>
                <ul class='project-options'></ul>
            </div>
            ` : ''}
			<input name='isComplete' type="checkbox">
            <select name='priority'>
                <option value='0'>None</option>
                <option value='1'>!</option>
                <option value='2'>!!</option>
                <option value='3' selected>!!!</option>
            </select>
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
        project = null;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FB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QyxzRUFBVyxDQUFDLDBEQUFjO0FBQzNCLENBQUMsbUVBQVEsQ0FBQywwREFBYztBQUN4QjtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRix1QkFBdUIsMkRBQWU7QUFDdEM7QUFDQSxNQUFNLDJEQUFlO0FBQ3JCLENBQUMsMkRBQWU7QUFDaEI7O0FBRUEsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9BbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9OZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvUXVpY2tUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVib3VuY2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2EzMDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxudWwsIG9sLCBsaSwgZGV0YWlscywgc3VtbWFyeSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiA2LjRyZW07XFxuICB6LWluZGV4OiA5OTtcXG59XFxuI3NpZGViYXIgbmF2IHtcXG4gIGJhY2tncm91bmQ6ICM4NzYyYjE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDQuOHJlbSAwIDA7XFxuICBnYXA6IDIuOHJlbTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb24ge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiA0LjhyZW07XFxuICBoZWlnaHQ6IDQuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNzaWRlYmFyIG5hdiAuc2lkZWJhci1pY29uOmhvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb24gLnRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZyZW07XFxuICBsZWZ0OiA3NXB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgdHJhbnNpdGlvbjogMTAwbXMgbGluZWFyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuI3NpZGViYXIgbmF2IC5zaWRlYmFyLWljb246aG92ZXIgLnRvb2x0aXAge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuI2FsbC1wcm9qZWN0cyB7XFxuICBtYXJnaW4tbGVmdDogNi40cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMi40cmVtO1xcbn1cXG4jYWxsLXByb2plY3RzIGgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbiNhbGwtcHJvamVjdHMgPiB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjVyZW0sIDFmcikpO1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4jYWxsLXByb2plY3RzID4gdWwgPiBsaSB7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbn1cXG4jYWxsLXByb2plY3RzID4gdWwgLnByb2plY3Qge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogIzMzMztcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsIC5wcm9qZWN0IGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IHVsIC5wcm9qZWN0IC5tc2cge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbiNhbGwtcHJvamVjdHMgPiB1bCAucHJvamVjdCA+IHVsIHtcXG4gIHBhZGRpbmc6IDEuNHJlbTtcXG59XFxuXFxuI3Byb2plY3QtcGFnZSB7XFxuICBwYWRkaW5nOiAyLjRyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMGZmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcbiNwcm9qZWN0LXBhZ2UgLmJhY2sge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4jcHJvamVjdC1wYWdlIC5iYWNrOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG4jcHJvamVjdC1wYWdlIC5iYWNrOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI3Byb2plY3QtcGFnZSBoZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNi40cmVtO1xcbiAgcGFkZGluZzogMi40cmVtIDIuNHJlbSAxcmVtO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2LjRyZW0pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDBmZjtcXG4gIGJveC1zaGFkb3c6ICM4NDNkODQgMHB4IC0xMXB4IDI5cHggMXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgaGVhZGVyIC50aXRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbiNwcm9qZWN0LXBhZ2UgaGVhZGVyIC50aXRsZS13cmFwcGVyIGgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuI3Byb2plY3QtcGFnZSBoZWFkZXIgLnRpdGxlLXdyYXBwZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4jcHJvamVjdC1wYWdlIGgyIHtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG4jcHJvamVjdC1wYWdlIC5tc2cge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1heC13aWR0aDogdW5zZXQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzLjJyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNwcm9qZWN0LXBhZ2UgdWwge1xcbiAgbWFyZ2luLXRvcDogMTcuNHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jcXVpY2stdGFzayBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjQwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbiNxdWljay10YXNrIGZvcm0gaW5wdXRbdHlwZT10ZXh0XTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNxdWljay10YXNrIGZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF1bY2hlY2tlZD1cXFwiXFxcIl0ge1xcbiAgYmFja2dyb3VuZDogIzAzZjNmMztcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wbHVzIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbiNxdWljay10YXNrIGZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDIuMXJlbTtcXG4gIGhlaWdodDogMi4xcmVtO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wcmlvcml0eSB7XFxuICB3aWR0aDogMC41cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnByb2plY3QtZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jcXVpY2stdGFzayBmb3JtIC5wcm9qZWN0LWRyb3Bkb3duIGJ1dHRvbiB7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnByb2plY3QtZHJvcGRvd24gdWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IC0xMDBweDtcXG59XFxuI3F1aWNrLXRhc2sgZm9ybSAucHJvamVjdC1kcm9wZG93biB1bCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcbiNxdWljay10YXNrIGZvcm0gLnByb2plY3QtZHJvcGRvd24gPiBidXR0b25bYXJpYS1leHBhbmRlZD10cnVlXSB+IHVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jYWxsLXRhc2tzIHtcXG4gIG1hcmdpbi1sZWZ0OiA2LjRyZW07XFxuICBwYWRkaW5nOiAyLjRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODMxYjgzO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbiNhbGwtdGFza3MgaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MzFiODM7XFxuICBib3gtc2hhZG93OiAjNjYyYzY2IDBweCAtMTFweCAyOXB4IDFweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDYuNHJlbTtcXG4gIHBhZGRpbmc6IDIuNHJlbSAyLjRyZW0gMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNi40cmVtKTtcXG59XFxuI2FsbC10YXNrcyBoMSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI2FsbC10YXNrcyBoMSwgI2FsbC10YXNrcyBoMiB7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuI2FsbC10YXNrcyAubXNnIHtcXG4gIGhlaWdodDogNDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI2FsbC10YXNrcyB1bCB7XFxuICBtYXJnaW4tdG9wOiAxMy4ycmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5sYXN0LWFjdGl2ZSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5cXG4uZGV0YWlscy10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjQwO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlscy10YXNrID4gZGl2IC5lZGl0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIuNHJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtID4gKiB7XFxuICBmbGV4OiAwIDQ4JTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjMjQ2NmU0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcXG59XFxuLmRldGFpbHMtdGFzayA+IGRpdiAuZWRpdC1mb3JtIGJ1dHRvbjphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSB0ZXh0YXJlYSB7XFxuICBmbGV4OiAxIDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmODA7XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSAucHJpb3JpdHktc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sgPiBkaXYgLmVkaXQtZm9ybSAucHJpb3JpdHktc2VsZWN0IGxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZGV0YWlscy10YXNrID4gZGl2IC5lZGl0LWZvcm0gLnByaW9yaXR5LXNlbGVjdCBsYWJlbCBpbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgaW5wdXQsIC5kZXRhaWxzLXRhc2sgLnRhc2sgYnV0dG9uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayBpbnB1dCB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDIuMXJlbTtcXG4gIGhlaWdodDogMi4xcmVtO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdW2NoZWNrZWQ9XFxcIlxcXCJdIHtcXG4gIGJhY2tncm91bmQ6ICMwM2YzZjM7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnNwZWNpYWwge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnByb2plY3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwIDFyZW0gMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNyZW0pO1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAuZGVsZXRlLXRhc2sge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogMjUwbXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzayAucHJpb3JpdHktMyB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi5kZXRhaWxzLXRhc2sgLnRhc2sgLnByaW9yaXR5LTIge1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5wcmlvcml0eS0xIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrIC5wcmlvcml0eS0wIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uZGV0YWlscy10YXNrIC50YXNrOmhvdmVyIC5wcm9qZWN0LXRpdGxlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuLmRldGFpbHMtdGFzayAudGFzazpob3ZlciAuZGVsZXRlLXRhc2sge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4jbmV3LXByb2plY3QgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY0MDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jbmV3LXByb2plY3QgZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4jbmV3LXByb2plY3QgZm9ybSBpbnB1dFt0eXBlPXRleHRdOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI25ldy1wcm9qZWN0IGZvcm0gLnBsdXMge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuI25ldy1wcm9qZWN0IGZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuI25ldy1wcm9qZWN0IGZvcm0gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDRDs7QURFQTtFQUNDLDRDQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQ0VEOztBRE1BO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNIRDtBRElDO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRkY7QURJRTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0ZIO0FER0c7RUFDQyxxQkFBQTtBQ0RKO0FESUc7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE1HO0VBQ0MsbUJBQUE7QUNKSjs7QURX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QUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3pCRjtBRDJCQztFQUNDLGFBQUE7RUFDQSxZQUFBO0FDekJGO0FENEJDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUMxQkY7O0FBRUEsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IFByb2plY3RDb21wb25lbnQgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IE5ld1Byb2plY3QgZnJvbSBcIi4vTmV3UHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgc29ydEJ5Q29tcGxldGUgfSBmcm9tIFwiLi4vc29ydC5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbFByb2plY3RzKHByb2plY3RzKSB7XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cblx0d3JhcHBlci5pZCA9IFwiYWxsLXByb2plY3RzXCI7XG5cdFxuXHRoMS5pbm5lckhUTUwgPSBcIkFsbCBQcm9qZWN0c1wiO1xuXG5cdGZ1bmN0aW9uIHJlbmRlclVsKCkge1xuXHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0dWwuaW5uZXJIVE1MID0gJyc7XG5cblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGgxKVxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoTmV3UHJvamVjdChyZW5kZXJVbCkpXG5cblx0XHRwcm9qZWN0cy5mb3JFYWNoKCBwciA9PiB7XG5cdFx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdFx0XHRjb25zdCB0YXNrVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdFx0XHRjb25zdCB0YXNrcyA9IHNvcnRCeUNvbXBsZXRlKHByLnRhc2tzKVswXS5zbGljZSgwLCA4KTtcblx0XHRcdFxuXHRcdFx0cHJvamVjdC5vbmNsaWNrID0gKCk9PiB7XG5cdFx0XHRcdHdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoUHJvamVjdENvbXBvbmVudChwciwgcmVuZGVyVWwpKVxuXHRcdFx0fVxuXG5cdFx0XHRwcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuXHRcdFx0dGl0bGUuaW5uZXJIVE1MID0gcHIudGl0bGU7XG5cdFx0XHRwcm9qZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRcdFx0aWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cdFx0XHRcdG1zZy5jbGFzc05hbWUgPSBcIm1zZ1wiXG5cdFx0XHRcdG1zZy50ZXh0Q29udGVudCA9IFwiTm8gVGFza3MgSGVyZSFcIjtcblx0XHRcdFx0cHJvamVjdC5hcHBlbmRDaGlsZChtc2cpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdFx0XHRcdFx0Y29uc3QgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XG5cdFx0XHRcdFx0dGFza0xpLmFwcGVuZENoaWxkKHRpdGxlKVxuXHRcdFx0XHRcdHRhc2tVbC5hcHBlbmRDaGlsZCh0YXNrTGkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHRwcm9qZWN0LmFwcGVuZENoaWxkKHRhc2tVbCk7XG5cdFx0XHR9XG5cblxuXHRcdFx0bGkuYXBwZW5kQ2hpbGQocHJvamVjdClcblx0XHRcdHVsLmFwcGVuZENoaWxkKGxpKVxuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZCh1bCk7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXJVbCgpXG5cdHdyYXBwZXIucmVuZGVyID0gcmVuZGVyVWw7XG5cdHJldHVybiB3cmFwcGVyO1xuXG59IiwiXG5pbXBvcnQge3NvcnRCeVByaW9yaXR5LCBzb3J0QnlEYXRlRG9uZSwgc29ydEJ5RGF0ZSwgc29ydEJ5Q29tcGxldGV9IGZyb20gXCIuLi9zb3J0LmpzXCJcbmltcG9ydCBRdWlja1Rhc2sgZnJvbSAnLi9RdWlja1Rhc2suanMnXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsVGFza3MocHJvamVjdHMsIHJlcmVuZGVyKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgcXVpY2tUYXNrID0gUXVpY2tUYXNrKHVuZGVmaW5lZCwgcmVuZGVyVWwpXG4gICAgd3JhcHBlci5pZCA9IFwiYWxsLXRhc2tzXCI7XG5cbiAgICBoMS5pbm5lckhUTUwgPSBcIkFsbCBUYXNrc1wiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocXVpY2tUYXNrKVxuICAgIFxuICAgIG1zZy5jbGFzc05hbWUgPSBcIm1zZ1wiXG4gICAgbXNnLmlubmVySFRNTCA9IFwiTm8gdGFza3MgaGVyZSFcIjtcbiAgICBcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyVWwoKSB7XG4gICAgICAgIHF1aWNrVGFzay5yZW5kZXIoKVxuICAgICAgICB0YXNrcy5sZW5ndGggPSAwO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gdGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKSlcbiAgICAgICAgXG4gICAgICAgIHVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtc2cucmVtb3ZlKClcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICAgICAgbGV0IGRvbmUgPSBzb3J0QnlEYXRlRG9uZShzb3J0QnlDb21wbGV0ZSh0YXNrcylbMV0pO1xuICAgICAgICAgICAgbGV0IHVuZG9uZSA9IHNvcnRCeVByaW9yaXR5KFxuICAgICAgICAgICAgICAgIHNvcnRCeURhdGUoc29ydEJ5Q29tcGxldGUodGFza3MpWzBdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHVuZG9uZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoVGFzayh0LCByZW5kZXJVbCwgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVsLmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgICAgICA/IHVsLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcImxhc3QtYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgZG9uZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoVGFzayh0LCByZW5kZXJVbCwgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJVbCgpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodWwpXG5cdHdyYXBwZXIucmVuZGVyID0gcmVuZGVyVWw7XG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UHJvamVjdChyZXJlbmRlcikge1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5pZCA9ICduZXctcHJvamVjdCc7XG5cbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbHVzXCI+Kzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0ndGl0bGUnIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOZXcgUHJvamVjdC4uLlwiIG1heGxlbmd0aD1cIjI1XCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgYDtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IGh0bWw7XG5cblxuICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcy50aXRsZS52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgIHRyeXtzdGF0ZS5hZGRQcm9qZWN0KHRoaXMudGl0bGUudmFsdWUudHJpbSgpKX1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtjb25zb2xlLmluZm8oJ2l0IHNheXMnLCBlcnIpfVxuICAgICAgICAgICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcmVyZW5kZXIoKVxuICAgICAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59IiwiaW1wb3J0IHtcbiAgICBzb3J0QnlQcmlvcml0eSxcbiAgICBzb3J0QnlEYXRlRG9uZSxcbiAgICBzb3J0QnlEYXRlLFxuICAgIHNvcnRCeUNvbXBsZXRlLFxufSBmcm9tIFwiLi4vc29ydC5qc1wiO1xuaW1wb3J0IFF1aWNrVGFzayBmcm9tIFwiLi9RdWlja1Rhc2suanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENvbXBvbmVudChwcm9qZWN0LCByZXJlbmRlcikge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBoMXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgd3JhcHBlci5pZCA9IFwicHJvamVjdC1wYWdlXCI7XG5cbiAgICBiYWNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICAgICAgd3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgcmVyZW5kZXIoKTtcbiAgICB9O1xuICAgIGRlbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzdGF0ZS5kZWxldGVQcm9qZWN0KCtkZWwuZGF0YXNldC5pZCk7XG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICByZXJlbmRlcigpO1xuICAgIH07XG5cbiAgICBiYWNrQnRuLmlubmVySFRNTCA9IFwiPFwiO1xuICAgIGJhY2tCdG4uY2xhc3NOYW1lID0gXCJiYWNrXCI7XG5cbiAgICBoMS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGRlbC50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZGVsLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuICAgIGgxd3JhcHBlci5jbGFzc05hbWUgPSAndGl0bGUtd3JhcHBlcidcbiAgICBcbiAgICBoMXdyYXBwZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2plY3QudGl0bGUgIT09IFwiUGVyc29uYWxcIiA/IGgxd3JhcHBlci5hcHBlbmRDaGlsZChkZWwpIDogMDtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDF3cmFwcGVyKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChRdWlja1Rhc2socHJvamVjdCwgcmVuZGVyVWwpKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIG1zZy5jbGFzc05hbWUgPSBcIm1zZ1wiO1xuICAgIG1zZy5pbm5lckhUTUwgPSBcIk5vIHRhc2tzIEhlcmUhXCI7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVbCgpIHtcbiAgICAgICAgdWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKCFwcm9qZWN0LnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXNnLnJlbW92ZSgpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICAgICAgICAgIGxldCBkb25lID0gc29ydEJ5RGF0ZURvbmUoc29ydEJ5Q29tcGxldGUocHJvamVjdC50YXNrcylbMV0pO1xuICAgICAgICAgICAgbGV0IHVuZG9uZSA9IHNvcnRCeVByaW9yaXR5KFxuICAgICAgICAgICAgICAgIHNvcnRCeURhdGUoc29ydEJ5Q29tcGxldGUocHJvamVjdC50YXNrcylbMF0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1bmRvbmUuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKFRhc2sodCwgcmVuZGVyVWwsIHByb2plY3QpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWwubGFzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgICAgICAgID8gdWwubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwibGFzdC1hY3RpdmVcIilcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICBkb25lLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChUYXNrKHQsIHJlbmRlclVsLCBwcm9qZWN0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJVbCgpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vc3RhdGUuanNcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi90b2RvLWZhY3RvcnkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpY2tUYXNrKHByb2plY3QsIHJlcmVuZGVyKSB7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmlkID0gJ3F1aWNrLXRhc2snO1xuXG4gICAgbGV0IGh0bWwgPSBgXG4gICAgICAgIDxmb3JtPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJwcmlvcml0eVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsdXNcIj4rPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSd0aXRsZScgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5ldyBUYXNrLi4uXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICR7IXByb2plY3QgPyBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kcm9wZG93blwiID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9J3Byb2plY3QnIGRhdGEtdmFsdWU9JyR7c3RhdGUucHJvamVjdHNbMF0udGl0bGV9JyBjbGFzcz1cInNlbGVjdC1wcm9qZWN0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JHtzdGF0ZS5wcm9qZWN0c1swXS50aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9J3Byb2plY3Qtb3B0aW9ucyc+PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCA6ICcnfVxuXHRcdFx0PGlucHV0IG5hbWU9J2lzQ29tcGxldGUnIHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSdwcmlvcml0eSc+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEnPiE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyJz4hITwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMnIHNlbGVjdGVkPiEhITwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgbGV0IHVsID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1vcHRpb25zJylcbiAgICAgICAgICAgIHVsLmlubmVySFRNTCA9IHN0YXRlLnByb2plY3RzLm1hcChwID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxsaT48YnV0dG9uIGRhdGEtdmFsdWU9JyR7cC50aXRsZX0nIGNsYXNzPSdwcm9qZWN0LW9wdGlvbic+JHtwLnRpdGxlfTwvYnV0dG9uPjwvbGk+YFxuICAgICAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5leHBsaWNpdE9yaWdpbmFsVGFyZ2V0ICE9PSB0aGlzKSByZXR1cm4gXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0Jykuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW4oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgIT09IFwicHJvamVjdC1vcHRpb25cIiAmJiBldmVudC50YXJnZXQgIT09IHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0Jykuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1vcHRpb24nKS5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgb3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpLmRhdGFzZXQudmFsdWUgPSB0aGlzLmRhdGFzZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0JykuaW5uZXJIVE1MID0gdGhpcy5kYXRhc2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvcihcImZvcm1cIikub25zdWJtaXQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHByb2plY3QgPSAhcHJvamVjdFxuICAgICAgICAgICAgPyBzdGF0ZS5wcm9qZWN0cy5maW5kKHAgPT4gdGhpcy5wcm9qZWN0LmRhdGFzZXQudmFsdWUgPT09IHAudGl0bGUpXG4gICAgICAgICAgICA6IHByb2plY3Q7XG4gICAgICAgIHByb2plY3QuYWRkVGFzayhcbiAgICAgICAgICAgIFRvZG8oXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZS52YWx1ZS50cmltKCkgPyB0aGlzLnRpdGxlLnZhbHVlIDogXCJOZXcgVGFza1wiLFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNDb21wbGV0ZS5jaGVja2VkLFxuICAgICAgICAgICAgICAgIHByb2plY3QudGl0bGUsXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgcmVyZW5kZXIoKVxuICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKVxuICAgICAgICBwcm9qZWN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKVxuICAgIHdyYXBwZXIucmVuZGVyID0gcmVuZGVyO1xuICAgIHJldHVybiB3cmFwcGVyXG59XG5cbi8vIGJ1ZzogdGhlIGNoZWNrZWQ9JycgYXR0cmlidXRlIGlzIG5vdCBiZWluZyBhZGRlZCB0byB0aGUgaW5wdXQsIFxuLy8gYnV0IHRoZSAnY2hlY2tlZCcgdmFsdWUgY2hhbmdlcyIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKHNldFRhYikge1xuXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG5cdHdyYXBwZXIuaWQgPSBcInNpZGViYXJcIjtcblxuXHRuYXYuYXBwZW5kQ2hpbGQoU2lkZWJhckljb24oMCwgXCJQXCIsICdQcm9qZWN0cycpKVxuXHRuYXYuYXBwZW5kQ2hpbGQoU2lkZWJhckljb24oMSwgXCJUXCIsICdUYXNrcycpKVxuXHQvLyBuYXYuYXBwZW5kQ2hpbGQoU2lkZWJhckljb24oMiwgXCIjXCIsICdUYWdzJykpXG5cdFxuXHR3cmFwcGVyLmFwcGVuZENoaWxkKG5hdilcblxuXHRuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiQlVUVE9OXCIpIHtcblx0XHRcdHNldFRhYigrZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFiKVxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gKHdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFySWNvbihuLCBpLCBpaSkge1xuXHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXHRpY29uLmNsYXNzTmFtZSA9IFwic2lkZWJhci1pY29uXCI7XG5cblx0aWNvbi5pbm5lckhUTUwgPSBpO1xuXHRpY29uLmRhdGFzZXQudGFiID0gbjtcblx0aWNvbi5hcHBlbmRDaGlsZChJY29uVG9vbHRpcChcIvCfkqEgXCIgKyBpaSkpXG5cblx0cmV0dXJuIChpY29uKTtcbn1cblxuXG5mdW5jdGlvbiBJY29uVG9vbHRpcChpKSB7XG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cblx0c3Bhbi5jbGFzc05hbWUgPSBcInRvb2x0aXBcIjtcblx0c3Bhbi5pbm5lckhUTUwgPSBpO1xuXG5cdHJldHVybiBzcGFuXG59IiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuLi9zdGF0ZS5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2sodCwgcmVyZW5kZXIsIHByKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGV0YWlscyBjbGFzcz1cImRldGFpbHMtdGFza1wiPlxuICAgICAgICAgICAgPHN1bW1hcnkgY2xhc3M9J3Rhc2snPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpb3JpdHkgcHJpb3JpdHktJHt0LnByaW9yaXR5fVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt0LmlzQ29tcGxldGUgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay10aXRsZSAke3QuaXNDb21wbGV0ZSA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwifVwiPiR7dC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgJHshcHIgPyBgPHAgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHt0LnByb2plY3R9PC9wPmA6ICcnfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtdGFzayAgJHtwciA/ICdzcGVjaWFsJyA6ICcnfVwiIGRhdGEtaWQ9XCIke3QuaWR9XCI+eDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImVkaXQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9uZTxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIlwiIHZhbHVlPVwiMFwiLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiE8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJcIiB2YWx1ZT1cIjFcIi8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4hITxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIlwiIHZhbHVlPVwiMlwiLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiEhITxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBpZD1cIlwiIHZhbHVlPVwiM1wiLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJvamVjdFwiIGlkPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3BlbGxjaGVjaz1cImZhbHNlXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2RldGFpbHM+XG5cdGA7XG5cbiAgICBsZXQgZm9ybSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtXCIpO1xuICAgIGZvcm0uZGVzY3JpcHRpb24udmFsdWUgPSB0LmRlc2NyaXB0aW9uO1xuXG4gICAgZm9ybS5vbmlucHV0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0LnByb2plY3QgIT09IHRoaXMucHJvamVjdC52YWx1ZSkgdC5jaGFuZ2VQcm9qZWN0KHRoaXMucHJvamVjdC52YWx1ZSk7XG5cbiAgICAgICAgdC5lZGl0KFxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eS52YWx1ZSwgXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICApO1xuICAgIH1cbiAgICBmb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICByZXJlbmRlcigpXG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpXG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBwcmlvcml0eSBjaGVja2JveFxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9JyR7dC5wcmlvcml0eX0nXWApLmNoZWNrZWQgPSBcInRydWVcIlxuXG4gICAgLy8gYWRkIHByb2plY3RzIHRvIGZvcm0gcHJvamVjdCBkcm9wZG93blxuICAgIHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGZvcm0ucHJvamVjdC5pbm5lckhUTUwgKz1cbiAgICAgICAgIGA8b3B0aW9uIHZhbHVlPVwiJHtwcm9qZWN0LnRpdGxlfVwiICR7dC5wcm9qZWN0ID09PSBwcm9qZWN0LnRpdGxlID8gXCJzZWxlY3RlZFwiIDogXCJcIn0+JHtwcm9qZWN0LnRpdGxlfTwvb3B0aW9uPmA7XG4gICAgfSlcblxuICAgIC8vIHNldCBwcm9qZWN0IGlmIG5vdCBkZWZpbmVkXG4gICAgbGV0IG5hbWUgPSBzdGF0ZS5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gdC5wcm9qZWN0KVxuICAgIGxldCBwcm9qZWN0ID0gIXByID8gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT09IHQucHJvamVjdCkgOiBwcjtcblxuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0Lm1hcmtDb21wbGV0ZSh0aGlzLmNoZWNrZWQpO1xuICAgICAgICByZXJlbmRlcigpO1xuICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKVxuICAgIH0pO1xuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKCt0aGlzLmRhdGFzZXQuaWQpXG4gICAgICAgIHJlcmVuZGVyKClcbiAgICAgICAgc3RhdGUuc2F2ZVN0YXRlKClcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBsaTtcbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2VyKGYsIGRlbGF5KSB7XG4gICAgbGV0IHRpbWVyO1xuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGYoLi4uYXJncylcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgfVxufSIsIlxuXG5jb25zdCBwcm90byA9IHtcblx0YWRkVGFzayh0YXNrKSB7XG5cdFx0dGFzay5wcm9qZWN0ID0gdGhpcy50aXRsZTtcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdH0sXG5cdGRlbGV0ZVRhc2soaWQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMudGFza3MuaW5kZXhPZih0aGlzLnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBpZCkpO1xuXHRcdHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKVxuXHR9LFxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh0aXRsZT1cIk5ldyBQcm9qZWN0XCIsIHRhc2tzPVtdLCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90bywge3RpdGxlLCB0YXNrcywgaWR9KTtcblxufVxuIiwiXG5cblxuZnVuY3Rpb24gc29ydEJ5Q29tcGxldGUoYXJyKSB7XG4gICAgbGV0IGFycjEgPSBhcnIuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5pc0NvbXBsZXRlKTtcbiAgICBsZXQgYXJyMiA9IGFyci5maWx0ZXIoKHRhc2spID0+IHRhc2suaXNDb21wbGV0ZSk7XG4gICAgcmV0dXJuIFthcnIxLCBhcnIyXTtcbn1cblxuZnVuY3Rpb24gc29ydEJ5RGF0ZShhcnIpIHtcbiAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGEuZGF0ZS5nZXRUaW1lKCkgLSBiLmRhdGUuZ2V0VGltZSgpKTtcbn1cblxuZnVuY3Rpb24gc29ydEJ5UHJpb3JpdHkoYXJyKSB7XG4gICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG59XG5mdW5jdGlvbiBzb3J0QnlEYXRlRG9uZShhcnIpIHtcbiAgICByZXR1cm4gYXJyLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURvbmUuZ2V0VGltZSgpIC0gYS5kYXRlRG9uZS5nZXRUaW1lKCkpO1xufVxuXG5leHBvcnQge3NvcnRCeVByaW9yaXR5LCBzb3J0QnlEYXRlRG9uZSwgc29ydEJ5RGF0ZSwgc29ydEJ5Q29tcGxldGV9IiwiXG5pbXBvcnQgZGVib3VuY2VyIGZyb20gXCIuL2RlYm91bmNlci5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC1mYWN0b3J5LmpzXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvLWZhY3RvcnkuanNcIjtcblxuY29uc3Qgc3RhdGUgPSB7XG5cdGFjdGl2ZVRhYjogMCxcblx0c2V0VGFiKHRhYikge1xuXHRcdHRoaXMuYWN0aXZlVGFiID0gdGFiO1xuXHR9LFxuXG5cdGFkZFByb2plY3QodGl0bGUpIHtcblx0XHRpZiAoIXRoaXMucHJvamVjdHMuZXZlcnkocCA9PiBwLnRpdGxlICE9PSB0aXRsZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBwcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKVxuXHRcdH1cblx0XHR0aGlzLnByb2plY3RzLnB1c2goUHJvamVjdCh0aXRsZSkpXG5cdH0sXG5cdGRlbGV0ZVByb2plY3QoaWQpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZih0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBpZCkpO1xuXHRcdHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVxuXHR9LFxuXG5cdHNhdmVTdGF0ZSgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzKSlcblx0fSxcblx0cmV0cmlldmVTdGF0ZSgpIHtcblx0XHRpZiAoIWxvY2FsU3RvcmFnZS5zdGF0ZSkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcykpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zdGF0ZSk7XG5cdFx0XG5cdFx0bGV0IHByb2plY3RzID0gW107XG5cdFx0ZGF0YS5wcm9qZWN0cy5mb3JFYWNoKHAgPT4ge1x0XHQvLyBwIC0gaXMganVzdCBhIHNoZWxsIG9mIGRhdGEsIG5vIG1ldGhvZHNcblx0XHRcdGxldCB0YXNrcyA9IFtdO1xuXHRcdFx0cC50YXNrcy5mb3JFYWNoKHQgPT4ge1x0XHQvLyB0IC0gaXMganVzdCBhIHNoZWxsIG9mIGRhdGEsIG5vIG1ldGhvZHNcblx0XHRcdFx0dGFza3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh0LmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuaXNDb21wbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh0LmRhdGVEb25lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuc3VidGFza3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmlkXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuXHRcdFx0fSlcblx0XHRcdHByb2plY3RzLnB1c2goUHJvamVjdChwLnRpdGxlLCB0YXNrcywgcC5pZCkpXG5cdFx0fSlcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2FjdGl2ZVRhYicsIHsndmFsdWUnOiBkYXRhLmFjdGl2ZVRhYn0pXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdwcm9qZWN0cycsIHsndmFsdWUnOiBwcm9qZWN0c30pXG5cblx0fSxcblx0cHJvamVjdHM6IFtcblx0XHRQcm9qZWN0KFwiUGVyc29uYWxcIiksXG5cdF0sXG59XG5cbnN0YXRlLnJldHJpZXZlU3RhdGUoKVxuXG5zdGF0ZS5zYXZlU3RhdGUgPSBzdGF0ZS5zYXZlU3RhdGUuYmluZChzdGF0ZSlcbnN0YXRlLnNhdmVTdGF0ZSA9IGRlYm91bmNlcihzdGF0ZS5zYXZlU3RhdGUsIDQwMClcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7IiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgZGVib3VuY2VyIGZyb20gXCIuL2RlYm91bmNlci5qc1wiO1xuXG5jb25zdCBwcm90byA9IHtcbiAgICBlZGl0KFxuICAgICAgICBwcmlvcml0eSA9IHRoaXMucHJpb3JpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgdGl0bGUgPSB0aGlzLnRpdGxlLFxuICAgICAgICBpc0NvbXBsZXRlID0gdGhpcy5pc0NvbXBsZXRlLFxuICAgICAgICBzdWJ0YXNrcyA9IHRoaXMuc3VidGFza3NcbiAgICApIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5zdWJ0YXNrcyA9IHN1YnRhc2tzO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xuICAgICAgICBzdGF0ZS5zYXZlU3RhdGUoKTtcbiAgICB9LFxuICAgIG1hcmtDb21wbGV0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5kYXRlRG9uZSA9IHZhbHVlID8gbmV3IERhdGUoKSA6IG51bGw7XG4gICAgfSxcbiAgICBjaGFuZ2VQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBvbGRfID0gc3RhdGUucHJvamVjdHMuZmluZCgocCkgPT4gcC50aXRsZSA9PT0gdGhpcy5wcm9qZWN0KTtcbiAgICAgICAgY29uc3QgbmV3XyA9IHN0YXRlLnByb2plY3RzLmZpbmQoKHApID0+IHAudGl0bGUgPT09IG5ld1Byb2plY3RUaXRsZSk7XG5cbiAgICAgICAgbmV3Xy5hZGRUYXNrKHRoaXMpO1xuICAgICAgICBvbGRfLmRlbGV0ZVRhc2sodGhpcy5pZCk7XG4gICAgICAgIHN0YXRlLnNhdmVTdGF0ZSgpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKFxuICAgIHRpdGxlID0gXCJOZXcgdGFza1wiLFxuICAgIGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgIHByaW9yaXR5ID0gMCwgLy8gMCAtIG5vbmUsIDEgLSBsb3csIDIgLSBtaWRkbGUsIDMgLSBoaWdoXG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlLFxuICAgIHByb2plY3QgPSBcIlBlcnNvbmFsXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIGRhdGVEb25lID0gaXNDb21wbGV0ZSA/IG5ldyBEYXRlKCkgOiBudWxsLFxuICAgIHN1YnRhc2tzID0gW10sXG4gICAgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuKSB7XG4gICAgbGV0IHRvZG8gPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHN1YnRhc2tzLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpc0NvbXBsZXRlLFxuICAgICAgICBkYXRlRG9uZSxcbiAgICAgICAgaWQsXG4gICAgfTtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBPYmplY3QuYXNzaWduKHt9LCBwcm90bywgdG9kbyk7XG4gICAgcGxhY2Vob2xkZXIuZWRpdCA9IHBsYWNlaG9sZGVyLmVkaXQuYmluZChwbGFjZWhvbGRlcik7XG4gICAgcGxhY2Vob2xkZXIuZWRpdCA9IGRlYm91bmNlcihwbGFjZWhvbGRlci5lZGl0LCA1MDApO1xuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xufVxuXG4vKlxuXHR0aGlzIGlzIG5vdCBhIGZhY3RvcnkgZnVuY3Rpb25cblx0YSBmYWN0b3J5IGZ1bmN0aW9uIHN1cHBvc2VkIGV4cG9zZSBhbiBpbnRlcmFmYWNlXG5cdGJ1dCB0aGlzIG9uZSBhY3R1YWxseSBqdXN0IHJldHVybnMgdGhlIG9iamVjdCBpdHNlbGZcbiAqL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlLmpzXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvLWZhY3RvcnkuanNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZWJhci5qc1wiO1xuaW1wb3J0IEFsbFByb2plY3RzIGZyb20gXCIuL2NvbXBvbmVudHMvQWxsUHJvamVjdHMuanNcIjtcbmltcG9ydCBBbGxUYXNrcyBmcm9tIFwiLi9jb21wb25lbnRzL0FsbFRhc2tzLmpzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPSdyb290Jz48L2Rpdj5cIlxuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcblxuY29uc3Qgc2lkZWJhciA9IFNpZGViYXIoKHRhYikgPT4ge1xuXHRpZihzdGF0ZS5hY3RpdmVUYWIgIT09IHRhYikge1xuXHRcdHN0YXRlLnNldFRhYih0YWIpXG5cdFx0cmVuZGVyKCk7XG5cdH1cbn0pO1xuXG5jb25zdCB0YWJzID0gW1xuXHRBbGxQcm9qZWN0cyhzdGF0ZS5wcm9qZWN0cyksIFxuXHRBbGxUYXNrcyhzdGF0ZS5wcm9qZWN0cywgcmVuZGVyKSxcblx0Ly8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuXTtcblxuXG5yb290LmFwcGVuZENoaWxkKHNpZGViYXIpXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcblxuXHRyb290LmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcblx0XHRpZihub2RlLmlkICE9PSBcInNpZGViYXJcIikgbm9kZS5yZW1vdmUoKTtcblx0fSlcblxuXHRyb290LmFwcGVuZENoaWxkKHRhYnNbc3RhdGUuYWN0aXZlVGFiXSlcblx0XG5cdHRhYnNbc3RhdGUuYWN0aXZlVGFiXS5yZW5kZXIoKVxuXHRzdGF0ZS5zYXZlU3RhdGUoKVxufVxuXG5yZW5kZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==