
// array destruturing

const numbers = [45, 91, 22, 44, 76, 88,];
// const x = numbers[0];
// const y = numbers[1];
// const [x,y] = [45,90];
const [x,y] = numbers;
// console.log(x, y);

function boxify(num1){
    return [num1, num1+5]
}

const [box1,box2] = boxify(10);
console.log(box1,box2);

// object destruturing
const person = {id: 1, money: 200,name : 'samira', age : 18};
const {money} = person;

console.log(money);
// console.log(name, age);
// console.log(name, age);
// console.log(name, age);

// create object shortcut

const newNumbers = [...numbers + 56];