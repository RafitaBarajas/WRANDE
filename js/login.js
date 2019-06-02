$(document).ready(
	function(){
		var wind = $(window);
		var dlc = $("#div-login-col");
	
		if(wind.width() > 1370){
			dlc.removeClass("l6 offset-l3").addClass("l4 offset-l4");
		} else {
			dlc.removeClass("l4 offset-l4").addClass("l6 offset-l3");
		}

		wind.resize(function(){
			if(wind.width() > 1370){
				dlc.removeClass("l6 offset-l3").addClass("l4 offset-l4");
			} else {
				dlc.removeClass("l4 offset-l4").addClass("l6 offset-l3");
			}
		});

	}
);