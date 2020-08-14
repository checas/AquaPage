(function($){

	"use strict"; 

/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */

$('#loader-wrapper').delay(1050).fadeOut('slow');
$('body').delay(350).css({
    'overflow': 'visible'
});

/* ---------------------------------------------- /*
* Animated scrolling / Scroll Up
/* ---------------------------------------------- */

$('.navbar-nav a[href^="#"]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 0
	}, 1500, 'easeInOutExpo');
	e.preventDefault();
});

$('#scroll-up').on("click", function(e){
	e.preventDefault();
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(window).on('scroll', function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

/* ---------------------------------------------- /*
* Navbar
/* ---------------------------------------------- */

$('.header').sticky({
	topSpacing: 0
});

$('body').scrollspy({
	target: '.navbar-custom',
	offset: 70
})

$(".ham").on('click', function(event) {    
    $(this).toggleClass("active");
});

/* ---------------------------------------------- /*
* Background image.
/* ---------------------------------------------- */

$(".js-height-full").height($(window).height());

$(window).resize(function(){
	$(".js-height-full").height($(window).height());
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	$('#home, .hire-section').css({'background-attachment': 'fixed'});
} else {
	$('#home, .hire-section').parallax('50%', 0.1);
}

/* ---------------------------------------------- /*
* Twitter
/* ---------------------------------------------- */


$('.testimonials').owlCarousel({
	singleItem: true,
	navigation: false,
	pagination: true,
	slideSpeed : 300,
	paginationSpeed : 400,
	autoPlay: 5000,
	navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
});

/* ---------------------------------------------- /*
* Initialize shuffle plugin
/* ---------------------------------------------- */

var $portfolioContainer = $('.list-items-container');

$('#filter li').on('click', function (e) {
	e.preventDefault();

	$('#filter li').removeClass('active');
	$(this).addClass('active');

	var group = $(this).attr('data-group');
	var groupName = $(this).attr('data-group');

	$portfolioContainer.shuffle('shuffle', groupName );
});

$(window).on('load', function() {

	$('.simple-ajax-popup').magnificPopup({
		type: 'image',
		gallery:{enabled:true}
	});

});

/* ---------------------------------------------- /*
* WOW Animation When You Scroll
/* ---------------------------------------------- */

new WOW().init();


/* ---------------------------------------------- /*
* A jQuery plugin for fluid width video embeds
/* ---------------------------------------------- */

$('body').fitVids();

/* ---------------------------------------------- /*
* Typed Text
/* ---------------------------------------------- */


$(".typed").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
    });
});


/* ---------------------------------------------- /*
* START: Switcher
/* ---------------------------------------------- */

$('.toggle-theme-panel').on("click",function(e) {
    e.preventDefault();
    $('.settings_panel').toggleClass('active');
});
$('.colors-switch a').on("click",function(e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $('head').append('<link rel="stylesheet" href="assets/css/'+attr+'.css">');
});

/* ---------------------------------------------- /*
* Youtube Player init
/* ---------------------------------------------- */

if($(".youtube-bg").length > 0){

	$(".youtube-bg").mb_YTPlayer();

}

/* ---------------------------------------------- /*
* Mouse Follower
/* ---------------------------------------------- */

var mouseX = 0,
    mouseY = 0,
    limitX = 150 - 15,
    limitY = 150 - 15;
$('#fullpage').mousemove(function (e) {
    var offset = $('#fullpage').offset();
    mouseX = Math.min(e.pageX - offset.left, limitX);
    mouseY = Math.min(e.pageY - offset.top, limitY);
    if (mouseX < 0) mouseX = 0;
    if (mouseY < 0) mouseY = 0;
    mouseX = e.pageX;
    mouseY = e.pageY;
});
// cache the selector
var follower = $("#follower");
var xp = 0,
    yp = 0;
var loop = setInterval(function () {
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    follower.css({
        left: xp - 15,
        top: yp - 15
    });
}, 0);

})(jQuery);