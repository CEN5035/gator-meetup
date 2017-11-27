const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');

var cors= require('cors');
require('dotenv').load();

app.use(cors({origin: '*'}));
// API file for interacting with MongoDB
const api = require('./server/routes/api');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '.')));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// API location
app.use('/', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = server
