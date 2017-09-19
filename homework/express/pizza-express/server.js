const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
const rootController = require('./controller/root.js');
const toppingController = require('./controller/topping.js');
const orderController = require('./controller/order.js');

app.use('/', rootController);
app.use('/topping', toppingController);
app.use('/order', orderController);



const port = process.env.PORT || 3000;


app.listen(port, function() {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});