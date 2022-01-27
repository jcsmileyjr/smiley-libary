let http = require("http");
let books = require("./optimizeData");

let data = {};
data.library = books.getBooks();
console.log(data.library);

http
  .createServer(function (request, response) {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(8080);
