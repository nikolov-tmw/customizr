/* ==========================================================
 * Customizr various scripts
 * ========================================================== */

jQuery(document).ready(function( $) {
!function ( $) {

  //"use strict"; // jshint ;_;

  // Store the viewport for later use
  var $viewport = $('html, body');
  $('.back-to-top').on('click', function(e){
    $viewport.on('scroll mousedown DOMMouseScroll mousewheel keyup', stop_body_scroll);
    $viewport.animate({
        scrollTop: 0
      }, 700, function(){
      $viewport.stop().off('scroll mousedown DOMMouseScroll mousewheel keyup', stop_body_scroll);
    });
    e.preventDefault();
  })

  /* Stop the viewport animation if user interaction is detected
      * ============== */
  function stop_body_scroll( e ) {
    if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
      // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after
      $viewport.stop().off('scroll mousedown DOMMouseScroll mousewheel keyup', stop_body_scroll);
    }
  }

  $(window).on( 'load' , function () {
     
     /* Detect layout and reorder content divs
      * ============== */
    var $window       = $(window);
    var windowsize    = $window.width();
    var MainContainer =  $("#main-wrapper .container .article-container");
    var LeftSidebar   =  $("#main-wrapper .container .span3.left.tc-sidebar");
    var RightSidebar  =  $("#main-wrapper .container .span3.right.tc-sidebar");
    var LeftExist     = false;
    var RightExist    = false;

    if (LeftSidebar.length > 0) {
      LeftExist       = true;
    }
    if (RightSidebar.length > 0) {
      RightExist      = true;
    }

    function checkWidthonload() {

        if (windowsize < 767) {
          if (LeftExist && RightExist) {
            $(MainContainer).insertBefore(LeftSidebar);
            }
            else if (LeftExist) {
              $(MainContainer).insertBefore(LeftSidebar);
            }
            else {
              $(MainContainer).insertBefore(RightSidebar);
            }
        }
    }


    function checkWidth() {
        //var windowsize = $window.width();
        //var target = $("#main-wrapper .container .article-container");
        if (windowsize < 767) {
            //if the window is smaller than 767px wide then turn
            $("#main-wrapper .container .span3.tc-sidebar").insertAfter(MainContainer);
          }
        else {
          if (LeftExist && RightExist) {
            $(MainContainer).insertBefore(RightSidebar);
            }
            else if (LeftExist) {
              $(MainContainer).insertAfter(LeftSidebar);
            }
            else {
              $(MainContainer).insertBefore(RightSidebar);
            }
        }
    }

     // Bind event listener after resize event
    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(checkWidth, delta);
      }
    });
    
    // Check width on load and reorders block if necessary
    checkWidthonload();

    // Add hover class on front widgets
      $(".widget-front, article").hover(
        function () {
          $(this).addClass( 'hover' );
        },
        function () {
          $(this).removeClass( 'hover' );
        });


        //arrows bullet list effect
        $( '.widget li' ).hover(function() {
          $(this).addClass("on");
        }, function() {
        $(this).removeClass("on");
      });
    })

}(window.jQuery);

});
