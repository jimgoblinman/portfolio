/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Header.module.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Header.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.Header_header__072v2 {\\r\\n  position: fixed;\\r\\n  margin: 0; \\r\\n  display: grid;\\r\\n  grid-template-columns: 10% 20% 20% auto auto auto auto 5%;\\r\\n  align-items: start;\\r\\n  height: 8%;\\r\\n  width: 100%;\\r\\n  transform: translateY(+8%);\\r\\n  transition: transform 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.Header_header__072v2.Header_hidden__KodJF {\\r\\n  transform: translateY(-100%);\\r\\n  transition: transform 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.Header_header__072v2 h1 {\\r\\n  color: #a80000;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.Header_header__072v2 h2{\\r\\n  color: white;\\r\\n  font-size: 16px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.Header_griditem__FRi7H {\\r\\n  font-family: \\\"moby-monospace\\\", monospace;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.Header_griditem__FRi7H h1 {\\r\\n  position: relative;\\r\\n  width: -moz-fit-content;\\r\\n  width: fit-content; \\r\\n}\\r\\n\\r\\n.Header_griditem__FRi7H h1::before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  bottom: -2px;\\r\\n  left: 0;\\r\\n  width: 0;\\r\\n  height: 2px;\\r\\n  background-color: #731010;\\r\\n  transition: width 0.5s ease;\\r\\n}\\r\\n\\r\\n.Header_griditem__FRi7H h1:hover::before { \\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.Header_griditem__FRi7H a {\\r\\n  text-decoration: none;\\r\\n  color:inherit;\\r\\n}\\r\\n\\r\\n.Header_imageContainer__7N44E {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.Header_roundImage__1SZV_ {\\r\\n  width: 30%;\\r\\n  border-radius: 100%;\\r\\n  overflow: hidden;  \\r\\n}\\r\\n\\r\\n.Header_mobile__V_nRy {\\r\\n  display: none;\\r\\n  \\r\\n}\\r\\n.Header_mobile__V_nRy img {\\r\\n  width: 60%;  \\r\\n  transition: transform 0.3s ease; /* Add a transition for smooth rotation */\\r\\n\\r\\n}\\r\\n\\r\\n.Header_mobile__V_nRy:hover img {\\r\\n  transform: rotate(90deg); /* Rotate the image 180 degrees on hover */\\r\\n}\\r\\n\\r\\n.Header_mobile-menu__GUaPa {\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  grid-template-rows: 10% 20% auto auto auto auto auto auto;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.Header_mobile-menu-item__VH7Ls {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.Header_x-container__sMKHW {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-left: 80%;\\r\\n}\\r\\n.Header_x-container__sMKHW img{\\r\\n  height: 80%;\\r\\n}\\r\\n\\r\\n.Header_icon-container__1rlmt img {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n@media (max-width: 767px) {\\r\\n  .Header_header__072v2{\\r\\n    background-color: grey;\\r\\n    grid-template-columns: 15% auto;\\r\\n  }\\r\\n  .Header_griditem__FRi7H {\\r\\n    display: none;\\r\\n  }\\r\\n  .Header_mobile__V_nRy  {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n  .Header_mobile-menu__GUaPa {\\r\\n    display: grid;\\r\\n\\r\\n  }\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Header.module.css\"],\"names\":[],\"mappings\":\";AACA;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,yDAAyD;EACzD,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,sCAAsC;AACxC;;AAEA;EACE,4BAA4B;EAC5B,sCAAsC;AACxC;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;;;AAIA;EACE,YAAY;EACZ,eAAe;EACf,SAAS;AACX;;AAEA;EACE,wCAAwC;EACxC,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,uBAAkB;EAAlB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,WAAW;EACX,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;;AAEf;AACA;EACE,UAAU;EACV,+BAA+B,EAAE,yCAAyC;;AAE5E;;AAEA;EACE,wBAAwB,EAAE,0CAA0C;AACtE;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,yDAAyD;EACzD,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,sBAAsB;IACtB,+BAA+B;EACjC;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;;EAEf;;AAEF\",\"sourcesContent\":[\"\\r\\n.header {\\r\\n  position: fixed;\\r\\n  margin: 0; \\r\\n  display: grid;\\r\\n  grid-template-columns: 10% 20% 20% auto auto auto auto 5%;\\r\\n  align-items: start;\\r\\n  height: 8%;\\r\\n  width: 100%;\\r\\n  transform: translateY(+8%);\\r\\n  transition: transform 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.header.hidden {\\r\\n  transform: translateY(-100%);\\r\\n  transition: transform 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.header h1 {\\r\\n  color: #a80000;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.header h2{\\r\\n  color: white;\\r\\n  font-size: 16px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.griditem {\\r\\n  font-family: \\\"moby-monospace\\\", monospace;\\r\\n  font-weight: 400;\\r\\n  font-style: normal;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.griditem h1 {\\r\\n  position: relative;\\r\\n  width: fit-content; \\r\\n}\\r\\n\\r\\n.griditem h1::before {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  bottom: -2px;\\r\\n  left: 0;\\r\\n  width: 0;\\r\\n  height: 2px;\\r\\n  background-color: #731010;\\r\\n  transition: width 0.5s ease;\\r\\n}\\r\\n\\r\\n.griditem h1:hover::before { \\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.griditem a {\\r\\n  text-decoration: none;\\r\\n  color:inherit;\\r\\n}\\r\\n\\r\\n.imageContainer {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.roundImage {\\r\\n  width: 30%;\\r\\n  border-radius: 100%;\\r\\n  overflow: hidden;  \\r\\n}\\r\\n\\r\\n.mobile {\\r\\n  display: none;\\r\\n  \\r\\n}\\r\\n.mobile img {\\r\\n  width: 60%;  \\r\\n  transition: transform 0.3s ease; /* Add a transition for smooth rotation */\\r\\n\\r\\n}\\r\\n\\r\\n.mobile:hover img {\\r\\n  transform: rotate(90deg); /* Rotate the image 180 degrees on hover */\\r\\n}\\r\\n\\r\\n.mobile-menu {\\r\\n  position: fixed;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  grid-template-rows: 10% 20% auto auto auto auto auto auto;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.mobile-menu-item {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.x-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-left: 80%;\\r\\n}\\r\\n.x-container img{\\r\\n  height: 80%;\\r\\n}\\r\\n\\r\\n.icon-container img {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n@media (max-width: 767px) {\\r\\n  .header{\\r\\n    background-color: grey;\\r\\n    grid-template-columns: 15% auto;\\r\\n  }\\r\\n  .griditem {\\r\\n    display: none;\\r\\n  }\\r\\n  .mobile  {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n  .mobile-menu {\\r\\n    display: grid;\\r\\n\\r\\n  }\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"Header_header__072v2\",\n\t\"hidden\": \"Header_hidden__KodJF\",\n\t\"griditem\": \"Header_griditem__FRi7H\",\n\t\"imageContainer\": \"Header_imageContainer__7N44E\",\n\t\"roundImage\": \"Header_roundImage__1SZV_\",\n\t\"mobile\": \"Header_mobile__V_nRy\",\n\t\"mobile-menu\": \"Header_mobile-menu__GUaPa\",\n\t\"mobile-menu-item\": \"Header_mobile-menu-item__VH7Ls\",\n\t\"x-container\": \"Header_x-container__sMKHW\",\n\t\"icon-container\": \"Header_icon-container__1rlmt\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxxRUFBcUUsc0JBQXNCLGlCQUFpQixvQkFBb0IsZ0VBQWdFLHlCQUF5QixpQkFBaUIsa0JBQWtCLGlDQUFpQyw2Q0FBNkMsS0FBSyxvREFBb0QsbUNBQW1DLDZDQUE2QyxLQUFLLGtDQUFrQyxxQkFBcUIsc0JBQXNCLEtBQUsseUNBQXlDLG1CQUFtQixzQkFBc0IsZ0JBQWdCLEtBQUssaUNBQWlDLGlEQUFpRCx1QkFBdUIseUJBQXlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixLQUFLLG9DQUFvQyx5QkFBeUIsOEJBQThCLDBCQUEwQixLQUFLLDRDQUE0QyxvQkFBb0IseUJBQXlCLG1CQUFtQixjQUFjLGVBQWUsa0JBQWtCLGdDQUFnQyxrQ0FBa0MsS0FBSyxtREFBbUQsa0JBQWtCLEtBQUssbUNBQW1DLDRCQUE0QixvQkFBb0IsS0FBSyx1Q0FBdUMsb0JBQW9CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLEtBQUssbUNBQW1DLGlCQUFpQiwwQkFBMEIseUJBQXlCLEtBQUssK0JBQStCLG9CQUFvQixXQUFXLCtCQUErQixtQkFBbUIsdUNBQXVDLG1EQUFtRCx5Q0FBeUMsZ0NBQWdDLGdEQUFnRCxvQ0FBb0Msc0JBQXNCLG1CQUFtQixrQkFBa0IsZ0VBQWdFLG9CQUFvQixLQUFLLHlDQUF5QyxvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLG9DQUFvQyxvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIsS0FBSyxtQ0FBbUMsa0JBQWtCLEtBQUssMkNBQTJDLG1CQUFtQixLQUFLLG1DQUFtQyw0QkFBNEIsK0JBQStCLHdDQUF3QyxPQUFPLCtCQUErQixzQkFBc0IsT0FBTyw4QkFBOEIsc0JBQXNCLDRCQUE0QixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixPQUFPLGtDQUFrQyxzQkFBc0IsV0FBVyxTQUFTLHVCQUF1QixxRkFBcUYsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLHlCQUF5QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sc0NBQXNDLHNCQUFzQixpQkFBaUIsb0JBQW9CLGdFQUFnRSx5QkFBeUIsaUJBQWlCLGtCQUFrQixpQ0FBaUMsNkNBQTZDLEtBQUssd0JBQXdCLG1DQUFtQyw2Q0FBNkMsS0FBSyxvQkFBb0IscUJBQXFCLHNCQUFzQixLQUFLLDJCQUEyQixtQkFBbUIsc0JBQXNCLGdCQUFnQixLQUFLLG1CQUFtQixpREFBaUQsdUJBQXVCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsS0FBSyxzQkFBc0IseUJBQXlCLDBCQUEwQixLQUFLLDhCQUE4QixvQkFBb0IseUJBQXlCLG1CQUFtQixjQUFjLGVBQWUsa0JBQWtCLGdDQUFnQyxrQ0FBa0MsS0FBSyxxQ0FBcUMsa0JBQWtCLEtBQUsscUJBQXFCLDRCQUE0QixvQkFBb0IsS0FBSyx5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLEtBQUsscUJBQXFCLGlCQUFpQiwwQkFBMEIseUJBQXlCLEtBQUssaUJBQWlCLG9CQUFvQixXQUFXLGlCQUFpQixtQkFBbUIsdUNBQXVDLG1EQUFtRCwyQkFBMkIsZ0NBQWdDLGdEQUFnRCxzQkFBc0Isc0JBQXNCLG1CQUFtQixrQkFBa0IsZ0VBQWdFLG9CQUFvQixLQUFLLDJCQUEyQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIsS0FBSyxxQkFBcUIsa0JBQWtCLEtBQUssNkJBQTZCLG1CQUFtQixLQUFLLG1DQUFtQyxjQUFjLCtCQUErQix3Q0FBd0MsT0FBTyxpQkFBaUIsc0JBQXNCLE9BQU8sZ0JBQWdCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsT0FBTyxvQkFBb0Isc0JBQXNCLFdBQVcsU0FBUyxtQ0FBbUM7QUFDcnBOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzPzdlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5IZWFkZXJfaGVhZGVyX18wNzJ2MiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBtYXJnaW46IDA7IFxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDIwJSAyMCUgYXV0byBhdXRvIGF1dG8gYXV0byA1JTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGhlaWdodDogOCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgrOCUpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfaGVhZGVyX18wNzJ2Mi5IZWFkZXJfaGlkZGVuX19Lb2RKRiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfaGVhZGVyX18wNzJ2MiBoMSB7XFxyXFxuICBjb2xvcjogI2E4MDAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLkhlYWRlcl9oZWFkZXJfXzA3MnYyIGgye1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyX2dyaWRpdGVtX19GUmk3SCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIm1vYnktbW9ub3NwYWNlXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfZ3JpZGl0ZW1fX0ZSaTdIIGgxIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50OyBcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9ncmlkaXRlbV9fRlJpN0ggaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTJweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczMTAxMDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9ncmlkaXRlbV9fRlJpN0ggaDE6aG92ZXI6OmJlZm9yZSB7IFxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfZ3JpZGl0ZW1fX0ZSaTdIIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6aW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9pbWFnZUNvbnRhaW5lcl9fN040NEUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9yb3VuZEltYWdlX18xU1pWXyB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47ICBcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9tb2JpbGVfX1ZfblJ5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBcXHJcXG59XFxyXFxuLkhlYWRlcl9tb2JpbGVfX1ZfblJ5IGltZyB7XFxyXFxuICB3aWR0aDogNjAlOyAgXFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlOyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciBzbW9vdGggcm90YXRpb24gKi9cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9tb2JpbGVfX1ZfblJ5OmhvdmVyIGltZyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IC8qIFJvdGF0ZSB0aGUgaW1hZ2UgMTgwIGRlZ3JlZXMgb24gaG92ZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9tb2JpbGUtbWVudV9fR1VhUGEge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAyMCUgYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uSGVhZGVyX21vYmlsZS1tZW51LWl0ZW1fX1ZIN0xzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5IZWFkZXJfeC1jb250YWluZXJfX3NNS0hXIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogODAlO1xcclxcbn1cXHJcXG4uSGVhZGVyX3gtY29udGFpbmVyX19zTUtIVyBpbWd7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLkhlYWRlcl9pY29uLWNvbnRhaW5lcl9fMXJsbXQgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAuSGVhZGVyX2hlYWRlcl9fMDcydjJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIGF1dG87XFxyXFxuICB9XFxyXFxuICAuSGVhZGVyX2dyaWRpdGVtX19GUmk3SCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuSGVhZGVyX21vYmlsZV9fVl9uUnkgIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuSGVhZGVyX21vYmlsZS1tZW51X19HVWFQYSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IseURBQXlEO0VBQ3pELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7Ozs7QUFJQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLCtCQUErQixFQUFFLHlDQUF5Qzs7QUFFNUU7O0FBRUE7RUFDRSx3QkFBd0IsRUFBRSwwQ0FBMEM7QUFDdEU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBeUQ7RUFDekQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhOztFQUVmOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbWFyZ2luOiAwOyBcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAyMCUgMjAlIGF1dG8gYXV0byBhdXRvIGF1dG8gNSU7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBoZWlnaHQ6IDglO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKzglKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLmhpZGRlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgY29sb3I6ICNhODAwMDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXIgaDJ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5ncmlkaXRlbSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIm1vYnktbW9ub3NwYWNlXFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ncmlkaXRlbSBoMSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7IFxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZGl0ZW0gaDE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTJweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczMTAxMDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRpdGVtIGgxOmhvdmVyOjpiZWZvcmUgeyBcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZGl0ZW0gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjppbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kSW1hZ2Uge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuOyAgXFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIFxcclxcbn1cXHJcXG4ubW9iaWxlIGltZyB7XFxyXFxuICB3aWR0aDogNjAlOyAgXFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlOyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciBzbW9vdGggcm90YXRpb24gKi9cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZTpob3ZlciBpbWcge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAvKiBSb3RhdGUgdGhlIGltYWdlIDE4MCBkZWdyZWVzIG9uIGhvdmVyICovXFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbWVudSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDIwJSBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbWVudS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi54LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcXHJcXG59XFxyXFxuLngtY29udGFpbmVyIGltZ3tcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jb250YWluZXIgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSBhdXRvO1xcclxcbiAgfVxcclxcbiAgLmdyaWRpdGVtIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5tb2JpbGUgIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAubW9iaWxlLW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18wNzJ2MlwiLFxuXHRcImhpZGRlblwiOiBcIkhlYWRlcl9oaWRkZW5fX0tvZEpGXCIsXG5cdFwiZ3JpZGl0ZW1cIjogXCJIZWFkZXJfZ3JpZGl0ZW1fX0ZSaTdIXCIsXG5cdFwiaW1hZ2VDb250YWluZXJcIjogXCJIZWFkZXJfaW1hZ2VDb250YWluZXJfXzdONDRFXCIsXG5cdFwicm91bmRJbWFnZVwiOiBcIkhlYWRlcl9yb3VuZEltYWdlX18xU1pWX1wiLFxuXHRcIm1vYmlsZVwiOiBcIkhlYWRlcl9tb2JpbGVfX1ZfblJ5XCIsXG5cdFwibW9iaWxlLW1lbnVcIjogXCJIZWFkZXJfbW9iaWxlLW1lbnVfX0dVYVBhXCIsXG5cdFwibW9iaWxlLW1lbnUtaXRlbVwiOiBcIkhlYWRlcl9tb2JpbGUtbWVudS1pdGVtX19WSDdMc1wiLFxuXHRcIngtY29udGFpbmVyXCI6IFwiSGVhZGVyX3gtY29udGFpbmVyX19zTUtIV1wiLFxuXHRcImljb24tY29udGFpbmVyXCI6IFwiSGVhZGVyX2ljb24tY29udGFpbmVyX18xcmxtdFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Header.module.css\n"));

/***/ })

});