var fs = require("fs");
var http = require("http");

function handleRequest(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  fs.readFile("./index.html", null, function(err, data) {
    if (err) {
      res.writeHead(404);
      res.write("Error! File not found!");
    } else {
      res.write(data);
    }
    res.end();
  });
  req.on("data", function(data) {
    var decodedData = decodeURI(data)
      .replace(/\+/, " ")
      .replace("message=", "");
    fs.writeFile("./message.txt", decodedData, function(err) {
      if (err) throw err;
    });
  });
}
http.createServer(handleRequest).listen(8080);
