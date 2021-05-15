var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var trangchu = require('./Controller/HomeController');
var loaisanpham = require('./Controller/LoaisanphamController');
var chitietsanpham = require('./Controller/ChitietsanphamController');
var about = require('./Controller/AboutController');
var checkout = require('./Controller/CheckoutController');
var contact = require('./Controller/ContactController');
var login = require('./Controller/LoginController');
var signup = require('./Controller/SignupController');
var cart = require('./Controller/CartController');

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
app.use('/about', about);
app.use('/checkout', checkout);
app.use('/contact', contact);
app.use('/login', login);
app.use('/signup', signup);
app.use('/cart', cart);