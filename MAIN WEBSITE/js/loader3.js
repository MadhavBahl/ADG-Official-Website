var overlay = document.getElementById("overlay");
var mainContent = document.getElementById("mainContent");
var img = document.getElementById("delta");
var nav = document.getElementById("navBar");
var img2 = document.getElementById("img1");
mainContent.style.display = 'none';
nav.addEventListener('load', function(){
  overlay.style.display = 'none';
  mainContent.style.display = 'block';
  console.log("LOADER HIDEN");
})
img.addEventListener('load', function(){
  overlay.style.display = 'none';
  mainContent.style.display = 'block';
  console.log("LOADER HIDEN");
})
img2.addEventListener('load', function(){
  overlay.style.display = 'none';
  mainContent.style.display = 'block';
  console.log("LOADER HIDEN");
})
