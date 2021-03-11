  (function($) {
    $.fn.slider = function () {

      function setCurrent(el) {      
        var src, title;
        src = el.data('src');

        ($('#large img')).attr('src', src);
        ($('#list .current')).removeClass('current');
        return el.addClass('current');
      }

      ($('#list ul li')).on('click', function(ev) {
        return setCurrent($(this));
      });

      ($('#btn-prev')).on('click', function(ev) {
        var index, prev;
        index = ($('#list .current')).data('index');
        index--;

        if (index < 0) {
          index = 0;
        }
        prev = $('#list ul li[data-index=' + index + ']');
        return setCurrent(prev);
      });

      ($('#btn-next')).on('click', function(ev) {
        var index, next;
        index = ($('#list .current')).data('index');
        index++;

        if (index > 3) {
          index = 3;
        }
        next = $('#list ul li[data-index=' + index + ']');
        return setCurrent(next);
      });

      return this;
    };

  })(jQuery);
