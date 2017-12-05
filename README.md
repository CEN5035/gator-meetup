# GatorMeetup [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://circleci.com/gh/CEN5035/gator-meetup/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/CEN5035/gator-meetup)

Website to organize events within UF  
Tech Stack : Angular, Angular Material, Node.js, Express, MongoDB  

## Index  
* [Contibutors](#contributors)  
* [Integration & Deployment](#integration-and-deployment)
* [Prerequisites](#prerequisites)  
* [Installation/Run instructions](#installationrun-instructions)  
    - [Frontend](#frontend)  
    - [Backend](#backend)  
* [Documentation](#documentation)  
* [Tests](#running-tests)  
    - [Frontend](#frontend-1)
        - [E2E tests](e2e-tests)
        - [Unit tests](unit-tests)  
    - [Backend](#backend-1)  
        - [Mocha tests](#mocha-unit-tests)
* [Issues](#issues)

## Contributors  
Divyalakshmi Mahendran ([/divya0923](https://github.com/divya0923))  
Kartikk Rathina Pandian ([/kartikk](https://github.com/kartikk))  
Venkatesan Mathavan ([/venkat2509](https://github.com/venkat2509))  
Siddhartha Konakanchi ([/siddharthakonakanchi](https://github.com/siddharthakonakanchi))  

## Integration and Deployment
Continous Integration done on CircleCI (https://circleci.com/gh/CEN5035/gator-meetup)  
Node server Autodeployed onto Heroku (https://gator-meetup.herokuapp.com)

## Prerequisites

**Node.js v6.x Install instructions**:

```sh
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_6.x | bash -
apt-get install -y nodejs
```

## Installation/Run instructions  
#### Frontend
    npm install;
    ng serve -o
#### Backend

    cd backend;
    npm install;
    node server.js  
## Documentation
[Gator Meetup Wiki](https://github.com/CEN5035/gator-meetup/wiki)  

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Use the `--aot` for [Ahead Of Time compilation](https://angular.io/guide/aot-compiler#why-compile-with-aot) . 
## Running Tests
#### Frontend  
###### E2E tests: 
 Run `ng e2e` to run end-to-end test using [Protractor](http://www.protractortest.org/).
###### Unit tests:  
 Run `ng test` to run unit tests using [Karma](https://karma-runner.github.io/1.0/index.html).
#### Backend
###### Mocha Unit tests 
 Run `npm test` to run the [Mocha](https://mochajs.org/) tests.  
## Issues  
Report any issues here at the github [Issue Tracker](https://github.com/CEN5035/gator-meetup/issues).
