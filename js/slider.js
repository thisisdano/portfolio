$(function(){
	$('.section').each(function(){
		var id = 'section-thumbs-'+$(this).attr('id');
		$('.featured-image',this).cycle({ 
			speed:  'fast', 
			timeout: 0, 
			pager:  '#'+id,
			next: $('.featured-image',this)
		});
	});
});