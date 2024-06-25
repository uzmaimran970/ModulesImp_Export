"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namefunc = exports.myfunction = void 0;
function myfunction() {
    console.log("hello world");
}
exports.myfunction = myfunction;
var namefunc = function (val) {
    console.log("hello" + "" + val);
};
exports.namefunc = namefunc;
