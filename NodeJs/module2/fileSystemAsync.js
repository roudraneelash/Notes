const fs = require("fs");

//writing file
fs.writeFile("data.txt", "Hello world", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

//append file
fs.appendFile("data.txt", "\nanother query", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// Async task: Reading a file
fs.readFile("data.txt", (err, data) => {
  if (err) console.log(err);
  console.log("Buffer:", data);
  console.log("Converted to String: \n", data.toString());
});

console.log("Another operation");

// Delete file with callback
fs.unlink("data.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully");
});

///to handle diff asyn operations orderly
const fs = require("fs");

const Solution = () => {
  // Append new data to the file
  fs.appendFile("note.txt", "new data", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data updated successfully");

      // Read the file again to render the updated data
      renderUpdatedData();
    }
  });

  // Function to read and render the updated data
  const renderUpdatedData = () => {
    fs.readFile("note.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Rendered Updated Data:", data);
        // You can use the 'data' here to render or display it as needed
      }
    });
  };
};

Solution();
