// homeController
import 'jquery' 
import templates from 'templates.js' 


export default {
   all: function() {

		templates.load('home')
            .then(function(data) {		
				$('#main').html(data);
            });
	
	}
}