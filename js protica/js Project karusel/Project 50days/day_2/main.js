const prgres = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");


let curtActiive = 1;

next.addEventListener('click',()=>{
curtActiive++

    if(curtActiive > circle.length){
        curtActiive = circle.length
    }
    
})

prev.addEventListener('click',()=>{
curtActiive++

    if(curtActiive < 1){
        curtActiive = 1;
    }

    upDate();
    
})


function  upDate(){
    circle.forEach((circle,inx)  =>{
        if(inx < curtActiive){
            circle.classList.add("active")
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    console.log(actives.length,circle.length);
}