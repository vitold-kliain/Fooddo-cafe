$(function () {
	$('#my-menu').mmenu({
		extensions: ['position-right', 'theme-black', 'border-none',
			'effect-menu-slide', 'pagedim-black', 'widescreen'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt = "Fooddo cafe">'
		},
		onClick: {
			close: true,
			preventDefault : false

		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		setTimeout(function () {
			$('.hamburger').addClass('is-active');
		}, 100);
	});
	api.bind('close:finish', function () {
		setTimeout(function () {
			$('.hamburger').removeClass('is-active');
		}, 100);
	});

	$('.menu-carousel').owlCarousel({
		loop: true,
		// nav: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class = "fa fa-angle-double-left"></i>', '<i class = "fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			320: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	$('.fotorama').fotorama({
		// ratio: 16/9,
		nav: 'thumbs',
		thumbwidth: '110',
		thumbheight: '66',
		thumbborderwidth: '4',
		transition: 'crossfade',
		autoplay: '5000',
		width: '100%'
	});

	$('#s-review .h2').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize();

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		nav: false,
		smartSpeed: 700,
		dots: true,
		autoHeight: true
	});

	$('.partners').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		navText: ['<i class = "fa fa-angle-left"></i>', '<i class = "fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}

		},
		smartSpeed: 700,
	});

	//E-mail Ajax Send
	$("form.callback").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(th).find('.success').addClass('active').css('dislay', 'flex').hide().fadeIn();
			setTimeout(function () {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop()>$(this).height()) {
			$('.top').addClass('active');
		}
		else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop:0},'slow','swing');
	});

	$(window).on('load',function() {
		$('.preloader').delay(1000).fadeOut('slow');
	})

});
