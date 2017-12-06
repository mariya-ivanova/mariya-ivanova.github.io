// portfolioController
import 'jquery'
import templates from 'templates.js'

export default {
   all: function() {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('subtitles'));   
        }); 

        templates.load('subtitles')
            .then(function(data) {								
				$('#main').html(data);						   
        });	

    }
}