// portfolioController
import 'jquery'
import templates from 'templates.js'
import 'gallery'

export default {
   all: function() {

        templates.load('paintings')
            .then(function(data) {								
				$('#main').html(data);			
				$('#gallery').gallery(3);					
        });			
    }
}