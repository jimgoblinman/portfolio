"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-nav\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/hamburger_icon.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"assets/placeholder.png\",\n                                    alt: \"Image description\",\n                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"James Vining\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 42,\n                                columnNumber: 66\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"about\",\n                                    smooth: true,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 48\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 46,\n                                columnNumber: 44\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"journey\",\n                                    smooth: true,\n                                    children: \"Journey\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 48\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 47,\n                                columnNumber: 44\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"hit_me_up\",\n                                    smooth: true,\n                                    children: \"Hit me up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 48\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 44\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"certificats\",\n                                    smooth: true,\n                                    children: \"Certificats\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 48\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 44\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/x_button.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"icon-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Certificats\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"n+/xn8Hr3UR8IRLsl21TtL3uD50=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFXZixzRkFBMEI7c0NBQ3hDLDRFQUFDMkI7MENBQUc7Ozs7Ozs7Ozs7O3NDQUVOLDhEQUFDYjs0QkFBSUMsV0FBV2Ysc0ZBQTBCO3NDQUN4Qyw0RUFBQzJCOzBDQUFHOzs7Ozs7Ozs7OztzQ0FFTiw4REFBQ2I7NEJBQUlDLFdBQVdmLHNGQUEwQjtzQ0FDeEMsNEVBQUMyQjswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWQ7R0EzRVN6QjtLQUFBQTtBQTZFVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2lzSGVhZGVyVmlzaWJsZSwgc2V0SXNIZWFkZXJWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwcmV2U2Nyb2xsUG9zLCBzZXRQcmV2U2Nyb2xsUG9zXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICBjb25zdCBzY3JvbGxpbmdVcCA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG5cclxuICAgICAgc2V0SXNIZWFkZXJWaXNpYmxlKHNjcm9sbGluZ1VwIHx8IGN1cnJlbnRTY3JvbGxQb3MgPD0gMTAwKTtcclxuICAgICAgc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW5hdiddfT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJ9ICR7aXNIZWFkZXJWaXNpYmxlID8gJycgOiBzdHlsZXMuaGlkZGVufWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2hhbWJ1cmdlcl9pY29uLnBuZyc+PC9pbWc+ICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiSW1hZ2UgZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZEltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncmlkaXRlbX0gJHtzdHlsZXMubXlOYW1lfWB9PjxoMj5KYW1lcyBWaW5pbmc8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PGgxPjxMaW5rIHRvPVwiYWJvdXRcIiBzbW9vdGg9e3RydWV9PkFib3V0PC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJqb3VybmV5XCIgc21vb3RoPXt0cnVlfT5Kb3VybmV5PC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJoaXRfbWVfdXBcIiBzbW9vdGg9e3RydWV9PkhpdCBtZSB1cDwvTGluaz48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PGgxPjxMaW5rIHRvPVwiY2VydGlmaWNhdHNcIiBzbW9vdGg9e3RydWV9PkNlcnRpZmljYXRzPC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudSddfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd4LWNvbnRhaW5lciddfT5cclxuICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMveF9idXR0b24ucG5nJyA+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tY29udGFpbmVyJz5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BsYWNlaG9sZGVyLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vYmlsZS1tZW51LWl0ZW0nXX0+XHJcbiAgICAgICAgICA8aDE+SG9tZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgIDxoMT5BYm91dDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgIDxoMT5Kb3VybmV5PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgPGgxPkhpdCBtZSB1cDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgIDxoMT5DZXJ0aWZpY2F0czwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsgIFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJIZWFkZXIiLCJpc0hlYWRlclZpc2libGUiLCJzZXRJc0hlYWRlclZpc2libGUiLCJwcmV2U2Nyb2xsUG9zIiwic2V0UHJldlNjcm9sbFBvcyIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxQb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2Nyb2xsaW5nVXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhpZGRlbiIsIm1vYmlsZSIsImltZyIsInNyYyIsImdyaWRpdGVtIiwiaW1hZ2VDb250YWluZXIiLCJhbHQiLCJyb3VuZEltYWdlIiwibXlOYW1lIiwiaDIiLCJoMSIsInRvIiwic21vb3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});