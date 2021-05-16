var express = require('express');
var slider = require('../Models/slider');
var product = require('../Models/product');
var router = express.Router();
module.exports = router;
router.get('/', async(req, res)=>{
    var arr = await slider.getSlider();
    var count_pt = await product.countProduct();
    var count_pt_km = await product.countProduct_km();
    var product_new = await product.getProductNew();    
    var product_km = await product.getProductKM();
    //console.log(product_km);
    res.render('page/home/trangchu.html',{arr: arr, count_pt: count_pt, count_pt_km: count_pt_km, pd_new: product_new, product_km: product_km});    
});