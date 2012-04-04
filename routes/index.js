
/*
 * GET home page.
 */

exports.index = function(req, res){
   res.render('index', { title: 'Express' })
};

exports.word = function(req,res) {
    
var redis = require('redis');
var client = redis.createClient();
var TwitterWorker = require('../public/javascripts/src/twitter.js');
var t = new TwitterWorker(req.params.word);

res.writeHead(200, {'Content-Type': 'text/plain'});
client.mget([req.params.word],function(error,exists){
    if(error){
        exists = error;
    }else{
        res.end(req.params.word + " " + exists[0]);
    }
});

}

