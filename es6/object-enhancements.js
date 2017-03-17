// Object shorthand, declaring a property with the same name as something

var color = "red";
var speed = 10;

var car = {
  color,
  speed,
  go(){
    console.log("vroom");
  }
};

console.log(car.color);
// logs red
console.log(car.speed);
// logs 10
car.go();
// logs vroom
// proper way to assign a function to an object 

// var car = {color, speed}; is the same as declaring
// var car = {color: color, speed: speed};
