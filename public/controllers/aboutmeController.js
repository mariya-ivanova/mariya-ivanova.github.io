// aboutmeController
import 'jquery'
import templates from 'templates.js' 

export default {
    all: function(sammy) {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('aboutme'));  
        });   
        
        var lang = localStorage.getItem('lang') || ':bg';  
        lang = sammy.params['lang'] || lang;

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

        localStorage.setItem('lang', lang);
    }
}