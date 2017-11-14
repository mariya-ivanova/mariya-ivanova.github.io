// animatedBannersController
import 'jquery'
import templates from 'templates.js'
import myBanner from 'myBanner.js'

export default {
   all: function() {

        templates.load('animatedBanners')
            .then(function(data) {								
				$('#main').html(data);				
				myBanner.all();				
        });			
    }
}