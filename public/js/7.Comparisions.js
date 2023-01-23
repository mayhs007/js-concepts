//if,if else and switch
const date = new Date()
if (date.getHours() >= 5 && date.getHours() < 12) {
  greeting = "Good morning"
  //block of code to be executed if the condition is true
} else if (date.getHours() >= 12 && date.getHours() < 16) {
  greeting = "Good afternoon"
  //block of code to be executed if the condition is false
} else if (date.getHours() >= 16 && date.getHours() < 19) {
  greeting = "Good evening"
} else {
  greeting = "Good Night"
}
console.log(greeting)
var day = ""
switch (date.getDay()) {
  case 6:
    day = "Saturday"
    break
  case 0:
    day = "Sunday"
    break
  case 1:
    day = "Monday"
    break
  case 2:
    day = "Tuesday"
    break
  case 3:
    day = "Wednesday"
    break
  case 4:
    day = "Thursday"
    break
  case 5:
    day = "Friday"
    break
  default:
    break
}
console.log(day)
