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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n// useAuth.js\nvar _s = $RefreshSig$();\n\n\nconst useAuth = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Retrieve stored hashed username and password from localStorage\n        const storedUsernameHash = localStorage.getItem(\"usernameHash\");\n        const storedPasswordHash = localStorage.getItem(\"passwordHash\");\n        const correctUsernameHash = \"b0e0ec7fa0a89577c9341c16cff870789221b310a02cc465f464789407f83f377a87a97d635cac2666147a8fb5fd27d56dea3d4ceba1fc7d02f422dda6794e3c\";\n        const correctPasswordHash = \"921412f4b8860a2175db0264a391f48c6d3e53bdd683159975ee9a6091d77b56b41bec0e1e01f4920313adffad2d6f1e5dbfccea11ab3e7521a4289835c8518b\";\n        // Check if the user is authenticated   \n        let isAuthenticated = false;\n        if (storedUsernameHash == correctUsernameHash && storedPasswordHash == correctPasswordHash) {\n            isAuthenticated = storedUsernameHash && storedPasswordHash;\n        }\n        // If not authenticated, redirect to login page\n        if (!isAuthenticated) {\n            router.push(\"/login\");\n        } else {\n            console.log(\"Logged in\");\n        }\n    }, [\n        router\n    ]);\n};\n_s(useAuth, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VBdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsYUFBYTs7QUFDcUI7QUFDTTtBQUVqQyxNQUFNRSxVQUFVOztJQUNyQixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsaUVBQWlFO1FBQ2pFLE1BQU1JLHFCQUFxQkMsYUFBYUMsT0FBTyxDQUFDO1FBQ2hELE1BQU1DLHFCQUFxQkYsYUFBYUMsT0FBTyxDQUFDO1FBR2hELE1BQU1FLHNCQUFzQjtRQUM1QixNQUFNQyxzQkFBc0I7UUFFNUIsd0NBQXdDO1FBRXhDLElBQUlDLGtCQUFrQjtRQUN0QixJQUFJTixzQkFBc0JJLHVCQUF1QkQsc0JBQXNCRSxxQkFBcUI7WUFDeEZDLGtCQUFrQk4sc0JBQXNCRztRQUM1QztRQUNBLCtDQUErQztRQUMvQyxJQUFJLENBQUNHLGlCQUFpQjtZQUNwQlAsT0FBT1EsSUFBSSxDQUFDO1FBQ2QsT0FDSztZQUNEQyxRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDRixHQUFHO1FBQUNWO0tBQU87QUFDYixFQUFFO0dBMUJXRDs7UUFDSUQsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZUF1dGguanM/NDg3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2VBdXRoLmpzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZXRyaWV2ZSBzdG9yZWQgaGFzaGVkIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgY29uc3Qgc3RvcmVkVXNlcm5hbWVIYXNoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lSGFzaCcpO1xyXG4gICAgY29uc3Qgc3RvcmVkUGFzc3dvcmRIYXNoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkSGFzaCcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBjb3JyZWN0VXNlcm5hbWVIYXNoID0gJ2IwZTBlYzdmYTBhODk1NzdjOTM0MWMxNmNmZjg3MDc4OTIyMWIzMTBhMDJjYzQ2NWY0NjQ3ODk0MDdmODNmMzc3YTg3YTk3ZDYzNWNhYzI2NjYxNDdhOGZiNWZkMjdkNTZkZWEzZDRjZWJhMWZjN2QwMmY0MjJkZGE2Nzk0ZTNjJztcclxuICAgIGNvbnN0IGNvcnJlY3RQYXNzd29yZEhhc2ggPSAnOTIxNDEyZjRiODg2MGEyMTc1ZGIwMjY0YTM5MWY0OGM2ZDNlNTNiZGQ2ODMxNTk5NzVlZTlhNjA5MWQ3N2I1NmI0MWJlYzBlMWUwMWY0OTIwMzEzYWRmZmFkMmQ2ZjFlNWRiZmNjZWExMWFiM2U3NTIxYTQyODk4MzVjODUxOGInO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgICBcclxuXHJcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICBpZiAoc3RvcmVkVXNlcm5hbWVIYXNoID09IGNvcnJlY3RVc2VybmFtZUhhc2ggJiYgc3RvcmVkUGFzc3dvcmRIYXNoID09IGNvcnJlY3RQYXNzd29yZEhhc2gpIHtcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQgPSBzdG9yZWRVc2VybmFtZUhhc2ggJiYgc3RvcmVkUGFzc3dvcmRIYXNoO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgbm90IGF1dGhlbnRpY2F0ZWQsIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIGluXCIpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aCIsInJvdXRlciIsInN0b3JlZFVzZXJuYW1lSGFzaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRQYXNzd29yZEhhc2giLCJjb3JyZWN0VXNlcm5hbWVIYXNoIiwiY29ycmVjdFBhc3N3b3JkSGFzaCIsImlzQXV0aGVudGljYXRlZCIsInB1c2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/useAuth.js\n"));

/***/ })

});