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

//New Todo
router.get('/new', (req, res) => {
    res.render('todos/new');
})

//individual Todo
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];

    if (!todo) {
        res.render('todos/show', {
            error: "No Todo found with this id"
        })
    } else
        res.render('todos/show', {
            todo: todo,
            id: id
        });
});

//Post New to DB
router.post('/', (req, res) => {
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
});

//Edit individual Todo
router.get('/:id/edit', function(req, res) {
    res.render('todos/edit', {
        todo: {
            id: req.params.id,
            description: data.seededTodos[req.params.id].description,
            location: data.seededTodos[req.params.id].location,
            urgent: data.seededTodos[req.params.id].urgent,
        }
    });
});

router.put('/:id', function(req, res) {
    var todoToEdit = data.seededTodos[req.params.id];

    todoToEdit.description = req.body.description;
    todoToEdit.location = req.body.location;
    todoToEdit.urgent = req.body.urgent;

    res.redirect('/todos');
});

//Delete ToDo
router.delete('/:id', function(req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array
    res.redirect('/todos'); // redirect back to the index route
});

router.get('/', function(req, res) {

    res.render('todos/index', {
        todos: data.seededTodos
    });
});

module.exports = router;