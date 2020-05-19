$( document ).ready(function() {

	$('.accordion-bar').click(function(){
	      $('.accordion-panel', this).toggle('slow');
	  });
	
	$('.accordion-bar').click(function(){
	      $(this).toggleClass("open");
	  });
	
	// 	$(window).scroll(function() {    
	// 	    var scroll = $(window).scrollTop();
	// 
	// 	    if (scroll >= 40) {
	// 	        $("header").addClass("sticky");
	// 	    } else {
	// 	        $("header").removeClass("sticky");
	// 	    }
	// 	});
	
	
	$('.toggle-text').click(function(){
		$(this).toggleClass("open");
	});
	
	var $hamburger = $(".hamburger");
	  $hamburger.on("click", function(e) {
	    $hamburger.toggleClass("is-active");
	    // Do something else, like open/close menu
	  });
});


