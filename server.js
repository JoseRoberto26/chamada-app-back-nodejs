const express  = require('express');
const parser = require('body-parser');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
app.use(parser.urlencoded({extended:false}));
app.use(express.json({strict: true}));
app.use(cors());

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(port, () => {
    console.log("Listening at :3001...");
});

// -> agregação: database collections NÃO TEM REFERENCIAS(FOREIGN KEYS, CONSTRAINTS)