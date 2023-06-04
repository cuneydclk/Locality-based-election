const mongoose = require('mongoose');

// Create a schema for the district object
const districtSchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        trim: true
    },
    districtName: {
        type: String,
        required: true,
        trim: true
    },
    voteBox: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VoteBox'
    }]
});

const District = mongoose.model('District', districtSchema);

module.exports = District;