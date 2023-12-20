const fs = require("fs");
const readLine = require("readline");
const path = require("path");

// --writeBlog;
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Write your blog: \n", (blog) => {
  // console.log(blog);
  rl.question("\nSave blog? y/n ", (consent) => {
    if (consent == "y") {
      fs.writeFile("blog.txt", blog, (err) => {
        if (err) {
          console.log(err);
        }
        rl.question("Publish Blog? y/n ", (consent) => {
          if (consent == "y") {
            fs.readFile("blog.txt", "utf-8", (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log("\nYour Blog:\n", data);
              }
            });
          }
          rl.close();
        });
      });
    } else {
      rl.close();
    }
  });
});

// --publishBlog;
