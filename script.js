/* Opens the navigation modal */
function openNav() {
    document.getElementById('mySidenav').style.width = "100%";
    var hamburger = document.getElementById('hamburger');
    if (hamburger.style.display === "none") {
        hamburger.style.display = "block";
    }   else {
        hamburger.style.display = "none";
    }
}
/* Closes the nvaigation modal */
function closeNav() {
    document.getElementById('mySidenav').style.width = "0";
    var hamburger = document.getElementById('hamburger');
    hamburger.style.display = "block";
}
/* Loops through the navItems and adds event listener */
onload = function() {
    var navs = document.querySelectorAll('.navItem');
    for (i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', closeNav)
    }
}