const fs = require("fs");
const path = require("path");

//for mac the paths forms using / slashes
//for windows it is \

// to resolve the conflicts for cross platform paths.
try {
  fs.writeFileSync("src/home/path.txt", "using for path module");
} catch (err) {
  console.log(err);
}
console.log("From path module ");

//we could use
//--  relative path
console.log(path.join("src", "home", "data.txt"));
//--output src\home\data.txt

//-- absolute path
console.log(path.resolve("src", "home", "data.txt"));
//-- output  C:\Users\ashro\Desktop\javaScript\NodeJs\module2\src\home\data.txt
