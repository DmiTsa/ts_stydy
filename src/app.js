"use strict";
exports.__esModule = true;
var http_1 = require("http");
var getController_1 = require("./controllers/getController");
var port = 4000;
// console.log(createServer, IncomingMessage, ServerResponse);
var server = (0, http_1.createServer)(function (request, response) {
    switch (request.method) {
        case 'GET':
            (0, getController_1["default"])(request, response);
            break;
        default:
            response.statusCode = 500;
            response.write("Error 500: request type ".concat(request.method, " is not supported"));
            response.end();
            break;
    }
});
server.listen(port, function () {
    console.log("Server running at port: ".concat(port));
});
