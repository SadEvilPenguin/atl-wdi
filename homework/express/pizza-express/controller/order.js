const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    res.render('order', {
        order: `Add your order to the route start with amount then Size`
    })
})

router.get('/:amount/:size', (req, res) => {
    let amount = req.params.amount;
    let size = req.params.size;

    res.render('order', {
        order: `Your order for ${amount} ${size} pizzas will be ready in 1 minute!`
    })
});


module.exports = router;