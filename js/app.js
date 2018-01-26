document.addEventListener('load',() => {

  function pluginHover() {

    var container = document.getElementsByClassName('container-images');
    var images = document.getElementsByClassName('hover-img');

    images.addEventListener('mouseover', () => {
      images.innerHTML = `<figure><img src=` +  + `</figure>`
    })

  }

});