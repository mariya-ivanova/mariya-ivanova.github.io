import 'jquery'  

	(function($) {
		$.fn.gallery = function (columnsPerRow) {
			columnsPerRow = columnsPerRow || 4;
			
			var $gallery = $(this);	
			var $selected = $gallery.children('.selected');
			var $galleryList = $gallery.children('.gallery-list');
			var $imageContainers = $galleryList.children('.image-container');	
			var $currentImage = $selected.find('#current-image');
			var $previousImage = $selected.find('#previous-image');
			var $nextImage = $selected.find('#next-image');	
			
			$imageContainers.each(function(index, element){
				if(index % columnsPerRow == 0) {
					$(element).addClass('clearfix');	
				}
			});
			
			$galleryList.on('click', 'img', function(){
				$galleryList.addClass('blurred');
				$('<div />').addClass('disabled-background').appendTo($gallery);

				var $this = $(this);
				applySelected($this);
				$selected.show();			
			});
			
			$currentImage.on('click', function(){
				$selected.hide();
				$galleryList.removeClass('blurred');
				$gallery.children('.disabled-background').remove();
			});
			
			$previousImage.on('click', function(){
				var $this = $(this);
				applySelected($this);
			});

			$nextImage.on('click', function(){
				var $this = $(this);
				applySelected($this);
			});

			$gallery.addClass('gallery');
			$selected.hide();

			function applySelected($element){

				var $imgSrc = $element.attr('src');
				var index = parseInt($element.attr('data-info'));
				$currentImage.attr('src', $imgSrc);
				$currentImage.attr('data-info', index);		

				var previousIndex = getPreviousIndex(index);
				var nextIndex = getNextIndex(index);

				var previousImage = getImageByIndex(previousIndex);
				var nextImage = getImageByIndex(nextIndex);

				var $previousImgSrc = previousImage.attr('src');
				var $nextImgSrc = nextImage.attr('src');				

				$previousImage.attr('src', $previousImgSrc);
				$previousImage.attr('data-info', previousIndex);		

				$nextImage.attr('src', $nextImgSrc);
				$nextImage.attr('data-info', nextIndex);						
			}	

			function getImageByIndex(index){
				return $gallery.find('img[data-info="' + index +'"]');
			}

			function getImageInformation($element){
				return {
					src: $element.attr('src'),
					index: parseInt($element.attr('data-info'))
				}
			}
			
			function setImageInformation($element, $src, $index){
				$element.attr('src', $src);
				$element.attr('data-info', $index);
			}
			
			function getNextIndex(index){
				index++;
				if(index > $imageContainers.length){
					index = 1;
				}
				
				return index;
			}
			
			function getPreviousIndex(index){
				index--;
				if(index < 1){
					index = $imageContainers.length;
				}
				
				return index;	
			}	
			
			return this;
		};


	})(jQuery);