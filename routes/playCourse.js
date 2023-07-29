var express = require('express');
var router = express.Router();
const {playCourse} = require('../controllers/playCourseController')

router.get('/:id', playCourse)

module.exports = router