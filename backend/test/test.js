let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
const expect = require('chai').expect;
supertest = require('supertest');

var request = supertest('localhost:8000');

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
              console.log(res.body);
              done();
            });
  });

it('should return the welcome message ', function() {
  return chai.request(app)
    .get('/')
    .then(function(res) {
      //console.log(res.body.results)
      expect(res).to.have.status(200);
      expect(res.body.results).equal("Welcome to Gator Meetup API");
    });
});

it('should return Not Found', function() {
  return chai.request(app)
    .get('/INVALID_PATH')
    .then(function(res) {
      throw new Error('Path exists!');
    })
    .catch(function(err) {
      expect(err).to.have.status(404);
    });
});