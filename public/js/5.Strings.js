let txt = "Welcome to LPU!"
/*----------------------LENGTH----------------------*/
//length
let length = txt.length

// console.log(length)

let text = "Welcome to 'LPU' "

// console.log(text)
/*----------------------SLICE----------------------*/
// string.slice(start,end) ->syntax
//it starts from 0
let t = "shyam shyam SHYAM"
let sliced = t.slice(0, 4)
console.log(sliced)
/*----------------------SUBSTRING----------------------*/
let substringText = t.substring(0, 1)
let fruits = "Apple, Banana, Kiwi"

console.log(fruits.slice(-12)) // it is calculated from behind
console.log(fruits.substring(-12)) // consider as 0 so it will return fully

console.log(fruits.slice(0, 12))
console.log(fruits.substring(0, 12))

console.log(fruits.slice(12))
console.log(fruits.substring(12))

/*----------------------Replace----------------------*/

let replaceText = t.replace("shyam", "hello how are you?")
console.log(replaceText) // only replaces first match and returns a new string

/*----------------------Replace All----------------------*/
// console.log(t)
let replaceAllText = t.replaceAll("shyam", "LPU")
console.log(replaceAllText)
/*----------------------TO UPPERCASE----------------------*/
//toUpperCase
let upperCaseText = t.toUpperCase()
console.log(upperCaseText)
/*----------------------TO LOWERCASE----------------------*/
//toLowerCase
let lowerCaseTest = t.toLowerCase()
console.log(lowerCaseTest)

let txt1 = "                                   Hello                                    "
let txt2 = "World"
/*----------------------Concat---------------------*/
let txt3 = txt1.concat(" ", txt2)
// console.log(txt3)
let txt4 = txt1 + " " + txt2
// console.log(txt4)

/*----------------------Trim----------------------*/
// console.log(txt1)
let trimStartTxt = txt1.trimStart()
console.log(trimStartTxt)
let trimEndTxt = txt1.trimEnd()
console.log(trimEndTxt)
let txt5 = txt1.trim()
// console.log(txt5)
/*----------------------Pad Start--------------------*/

let txt6 = "shyam"
let padStart = txt6.padStart(10, "x") //xxxxxshyam
console.log(padStart)
let padEnd = txt6.padEnd(10, "x")
console.log(padEnd)
/*----------------------Split--------------------*/
let car = "BMW,BENZ,Hyundai,KIA"
let cars = car.split(",") // return as array (String to Array)
let ca = car.split(" ")
console.log(ca)
