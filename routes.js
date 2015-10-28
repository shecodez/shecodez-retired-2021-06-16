var express = require('express');
var router = express.Router();

/**
 * GET /
 * Render Home page
 */

router.get('/', function (req, res) {
    res.render('index');
});

/**
 * GET /wiwo
 * Render WIWO page
 */

router.get('/wiwo', function (req, res) {
    res.render('wiwo');
});

/**
 * GET /portfolio
 * Render Portfolio page
 */
 
router.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

module.exports = router;