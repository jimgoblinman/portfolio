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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add state for mobile menu\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    const handleMobileMenuToggle = ()=>{\n        setIsMobileMenuOpen(!isMobileMenuOpen);\n        document.body.classList.toggle((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]), !isMobileMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/hamburger_icon.png\",\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            alt: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"James Vining\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 52,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"about\",\n                                smooth: true,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 56,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"journey\",\n                                smooth: true,\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 57,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 57,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: \"hit_me_up\",\n                                smooth: true,\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 58,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/certificates\",\n                                children: \"Certificates\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 59,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isMobileMenuOpen ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]) : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                    style: {\n                        display: isMobileMenuOpen ? \"grid\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                            onClick: handleMobileMenuToggle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/x_button.png\",\n                                alt: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"icon-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"about\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"journey\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Journey\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"hit_me_up\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Hit me up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    to: \"certificates\",\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Certificates\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\Header.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Header, \"fTP70tiaFMBW60HDk+ocxrcBVbY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ0E7QUFDYjtBQUdwQyxTQUFTSzs7SUFDUCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQUMsUUFBUSw0QkFBNEI7SUFHN0YsTUFBTVcsZUFBZTtRQUNuQixJQUFJLElBQWtCLEVBQWE7WUFDakMsTUFBTUMsbUJBQW1CQyxPQUFPQyxPQUFPO1lBQ3ZDLE1BQU1DLGNBQWNSLGdCQUFnQks7WUFFcENOLG1CQUFtQlMsZUFBZUgsb0JBQW9CO1lBQ3RESixpQkFBaUJJO1FBQ25CO0lBQ0Y7SUFFQVgsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQWtCLEVBQWE7WUFDakNZLE9BQU9HLGdCQUFnQixDQUFDLFVBQVVMO1lBQ2xDLE9BQU87Z0JBQ0xFLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVOO1lBQ3ZDO1FBQ0Y7SUFDRixHQUFHO1FBQUNKO0tBQWM7SUFFbEIsTUFBTVcseUJBQXlCO1FBQzdCUixvQkFBb0IsQ0FBQ0Q7UUFDckJVLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUNwQiwrRUFBbUIsRUFBRSxDQUFDTztJQUN2RDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2M7Z0JBQU9DLFdBQVcsR0FBb0JuQixPQUFqQkgseUVBQWEsRUFBQyxLQUF3QyxPQUFyQ0csa0JBQWtCLEtBQUtILHlFQUFhOztrQ0FDdkUsOERBQUN3Qjt3QkFBSUYsV0FBV3RCLHlFQUFhO2tDQUMzQiw0RUFBQzBCOzRCQUNHQyxLQUFJOzRCQUNKQyxTQUFTLElBQU1wQixvQkFBb0IsQ0FBQ0Q7NEJBQ3BDc0IsS0FBSTs7Ozs7Ozs7Ozs7a0NBR1YsOERBQUNMO3dCQUFJRixXQUFXdEIsMkVBQWU7a0NBQzdCLDRFQUFDd0I7NEJBQUlGLFdBQVd0QixpRkFBcUI7c0NBQ25DLDRFQUFDMEI7Z0NBQUlDLEtBQUk7Z0NBQXlCRSxLQUFJO2dDQUFvQlAsV0FBV3RCLDZFQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJMUYsOERBQUN3Qjt3QkFBSUYsV0FBVyxHQUFzQnRCLE9BQW5CQSwyRUFBZSxFQUFDLEtBQWlCLE9BQWRBLHlFQUFhO2tDQUFJLDRFQUFDa0M7c0NBQUc7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQ1Y7d0JBQUlGLFdBQVd0QiwyRUFBZTs7Ozs7O2tDQUU3Qiw4REFBQ3dCO3dCQUFJRixXQUFXdEIsMkVBQWU7a0NBQUUsNEVBQUNtQztzQ0FBRyw0RUFBQ2xDLDhDQUFJQTtnQ0FBQ21DLElBQUc7Z0NBQVFDLFFBQVE7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQ3BFLDhEQUFDYjt3QkFBSUYsV0FBV3RCLDJFQUFlO2tDQUFFLDRFQUFDbUM7c0NBQUcsNEVBQUNsQyw4Q0FBSUE7Z0NBQUNtQyxJQUFHO2dDQUFVQyxRQUFROzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUN0RSw4REFBQ2I7d0JBQUlGLFdBQVd0QiwyRUFBZTtrQ0FBRSw0RUFBQ21DO3NDQUFHLDRFQUFDbEMsOENBQUlBO2dDQUFDbUMsSUFBRztnQ0FBWUMsUUFBUTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDeEUsOERBQUNiO3dCQUFJRixXQUFXdEIsMkVBQWU7a0NBQUUsNEVBQUNtQztzQ0FBRyw0RUFBQ0c7Z0NBQUVDLE1BQUs7MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUM3RCw4REFBQ2Y7d0JBQUlGLFdBQVd0QiwyRUFBZTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ3dCO2dCQUFJRixXQUFXZixtQkFBbUJQLCtFQUFtQixHQUFHOzBCQUN2RCw0RUFBQ3dCO29CQUNHRixXQUFXdEIsaUZBQXFCO29CQUNoQ3dDLE9BQU87d0JBQUVDLFNBQVNsQyxtQkFBbUIsU0FBUztvQkFBTzs7c0NBRXZELDhEQUFDaUI7NEJBQUlGLFdBQVd0QixpRkFBcUI7NEJBQUU0QixTQUFTWjtzQ0FDNUMsNEVBQUNVO2dDQUFJQyxLQUFJO2dDQUFzQkUsS0FBSTs7Ozs7Ozs7Ozs7c0NBRXZDLDhEQUFDTDs0QkFBSUYsV0FBV3RCLG9GQUF3QjtzQ0FDdEMsNEVBQUMwQjtnQ0FBSUMsS0FBSTtnQ0FBeUJFLEtBQUk7Z0NBQW9CUCxXQUFXdEIsNkVBQWlCOzs7Ozs7Ozs7OztzQ0FFdEYsOERBQUN3Qjs0QkFBSUYsV0FBV3RCLHNGQUEwQjtzQ0FDMUMsNEVBQUNtQzswQ0FDQyw0RUFBQ2xDLDhDQUFJQTtvQ0FBQ21DLElBQUc7b0NBQVFDLFFBQVE7b0NBQU1ULFNBQVNaOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLcEUsOERBQUNROzRCQUFJRixXQUFXdEIsc0ZBQTBCO3NDQUN4Qyw0RUFBQ21DOzBDQUNDLDRFQUFDbEMsOENBQUlBO29DQUFDbUMsSUFBRztvQ0FBVUMsUUFBUTtvQ0FBTVQsU0FBU1o7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt0RSw4REFBQ1E7NEJBQUlGLFdBQVd0QixzRkFBMEI7c0NBQ3hDLDRFQUFDbUM7MENBQ0MsNEVBQUNsQyw4Q0FBSUE7b0NBQUNtQyxJQUFHO29DQUFZQyxRQUFRO29DQUFNVCxTQUFTWjs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3hFLDhEQUFDUTs0QkFBSUYsV0FBV3RCLHNGQUEwQjtzQ0FDeEMsNEVBQUNtQzswQ0FDQyw0RUFBQ0c7b0NBQUVGLElBQUc7b0NBQWVSLFNBQVNaOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVcEU7R0FwR1NkO0tBQUFBO0FBc0dULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbaXNIZWFkZXJWaXNpYmxlLCBzZXRJc0hlYWRlclZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGQgc3RhdGUgZm9yIG1vYmlsZSBtZW51XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICBjb25zdCBzY3JvbGxpbmdVcCA9IHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zO1xyXG5cclxuICAgICAgc2V0SXNIZWFkZXJWaXNpYmxlKHNjcm9sbGluZ1VwIHx8IGN1cnJlbnRTY3JvbGxQb3MgPD0gMTAwKTtcclxuICAgICAgc2V0UHJldlNjcm9sbFBvcyhjdXJyZW50U2Nyb2xsUG9zKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtwcmV2U2Nyb2xsUG9zXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vYmlsZU1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShzdHlsZXNbJ25vLXNjcm9sbCddLCAhaXNNb2JpbGVNZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDwgPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlcn0gJHtpc0hlYWRlclZpc2libGUgPyAnJyA6IHN0eWxlcy5oaWRkZW59YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz0nYXNzZXRzL2hhbWJ1cmdlcl9pY29uLnBuZydcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pfSAvLyBUb2dnbGUgbW9iaWxlIG1lbnUgb24gY2xpY2tcclxuICAgICAgICAgICAgICAgIGFsdD0nTWVudSdcclxuICAgICAgICAgICAgICAvPiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJJbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmdyaWRpdGVtfSAke3N0eWxlcy5teU5hbWV9YH0+PGgyPkphbWVzIFZpbmluZzwvaDI+PC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PExpbmsgdG89XCJhYm91dFwiIHNtb290aD17dHJ1ZX0+QWJvdXQ8L0xpbms+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48TGluayB0bz1cImpvdXJuZXlcIiBzbW9vdGg9e3RydWV9PkpvdXJuZXk8L0xpbms+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48TGluayB0bz1cImhpdF9tZV91cFwiIHNtb290aD17dHJ1ZX0+SGl0IG1lIHVwPC9MaW5rPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PGEgaHJlZj1cIi9jZXJ0aWZpY2F0ZXNcIj5DZXJ0aWZpY2F0ZXM8L2E+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzTW9iaWxlTWVudU9wZW4gPyBzdHlsZXNbJ25vLXNjcm9sbCddIDogJyd9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ21vYmlsZS1tZW51J119XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzTW9iaWxlTWVudU9wZW4gPyAnZ3JpZCcgOiAnbm9uZScgfX0gLy8gU2V0IGRpc3BsYXkgcHJvcGVydHkgdXNpbmcgaW5saW5lIHN0eWxlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd4LWNvbnRhaW5lciddfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL3hfYnV0dG9uLnBuZycgYWx0PSdDbG9zZScgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaWNvbi1jb250YWluZXInXX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIkltYWdlIGRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZXMucm91bmRJbWFnZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89J2Fib3V0JyBzbW9vdGg9e3RydWV9IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vYmlsZS1tZW51LWl0ZW0nXX0+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICA8TGluayB0bz0nam91cm5leScgc21vb3RoPXt0cnVlfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIEpvdXJuZXlcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vYmlsZS1tZW51LWl0ZW0nXX0+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICA8TGluayB0bz0naGl0X21lX3VwJyBzbW9vdGg9e3RydWV9IG9uQ2xpY2s9e2hhbmRsZU1vYmlsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgSGl0IG1lIHVwXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPGEgdG89J2NlcnRpZmljYXRlcycgb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBDZXJ0aWZpY2F0ZXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsgIFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmsiLCJIZWFkZXIiLCJpc0hlYWRlclZpc2libGUiLCJzZXRJc0hlYWRlclZpc2libGUiLCJwcmV2U2Nyb2xsUG9zIiwic2V0UHJldlNjcm9sbFBvcyIsImlzTW9iaWxlTWVudU9wZW4iLCJzZXRJc01vYmlsZU1lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudFNjcm9sbFBvcyIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JvbGxpbmdVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW9iaWxlTWVudVRvZ2dsZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImhpZGRlbiIsImRpdiIsIm1vYmlsZSIsImltZyIsInNyYyIsIm9uQ2xpY2siLCJhbHQiLCJncmlkaXRlbSIsImltYWdlQ29udGFpbmVyIiwicm91bmRJbWFnZSIsIm15TmFtZSIsImgyIiwiaDEiLCJ0byIsInNtb290aCIsImEiLCJocmVmIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});