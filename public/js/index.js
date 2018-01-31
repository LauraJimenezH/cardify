'use strict';
//1
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

  $.fn.Cardify = function () {

    $(this).find('img').each(function () {
      $(this).wrap('<figure></figure>');
      $(this).hover(function () {
        $(this).parent().append($('<figcaption>' + $(this).attr('alt') + '</figcaption>'));
      }, function () {
        $('figcaption').remove();
      });
    });
  };
})(jQuery);

// 3
// (function($) {
//   $.fn.Cardify = () => {

//     let container = $('.container');
//     let pluginHover = (container) => {
//       let contImg = container.find('img').each();

//       for (let i = 0; i < contImg.length; i++) {
//       let figure = contImg.wrap('<figure></figure>');
//         let altImage = $(contImg[i]).attr('alt');
//         let figcaption = $('<figcaption>' + altImage + '</figcaption>');
//         $('figure').append(figcaption);

//         container.append(figure);

//         $(contImg[i]).mouseover(() => {
// $(contImg[i]).wrap('<figure></figure>');
// $(contImg[i]).parent().append($('<figcaption>' + $(contImg[i]).attr('alt') + '</figcaption>'));
//   let altImage = $(contImg[i]).attr('alt');
//  let figcaption = $('<figcaption>' + altImage + '</figcaption>');
//  $(contImg[i]).append(figcaption);
// $('figcaption').css({'font-size': '50px', 'transform': 'translateX(50%)'});
//         });
//       }
//     };
//     pluginHover(container);
// }
// })(jQuery);