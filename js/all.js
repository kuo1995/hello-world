$(document).ready(function() {
  // 打開左側選單
  $('.mobile-link').click(function(event) {
    $('body').addClass('open');
  });
  // 關閉左側選單
  $('.mobile-close').click(function(event) {
    $('body').removeClass('open');
  });


	$('.showmenu').click(function(event) {
		/* Act on the event */
		event.preventDefault();

		$('body').toggleClass('menu-show');
	});

/*	
	$('.open-online-side').click(function(event) {
		
		event.preventDefault();

		$('.online-container').toggleClass('opennn');
	});  */

	$('.open-online-side').click(function(event) {
		
		event.preventDefault();

		$('.online-side').slideToggle(400);
	});  



	$('.back-top').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0},1000); 
	});

	
});