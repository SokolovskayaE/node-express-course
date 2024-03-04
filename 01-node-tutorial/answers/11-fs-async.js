const { writeFile } = require("fs");
console.log("at start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("Error occurred during writing line 1:", err);
  } else {
    console.log("Line 1 written successfully.");
    
    writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: "a" }, (err, result) => {
      console.log("at point 2");
      if (err) {
        console.log("Error occurred during writing line 2:", err);
      } else {
        console.log("Line 2 written successfully");

        writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: "a" }, (err, result) => {
          console.log("at point 3");
          if (err) {
            console.log("Error occurred during writing line 3:", err);
          } else {
            console.log("Line 3 written successfully");
          }
          console.log("at end");
        });
      }
    });
  }
});
