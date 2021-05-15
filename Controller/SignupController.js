var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', async(req, res)=>{
    res.render('users/signup.html');
});