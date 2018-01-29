'use strict';

(function ($) {

  $.fn.Cardify = function () {

    $('img').hover(function () {
        $(this).parent().append('<figure><img src="'+$(this).attr('src')+'"><figcaption>'+$(this).attr('alt')+'</figcaption></figure>')
        $(this).remove();

    });
  };
})(jQuery);