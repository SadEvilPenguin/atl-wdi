const express = require('express');
const router = express.Router();
const toDont = require('../models/todont.js');


//Create
router.get('/new', (req, res) => {
    res.render('todonts/new');
});

router.post('/', (req, res) => {
        const newDont = req.body;
        toDont.push(newDont);
        res.redirect('/todonts');
    })
    //Read
router.get('/', (req, res) => {
    res.render('todonts/index', { toDont });
});

router.get("/:id", (req, res) => {
    let id = req.params.id
    let Dont = toDont[id];
    res.render('todonts/show', { Dont, id });
});
//Update
router.get('/:id/edit', (req, res) => {
    res.render('todonts/edit', {
        Dont: {
            id: req.params.id,
            description: toDont[req.params.id].description,
            location: toDont[req.params.id].location,
            urgent: toDont[req.params.id].location
        }
    })
});
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let Dont = toDont[id];
    Dont.description = req.body.description;
    Dont.location = req.body.location;
    Dont.urgent = req.body.urgent;

    res.redirect(`/todonts`);
});

router.delete('/:id', function(req, res) {
    toDont.splice(req.params.id, 1); // remove the item from the array
    res.redirect('/todonts'); // redirect back to the index route
});
router.delete('/:id/edit', function(req, res) {
    toDont.splice(req.params.id, 1); // remove the item from the array
    res.redirect('/todonts'); // redirect back to the index route
});



//exports
module.exports = router;