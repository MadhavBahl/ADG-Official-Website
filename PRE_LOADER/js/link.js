var bdy = document.getElementsByTagName("BODY")[0];
bdy.addEventListener("mouseover",function(){
  bdy.style.cursor = "pointer";
})
bdy.addEventListener("click",function(){
  location.href = "../MAIN WEBSITE/index.html";
})
