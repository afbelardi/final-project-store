const { Schema, model } = require('mongoose');

const photoSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    size: String
});


//model 

const Photo = model('Photo', photoSchema);

module.exports = Photo;