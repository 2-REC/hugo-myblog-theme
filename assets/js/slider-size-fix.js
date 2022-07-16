/* TODO(2-REC): Unnescessary now as page reloaded on resize
=> Can be deleted
 */
;(function($,undefined){"use strict";

var resizeTimer;

$(window).on('resize', function(e) {

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(function() {
    var $cont = $('.slider-cycle');
    var $slides = $cont.children();
        $slides.each(function(){
            var $el=$(this);
            this.cycleH=$el.parents('.featured-slider').height();
            this.cycleW=$el.parents('.featured-slider').width();
        });

        $('.slider-cycle').cycle("next");

    var $cont = $('.slider-cycle-header');
    var $slides = $cont.children();
        $slides.each(function(){
            var $el=$(this);
            this.cycleH=$el.parents('.featured-slider').height();
            this.cycleW=$el.parents('.featured-slider').width();
        });

        $('.slider-cycle-header').cycle("next");
            
            
  }, 100);

});

})(jQuery);