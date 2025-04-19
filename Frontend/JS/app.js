//"use strict";

// js the language
// basic
// inbuilt function
    //console,alert,prompt, confirm
    //let cn=confirm("Are you fine ?")
// variable
// compilers and interpreters 
// window
// types
/**
 * typeof(null) // object
 * typeof undefined // undefined
 * typeof NaN // number
 * Boolean('') //false 
 * Boolean("") //false 
 * Boolean(null) //false 
 */
// conditional
// loops
// functions
    /*
        es5v or es6
        es5=> function statements, function expresion, anonymous fun
        es6=> fat arrow fun
            a) basic fat arrpw
            b) fat arrow with parameter
            c) fat arrow with implict return 
    */
// arrays
// objects
// asynchronous
// synchronous and asynchronous


// prototypes
// prototypal inheritence
// es6
// questions
// miscellaneous - switch case and ternary do while for in for of

// interview prep
// this call apply bind


console.log(x); 
// undefine because variable bad me declare kiya gaya intialization pehle hua
var x = 2;
y = 8; 
// without strict mode sloopy mode ki tarah behaive karega but if you are using strict mode than showing error y is not define
console.log(x + y);

var x=5;
console.log(x);

// when we will declaring x variable using var keyword than variable will be declare two times and same name
// but let and const is not allowed same name variable declarition many times only one time


//console.log(s);
// let s=10; // cannot access before intialization

for(i=0;i<10;i++){
    console.log(i);
    
}

var a=()=>{};
var z= ()=>{

}
var g=ab=>console.log(ab);

g(12)

// undefined not defined and null
/**
 * undefined is a value
 * not defined is a error
 * null is a also value
 */

console.log("global", this);

let obj ={
    name:"Anamika",
    study:this,
    age:19,
    fan:()=>{
        console.log(this);
        
    },
    fan2:function(){
        console.log(this);
    }

}
console.log(obj); 

function ab(){
    console.log(this);
    
}

ab()

var obj2={
    name:function(){
        console.log(this);
        
    }
}
