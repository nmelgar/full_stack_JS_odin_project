//http module
const http = require("http");

//createServer method
// parameters request, respond
http.createServer((req, res) => {
    //whenever the client makes a request to the server
    res.write("Hello world!");
    //end the respond
    res.end()
    //port that will be used
}).listen(3000);



// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);