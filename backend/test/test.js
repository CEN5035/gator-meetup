
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
              done();
            });
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
        console.log(res);
        throw res;
      })
      .catch(function(err) {
        expect(err).to.have.status(501);
      });
  });
});

