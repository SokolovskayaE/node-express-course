const EventEmitter = require("events");

// Create EventEmitter
const emitter = new EventEmitter();

// Define event handler for "notify" event
emitter.on("notify", (message) => console.log(`Notification: ${message}`));

// Function to emit "notify" event with a parameter after a delay
async function emitWithDelay(message) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // delay of 2000 
    emitter.emit("notify", message);
}

// Emit "notify" with a 2-second delay before each:
(async () => {
    await emitWithDelay("New email received.");
    await emitWithDelay("Reminder! Meeting at 2 PM.");
})();

// Emit "notify" event with a parameter
//emitter.emit("notify", "New email received");
//emitter.emit("notify", "Reminder! Meeting at 2 PM");