const { writeFile, readFile } = require("fs").promises

// Async function writer
const writer = async () => {
    try {
        // Writing 3 lines to temp.txt
        await writeFile("temp.txt", "Line 1.\nLine 2.\nLine 3.");
        console.log("File was created!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Async function reader
const reader = async () => {
    try {
        // Reading from temp.txt
        const data = await readFile("temp.txt", "utf8");
        console.log("Data from the file:", data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Async function to call first writer and second reader:
const readWrite = async () => {
    await writer(); // Write to file
    await reader(); // Read from file
}

// Call the readWrite function
readWrite();