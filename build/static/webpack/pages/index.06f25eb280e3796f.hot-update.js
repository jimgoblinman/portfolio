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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add state for mobile menu\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    const handleMobileMenuToggle = ()=>{\n        setIsMobileMenuOpen(!isMobileMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/hamburger_icon.png\",\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            alt: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"James Vining\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"about\",\n                                smooth: true,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 56,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"journey\",\n                                smooth: true,\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"hit_me_up\",\n                                smooth: true,\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 58,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"certificats\",\n                                smooth: true,\n                                children: \"Certificats\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 59,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                    style: {\n                        display: isMobileMenuOpen ? \"grid\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                            onClick: handleMobileMenuToggle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/x_button.png\",\n                                alt: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"icon-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"about\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"journey\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Journey\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"hit_me_up\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Hit me up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"certificats\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Certificats\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Header, \"fTP70tiaFMBW60HDk+ocxrcBVbY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNMOzRCQUFJRixXQUFXbEIsb0ZBQXdCO3NDQUN0Qyw0RUFBQ3NCO2dDQUFJQyxLQUFJO2dDQUF5QkUsS0FBSTtnQ0FBb0JQLFdBQVdsQiw2RUFBaUI7Ozs7Ozs7Ozs7O3NDQUV0Riw4REFBQ29COzRCQUFJRixXQUFXbEIsc0ZBQTBCO3NDQUMxQyw0RUFBQytCOzBDQUNDLDRFQUFDOUIsOENBQUlBO29DQUFDK0IsSUFBRztvQ0FBUUMsUUFBUTtvQ0FBTVQsU0FBU1I7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUtwRSw4REFBQ0k7NEJBQUlGLFdBQVdsQixzRkFBMEI7c0NBQ3hDLDRFQUFDK0I7MENBQ0MsNEVBQUM5Qiw4Q0FBSUE7b0NBQUMrQixJQUFHO29DQUFVQyxRQUFRO29DQUFNVCxTQUFTUjs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3RFLDhEQUFDSTs0QkFBSUYsV0FBV2xCLHNGQUEwQjtzQ0FDeEMsNEVBQUMrQjswQ0FDQyw0RUFBQzlCLDhDQUFJQTtvQ0FBQytCLElBQUc7b0NBQVlDLFFBQVE7b0NBQU1ULFNBQVNSOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLeEUsOERBQUNJOzRCQUFJRixXQUFXbEIsc0ZBQTBCO3NDQUN4Qyw0RUFBQytCOzBDQUNDLDRFQUFDOUIsOENBQUlBO29DQUFDK0IsSUFBRztvQ0FBY0MsUUFBUTtvQ0FBTVQsU0FBU1I7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVwRjtHQXBHU2Q7S0FBQUE7QUFzR1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtpc0hlYWRlclZpc2libGUsIHNldElzSGVhZGVyVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcHJldlNjcm9sbFBvcywgc2V0UHJldlNjcm9sbFBvc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNNb2JpbGVNZW51T3Blbiwgc2V0SXNNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEFkZCBzdGF0ZSBmb3IgbW9iaWxlIG1lbnVcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIGNvbnN0IHNjcm9sbGluZ1VwID0gcHJldlNjcm9sbFBvcyA+IGN1cnJlbnRTY3JvbGxQb3M7XHJcblxyXG4gICAgICBzZXRJc0hlYWRlclZpc2libGUoc2Nyb2xsaW5nVXAgfHwgY3VycmVudFNjcm9sbFBvcyA8PSAxMDApO1xyXG4gICAgICBzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3NdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pO1xyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDwgPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlcn0gJHtpc0hlYWRlclZpc2libGUgPyAnJyA6IHN0eWxlcy5oaWRkZW59YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2hhbWJ1cmdlcl9pY29uLnBuZydcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pfSAvLyBUb2dnbGUgbW9iaWxlIG1lbnUgb24gY2xpY2tcclxuICAgICAgICAgICAgICAgIGFsdD0nTWVudSdcclxuICAgICAgICAgICAgICAvPiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJJbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRpdGVtfSAke3N0eWxlcy5teU5hbWV9YH0+PGgyPkphbWVzIFZpbmluZzwvaDI+PC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJhYm91dFwiIHNtb290aD17dHJ1ZX0+QWJvdXQ8L0xpbms+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48TGluayB0bz1cImpvdXJuZXlcIiBzbW9vdGg9e3RydWV9PkpvdXJuZXk8L0xpbms+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48TGluayB0bz1cImhpdF9tZV91cFwiIHNtb290aD17dHJ1ZX0+SGl0IG1lIHVwPC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJjZXJ0aWZpY2F0c1wiIHNtb290aD17dHJ1ZX0+Q2VydGlmaWNhdHM8L0xpbms+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudSddfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc01vYmlsZU1lbnVPcGVuID8gJ2dyaWQnIDogJ25vbmUnIH19IC8vIFNldCBkaXNwbGF5IHByb3BlcnR5IHVzaW5nIGlubGluZSBzdHlsZVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sneC1jb250YWluZXInXX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy94X2J1dHRvbi5wbmcnIGFsdD0nQ2xvc2UnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ljb24tY29udGFpbmVyJ119PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJJbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPSdhYm91dCcgc21vb3RoPXt0cnVlfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89J2pvdXJuZXknIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBKb3VybmV5XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89J2hpdF9tZV91cCcgc21vb3RoPXt0cnVlfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIEhpdCBtZSB1cFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPSdjZXJ0aWZpY2F0cycgc21vb3RoPXt0cnVlfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIENlcnRpZmljYXRzXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7ICBcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJMaW5rIiwiSGVhZGVyIiwiaXNIZWFkZXJWaXNpYmxlIiwic2V0SXNIZWFkZXJWaXNpYmxlIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0SXNNb2JpbGVNZW51T3BlbiIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxQb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2Nyb2xsaW5nVXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vYmlsZU1lbnVUb2dnbGUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJoaWRkZW4iLCJkaXYiLCJtb2JpbGUiLCJpbWciLCJzcmMiLCJvbkNsaWNrIiwiYWx0IiwiZ3JpZGl0ZW0iLCJpbWFnZUNvbnRhaW5lciIsInJvdW5kSW1hZ2UiLCJteU5hbWUiLCJoMiIsImgxIiwidG8iLCJzbW9vdGgiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});