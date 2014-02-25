$(document).ready(function(){ //use $ call js, select entire document, if ready run func

	var windowWidth=$(window).width();
	
	if(windowWidth<550){
		$("#ToggleBar").css("display","block"); //shift display to block when clicked under 500px
		$("#sideBar").hide(); 
	}

	$("#ToggleBar").click(function(){
		$("#sideBar").slideToggle(100); //when navToggle clicked slide up and down 
	});

	$(window).resize(function(){
		var windowWidth=$(window).width();
		if(windowWidth>550){
			$("#ToggleBar").css("display", "none");
			$("#sideBar").show();
		}
		else{
			$("#ToggleBar").css("display","block"); //shift display to block when clicked under 500px
			$("#sideBar").hide(); 
		}
	});

});