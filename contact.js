// section 1 close nav
var section1 = document.getElementById("section1")
var close = document.getElementById("close")

close.addEventListener("click", function () {
    section1.style.display = "none"
})
// menubarjs for contact form
var menubar = document.getElementById("menubar")
var sidenav = document.getElementById("sidenav")
var closesidenav = document.getElementById("closesidenav")

menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})
closesidenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})