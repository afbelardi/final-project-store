const { Schema, model } = require('mongoose');

const photoSchema = new Schema({
    title: String,
    price: String,
    image: String
});


//model 

const Photo = model('Photo', photoSchema);

module.exports = Photo;