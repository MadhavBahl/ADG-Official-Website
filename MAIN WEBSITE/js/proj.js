var dodge = document.getElementById('dodge');
var projectImage = document.getElementById('freshers');
projectImage.style.position = "absolute";
projectImage.style.clip = "rect(0px,228px,410px,0)";
var scrollPos;
var bottomPos;
var bottomPos2;
var widthDesktop =  window.innerWidth;

if(widthDesktop>520){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 0.647*scrollPos;
    bottomPos2 = 410 - 0.647*scrollPos;
    //document.getElementById('disp').innerHTML=scrollPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(bottomPos<410){
      $("#dodge").css({
        "marginTop": bottomPos2-2
      });
    }
  };
}
else{
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 0.75*scrollPos;
    bottomPos2 = 410-0.75*scrollPos;
    //document.getElementById('disp').innerHTML=bottomPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(bottomPos<410){
      $("#dodge").css({
        "marginTop": bottomPos2-4
      });
    }
  };
}
