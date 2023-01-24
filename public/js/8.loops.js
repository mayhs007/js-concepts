/**
 * Loops
 *   * forEach()
 *   * for()
 *   * do-while()
 *   * while()
 *   * map()
 *   * filter()
 *   * reduce()
 *   * reduceRight()
 *   * every()
 *   * some()
 *   * indexOf()
 *   * lastIndexOf()
 *   * find()
 *   * findIndex()
 *   * from()
 *   * keys()
 *   * entries()
 *   * includes()
 */
let fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"]
var numbers = [4, 9, 16, 25]

/*-----------For Each-------*/
/**
 * Syntax
 *
 *   array.forEach(function(value,index,array){})
 */
fruits.forEach(myFunction)
//Named function
function myFunction(value, index, array) {
  //   console.log(value, index, array)
}
// Anonymous function
fruits.forEach(function (value, index, array) {
  //   console.log(value, index, array)
})
// Arrow function
fruits.forEach((value, index, array) => {
  //   console.log(value, index, array)
})

/*-----------For loop-------*/
/**
 * Syntax
 *
 * for(initilization;comparision;increment/decerement){
 *   //Code block
 * }
 *
 */
for (let index = 0; index < fruits.length; index++) {
  //   console.log(fruits[index], index)
}

/*-----------do while-------*/
// While executed first time without checking the condition
let index = 0
do {
  console.log(fruits[index], index)
  index++
} while (index > fruits.length)
/*-----------while loop-------*/
index = 0
while (index > fruits.length) {
  console.log(fruits[index], index)
  index++
}

/*----------Map------*/
/**
 *
 * array.map((value,index)=>{})
 * array.map(myFunction)
 * array.map(function(value,index){})
 *
 * return array
 *
 * Need to return the value always
 * */

let newValues = numbers.map((value, index, array) => {
  console.log(value)
  return value * 2
})
console.log(newValues)
/*----------Filter------*/
/**
 *
 *
 * array.filter((value,index)=>{})
 * array.filter(myFunction)
 * array.filter(function(value,index){})
 *
 *  return array
 */
let newFilteredArray = numbers.filter(value => {
  return value > 18
})
console.log(newFilteredArray)

/*----------Reduce------*/
/**
 *  Parameters
 *    * total
 *    * value
 *    * index
 *    * itself
 *
 * array.reduce((total,value,index)=>{})
 * array.reduce(myFunction)
 * array.reduce(function(total,value,index){})
 *
 *  return Number
 */
console.log(numbers)
let sum = numbers.reduce((total, value) => {
  return total + value
})
console.log(sum)
let sumRight = numbers.reduceRight((total, value) => {
  return total + value
})
console.log(sumRight)

/*----------Every()------*/
/**
 *  Parameters
 *    * value
 *    * index
 *    * itself
 *
 * array.every((value,index)=>{})
 * array.every(myFunction)
 * array.every(function(value,index){})
 *
 *  Return true/false
 */

let allOver18 = numbers.every(value => {
  return value > 18
})
console.log(allOver18)

/*----------some()------*/
/**
 *  Parameters
 *    * value
 *    * index
 *    * itself
 *
 * array.some((value,index)=>{})
 * array.some(myFunction)
 * array.some(function(value,index){})
 *
 *  Return true/false
 */
let someOver18 = numbers.some(value => {
  return value > 18
})
console.log(someOver18)

/*----------indexOf()------*/
/**
 * Returns the index value.
 *
 * @param {any} item inside the array
 * @param {number} start Where to start the search and negative values will counted from the end
 * @return {number} index of that item.
 *
 * array.indexOf(item)
 */
let position = fruits.indexOf("Apple", 3)
console.log(position)
/*----------lastIndexOf()------*/
/**
 * Returns the index value.
 *
 * @param {any} item inside the array
 * @param {number} start Where to start the search and negative values will counted from the end
 * @return {number} index of that item.
 *
 * array.lastIndexOf(item)
 */
let positionOfLastItem = fruits.lastIndexOf("Apple")
console.log(positionOfLastItem)

/*----------find()------*/

/**
 * Returns the first value in an array.
 *
 * @param {any} value Item in the array
 * @param {number} index Index of each item
 *
 * @return {any} value found value.
 *
 * array.find((value,index,itself)=>{})
 */
let foundValue = numbers.find(value => {
  return value > 18
})
console.log(foundValue)

/*----------findIndex()------*/

/**
 * Returns the first value in an array.
 *
 * @param {any} value Item in the array
 * @param {number} index Index of each item
 *
 * @return {number} index of the found value.
 *
 * array.find((value,index,itself)=>{})
 */
let foundIndexValue = numbers.findIndex(value => {
  return value > 18
})
console.log(foundIndexValue)
