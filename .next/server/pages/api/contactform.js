"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contactform";
exports.ids = ["pages/api/contactform"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "(api)/./pages/api/contactform.tsx":
/*!***********************************!*\
  !*** ./pages/api/contactform.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import { toast, ToastContainer } from \"react-toastify\";\n// import \"react-toastify/dist/ReactToastify.css\";\n\nfunction App() {\n    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const submitHandler = async (e1)=>{\n        console.log(email, message);\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/api/email`, {\n            email,\n            message\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"message\",\n                            children: \"your message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: (e)=>setMessage(e.target.value)\n                            ,\n                            type: \"text\",\n                            id: \"message\",\n                            name: \"message\",\n                            placeholder: \"I want to talk to you\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Your email\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: (e)=>setEmail(e.target.value)\n                            ,\n                            type: \"email\",\n                            id: \"email\",\n                            name: \"email\",\n                            placeholder: \"example@gmail.com\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mariya ALShaaibi\\\\Downloads\\\\Final-Project-Personal-Website-main (1)\\\\Final-Project-Personal-Website-main\\\\pages\\\\api\\\\contactform.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this);\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdGZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUN4QywwREFBMEQ7QUFDMUQsa0RBQWtEO0FBQ3hCO0FBRTFCLFNBQVNFLEdBQUcsR0FBRztJQUNiLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR0oscURBQWMsQ0FBQyxFQUFFLENBQUM7SUFDNUMsTUFBTSxDQUFDTSxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHUCxxREFBYyxDQUFDLEVBQUUsQ0FBQztJQUVoRCxNQUFNUSxhQUFhLEdBQUcsT0FBT0MsRUFBTSxHQUFLO1FBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsS0FBSyxFQUFFRyxPQUFPLENBQUMsQ0FBQztRQUM1QixNQUFNTSxJQUFJLEdBQUcsTUFBTVgsaURBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDRSxLQUFLO1lBQ0xHLE9BQU87U0FDUixDQUFDO1FBRUYscUJBQ0UsOERBQUNRLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7c0JBQ2xCLDRFQUFDRCxLQUFHOzBCQUNGLDRFQUFDRSxNQUFJO29CQUFDQyxRQUFRLEVBQUVULGFBQWE7O3NDQUMzQiw4REFBQ1UsT0FBSzs0QkFBQ0MsT0FBTyxFQUFDLFNBQVM7c0NBQUMsY0FBWTs7Ozs7Z0NBQVE7c0NBQzdDLDhEQUFDQyxPQUFLOzRCQUNKQyxRQUFRLEVBQUUsQ0FBQ1osQ0FBQyxHQUFLRixVQUFVLENBQUNFLENBQUMsQ0FBQ2EsTUFBTSxDQUFDQyxLQUFLLENBQUM7NEJBQUE7NEJBQzNDQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsRUFBRSxFQUFDLFNBQVM7NEJBQ1pDLElBQUksRUFBQyxTQUFTOzRCQUNkQyxXQUFXLEVBQUMsdUJBQXVCOzs7OztnQ0FDbkM7c0NBQ0YsOERBQUNULE9BQUs7NEJBQUNDLE9BQU8sRUFBQyxPQUFPO3NDQUFDLFlBQVU7Ozs7O2dDQUFRO3NDQUN6Qyw4REFBQ0MsT0FBSzs0QkFDSkMsUUFBUSxFQUFFLENBQUNaLENBQUMsR0FBS0wsUUFBUSxDQUFDSyxDQUFDLENBQUNhLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDOzRCQUFBOzRCQUN6Q0MsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLEVBQUUsRUFBQyxPQUFPOzRCQUNWQyxJQUFJLEVBQUMsT0FBTzs0QkFDWkMsV0FBVyxFQUFDLG1CQUFtQjs0QkFDL0JDLFFBQVE7Ozs7O2dDQUNSO3NDQUVGLDhEQUFDQyxRQUFNOzRCQUFDTCxJQUFJLEVBQUMsUUFBUTs7Ozs7Z0NBQVU7Ozs7Ozt3QkFDMUI7Ozs7O29CQUNIOzs7OztnQkFDRixDQUNOO0tBQ0g7Q0FDRjtBQUNELGlFQUFldEIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9jb250YWN0Zm9ybS50c3g/MWNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG4vLyBpbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwsIG1lc3NhZ2UpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvZW1haWxgLCB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj55b3VyIG1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkkgd2FudCB0byB0YWxrIHRvIHlvdVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIGVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkFwcCIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0SGFuZGxlciIsImUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contactform.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contactform.tsx"));
module.exports = __webpack_exports__;

})();