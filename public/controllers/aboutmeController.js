// aboutmeController
import 'jquery'
import templates from 'templates.js' 


export default {
    all: function(sammy) {

		templates.load('aboutme')
            .then(function(data) {							
				$('#main').html(data);												
        });			
    }
}