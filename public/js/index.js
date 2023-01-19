console.log("Hello World!")

/* VARIABLES */
// var,let,const
var x = 10
var y = "LPU"
var z = 10.2
var a = "a"
var g = []
var i = x

let b = 10
let c = "College"
let d = "w"
let e = 10.22
let f = []
let h = b

const hello = "hello"
const bye = 01323
const tata = "Cars"

//let
// let b = 10 //Cannot Redeclare //Remove the comment to see the difference
var x = "Shyam" // Redeclare
x = "2"
//Scopes of JS

// Global Scope
// Function Scope
// Block Scope
{
  //Inside the block
  let s = 2
  s++
}
// console.log(s) // Cannot Access //Remove the comment to see the difference
{
  var k = "Hello"
}
console.log(k) // Can be Accessed outside the block
{
  const car = "Volkswagen"
}
//console.log(car)  // Cannot Access //Remove the comment to see the difference
hello = "Hello World"
