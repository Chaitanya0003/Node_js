const http = require("node:http");
const fs = require("node:fs");

const myServer = http.createServer((req, res) => {
  console.log(req.url);
  const log = `${Date.now()}: ${req.url} New Request Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I am CT");
        break;
      default:
        res.end("404 page not found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server Started!!"));
