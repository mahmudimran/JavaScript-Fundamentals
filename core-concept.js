// variable let , const 
let money = 20;
money = 12;
const name = 'abulmofid';
let isConfident = false;
const person = {
    name = 'mofij',
    age = 22,
    city = 'basail',
}

const statement = `this person ${name} width ${person.age}`;

// condition
if( money > 20 && age >= 45 ){

}
else{

}

// array
const numbers = [11,33,44,66];
const firends = ['rakib', 'sumon', 'tamim', 'jorina'];
const product = [{name: 'laptop', price : 30}, {name:'mobile', price:20},{name:'watch',price: 15}];

//forloop

for(let i = 0; i < product.length; i++){
    const element = product[i];
}

// function = regular arrow

function add(num1, num2){
    return num1 + num2;

}

const result = add(44 + 23);


// arrow 
const fiveTimes = num => num *5;
const add2 = (num1, num2) => num1 + num2 ;
const doMath = (x,y) =>{
    const sum = x + y;
    return sum * 2;
}