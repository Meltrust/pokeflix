/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/elembak.svg */ "./src/assets/elembak.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: rgb(85, 144, 189);\n  background:\n    linear-gradient(\n      90deg,\n      rgb(76, 140, 189) 0%,\n      rgb(109, 192, 255) 54%,\n      rgba(182, 216, 242, 1) 82%\n    );\n  text-align: center;\n}\n\nnav {\n  width: 90%;\n  margin: auto;\n}\n\n.nav-right {\n  margin-right: 12rem;\n}\n\n.container-fluid {\n  position: relative;\n}\n\n.logo-text {\n  margin-left: 13rem;\n  font-family: 'Sora', sans-serif;\n}\n\n.pokemons {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  height: 100%;\n}\n\n.pokecard {\n  border-radius: 10px;\n  padding: 10px;\n  background-color: white;\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\n  width: 100%;\n}\n\n.pokeimg-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n\n.poke-name {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n\n.pokeimg-container img {\n  text-align: center;\n  display: block;\n  margin: auto;\n  flex-basis: 15%;\n  flex-grow: 0.2;\n  object-fit: contain;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n}\n\n.comment-button {\n  flex-basis: 17%;\n}\n\n.name-likes-container {\n  top: 6%;\n  right: 3%;\n}\n\n.bi-heart {\n  cursor: pointer;\n}\n\n.p-img {\n  width: 155px;\n  height: 227px;\n}\n\n#images img {\n  width: 80%;\n}\n\n.form {\n  flex-direction: column;\n  margin: 0 auto;\n  width: 80%;\n}\n\n.form input[type=\"text\"] {\n  border: 3px solid #333;\n  padding: 6px;\n  margin-bottom: 10px;\n  width: 98%;\n  display: block;\n}\n\n#commentSection {\n  display: flex;\n  flex-direction: column;\n}\n\n#comments {\n  height: 69px;\n}\n\n.form input[type=\"submit\"] {\n  align-self: flex-end;\n  background: #fff;\n  border: 1px solid #333;\n  box-shadow: 2px 2px #333;\n  cursor: pointer;\n  font-family: monospace, sans-serif;\n  font-weight: 700;\n  padding: 3px 6px;\n  margin-right: 2px;\n  transition: all 100ms ease;\n}\n\n.form input[type=\"submit\"]:hover {\n  background: #333;\n  color: #fff;\n  box-shadow: none;\n  transform: translate(1px, 1px);\n}\n\n#comments-table-wrapper {\n  text-align: start;\n  width: 80%;\n}\n\n.footer {\n  z-index: -1 !important;\n  width: 90%;\n  margin: auto;\n}\n\n.main-spinner {\n  height: 20rem;\n  width: 20rem;\n  position: relative;\n  top: 13rem;\n}\n\n.poke-counter {\n  margin-left: 40rem;\n}\n\n.rounded-pill {\n  border-radius: 3rem !important;\n}\n\n@media only screen and (max-width: 720px) {\n  .poke-counter {\n    margin-left: auto;\n    font-style: italic;\n  }\n\n  .logo-text {\n    margin-left: 1rem !important;\n  }\n\n  .pokemons {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    height: 100%;\n  }\n\n  .footer {\n    margin-bottom: 1rem;\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .logo-text {\n    margin-left: 2.5rem !important;\n  }\n\n  .poke-counter {\n    margin-left: auto;\n  }\n\n  .pokemons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    height: 100%;\n  }\n\n  .nav-right {\n    margin-right: auto;\n  }\n\n  .footer {\n    margin-bottom: 1rem;\n  }\n\n  @media only screen and (min-width: 1140px) {\n    .logo-text {\n      margin-left: 13rem !important;\n    }\n\n    .nav-right {\n      margin-right: auto;\n    }\n\n    .poke-counter {\n      margin-left: 40rem;\n    }\n\n    .pokemons {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      gap: 1rem;\n      width: 80%;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 1rem;\n      margin-top: 1rem;\n      height: 100%;\n    }\n\n    .footer {\n      margin-bottom: auto;\n    }\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B;;;;;;KAMG;EACH,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,+CAA+C;EAC/C,WAAW;AACb;;AAEA;EACE,yDAA8C;EAC9C,4BAA4B;EAC5B,2BAA2B;EAC3B,OAAO;EACP,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,sBAAsB;EACtB,wBAAwB;EACxB,eAAe;EACf,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE;MACE,6BAA6B;IAC/B;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,aAAa;MACb,kCAAkC;MAClC,SAAS;MACT,UAAU;MACV,iBAAiB;MACjB,kBAAkB;MAClB,mBAAmB;MACnB,gBAAgB;MAChB,YAAY;IACd;;IAEA;MACE,mBAAmB;IACrB;EACF;AACF","sourcesContent":["body {\n  background: rgb(85, 144, 189);\n  background:\n    linear-gradient(\n      90deg,\n      rgb(76, 140, 189) 0%,\n      rgb(109, 192, 255) 54%,\n      rgba(182, 216, 242, 1) 82%\n    );\n  text-align: center;\n}\n\nnav {\n  width: 90%;\n  margin: auto;\n}\n\n.nav-right {\n  margin-right: 12rem;\n}\n\n.container-fluid {\n  position: relative;\n}\n\n.logo-text {\n  margin-left: 13rem;\n  font-family: 'Sora', sans-serif;\n}\n\n.pokemons {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  height: 100%;\n}\n\n.pokecard {\n  border-radius: 10px;\n  padding: 10px;\n  background-color: white;\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\n  width: 100%;\n}\n\n.pokeimg-container {\n  background-image: url(\"../assets/elembak.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n\n.poke-name {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n\n.pokeimg-container img {\n  text-align: center;\n  display: block;\n  margin: auto;\n  flex-basis: 15%;\n  flex-grow: 0.2;\n  object-fit: contain;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n}\n\n.comment-button {\n  flex-basis: 17%;\n}\n\n.name-likes-container {\n  top: 6%;\n  right: 3%;\n}\n\n.bi-heart {\n  cursor: pointer;\n}\n\n.p-img {\n  width: 155px;\n  height: 227px;\n}\n\n#images img {\n  width: 80%;\n}\n\n.form {\n  flex-direction: column;\n  margin: 0 auto;\n  width: 80%;\n}\n\n.form input[type=\"text\"] {\n  border: 3px solid #333;\n  padding: 6px;\n  margin-bottom: 10px;\n  width: 98%;\n  display: block;\n}\n\n#commentSection {\n  display: flex;\n  flex-direction: column;\n}\n\n#comments {\n  height: 69px;\n}\n\n.form input[type=\"submit\"] {\n  align-self: flex-end;\n  background: #fff;\n  border: 1px solid #333;\n  box-shadow: 2px 2px #333;\n  cursor: pointer;\n  font-family: monospace, sans-serif;\n  font-weight: 700;\n  padding: 3px 6px;\n  margin-right: 2px;\n  transition: all 100ms ease;\n}\n\n.form input[type=\"submit\"]:hover {\n  background: #333;\n  color: #fff;\n  box-shadow: none;\n  transform: translate(1px, 1px);\n}\n\n#comments-table-wrapper {\n  text-align: start;\n  width: 80%;\n}\n\n.footer {\n  z-index: -1 !important;\n  width: 90%;\n  margin: auto;\n}\n\n.main-spinner {\n  height: 20rem;\n  width: 20rem;\n  position: relative;\n  top: 13rem;\n}\n\n.poke-counter {\n  margin-left: 40rem;\n}\n\n.rounded-pill {\n  border-radius: 3rem !important;\n}\n\n@media only screen and (max-width: 720px) {\n  .poke-counter {\n    margin-left: auto;\n    font-style: italic;\n  }\n\n  .logo-text {\n    margin-left: 1rem !important;\n  }\n\n  .pokemons {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    height: 100%;\n  }\n\n  .footer {\n    margin-bottom: 1rem;\n  }\n}\n\n@media only screen and (min-width: 800px) {\n  .logo-text {\n    margin-left: 2.5rem !important;\n  }\n\n  .poke-counter {\n    margin-left: auto;\n  }\n\n  .pokemons {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    height: 100%;\n  }\n\n  .nav-right {\n    margin-right: auto;\n  }\n\n  .footer {\n    margin-bottom: 1rem;\n  }\n\n  @media only screen and (min-width: 1140px) {\n    .logo-text {\n      margin-left: 13rem !important;\n    }\n\n    .nav-right {\n      margin-right: auto;\n    }\n\n    .poke-counter {\n      margin-left: 40rem;\n    }\n\n    .pokemons {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      gap: 1rem;\n      width: 80%;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 1rem;\n      margin-top: 1rem;\n      height: 100%;\n    }\n\n    .footer {\n      margin-bottom: auto;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ elementsCounter)
/* harmony export */ });
/* eslint-disable linebreak-style */

