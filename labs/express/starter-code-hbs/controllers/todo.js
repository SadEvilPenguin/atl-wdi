const express = require("express");
const router = express.Router();
const data = require('../models/data.js');

/* INDEX TODOS */
router.get('/', (req, res) => {
    let = total = data.seededTodos.length;

    res.render('todos/index', {
        todos: data.seededTodos,
        total: total
    });
});

router.get('/new', (req, res) => {
    res.render('todos/new');
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];

    if (!todo) {
        res.render('todos/show', {
            error: "No Todo found with this id"
        })
    } else
        res.render('todos/show', {
            todo: todo
        });
});

router.post('/', (req, res) => {
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
})

module.exports = router;