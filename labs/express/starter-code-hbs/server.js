/* packages */
const path = require('path');
const logger = require('morgan');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

/* app settings*/
const app = express();
const port = process.env.PORT || 3000;
/* set up the application params*/

// log
app.use(logger('dev'));

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