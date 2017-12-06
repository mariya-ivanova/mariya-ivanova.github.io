// aboutmeController
import 'jquery'
import templates from 'templates.js' 

export default {
    all: function(sammy) {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('aboutme'));  
        });   
        
        var lang = sammy.params['lang'] || ':bg';
        if(lang == ':en') {
        	templates.load('aboutmeen')
            .then(function(data) {							
				$('#main').html(data);  
			});	      	
        }
        else {
            templates.load('aboutme')
            .then(function(data) {							
				$('#main').html(data);												
        	});	
        }	

    }
}