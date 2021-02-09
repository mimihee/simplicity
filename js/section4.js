(function($,window,document,undefined){
	
	var s4conH = $('#section4 .container').innerHeight();
	var s4titH = $('#section4 .title').innerHeight();
	var s4titT = (s4conH - s4titH)/2;
	
		$('#section4 .title').css({ top:s4titT });
		

		function s4Resize(){
			s4conH = $('#section4 .container').innerHeight();
			s4titH = $('#section4 .title').innerHeight();
			s4titT = (s4conH - s4titH)/2;
			
			$('#section4 .title').css({ top:s4titT });
		}
		

		$(window).resize(function(){
			s4Resize();
		});
		
		setTimeout(s4Resize, 100); 
		
	
})(jQuery,window,document);//section4.js