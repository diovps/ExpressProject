//$(document).ready(function(){
	
  //      $("#search_button").click(function(){
//		main();	
//	});
//});

//function main(){
function TwitterWorker(searchPattern) {
var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('../lib/credentials.js');

//var searchPattern = "awesome";
//var searchPattern = $("#searchTerm").val();                                                                                                                                                                                                                       
var client = redis.createClient();


client.exists(searchPattern, function(error, exists) {
    if(error) {
        console.log('ERROR: '+error);
    } else if(!exists) {
        client.set(searchPattern, 0); //create the awesome key
    };
});

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

t.stream(
    'statuses/filter',
    { track: [searchPattern] },
    function(stream) {
        stream.on('data', function(tweet) {
            //console.log(tweet.entities.urls);
            //if awesome is in the tweet text, increment the counter
            if(tweet.entities.urls && tweet.entities.urls.length > 0){
	        
		if(tweet.entities.urls[0].expanded_url!=null){
		    console.log(tweet.entities.urls[0].expanded_url);
	            client.rpush(searchPattern,String(tweet.entities.urls[0].expanded_url));
	        }
	     }
	                                                                                                                                                                            
         //    if(tweet.text.match("/"+searchPattern+"/")) {
         //       client.incr(searchPattern);
          //  }

	   
        });
    }
);
}

module.exports = TwitterWorker;
