// homeController
import 'jquery' 
import templates from 'templates.js' 

export default {
   all: function(sammy) {

        templates.load('languagebar')
        .then(function(data) {                    
            $('#language-bar').html(data('home'));   // 'home' is text that we define in order to get url like /#/home/:lng
        });  

        var lang = localStorage.getItem('lang') || ':bg';
        lang = sammy.params['lang'] || lang;

        if(lang == ':en') {
        	templates.load('homeen')
            .then(function(data) {	
                $('#main').html(data);
			});	      	
        }
        else {
            templates.load('home')
            .then(function(data) {
                $('#main').html(data);
        	});	
        }

        localStorage.setItem('lang', lang);
	}
}