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
    let id = req.params.id
    let pirate = pirates[req.params.id]
    res.render('show', {
        pirate: pirate,
        id: id
    })
});

//For new Pirate
router.post('/', (req, res) => {
    const newPirate = req.body
    pirates.push(newPirate);
    res.redirect('/pirates');
})

//To Edit Pirate
router.get('/:id/edit', function(req, res) {
    res.render('edit', {
        pirate: {
            id: req.params.id,
            name: pirates[req.params.id].name,
            birthplace: pirates[req.params.id].birthplace,
            death_year: pirates[req.params.id].death_year,
            base: pirates[req.params.id].base,
            nickname: pirates[req.params.id].nickname
        }
    });
});

router.put('/:id', function(req, res) {
    let id = req.params.id;
    let pirateToEdit = pirates[req.params.id];

    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;

    res.redirect(`/pirates/${id}`);
});

//Delete ToDo
router.delete('/:id', function(req, res) {
    pirates.splice(req.params.id, 1); // remove the item from the array
    res.redirect('/pirates'); // redirect back to the index route
});

router.get('/', function(req, res) {

    res.render('index', {
        pirate: pirates
    });
});

//exports
module.exports = router;