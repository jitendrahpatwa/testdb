/*
* Test.js `use in body tag`
*
* Require jQuery library from below url to import in body
* use `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>`
*/

// Take name attribute from `form`
var formname = $('#myForm');

// a div element to append response
// since first we have id of div 
var divName = $('#divName'); 

$(function() { // may be commented
    
    $(formname).submit(function(event) {
	    
	    event.preventDefault();	
	    
	    var formData = $(formname).serialize();
	    
	    $.ajax({
		    type: 'POST',
		    url: $(formname).attr('action'),// a server url to be call for login
		    data: formData
		})
		.done(function(response) {
			// A typical json response from server in response element
			/*
			*	{
			*		userName:"ABC",email:"abc@domain.com",age:"20"
			*	}
			*/
			var data = JSON.stringify(response);
            //alert(data);
			if(data){
			    divName.append("<h2>Logged User Is:"+ response.userName +"</h2>");
			}
			else{
			    divName.append("<span>Ooops! Something not right.</span>");
			}
		}).fail(function(data) {
			// print 'Value not fetched'
			divName.append("<span>Value not fetched.</span>");
		});
	});
}); // 