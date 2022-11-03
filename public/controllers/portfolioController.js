// portfolioController
import 'jquery'
import templates from 'templates.js'

export default {
   all: function(sammy) {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('portfolio'));   
        });     	

        var lang = localStorage.getItem('lang') || ':bg';  
        lang = sammy.params['lang'] || lang;

        if(lang == ':en') {
            templates.load('portfolioen')
            .then(function(data) {                          
                $('#main').html(data);  
            });         
        }
        else {
            templates.load('portfolio')
            .then(function(data) {                          
                $('#main').html(data);                                              
            }); 
        }

        localStorage.setItem('lang', lang);
    }
}