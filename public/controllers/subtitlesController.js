// portfolioController
import 'jquery'
import templates from 'templates.js'

export default {
   all: function() {

        templates.load('subtitles')
            .then(function(data) {								
				$('#main').html(data);								
        });			
    }
}