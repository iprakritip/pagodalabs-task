
var menu= document.getElementById("menu");
var nesponsiveNav= document.getElementById("responsiveNav")
var navOverlay= document.getElementById("navOverlay");
var closeMenu = document.getElementById("closeMenu");


menu.addEventListener("click", showOverlay);
function showOverlay(){
    navOverlay.style.display="block";
    responsiveNav.style.right="0";
    disableScroll();
}
closeMenu.addEventListener("click",function(){
    navOverlay.style.display="none";
})


