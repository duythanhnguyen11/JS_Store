var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var trangchu = require('./Controller/HomeController');
var loaisanpham = require('./Controller/LoaisanphamController');
var chitietsanpham = require('./Controller/ChitietsanphamController');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('static'));
nunjucks.configure('views', {express: app});

app.listen(3000, ()=>{
    console.log('Listen port 3000');
});

app.use('/trang-chu', trangchu);
app.use('/loaisanpham', loaisanpham);   
app.use('/chitietsanpham', chitietsanpham);