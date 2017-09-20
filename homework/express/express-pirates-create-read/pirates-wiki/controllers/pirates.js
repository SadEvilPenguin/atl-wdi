//your code below
const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

//all routes for /pirate
//For index location
router.get('/', (req, res) => {

    res.render('index', {
        pirate: pirates
    })
});
//For new page to create pirate
router.get('/new', (req, res) => {

    res.render('new');
});
//For pirate page
router.get('/:id', (req, res) => {
    let pirate = pirates[req.params.id]
    res.render('show', {
        pirate: pirate
    })
});


router.post('/', (req, res) => {
    const newPirate = req.body
    pirates.push(newPirate);
    res.redirect('/pirates');
})

//exports
module.exports = router;