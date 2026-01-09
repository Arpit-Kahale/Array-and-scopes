// scopes


// 1. global scope -- variable declared outside of the function or block and this scope
// can acess any hwere of the program

let name="Arpit";// global scope

function greet(){

    console.log(name)
}
  console.log(name)
greet()

console.log(name)


// 2. function scope when we declared any variable inside the blog or the function then its function scope


 function pr() 
 {

     pk ="Ram";//implict global scope

    console.log(pk)

 }
 pr()

   console.log(pk)


//3 
//  block scopes In the block scope we only acess the insdie of the block 
// let and const is the block scope specially


if(true)
{
    var a="Arpit Kahale"
    console.log(a)
}

// when we try to acess outside of the block we cant do it because let and const is block cope its mens we only acess
// inside of the block only ..
// var is global scope we  acess out side of the block

console.log(a)


// 4 Lexical scope 
// In the lexical scope inner function can acess the variable from the outer function 
// we declare one  variale in outer function and we can acess that variable from the inner function
// let us dicuss with the help of one example

function outer(){

    let ip="123456789";

    function inner(){
        console.log(ip)
    }
    inner()
}

outer()


// Reverse thee number 

for(let i=10; i=>0; i--)
 {
  console.log(i)
}