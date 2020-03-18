const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./config/routes');

const app = express();

mongoose.connect('mongodb+srv://samantha:admin@cluster-c63ap.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());
app.use(routes);

app.listen(3333);