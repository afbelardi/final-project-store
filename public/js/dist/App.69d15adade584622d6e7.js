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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React, { useState } from 'react';\n// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';\n// import styled from '@emotion/styled';\n// import axios from 'axios';\n// import { jsx } from '@emotion/react';\n// import Row from './prebuilt/Row';\n// import BillingDetailsFields from './prebuilt/BillingDetailsFields';\n// import SubmitButton from './prebuilt/SubmitButton';\n// import CheckoutError from './prebuilt/CheckoutError';\n// const CardElementContainer = styled.div`\n// \theight: 40px;\n// \tdisplay: flex;\n// \talign-items: center;\n// \t& .StripeElement {\n// \t\twidth: 100%;\n// \t\tpadding: 15px;\n// \t}\n// `;\n// const CheckoutForm = (props, { price, onSuccessfulCheckout }) => {\n// \tconst [isProcessing, setProcessingTo] = useState(false);\n// \tconst [checkoutError, setCheckoutError] = useState();\n// \tconst stripe = useStripe();\n// \tconst elements = useElements();\n// \t// TIP\n// \t// use the cardElements onChange prop to add a handler\n// \t// for setting any errors:\n// \tconst handleCardDetailsChange = ev => {\n// \t\tev.error ? setCheckoutError(ev.error.message) : setCheckoutError();\n// \t};\n// \tconst handleFormSubmit = async ev => {\n// \t\tev.preventDefault();\n// \t\tconst billingDetails = {\n// \t\t\tname: ev.target.name.value,\n// \t\t\temail: ev.target.email.value,\n// \t\t\taddress: {\n// \t\t\t\tcity: ev.target.city.value,\n// \t\t\t\tline1: ev.target.address.value,\n// \t\t\t\tstate: ev.target.state.value,\n// \t\t\t\tpostal_code: ev.target.zip.value\n// \t\t\t}\n// \t\t};\n// \t\tsetProcessingTo(true);\n// \t\tconst cardElement = elements.getElement('card');\n// \t\ttry {\n// \t\t\tconst { data: clientSecret } = await axios.post('/api/payment_intents', {\n// \t\t\t\tamount: props.data.price * 100\n// \t\t\t});\n// \t\t\tconst paymentMethodReq = await stripe.createPaymentMethod({\n// \t\t\t\ttype: 'card',\n// \t\t\t\tcard: cardElement,\n// \t\t\t\tbilling_details: billingDetails\n// \t\t\t});\n// \t\t\tif (paymentMethodReq.error) {\n// \t\t\t\tsetCheckoutError(paymentMethodReq.error.message);\n// \t\t\t\tsetProcessingTo(false);\n// \t\t\t\treturn;\n// \t\t\t}\n// \t\t\tconst { error } = await stripe.confirmCardPayment(clientSecret, {\n// \t\t\t\tpayment_method: paymentMethodReq.paymentMethod.id\n// \t\t\t});\n// \t\t\tif (error) {\n// \t\t\t\tsetCheckoutError(error.message);\n// \t\t\t\tsetProcessingTo(false);\n// \t\t\t\treturn;\n// \t\t\t}\n// \t\t\tonSuccessfulCheckout();\n// \t\t} catch (err) {\n// \t\t\tsetCheckoutError(err.message);\n// \t\t}\n// \t};\n// \t// Learning\n// \t// A common ask/bug that users run into is:\n// \t// How do you change the color of the card element input text?\n// \t// How do you change the font-size of the card element input text?\n// \t// How do you change the placeholder color?\n// \t// The answer to all of the above is to use the `style` option.\n// \t// It's common to hear users confused why the card element appears impervious\n// \t// to all their styles. No matter what classes they add to the parent element\n// \t// nothing within the card element seems to change. The reason for this is that\n// \t// the card element is housed within an iframe and:\n// \t// > styles do not cascade from a parent window down into its iframes\n// \tconst iframeStyles = {\n// \t\tbase: {\n// \t\t\tcolor: '#fff',\n// \t\t\tfontSize: '16px',\n// \t\t\ticonColor: '#fff',\n// \t\t\t'::placeholder': {\n// \t\t\t\tcolor: '#87bbfd'\n// \t\t\t}\n// \t\t},\n// \t\tinvalid: {\n// \t\t\ticonColor: '#FFC7EE',\n// \t\t\tcolor: '#FFC7EE'\n// \t\t},\n// \t\tcomplete: {\n// \t\t\ticonColor: '#cbf4c9'\n// \t\t}\n// \t};\n// \tconst cardElementOpts = {\n// \t\ticonStyle: 'solid',\n// \t\tstyle: iframeStyles,\n// \t\thidePostalCode: true\n// \t};\n// \treturn (\n// \t\t<form onSubmit={handleFormSubmit}>\n// \t\t\t<Row>\n// \t\t\t\t<BillingDetailsFields />\n// \t\t\t</Row>\n// \t\t\t<Row>\n// \t\t\t\t<CardElementContainer>\n// \t\t\t\t\t<CardElement\n// \t\t\t\t\t\toptions={cardElementOpts}\n// \t\t\t\t\t\tonChange={handleCardDetailsChange}\n// \t\t\t\t\t/>\n// \t\t\t\t</CardElementContainer>\n// \t\t\t</Row>\n// \t\t\t{checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}\n// \t\t\t<Row>\n// \t\t\t\t{/* TIP always disable your submit button while processing payments */}\n// \t\t\t\t<SubmitButton disabled={isProcessing || !stripe}>\n// \t\t\t\t\t{isProcessing ? 'Processing...' : `Pay $${props.data.price}`}\n// \t\t\t\t</SubmitButton>\n// \t\t\t</Row>\n// \t\t</form>\n// \t);\n// };\n// export default CheckoutForm;\n\n//# sourceURL=webpack:///./src/components/CheckOutForm.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Store; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nfunction Store(props) {\n  const scrollDown = () => {\n    window.scrollBy(0, 600);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://i.ibb.co/Ydj1Mz2/skylinemagic.jpg\",\n    alt: \"skylinemagic\",\n    border: \"0\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    id: \"banner-title\"\n  }, \"AFBELARDI\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: '/'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"nav\"\n  }, \"Store\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n    to: '/about'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"nav\"\n  }, \"About\"))));\n}\n\n//# sourceURL=webpack:///./src/components/Header.js?");

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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Show; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _components_CheckOutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckOutForm */ \"./src/components/CheckOutForm.js\");\n/* harmony import */ var _components_CheckOutForm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_CheckOutForm__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nconst stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__[/* loadStripe */ \"a\"])('pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9'); // const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);\n\nfunction Show(props) {\n  const [showProduct, setShowProduct] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/photos/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setShowProduct(data);\n      } catch (err) {\n        console.error(err);\n      }\n    })();\n  }, []);\n\n  const handleClick = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (event) {\n      // Get Stripe.js instance\n      console.log(showProduct.price);\n      const stripe = yield stripePromise; // Call your backend to create the Checkout Session\n\n      const response = yield fetch('/create-checkout-session', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          price: showProduct.price,\n          title: showProduct.title\n        })\n      });\n      const session = yield response.json(); // When the customer clicks on the button, redirect them to Checkout.\n\n      const result = yield stripe.redirectToCheckout({\n        sessionId: session.id\n      });\n\n      if (result.error) {// If `redirectToCheckout` fails due to a browser or network\n        // error, display the localized error message to your customer\n        // using `result.error.message`.\n      }\n    });\n\n    return function handleClick(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"StorePage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    id: \"show-title\"\n  }, showProduct.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"show-section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"show-image\",\n    loading: \"lazy\",\n    src: showProduct.image\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    id: \"size\"\n  }, showProduct.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    id: \"price\"\n  }, \"$\", showProduct.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"checkout-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    role: \"link\",\n    onClick: handleClick\n  }, \"Checkout\")));\n}\n\n//# sourceURL=webpack:///./src/pages/Show.js?");

