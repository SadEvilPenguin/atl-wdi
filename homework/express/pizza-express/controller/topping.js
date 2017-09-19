const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('topping', {
        topping: `Add your topping to the route`
    })
})

router.get('/:topping', (req, res) => {
    let topping = req.params.topping;
    res.render('topping', {
        topping: `${topping} Pizza, Good Choice!`
    })
});



module.exports = router;