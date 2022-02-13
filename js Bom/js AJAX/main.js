"use strict"


// function myFunction(){
//     document.getElementById("demo").innerHTML = "Assalomu Aleykum";
// }


 

// function loadDoc(){
//     const bobur = new XMLHttpRequest();
//         bobur.onload = function(){
//             document.getElementById("demo").innerHTML = this.responseText;
//         }

//         bobur.open('GET',"index.txt");
//         bobur.send();
// }



// function loadDoc(){
//     const bobur = new XMLHttpRequest();
//     bobur.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status === 200){
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
     
//     }
//     bobur.open('GET','index.txt');
//     bobur.send();
// }


// const bo = new XMLHttpRequest();
//     bo.onload = function(){
//         document.getElementById("demo").innerHTML = this.getResponseHeader("Uzbekistan");
//     }
//     bo.open("GET", "index.txt")
//     bo.send();


document.addEventListener("click",myFunction);

function myFunction(){
    document.getElementById("div").innerHTML = "Assalomu Aleykum";
}

