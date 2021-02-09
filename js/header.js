(function($,window,document,undefined){
	

	$(window).scroll(function(){
		if( $(this).scrollTop() >= 10 ){
			$('#header').addClass('addFixed');
		}
		else{
			$('#header').removeClass('addFixed');
		}
	});
	
	
	
	$('.appBarBtn').on({
		click:	function(){
			$('#header').stop().animate({ left: 100+'%', marginLeft:-50 }, 300);
			$('.appBar').stop().animate({ left: -10 }, 300);
			$('.mobile').stop().animate({ left:    0+'%' }, 300);
		}
	});
	
	$('.mobile').on({	
		click:	function(){

			if( event.target !== event.currentTarget ){
				return false;	
			}
			else{
				$('#header').stop().animate({ left: 0+'%', marginLeft:0 }, 300);
				$('.appBar').stop().animate({ left: 0 }, 300);
				$('.mobile').stop().animate({ left: -100+'%' }, 300);
			}
			

			
			
		}
	});
	
	
})(jQuery,window,document); 
//header.js