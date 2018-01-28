'use strict';

window.addEventListener('load', function () {
  var container = document.getElementById('container-images');
  var images = document.getElementsByTagName('img');

  function pluginHover() {
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function () {
        // container.removeChild(event.target);
        var figure = document.createElement('figure');
        event.target.appendChild(figure);

        var figurecaption = document.createElement('p');
        figure.appendChild(figurecaption);
        figurecaption.innerHTML = event.target.alt;

        // var img=document.createElement('img');
        // figure.appendChild(img);
        // img.setAttribute('src', this.src);
        // this.replaceChild(figure);
      });
    }
  }
  pluginHover();
});
