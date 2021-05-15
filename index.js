var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('combined'));
app.get('/tintuc', (req, res)=>{
    res.send('Hello World');
});

app.listen(3000, ()=>{
    console.log('Listen port 3000');
});

