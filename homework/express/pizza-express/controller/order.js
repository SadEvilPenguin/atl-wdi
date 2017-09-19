const express = require('express');
const router = express.Router();


router.get('/:amount/:size', (req, res) => {
    let amount = req.params.amount;
    let size = req.params.size;

    res.render('order', {
        order: `Your order for ${amount} ${size} pizzas will be ready in 1 minute!`
    })
});


module.exports = router;