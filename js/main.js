	
	// Setka	
	$('.grid').masonry({
	  columnWidth: 200,
	  itemSelector: '.grid-item'
	});

	// PopUp
	$(function(){
		$('.wrapper_icon_bar').click(function(){
			$('.popup_main').toggle('drop');
		});
	});