/***/ }),

/***/ "./src/pages/Store.js":
/*!****************************!*\
  !*** ./src/pages/Store.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Store; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Products */ \"./src/components/Products.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n // import GlobalStyles from '../components/prebuilt/GlobalStyles';\n\nfunction Store(props) {\n  const [products, setProducts] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); // const PUBLISHABLE_KEY = process.env.REACT_APP_PUBLISHABLE_KEY;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/photos\");\n        const data = yield response.json();\n        yield setProducts(data); // console.log(PUBLISHABLE_KEY);\n      } catch (err) {\n        console.error(err);\n      }\n    })();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"StorePage\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    id: \"store-title\"\n  }, \"STORE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Products__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n    data: products\n  })));\n}\n\n//# sourceURL=webpack:///./src/pages/Store.js?");

/***/ }),

/***/ "./src/pages/Success.js":
/*!******************************!*\
  !*** ./src/pages/Success.js ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("// import styled from '@emotion/styled';\n// import Confetti from 'react-confetti';\n// import React, { useState, useEffect } from 'react';\n// import Layout from '../components/Layout';\n// import Row from '../components/prebuilt/Row';\n// const Container = styled.div`\n// \twidth: 475px;\n// \tmargin: 30px auto 0 auto;\n// \ttext-align: center;\n// \tcolor: #fff;\n// `;\n// const Title = styled.div`\n// \tfont-size: 58px;\n// `;\n// const Message = styled.div`\n// \tmargin-top: 40px;\n// `;\n// export default function Success() {\n// \tconst [width, setWidth] = useState(0);\n// \tconst [height, setHeight] = useState(0);\n// \tuseEffect(() => {\n// \t\tsetTimeout(() => {\n// \t\t\tsetWidth(window.innerWidth);\n// \t\t\tsetHeight(window.innerHeight);\n// \t\t}, 100);\n// \t});\n// \treturn (\n// \t\t<Layout title=\"Success!\">\n// \t\t\t<Container>\n// \t\t\t\t<Confetti width={width} height={height} numberOfPieces={450} />\n// \t\t\t\t<Title>congrats!</Title>\n// \t\t\t\t<Message>Stripe has successfully processed your payment</Message>\n// \t\t\t</Container>\n// \t\t</Layout>\n// \t);\n// }\n\n//# sourceURL=webpack:///./src/pages/Success.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__[/* loadStripe */ \"a\"])('pk_test_51IaUxUBxAJS3ymB4uO2cKT0DJx92FJSZyzMfpAOk4iLI566gVGYZHIQ2EV83tkxwq16oD2NbQClcxZCrPHpL88fU00cZ8L3GR9');\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"Elements\"], {\n    stripe: stripePromise\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {\n        page: key\n      }))\n    });\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Store */ \"./src/pages/Store.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Show */ \"./src/pages/Show.js\");\n/* harmony import */ var _pages_Success__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Success */ \"./src/pages/Success.js\");\n/* harmony import */ var _pages_Success__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_Success__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst routes = [{\n  Component: _pages_About__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'About',\n  path: '/about'\n}, {\n  Component: _pages_Success__WEBPACK_IMPORTED_MODULE_4___default.a,\n  key: 'Success',\n  path: '/success'\n}, {\n  Component: _pages_Show__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Show',\n  path: '/:id'\n}, {\n  Component: _pages_Store__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'Store',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });