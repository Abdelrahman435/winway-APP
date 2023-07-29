const express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
  res.sendFile('public/index.html', { root: '.' });
})

module.exports = router;