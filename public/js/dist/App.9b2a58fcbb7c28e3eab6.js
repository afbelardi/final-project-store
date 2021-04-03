/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/CheckOutForm.js":
/*!****************************************!*\
  !*** ./src/components/CheckOutForm.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CheckOutForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prebuilt_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prebuilt/Row */ \"./src/components/prebuilt/Row.js\");\n/* harmony import */ var _prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prebuilt/BillingDetailsFields */ \"./src/components/prebuilt/BillingDetailsFields.js\");\n/* harmony import */ var _prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prebuilt/SubmitButton */ \"./src/components/prebuilt/SubmitButton.js\");\n/* harmony import */ var _prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prebuilt/CheckoutError */ \"./src/components/prebuilt/CheckoutError.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _templateObject() {\n  const data = _taggedTemplateLiteral([\"\\n\\theight: 40px;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\t& .StripeElement {\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 15px;\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\n\n\n\nconst CardElementContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"].div(_templateObject());\nfunction CheckOutForm(props) {\n  const [isProcessing, setProcessingTo] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [checkoutError, setCheckoutError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [showProduct, setShowProduct] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const handleFormSubmit = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (ev) {\n      ev.preventDefault();\n      const billingDetails = {\n        name: ev.target.name.value,\n        email: ev.target.email.value,\n        address: {\n          city: ev.target.city.value,\n          line1: ev.target.address.value,\n          state: ev.target.state.value,\n          postal_code: ev.target.zip.value\n        }\n      };\n    });\n\n    return function handleFormSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleFormSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prebuilt_BillingDetailsFields__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardElementContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__[\"CardElement\"], null))), checkoutError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prebuilt_CheckoutError__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"], null, checkoutError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prebuilt_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_prebuilt_SubmitButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n    disabled: isProcessing\n  }, isProcessing ? 'Processing...' : \"Pay $\".concat(props.data.price))));\n}\n\n//# sourceURL=webpack:///./src/components/CheckOutForm.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Store; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nfunction Store(props) {\n  const scrollDown = () => {\n    window.scrollBy(0, 600);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.ibb.co/Ydj1Mz2/skylinemagic.jpg\",\n    alt: \"skylinemagic\",\n    border: \"0\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    id: \"banner-title\"\n  }, \"AFBELARDI\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"nav\",\n    onClick: scrollDown\n  }, \"Store\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: '/about'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"nav\"\n  }, \"About\"))));\n}\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React from 'react';\n// import { Link } from 'react-router-dom';\n// const NavBar = props => {\n// \treturn (\n// \t\t<nav className=\"NavBar\">\n// \t\t\t{props.routes.map(({ key, path }) => (\n// \t\t\t\t<Link key={key} to={path}>\n// \t\t\t\t\t{key}\n// \t\t\t\t</Link>\n// \t\t\t))}\n// \t\t</nav>\n// \t);\n// };\n// export default NavBar;\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/Products.js":
/*!************************************!*\
  !*** ./src/components/Products.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Products; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nfunction Products(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: \"product-listings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.keys(props.data).length ? props.data.map(product => {\n    return (\n      /*#__PURE__*/\n      // <div id=\"product-card\">\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        key: product.title\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: product.image\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n        to: \"/\".concat(product._id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"product-image\",\n        src: product.image\n      })))) // </div>\n\n    );\n  }) : ''));\n}\n\n//# sourceURL=webpack:///./src/components/Products.js?");

/***/ }),

/***/ "./src/components/prebuilt/BillingDetailsFields.js":
/*!*********************************************************!*\
  !*** ./src/components/prebuilt/BillingDetailsFields.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField */ \"./src/components/prebuilt/FormField.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst BillingDetailsFields = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormField__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"], {\n    name: \"name\",\n    label: \"Name\",\n    type: \"text\",\n    placeholder: \"Jane Doe\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormField__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"], {\n    name: \"email\",\n    label: \"Email\",\n    type: \"email\",\n    placeholder: \"jane.doe@example.com\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormField__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"], {\n    name: \"address\",\n    label: \"Address\",\n    type: \"text\",\n    placeholder: \"185 Berry St. Suite 550\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormField__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"], {\n    name: \"city\",\n    label: \"City\",\n    type: \"text\",\n    placeholder: \"San Francisco\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormField__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"], {\n    name: \"state\",\n    label: \"State\",\n    type: \"text\",\n    placeholder: \"California\",\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormField__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"], {\n    name: \"zip\",\n    label: \"ZIP\",\n    type: \"text\",\n    placeholder: \"94103\",\n    required: true\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (BillingDetailsFields);\n\n//# sourceURL=webpack:///./src/components/prebuilt/BillingDetailsFields.js?");

