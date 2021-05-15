var express = require('express');
var product_type = require('../Models/product_type');
var router = express.Router();
module.exports = router;
router.get('/', async(req, res)=>{
    var a = await product_type.getProductType();

    res.render('loai_sanpham/index.html', {arr: a});
});