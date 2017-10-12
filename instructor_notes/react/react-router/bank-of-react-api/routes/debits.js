const express = require('express');
const router = express.Router();

const debitsData = require('../data/debits');

router.get('/', (request, response) => {
    response.send(debitsData);
})

router.post('/', (req, res) => {
    const newDebit = req.body
    debitsData.push(newDebit)
    res.send(debitsData)
})
module.exports = router;