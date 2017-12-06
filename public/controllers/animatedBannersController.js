// animatedBannersController
import 'jquery'
import templates from 'templates.js'
import mybanner from 'mybanner.js'
import mybanner250x400 from 'mybanner250x400.js'

export default {
   all: function() {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('animatedbanners'));   
        });     	

        templates.load('animatedBanners')
            .then(function(data) {								
				$('#main').html(data);			
				mybanner.all();	
				mybanner250x400.all();		
        });		
    }
}