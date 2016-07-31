$(function(){
	$('.filter-block .form-select').selectpicker();
	$('.filter-switch').click(function(){
		$('.filter-switch').toggleClass('on');
		$('.main-filter').slideToggle("slow");
	})
})