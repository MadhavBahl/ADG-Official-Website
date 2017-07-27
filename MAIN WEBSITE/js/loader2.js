var overlay = document.getElementById("overlay");
var mainContent = document.getElementById("mainContent");
mainContent.style.display = 'none';
window.addEventListener('load', function(){
  overlay.style.display = 'none';
  mainContent.style.display = 'block';
  console.log("LOADER HIDEN");

})
