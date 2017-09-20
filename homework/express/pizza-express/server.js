const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');

const dancing_pizza = require('./views/dancing_pizza.hbs');

hbs.registerPartial('dancing_pizza', dancing_pizza);

app.use(express.static(__dirname + '/public'));
const rootController = require('./controller/root.js');
const toppingController = require('./controller/topping.js');
const orderController = require('./controller/order.js');
const notFoundController = require('./controller/404.js');

app.use('/', rootController);
app.use('/topping', toppingController);
app.use('/order', orderController);
app.use('/', notFoundController);



const port = process.env.PORT || 3000;


app.listen(port, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});