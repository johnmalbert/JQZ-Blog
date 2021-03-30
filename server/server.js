const express = require('express');
const cors = require('cors');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.use(express.json({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({extended: true}));

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/routes.js')(app);

app.listen(8000, () => console.log("Server is up and running on port 8000"));