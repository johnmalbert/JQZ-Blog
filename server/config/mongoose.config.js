const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jqzblog', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB is connected!"))
    .catch((err => console.log("Error connecting to DB", err)));