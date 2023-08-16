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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add state for mobile menu\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    const handleMobileMenuToggle = ()=>{\n        setIsMobileMenuOpen(!isMobileMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/hamburger_icon.png\",\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            alt: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"James Vining\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"about\",\n                                smooth: true,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 56,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"journey\",\n                                smooth: true,\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"hit_me_up\",\n                                smooth: true,\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 58,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"certificats\",\n                                smooth: true,\n                                children: \"Certificats\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 59,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isMobileMenuOpen ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]) : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                    style: {\n                        display: isMobileMenuOpen ? \"grid\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                            onClick: handleMobileMenuToggle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/x_button.png\",\n                                alt: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"icon-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"about\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"journey\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Journey\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"hit_me_up\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Hit me up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"certificats\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Certificats\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Header, \"fTP70tiaFMBW60HDk+ocxrcBVbY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSTtnQ0FBc0JFLEtBQUk7Ozs7Ozs7Ozs7O3NDQUV2Qyw4REFBQ0w7NEJBQUlGLFdBQVdsQixvRkFBd0I7c0NBQ3RDLDRFQUFDc0I7Z0NBQUlDLEtBQUk7Z0NBQXlCRSxLQUFJO2dDQUFvQlAsV0FBV2xCLDZFQUFpQjs7Ozs7Ozs7Ozs7c0NBRXRGLDhEQUFDb0I7NEJBQUlGLFdBQVdsQixzRkFBMEI7c0NBQzFDLDRFQUFDK0I7MENBQ0MsNEVBQUM5Qiw4Q0FBSUE7b0NBQUMrQixJQUFHO29DQUFRQyxRQUFRO29DQUFNVCxTQUFTUjs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3BFLDhEQUFDSTs0QkFBSUYsV0FBV2xCLHNGQUEwQjtzQ0FDeEMsNEVBQUMrQjswQ0FDQyw0RUFBQzlCLDhDQUFJQTtvQ0FBQytCLElBQUc7b0NBQVVDLFFBQVE7b0NBQU1ULFNBQVNSOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdEUsOERBQUNJOzRCQUFJRixXQUFXbEIsc0ZBQTBCO3NDQUN4Qyw0RUFBQytCOzBDQUNDLDRFQUFDOUIsOENBQUlBO29DQUFDK0IsSUFBRztvQ0FBWUMsUUFBUTtvQ0FBTVQsU0FBU1I7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt4RSw4REFBQ0k7NEJBQUlGLFdBQVdsQixzRkFBMEI7c0NBQ3hDLDRFQUFDK0I7MENBQ0MsNEVBQUM5Qiw4Q0FBSUE7b0NBQUMrQixJQUFHO29DQUFjQyxRQUFRO29DQUFNVCxTQUFTUjs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBGO0dBcEdTZDtLQUFBQTtBQXNHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2lzSGVhZGVyVmlzaWJsZSwgc2V0SXNIZWFkZXJWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwcmV2U2Nyb2xsUG9zLCBzZXRQcmV2U2Nyb2xsUG9zXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc01vYmlsZU1lbnVPcGVuLCBzZXRJc01vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gQWRkIHN0YXRlIGZvciBtb2JpbGUgbWVudVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgY29uc3Qgc2Nyb2xsaW5nVXAgPSBwcmV2U2Nyb2xsUG9zID4gY3VycmVudFNjcm9sbFBvcztcclxuXHJcbiAgICAgIHNldElzSGVhZGVyVmlzaWJsZShzY3JvbGxpbmdVcCB8fCBjdXJyZW50U2Nyb2xsUG9zIDw9IDEwMCk7XHJcbiAgICAgIHNldFByZXZTY3JvbGxQb3MoY3VycmVudFNjcm9sbFBvcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbcHJldlNjcm9sbFBvc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbik7XHJcbiAgICBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPCA+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVyfSAke2lzSGVhZGVyVmlzaWJsZSA/ICcnIDogc3R5bGVzLmhpZGRlbn1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaGFtYnVyZ2VyX2ljb24ucG5nJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbil9IC8vIFRvZ2dsZSBtb2JpbGUgbWVudSBvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgYWx0PSdNZW51J1xyXG4gICAgICAgICAgICAgIC8+ICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIkltYWdlIGRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZXMucm91bmRJbWFnZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ3JpZGl0ZW19ICR7c3R5bGVzLm15TmFtZX1gfT48aDI+SmFtZXMgVmluaW5nPC9oMj48L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48TGluayB0bz1cImFib3V0XCIgc21vb3RoPXt0cnVlfT5BYm91dDwvTGluaz48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PGgxPjxMaW5rIHRvPVwiam91cm5leVwiIHNtb290aD17dHJ1ZX0+Sm91cm5leTwvTGluaz48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PGgxPjxMaW5rIHRvPVwiaGl0X21lX3VwXCIgc21vb3RoPXt0cnVlfT5IaXQgbWUgdXA8L0xpbms+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48TGluayB0bz1cImNlcnRpZmljYXRzXCIgc21vb3RoPXt0cnVlfT5DZXJ0aWZpY2F0czwvTGluaz48L2gxPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+PC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNNb2JpbGVNZW51T3BlbiA/IHN0eWxlc1snbm8tc2Nyb2xsJ10gOiAnJ30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUnXX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNNb2JpbGVNZW51T3BlbiA/ICdncmlkJyA6ICdub25lJyB9fSAvLyBTZXQgZGlzcGxheSBwcm9wZXJ0eSB1c2luZyBpbmxpbmUgc3R5bGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3gtY29udGFpbmVyJ119IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPSdhc3NldHMveF9idXR0b24ucG5nJyBhbHQ9J0Nsb3NlJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydpY29uLWNvbnRhaW5lciddfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGxhY2Vob2xkZXIucG5nXCIgYWx0PVwiSW1hZ2UgZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZEltYWdlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vYmlsZS1tZW51LWl0ZW0nXX0+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICA8TGluayB0bz0nYWJvdXQnIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPSdqb3VybmV5JyBzbW9vdGg9e3RydWV9IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgSm91cm5leVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPSdoaXRfbWVfdXAnIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBIaXQgbWUgdXBcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vYmlsZS1tZW51LWl0ZW0nXX0+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICA8TGluayB0bz0nY2VydGlmaWNhdHMnIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBDZXJ0aWZpY2F0c1xyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiTGluayIsIkhlYWRlciIsImlzSGVhZGVyVmlzaWJsZSIsInNldElzSGVhZGVyVmlzaWJsZSIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwiaXNNb2JpbGVNZW51T3BlbiIsInNldElzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbGluZ1VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb2JpbGVNZW51VG9nZ2xlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaGlkZGVuIiwiZGl2IiwibW9iaWxlIiwiaW1nIiwic3JjIiwib25DbGljayIsImFsdCIsImdyaWRpdGVtIiwiaW1hZ2VDb250YWluZXIiLCJyb3VuZEltYWdlIiwibXlOYW1lIiwiaDIiLCJoMSIsInRvIiwic21vb3RoIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});