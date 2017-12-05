let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();
chai.use(chaiHttp);
const expect = require('chai').expect;
let supertest = require('supertest');

var request = supertest('localhost:8000');

describe('meetup events', function() {
  it('create a meetup', function(done) {
    request.post('/postMeetup')
            .field('location','Gainesville')
            .field('agenda','Angular')
            .field('meetupName','SE')
            .field('thumbUrl','http://poracaso.com/wp-content/uploads/2017/04/George-meetup.jpg')
            .field('description','desc')
            .field('coordinates',[100.5,85.6])
            .field('meetupOwner','Venkat')
            .then(function(res) {
              // console.log(res.body);

            });
            done();
  });
});

describe('welcome events', function() {
it('should return the welcome message ', function() {
  return chai.request(app)
    .get('/')
    .then(function(res) {
      // console.log(res)
      expect(res).to.have.status(200);
      expect(res.text).contains("Welcome to Gator Meetup API");
    });
});

});

describe('invalid endpoint', function() {
  it('should return 500 Error', function() {
    return chai.request(app)
      .get('/invalidURL')
      .then(function(res) {
        // console.log(res);
        throw res;
      })
      .catch(function(err) {
        expect(err).to.have.status(501);
      });
  });
});

  describe('user signup events', function() {
    it('sign in a user', function(done) {
      request.post('/users/signup')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              });
              done();
      });
  });

  describe('user login flow', function() {
    it('User not found flow', function(done) {
      request.post('/users/login')
              .field('email','dmahendhdjhfhdsf@ufl.edu')
              .then(function(res) {
                // console.log(res.body);
              })
               done();
      });
  });

  describe('user login flow', function() {
    it('User Wrong password flow', function(done) {
      request.post('/users/login')
              .field('email','dmahendhdjhfhdsf@ufl.edu')
              .field('password',12345678)
              .then(function(res) {
                // console.log(res.body);

              })

              done();
      });
  });

  describe('user login flow', function() {
    it('User Correct password flow', function(done) {
      request.post('/users/login')
              .field('email','dmahendhdjhfhdsf@ufl.edu')
              .field('password',123456)
              .then(function(res) {
                // console.log(res.body);

              })
              .catch(function(err) {
                expect(err).to.have.status(501);
              });
              done();
      });
  });


  describe('user forgot password flow', function() {
    it('User forgot  password invalid credentials', function(done) {
      request.post('/users/forgot')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('user forgot password flow', function() {
    it('User couldnt be found', function(done) {
      request.post('/users/forgot')
              .field('email','dmahendhdjhfhdsf@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });


  describe('user forgot password working flow', function() {
    it('User found', function(done) {
      request.post('/users/forgot')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('user password reset flow', function() {
    it('Password missing flow ', function(done) {
      request.post('/users/reset/?token=ABCD')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('user password reset flow', function() {
    it('Password incorrect flow', function(done) {
      request.post('/users/reset/:token')
              .field('password',1234)
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('user password reset flow', function() {
    it('Password correct flow with token', function(done) {
      request.post('/users/reset/55985556-dc98-4dd1-9605-8478cfaec783')
              .field('email','dmahendran@ufl.edu')
              .field('password',123456)
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('user session check  flow', function() {
    it('Password correct flow', function(done) {
      request.post('/users/islogin')
              .field('email','dmahendran@ufl.edu')
              .field('password',123456)
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('user session check  flow', function() {
    it('Wrong user credentials', function(done) {
      request.post('/users/islogin')
              .field('email','dmahendradfsdfn@ufl.edu')
              .field('password',12345456)
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });


  describe('settings data update flow', function() {
    it('update email address', function(done) {
      request.post('/updateData')
              .field('valueType','Emailaddress')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });

  describe('settings data update flow', function() {
    it('update name ', function(done) {
      request.post('/updateData')
              .field('valueType','Name')
              .field('value','dmahendran@ufl.edu')
              .field('oldvalue','assaultsethu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });
  describe('settings data update flow', function() {
    it('update location', function(done) {
      request.post('/updateData')
              .field('valueType','Location')
              .field('value','FL')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });
  describe('settings data update flow', function() {
    it('update email address', function(done) {
      request.post('/updateData')
              .field('valueType','Hometown')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });
  describe('settings data update flow', function() {
    it('update email address', function(done) {
      request.post('/updateData')
              .field('valueType','Language')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });
  describe('settings data update flow', function() {
    it('update email address', function(done) {
      request.post('/updateData')
              .field('valueType','DOB')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });
  describe('settings data update flow', function() {
    it('update email address', function(done) {
      request.post('/updateData')
              .field('valueType','Gender')
              .field('email','dmahendran@ufl.edu')
              .then(function(res) {
                // console.log(res.body);

              })
              done();
      });
  });










