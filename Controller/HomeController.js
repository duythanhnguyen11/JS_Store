var express = require('express');
var slider = require('../Models/slider');
var router = express.Router();
module.exports = router;
router.get('/', async(req, res)=>{
    var arr = await slider.getSlider();
    res.render('page/home/trangchu.html',{arr: arr});
});