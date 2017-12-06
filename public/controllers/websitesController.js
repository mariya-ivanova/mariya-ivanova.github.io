// websitesController
import 'jquery'
import templates from 'templates.js'

export default {
   all: function() {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('websites'));   
        });  

        templates.load('websites')
            .then(function(data) {								
				$('#main').html(data);									
        });			
    }
}