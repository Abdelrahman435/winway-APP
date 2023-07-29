var express = require('express');
var router = express.Router();
const { showCategories, showTopCourses, showTopMentors }= require('../controllers/homeController')
router.get('/getTopCourses', showTopCourses)

module.exports = router;


