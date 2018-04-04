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

/* router.get('/wiwo', function (req, res) {
    res.render('wiwo');
}); */

/**
 * GET /portfolio
 * Render Portfolio page
 */
 
router.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

/**
 * GET /gallery
 * Render Gallery page
 */

router.get('/gallery', function (req, res) {
    res.render('gallery');
});

/**
 * GET /research
 * Render Research page
 */

router.get('/research', function (req, res) {
    res.render('research');
});

module.exports = router;