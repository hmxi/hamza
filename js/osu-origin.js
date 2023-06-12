/**
 * osu-origin.js
 */

(function ($) {
    $(document).ready(init);
    
    function init() {
      if ( $('nav#site-navigation ul').length ) {
        var options = {
          'ariaLabel' : 'Main Navigation',
          'breakpointMinWidth': 768,
          'mode' : 'dualAction',
          'responsiveSubmenuToggles' : true
        }
        
        var navbar = new a11yNavbar( 'site-navigation', options );
      }
    }
  })(jQuery);