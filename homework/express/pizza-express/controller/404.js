const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('404', {
        status: ` 404: Page not found!`
    })
});


module.exports = router;