$(document).ready(function(){
	
	
	$("#search_button").click(function(){
		$("#search_input").fadeOut();
		$("#list_results").fadeIn();
		$("#title").fadeIn();
		$("#list_results").css("visibility", "visible");
		$("#title").css("visibility", "visible");
		$("#new_search").fadeIn();
		$("#new_search").css("visibility", "visible");
        
        
        
        });
		
		
		$("#new_search").click(function(){
		$("#title").fadeOut();
		$("#list_results").fadeOut();
		$("#search_button").fadeIn();
		$("#search_input").fadeIn();		
		$("#new_search").fadeOut();
		});
		
		
		$("#help_button").click(function(){

		
		$("#search_button").fadeOut();
		$("#search_input").fadeOut();
		$("#list_results").fadeOut();
		$("#title").fadeOut();
		$("#help_return").fadeIn();
		$("#new_search").fadeOut();
		$("#help_info").css("visibility", "visible");
		$("#about_info").css("visibility", "hidden");
		$("#help_return").css("visibility", "visible");
		$("#about_return").css("visibility", "hidden");
		$("#help_button").css("visibility", "hidden");
		$("#about_button").css("visibility", "visible");
		
		});
		
		$("#about_button").click(function(){

		$("#search_button").fadeOut();
		$("#search_input").fadeOut();
		$("#list_results").fadeOut();
		$("#title").fadeOut();
		$("#about_info").css("visibility", "visible");
		$("#help_info").css("visibility", "hidden");
		$("#about_return").css("visibility", "visible");
		$("#help_return").css("visibility", "hidden");
		$("#about_button").css("visibility", "hidden");
		$("#help_button").css("visibility", "visible");
		
		});

		
		});


function main() {
    
    
    
    
    
    
	 


	
		
    
	var count = true;
	var twitCount = 1;
    s.register(function(tweet) {
    	
        var profile_image = "<img src=\"" + tweet.profile_image_url+ "\" />";
        if(twitCount==1){
	    $("#tweets p:last-child").remove();
            twitCount=0;
            total_tweet_count ++;
            
    
        
        
        $("#search_button").click(function(){
		$("#input").fadeOut();
		$("#search").fadeIn();
		$("#swears").fadeIn();
		
		
        
        });
        
        
        
		
		
		$("#new_search").click(function(){

		
		$("#title").fadeOut();
		$("#list_results").fadeOut();
		$("#search_button").fadeIn();
		$("#search_input").fadeIn();
		$("#help_info").css("visibility", "visible");
		$("#about_info").css("visibility", "hidden");
		$("#help_return").css("visibility", "visible");
		$("#about_return").css("visibility", "hidden");
		$("#help_button").css("visibility", "hidden");
		$("#about_button").css("visibility", "visible");
		$("#search_count_div").css("visibility", "hidden");
		
		
		});

	
		
		
				
		$("#help_return").click(function(){
		
		$("#title").fadeIn();
		$("#input").fadeIn();
		$("#help_info").css("visibility", "hidden");
		$("#help_return").css("visibility", "hidden");
		$("#help_button").css("visibility", "visible");
		
		});
		
		$("#about_return").click(function(){

		$("#title").fadeIn();
		$("#input").fadeIn();
		$("#about_info").css("visibility", "hidden");
		$("#about_return").css("visibility", "hidden");
		$("#about_button").css("visibility", "visible");
		
		
		
		
     
     
		});
            
            
     var cussArray = tweet.text.match(/fuck|\sass\s|bitch|pussy|arse|\sbeaner\s|\sbutt-pirate\s|\schink\s|\schinc\s|clit|cock|cunt|damn|dick|douche|faggit|faggot|\sfudgepacker\s|gringo|guido|honkey|jizz|kunt|kooch|nigger|nigga|piss|queef|queer|shit|Shit|slut|\sspic\s|twat|tit|whore|wetback|wop/gi);
     for(var i in cussArray){
     	totalcusscount++;
     }    
     
        
		
     var censor = tweet.text.replace(/fuck|\sass\s|bitch|pussy|arse|\sbeaner\s|\sbutt-pirate\s|\schink\s|\schinc\s|clit|cock|cunt|damn|dick|douche|faggit|faggot|\sfudgepacker\s|gringo|guido|honkey|jizz|kunt|kooch|nigger|nigga|piss|queef|queer|shit|Shit|slut|\sspic\s|twat|tit|whore|wetback|wop/gi,"*****");
     	
    
       
     
    
    
     $("#swear_count").text(totalcusscount + " swear words avoided");
     $("#tweet_count").text("in " + total_tweet_count + " tweets");
     $("#search_count").text("Searched for: " + term);
            
            
	}
        
    $("#tweets").prepend($("<p>"+profile_image+' '+censor+"</p>"));    
	twitCount++;
	
	
	
	
        
});    





	s.start();
    


}
