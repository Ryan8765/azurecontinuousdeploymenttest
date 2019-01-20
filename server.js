var port = process.env.PORT || 8000;

let appInsights = require("applicationinsights");
appInsights.setup("77e8d08c-4370-418f-96bd-d6f123ffabe3").start();

var http = require("http");
//testing
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello Testing</title>");
    response.write("</head>");
    response.write("<body>");
    response.write(`Hello from test ${process.env.MyParameter}!`);
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(port);