
(($) =>  {
  $.fn.cardify = function () {
    $(this).find('img').each(function() {
      $(this).wrap('<figure></figure>');
    $(this).mouseover(() => {
      $(this).parent().append($('<figcaption class="figcaption-hover">' + $(this).attr('alt') + '</figcaption>'));      
        },()=>{$('figcaption').remove();});
      });
  };
})(jQuery);