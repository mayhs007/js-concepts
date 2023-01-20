// Data types

//var,let,const

var a = 10
var b = "Hello"
var c = "h"
var d = 10.03
var e = false

let f = 10
let g = "Hello"
let h = "h"
let i = 10.03
let j = false

const k = 10
const l = "Hello"
const m = "h"
const n = 10.03
const o = false
const p = []

/*----------Accessbility----------*/
{
  //Block
  var x = 10 //Function Scope
}
console.log(x) // Can access outside the block
{
  //Block
  let y = 20 //Block Scope
}
// console.log(y) // Cannot access outside the block // Remove the comment to see the change

{
  //Block
  const z = 30
}
// console.log(z) //Cannot be accessed outside the block // Remove the comment to see the change
/*--------------------------------------------------------------------------*/

/*----------Redeclare----------*/
var e // Can Redeclare
// let f     // Cannot Redeclare // Remove the comment to see the change
// const k; // Cannot Redeclare // Remove the comment to see the change
/*--------------------------------------------------------------------------*/

/*----------Re Assigned----------*/
// console.log(d, "Before") // Remove the comment to see the change
d = 10 // Can reassign
// console.log(d, "After") // Remove the comment to see the change

// console.log(h, "Before")
h = "harsh" // Can reassign
// console.log(h, "After")

// console.log(k, "Before") // Remove the comment to see the change
k = 9 // Cannot be Reassigned
// console.log(k, "After")// Remove the comment to see the change
/*--------------------------------------------------------------------------*/
