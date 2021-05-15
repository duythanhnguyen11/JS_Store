var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017';
var opt = {useUnifiedTopology: true};

exports.getSlider = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var arr = await db.collection('Slider').find().toArray();
    return arr;
}