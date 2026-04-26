const http = require("node:http");
const fs = require("node:fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/favicon.ico" || req.url.includes("well-known"))
    return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end(`Hi! I am ${myUrl.query.username}`);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is sign up form");
        else if (req.method === "POST") {
          //db query
          res.end("success");
        }
      default:
        res.end("404 page not found");
        break;
    }
  });
});

myServer.listen(8000, () => console.log("Server Started!!"));
