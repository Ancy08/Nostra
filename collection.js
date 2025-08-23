// section 1 close nav
var section1 = document.getElementById("section1")
var close = document.getElementById("close")

close.addEventListener("click", function () {
    section1.style.display = "none"
})
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
//  search functionality

var collectioncontainer = document.getElementById("collection-list")
var search = document.getElementById("search")
var collectionlist = collectioncontainer.querySelectorAll("div")
console.log(collectionlist)
search.addEventListener("keyup",function(){
   var enteredValue = event.target.value.toUpperCase()
   for(count=0;count<collectionlist.length;count=count+1){
      var collectionName = collectionlist[count].querySelector("h1").textContent
      if(collectionName.toUpperCase().indexOf(enteredValue)<0)
      {
         collectionlist[count].style.display = "none"
      }
      else{
         collectionlist[count].style.display = "block"
      }
   }

})
