const express = require('express')
const app = express()

/*************************** MongoDB Connection *********************************/

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var db; 

// Connection URL
var url = 'mongodb://kartikk:GatorMeetup123@cluster0-shard-00-00-snmsy.mongodb.net:27017,cluster0-shard-00-01-snmsy.mongodb.net:27017,cluster0-shard-00-02-snmsy.mongodb.net:27017/gatormeetup?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, database) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = database;
});


/*************************** Express Routes *************************************/

// open server 
var port = process.env.PORT || 8000;
app.listen(port, function(){
  console.log("Server listening on port 3000!");
});

// get meetups list 
app.get('/getMeetups', function (req, res) {
  db.collection('meetup').find().toArray(function(err, results) {
  	console.log(results)
  	res.send(results);
  });
});

// post meetup 
app.post('/postMeetup', function (req, res) {
	db.collection('meetup').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
  })
});
