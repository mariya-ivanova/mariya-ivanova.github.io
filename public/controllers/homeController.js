// homeController
import 'jquery' 
import templates from 'templates.js' 

export default {
   all: function(sammy) {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('home'));   
        });  

        var lang = sammy.params['lang'] || ':bg';
        if(lang == ':en') {
        	templates.load('homeen')
            .then(function(data) {					
				$('#main').html(data('home'));  
			});	      	
        }
        else {
            templates.load('home')
            .then(function(data) {							
				$('#main').html(data('home'));												
        	});	
        }	       
	
	}
}