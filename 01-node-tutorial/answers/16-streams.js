const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 200 });

// The program should initialize a counter to 0
let counter = 0;

// Handle the “data” event for the stream by incrementing the counter and logging the event result to the screen
stream.on('data', (chunk) => {
    counter++;
    //console.log('Chunk received:', chunk);
});

// Handle the “end” event by reporting the number of chunks received.
stream.on('end', () => {
    console.log('Number of chunks received:', counter);
    console.log('Stream ended');
});

// Handle the stream “error” event by logging the error to the console
stream.on('error', (error) => {
    console.error('Error:', error.message);
});