const http = require("http");
const server = http.createServer((req, res) => {
  if (req == "POST") {
    let body = "";
    //This event allows you to handle the incoming data in chunks.
    req.on("data", (chunk) => {
      body += chunk.toSring();
    });
    //This event listener is triggered when the entire request has been received
    req.on("end", () => {
      console.log(body);
      res.end("Data is received");
    });
  }
  res.end("Welcome to Events in NodeJs");
});
server.listen("8000", (err) => {
  if (err) console.log(err);

  console.log("Server is running on port 8000");
});
