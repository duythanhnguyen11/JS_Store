var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017';
var opt = {useUnifiedTopology: true};

// exports.getProductNew = async()=>{
//     var client = mongodb.MongoClient(url, opt);
//     await client.connect();
//     var db = client.db('shop_cake');
//     var arr = await db.collection('Product').find({}, {}, {}, {}, {}, {}, {}, {},{projection: {new: "1"}} ).toArray();
//     return arr;
// }

exports.countProduct_new = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { new: "1"};
    var o = await db.collection('Product').countDocuments(query);
    return o;
}

exports.getProductNew = async(page, size)=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { new: "1"}
    // var arr = await db.collection('Product').find(query).toArray();
    var arr = await db.collection('Product').find(query).limit(size).skip(size * (page - 1)).toArray();
    return arr;
}

exports.getProductKM = async(page_n, size)=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { promotion_price: {$ne: "0"}};
    // var arr = await db.collection('Product').find(query).toArray();
    var arr = await db.collection('Product').find(query).limit(size).skip(size * (page_n - 1)).toArray();
    return arr;
}

exports.countProduct_km = async()=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { promotion_price: {$ne: "0"}};
    var o = await db.collection('Product').countDocuments(query);
    return o;
}

exports.getProductById = async(o)=>{
    var client = mongodb.MongoClient(url, opt);
    await client.connect();
    var db = client.db('shop_cake');
    var query = { id_type: o};
    var arr = await db.collection('Product').find(query).toArray();
    return arr;
}