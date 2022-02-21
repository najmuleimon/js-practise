// variable
const name = "Shakib Khan"
let age = 50


// object
const mobile = {
    model: "samsung galaxy s22 ultra",
    color: "black",
    display: "6 inch",
    price: 100000
}
// template string
const myString = `${name} has ${mobile.model} and it's price is ${mobile.price}`
// console.log(myString);

// arrow function 1
const divideByFive = num => num / 5
// console.log(divideByFive(25))

// arrow function 2
const multiply = (n1, n2) => (n1 + 2) * (n2 + 2)
// console.log(multiply(10, 5));

// arrow function 3
const multiplyThree = (n1, n2, n3) => n1 * n2 * n3
// console.log(multiplyThree(2, 3, 4));

// arrow function 4
const multiLine = (n1, n2) => {
    let num1 = n1 + 2
    let num2 = n2 + 2
    return num1 * num2
}
// console.log(multiLine(2,3));

// array map
let arr = [10, 20, 2, 3, 5]
let result = arr.map(n => n * 5)
// console.log(result);

// filter odd number array
let odd = arr.filter(n => n % 2 != 0)
// console.log(odd);

// array object find
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 5000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
    { name: 'silver glass', price: 5000, color: 'black' }
];

let expensive = products.find(product => product.price == 5000)
// console.log(expensive);

// destructuring
const fish = { id: 58, fishName: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };
const serial = ['first 01', 'second 02', 'third 03', 'fourth 04']
const {fishName, id} = fish
const [,,three] = serial
// console.log(fishName, id);
// console.log(three);

// default parameter
function sum(a,b,c = 7){
    return a + b + c
}
// console.log(sum(2, 3));

// nested object
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: ['html', 'css', 'js', 'es6', 'react']
    },
};

let tech = company?.android?.web?.tech[2]
console.log(tech);