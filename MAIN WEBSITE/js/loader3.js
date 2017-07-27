var overlay = document.getElementById("overlay");
var mainContent = document.getElementById("mainContent");
var img = document.getElementById('img1');
mainContent.style.display = 'none';
img.addEventListener('load', function(){
  overlay.style.display = 'none';
  mainContent.style.display = 'block';
  console.log("LOADER HIDEN");
})
