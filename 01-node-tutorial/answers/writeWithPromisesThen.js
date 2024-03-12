const { writeFile, readFile } = require("fs").promises;

// Writing 3 lines to the file using .then:
writeFile("temp.txt", "Line 1\n")
    .then(() => {
        return writeFile("temp.txt", "Line 2\n", { flag: 'a' }); 
    })
    .then(() => {
        return writeFile("temp.txt", "Line 3", { flag: 'a' });
    })
    .then(() => {
        return readFile("temp.txt", "utf8");
    })
    .then((data) => {
        console.log("Data:", data); // Log the data to the screen
    })
    .catch((error) => {
        console.log("An error occurred: ", error);
    });