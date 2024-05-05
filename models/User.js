const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model('User', User);