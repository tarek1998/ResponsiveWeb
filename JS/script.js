$(document).ready(function() {
    $('#marime').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#marime').removeClass('alt-slide');
        } 
    });  
  });