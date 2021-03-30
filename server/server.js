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

const server = app.listen(8000, () => console.log("Server is up and running on port 8000"));
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server,{cors:true})

io.on("connection", socket => {
    console.log(socket.id);
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    });
});