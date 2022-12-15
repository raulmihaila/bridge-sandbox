"use strict";
exports.__esModule = true;
var bridge_1 = require("bridge");
var zod_1 = require("zod");
var express = require('express');
var app = express();
var helloHandler = (0, bridge_1.handler)({
    body: zod_1.z.object({}),
    resolve: function () {
        return "Hello worldddd";
    }
});
var router = {
    hello: helloHandler
};
var bridge = (0, bridge_1.initBridge)({
    routes: router
});
app.use('', bridge.expressMiddleware);
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080));
});
