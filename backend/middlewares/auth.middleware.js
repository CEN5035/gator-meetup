var jwt = require('jsonwebtoken');


function auth(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, 'mysecretkey', function (err, decoded) {
            if (err) {
                console.log('Error', err);
                res.status(400);
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(400)
        return res.json({
            success: false,
            message: 'No token provided'
        });
    }
}

module.exports = auth;