const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost');
module.exports = db;
