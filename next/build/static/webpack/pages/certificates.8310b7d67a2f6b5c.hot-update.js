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

/***/ "./pages/useAuth.js":
/*!**************************!*\
  !*** ./pages/useAuth.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n// useAuth.js\nvar _s = $RefreshSig$();\n\n\nconst useAuth = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Retrieve stored hashed username and password from localStorage\n        const storedUsernameHash = localStorage.getItem(\"usernameHash\");\n        const storedPasswordHash = localStorage.getItem(\"passwordHash\");\n        const correctUsernameHash = \"b0e0ec7fa0a89577c9341c16cff870789221b310a02cc465f464789407f83f377a87a97d635cac2666147a8fb5fd27d56dea3d4ceba1fc7d02f422dda6794e3c\";\n        const correctPasswordHash = \"921412f4b8860a2175db0264a391f48c6d3e53bdd683159975ee9a6091d77b56b41bec0e1e01f4920313adffad2d6f1e5dbfccea11ab3e7521a4289835c8518b\";\n        // Check if the user is authenticated   \n        isAuthenticated = storedUsernameHash && storedPasswordHash;\n        if (storedUsernameHash == correctUsernameHash && storedPasswordHash == correctPasswordHash) {\n            isAuthenticated = storedUsernameHash && storedPasswordHash;\n        }\n        // If not authenticated, redirect to login page\n        if (!isAuthenticated) {\n            router.push(\"/login\");\n        } else {\n            console.log(\"Logged in\");\n        }\n    }, [\n        router\n    ]);\n};\n_s(useAuth, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VBdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsYUFBYTs7QUFDcUI7QUFDTTtBQUVqQyxNQUFNRSxVQUFVOztJQUNyQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsaUVBQWlFO1FBQ2pFLE1BQU1JLHFCQUFxQkMsYUFBYUMsT0FBTyxDQUFDO1FBQ2hELE1BQU1DLHFCQUFxQkYsYUFBYUMsT0FBTyxDQUFDO1FBR2hELE1BQU1FLHNCQUFzQjtRQUM1QixNQUFNQyxzQkFBc0I7UUFFNUIsd0NBQXdDO1FBQ3hDQyxrQkFBa0JOLHNCQUFzQkc7UUFFeEMsSUFBSUgsc0JBQXNCSSx1QkFBdUJELHNCQUFzQkUscUJBQXFCO1lBQ3hGQyxrQkFBa0JOLHNCQUFzQkc7UUFDNUM7UUFDQSwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDRyxpQkFBaUI7WUFDcEJQLE9BQU9RLElBQUksQ0FBQztRQUNkLE9BQ0s7WUFDREMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0YsR0FBRztRQUFDVjtLQUFPO0FBQ2IsRUFBRTtHQTFCV0Q7O1FBQ0lELGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VBdXRoLmpzPzQ4N2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlQXV0aC5qc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmV0cmlldmUgc3RvcmVkIGhhc2hlZCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgIGNvbnN0IHN0b3JlZFVzZXJuYW1lSGFzaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZUhhc2gnKTtcclxuICAgIGNvbnN0IHN0b3JlZFBhc3N3b3JkSGFzaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZEhhc2gnKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29ycmVjdFVzZXJuYW1lSGFzaCA9ICdiMGUwZWM3ZmEwYTg5NTc3YzkzNDFjMTZjZmY4NzA3ODkyMjFiMzEwYTAyY2M0NjVmNDY0Nzg5NDA3ZjgzZjM3N2E4N2E5N2Q2MzVjYWMyNjY2MTQ3YThmYjVmZDI3ZDU2ZGVhM2Q0Y2ViYTFmYzdkMDJmNDIyZGRhNjc5NGUzYyc7XHJcbiAgICBjb25zdCBjb3JyZWN0UGFzc3dvcmRIYXNoID0gJzkyMTQxMmY0Yjg4NjBhMjE3NWRiMDI2NGEzOTFmNDhjNmQzZTUzYmRkNjgzMTU5OTc1ZWU5YTYwOTFkNzdiNTZiNDFiZWMwZTFlMDFmNDkyMDMxM2FkZmZhZDJkNmYxZTVkYmZjY2VhMTFhYjNlNzUyMWE0Mjg5ODM1Yzg1MThiJztcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkICAgXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQgPSBzdG9yZWRVc2VybmFtZUhhc2ggJiYgc3RvcmVkUGFzc3dvcmRIYXNoO1xyXG5cclxuICAgIGlmIChzdG9yZWRVc2VybmFtZUhhc2ggPT0gY29ycmVjdFVzZXJuYW1lSGFzaCAmJiBzdG9yZWRQYXNzd29yZEhhc2ggPT0gY29ycmVjdFBhc3N3b3JkSGFzaCkge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCA9IHN0b3JlZFVzZXJuYW1lSGFzaCAmJiBzdG9yZWRQYXNzd29yZEhhc2g7XHJcbiAgICB9XHJcbiAgICAvLyBJZiBub3QgYXV0aGVudGljYXRlZCwgcmVkaXJlY3QgdG8gbG9naW4gcGFnZVxyXG4gICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgaW5cIilcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwicm91dGVyIiwic3RvcmVkVXNlcm5hbWVIYXNoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFBhc3N3b3JkSGFzaCIsImNvcnJlY3RVc2VybmFtZUhhc2giLCJjb3JyZWN0UGFzc3dvcmRIYXNoIiwiaXNBdXRoZW50aWNhdGVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/useAuth.js\n"));

/***/ })

});