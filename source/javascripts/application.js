//= require "_jquery-1.12.0.min"


$(window).load(function() {

	//SVG FALLBACK
	if (!Modernizr.svg) {
	  $("img[src$='.svg']")
	    .attr("src", fallback);
	}

});

$(document).ready(function(){

	// HEADER BACKGROUND CHANGE ON SCROLL
	var header = $('header');
	var full = $('section.hero h4');
	var range = 250; // USE IF YOU WANT A RANGE
	$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var offset = full.offset().top;
    var opac = scrollTop / range;
    header.css('background-color', 'rgba(9, 59, 82,' + opac + ')');
  	// console.log(scrollTop, offset, opac);
    if ( opac > '1' ) {
      header.css('background-color', 'rgba(9, 59, 82, 1)');
    } else if ( opac < '0' ) {
      header.css('background-color', 'rgba(9, 59, 82, 0)');
    }
	});

});