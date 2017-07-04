var widthDesktop = window.innerWidth;
var widthPhone = screen.width;
var heightDesktop = window.innerHeight;
var iPhone = document.getElementById('iphone');
var appStore = document.getElementById('appStore');
var mainContainer = document.getElementById('mainContainer');
var projectInfo = document.getElementById('projectInfo');
if (widthDesktop>450){
  iPhone.style.width = "22vw";
  mainContainer.style.marginTop = "5%";
  appStore.style.width = "20%";
  projectInfo.style.marginLeft = "50%";
} else{
  iPhone.style.width = "80vw";
  mainContainer.style.marginTop = "15%";
  appStore.style.width = "80%";
  projectInfo.style.display = "none";
}
