//es6-object.js
let preson = {
    name: "Phophrai",
    age:20,
    eyecolor: "black",
    fullname: () => {
        return `${preson.name} : ${preson.age}`
    },
};

const x = preson;
x.age = 30;
console.log(preson.age);
console.log(x.fullname());

function addFn(...num) {
    let sum=0;
    for(value of num) sum += value;
    return sum;     
}
console.log(addFn(10, 20, 30, 40));

const [a, b] = [10,20,30];
console.log(b);


const {name: rName, age} = preson;
console.log(rName);
