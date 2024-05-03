const mongoose = require ('mongoose');

// Defines the structure of the documents within a collection in MongoDB
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must provide name'],
        trim: true,
        maxlength:[20, 'Name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('Task', TaskSchema)