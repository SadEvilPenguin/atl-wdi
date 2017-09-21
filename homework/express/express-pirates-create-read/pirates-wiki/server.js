//your code here
const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

const pirateController = require('./controllers/pirates.js');


app.use("/pirates", pirateController);

const port = process.env.PORT || 3000;


app.listen(port, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});