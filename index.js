var express = require('express');
var todoController = require('./controllers/todoController');//path of todoController
var app = express();

app.set('view engine','ejs'); //set the template engine to embedded js

app.use(express.static('./public')); //use middleware to static files

todoController(app);//fire todoController

app.listen(3000);//listen to port number 3000

console.log('Success');

