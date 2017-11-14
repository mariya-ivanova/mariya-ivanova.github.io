// animatedBannersController
import 'jquery'
import templates from 'templates.js'
import mybanner from 'mybanner.js'

export default {
   all: function() {

        templates.load('animatedBanners')
            .then(function(data) {								
				$('#main').html(data);				
				mybanner.all();				
        });			
    }
}