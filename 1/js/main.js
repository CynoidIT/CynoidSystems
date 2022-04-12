window.onscroll = function() {stickyMenu()};
  
var navBar = document.getElementById("navBar");
var sticky = navBar.offsetTop+100;

function stickyMenu() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky")
    }
    else {
        navBar.classList.remove("sticky");
    }
}