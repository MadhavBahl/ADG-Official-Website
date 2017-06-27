var bdy = document.getElementsByTagName("BODY")[0];
/*bdy.addEventListener("mouseover",function(){
  bdy.style.cursor = "pointer";
})*/


function myfunc(){
  location.href = "home.html";
}
function myFunction(){
  setTimeout(myfunc, 1500);
}
