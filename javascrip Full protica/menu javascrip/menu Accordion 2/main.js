"use strict"
var acc = document.getElementsByClassName("acrdion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// let acrdion = document.getElementsByClassName("acrdion")[0];
// let i;


// for ( i = 0; i < acrdion.length; i++) {
//     acrdion[i].addEventListener('click',function(){
//         this.classList.toggle("active");


//         let panel = this.nextElementSibling;
//         if(panel.style.display === "block"){
//             panel.style.display = "none";
//         }else{
//             panel.style.disply = "block"
//         }

// });
// }

// var acc = document.getElementsByClassName("accordion");
//               var i;
              
//               for (i = 0; i < acc.length; i++) {
//                 acc[i].addEventListener("click", function() {
//                   this.classList.toggle("active");
//                   var panel = this.nextElementSibling;
//                   if (panel.style.display === "block") {
//                     panel.style.display = "none";
//                   } else {
//                     panel.style.display = "block";
//                   }
//                 });
//               }
