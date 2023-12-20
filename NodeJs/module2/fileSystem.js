const fs = require("fs");

// Async task: Reading a file
fs.readFile("data.txt", (err, data) => {
  if (err) console.log(err);

  // Here, 'data' is a Buffer (raw binary storage format)
  console.log("Buffer:", data);

  // Convert the Buffer to a string assuming the file contains text
  console.log("Converted to String:", data.toString());
});

// Log statement outside the async task
console.log("Another operation");

// Blocking (synchronous) task
(() => {
  // Read file synchronously and receive as a Buffer
  const buffer = fs.readFileSync("data.txt");
  console.log("Synchronous Read (Buffer):", buffer);

  // Convert the Buffer to a string
  console.log("Synchronous Read (Converted to String):", buffer.toString());

  // Read file synchronously with encoding specified
  const data = fs.readFileSync("data.txt", { encoding: "utf-8" });
  console.log("Synchronous Read with Encoding (String):", data);

  console.log("Another operation");
})();

// Creating a file
try {
  fs.writeFileSync("employee.txt", "Name:John Doe\nAge:25\nPlace:Delhi");
} catch (err) {
  console.log(err);
}

// Appending to an existing file
fs.appendFileSync("data.txt", "\nName:John Doe\nAge:25\nPlace:Delhi");

// Async task: Reading file line by line
const { open } = require("node:fs/promises");

(async () => {
  // Open the file
  const file = await open("data.txt");

  // Read the file line by line
  for await (const line of file.readLines()) {
    console.log("Line:", line);
  }
})();

// Deleting a file
fs.unlinkSync("employee.txt");
