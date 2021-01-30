const mongoose = require('mongoose');

const db = (database) => (
  mongoose.connect(`mongodb://database:27017/${database}`, { useNewUrlParser: true }, { useUnifiedTopology: true })
);
module.exports = db;
