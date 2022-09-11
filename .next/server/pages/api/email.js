"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 6714:
/***/ ((module) => {

module.exports = require("mailgun-js");

/***/ }),

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const mg = __webpack_require__(6714);
const mailgun = ()=>mg({
        key: "1f0df2402932469fbf82576ca653d548-07a637b8-6fbf777c",
        domain: "1sandbox9011d08e70e4426aa0582055b64dff27.mailgun.org"
    })
;
function handler(req, res) {
    res.status(200).json({
        name: "John Doe"
    });
    const { messsage , email  } = req.body;
    console.log(req.body);
    mailgun().messages().send({
        from: "Mariya <alshaibi199732@gmail.com>",
        to: `${email}`,
        html: `<p>${messsage}</p>`
    }, (error, body)=>{
        if (error) {
            console.log(error);
            res.status(500).send({
                messsage: "error in sending email"
            });
        } else {
            console.log(body);
            res.send({
                messsage: "email sent successfully"
            });
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7492));
module.exports = __webpack_exports__;

})();