/***/ }),

/***/ "./src/components/prebuilt/CheckoutError.js":
/*!**************************************************!*\
  !*** ./src/components/prebuilt/CheckoutError.js ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _templateObject2() {\n  const data = _taggedTemplateLiteral([\"\\n\\tcolor: #fff;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\tpadding: 0 15px;\\n\\tfont-size: 13px;\\n\\tmargin: -10px auto 0px auto;\\n\\twidth: 100%;\\n\\tmax-width: 450px;\\n\\topacity: 90;\\n\\tanimation: \", \" 150ms ease-out;\\n\\tanimation-delay: 50ms;\\n\\tanimation-fill-mode: forwards;\\n\\twill-change: opacity;\\n\\t& svg {\\n\\t\\tmargin-right: 10px;\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = _taggedTemplateLiteral([\"\\n  from {\\n    opacity: 0;\\n    transform: scale3D(0.95, 0.95, 0.95);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: scale3D(1, 1, 1);\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nconst fade = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[/* keyframes */ \"c\"])(_templateObject());\nconst ErrorContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].div(_templateObject2(), fade);\n\nconst CheckoutError = (_ref) => {\n  let {\n    children\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ErrorContainer, {\n    role: \"alert\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"svg\", {\n    width: \"16\",\n    height: \"16\",\n    viewBox: \"0 0 17 17\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"path\", {\n    fill: \"#FFF\",\n    d: \"M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"path\", {\n    fill: \"#6772e5\",\n    d: \"M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z\"\n  })), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (CheckoutError);\n\n//# sourceURL=webpack:///./src/components/prebuilt/CheckoutError.js?");

/***/ }),

/***/ "./src/components/prebuilt/FormField.js":
/*!**********************************************!*\
  !*** ./src/components/prebuilt/FormField.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject3() {\n  const data = _taggedTemplateLiteral([\"\\n\\tfont-size: 16px;\\n\\twidth: 100%;\\n\\tpadding: 11px 15px 11px 8px;\\n\\tcolor: #fff;\\n\\tbackground-color: transparent;\\n\\tanimation: 1ms void-animation-out;\\n\\t&::placeholder {\\n\\t\\tcolor: #87bbfd;\\n\\t}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = _taggedTemplateLiteral([\"\\n\\twidth: 20%;\\n\\tmin-width: 70px;\\n\\tpadding: 11px 0;\\n\\tcolor: #c4f0ff;\\n\\toverflow: hidden;\\n\\tfont-size: 16px;\\n\\ttext-overflow: ellipsis;\\n\\twhite-space: nowrap;\\n\\tborder-right: 1px solid #819efc;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = _taggedTemplateLiteral([\"\\n\\tdisplay: -ms-flexbox;\\n\\tdisplay: flex;\\n\\t-ms-flex-align: center;\\n\\talign-items: center;\\n\\tmargin-left: 15px;\\n\\tborder-top: 1px solid #819efc;\\n\\t&:first-of-type {\\n\\t\\tborder-top: none;\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nconst FormFieldContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].div(_templateObject());\nconst Label = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].label(_templateObject2());\nconst Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].input(_templateObject3());\n\nconst FormField = (_ref) => {\n  let {\n    label,\n    type,\n    name,\n    placeholder,\n    required\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormFieldContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {\n    htmlFor: name\n  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {\n    name: name,\n    type: type,\n    placeholder: placeholder,\n    required: true\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (FormField);\n\n//# sourceURL=webpack:///./src/components/prebuilt/FormField.js?");

/***/ }),

