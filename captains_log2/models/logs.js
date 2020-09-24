const mongoose = require ('mongoose');

const logSchema = new mongoose.Schema ({
    Image: String,
    Model: String,
    Year: Number,
    Color: String, 
    Price: Number,
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;