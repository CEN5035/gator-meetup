require('dotenv').config()
const express = require('express');
const router = express.Router();
var cors = require('cors');
const MongoClient = require('mongodb').MongoClient, assert = require('assert');
const ObjectID = require('mongodb').ObjectID
// Connect
var db; 

router.use(cors())

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


router.post('/updateData', (req, res) => {
    console.log(req.body);
    // res.send('ok');
    var data = req.body;
    var valueType = req.body.valueType;

    var newData;
    var oldData;
    switch (valueType) {
        case "Emailaddress":        
            newData = {
                $set:{
                    Emailaddress: req.body.value
                }
            }
            oldData = {
                Emailaddress: req.body.originalValue
            }
            break;
        case 'Name':
            newData = {
                $set:{
                    name: req.body.value
                }
            }
            oldData = {
                name: req.body.originalValue
            }
            break;
        case 'Location':
        newData = {
            $set:{
                Location: req.body.value
            }
        }
        oldData = {
            Location: req.body.originalValue
        }
        break;
        case 'Hometown':
        newData = {
            $set:{
                Hometown: req.body.value
            }
        }
        oldData = {
            Hometown: req.body.originalValue
        }    


            break;
        case 'Language':
        newData = {
            $set:{
                Language: req.body.value
            }
        }
        oldData = {
            Language: req.body.originalValue
        } 
        
        break;
        case 'DOB':
        newData = {
            $set:{
                DOB: req.body.value
            }
        }
        oldData = {
            DOB: req.body.originalValue
        } 
        break;
        case 'Gender':
        newData = {
            $set:{
                Gender: req.body.value
            }
        }
        oldData = {
            Gender: req.body.originalValue
        } 
        

    console.log(oldData);
    console.log(newData);
    connection((db) => {
        db.collection('user')
            .update(oldData, newData)
            .then((events) => {
                response.data = events;
                res.json(response);
                // console.log(res);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/getMeetup', (req, res) => {
    connection((db) => {
            db.collection("meetup").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result)
                db.close();
              });
    });
});

router.get('/getUser', (req, res) => {
    var UserID = "5510"
    connection((db) => {
        db.collection("user").find({UserID: UserID}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    });
});

router.get('/addUser', (req, res) => {
    var newUser = {

        name: "Siddharth",
        UserID :"5510",
        Emailaddress:	"sid@gmail.com",
        Password : "112",
        Location  :"CA",
        Hometown:"San Jose",
        Language:"English",
        DOB : "05-05-1992",
        Gender :"Male",
        BIO:" This is sid"
    }
    connection((db) => {
        db.collection('user')
            .insertOne(newUser)
            .then((events) => {
                response.data = events;
                res.json(response);
                // console.log(res);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/updateHometown', (req, res) => {
    var newUser = {$set:{
        Hometown: "CABCD"
    }};
    var user={UserID :"5510"};
    connection((db) => {
        db.collection('user')
            .update(user, newUser)
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














router.get('/updateLocation', (req, res) => {
    var newUser = {$set:{
        Location: "CA"
    }};
    var user={UserID :"1234"};
    connection((db) => {
        db.collection('user')
            .update(user, newUser)
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


router.get('/updatePassword', (req, res) => {
    var newUser = {$set:{
        Password: "Siddharth"
    }};
    var user={UserID :"1234"};
    connection((db) => {
        db.collection('user')
            .update(user, newUser)
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









router.get('/updatename', (req, res) => {
    var newUser = {$set:{
        name: "Siddharth"
    }};
    var user={UserID :"1234"};
    connection((db) => {
        db.collection('user')
            .update(user, newUser)
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







router.get('/updateemail', (req, res) => {
    var newUser = {$set:{
        Emailaddress: "Sith"
    }};
    var user={UserID :"1234"};
    connection((db) => {
        db.collection('user')
            .update(user, newUser)
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












// app.post('/new', function(req, res){
// 	new user({
		
// 		name: req.body.name
					
// 	}).save(function(err, doc){
// 		if(err) res.json(err);
// 		else    res.send('Successfully inserted!');
// 	});
// });