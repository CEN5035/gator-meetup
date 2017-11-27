require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const nodemailer = require('nodemailer');
const uuidv4 = require('uuid/v4');
const MongoClient = require('mongodb').MongoClient, assert = require('assert');
const ObjectID = require('mongodb').ObjectID

const authMiddleware = require('../../middlewares/auth.middleware');

const bcrypt = require('bcryptjs');

// Connect
var db;

// Connection URL
var url = process.env.MONGO_DB_DEV_URI
const SERVER_URL = 'http://localhost:8000/';

const tokenExpireTime = '1h';



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

router.get('/invalidURL', (req, res) => {
    sendError(req,res);
});

router.get('/searchMeetups', (req, res) => {
    connection((db) => {

        console.log(req);    
        
        var query = {$or:
            [
                { meetupName: {$regex: new RegExp('.*?'+req.headers.search+'.*?'), $options: "ix"}},
                {tags: {$regex: new RegExp('.*?'+req.headers.search+'.*?'), $options: "ix"}}
            ]
        };        
        

        db.collection('meetup')
            .find(query)
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

router.post('/users/signup', (req, res) => {
    console.log(req.body);
    connection((db) => {
        db.collection('users')
            .find({ email: req.body.email })
            .toArray()
            .then((users) => {

                if (users.length) {
                    res.status(400);
                    return res.json({
                        success: false,
                        data: null,
                        message: 'User already exist'
                    });
                } else {
                    db.collection('counter')
                        .findOne()
                        .then((counter) => {

                            let newUser = {
                                name: req.body.name,
                                email: req.body.email,
                                location: req.body.location,
                                hometown: req.body.hometown,
                                language: req.body.language,
                                birthday: req.body.birthday,
                                gender: req.body.gender,
                                bio: req.body.bio,
                                password: req.body.password,
                                userId: 'U',
                            };

                            if (counter) {
                                if (counter.count < 10) {
                                    newUser.userId += '000' + counter.count;
                                } else if (counter.count < 100) {
                                    newUser.userId += '00' + counter.count;
                                } else if (counter.count < 1000) {
                                    newUser.userId += '0' + counter.count;
                                } else {
                                    newUser.userId += counter.count;
                                }

                            } else {
                                newUser.userId += '000' + 1;
                            }

                            var salt = bcrypt.genSaltSync(10);
                            newUser.password = bcrypt.hashSync(newUser.password, salt);

                            db.collection('users')
                                .insertOne(newUser)
                                .then((success) => {
                                    response.data = success;
                                    res.json(response);
                                    console.log(res);

                                    if (!counter) {
                                        db.collection('counter')
                                            .insertOne({ count: 1 })
                                            .then((success) => {
                                                console.log(res);
                                            })
                                            .catch((err) => {
                                                sendError(err, res);
                                            });
                                    } else {
                                        db.collection('counter')
                                            .findOneAndUpdate({ _id: counter._id }, { $inc: { "count": 1 } })
                                            .then((success) => {
                                                console.log(res);
                                            })
                                            .catch((err) => {
                                                sendError(err, res);
                                            });
                                    }
                                })
                                .catch((err) => {
                                    sendError(err, res);
                                });
                        })
                        .catch((err) => {
                            sendError(err, res);
                        });
                }

            })
            .catch((err) => {
                sendError(err, res);
            });
    });

});

router.post('/users/login', (req, res) => {
    connection((db) => {
        db.collection('users')
            .findOne({ email: req.body.email })
            .then((user) => {
                if (!user) {
                    res.status(400);
                    return res.json({ success: false, message: 'User not found' });
                } else if (user) {
                    if (!bcrypt.compareSync(req.body.password, user.password)) {
                        res.status(400);
                        return res.json({ success: false, message: 'Wrong password' });
                    } else {
                        console.log(user);
                        var token = jwt.sign({ data: user }, 'mysecretkey', { expiresIn: tokenExpireTime });
                        user.password = '';
                        res.status(200);
                        return res.json({
                            success: true,
                            message: 'Login successful',
                            token: token,
                            data: user
                        });
                    }
                }
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


router.post('/users/forgot', (req, res, next) => {
    if (!req.body.email) {
        res.status(400);
        return res.json({
            success: false,
            message: 'Invalid credencials'
        });
    } else {
        connection((db) => {
            db.collection('users')
                .findOne({ email: req.body.email })
                .then((user) => {
                    if (!user) {
                        res.status(400);
                        return res.json({
                            success: false,
                            message: 'User not found'
                        });
                    } else {
                        const email = req.body.email;
                        nodemailer.createTestAccount((err, account) => {
                            // create reusable transporter object using the default SMTP transport
                            let transporter = nodemailer.createTransport({
                                service: 'gmail',
                                auth: {
                                    user: "noreplygatormeetup@gmail.com", // generated ethereal user
                                    pass: "gatormeetup"  // generated ethereal password
                                }
                            });

                            // setup email data with unicode symbols
                            const token = uuidv4();
                            console.log(token);
                            let mailOptions = {
                                from: '"Forgot Password" <contact@gatormeetup.com>', // sender address
                                to: email, // list of receivers
                                subject: 'Hello ✔', // Subject line
                                html: user.name + '<br>' +
                                    '<a href="' + SERVER_URL + 'users/reset/' + token + '">Click here to reset password</a>'
                            };

                            // send mail with defined transport object
                            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    throw error;
                                }
                                var newToken = {
                                    token: token,
                                    userId: user._id
                                };

                                db.collection('token')
                                    .insertOne(newToken);

                                return res.json({
                                    success: true,
                                    message: 'A password reset link has been sent to your email.'
                                });

                            });
                        });
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }

});

router.get('/users/reset/:token', (req, res, next) => {
    console.log(req.params.token);
    if (!req.params.token) {
        res.status(400);
        return res.json({
            error: true,
            message: 'Reset token not found'
        });
    } else {

        connection((db) => {
            db.collection('token')
                .findOne({ token: req.params.token })
                .then((tokenInfo) => {
                    if (!tokenInfo) {
                        res.status(400);
                        return res.json({
                            error: true,
                            message: 'Token not found'
                        });
                    } else {
                        var currentTime = new Date();
                        var tokenExpireTime = new Date(tokenInfo.createdAt);
                        tokenExpireTime.setDate(tokenExpireTime.getDate() + 1);
                        if (currentTime.getTime() > tokenExpireTime.getTime()) {
                            res.status(400);
                            db.collection('token').remove({ userId: tokenInfo.userId });
                            return res.json({
                                error: true,
                                message: 'Password reset link has been expired'
                            });
                        } else {
                            res.render('password-reset', {
                                token: tokenInfo.token,
                                error: '',
                                redirectUrl: SERVER_URL + 'users/reset/' + tokenInfo.token
                            });
                        }
                    }
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });

    }

});


router.post('/users/reset/:token', (req, res, next) => {
    console.log(req.params.token);
    console.log(req.body.password);

    let password = req.body.password;

    if (!req.body.password) {
        res.render('password-reset', {
            token: req.params.token,
            error: 'Please enter password',
            redirectUrl: SERVER_URL + 'users/reset/' + req.params.token
        });
    } else if (req.body.password.length < 6) {
        res.render('password-reset', {
            token: req.params.token,
            error: 'Password at least 6 characters long',
            redirectUrl: SERVER_URL + 'users/reset/' + req.params.token
        });
    } else {
        connection((db) => {
            db.collection('token')
                .findOne({ token: req.params.token })
                .then((tokenInfo) => {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, function (err, hash) {

                            db.collection('users')
                                .update({ _id: tokenInfo.userId }, { $set: { password: hash } })
                                .then((success) => {
                                    db.collection('token').remove({ userId: tokenInfo.userId });
                                    res.render('response');
                                })
                                .catch((err) => {
                                    sendError(err, res);
                                });
                        })
                    })
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
    }

});


router.post('/users/islogin', authMiddleware, (req, res, next) => {

    console.log(req.decoded);
    connection((db) => {
        db.collection('users')
            .findOne({ email: req.decoded.data.email })
            .then((user) => {
                console.log(user);
                if (!user) {
                    res.status(400);
                    return res.json({
                        success: false,
                        data: null,
                        message: 'User not exist'
                    });
                } else {
                    user.password = '';
                    res.status(200);
                    return res.json({
                        success: true,
                        data: user,
                        message: 'Continue...'
                    });
                }
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/updateData', (req, res) => {
    console.log('Body', req.body);
    // res.send('ok');
    var data = req.body;
    var valueType = req.body.valueType;
    console.log('UserId', req.body.userId);

    var newData;
    var oldData;
    switch (valueType) {
        case "Emailaddress":
            newData = {
                $set: {
                    email: req.body.value
                }
            }
            oldData = {
                email: req.body.originalValue
            }
            break;
        case 'Name':
            newData = {
                $set: {
                    name: req.body.value
                }
            }
            oldData = {
                name: req.body.originalValue
            }
            break;
        case 'Location':
            newData = {
                $set: {
                    location: req.body.value
                }
            }
            oldData = {
                location: req.body.originalValue
            }
            break;
        case 'Hometown':
            newData = {
                $set: {
                    hometown: req.body.value
                }
            }
            oldData = {
                hometown: req.body.originalValue
            }


            break;
        case 'Language':
            newData = {
                $set: {
                    language: req.body.value
                }
            }
            oldData = {
                language: req.body.originalValue
            }

            break;
        case 'DOB':
            newData = {
                $set: {
                    birthday: req.body.value
                }
            }
            oldData = {
                birthday: req.body.originalValue
            }
            break;
        case 'Gender':
            newData = {
                $set: {
                    gender: req.body.value
                }
            }
            oldData = {
                gender: req.body.originalValue
            }
    }


    console.log(oldData);
    console.log(newData);
    connection((db) => {
        db.collection('users')
            .update({ userId: req.body.userId }, newData)
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
        db.collection("meetup").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    });
});

router.get('/getUser/:userId', (req, res) => {
    var UserID = req.params.userId;
    console.log('Userid', UserID);
    connection((db) => {
        db.collection("users").find({ userId: UserID }).toArray(function (err, result) {
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
        UserID: "5510",
        Emailaddress: "sid@gmail.com",
        Password: "112",
        Location: "CA",
        Hometown: "San Jose",
        Language: "English",
        DOB: "05-05-1992",
        Gender: "Male",
        BIO: " This is sid"
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
    var newUser = {
        $set: {
            Hometown: "CABCD"
        }
    };
    var user = { UserID: "5510" };
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
    var newUser = {
        $set: {
            Location: "CA"
        }
    };
    var user = { UserID: "1234" };
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
    var newUser = {
        $set: {
            Password: "Siddharth"
        }
    };
    var user = { UserID: "1234" };
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
    var newUser = {
        $set: {
            name: "Siddharth"
        }
    };
    var user = { UserID: "1234" };
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
    var newUser = {
        $set: {
            Emailaddress: "Sith"
        }
    };
    var user = { UserID: "1234" };
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



