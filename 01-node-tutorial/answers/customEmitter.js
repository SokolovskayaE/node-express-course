const EventEmitter = require("events");

// Create EventEmitter
const emitter = new EventEmitter();

// Define event handler for "notify" event
emitter.on("notify", (message) => console.log(`Notification: ${message}`));

// Emit "notify" event with a parameter
emitter.emit("notify", "New email received");
emitter.emit("notify", "Reminder! Meeting at 2 PM");