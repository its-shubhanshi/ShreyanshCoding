"use strict";

let progress=document.querySelector("#progress")
let count=0;

let interval=setInterval(function(){
    
    //console.log(count);
    if(count==100){
        clearInterval(interval)
    }
    count++;
    progress.style.width=count+'%';
    
    
},50)
