//
// SCRIPTS FOR MENU
// ____________________________________________________________________

$(document).ready(function(){
    $(".menu").click(function(){
      $(".pure-menu").slideToggle(500);
    })


    $('.button-toggle').click(function(){
    	
    	$('.more-references').addClass("show-references").slideToggle(500);
    	
    	event.preventDefault();

	})

});


$(function() {
        $('.lazy').Lazy();
    });