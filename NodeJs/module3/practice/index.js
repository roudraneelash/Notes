const http = require("http");
const saveFile = require("./helper");
const handleEmail = require("./helper");
const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    // it will receive user name,email,message
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", async () => {
      res.end("data received");
      // save it in a file named 'queries.txt'
      const { name, email, message } = JSON.parse(data);
      await saveFile({ name, email, message });
      // use nodemail to send an email
      await handleEmail(email);
    });
  }
});

server.listen(PORT, () => {
  console.log("Server is running on Port", PORT);
});
