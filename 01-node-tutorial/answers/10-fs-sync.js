const { readFileSync, writeFileSync } = require('fs');

// Write 3 lines to the file, appending each line after the first one
writeFileSync('./temporary/fileA.txt', 'Hi!\n');
writeFileSync('./temporary/fileA.txt', 'My name is Lena.\n', { flag: 'a' });
writeFileSync('./temporary/fileA.txt', 'I live in CA.', { flag: 'a' });

// Read the file synchronously
const content = readFileSync('./temporary/fileA.txt', 'utf8');

// Log the contents of the file to the console
console.log(content);