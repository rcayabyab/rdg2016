//= require "_jquery-1.12.0.min"
//= require "_jquery.flexslider"


//Dynamic Sizing for FlexSlider
(function() {
 
  var $window = $(window),
      flexslider = { vars:{} };
 
  function getGridSize() {
    return (window.innerWidth < 639) ? 1 :
    			 (window.innerWidth > 640) ? 2 : 2;
  }
 
  $window.load(function() {
    $('.more-case-studies').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 320,
      itemMargin: 0,
      controlNav: false,
      slideshow: false,
      // customDirectionNav: $(".event-nav a"),
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());


$(window).load(function() {

	// FLEXSLIDER
	$('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,  
    animationLoop: false
  });

	//SVG FALLBACK
	if (!Modernizr.svg) {
	  $("img[src$='.svg']")
	    .attr("src", fallback);
	}

	

});

$(document).ready(function(){

	// SMOOTH SCROLL
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	// HEADER BACKGROUND CHANGE ON SCROLL
	var header = $('body > .menu-helper > header');
	// var full = $('section.hero h4');
	var range = 250; // USE IF YOU WANT A RANGE
	$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    // var offset = full.offset().top;
    var opac = scrollTop / range;
    header.css('background-color', 'rgba(9, 59, 82,' + opac + ')');
  	console.log(scrollTop, opac);
    if ( opac > '1' ) {
      header.css('background-color', 'rgba(9, 59, 82, 1)');
    } else if ( opac < '0' ) {
      header.css('background-color', 'rgba(9, 59, 82, 0)');
    }
	});

	// HAMBURGER MENU
	$('header nav .hamburger').click(function(e) {
	  e.preventDefault();
	  $('.menu-helper').toggleClass('no-scroll');
	  $('header nav ul').toggleClass('active');
	  $(this).toggleClass('active');
	});

	// DISABLE SCROLL ON GOOGLE MAP
	// Disable scroll zooming and bind back the click event
	var onMapMouseleaveHandler = function (event) {
	  var that = $(this);
	  that.on('click', onMapClickHandler);
	  that.off('mouseleave', onMapMouseleaveHandler);
	  that.find('iframe').css("pointer-events", "none");
	}
	var onMapClickHandler = function (event) {
	  var that = $(this);
	  // Disable the click handler until the user leaves the map area
	  that.off('click', onMapClickHandler);
	  // Enable scrolling zoom
	  that.find('iframe').css("pointer-events", "auto");
	  // Handle the mouse leave event
	  that.on('mouseleave', onMapMouseleaveHandler);
	}
	// Enable map zooming with mouse scroll when the user clicks the map
	$('.embed-container').on('click', onMapClickHandler);

});

