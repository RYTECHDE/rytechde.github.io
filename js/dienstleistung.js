$(document).ready(function() {
	
	$("#webonclick").click(function() {
    $('html, body').animate({
        scrollTop: $(".containerwrapweb").offset().top
    }, 2000);
    return false;
});

	$("#webonclick").click(function() {
    $('html, body').animate({
        scrollTop: $(".containerwrapweb").offset().top
    }, 2000);
    return false;
});

	$("#icononclick").click(function() {
    $('html, body').animate({
        scrollTop: $(".containerwraplogo").offset().top
    }, 2000);
    return false;
});	

	$("#preiseweb").click(function(){
		
		$(".plancontainer").slideDown(200);
		$(this).remove();
		
		
		
		function refreshsize () {
			
			jQuery(window).trigger('resize').trigger('scroll');		

			
		}
		
		 setTimeout(refreshsize, 201);

		
		
		
	});
	
	$(".menuicon").click(function(){
		
            $(".responsivenav").animate({

                width: "toggle"

            });	
            

	    
	});
	
	$(".kontakticoncontainer").hover(
		
		function () {
			
			$(".iconbackground", this).css("-webkit-animation-name", "iconcoloranim");
			$(".iconbackground", this).css("color", "white");

			$(".iconbackgroundkontakt", this).css("-webkit-animation-name", "iconbackgroundcoloranim").delay(500);
			$(".iconbackgroundkontakt", this).css("color", "#FF5609");
			
			
			
		},
		
		function () {
			$(".iconbackground", this).css("-webkit-animation-name", "");
			$(".iconbackground", this).css("color", "#343943");
			$(".iconbackgroundkontakt", this).css("-webkit-animation-name", "");
			$(".iconbackgroundkontakt", this).css("color", "white");
			
		}
		
		
	);
	
	$('.simplekontaktform').validate(
		

		
	);

	
});