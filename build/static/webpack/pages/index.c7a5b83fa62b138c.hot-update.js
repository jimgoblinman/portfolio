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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add state for mobile menu\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/hamburger_icon.png\",\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            alt: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"James Vining\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"about\",\n                                smooth: true,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 51,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 51,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"journey\",\n                                smooth: true,\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 52,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"hit_me_up\",\n                                smooth: true,\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 53,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 53,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"certificats\",\n                                smooth: true,\n                                children: \"Certificats\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 54,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 54,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                style: {\n                    display: isMobileMenuOpen ? \"grid\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/x_button.png\",\n                            alt: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"icon-container\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/placeholder.png\",\n                            alt: \"Image description\",\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"about\",\n                                smooth: true,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"journey\",\n                                smooth: true,\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"hit_me_up\",\n                                smooth: true,\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"certificats\",\n                                smooth: true,\n                                children: \"Certificats\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Header, \"fTP70tiaFMBW60HDk+ocxrcBVbY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CUCxXQUFXakIsNkVBQWlCOzs7Ozs7Ozs7OztrQ0FFeEYsOERBQUNtQjt3QkFBSUYsV0FBV2pCLHNGQUEwQjtrQ0FDeEMsNEVBQUM4QjtzQ0FBRyw0RUFBQzdCLDhDQUFJQTtnQ0FBQzhCLElBQUc7Z0NBQVFDLFFBQVE7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRXJDLDhEQUFDYjt3QkFBSUYsV0FBV2pCLHNGQUEwQjtrQ0FDeEMsNEVBQUM4QjtzQ0FBRyw0RUFBQzdCLDhDQUFJQTtnQ0FBQzhCLElBQUc7Z0NBQVVDLFFBQVE7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRXZDLDhEQUFDYjt3QkFBSUYsV0FBV2pCLHNGQUEwQjtrQ0FDeEMsNEVBQUM4QjtzQ0FBRyw0RUFBQzdCLDhDQUFJQTtnQ0FBQzhCLElBQUc7Z0NBQVlDLFFBQVE7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRXpDLDhEQUFDYjt3QkFBSUYsV0FBV2pCLHNGQUEwQjtrQ0FDeEMsNEVBQUM4QjtzQ0FBRyw0RUFBQzdCLDhDQUFJQTtnQ0FBQzhCLElBQUc7Z0NBQWNDLFFBQVE7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uRDtHQS9FUzlCO0tBQUFBO0FBaUZULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbaXNIZWFkZXJWaXNpYmxlLCBzZXRJc0hlYWRlclZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGQgc3RhdGUgZm9yIG1vYmlsZSBtZW51XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICBjb25zdCBzY3JvbGxpbmdVcCA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG5cclxuICAgICAgc2V0SXNIZWFkZXJWaXNpYmxlKHNjcm9sbGluZ1VwIHx8IGN1cnJlbnRTY3JvbGxQb3MgPD0gMTAwKTtcclxuICAgICAgc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ID5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJ9ICR7aXNIZWFkZXJWaXNpYmxlID8gJycgOiBzdHlsZXMuaGlkZGVufWB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGV9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9J2Fzc2V0cy9oYW1idXJnZXJfaWNvbi5wbmcnXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKX0gLy8gVG9nZ2xlIG1vYmlsZSBtZW51IG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBhbHQ9J01lbnUnXHJcbiAgICAgICAgICAgICAgLz4gICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiSW1hZ2UgZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZEltYWdlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ncmlkaXRlbX0gJHtzdHlsZXMubXlOYW1lfWB9PjxoMj5KYW1lcyBWaW5pbmc8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PGgxPjxMaW5rIHRvPVwiYWJvdXRcIiBzbW9vdGg9e3RydWV9PkFib3V0PC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJqb3VybmV5XCIgc21vb3RoPXt0cnVlfT5Kb3VybmV5PC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJoaXRfbWVfdXBcIiBzbW9vdGg9e3RydWV9PkhpdCBtZSB1cDwvTGluaz48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PGgxPjxMaW5rIHRvPVwiY2VydGlmaWNhdHNcIiBzbW9vdGg9e3RydWV9PkNlcnRpZmljYXRzPC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUnXX1cclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzTW9iaWxlTWVudU9wZW4gPyAnZ3JpZCcgOiAnbm9uZScgfX0gLy8gU2V0IGRpc3BsYXkgcHJvcGVydHkgdXNpbmcgaW5saW5lIHN0eWxlXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3gtY29udGFpbmVyJ119PlxyXG4gICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy94X2J1dHRvbi5wbmcnIGFsdD1cIkNsb3NlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydpY29uLWNvbnRhaW5lciddfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIkltYWdlIGRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZXMucm91bmRJbWFnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgPGgxPjxMaW5rIHRvPVwiYWJvdXRcIiBzbW9vdGg9e3RydWV9PkFib3V0PC9MaW5rPjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgIDxoMT48TGluayB0bz1cImpvdXJuZXlcIiBzbW9vdGg9e3RydWV9PkpvdXJuZXk8L0xpbms+PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgPGgxPjxMaW5rIHRvPVwiaGl0X21lX3VwXCIgc21vb3RoPXt0cnVlfT5IaXQgbWUgdXA8L0xpbms+PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgPGgxPjxMaW5rIHRvPVwiY2VydGlmaWNhdHNcIiBzbW9vdGg9e3RydWV9PkNlcnRpZmljYXRzPC9MaW5rPjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluayIsIkhlYWRlciIsImlzSGVhZGVyVmlzaWJsZSIsInNldElzSGVhZGVyVmlzaWJsZSIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwiaXNNb2JpbGVNZW51T3BlbiIsInNldElzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbGluZ1VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJoaWRkZW4iLCJkaXYiLCJtb2JpbGUiLCJpbWciLCJzcmMiLCJvbkNsaWNrIiwiYWx0IiwiZ3JpZGl0ZW0iLCJpbWFnZUNvbnRhaW5lciIsInJvdW5kSW1hZ2UiLCJteU5hbWUiLCJoMiIsImgxIiwidG8iLCJzbW9vdGgiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});