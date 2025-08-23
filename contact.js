// sidenav
var menubar = document.getElementById("menubar")
var closesidenav = document.getElementById("closesidenav")
var closenav = document.getElementById("closenav")
 menubar.addEventListener("click",function(){
    sidenav.style.right = 0
 })
 closesidenav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
 })