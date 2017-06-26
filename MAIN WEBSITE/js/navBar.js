$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#section2');
  var startSecondChange = $('#aboutADG');
  var offset = startchange.offset();
  var offSecondset = startSecondChange.offset();
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start >= offset.top && scroll_start < offSecondset.top) {
      $('#navBar').css('transition','1s');
      $('#navBar').css('background-color', '#202020');
      $('.lAd').css('color', 'rgb(230,230,230)');
      console.log('At section 2');
    }
    else if(scroll_start >= offSecondset.top){
      $('#navBar').css('transition','1s');
      $('#navBar').css('background-color', 'rgba(15,15,15,0.8)');
      $('.lAd').css('color', 'rgb(240,240,240)');
      console.log('At section 3');
    }
    else {
      $('#navBar').css('transition','1s');
      $('#linkAddress:hover').css('color: rgb(230,230,230);');
      $('#navBar').css('background-color', 'rgba(235,235,235,0.3)');
      $('.lAd').css('color', 'rgb(20,20,20)');
    }
  });
});
