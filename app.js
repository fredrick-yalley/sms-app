const path = require('path');
const express = require('express');
const messageRouter = require('./routes/messageRoute');
const viewRouter = require('./routes/viewsRoute');
const templateRouter = require('./routes/templateRoute');
const compression = require("compression");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('css', express.static(__dirname + 'public/css'));
app.use('js', express.static(__dirname + 'public/js'));
app.use('img', express.static(__dirname + 'public/img'));

app.use(compression());

// set views 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use('/', viewRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/api/v1/templates', templateRouter)

module.exports = app;