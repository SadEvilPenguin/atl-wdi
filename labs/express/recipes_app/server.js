//your code here
const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: true
}));

const recipeController = require('./controllers/recipes.js');
app.use('/recipes', recipeController)

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot recipes on port', port, "//", new Date());
});