// websitesController
import 'jquery'
import templates from 'templates.js'


export default {
   all: function() {
        templates.load('websites')
            .then(function(data) {								
				$('#main').html(data);									
        });			
    }
}