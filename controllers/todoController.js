var bodyParser = require('body-parser'); //body-parser module

var data = [{item:'get milk'},{item:'take a shower'},{item:'do the coding tutorials'}]; 
var urlencodedParser = bodyParser.urlencoded({extended:false}); //middleware to post request

module.exports = function(app){

    app.get('/todo',function(req,res){
        res.render('home',{todos:data}); //compact the data objects
    });

    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data); //response for the front end
    });

    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-') !== req.params.item; //post request parameters fetch the spaces with hyphens
        });
        res.json(data);
    });

};