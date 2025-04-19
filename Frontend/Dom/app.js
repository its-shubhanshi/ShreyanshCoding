"use strict";
/*
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);

      if (num < 3) {
        console.log("reject");
        reject("Promise reject");
      } else {
        h1.style.color = color;
        resolve("Promise resolve");
      }
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log(err);
  }
}
 */

console.log("Json");
/*
let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((res) => {
    res.json();
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

*/
console.log(this);

let obj={name:"Prachi",age:20}
function abdc(a,b) {
    console.log(this,a,b);
}
abdc.call(obj,[1,2]);

function abd(a,b,c) {
    console.log(this,a,b,c);
}
abd.apply(obj,[1,2,3]);

function bd(){
    console.log(this);
    
}
const bind=bd.bind(obj)
bind()


function detail(name,age){
    this.name=name;
    this.age=age;
}

let ans= new detail("Abhay",22)

console.log(ans);// constructor

function chacha(){
    this.name="Ankita";
    this.age=20;
    this.funC=function(){
        console.log(this.name) 
        //object return karega
    }
}

let chachaAns=new chacha()
console.log(chachaAns.funC());

function aunty(name,age){
    this.name=name;
    this.age=age;

}
aunty.prototype.printMyName=function(uId){
    this.uId=uId;
    console.log(this.name, this.uId); 
}
let human2=new aunty("avni",22)
console.log(human2.printMyName("kuch12"));

function timer(){
    var a=12;

    return setTimeout(function(){console.log(a);
    },2000)
}

var ans2=timer()
//error handling 

function divide(a,b){
    try {
        if(b===0){
            
        throw Error("b value is 0 so infite value milegi")
        }
        console.log(a/b);
        
    } catch (error) {
        console.error(error);
        
    }
}
divide(34,0)
//closure fun higher order fun
//event listener

//custom events
/*

const evt=new Event("uncle");

document.querySelector("button").addEventListener("uncle",function(){

    alert('uncle pls stopped it')
})
document.querySelector("button").dispatchEvent(evt)
*/