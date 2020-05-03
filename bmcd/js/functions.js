$( document ).ready(function() {

	$('.accordion-bar').click(function(){
	      $('.accordion-panel', this).toggle('slow');
	  });

	$('.accordion-bar').click(function(){
	      $(this).toggleClass("open");
	  });
	
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 40) {
	        $("header").addClass("sticky");
	    } else {
	        $("header").removeClass("sticky");
	    }
	});
	
	
	
	$(window).scroll(function() {    
	        var $myDiv = $('.body-bg');   
	        var st = $(this).scrollTop();
			var divHeight = 550 - st;
	        $myDiv.css("height", divHeight );         
	           
	        })
	    .scroll();
	
		$(window).scroll(function() {    
		        var $myDiv = $('.body-bg.small');   
		        var st = $(this).scrollTop();
				if ($(window).width() < 600) {
				   var divHeight = 265 - st;
				}
				else {
				   var divHeight = 365 - st;
				}
				
		        $myDiv.css("height", divHeight );         

		        })
		    .scroll();
});


