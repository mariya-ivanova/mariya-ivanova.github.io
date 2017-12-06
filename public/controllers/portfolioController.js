// portfolioController
import 'jquery'
import templates from 'templates.js'

export default {
   all: function() {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('portfolio'));   
        });     	

        templates.load('portfolio')
            .then(function(data) {								
				$('#main').html(data);									
        });			
    }
}