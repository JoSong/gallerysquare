
 $('.galimg img').each(function() {
	var width =$(this).width()
	var height=$(this).height()
	var resize=$('.galimg img').width()-$('.galimg').width()
	if (width<height)
	{
			$('.galimg img')
			.addClass('portrait')
			.css('height',width);


			
		}

   else {

   		$('.galimg img')
   		.addClass('landscape')
   		.css('width',height);

   }
});



