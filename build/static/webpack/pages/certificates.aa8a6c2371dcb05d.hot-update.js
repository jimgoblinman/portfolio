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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CHeader() {\n    _s();\n    const [isHeaderVisible, setIsHeaderVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add state for mobile menu\n    const handleScroll = ()=>{\n        if (true) {\n            const currentScrollPos = window.scrollY;\n            const scrollingUp = prevScrollPos > currentScrollPos;\n            setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);\n            setPrevScrollPos(currentScrollPos);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            window.addEventListener(\"scroll\", handleScroll);\n            return ()=>{\n                window.removeEventListener(\"scroll\", handleScroll);\n            };\n        }\n    }, [\n        prevScrollPos\n    ]);\n    const handleMobileMenuToggle = ()=>{\n        setIsMobileMenuOpen(!isMobileMenuOpen);\n        document.body.classList.toggle((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]), !isMobileMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), \" \").concat(isHeaderVisible ? \"\" : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().mobile),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/hamburger_icon.png\",\n                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                            alt: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem), \" \").concat((_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().myName)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"James Vining\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 52,\n                            columnNumber: 66\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/about\",\n                                smooth: true,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 56,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 56,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/journey\",\n                                smooth: true,\n                                children: \"Journey\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 57,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 57,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                to: \"/hit_me_up\",\n                                smooth: true,\n                                children: \"Hit me up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 58,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 58,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"certificates\",\n                                children: \"Certificates\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 59,\n                                columnNumber: 48\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 59,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().griditem)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isMobileMenuOpen ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"no-scroll\"]) : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu\"]),\n                    style: {\n                        display: isMobileMenuOpen ? \"grid\" : \"none\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"x-container\"]),\n                            onClick: handleMobileMenuToggle,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/x_button.png\",\n                                alt: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"icon-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"assets/placeholder.png\",\n                                alt: \"Image description\",\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().roundImage)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"about\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"journey\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Journey\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"hit_me_up\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Hit me up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"mobile-menu-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: \"certificates\",\n                                    smooth: true,\n                                    onClick: handleMobileMenuToggle,\n                                    children: \"Certificates\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jimvi\\\\OneDrive\\\\Dokumente\\\\Coding_new\\\\portfolio\\\\components\\\\CHeader.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CHeader, \"fTP70tiaFMBW60HDk+ocxrcBVbY=\");\n_c = CHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CHeader);\nvar _c;\n$RefreshReg$(_c, \"CHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NIZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUNBO0FBQ2I7QUFHcEMsU0FBU0s7O0lBQ1AsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNTLGtCQUFrQkMsb0JBQW9CLEdBQUdWLCtDQUFRQSxDQUFDLFFBQVEsNEJBQTRCO0lBRzdGLE1BQU1XLGVBQWU7UUFDbkIsSUFBSSxJQUFrQixFQUFhO1lBQ2pDLE1BQU1DLG1CQUFtQkMsT0FBT0MsT0FBTztZQUN2QyxNQUFNQyxjQUFjUixnQkFBZ0JLO1lBRXBDTixtQkFBbUJTLGVBQWVILG9CQUFvQjtZQUN0REosaUJBQWlCSTtRQUNuQjtJQUNGO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxJQUFrQixFQUFhO1lBQ2pDWSxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVTDtZQUNsQyxPQUFPO2dCQUNMRSxPQUFPSSxtQkFBbUIsQ0FBQyxVQUFVTjtZQUN2QztRQUNGO0lBQ0YsR0FBRztRQUFDSjtLQUFjO0lBRWxCLE1BQU1XLHlCQUF5QjtRQUM3QlIsb0JBQW9CLENBQUNEO1FBQ3JCVSxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDcEIsK0VBQW1CLEVBQUUsQ0FBQ087SUFDdkQ7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNjO2dCQUFPQyxXQUFXLEdBQW9CbkIsT0FBakJILHlFQUFhLEVBQUMsS0FBd0MsT0FBckNHLGtCQUFrQixLQUFLSCx5RUFBYTs7a0NBQ3ZFLDhEQUFDd0I7d0JBQUlGLFdBQVd0Qix5RUFBYTtrQ0FDM0IsNEVBQUMwQjs0QkFDR0MsS0FBSTs0QkFDSkMsU0FBUyxJQUFNcEIsb0JBQW9CLENBQUNEOzRCQUNwQ3NCLEtBQUk7Ozs7Ozs7Ozs7O2tDQUdWLDhEQUFDTDt3QkFBSUYsV0FBV3RCLDJFQUFlO2tDQUM3Qiw0RUFBQ3dCOzRCQUFJRixXQUFXdEIsaUZBQXFCO3NDQUNuQyw0RUFBQzBCO2dDQUFJQyxLQUFJO2dDQUF5QkUsS0FBSTtnQ0FBb0JQLFdBQVd0Qiw2RUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTFGLDhEQUFDd0I7d0JBQUlGLFdBQVcsR0FBc0J0QixPQUFuQkEsMkVBQWUsRUFBQyxLQUFpQixPQUFkQSx5RUFBYTtrQ0FBSSw0RUFBQ2tDO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFN0QsOERBQUNWO3dCQUFJRixXQUFXdEIsMkVBQWU7Ozs7OztrQ0FFN0IsOERBQUN3Qjt3QkFBSUYsV0FBV3RCLDJFQUFlO2tDQUFFLDRFQUFDbUM7c0NBQUcsNEVBQUNDO2dDQUFFQyxNQUFLO2dDQUFTQyxRQUFROzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUNwRSw4REFBQ2Q7d0JBQUlGLFdBQVd0QiwyRUFBZTtrQ0FBRSw0RUFBQ21DO3NDQUFHLDRFQUFDQztnQ0FBRUMsTUFBSztnQ0FBV0MsUUFBUTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDdEUsOERBQUNkO3dCQUFJRixXQUFXdEIsMkVBQWU7a0NBQUUsNEVBQUNtQztzQ0FBRyw0RUFBQ0M7Z0NBQUVHLElBQUc7Z0NBQWFELFFBQVE7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQ3RFLDhEQUFDZDt3QkFBSUYsV0FBV3RCLDJFQUFlO2tDQUFFLDRFQUFDbUM7c0NBQUcsNEVBQUNDO2dDQUFFQyxNQUFLOzBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUM1RCw4REFBQ2I7d0JBQUlGLFdBQVd0QiwyRUFBZTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ3dCO2dCQUFJRixXQUFXZixtQkFBbUJQLCtFQUFtQixHQUFHOzBCQUN2RCw0RUFBQ3dCO29CQUNHRixXQUFXdEIsaUZBQXFCO29CQUNoQ3dDLE9BQU87d0JBQUVDLFNBQVNsQyxtQkFBbUIsU0FBUztvQkFBTzs7c0NBRXZELDhEQUFDaUI7NEJBQUlGLFdBQVd0QixpRkFBcUI7NEJBQUU0QixTQUFTWjtzQ0FDNUMsNEVBQUNVO2dDQUFJQyxLQUFJO2dDQUFzQkUsS0FBSTs7Ozs7Ozs7Ozs7c0NBRXZDLDhEQUFDTDs0QkFBSUYsV0FBV3RCLG9GQUF3QjtzQ0FDdEMsNEVBQUMwQjtnQ0FBSUMsS0FBSTtnQ0FBeUJFLEtBQUk7Z0NBQW9CUCxXQUFXdEIsNkVBQWlCOzs7Ozs7Ozs7OztzQ0FFdEYsOERBQUN3Qjs0QkFBSUYsV0FBV3RCLHNGQUEwQjtzQ0FDMUMsNEVBQUNtQzswQ0FDQyw0RUFBQ2xDLDhDQUFJQTtvQ0FBQ3NDLElBQUc7b0NBQVFELFFBQVE7b0NBQU1WLFNBQVNaOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLcEUsOERBQUNROzRCQUFJRixXQUFXdEIsc0ZBQTBCO3NDQUN4Qyw0RUFBQ21DOzBDQUNDLDRFQUFDbEMsOENBQUlBO29DQUFDc0MsSUFBRztvQ0FBVUQsUUFBUTtvQ0FBTVYsU0FBU1o7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUt0RSw4REFBQ1E7NEJBQUlGLFdBQVd0QixzRkFBMEI7c0NBQ3hDLDRFQUFDbUM7MENBQ0MsNEVBQUNsQyw4Q0FBSUE7b0NBQUNzQyxJQUFHO29DQUFZRCxRQUFRO29DQUFNVixTQUFTWjs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3hFLDhEQUFDUTs0QkFBSUYsV0FBV3RCLHNGQUEwQjtzQ0FDeEMsNEVBQUNtQzswQ0FDQyw0RUFBQ2xDLDhDQUFJQTtvQ0FBQ3NDLElBQUc7b0NBQWVELFFBQVE7b0NBQU1WLFNBQVNaOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVckY7R0FwR1NkO0tBQUFBO0FBc0dULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ0hlYWRlci5qcz82NWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuXHJcblxyXG5mdW5jdGlvbiBDSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtpc0hlYWRlclZpc2libGUsIHNldElzSGVhZGVyVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcHJldlNjcm9sbFBvcywgc2V0UHJldlNjcm9sbFBvc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNNb2JpbGVNZW51T3Blbiwgc2V0SXNNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEFkZCBzdGF0ZSBmb3IgbW9iaWxlIG1lbnVcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIGNvbnN0IHNjcm9sbGluZ1VwID0gcHJldlNjcm9sbFBvcyA+IGN1cnJlbnRTY3JvbGxQb3M7XHJcblxyXG4gICAgICBzZXRJc0hlYWRlclZpc2libGUoc2Nyb2xsaW5nVXAgfHwgY3VycmVudFNjcm9sbFBvcyA8PSAxMDApO1xyXG4gICAgICBzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwgW3ByZXZTY3JvbGxQb3NdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9iaWxlTWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzTW9iaWxlTWVudU9wZW4oIWlzTW9iaWxlTWVudU9wZW4pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKHN0eWxlc1snbm8tc2Nyb2xsJ10sICFpc01vYmlsZU1lbnVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPCA+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVyfSAke2lzSGVhZGVyVmlzaWJsZSA/ICcnIDogc3R5bGVzLmhpZGRlbn1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPSdhc3NldHMvaGFtYnVyZ2VyX2ljb24ucG5nJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbil9IC8vIFRvZ2dsZSBtb2JpbGUgbWVudSBvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgYWx0PSdNZW51J1xyXG4gICAgICAgICAgICAgIC8+ICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkaXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BsYWNlaG9sZGVyLnBuZ1wiIGFsdD1cIkltYWdlIGRlc2NyaXB0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZXMucm91bmRJbWFnZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ3JpZGl0ZW19ICR7c3R5bGVzLm15TmFtZX1gfT48aDI+SmFtZXMgVmluaW5nPC9oMj48L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48YSBocmVmPScvYWJvdXQnIHNtb290aD17dHJ1ZX0+QWJvdXQ8L2E+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48YSBocmVmPScvam91cm5leScgc21vb3RoPXt0cnVlfT5Kb3VybmV5PC9hPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48aDE+PGEgdG89XCIvaGl0X21lX3VwXCIgc21vb3RoPXt0cnVlfT5IaXQgbWUgdXA8L2E+PC9oMT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZGl0ZW19PjxoMT48YSBocmVmPVwiY2VydGlmaWNhdGVzXCI+Q2VydGlmaWNhdGVzPC9hPjwvaDE+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRpdGVtfT48L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc01vYmlsZU1lbnVPcGVuID8gc3R5bGVzWyduby1zY3JvbGwnXSA6ICcnfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudSddfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc01vYmlsZU1lbnVPcGVuID8gJ2dyaWQnIDogJ25vbmUnIH19IC8vIFNldCBkaXNwbGF5IHByb3BlcnR5IHVzaW5nIGlubGluZSBzdHlsZVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1sneC1jb250YWluZXInXX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9J2Fzc2V0cy94X2J1dHRvbi5wbmcnIGFsdD0nQ2xvc2UnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ljb24tY29udGFpbmVyJ119PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9wbGFjZWhvbGRlci5wbmdcIiBhbHQ9XCJJbWFnZSBkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kSW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPSdhYm91dCcgc21vb3RoPXt0cnVlfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89J2pvdXJuZXknIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBKb3VybmV5XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2JpbGUtbWVudS1pdGVtJ119PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89J2hpdF9tZV91cCcgc21vb3RoPXt0cnVlfSBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgIEhpdCBtZSB1cFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbW9iaWxlLW1lbnUtaXRlbSddfT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPSdjZXJ0aWZpY2F0ZXMnIHNtb290aD17dHJ1ZX0gb25DbGljaz17aGFuZGxlTW9iaWxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICBDZXJ0aWZpY2F0ZXNcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENIZWFkZXI7ICBcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJMaW5rIiwiQ0hlYWRlciIsImlzSGVhZGVyVmlzaWJsZSIsInNldElzSGVhZGVyVmlzaWJsZSIsInByZXZTY3JvbGxQb3MiLCJzZXRQcmV2U2Nyb2xsUG9zIiwiaXNNb2JpbGVNZW51T3BlbiIsInNldElzTW9iaWxlTWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbGluZ1VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb2JpbGVNZW51VG9nZ2xlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaGlkZGVuIiwiZGl2IiwibW9iaWxlIiwiaW1nIiwic3JjIiwib25DbGljayIsImFsdCIsImdyaWRpdGVtIiwiaW1hZ2VDb250YWluZXIiLCJyb3VuZEltYWdlIiwibXlOYW1lIiwiaDIiLCJoMSIsImEiLCJocmVmIiwic21vb3RoIiwidG8iLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CHeader.js\n"));

/***/ })

});