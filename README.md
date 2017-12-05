[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://circleci.com/gh/CEN5035/gator-meetup/tree/master.svg?style=shield&circle-token=:circle-token)](https://travis-ci.org/Shanfang/SmartNote)


# GatorMeetup

Website to organize events within UF  
Tech Stack : Angular, Angular Material, Node.js, Express, MongoDB

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

## Install/Run instructions  
#### Frontend
    npm install;
    ng serve -o
#### Backend

    cd backend;
    npm install;
    node server.js  
## Documentation
[Gator Meetup Wiki](https://github.com/CEN5035/gator-meetup/wiki)  
## Running Tests
#### Frontend  
###### E2E tests: 

    ng e2e  
###### Unit tests:  

    ng test
#### Backend
###### Mocha Unit tests 

    npm test
