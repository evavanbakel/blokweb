//var icon = document.getElementById("zon");

//zon.onclick = function(){
  //  document.body.classList.toggle("dark-theme");
    //if(document.body.classList.toggle("dark-theme")){
     //   zon.src = "images/zon.png"
    //}else{
    //    zon.src = "/images/maan.png"
   // }
//}


//function lightMode(){
 //   var element = document.body;
 //    element.classList.toggle("light-mode");
 //  }
 
 /*----------------------------------------------------------*/

 var hamburgerMenu = document.querySelector(".menu");
 
 var menuButton = document.querySelector(".icon");

 var sluitButton = document.querySelector(".kruis");

var zoekMenu = document.querySelector(".search");

var zoekButton = document.querySelector(".zoekicon");

var sluitZoeken = document.querySelector(".kruisje");


 // Click on menu Button
 
 menuButton.addEventListener("click", toggleHamburgerMenu);
 
 
 
 function toggleHamburgerMenu(){
 
     hamburgerMenu.classList.add("visible");
 
 }
 
 // sluiten van hamburgermenu met .remove
 sluitButton.addEventListener("click", sluitHamburgermenu);
 
 
 
 function sluitHamburgermenu(){
 
     hamburgerMenu.classList.remove("visible");
 
 }

 /*----------------------------------------------------------------------*/ 
 // Voor zoekpagina
 
 zoekButton.addEventListener("click", toggleZoekpagina);
 
 
 
 function toggleZoekpagina(){
 
     zoekMenu.classList.add("aanwezig");
 
 }
 
 // sluiten van zoekpagina met .remove
 sluitZoeken.addEventListener("click", sluitZoekpagina);
 
 
 
 function sluitZoekpagina(){
 
     zoekMenu.classList.remove("aanwezig");
 
 }
 