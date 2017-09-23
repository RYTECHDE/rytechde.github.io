$(document).ready(function() {


//     $("html").niceScroll();

	$("#webonclick").click(function() {
    $('html, body').animate({
        scrollTop: $("#websection").offset().top
    }, 2000);
    return false;
});

	$("#apponclick").click(function() {
    $('html, body').animate({
        scrollTop: $("#appsection").offset().top
    }, 2000);
    return false;
});

	$("#icononclick").click(function() {
    $('html, body').animate({
        scrollTop: $("#logosection").offset().top
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
			$(".kontaktporangehighlight", this).css("color", "#FF5609");
			
			
			
		},
		
		function () {
			$(".iconbackground", this).css("-webkit-animation-name", "");
			$(".iconbackground", this).css("color", "#343943");
			$(".iconbackgroundkontakt", this).css("-webkit-animation-name", "");
			$(".iconbackgroundkontakt", this).css("color", "white");
			$(".kontaktporangehighlight", this).css("color", "white");

			
		}
		
		
	);
	
	$('.simplekontaktform').validate({
		
			
			rules: {
				
				name: "required",
				email: {
					required:true,
					email:true
				},
				number: {
					required:true
				},
				anfrage: {
					required:true
				},
				plan: {
					required: true
    			}
				
				
			},
			
			submitHandler: function(form) {
				$(form).ajaxSubmit();

			}
			
			

		
		
		
		
		
		
		
		
	}
		

		
	);
	
	
	
	$(".customradio").click(function(){
		
		$(".customradio").css("background-color", "#C5C5C5");
		$(".customradio").css("color", "#FF5609");
		
		$(this).css("background-color","#FF5609");
		$(this).css("color","white");

		
	});
	
	$(".customradioecommerce").click(function(){
		
		$(".customradioecommerce").css("background-color", "#C5C5C5");
		$(".customradioecommerce").css("color", "#FF5609");
		
		$(this).css("background-color","#FF5609");
		$(this).css("color","white");

		
	});


		
	$(".checkforerror").click(function(){
/*
		
		if ($(".formfieldsimple:input").val() === "") {
			
			alert("Test");
			
			    $(".simplekontaktform").submit(function(e){
				e.preventDefault();
				});
			
		}
				
*/
		
	});
	
/*
	$("#dienstmenu, .navextension, .dienstmenuextension").hover(
		function(){
			
			$(".navextension").css({"visibility" : "visible", "opacity" : "1"});		
		}
		
	);
	
	$("*").not($("#dienstmenu, .navextension, .dienstmenuextension")).hover(
		
		function() {
			
			$(".navextension").css({"visibility" : "hidden", "opacity" : "0"});
			
			
		}		
	);
*/

 	$(".iconsizexxl").hover(
	 	
	 	function() {
		 	
		 	$(".iconbackgroundkontakt", this).css({
			 	
			 	"color" : "#FF5607"
			 	
		 	});
		 	
		 	$(".iconbackground", this).css({
			 	
			 	
			 	"color" : "white"
			 	
			 	
		 	});
		 	
		 	
	 	},
	 	
	 	function() {
		 	
		 	$(".iconbackgroundkontakt", this).css({
			 	
			 	"color" : "white"
			 	
		 	});
		 	
		 	$(".iconbackground", this).css({
			 	
			 	"color" : "#343943"
			 	
		 	});
		 	
	 	}
	 	
 	);
 	

	
});