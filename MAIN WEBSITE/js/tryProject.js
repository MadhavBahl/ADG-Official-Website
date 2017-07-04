var iphone = document.getElementById('iphoneFrame');
var container = document.getElementById('container');
var widthDesktop =  window.innerWidth;
var heightDesktop = window.innerHeight;
var widthMobile = screen.width;
var heightMoblie = screen.height;
var infoOne = document.getElementById('projectInfo1');
var infoTwo = document.getElementById('projectInfo2');
var projectImage = document.getElementById('coverProjects');
var bodyHeight;
var disp = document.getElementById('disp');
var scrollPos;
var bottomPos;
var bodyHeight = $("body").height()-$(window).height();
var docWidth = document.documentElement.clientWidth;
var vwPos;

if(widthDesktop>500){
  iphone.style.width = "22vw";
  iphone.style.backgroundSize = "22vw";
  iphone.style.height = "80vh";
  iphone.style.display = "inline-block";
  projectImage.style.marginTop = "6vw";
  projectImage.style.marginLeft = "3vw";
  projectImage.style.width = "16vw";
  projectImage.style.overflow = "hidden";
  projectImage.style.position = "absolute";
  projectImage.style.clip = "rect(0vw,16vw,27.4vw,0)";



}else{
  iphone.style.width = "80vw";
  iphone.style.backgroundSize = "80vw";
  iphone.style.height = "80vh";
  infoOne.style.display = "none";
  infoTwo.style.display = "none";
}

window.onscroll = function() {

    scrollPos = $(window).scrollTop();
    vwPos = ((scrollPos*100)/docWidth);
    bottomPos = vwPos + 27.4;
    var slowDown = vwPos*0.01;


    disp.innerHTML = vwPos;
    $("#coverProjects").css({
        "clip": "rect(" + vwPos + "vw,16vw," + bottomPos + "vw,0vw)"
    });
    $("#coverProjects").css({
        "marginTop": 6 - vwPos + "vw",
    });

};
