$(document).ready(function(){
 
  // hide our element on page load
  $('#laptop').css('opacity', 0);
 
  $('#laptop').waypoint(function() {
      $('#laptop').addClass('fadeInLeft');
  }, { offset: '50%' });
 
}