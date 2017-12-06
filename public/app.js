//import 'sammy'
import Sammy from 'sammy'
import 'jquery'
import templates from 'templates.js' 
import homeController from 'controllers/homeController.js'
import aboutmeController from 'controllers/aboutmeController.js'
import portfolioController from 'controllers/portfolioController.js'
import websitesController from 'controllers/websitesController.js'
import paintingsController from 'controllers/paintingsController.js'
import bannersController from 'controllers/bannersController.js'
import animatedBannersController from 'controllers/animatedBannersController.js'
import subtitlesController from 'controllers/subtitlesController.js'

var containerId = '#main';
var sammyApp = Sammy(containerId, function() {
    this.get('#/', function() {
        this.redirect('#/home');
    });

	this.get('#/home', homeController.all);		
	this.get('#/home/:lang', homeController.all);		
    this.get('#/aboutme', aboutmeController.all);	
    this.get('#/aboutme/:lang', aboutmeController.all);    
	this.get('#/portfolio', portfolioController.all);	
	this.get('#/portfolio/:lang', portfolioController.all);	
	this.get('#/websites', websitesController.all);	
	this.get('#/websites/:lang', websitesController.all);	
	this.get('#/paintings', paintingsController.all);	
	this.get('#/paintings/:lang', paintingsController.all);			
    this.get('#/banners', bannersController.all);	
    this.get('#/banners/:lang', bannersController.all);    
    this.get('#/animatedbanners', animatedBannersController.all);	  
    this.get('#/animatedbanners/:lang', animatedBannersController.all);          
    this.get('#/subtitles', subtitlesController.all);	    
    this.get('#/subtitles/:lang', subtitlesController.all);    

    templates.load('main-navbar')
		.then(function(template) {				
			$('#wrapper header').html(template);	
        });			
	
    templates.load('footer')
		.then(function(template) {					
			$('#wrapper').append(template);		
		});		
	
});

sammyApp.run('#/');