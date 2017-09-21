const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();



app.set("view engine", "hbs");
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

const toDontController = require('./controllers/todont.js');
app.use('/todonts', toDontController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("==========================");
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================");
});