const mongoose = require('mongoose');

const exploreSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
},
    {
        timestamps: true
    }
);

const Explore = mongoose.model('Explore', exploreSchema);

module.exports = Explore;