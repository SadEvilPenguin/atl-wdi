const express = require('express');
const router = express.Router();

const creditsData = require('../data/credits');

router.get('/', (request, response) => {
    response.send(creditsData);
});

router.post('/', (req, res) => {
    const newCredit = req.body
    creditsData.push(newCredit)
    res.send(creditsData)
})

module.exports = router;