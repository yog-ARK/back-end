const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    titled: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
},
    {
        timestamps: true
    }
);

const About = mongoose.model('About', aboutSchema);

module.exports = About;