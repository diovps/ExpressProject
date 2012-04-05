$(document).ready(function(){
	
	
	$("#search_button").click(function(){
		//$("#search_input").fadeOut();
		//$("#list_results").fadeIn();
		//$("#title").fadeIn();
		//$("#list_results").css("visibility", "visible");
		//$("#title").css("visibility", "visible");
		//$("#new_search").fadeIn();
		//$("#new_search").css("visibility", "visible");
       		if($("#term").val()){ 
		    document.location.href="/words/"+$("#term").val();
        	}else{
		    alert("Please enter a search term");
		}
        
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

