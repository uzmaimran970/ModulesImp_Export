"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var demo1_1 = require("./demo1");
var demo1_2 = require("./demo1");
var demo2_1 = require("./demo2");
var demo3_1 = require("./demo3");
var demo3_2 = require("./demo3");
(0, demo1_1.myfunction)(); //import from demo1
(0, demo1_2.namefunc)("uzma"); //import from demo1
var response = (0, demo2_1.calculation)(10, 10); //import from demo2
console.log(response);
console.log(demo3_1.myName); //import from demo3
console.log(demo3_2.arr); //import from demo3
