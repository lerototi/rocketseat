const express = require('express');
const mongoose =  require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omministack:1234@cluster0-sd7kl.mongodb.net/omministrack8?retryWrites=true&w=majority', {
    useNewUrlParser: true}
);

server.use(express.json());
server.use(routes);

server.listen(3333);

