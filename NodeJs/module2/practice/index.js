const fs = require("fs");

try {
  fs.writeFileSync("notes.txt", "The world has enough coders");
} catch (err) {
  console.log(err);
}

let data = fs.readFileSync("notes.txt", { encoding: "utf-8" });
console.log(data);

fs.appendFileSync("notes.txt", "\nBE A CODING NINJA");

data = fs.readFileSync("notes.txt", { encoding: "utf-8" });
console.log(data);
