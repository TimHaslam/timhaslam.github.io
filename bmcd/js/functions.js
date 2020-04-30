$( document ).ready(function() {
	
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
});


