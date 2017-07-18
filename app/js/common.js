// LEFT MENU
function initLeftMenu(){
	$(window).on('scroll', function(e){
		var scrolled = $(this).scrollTop();
		var controlWidth = $(document).width();
		var totalHeight = $(document).height() - 300;
		var menuHeight = $('.catalog--fixed').height();

		if (controlWidth > 992 && scrolled > menuHeight / 2 && scrolled < totalHeight - 1000) {
			$('.catalog--fixed').css('top', scrolled - 200);
		} else if (controlWidth > 992 && scrolled > totalHeight - 1000) {
			$('.catalog--fixed').css('top', totalHeight - 1350);
		} else {
			$('.catalog--fixed').css('top', 0);
		}
	})

	$('.hasDropdown--catalog').on('click', function(e){
		if (!$(e.target).closest('li').hasClass('hasDropdown--catalog')) return;

		e.preventDefault();
		$(this)
			.addClass('active')
			.siblings('li')
			.removeClass('active')
	})
}
// LEFT MENU END

//SLIDER
function initSliders(){
	$('[data-item="slider"]').slick({
		accessibility: true,
		autoplay: false,
		arrows: true,
		centerMode: true,
		centerPadding: 0,
		dots: false,
		draggable: true,
		initialSlide: 0,
		infinite: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		// responsive: [{
		// 	breakpoint: 500,
		// 	settings: {
		// 		dots: false,
		// 		arrows: false,
		// 		infinite: false,
		// 		slidesToShow: 3,
		// 		slidesToScroll: 1
		// 	}
		// }]
	});

	$('[data-item="slider-objects"]').slick({
		accessibility: true,
		arrows: true,
		adaptiveHeight: true,
		dots: true,
		rows: 5,
		slidesPerRow: 2,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				rows: 1,
				slidesPerRow: 1,
			}
		}]
	})

	$('[data-item="slider-imgs"]').slick({
		accessibility: true,
    draggable: false,
		arrows: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	})
}

// FANCYBOX
function initFancybox(){
	$('.fancybox').fancybox();
}
// FANCYBOX END

//MODALS
function initModals(){
	//Show modal
	$('[data-link="modal"]').on('click', function(){
		var link = $(this).attr('href') || $(this).data('href');
		var modal = $(link);

		$(modal).addClass('active');
	})
	//Hide modal on cross click
	$('.modal').on('click', '.close', function(){
		$(this).closest('.modal').removeClass('active');
	})
	//Hide modal on empty place click
	$(document).on('click', function(e){
		var target = e.target;

		if($(target).hasClass('modal')){
			$('.modal').removeClass('active');
		}
	})
}

$(document).ready(function(){

	initModals();
	initSliders();
	initFancybox();
	initLeftMenu();
})
