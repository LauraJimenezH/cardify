
$(document).load( () => {

      (function( $ ){
            $.fn.Cardify= () => {

              $this = $(this);
        $('img').hover(function(){
            $this.animate({
                height:'250px',
                width:'230px'
            })
        })
          };
        })( jQuery );
        
});