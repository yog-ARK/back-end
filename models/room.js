const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    no: {
        type: Number,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;