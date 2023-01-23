const drive = () => {
  return "I am driving the car"
}
const brake = () => {
  return `I am applying the brake`
}
const car = {
  name: "Venue",
  engineModel: "Petrol",
  model: 2020,
  price: "15,00,000",
  isBlackColor: true,
  start: function () {
    console.log(this)
    return "I am starting the car " + this.name // owner
  },
  drive: drive(),
  brake: brake(),
} //Object

console.log(car.name) //Invocation
console.log(car["name"]) //Invocation
console.log(car.start())
console.log(car.drive)
console.log(car.brake)

let stringObject = new String("Shyam")
let numberObject = new Number(90)
let booleanObject = new Boolean(false)

// spread operator
let cars = ["BMW", "BENZ", "Hyundai"]
let newCars = [...cars, "KIA", ...cars, ...cars, ...cars]
console.log(newCars)
let newCar = {
  ...car,
  model: 2021,
}

console.log(newCar)
