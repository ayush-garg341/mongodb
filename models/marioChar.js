const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

// 'mariochar' is the name of the collection.

module.exports = MarioChar;