red = '';
blue = '';
green = '';

chrome.storage.sync.get(
	{
	    'redPattern': null,
	    'bluePattern': null,
	    'greenPattern': '(twitter|google|facebook|fb)\.com'
  	}, function(items) {
    	red = items.redPattern;
    	blue = items.bluePattern;
    	green = items.greenPattern;
 	}
 );

$("body").bind('DOMSubtreeModified', function() {

    $('span[email]').each(

		function(i) {
	    	email = $(this);
	    	address = email.attr('email');
	    	domain = address.split('@')[1];

	    	var rP = new RegExp(red)
			if (red != null && red != '' && domain.match(rP)) {
	        	email.css('color', 'red');
	        	return
	        }

	    	var bP = new RegExp(blue)
	    	if (blue != null && blue != '' && domain.match(bP)) {
	        	email.css('color', 'blue');
	        	return
	        }

	    	var gP = new RegExp(green)
			if (green != null && green != '' && domain.match(gP)) {
	        	email.css('color', 'green');
	        	return
	        }

		}
	)

});

