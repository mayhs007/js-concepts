/**
 *
 * Initalization
 * Access the array
 * Changing the value in the array
 *
 * Properties
 *   * Length
 *
 * Methods
 *   * sort()
 *   * push()
 *   * pop()
 *   * shift()
 *   * unshift()
 *   * concat()
 *   * splice()
 *   * slice()
 */

//syntax

// const array_name=[item,item2,item3...]

let cars = []
cars[0] = "Saab"
cars[1] = "Volvo"
cars[2] = "BMW"
cars[3] = false
cars[4] = 4
let fruits = ["Banana", "Orange", "Apple", "Mango"]

//Using the keyWord

let Cars = new Array("Saab", "Volvo", "BMW")

//Access the Array
let car = cars[0]

//Changing the value in the Array

cars[0] = "Benz"

// console.log(cars)

/*---------------------------Properties------------------------------*/
//Length
let length = fruits.length
//Access the last of the array
console.log(fruits)
console.log(fruits[fruits.length - 1])
console.log(length)
/*--------------------------Methods------------------------------*/

//Sort
let sortedArray = cars.sort()
// console.log(sortedArray)

//pop()
let fruit = fruits.pop()

// console.log(fruit)
// console.log(fruits)

//push(items..)
fruits.push("Watermelon")
// console.log(fruits)

//shift() Used to  remove array from the beginning
let shiftedFruit = fruits.shift()
// console.log(fruits)
// console.log(shiftedFruit)

//unshift(items...)  Used to  remove array from the beginning
fruits.unshift("Strawberry")
// console.log(fruits)

//concat(items...) Used to merge two or more arrays

let vegetables = ["Carrot", "Raddish", "Watergourd"]
let seeds = ["pumpkin", "watermelon", "sunflowers", "flax"]
// let newArray = vegetables.concat(fruits, seeds, "Onion")
let newArray = [...vegetables, ...fruits, ...seeds, "Onion"]
// console.log(newArray)

//splice(start,deleteCount,items...) Used to add new items to an array

fruits.splice(2, 0, "Lemon", "Kiwi")
// console.log(fruits)

//slice(start,end) used to take a piece out of the array. Not inclusive of the mentioned end
//will not remove any elements from the array will return an array
console.log(fruits)
let slicedFruits = fruits.slice(1) // it will from 1 to all the elements
console.log(slicedFruits)

let SlicedFruits = fruits.slice(1, 3) //it will from 1 to 3
console.log(SlicedFruits)

//toString()
let fruitString = fruits.toString()
console.log(fruitString)
