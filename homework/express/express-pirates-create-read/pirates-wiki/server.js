//your code here
const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));

const pirateController = require('./controllers/pirates.js');


app.use("/pirates", pirateController);

const port = process.env.PORT || 3001;


app.listen(port, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});