var port = process.env.PORT || 8000;

var http = require("http");

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello World!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(port);