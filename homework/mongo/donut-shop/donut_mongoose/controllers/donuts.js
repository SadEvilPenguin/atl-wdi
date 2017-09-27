//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express')
const router = express.Router()
const Donut = require("../models/donuts.js")

const DonutModel = Donut.DonutModel

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req, res) => {
    DonutModel.find({})
        .then((donuts) => {
            res.render('donuts/index', {
                donuts
            })
        })
        .catch((err) => {
            res.send(err);
        })
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (req, res) => {
    res.render('donuts/new')
})



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get("/:id", (req, res) => {
    const donutId = req.params.id

    DonutModel.findById(donutId)
        .then((donut) => {
            res.render('donuts/show', {
                donut
            })
        })
        .catch((err) => {
            res.send(err);
        })
})



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (req, res) => {
    const newDonut = req.body
    DonutModel.create(newDonut)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err);
        })
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it

router.get("/:id/edit", (req, res) => {

    const donutId = req.params.id
    DonutModel.findById(donutId)
        .then((donut) => {
            res.render('donuts/edit', {
                donut
            })
        })
        .catch((err) => {
            res.send(err);
        })
})

//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)

router.put('/:id', (req, res) => {
    const updatedDonut = req.body
    const donutId = req.params.id
    DonutModel.findByIdAndUpdate(donutId, updatedDonut, { new: true })
        .then(() => {
            res.redirect(`/${donutId}`)
        })
        .catch((err) => {
            res.send(err);
        })

})

//======================
//Buy route
//======================
router.get('/:id/buy', (req, res) => {
    const donutId = req.params.id
    DonutModel.findByIdAndUpdate(donutId, { $inc: { qty: (-1) } }, { new: true })
        .then(() => {
            res.redirect(`/${donutId}`)
        })
        .catch((err) => {
            res.send(err);
        })
})



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"

router.delete('/:id', (req, res) => {
    const donutId = req.params.id
    DonutModel.findByIdAndRemove(donutId)
        .then((donut) => {
            res.redirect('/');
        })
        .catch((err) => {
            res.send(err);
        })
})

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router