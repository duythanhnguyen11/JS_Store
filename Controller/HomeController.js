var express = require('express');
var slider = require('../Models/slider');
var product = require('../Models/product');
var product_type = require('../Models/product_type');
var router = express.Router();
module.exports = router;

var size = 4;

router.get('/:p?', async(req, res)=>{
    var p = 1;
    if(req.params['p'] !=null){
        p = parseInt(req.params['p']);
    }
    var arr = await slider.getSlider();
    var pd_type = await product_type.getProductType();
    var count_pt = await product.countProduct_new();
    var count_pt_km = await product.countProduct_km();
    var product_new = await product.getProductNew(p, size);   
    //console.log(product_new) ;
    var product_km = await product.getProductKM(p, size);
    //console.log(product_km);
    var page = Math.ceil(count_pt/size);
    var page_n = Math.ceil(count_pt_km/size);
    //console.log(p);
    res.render('page/home/trangchu.html',{pd_type: pd_type,arr: arr, count_pt: count_pt, count_pt_km: count_pt_km, pd_new: product_new, product_km: product_km, page: page, p: p, page_n: page_n});    
});