function elementsCounter(elements = []) {
  return elements.length;
}


/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateGrid)
/* harmony export */ });
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes */ "./src/modules/likes.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ "./src/modules/counter.js");
/* eslint-disable linebreak-style */




const pokemons = document.querySelector('.pokemons');
const commentSection = document.querySelector('#commentSection');
const detailSection = document.querySelector('#detail');
const detailSection2 = document.querySelector('#detail2');
const imageSection = document.querySelector('#images');
const commentsCount = document.querySelector('#comments-count');
const limit = 8;
const offset = 1;
let pokeId = 0;
let arrayOfComments = [];
let pokemonArr = [];
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'dXTjle5wBhwiX6PKtZxO';

function hideSpinnerNav() {
  document.getElementById('spinner')
    .style.display = 'none';
}

function hideFooter() {
  document.getElementById('footer')
    .style.display = 'none';
}

function showFooter() {
  document.getElementById('footer')
    .style.display = 'block';
}

async function getPokemon(id) {
  hideFooter();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  if (response) {
    hideSpinnerNav();
    showFooter();
  }
  return data;
}

async function getPokemons(offset, limit) {
  const promises = [];
  for (let i = offset; i <= offset + limit; i += 1) {
    promises.push(getPokemon(i));
  }
  pokemonArr = await Promise.all(promises);
}

