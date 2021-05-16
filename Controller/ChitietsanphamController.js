var express = require('express');
var router = express.Router();
var product = require('../Models/product');
module.exports = router;
router.get('/', async(req, res)=>{
    var arr = await product.getProduct();
    console.log(arr);
    var count_product = await product.countProduct();
    console.log(count_product);
    res.render('sanpham/index.html', {arr: arr});
});