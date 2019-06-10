const express  = require('express');
const parser = require('body-parser');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
app.use(parser);


requireDir('./src/models');


app.use('/api', require('./src/routes'));


app.listen(port, () => {
    console.log("Listening at :3001...");
});