$(function(){
	$('.filter-block .form-select').selectpicker();
	$('.filter-switch').click(function(){
		$('.filter-switch').toggleClass('on');
		$('.main-filter').slideToggle("slow");
	});
	$('.left-nav span').click(function(){
		$('.left-nav span.current').removeClass('current');
		$(this).addClass('current');
		var id = $(this).attr('data-href');
		$('.right-tab.current-tab').removeClass('current-tab');
		$(id).addClass('current-tab');
	})
})