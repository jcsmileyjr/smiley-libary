let http = require("http");
let data = require("./optimizeData");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      JSON.stringify([
        "How to grill burgers",
        "How to grill chicken",
        "How to grill sausages",
        "How to fry fish",
        "How to fry season fries",
        "How to fry chicken",
      ])
    );
    response.end();
  })
  .listen(8080);
