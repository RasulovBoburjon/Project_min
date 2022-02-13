"use strict"

const x = document.getElementById("demo");

function myLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition);
    }catch{
        x.innerHTML = Error;
    }
}

function showPosition(){
    x.innerHTML = "Location width height"  + position.coords.latitude + position.coords.longitude; 
}