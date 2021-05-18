var express = require('express');
var product_type = require('../Models/product_type');
var product = require('../Models/product');
var router = express.Router();
module.exports = router;
router.get('/', async(req, res)=>{
    var a = await product_type.getProductType();
    var b = await product.getProductById(req.body['name']);
    res.render('loai_sanpham/index.html', {arr: a});
});

router.get('/:id_type', async(req, res)=>{
    var id_type = req.params['id_type'];
    var a = await product_type.getProductType();
    var b = await product.getProductById(id_type);
    //console.log(b);
    res.render('loai_sanpham/index.html', {arr: a, b: b});
});
