const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true }, { useUnifiedTopology: true });
module.exports = db;
