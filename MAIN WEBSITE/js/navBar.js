var overlay = document.getElementById("overlay");
var mainContent = document.getElementById("mainContent");

mainContent.style.display = 'none';



$(window).load(function(){

  overlay.style.display = 'none';
  mainContent.style.display = 'block';

  $("#links").css("display", "none");
  var scroll_start = 0;
  var startchange = $('#section2');
  var startSecondChange = $('#aboutADG');
  var offset = startchange.offset();
  var offSecondset = startSecondChange.offset();

  $("#imageCarousel1").hover(function(){
    /*$("#links").css("transition", "1s");
    $("#links").css("color", "rgba(255,255,255,1.0)");
    $("#links").css("display", "block");*/
    $("#links").fadeIn();
    }, function(){

    $("#links").fadeOut();

  });

  //document.getElementById('disp').innerHTML=offset.top;
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start >= offset.top-49 && scroll_start < offSecondset.top -49) {
      $('#navBar').css('transition','1s');
      $('#navBar').css('background-color', '#202020');
      $('.lAd').css('color', 'rgb(230,230,230)');
      console.log('At section 2');
    }
    else if(scroll_start >= offSecondset.top-49){
      $('#navBar').css('transition','1s');
      $('#navBar').css('background-color', 'rgba(15,15,15,1)');
      $('.lAd').css('color', 'rgb(240,240,240)');
      console.log('At section 3');
    }
    else {
      $('#navBar').css('transition','1s');
      $('#linkAddress:hover').css('color: rgb(230,230,230);');
      $('#navBar').css('background-color', 'rgba(235,235,235,0.02)');
      $('.lAd').css('color', 'rgb(255,255,255)');
      console.log('Other Sections')
    }
  });

  $("html, body").animate({scrollTop:0 }, 50);
  var offsetSize = $(".header").innerHeight();
  $("html, body").animate({scrollTop:$(window.location.hash).offset().top-offsetSize }, 900);

});
