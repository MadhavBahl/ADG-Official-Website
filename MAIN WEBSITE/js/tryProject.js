function myFunction(){
  var iphone = document.getElementById('iphoneFrame');
  var widthDesktop =  window.innerWidth;
  var heightDesktop = window.innerHeight;
  var widthMobile = screen.width;
  var heightMoblie = screen.height;
  var infoOne = document.getElementById('projectInfo1');
  var projectImage = document.getElementById('coverProjects');

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
    projectImage.style.clip = "rect(0,16vw,27.4vw,0)";



  }else{
    iphone.style.width = "80vw";
    iphone.style.backgroundSize = "80vw";
    iphone.style.height = "80vh";
    infoOne.style.display = "none";
  }

}
