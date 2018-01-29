'use strict';

(function ($) {

  $.fn.Cardify = function () {

    $('img').hover(function () {
        $(this).before('<figure></figure>');
        $('figure').html($(this))
    });
  };
})(jQuery);