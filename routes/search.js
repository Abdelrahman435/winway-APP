var express = require("express");
var router = express.Router();
const {protect} = require('../middleware/protect');
const upload = require("../middleware/uploadFiles");
const {search, getHistory} = require('../controllers/searchController')
router.get('/:user_id', search)
router.get('/getHistory/:user_id', getHistory)
module.exports = router;
