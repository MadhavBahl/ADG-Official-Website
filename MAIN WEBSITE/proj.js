var dodge = document.getElementById('vu');
var projectImage = document.getElementById('freshers');
var projectImage2 = document.getElementById('dodge');
//var projectImage3 = document.getElementById('dodge');
projectImage.style.position = "absolute";
projectImage2.style.position = "absolute";
//projectImage3.style.position = "absolute";
projectImage.style.clip = "rect(0px,228px,410px,0)";
projectImage2.style.clip = "rect(0px,228px,0px,0)";
//projectImage3.style.clip = "rect(0px,228px,0px,0)";

var scrollPos;
var bottomPos;
var bottomPos2;
var widthDesktop =  window.innerWidth;

if(widthDesktop>520){
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-0.5*(scrollPos-640);
    //bottomPos3 = 410-0.6*(scrollPos-1440);
    bottomPos2 = 410 - 0.647*scrollPos;
    //document.getElementById('disp').innerHTML=bottomPos3;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    //projectImage3.style.clip = "rect(0px,228px,410px,0)";

    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>640 && scrollPos<1490){

      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    /*if(scrollPos>1460){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }*/

  };
}
else{
  window.onscroll = function() {
    scrollPos = $(window).scrollTop();
    bottomPos = 410-2.27*(scrollPos-288);
    //bottomPos3 = 410-2.29*(scrollPos-380);
    bottomPos2 = 410-2.27*scrollPos;
    projectImage.style.zIndex = 99;
    projectImage2.style.zIndex = 9;

    projectImage2.style.clip = "rect(0px,228px,410px,0)";
    //projectImage3.style.clip = "rect(0px,228px,410px,0)";
    document.getElementById('disp').innerHTML=scrollPos;
    $("#freshers").css({
        "clip": "rect(" + 0 + "px,228px," + bottomPos2 + "px,0px)"
    });
    if(scrollPos>288){

      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos + "px,0px)"
      });
    }
    /*if(scrollPos>380){
      projectImage2.style.zIndex = -1;
      $("#dodge").css({
          "clip": "rect(" + 0 + "px,228px," + bottomPos3 + "px,0px)"
      });
    }*/
  };
}
