const express = require("express");
const router = express.Router();
const data = require('../models/recipes.js');

router.get('/', (req, res) => {
    let = total = data.seededRecipes.length;

    res.render('index', {
        recipes: data.seededRecipes,
        total: total
    });
});

router.get('/new', (req, res) => {
    res.render('new');
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const recipe = data.seededRecipes[id];

    if (!recipe) {
        res.render('show', {
            error: "No Todo found with this id"
        })
    } else
        res.render('show', {
            recipe: recipe
        });
});

router.post('/', (req, res) => {
    const newRecipe = req.body;
    data.seededRecipes.push(newRecipe);
    res.redirect('/recipes');
})

module.exports = router;