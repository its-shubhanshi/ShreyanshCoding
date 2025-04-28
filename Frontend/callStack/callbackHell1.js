"use strict";

//callback nesting => callback hell


let h1=document.querySelector("h1")

function colorChange(color,delay,nextColorChange){
    
setTimeout(()=>{
    h1.style.color=color;
    console.log(color);
    if(nextColorChange){nextColorChange()}
    
    
},delay)
}

colorChange("orange",1000,()=>{
    colorChange("blue",2000,()=>{
        colorChange("red",1000,()=>{
            colorChange("yellow",1000)
        })
    })
})

