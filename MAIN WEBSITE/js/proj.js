var dodge = document.getElementById('vu');
var projectImage = document.getElementById('freshers');
var projectImage2 = document.getElementById('vu');
var projectImage3 = document.getElementById('dodge');
projectImage.style.position = "absolute";
projectImage2.style.position = "absolute";
projectImage3.style.position = "absolute";
projectImage.style.clip = "rect(0px,228px,410px,0)";
projectImage2.style.clip = "rect(0px,228px,0px,0)";
projectImage3.style.clip = "rect(0px,228px,0px,0)";

var scrollPos;
var bottomPos;
var bottomPos2;
var widthDesktop =  window.innerWidth;
var heightDesktop =  window.innerHeight;

if(widthDesktop>720 && heightDesktop<701){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.5*(scrollPos-640);
    bottomPos3 = 410-0.6*(scrollPos-1440);
    bottomPos2 = 410 - 0.647*scrollPos;
    //document.getElementById('disp').innerHTML=bottomPos3;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    projectImage3.style.clip = "rect(0px,228px,410px,0)";

    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>640 && scrollPos<1490){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    if(scrollPos>1460){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }

  };
}
else if(widthDesktop>720 && heightDesktop<810){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.6*(scrollPos-680);
    bottomPos3 = 410-0.6*(scrollPos-1360);
    bottomPos2 = 410 - 0.647*scrollPos;
    //document.getElementById('disp').innerHTML=scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    projectImage3.style.clip = "rect(0px,228px,410px,0)";

    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>640 && scrollPos<1490){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    if(scrollPos>1460){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }

  };
}
else if(widthDesktop>720 && heightDesktop<1100){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.668*(scrollPos-613);
    bottomPos3 = 410-0.668*(scrollPos-1226);
    bottomPos2 = 410 - 0.67*scrollPos;
    //document.getElementById('disp').innerHTML=scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    projectImage3.style.clip = "rect(0px,228px,410px,0)";

    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>640 && scrollPos<1490){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    if(scrollPos>1460){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }

  };
}
else if(widthDesktop>100 && heightDesktop<670){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-2.34*(scrollPos-175);
    bottomPos3 = 410-2.34*(scrollPos-350);
    bottomPos2 = 410-2.34*scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    projectImage3.style.clip = "rect(0px,228px,410px,0)";
    //document.getElementById('disp').innerHTML=scrollPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>186){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    if(scrollPos>380){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }
  };
}
else if(widthDesktop>100 && heightDesktop<1000){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-3*(scrollPos-136);
    bottomPos3 = 410-3*(scrollPos-272);
    bottomPos2 = 410-3*scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    projectImage3.style.clip = "rect(0px,228px,410px,0)";
    //document.getElementById('disp').innerHTML=scrollPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>186){

      $("#vu").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    if(scrollPos>380){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }
  };
}
