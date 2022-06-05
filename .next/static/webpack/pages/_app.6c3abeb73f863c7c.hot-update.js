/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/chakra.js":
/*!******************************!*\
  !*** ./components/chakra.js ***!
  \******************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/main */ \"./components/layouts/main.js\");\n/* harmony import */ var _components_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/fonts */ \"./components/fonts.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chakra */ \"./components/chakra.js\");\n/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_chakra__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nif (true) {\n    window.history.scrollRestoration = \"manual\";\n}\nfunction Website(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_chakra__WEBPACK_IMPORTED_MODULE_4___default()), {\n        cookies: pageProps.cookies,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_fonts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lucaslegrand/code/portfolio/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                router: router,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                    exitBeforeEnter: true,\n                    initial: true,\n                    onExitComplete: function() {\n                        if (true) {\n                            window.scrollTo({\n                                top: 0\n                            });\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                        key: router.route,\n                        __source: {\n                            fileName: \"/Users/lucaslegrand/code/portfolio/pages/_app.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    }))\n                }, void 0, false, {\n                    fileName: \"/Users/lucaslegrand/code/portfolio/pages/_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lucaslegrand/code/portfolio/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucaslegrand/code/portfolio/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1I7QUFDUTtBQUNOO0FBRXpDLElBQUksSUFBNkIsRUFBRTtJQUNqQ0ksTUFBTSxDQUFDQyxPQUFPLENBQUNDLGlCQUFpQixHQUFHLFFBQVE7Q0FDNUM7QUFFRCxTQUFTQyxPQUFPLENBQUMsS0FBZ0MsRUFBRTtRQUFoQ0MsU0FBUyxHQUFYLEtBQWdDLENBQTlCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBZ0MsQ0FBbkJBLFNBQVMsRUFBRUMsTUFBTSxHQUE5QixLQUFnQyxDQUFSQSxNQUFNO0lBQzdDLHFCQUNFLDhEQUFDUCwyREFBTTtRQUFDUSxPQUFPLEVBQUVGLFNBQVMsQ0FBQ0UsT0FBTzs7MEJBQ2hDLDhEQUFDVix5REFBSzs7OztvQkFBRzswQkFDVCw4REFBQ0QsZ0VBQU07Z0JBQUNVLE1BQU0sRUFBRUEsTUFBTTswQkFDcEIsNEVBQUNSLDBEQUFlO29CQUNkVSxlQUFlO29CQUNmQyxPQUFPLEVBQUUsSUFBSTtvQkFDYkMsY0FBYyxFQUFFLFdBQU07d0JBQ3BCLElBQUksSUFBNkIsRUFBRTs0QkFDakNWLE1BQU0sQ0FBQ1csUUFBUSxDQUFDO2dDQUFFQyxHQUFHLEVBQUUsQ0FBQzs2QkFBRSxDQUFDO3lCQUM1QjtxQkFDRjs4QkFFRCxtRUFBQ1IsU0FBUyxvQkFBS0MsU0FBUzt3QkFBRVEsR0FBRyxFQUFFUCxNQUFNLENBQUNRLEtBQUs7Ozs7Ozs7dUJBQUk7Ozs7O3dCQUMvQjs7Ozs7b0JBQ1g7Ozs7OztZQUNGLENBQ1Y7Q0FDRjtBQW5CUVgsS0FBQUEsT0FBTztBQXFCaEIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL21haW4nXG5pbXBvcnQgRm9udHMgZnJvbSAnLi4vY29tcG9uZW50cy9mb250cydcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgQ2hha3JhIGZyb20gJy4uL2NvbXBvbmVudHMvY2hha3JhJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xufVxuXG5mdW5jdGlvbiBXZWJzaXRlKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYSBjb29raWVzPXtwYWdlUHJvcHMuY29va2llc30+XG4gICAgICA8Rm9udHMgLz5cbiAgICAgIDxMYXlvdXQgcm91dGVyPXtyb3V0ZXJ9PlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlXG4gICAgICAgICAgZXhpdEJlZm9yZUVudGVyXG4gICAgICAgICAgaW5pdGlhbD17dHJ1ZX1cbiAgICAgICAgICBvbkV4aXRDb21wbGV0ZT17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQ2hha3JhPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGUiXSwibmFtZXMiOlsiTGF5b3V0IiwiRm9udHMiLCJBbmltYXRlUHJlc2VuY2UiLCJDaGFrcmEiLCJ3aW5kb3ciLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJXZWJzaXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiY29va2llcyIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJvbkV4aXRDb21wbGV0ZSIsInNjcm9sbFRvIiwidG9wIiwia2V5Iiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});