async function createComment() {
  const endpoint = `apps/${APP_ID}/comments?item_id=${pokeId}`;
  const response = await fetch(BASE_URL + endpoint);
  const data = await response.json();
  arrayOfComments = data;
}

async function commentsDOM() {
  await createComment();

  commentSection.innerHTML = '';
  if (arrayOfComments.length === 0 || arrayOfComments.error) {
    commentsCount.innerHTML = '0';
    commentSection.innerHTML = '';
  } else {
    arrayOfComments.forEach((comment) => {
      const comContainer = document.createElement('div');
      const b = document.createElement('b');
      const comContent = document.createElement('span');
      b.innerHTML = `${comment.username}: `;
      comContent.innerHTML = `${comment.comment}`;

      comContainer.append(b, comContent);
      comContainer.classList.add('mb-2');
      commentSection.append(comContainer);
    });
    const count = arrayOfComments.length;
    commentsCount.innerHTML = count;
  }
}

async function populateGrid() {
  await getPokemons(offset, limit);
  const likesArr = await (0,_likes__WEBPACK_IMPORTED_MODULE_0__.getLikes)();

  pokemonArr.forEach((pokemon, index) => {
    const element = document.createElement('div');
    element.classList.add('pokecard', 'd-flex', 'flex-column', 'justify-content-around', 'position-relative');
    element.setAttribute('name', `${pokemon.name}`);
    element.id = index;
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('pokeimg-container');

    const pokeImg = document.createElement('img');
    pokeImg.src = pokemon.sprites.other['official-artwork'].front_default;
    imgContainer.appendChild(pokeImg);

    const nameLikesContainer = document.createElement('div');
    nameLikesContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center', 'name-likes-container', 'position-absolute');

    imgContainer.appendChild(nameLikesContainer);

    const pokeName = document.createElement('p');
    pokeName.classList.add('poke-name', 'mb-0', 'fs-4');

    const pokeLikesContainer = document.createElement('div');
    pokeLikesContainer.classList.add('me-2', 'fs-3');

    const pokeLikesIcon = document.createElement('i');
    pokeLikesIcon.classList.add('bi', 'bi-heart', 'fs-3');
    pokeLikesIcon.id = `likeBtn${pokemon.id}`;
    pokeLikesIcon.setAttribute('onclick', `window.addLike( ${pokemon.id} )`);

    const pokeLikesCount = document.createElement('div');
    const pokeLikesRetreiveCountId = likesArr.findIndex((e) => e.item_id === `item${pokemon.id}`);

    pokeLikesCount.id = `likeCnt${pokemon.id}`;
    pokeLikesCount.classList.add('fs-3', 'mb-1');

    if (pokeLikesRetreiveCountId === -1 || null || undefined) {
      pokeLikesCount.textContent = 0;
    } else {
      pokeLikesCount.textContent = likesArr[pokeLikesRetreiveCountId].likes;
    }
    pokeName.textContent = pokemon.name;

    pokeLikesContainer.appendChild(pokeLikesIcon);

    nameLikesContainer.append(pokeLikesContainer, pokeLikesCount);

    const comBtn = document.createElement('button');
    comBtn.textContent = 'Comment';
    comBtn.classList.add('btn', 'btn-info', 'comment-button', 'fs-4');
    comBtn.setAttribute('name', pokemon.name);
    comBtn.setAttribute('data-bs-toggle', 'modal');
    comBtn.setAttribute('data-bs-target', '#mainPopup');

    comBtn.setAttribute('onclick', `window.testyFunct( '${pokeImg.src}' )`);
    comBtn.setAttribute('id', index);
    comBtn.setAttribute('height', pokemon.height);

    element.appendChild(imgContainer);
    element.appendChild(pokeName);
    element.appendChild(comBtn);

    pokemons.append(element);
  });
  const pokeCount = document.getElementById('pokeCounter');
  pokeCount.textContent = `Pokemons Count: ${(0,_counter__WEBPACK_IMPORTED_MODULE_1__["default"])(pokemonArr)}`;

  const btn = document.querySelectorAll('button');

  btn.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      detailSection.innerHTML = '';
      detailSection2.innerHTML = '';

      pokeId = e.target.parentNode.id;
      const { height } = pokemonArr[pokeId];
      const { weight } = pokemonArr[pokeId];
      const exp = pokemonArr[pokeId].base_experience;
      const title = document.createElement('p');

      const heightDom = document.createElement('p');
      const weightDom = document.createElement('p');
      const expDom = document.createElement('p');
      const modalName = document.getElementById('modalTitle');
      modalName.innerHTML = `${ele.name}`;

      title.innerHTML = `Name: ${ele.name}`;
      heightDom.innerHTML = `Height: ${height}`;
      weightDom.innerHTML = `Weight: ${weight}`;
      expDom.innerHTML = `Experience: ${exp}`;
      detailSection.append(title, heightDom);
      detailSection2.append(weightDom, expDom);
      commentsDOM();
    });
  });
}

window.testyFunct = (e) => {
  imageSection.innerHTML = '';
  const img = document.createElement('img');
  img.src = e;
  imageSection.append(img);
};

const username = document.querySelector('#username');
const comments = document.querySelector('#comments');
const submit = document.querySelector('#submit');

async function addcomments(e) {
  if (!username.value || !comments.value) {
    const errPlacing = document.getElementById('valErr');

    errPlacing.innerHTML = ('Please fill both fields \n');

    setTimeout(() => errPlacing.removeChild(errPlacing.childNodes[0]), 2000);

    return false;
  }
  e.preventDefault();
  const spinComment = document.getElementById('spinnerCom');
  spinComment.classList.toggle('d-none');
  const submitComButton = document.getElementById('submit');
  submitComButton.classList.toggle('d-none');

  const endpoint = `apps/${APP_ID}/comments`;
  const response = await fetch(BASE_URL + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: pokeId,
      username: `${username.value}`,
      comment: comments.value,
    }),

  });
  if (response) {
    spinComment.classList.toggle('d-none');
    submitComButton.classList.toggle('d-none');
  }
  createComment();
  username.value = '';
  comments.value = '';
  commentsDOM();
  return response;
}

window.addLike = (id = '') => {
  const obj = { item_id: `item${id}` };
  (0,_likes__WEBPACK_IMPORTED_MODULE_0__.postLikes)(obj).then(() => {
    const likeBtn = document.querySelector(`#likeBtn${id}`);
    likeBtn.classList.replace('bi-heart', 'bi-heart-fill');
    likeBtn.classList.add('text-danger');
    likeBtn.setAttribute('onclick', '');
    const likesNumber = document.querySelector(`#likeCnt${id}`);
    likesNumber.innerHTML = `${Number.parseInt(likesNumber.innerHTML, 10) + 1}`;
  });
};

submit.addEventListener('click', (event) => {
  event.preventDefault();
  addcomments(event);
});


/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
/* eslint-disable linebreak-style */

const likesUrl = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXTjle5wBhwiX6PKtZxO/likes/');

// GET likes
async function getLikes() {
  const response = await fetch(likesUrl);
  const obj = await response.json();

  return obj;
}

// POST likes
async function postLikes(element = {}) {
  const response = await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify(element),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.status;
}


/***/ }),

/***/ "./src/assets/elembak.svg":
/*!********************************!*\
  !*** ./src/assets/elembak.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "elembak.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_displayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayList */ "./src/modules/displayList.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");



