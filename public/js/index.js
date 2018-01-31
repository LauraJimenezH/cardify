'use strict';

(function ($) {
  $.fn.cardify = function () {
    $(this).find('img').each(function () {
      var _this = this;

      $(this).wrap('<figure></figure>');
      $(this).hover(function () {
        $(_this).parent().append($('<figcaption>' + $(_this).attr('alt') + '</figcaption>'));
      }, function () {
        $('figcaption').remove();
      });
    });
  };
})(jQuery);