const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //send a html file as a response
  const data = fs.readFileSync("index.html").toString();
  // console.log(req.url);
  res.write(data);
  // return res.end("welcome to node Js server");
  //error after ending the response , tries to excute another response code
  res.end("welcome to node Js server");
});

server.listen(3100, () => {
  console.log("server is listening on port 3100");
});

// -- res.write vs res.end
// -- send html file as a Response
// -- getting req for favicon
