const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const userRoute=require('./api/routes/user_auth')
const taskRoute=require('./api/routes/add_Task')



app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/createUser', userRoute );
app.use('/createTask', taskRoute );

module.exports = app;