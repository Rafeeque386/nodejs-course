const express = require('express');
http = require('http');
const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');

const app = express();
const dishRouter=require('./routes/dishRouter');
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');
const bodyParser = require("body-parser");

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/dishes',dishRouter);
app.use('/dishId',dishRouter);

app.use('/promotion',promoRouter);
app.use('/promoId',promoRouter);

app.use('/leader',leaderRouter);
app.use('/leaderId',leaderRouter);











const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});