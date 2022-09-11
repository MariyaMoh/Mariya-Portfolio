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
exports.id = "pages/api/email";
exports.ids = ["pages/api/email"];
exports.modules = {

/***/ "mailgun-js":
/*!*****************************!*\
  !*** external "mailgun-js" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mailgun-js");

/***/ }),

/***/ "(api)/./pages/api/email.js":
/*!****************************!*\
  !*** ./pages/api/email.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst mg = __webpack_require__(/*! mailgun-js */ \"mailgun-js\");\nconst mailgun = ()=>mg({\n        key: \"1f0df2402932469fbf82576ca653d548-07a637b8-6fbf777c\",\n        domain: \"1sandbox9011d08e70e4426aa0582055b64dff27.mailgun.org\"\n    })\n;\nfunction handler(req, res) {\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n    const { messsage , email  } = req.body;\n    mailgun().messages().send({\n        from: \"Mariya <alshaibi199732@gmail.com>\",\n        to: `${email}`,\n        html: `<p>${messsage}</p>`\n    }, (error, body)=>{\n        if (error) {\n            console.log(error);\n            res.status(500).send({\n                messsage: \"error in sending email\"\n            });\n        } else {\n            console.log(body);\n            res.send({\n                messsage: \"email sent successfully\"\n            });\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsOEJBQVksQ0FBQztBQUVoQyxNQUFNQyxPQUFPLEdBQUcsSUFDZEYsRUFBRSxDQUFDO1FBQ0RHLEdBQUcsRUFBRSxvREFBb0Q7UUFDekRDLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0QsQ0FBQztBQUFDO0FBRVUsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4Q0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtLQUFFLENBQUMsQ0FBQztJQUMzQyxNQUFNLEVBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtJQUVwQ1gsT0FBTyxFQUFFLENBQ05ZLFFBQVEsRUFBRSxDQUNWQyxJQUFJLENBQ0g7UUFDRUMsSUFBSSxFQUFFLG1DQUFtQztRQUN6Q0MsRUFBRSxFQUFFLENBQUMsRUFBRUwsS0FBSyxDQUFDLENBQUM7UUFDZE0sSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFUCxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQzNCLEVBQ0QsQ0FBQ1EsS0FBSyxFQUFFTixJQUFJLEdBQUs7UUFDZixJQUFJTSxLQUFLLEVBQUU7WUFDVEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CWixHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFSixRQUFRLEVBQUUsd0JBQXdCO2FBQUUsQ0FBQyxDQUFDO1NBQzlELE1BQU07WUFDTFMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUksQ0FBQyxDQUFDO1lBQ2xCTixHQUFHLENBQUNRLElBQUksQ0FBQztnQkFBRUosUUFBUSxFQUFFLHlCQUF5QjthQUFFLENBQUMsQ0FBQztTQUNuRDtLQUNGLENBQ0YsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9lbWFpbC5qcz84OTIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1nID0gcmVxdWlyZSgnbWFpbGd1bi1qcycpO1xyXG5cclxuY29uc3QgbWFpbGd1biA9ICgpID0+XHJcbiAgbWcoe1xyXG4gICAga2V5OiAnMWYwZGYyNDAyOTMyNDY5ZmJmODI1NzZjYTY1M2Q1NDgtMDdhNjM3YjgtNmZiZjc3N2MnLFxyXG4gICAgZG9tYWluOiAnMXNhbmRib3g5MDExZDA4ZTcwZTQ0MjZhYTA1ODIwNTViNjRkZmYyNy5tYWlsZ3VuLm9yZycsXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pO1xyXG4gIGNvbnN0IHsgbWVzc3NhZ2UsIGVtYWlsIH0gPSByZXEuYm9keTtcclxuXHJcbiAgbWFpbGd1bigpXHJcbiAgICAubWVzc2FnZXMoKVxyXG4gICAgLnNlbmQoXHJcbiAgICAgIHtcclxuICAgICAgICBmcm9tOiAnTWFyaXlhIDxhbHNoYWliaTE5OTczMkBnbWFpbC5jb20+JyxcclxuICAgICAgICB0bzogYCR7ZW1haWx9YCxcclxuICAgICAgICBodG1sOiBgPHA+JHttZXNzc2FnZX08L3A+YCxcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yLCBib2R5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NzYWdlOiAnZXJyb3IgaW4gc2VuZGluZyBlbWFpbCcgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgICAgcmVzLnNlbmQoeyBtZXNzc2FnZTogJ2VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1nIiwicmVxdWlyZSIsIm1haWxndW4iLCJrZXkiLCJkb21haW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJtZXNzc2FnZSIsImVtYWlsIiwiYm9keSIsIm1lc3NhZ2VzIiwic2VuZCIsImZyb20iLCJ0byIsImh0bWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/email.js"));
module.exports = __webpack_exports__;

})();