var dodge = document.getElementById('vu');
var projectImage = document.getElementById('freshers');
var projectImage2 = document.getElementById('vu');
projectImage.style.position = "absolute";
projectImage2.style.position = "absolute";
projectImage.style.clip = "rect(0px,228px,410px,0)";
projectImage2.style.clip = "rect(0px,228px,0px,0)";

var scrollPos;
var bottomPos;
var bottomPos2;
var widthDesktop =  window.innerWidth;

if(widthDesktop>520){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.5*(scrollPos-640);
    bottomPos2 = 410 - 0.647*scrollPos;
    //document.getElementById('disp').innerHTML=scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>640){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }

  };
}
else{
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-1.42*(scrollPos-288);
    bottomPos2 = 410-1.42*scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    //document.getElementById('disp').innerHTML=scrollPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>288){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }

  };
}
