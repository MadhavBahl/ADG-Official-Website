var dodge = document.getElementById('dodge');
var projectImage = document.getElementById('freshers');
projectImage.style.position = "absolute";
projectImage.style.clip = "rect(0px,228px,410px,0)";
var scrollPos;
var bottomPos;
var widthDesktop =  window.innerWidth;

if(widthDesktop>520){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.547*scrollPos;
    //document.getElementById('disp').innerHTML=scrollPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
  };
}
else{
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.75*scrollPos;
    //document.getElementById('disp').innerHTML=bottomPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
  };
}
