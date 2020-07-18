require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var compression = require('compression');

require ('./_helpers/db');
const errorHandler = require('_helpers/error-handler');
const ControllerUsers = require('./controllers/users.controller');
const ControllerBooks = require('./controllers/books.controller');


app.use(compression()); 
app.use(cors()); //To connect to front end
app.use(bodyParser.json());
app.use(morgan('tiny')); //To get Http logs in console


//Routing Controllers
app.use('/users', ControllerUsers);
app.use('/books', ControllerBooks);

 


// global error handler
app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(3000, () => console.log(`Express server running on port 3000`));
