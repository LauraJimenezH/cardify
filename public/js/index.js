'use strict';

(function($) {
  $.fn.cardify = function() {
    $(this).find('img').each(function() {
      var _this = this;

      $(this).wrap('<figure class="snip1328"></figure>');
      $(this).hover(function() {
        $(_this).parent().append($('<figcaption class="figcaption-hover">' + $(_this).attr('alt') + '</figcaption>'));
      }, function() {
        $('figcaption').remove();
      });
    });
  };
})(jQuery);