var iphone = document.getElementById('iphoneFrame');
var container = document.getElementById('container');
var widthDesktop =  window.innerWidth;
var heightDesktop = window.innerHeight;
var widthMobile = screen.width;
var heightMoblie = screen.height;
var infoOne = document.getElementById('projectInfo1');
var infoTwo = document.getElementById('projectInfo2');
var infoThree = document.getElementById('projectInfo3');
var projectImage = document.getElementById('coverProjects');
var bodyHeight;
var disp = document.getElementById('disp');
var scrollPos;
var bottomPos;
var bodyHeight = $("body").height()-$(window).height();
var docWidth = document.documentElement.clientWidth;
var docHeight = document.documentElement.clientHeight;
var vwPos;
var toVh = 100/heightDesktop;
var toVw = 100/widthDesktop;
var imgHeight = projectImage.clientHeight;
var imgHeightInVh = imgHeight*toVh;
var imgHeightInVw = imgHeight*toVw;
var tempHt = 74;

if(widthDesktop>500){
  iphone.style.width = "22vw";
  iphone.style.backgroundSize = "22vw";
  iphone.style.height = "80vh";
  infoTwo.style.display = "none";
  infoThree.style.display = "none";
  iphone.style.display = "inline-block";
  //container.style.minHeight = "115vw";
  $("#container").css({
    "minHeight": tempHt + "vw"
  });
  projectImage.style.marginTop = "6vw";
  projectImage.style.marginLeft = "3vw";
  projectImage.style.width = "16vw";
  projectImage.style.overflow = "hidden";
  projectImage.style.position = "absolute";
  projectImage.style.clip = "rect(0vw,16vw,27.4vw,0)";

  window.onscroll = function() {

      scrollPos = $(window).scrollTop();
      vwPos = ((scrollPos*100)/docWidth);
      bottomPos = vwPos + 27.4;
      var slowDown = vwPos*0.01;

      if(vwPos<19){
        tempHt=74;
        container.style.transition = "1s";
        container.style.backgroundColor = "rgb(33,33,33)";
        infoOne.style.display = "block";
        infoTwo.style.display = "none";
        infoThree.style.display = "none";
      }else if(vwPos<39){

        container.style.transition = "1s";
        container.style.backgroundColor = "rgb(10,10,10)";
        infoOne.style.display = "none";
        infoTwo.style.display = "block";
        infoTwo.style.marginTop = "33vw";
        infoThree.style.display = "none";
      }else{
        container.style.transition = "1s";
        container.style.backgroundColor = "rgb(33,33,33)";
        infoOne.style.display = "none";
        infoTwo.style.display = "none";
        infoThree.style.marginTop = "66vw";
        infoThree.style.display = "block";
      }
      if(bottomPos<(3*27.4)+8){
        //disp.innerHTML = bottomPos;

          tempHt+=1.3;
          $("#container").css({
            "minHeight": tempHt + "vw"
          });

        $("#coverProjects").css({
            "clip": "rect(" + vwPos + "vw,16vw," + bottomPos + "vw,0vw)"
          });
          $("#coverProjects").css({
            "marginTop": 6 - vwPos + "vw",
          });
        }

      };

}else{
  iphone.style.width = "80vw";
  iphone.style.backgroundSize = "80vw";
  iphone.style.height = "80vh";
  infoOne.style.display = "none";
  infoTwo.style.display = "none";
  infoThree.style.display = "none";
  projectImage.style.marginTop = "23vw";
  projectImage.style.marginLeft = "12vw";
  projectImage.style.width = "56vw";
  projectImage.style.overflow = "hidden";
  projectImage.style.position = "absolute";
  projectImage.style.clip = "rect(0vw,56vw,97.4vw,0)";
  //container.style.minHeight = "350vw";
  tempHt = 324;
  $("#container").css({
    "minHeight": tempHt + "vw"
  });

  window.onscroll = function() {

      scrollPos = $(window).scrollTop();
      vwPos = ((scrollPos*100)/docWidth);
      bottomPos = vwPos + 97.4;
      var slowDown = vwPos*0.01;

      if(vwPos<19){
        tempHt=274;
        container.style.transition = "1s";
        container.style.backgroundColor = "rgb(33,33,33)";

      }else if(vwPos<150){

        container.style.transition = "1s";
        container.style.backgroundColor = "rgb(10,10,10)";

      }else{
        container.style.transition = "1s";
        container.style.backgroundColor = "rgb(33,33,33)";

      }

      if(bottomPos<(3*97.4)+25){
        tempHt+=2.3;
        $("#container").css({
          "minHeight": tempHt + "vw"
        });
        //disp.innerHTML = imgHeight*toVh;
        $("#coverProjects").css({
            "clip": "rect(" + vwPos + "vw,56vw," + bottomPos + "vw,0vw)"
          });
          $("#coverProjects").css({
            "marginTop": 23 - vwPos + "vw",
          });
        }
      //if(vwPos)
  };
}
