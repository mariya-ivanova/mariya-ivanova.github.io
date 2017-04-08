//import 'sammy'
import Sammy from 'sammy'
import 'jquery' 
import templates from 'templates.js' 
import aboutmeController from 'controllers/aboutmeController.js'
import homeController from 'controllers/homeController.js'
import portfolioController from 'controllers/portfolioController.js'
import websitesController from 'controllers/websitesController.js'

var containerId = '#main';
var sammyApp = Sammy(containerId, function() {
    this.get('#/', function() {
        this.redirect('#/home');
    });

	this.get('#/home', homeController.all);		
	this.get('#/portfolio', portfolioController.all);	
	this.get('#/websites', websitesController.all);	
    this.get('#/aboutme', aboutmeController.all);	

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