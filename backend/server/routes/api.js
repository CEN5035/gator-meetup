require('dotenv').config()
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient, assert = require('assert');
const ObjectID = require('mongodb').ObjectID
// Connect
var db; 

// Connection URL
var url = process.env.MONGO_DB_DEV_URI

// Use connect method to connect to the server
var mongo_connection = url;
const connection = (closure) => {
    return MongoClient.connect(mongo_connection, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


router.get('/getMeetups', (req, res) => {
    connection((db) => {
        db.collection('meetup')
            .find()
            .toArray()
            .then((events) => {
                response.data = events;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/postMeetup', (req, res) => {
    var newMeetUp = req.body;
    console.log(req.body)
    connection((db) => {
        db.collection('meetup')
            .insertOne(newMeetUp)
            .then((events) => {
                response.data = events;
                res.json(response);
                console.log(res);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;

// Without wrapped doesnt include status.
// get meetups list 
// router.get('/getMeetups', function (req, res) {
//     db.collection('meetup').find().toArray(function(err, results) {
//         console.log(results)
//         res.send(results);
//     });
//   });
  
// post meetup 
// router.post('/postMeetup', function (req, res) {
//       db.collection('meetup').insertOne(req.body, (err, result) => {
//       if (err) return console.log(err);
//       console.log(result);
//     })
//   });