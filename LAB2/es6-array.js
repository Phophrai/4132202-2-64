const cars = ["toyota", "honda", "mazda"]
const fruits = []
fruits[0] = "apple";
fruits[3] = "mango"
const rname = new array("win", "john", "jame")
console.log(fruits[1]);

const carpop = cars.pop();
console.log(carpop);
console.log(cars);

cars.push("kububa");
console.log(cars);

const carsshift = cars.shift()
console.log(carsshift);
console.log(car);

cars.unshift("mazda");
console.log(cars);

const slidearr = cars.slice(0,2);
console.log(slidearr);

let first = numbers.find(over10fn);
console.log(first);
let firstKey = numbers.findIndex(over10fn);
console.log(firstKey);

const alphabet = Array.from("ABCDEF");
console.log(alphabet);
...
const conCatArr = cars.concat(rname);
console.log(conCatArr.toString());

//spread operator
const catArr = [...cars, ...rname];
console.log(catArr);

//iteration
const keys = cars.keys();
let text = "";
for(x of keys){
    text += x;
}
console.log(text);

cars.forEach(cat);
function cat(value, index, array) {
  text += value;
}
console.log(text);

cars.map(addVal)
function addVal(value) {
    return value + "<br>";
}

const numbers = [10, 20, 30];
const over10 =numbers.filter(over10fn);
function over10fn(value) {
    return value > 10;
}
console.log(over10);

let sum = numbers.reduce(addFn);
function addFn(total , value){
    return total + value;
}
console.log(sum);

let boolOver10 = numbers.every(over10fn);
console.log(boolOver10);
boolOver10 = numbers.some(over10fn);
console.log(boolOver10);

let first = numbers.find(over10fn);
console.log(first);
let firstKey = numbers.findIndex(over10fn);
console.log(firstKey);

const alphabet = Array.from("ABCDEF");
console.log(alphabet);