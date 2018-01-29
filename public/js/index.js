'use strict';

$(document).load(function () {

    (function ($) {
        var _this = this;

        $.fn.Cardify = function () {

            $this = $(_this);
            $('img').hover(function () {
                $this.animate({
                    height: '250px',
                    width: '230px'
                });
            });
        };
    })(jQuery);
});