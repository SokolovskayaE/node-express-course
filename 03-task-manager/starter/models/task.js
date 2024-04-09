const mongoose = require ('mongoose');

// Defines the structure of the documents within a collection in MongoDB
const TaskSchema = new mongoose.Schema({
 name:String,
 completed:Boolean,
})

module.exports = mongoose.model('Task', TaskSchema)