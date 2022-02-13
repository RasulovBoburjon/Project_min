

// $(document).ready(function () {
//  $('#bars').click(function(){
//      $("#nav").slideToggle();
//  })   
// });


function myFunction(){
    let bars = document.getElementById('myTopnav');
    if (bars.className ===  "topnav") {
        bars.className += "responsive"; 
    }else{
        bars.className = "topnav";
    }
};



