(function() {

	var s = skrollr.init();

	// Hide Loader
	$(window).load(function() {
		$(".loader").fadeOut("slow");
		$('body').removeClass('no-scroll');
	});

	$(function() { 

		var $body				= $('body'),
			$btnScroll			= $('.btn-scroll'),
			$btnPlay			= $('.btn-play'),
			$btnModal			= $('.btn-modal'),		
			$btnCloseModal		= $('.btn-close'),
			$btnNumber			= $('.-game').find('.number'),
			$btnResult			= $('.btn-result'),
			$modalSuccess		= $('#modalSuccess'),
			$modalDanger		= $('#modalDanger');		


		// Btns Number
		$btnNumber.click(function(e){ 
			e.preventDefault();

			var $this = $(this);
			$this.addClass('active');

			// number of selected Btns Number and Sum of numbers
			var counter = 0,
				sum	= 0;

			$btnNumber.each(function() {
				var $me = $(this);
				var value = $me.text();

				if( $me.hasClass('active') ) {
					counter++;
					sum += parseInt(value);				
				}
			});

			// if selected Btns Number === 5
			// check sum and show the result 
			if( counter === 5 ) {
				sum === 34 ? $modalSuccess.show() : $modalDanger.show()			
				$body.addClass("no-scroll");
			}		

		});


		// Btns Modal
		$btnModal.click(function(e){ 
			e.preventDefault();

			var $this = $(this);
			var target = $this.attr("href");

			$(target).fadeToggle();
			$body.addClass("no-scroll");

		});	
		

		// Btn Close Modal
		$btnCloseModal.click(function(e){ 
			e.preventDefault();

			var $this = $(this);

			$this.parents('.modal').fadeToggle(200);
			$body.removeClass("no-scroll");
			$btnNumber.removeClass('active');

		});

	});

})();

