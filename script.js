$(document).ready(function() {
    // Save event when user leaves textarea
    $('.event').blur(function() {
      var event = $(this).val();
      var hour = $(this).parent().attr('id');
      localStorage.setItem(hour, event);
    });
    
    // Load saved events on page load
    $.each(localStorage, function(key, value) {
      $('#' + key + ' .event').val(value);
    });
  });