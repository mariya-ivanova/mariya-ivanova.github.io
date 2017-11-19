import 'jquery'

export default {
    all: function() {

        var $startButton = $('#main #250-400');  
        $startButton.hide();     

        ////////////// input data /////////////////
        var altClr = "#fb9011",
        clr = "#fb1011",
        secondOfferClr = "#ffffff",
        linkText= "mariya-ivanova.github.io",
        offer = "including \npaintings, banners \nand more",
        secondOfferText = "I hope \n{you like it}!",        
        time = "1",
        loop = 2,
        txt1 = "Please \nvisit my portfolio";

        //////////////////////// banner screen1 ///////////////////////////
        var newLine = /\n/g;
        var banner = document.getElementById('banner250x400');

        var text1 = document.createElement('div');
        text1.className = 'text general-text';
        text1.className = 'general-text';
        text1.style.background = '#ffffff';
                    
        var text = "This is {my first} \nanimated banner.";
        var parsedText = text.replace(/\n/g, "<br/>");
        parsedText =  parseText(parsedText, altClr);

        var paragraph = document.createElement('p');
        paragraph.innerHTML = parsedText;
        paragraph.style.color = clr;      
        paragraph.style.lineHeight = 1.15;  
        text1.appendChild(paragraph);

        //second offer text
        secondOfferText = secondOfferText.replace(newLine, "<br/>");
        secondOfferText = parseText(secondOfferText, altClr);

        var secondOffer = document.createElement('div');
        secondOffer.className = 'secondOffer';
        secondOffer.innerHTML = secondOfferText;
        secondOffer.style.color = secondOfferClr;            
        secondOffer.style.lineHeight = 1;

        banner.appendChild(text1);
        banner.appendChild(secondOffer);
        
        var tween = new TimelineMax({
            // paused: true,
            onComplete: checkLoop
        });

        var defaultTime = 2;
        time = (time - 0);
        defaultTime = time > 0 ? time : defaultTime;   

        //open circle
        tween
            .addLabel('start')
            .from(text1, 0.5, {x: 100, y: 90, autoAlpha: 0, ease: Sine.easeOut, width: 0, height: 0}, 'start')
            .from(paragraph, 0.5, {x: -60, y: -60, autoAlpha: 0, ease: Sine.easeOut}, 'start')
            .from(secondOffer, 1.3, { autoAlpha: 0, ease: Sine.easeOut}, 'start+=1.2')            

        //close circle
        tween
            .addLabel('hideArrows', '+=' + defaultTime)   
            .to(secondOffer, 0.2, { autoAlpha: 0, ease: Sine.easeOut}, 'hideArrows')                            
            .to(text1, 0.5, {x: 100, y: 90, autoAlpha: 0, width: 0, height: 0}, 'hideArrows')
            .to(paragraph, 0.5, {x: -60, y: -60, autoAlpha: 0}, 'hideArrows')     
          
        //////////////////////////// screen2 ////////////////////////////////
            
        //labels text
        var labels = document.createElement('div');
        labels.className = 'text labelsOffer';
        labels.style.lineHeight = 1;
        labels.innerHTML = txt1; 
        labels.style.color = altClr;

        //link text
        var link = document.createElement('div');
        link.className = 'text link';
        link.innerHTML = linkText;
        link.style.lineHeight = 1;            
        link.style.color = clr;

        //offer text
        var offerTxt = document.createElement('div');
        offerTxt.className = 'text OfferText';
        offerTxt.style.lineHeight = 0.9;

        offer = offer.replace(newLine, "<br/>");
        offerTxt.innerHTML = offer;

        var hr = document.createElement('hr');
        hr.className = 'offerLine';

        var offerContainer = document.createElement('div'); 
        offerContainer.id = "offerContainer";
        offerContainer.style.background = '#ffffff';
        offerContainer.appendChild(labels);
        offerContainer.appendChild(link);  
        offerContainer.appendChild(hr);                     
        offerContainer.appendChild(offerTxt);  
        banner.appendChild(offerContainer);                                   

        //show offers
        tween
            .addLabel('up')
            .from(offerContainer, 0.2, { autoAlpha: 0, width: 240, height: 240,})             
            .to(offerContainer, 1.7, { autoAlpha: 1, width: 360, height: 360, top: -60, left: -40}, 'up')            
            .to(link, 0.15, {opacity: 1, ease: Expo.easeOut},'up');                          

        //hide offers
        tween
            .addLabel('hideTexts', '+=' + defaultTime)               
            .to(link, 0.15, {y: -30, ease: SteppedEase.config(6)}, 'hideTexts')
            .to(hr, 0.15, {autoAlpha: 0, ease: Sine.easeOut})
            .to(offerTxt, 0.45, {y: -60, ease: SteppedEase.config(6)}); 

        document.getElementById('banner250x400').style.opacity = 1;       

        function checkLoop() { 
            if (loop > 1) {
                loop -= 1;  
                this.restart();              
            }
            else {
                $startButton.show();                 
            }
        }                

        function parseText(text, altClr) {
            var repOpen = '<span class="altColor", style="color:' + altClr + '">',
                repClose = '</span>';
            return text.replace(/{/g, repOpen).replace(/}/g, repClose);
        }   

        $startButton.on('click', function() {
            tween.restart();
        });              

    }
}