(0,_modules_displayList__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCaUQ7QUFDcEI7O0FBRTdCLGdFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGlzcGxheUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZWxlbWJhay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYig4NSwgMTQ0LCAxODkpO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDkwZGVnLFxcbiAgICAgIHJnYig3NiwgMTQwLCAxODkpIDAlLFxcbiAgICAgIHJnYigxMDksIDE5MiwgMjU1KSA1NCUsXFxuICAgICAgcmdiYSgxODIsIDIxNiwgMjQyLCAxKSA4MiVcXG4gICAgKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5uYXYtcmlnaHQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvLXRleHQge1xcbiAgbWFyZ2luLWxlZnQ6IDEzcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTb3JhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnBva2Vtb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wb2tlY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNSk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBva2VpbWctY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucG9rZS1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wb2tlaW1nLWNvbnRhaW5lciBpbWcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBmbGV4LWJhc2lzOiAxNSU7XFxuICBmbGV4LWdyb3c6IDAuMjtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50LWJ1dHRvbiB7XFxuICBmbGV4LWJhc2lzOiAxNyU7XFxufVxcblxcbi5uYW1lLWxpa2VzLWNvbnRhaW5lciB7XFxuICB0b3A6IDYlO1xcbiAgcmlnaHQ6IDMlO1xcbn1cXG5cXG4uYmktaGVhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucC1pbWcge1xcbiAgd2lkdGg6IDE1NXB4O1xcbiAgaGVpZ2h0OiAyMjdweDtcXG59XFxuXFxuI2ltYWdlcyBpbWcge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzMzM7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDk4JTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jY29tbWVudFNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb21tZW50cyB7XFxuICBoZWlnaHQ6IDY5cHg7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICBib3gtc2hhZG93OiAycHggMnB4ICMzMzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xcbn1cXG5cXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpO1xcbn1cXG5cXG4jY29tbWVudHMtdGFibGUtd3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgei1pbmRleDogLTEgIWltcG9ydGFudDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5tYWluLXNwaW5uZXIge1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTNyZW07XFxufVxcblxcbi5wb2tlLWNvdW50ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcmVtO1xcbn1cXG5cXG4ucm91bmRlZC1waWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLnBva2UtY291bnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB9XFxuXFxuICAubG9nby10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5wb2tlbW9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAubG9nby10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnBva2UtY291bnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcblxcbiAgLnBva2Vtb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXYtcmlnaHQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE0MHB4KSB7XFxuICAgIC5sb2dvLXRleHQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3JlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtcmlnaHQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucG9rZS1jb3VudGVyIHtcXG4gICAgICBtYXJnaW4tbGVmdDogNDByZW07XFxuICAgIH1cXG5cXG4gICAgLnBva2Vtb25zIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLmZvb3RlciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0I7Ozs7OztLQU1HO0VBQ0gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLCtDQUErQztFQUMvQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5REFBOEM7RUFDOUMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixPQUFPO0VBQ1AsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsNkJBQTZCO0lBQy9COztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsYUFBYTtNQUNiLGtDQUFrQztNQUNsQyxTQUFTO01BQ1QsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDg1LCAxNDQsIDE4OSk7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgOTBkZWcsXFxuICAgICAgcmdiKDc2LCAxNDAsIDE4OSkgMCUsXFxuICAgICAgcmdiKDEwOSwgMTkyLCAyNTUpIDU0JSxcXG4gICAgICByZ2JhKDE4MiwgMjE2LCAyNDIsIDEpIDgyJVxcbiAgICApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm5hdi1yaWdodCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuICBtYXJnaW4tbGVmdDogMTNyZW07XFxuICBmb250LWZhbWlseTogJ1NvcmEnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucG9rZW1vbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBva2VjYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDNweCAxNXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9rZWltZy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvZWxlbWJhay5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wb2tlLW5hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBva2VpbWctY29udGFpbmVyIGltZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZsZXgtYmFzaXM6IDE1JTtcXG4gIGZsZXgtZ3JvdzogMC4yO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnQtYnV0dG9uIHtcXG4gIGZsZXgtYmFzaXM6IDE3JTtcXG59XFxuXFxuLm5hbWUtbGlrZXMtY29udGFpbmVyIHtcXG4gIHRvcDogNiU7XFxuICByaWdodDogMyU7XFxufVxcblxcbi5iaS1oZWFydCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wLWltZyB7XFxuICB3aWR0aDogMTU1cHg7XFxuICBoZWlnaHQ6IDIyN3B4O1xcbn1cXG5cXG4jaW1hZ2VzIGltZyB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzMzMztcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogOTglO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNjb21tZW50U2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbW1lbnRzIHtcXG4gIGhlaWdodDogNjlweDtcXG59XFxuXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggIzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XFxufVxcblxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCk7XFxufVxcblxcbiNjb21tZW50cy10YWJsZS13cmFwcGVyIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB6LWluZGV4OiAtMSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm1haW4tc3Bpbm5lciB7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxM3JlbTtcXG59XFxuXFxuLnBva2UtY291bnRlciB7XFxuICBtYXJnaW4tbGVmdDogNDByZW07XFxufVxcblxcbi5yb3VuZGVkLXBpbGwge1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAucG9rZS1jb3VudGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIH1cXG5cXG4gIC5sb2dvLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnBva2Vtb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIC5sb2dvLXRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAucG9rZS1jb3VudGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XFxuXFxuICAucG9rZW1vbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLm5hdi1yaWdodCB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTQwcHgpIHtcXG4gICAgLmxvZ28tdGV4dCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEzcmVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1yaWdodCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5wb2tlLWNvdW50ZXIge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHJlbTtcXG4gICAgfVxcblxcbiAgICAucG9rZW1vbnMge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgICBnYXA6IDFyZW07XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGVtZW50c0NvdW50ZXIoZWxlbWVudHMgPSBbXSkge1xyXG4gIHJldHVybiBlbGVtZW50cy5sZW5ndGg7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCB7IGdldExpa2VzLCBwb3N0TGlrZXMgfSBmcm9tICcuL2xpa2VzJztcbmltcG9ydCBlbGVtZW50c0NvdW50ZXIgZnJvbSAnLi9jb3VudGVyJztcblxuY29uc3QgcG9rZW1vbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vbnMnKTtcbmNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRTZWN0aW9uJyk7XG5jb25zdCBkZXRhaWxTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbCcpO1xuY29uc3QgZGV0YWlsU2VjdGlvbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlsMicpO1xuY29uc3QgaW1hZ2VTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlcycpO1xuY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1jb3VudCcpO1xuY29uc3QgbGltaXQgPSA4O1xuY29uc3Qgb2Zmc2V0ID0gMTtcbmxldCBwb2tlSWQgPSAwO1xubGV0IGFycmF5T2ZDb21tZW50cyA9IFtdO1xubGV0IHBva2Vtb25BcnIgPSBbXTtcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS8nO1xuY29uc3QgQVBQX0lEID0gJ2RYVGpsZTV3Qmh3aVg2UEt0WnhPJztcblxuZnVuY3Rpb24gaGlkZVNwaW5uZXJOYXYoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJylcbiAgICAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gaGlkZUZvb3RlcigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpXG4gICAgLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKVxuICAgIC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihpZCkge1xuICBoaWRlRm9vdGVyKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfS9gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgaWYgKHJlc3BvbnNlKSB7XG4gICAgaGlkZVNwaW5uZXJOYXYoKTtcbiAgICBzaG93Rm9vdGVyKCk7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBva2Vtb25zKG9mZnNldCwgbGltaXQpIHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8PSBvZmZzZXQgKyBsaW1pdDsgaSArPSAxKSB7XG4gICAgcHJvbWlzZXMucHVzaChnZXRQb2tlbW9uKGkpKTtcbiAgfVxuICBwb2tlbW9uQXJyID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVDb21tZW50KCkge1xuICBjb25zdCBlbmRwb2ludCA9IGBhcHBzLyR7QVBQX0lEfS9jb21tZW50cz9pdGVtX2lkPSR7cG9rZUlkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQkFTRV9VUkwgKyBlbmRwb2ludCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGFycmF5T2ZDb21tZW50cyA9IGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbW1lbnRzRE9NKCkge1xuICBhd2FpdCBjcmVhdGVDb21tZW50KCk7XG5cbiAgY29tbWVudFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIGlmIChhcnJheU9mQ29tbWVudHMubGVuZ3RoID09PSAwIHx8IGFycmF5T2ZDb21tZW50cy5lcnJvcikge1xuICAgIGNvbW1lbnRzQ291bnQuaW5uZXJIVE1MID0gJzAnO1xuICAgIGNvbW1lbnRTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGFycmF5T2ZDb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICBjb25zdCBjb21Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgYi5pbm5lckhUTUwgPSBgJHtjb21tZW50LnVzZXJuYW1lfTogYDtcbiAgICAgIGNvbUNvbnRlbnQuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jb21tZW50fWA7XG5cbiAgICAgIGNvbUNvbnRhaW5lci5hcHBlbmQoYiwgY29tQ29udGVudCk7XG4gICAgICBjb21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kKGNvbUNvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgY29uc3QgY291bnQgPSBhcnJheU9mQ29tbWVudHMubGVuZ3RoO1xuICAgIGNvbW1lbnRzQ291bnQuaW5uZXJIVE1MID0gY291bnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVHcmlkKCkge1xuICBhd2FpdCBnZXRQb2tlbW9ucyhvZmZzZXQsIGxpbWl0KTtcbiAgY29uc3QgbGlrZXNBcnIgPSBhd2FpdCBnZXRMaWtlcygpO1xuXG4gIHBva2Vtb25BcnIuZm9yRWFjaCgocG9rZW1vbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb2tlY2FyZCcsICdkLWZsZXgnLCAnZmxleC1jb2x1bW4nLCAnanVzdGlmeS1jb250ZW50LWFyb3VuZCcsICdwb3NpdGlvbi1yZWxhdGl2ZScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7cG9rZW1vbi5uYW1lfWApO1xuICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9rZWltZy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHBva2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwb2tlSW1nLnNyYyA9IHBva2Vtb24uc3ByaXRlcy5vdGhlclsnb2ZmaWNpYWwtYXJ0d29yayddLmZyb250X2RlZmF1bHQ7XG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKHBva2VJbWcpO1xuXG4gICAgY29uc3QgbmFtZUxpa2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUxpa2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJywgJ2FsaWduLWl0ZW1zLWNlbnRlcicsICduYW1lLWxpa2VzLWNvbnRhaW5lcicsICdwb3NpdGlvbi1hYnNvbHV0ZScpO1xuXG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVMaWtlc0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwb2tlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb2tlTmFtZS5jbGFzc0xpc3QuYWRkKCdwb2tlLW5hbWUnLCAnbWItMCcsICdmcy00Jyk7XG5cbiAgICBjb25zdCBwb2tlTGlrZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb2tlTGlrZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWUtMicsICdmcy0zJyk7XG5cbiAgICBjb25zdCBwb2tlTGlrZXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHBva2VMaWtlc0ljb24uY2xhc3NMaXN0LmFkZCgnYmknLCAnYmktaGVhcnQnLCAnZnMtMycpO1xuICAgIHBva2VMaWtlc0ljb24uaWQgPSBgbGlrZUJ0biR7cG9rZW1vbi5pZH1gO1xuICAgIHBva2VMaWtlc0ljb24uc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgYHdpbmRvdy5hZGRMaWtlKCAke3Bva2Vtb24uaWR9IClgKTtcblxuICAgIGNvbnN0IHBva2VMaWtlc0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcG9rZUxpa2VzUmV0cmVpdmVDb3VudElkID0gbGlrZXNBcnIuZmluZEluZGV4KChlKSA9PiBlLml0ZW1faWQgPT09IGBpdGVtJHtwb2tlbW9uLmlkfWApO1xuXG4gICAgcG9rZUxpa2VzQ291bnQuaWQgPSBgbGlrZUNudCR7cG9rZW1vbi5pZH1gO1xuICAgIHBva2VMaWtlc0NvdW50LmNsYXNzTGlzdC5hZGQoJ2ZzLTMnLCAnbWItMScpO1xuXG4gICAgaWYgKHBva2VMaWtlc1JldHJlaXZlQ291bnRJZCA9PT0gLTEgfHwgbnVsbCB8fCB1bmRlZmluZWQpIHtcbiAgICAgIHBva2VMaWtlc0NvdW50LnRleHRDb250ZW50ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9rZUxpa2VzQ291bnQudGV4dENvbnRlbnQgPSBsaWtlc0Fycltwb2tlTGlrZXNSZXRyZWl2ZUNvdW50SWRdLmxpa2VzO1xuICAgIH1cbiAgICBwb2tlTmFtZS50ZXh0Q29udGVudCA9IHBva2Vtb24ubmFtZTtcblxuICAgIHBva2VMaWtlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwb2tlTGlrZXNJY29uKTtcblxuICAgIG5hbWVMaWtlc0NvbnRhaW5lci5hcHBlbmQocG9rZUxpa2VzQ29udGFpbmVyLCBwb2tlTGlrZXNDb3VudCk7XG5cbiAgICBjb25zdCBjb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21CdG4udGV4dENvbnRlbnQgPSAnQ29tbWVudCc7XG4gICAgY29tQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4taW5mbycsICdjb21tZW50LWJ1dHRvbicsICdmcy00Jyk7XG4gICAgY29tQnRuLnNldEF0dHJpYnV0ZSgnbmFtZScsIHBva2Vtb24ubmFtZSk7XG4gICAgY29tQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnbW9kYWwnKTtcbiAgICBjb21CdG4uc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjbWFpblBvcHVwJyk7XG5cbiAgICBjb21CdG4uc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgYHdpbmRvdy50ZXN0eUZ1bmN0KCAnJHtwb2tlSW1nLnNyY30nIClgKTtcbiAgICBjb21CdG4uc2V0QXR0cmlidXRlKCdpZCcsIGluZGV4KTtcbiAgICBjb21CdG4uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBwb2tlbW9uLmhlaWdodCk7XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwb2tlTmFtZSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb21CdG4pO1xuXG4gICAgcG9rZW1vbnMuYXBwZW5kKGVsZW1lbnQpO1xuICB9KTtcbiAgY29uc3QgcG9rZUNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2VDb3VudGVyJyk7XG4gIHBva2VDb3VudC50ZXh0Q29udGVudCA9IGBQb2tlbW9ucyBDb3VudDogJHtlbGVtZW50c0NvdW50ZXIocG9rZW1vbkFycil9YDtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICBidG4uZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGRldGFpbFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgICBkZXRhaWxTZWN0aW9uMi5pbm5lckhUTUwgPSAnJztcblxuICAgICAgcG9rZUlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBwb2tlbW9uQXJyW3Bva2VJZF07XG4gICAgICBjb25zdCB7IHdlaWdodCB9ID0gcG9rZW1vbkFycltwb2tlSWRdO1xuICAgICAgY29uc3QgZXhwID0gcG9rZW1vbkFycltwb2tlSWRdLmJhc2VfZXhwZXJpZW5jZTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICBjb25zdCBoZWlnaHREb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCB3ZWlnaHREb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBleHBEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxUaXRsZScpO1xuICAgICAgbW9kYWxOYW1lLmlubmVySFRNTCA9IGAke2VsZS5uYW1lfWA7XG5cbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGBOYW1lOiAke2VsZS5uYW1lfWA7XG4gICAgICBoZWlnaHREb20uaW5uZXJIVE1MID0gYEhlaWdodDogJHtoZWlnaHR9YDtcbiAgICAgIHdlaWdodERvbS5pbm5lckhUTUwgPSBgV2VpZ2h0OiAke3dlaWdodH1gO1xuICAgICAgZXhwRG9tLmlubmVySFRNTCA9IGBFeHBlcmllbmNlOiAke2V4cH1gO1xuICAgICAgZGV0YWlsU2VjdGlvbi5hcHBlbmQodGl0bGUsIGhlaWdodERvbSk7XG4gICAgICBkZXRhaWxTZWN0aW9uMi5hcHBlbmQod2VpZ2h0RG9tLCBleHBEb20pO1xuICAgICAgY29tbWVudHNET00oKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbndpbmRvdy50ZXN0eUZ1bmN0ID0gKGUpID0+IHtcbiAgaW1hZ2VTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IGU7XG4gIGltYWdlU2VjdGlvbi5hcHBlbmQoaW1nKTtcbn07XG5cbmNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJyk7XG5jb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cycpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRjb21tZW50cyhlKSB7XG4gIGlmICghdXNlcm5hbWUudmFsdWUgfHwgIWNvbW1lbnRzLnZhbHVlKSB7XG4gICAgY29uc3QgZXJyUGxhY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWxFcnInKTtcblxuICAgIGVyclBsYWNpbmcuaW5uZXJIVE1MID0gKCdQbGVhc2UgZmlsbCBib3RoIGZpZWxkcyBcXG4nKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gZXJyUGxhY2luZy5yZW1vdmVDaGlsZChlcnJQbGFjaW5nLmNoaWxkTm9kZXNbMF0pLCAyMDAwKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNwaW5Db21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXJDb20nKTtcbiAgc3BpbkNvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gIGNvbnN0IHN1Ym1pdENvbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcbiAgc3VibWl0Q29tQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuXG4gIGNvbnN0IGVuZHBvaW50ID0gYGFwcHMvJHtBUFBfSUR9L2NvbW1lbnRzYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQVNFX1VSTCArIGVuZHBvaW50LCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogcG9rZUlkLFxuICAgICAgdXNlcm5hbWU6IGAke3VzZXJuYW1lLnZhbHVlfWAsXG4gICAgICBjb21tZW50OiBjb21tZW50cy52YWx1ZSxcbiAgICB9KSxcblxuICB9KTtcbiAgaWYgKHJlc3BvbnNlKSB7XG4gICAgc3BpbkNvbW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgc3VibWl0Q29tQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICB9XG4gIGNyZWF0ZUNvbW1lbnQoKTtcbiAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgY29tbWVudHMudmFsdWUgPSAnJztcbiAgY29tbWVudHNET00oKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG53aW5kb3cuYWRkTGlrZSA9IChpZCA9ICcnKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHsgaXRlbV9pZDogYGl0ZW0ke2lkfWAgfTtcbiAgcG9zdExpa2VzKG9iaikudGhlbigoKSA9PiB7XG4gICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaWtlQnRuJHtpZH1gKTtcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5yZXBsYWNlKCdiaS1oZWFydCcsICdiaS1oZWFydC1maWxsJyk7XG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRhbmdlcicpO1xuICAgIGxpa2VCdG4uc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJycpO1xuICAgIGNvbnN0IGxpa2VzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpa2VDbnQke2lkfWApO1xuICAgIGxpa2VzTnVtYmVyLmlubmVySFRNTCA9IGAke051bWJlci5wYXJzZUludChsaWtlc051bWJlci5pbm5lckhUTUwsIDEwKSArIDF9YDtcbiAgfSk7XG59O1xuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgYWRkY29tbWVudHMoZXZlbnQpO1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmNvbnN0IGxpa2VzVXJsID0gKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9kWFRqbGU1d0Jod2lYNlBLdFp4Ty9saWtlcy8nKTtcclxuXHJcbi8vIEdFVCBsaWtlc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlrZXMoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc1VybCk7XHJcbiAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vLyBQT1NUIGxpa2VzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0TGlrZXMoZWxlbWVudCA9IHt9KSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc1VybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbGVtZW50KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBwb3B1bGF0ZUdyaWQgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlMaXN0JztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbnBvcHVsYXRlR3JpZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9