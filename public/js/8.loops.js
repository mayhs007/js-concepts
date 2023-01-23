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
let fruits = ["Banana", "Orange", "Apple", "Mango"]

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
