var express = require('express');
var router = express.Router();
const { showCategories, showTopCourses, showTopMentors }= require('../controllers/homeController')
router.get('/getTopCourses', showTopCourses)
router.get('/', (req,res) => res.render('index', {title: 'Express'}));
module.exports = router;


