var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017';
var opt = {useUnifiedTopology: true};

exports.getProductNew = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var arr = await db.collection('Product').find({}, {}, {}, {}, {}, {}, {}, {},{projection: {new: "1"}} ).toArray();
    return arr;
}

exports.getProductKM = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    // var arr = await db.collection('Product').find({}, {}, {}, {}, {}, {projection: {promotion_price: {$gt: 0}}}, {}, {},{} ).toArray();
    var arr = await db.collection('Product').find({promotion_price: {$ne: "0"}}).toArray();
    return arr;
}

exports.countProduct = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { new: "1"};
    var o = await db.collection('Product').countDocuments(query);
    return o;
}

exports.countProduct_km = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { new: "0"};
    var o = await db.collection('Product').countDocuments(query);
    return o;
}