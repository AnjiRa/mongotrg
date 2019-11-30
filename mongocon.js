const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';
var db=''


mongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true},(err,client)=>{
if(err) return console.log('error connecting db')
var db = client.db('psldb')
console.log('connected to ....' +db.databaseName)
})

module.exports = db;