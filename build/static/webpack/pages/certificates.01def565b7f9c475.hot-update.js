"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/certificates",{

/***/ "./components/CHeader.js":
/*!*******************************!*\
  !*** ./components/CHeader.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CHeader() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add state for mobile menu\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    const handleMobileMenuToggle = ()=>{\n        setIsMobileMenuOpen(!isMobileMenuOpen);\n        document.body.classList.toggle((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]), !isMobileMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/hamburger_icon.png\",\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            alt: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"James Vining\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 52,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/#about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 56,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 56,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/#journey\",\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 57,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 57,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/#hit_me_up\",\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 58,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 58,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"certificates\",\n                                children: \"Certificates\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 59,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 59,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isMobileMenuOpen ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]) : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                    style: {\n                        display: isMobileMenuOpen ? \"grid\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                            onClick: handleMobileMenuToggle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/x_button.png\",\n                                alt: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"icon-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/#about\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/#hit_me_up\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Hit me up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"certificates\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Certificates\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CHeader, \"fTP70tiaFMBW60HDk+ocxrcBVbY=\");\n_c = CHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CHeader);\nvar _c;\n$RefreshReg$(_c, \"CHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7Ozs7Ozs7Ozs7c0NBRXZDLDhEQUFDTDs0QkFBSUYsV0FBV3RCLG9GQUF3QjtzQ0FDdEMsNEVBQUMwQjtnQ0FBSUMsS0FBSTtnQ0FBeUJFLEtBQUk7Z0NBQW9CUCxXQUFXdEIsNkVBQWlCOzs7Ozs7Ozs7OztzQ0FFdEYsOERBQUN3Qjs0QkFBSUYsV0FBV3RCLHNGQUEwQjtzQ0FDMUMsNEVBQUNtQzswQ0FDQyw0RUFBQ0M7b0NBQUVDLE1BQUs7b0NBQVVHLFFBQVE7b0NBQU1aLFNBQVNaOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLckUsOERBQUNROzRCQUFJRixXQUFXdEIsc0ZBQTBCO3NDQUN4Qyw0RUFBQ21DOzBDQUNDLDRFQUFDQztvQ0FBRUMsTUFBSztvQ0FBY0csUUFBUTtvQ0FBTVosU0FBU1o7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt6RSw4REFBQ1E7NEJBQUlGLFdBQVd0QixzRkFBMEI7c0NBQ3hDLDRFQUFDbUM7MENBQ0MsNEVBQUNDO29DQUFFQyxNQUFLO29DQUFlRyxRQUFRO29DQUFNWixTQUFTWjs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBGO0dBN0ZTZDtLQUFBQTtBQStGVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NIZWFkZXIuanM/NjVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ0hlYWRlcigpIHtcclxuICBjb25zdCBbaXNIZWFkZXJWaXNpYmxlLCBzZXRJc0hlYWRlclZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGQgc3RhdGUgZm9yIG1vYmlsZSBtZW51XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICBjb25zdCBzY3JvbGxpbmdVcCA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG5cclxuICAgICAgc2V0SXNIZWFkZXJWaXNpYmxlKHNjcm9sbGluZ1VwIHx8IGN1cnJlbnRTY3JvbGxQb3MgPD0gMTAwKTtcclxuICAgICAgc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShzdHlsZXNbJ25vLXNjcm9sbCddLCAhaXNNb2JpbGVNZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDwgPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlcn0gJHtpc0hlYWRlclZpc2libGUgPyAnJyA6IHN0eWxlcy5oaWRkZW59YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2hhbWJ1cmdlcl9pY29uLnBuZydcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pfSAvLyBUb2dnbGUgbW9iaWxlIG1lbnUgb24gY2xpY2tcclxuICAgICAgICAgICAgICAgIGFsdD0nTWVudSdcclxuICAgICAgICAgICAgICAvPiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJJbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRpdGVtfSAke3N0eWxlcy5teU5hbWV9YH0+PGgyPkphbWVzIFZpbmluZzwvaDI+PC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PGEgaHJlZj0nLyNhYm91dCc+QWJvdXQ8L2E+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48YSBocmVmPScvI2pvdXJuZXknPkpvdXJuZXk8L2E+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48YSBocmVmPVwiLyNoaXRfbWVfdXBcIj5IaXQgbWUgdXA8L2E+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48YSBocmVmPVwiY2VydGlmaWNhdGVzXCI+Q2VydGlmaWNhdGVzPC9hPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc01vYmlsZU1lbnVPcGVuID8gc3R5bGVzWyduby1zY3JvbGwnXSA6ICcnfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudSddfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc01vYmlsZU1lbnVPcGVuID8gJ2dyaWQnIDogJ25vbmUnIH19IC8vIFNldCBkaXNwbGF5IHByb3BlcnR5IHVzaW5nIGlubGluZSBzdHlsZVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sneC1jb250YWluZXInXX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy94X2J1dHRvbi5wbmcnIGFsdD0nQ2xvc2UnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ljb24tY29udGFpbmVyJ119PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJJbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9Jy8jYWJvdXQnIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9Jy8jaGl0X21lX3VwJyBzbW9vdGg9e3RydWV9IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgSGl0IG1lIHVwXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj0nY2VydGlmaWNhdGVzJyBzbW9vdGg9e3RydWV9IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgQ2VydGlmaWNhdGVzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDSGVhZGVyOyAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluayIsIkNIZWFkZXIiLCJpc0hlYWRlclZpc2libGUiLCJzZXRJc0hlYWRlclZpc2libGUiLCJwcmV2U2Nyb2xsUG9zIiwic2V0UHJldlNjcm9sbFBvcyIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudFNjcm9sbFBvcyIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JvbGxpbmdVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW9iaWxlTWVudVRvZ2dsZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImhpZGRlbiIsImRpdiIsIm1vYmlsZSIsImltZyIsInNyYyIsIm9uQ2xpY2siLCJhbHQiLCJncmlkaXRlbSIsImltYWdlQ29udGFpbmVyIiwicm91bmRJbWFnZSIsIm15TmFtZSIsImgyIiwiaDEiLCJhIiwiaHJlZiIsInN0eWxlIiwiZGlzcGxheSIsInNtb290aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CHeader.js\n"));

/***/ })

});