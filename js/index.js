$(document).ready(function() {
  setTimeout(function() {
    $('h4').addClass('slide-in');
  }, 500);
});
$('.trigger').on('click', function() {
  $('h3').toggleClass('slide-in');
});
