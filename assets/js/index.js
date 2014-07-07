/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        function casperFullImg() {
            $("img").each( function() {
                var contentWidth = $(".post-content").outerWidth(); // Width of the content
                var imageWidth = $(this)[0].naturalWidth; // Original image resolution

                if (imageWidth >= contentWidth) {
                    $(this).addClass('full-img');
                } else {
                    $(this).removeClass('full-img');
                }
            });
        };

        casperFullImg();
        $(window).smartresize(casperFullImg);

        // Setup post images
        $(".post-preview").find(".post-image").each(function() {
          if($("img").length != 0){
            var postImage = $(this).find("img").attr("src");
            $(this).html("");
            $(this).css("background-image","url('"+postImage+"')")
          } else {
            $(this).remove();
          }
        });

        // single post header image
        if($(".single-post .post-content p:first img").length != 0){
            var postImage = $(".single-post .post-content p:first img").attr("src");
            $(".single-post .post-content p:first").remove();
            $(".post-image").css("background-image","url('"+postImage+"')");
        } else {
          $(".single-post .post-image").remove();
        }

    });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');