/***/ "./src/components/prebuilt/GlobalStyles.js":
/*!*************************************************!*\
  !*** ./src/components/prebuilt/GlobalStyles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject3() {\n  const data = _taggedTemplateLiteral([\"\\n\\t\\t\\t\\tbody,\\n\\t\\t\\t\\thtml {\\n\\t\\t\\t\\t\\tbackground-color: #6772e5;\\n\\t\\t\\t\\t\\tfont-size: 18px;\\n\\t\\t\\t\\t\\tfont-family: Helvetica Neue, Helvetica, Arial, sans-serif;\\n\\t\\t\\t\\t\\tpadding-top: 40px;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  const data = _taggedTemplateLiteral([\"\\n\\t\\t\\t\\tinput,\\n\\t\\t\\t\\tbutton {\\n\\t\\t\\t\\t\\t-webkit-appearance: none;\\n\\t\\t\\t\\t\\t-moz-appearance: none;\\n\\t\\t\\t\\t\\tappearance: none;\\n\\t\\t\\t\\t\\toutline: none;\\n\\t\\t\\t\\t\\tborder-style: none;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  const data = _taggedTemplateLiteral([\"\\n\\t\\t\\t\\t*,\\n\\t\\t\\t\\t*:before,\\n\\t\\t\\t\\t*:after {\\n\\t\\t\\t\\t\\tbox-sizing: border-box;\\n\\t\\t\\t\\t}\\n\\t\\t\\t\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nconst GlobalStyles = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[/* Global */ \"a\"], {\n  styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[/* css */ \"b\"])(_templateObject())\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[/* Global */ \"a\"], {\n  styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[/* css */ \"b\"])(_templateObject2())\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[/* Global */ \"a\"], {\n  styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[/* css */ \"b\"])(_templateObject3())\n}));\n\n/* unused harmony default export */ var _unused_webpack_default_export = (GlobalStyles);\n\n//# sourceURL=webpack:///./src/components/prebuilt/GlobalStyles.js?");

/***/ }),

/***/ "./src/components/prebuilt/Row.js":
/*!****************************************!*\
  !*** ./src/components/prebuilt/Row.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  const data = _taggedTemplateLiteral([\"\\n\\twidth: 475px;\\n\\tmargin: 30px auto;\\n\\tbox-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),\\n\\t\\tinset 0 1px 0 #829fff;\\n\\tborder-radius: 4px;\\n\\tbackground-color: #7795f8;\\n\\tposition: relative;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nconst Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].div(_templateObject());\n/* harmony default export */ __webpack_exports__[\"a\"] = (Row);\n\n//# sourceURL=webpack:///./src/components/prebuilt/Row.js?");

/***/ }),

/***/ "./src/components/prebuilt/SubmitButton.js":
/*!*************************************************!*\
  !*** ./src/components/prebuilt/SubmitButton.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  const data = _taggedTemplateLiteral([\"\\n\\tdisplay: block;\\n\\theight: 40px;\\n\\twidth: 100%;\\n\\tfont-size: inherit;\\n\\tbackground-color: \", \";\\n\\tbox-shadow: \", \";\\n\\tborder-radius: 4px;\\n\\topacity: \", \";\\n\\tcolor: #fff;\\n\\tfont-weight: 600;\\n\\tcursor: pointer;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nconst SubmitButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].button(_templateObject(), props => props.disabled ? '#7795f8' : '#f6a4eb', props => props.disabled ? 'none' : '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;', props => props.disabled ? 0.5 : 1);\n/* harmony default export */ __webpack_exports__[\"a\"] = (SubmitButton);\n\n//# sourceURL=webpack:///./src/components/prebuilt/SubmitButton.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n // import 'bootstrap/scss/bootstrap.scss';\n\nconst store = document.getElementById('store');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), store);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AboutPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/Show.js":
/*!***************************!*\
  !*** ./src/pages/Show.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Show; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _components_CheckOutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckOutForm */ \"./src/components/CheckOutForm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n // const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);\n\nfunction Show(props) {\n  const [showProduct, setShowProduct] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/photos/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setShowProduct(data);\n      } catch (err) {\n        console.error(err);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"StorePage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    id: \"show-title\"\n  }, showProduct.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"show-image\",\n    loading: \"lazy\",\n    src: showProduct.image\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    id: \"size\"\n  }, showProduct.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    id: \"price\"\n  }, showProduct.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"checkout-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CheckOutForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    data: showProduct\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Show.js?");

/***/ }),

/***/ "./src/pages/Store.js":
/*!****************************!*\
  !*** ./src/pages/Store.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Store; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Products */ \"./src/components/Products.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _components_prebuilt_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/prebuilt/GlobalStyles */ \"./src/components/prebuilt/GlobalStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nfunction Store(props) {\n  const [products, setProducts] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/photos\");\n        const data = yield response.json();\n        yield setProducts(data);\n      } catch (err) {\n        console.error(err);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"StorePage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    id: \"store-title\"\n  }, \"STORE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Products__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    data: products\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Store.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__[/* loadStripe */ \"a\"])('pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9');\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"Elements\"], {\n    stripe: stripePromise\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {\n        page: key\n      }))\n    });\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Store */ \"./src/pages/Store.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Show */ \"./src/pages/Show.js\");\n\n\n\n\nconst routes = [{\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}, {\n  Component: _pages_Show__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Show',\n  path: '/:id'\n}, {\n  Component: _pages_Store__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'Store',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });