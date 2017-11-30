$(document).ready(function(){   
	setTimeout(function(){
		$('.view').removeClass('filter-red_blur');
	}, 500);
	
  var analysis = "^4000<h2>analysis:</h2>^1000<p>Survey Earth</p>^200<p>In a Day</p>^200<p>SEVEN</p>^200<p>WORLDWIDE</p><p>SUMMER SOLSTICE<br/><br/></p><p>2thousand18</p><p>LOG A POINT</p><p>at NOON your local time</p>";
	
	var tracking = "^1000match <span class='square'>&#9632;</span>";
  
	$(function(){
		var typed = new Typed("#report", {
			strings: ["^2000<p>......</p>", "^1000<p>LAND SURVEYORS ONLY</p>SUBMIT POINT<br/><br/>^1000<p><p>HELP REMEASURE<br/><br/></p>^500<p>ENTIRE SURFACE<br/><br/></p>^500<p>OF EARTH<br/>in a single day<br/><br/></p>^500<p>SEIAD7</p><p>LAND SURVEYORS UNITED</p><p>surveying Planet</p><p>EARTH, together</p>"],
			showCursor:false,
			loop: false
		});	
  	var typed = new Typed("#analysis", {
      strings: [analysis],
      loop: false,
			showCursor:false,
			typeSpeed:0,
			onComplete: function() {
				var typed = new Typed("#tracking", {
						strings: [tracking],
						loop: false,
						showCursor:false,	
						typeSpeed:50	
				});
			}
    });		

  });
});