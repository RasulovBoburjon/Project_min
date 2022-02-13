

function  openCity(event, cityName) { 
    let i , muCiyts,tablink;

    muCiyts = document.getElementsByClassName('muCiyts');
    
    for ( i = 0; i < muCiyts.length; i++) {
          muCiyts[i].style.display = "none";
    }

    tablink = document.getElementsByClassName('tablink');

    for (i = 0; i < tablink.length; i++) {
         tablink[i].className = tablink[i].className.replace('active',"");
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += "active";

 }