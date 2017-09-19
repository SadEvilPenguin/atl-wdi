const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let greeting = "Welcome to Pizza Express!";

    res.render('index', {
        greeting: greeting
    })
});



module.exports = router;