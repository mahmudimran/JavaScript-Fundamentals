const numbers = [2,3,4,5,6,7,8];
const friends = ['kader','josim','billal','mirzafor'];
const products = [
    {id :1, name:'laptop', price : 400},
    {id :2, name:'mobile', price : 200},
    {id :3, name:'watch', price:20},
    {id :4, name:'tv', price:50}
];

//map 
const names = products.map(product => product.name);
const prices = products.map(product => product.price) 
// console.log(prices);

//ForEach 

// products.forEach(product => console.log(product.name))

// filter
const cheaper = products.filter(product =>product.price < 100);
// console.log(cheaper);

// remove an item filter
const remaining = products.filter(product =>product.id !=3);
// console.log(remaining);
// find

const hasWatch = products.find(product => product.name === 'watch');
console.log(hasWatch);

//reduce 
//includes
//push
//pop
//length
//indexOf