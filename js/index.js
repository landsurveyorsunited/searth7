$(document).ready(function(){   
	setTimeout(function(){
		$('.view').removeClass('filter-red_blur');
	}, 500);
	
  var analysis = "^^4000<h2>💮experience:</h2>^1000<p>14 yrs Web development + social media</p>^200<p>📚Masters Global Sustainability Entrepreneurship | USF</p>^200<p>📚Masters Sustainable Tourism USF </p>^200<p>📚BS Anthropology // BA Philosophy & Religion | CofC</p><p>📍Cartography / Mapping / Geosocial Network Developer<br/><br/></p><p>10 years community development - Land Surveyors United</p><p>Creator / Administrator of Survey Earth in a Day Event</p><p>email:justin.farrow-g📧</p><p>current location:</p><p>Tampa< FL</p><p>set up interview</p>";
	
	var tracking = "^1000match <span class='square'>&#9632;</span>";
  
	$(function(){
		var typed = new Typed("#report", {
			strings: ["^2000<p>......</p>", "^1000<p>checking references💯</p>everyone raved💯<br/><br/>^1000<p><p>assessment complete🃏<br/><br/></p>^500<p>fit probability 99.2<br/><br/></p>^500<p>reset to aquisition<br/> qualified</p><p>when can he start</p><p>active status</p><p>set up interview</p>"],
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
