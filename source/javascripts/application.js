//= require "_jquery-1.12.0.min"


$(window).load(function() {

	//SVG FALLBACK
	if (!Modernizr.svg) {
	  $("img[src$='.svg']")
	    .attr("src", fallback);
	}

});

$(document).ready(function(){

});