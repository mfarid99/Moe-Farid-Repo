const mongoose = require ('mongoose');

const lamboSchema = new mongoose.Schema ({
    Image: String, 
    Model: String,
    Year: Number,
    Color: String,
    Price: Number,
});

const Lambo = mongoose.model('Lambo', lamboSchema);

module.exports = Lambo;