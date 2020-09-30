const mongoose = require ('mongoose');

const lamboSchema = new mongoose.Schema ({
    Image: String, 
    Model: String,
    Year: Number,
    Color: String,
    Price: Number,
    Stock: Number,
});

const Lambo = mongoose.model('Lambo', lamboSchema);

module.exports = Lambo;