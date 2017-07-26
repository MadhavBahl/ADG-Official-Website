var widthDesktop =  window.innerWidth;
var mainModal = document.getElementById('mainModal');

if(widthDesktop>520){
  $("#mainModal").css({
      "margin-left": "-30vw";
  });
}
