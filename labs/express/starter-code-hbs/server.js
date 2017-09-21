/* packages */
const path = require('path');
const logger = require('morgan');
const express = require('express');
//handlebar
const hbs = require('hbs');
//for grabing from a form
const bodyParser = require('body-parser');
//for deleting
const methodOverride = require('method-override');


/* app settings*/
const app = express();
const port = process.env.PORT || 3000;

//method Overrride
app.use(methodOverride('_method'));
// log
app.use(logger('dev'));
//bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req, res) {
    res.send('This is our Home Page');
});


const toDoController = require('./controllers/todo.js');
app.use("/todos", toDoController);

// Start server
app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot todos on port', port, "//", new Date());
});