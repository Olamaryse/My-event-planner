$(document).ready(function() {
    // Save event when user leaves textarea
    $('#task').blur(function() {
      var event = $(this).val();
      var hour = $(this).parent().attr('id');
      localStorage.setItem(hour, task);
    });
    
    // Load saved events on page load
    $.each(localStorage, function(key, value) {
      $('#' + key + ' #task').val(value);
    });
  });