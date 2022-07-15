const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    to: {
        type: String,
        required: [true, 'A text must have a recipient'],
        minLength: 13,
        maxLength: 13
    },
    from: {
        type: String,
        default: "Ronald"
    },
    message: {
        type: String,
        required: [true, 'A text must have a message!']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


const Message = mongoose.model('Messages', messageSchema);

module.exports = Message;