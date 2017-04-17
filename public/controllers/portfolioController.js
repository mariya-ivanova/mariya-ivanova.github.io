// portfolioController
import 'jquery'
import templates from 'templates.js'

export default {
   all: function() {

        templates.load('portfolio')
            .then(function(data) {								
				$('#main').html(data);									
        });			
    }
}