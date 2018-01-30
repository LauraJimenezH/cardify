'use strict';

// window.addEventListener('load', () => {
//   const container = document.getElementById('container-images');
//     const images = document.getElementsByTagName('img');

//     function pluginHover() {
//       for (var i = 0; i< images.length; i++) {
//         images[i].addEventListener('click', () => {
//           // container.removeChild(event.target);
//         let figure = document.createElement('figure');
//          event.target.appendChild(figure);

//         let figurecaption = document.createElement('p');
//         figure.appendChild(figurecaption);
//         figurecaption.innerHTML = event.target.alt;

//         // var img=document.createElement('img');
//         // figure.appendChild(img);
//         // img.setAttribute('src', this.src);
//         // this.replaceChild(figure);
//         });
//       }
//     }
//     pluginHover();
// });

(function ($) {
  var _this = this;

  $.fn.Cardify = function () {

    $('img').click(function () {
      $(_this).parent().append('<figure><img src="' + $(_this).attr('src') + '"><figcaption>' + $(_this).attr('alt') + '</figcaption></figure>');
      $(_this).remove();
    });
  };
})(jQuery);