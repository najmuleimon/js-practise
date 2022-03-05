// 1. Object with property (string, boolean, number, object, array, method which will return a property value)
const cow = {
    name: 'Lali',
    isMale: true,
    weight: 400,
    food: 'grass',
    specs: {
        color: 'red',
        height: 5,
        origin: 'bangladesh'
    },
    varient: ['india', 'bd', 'china', 'thailand', 'greenland'],
    getCow: function() {
        return this.food
    }
}

// 2. template string. minimum 3 property will be dynamic (nested object property, array second element, another property)
const myCow = `My cow name is ${cow.name}. My cow color is ${cow.specs.color}. ${cow.name} is from ${cow.varient[2]}. Cow eat ${cow.getCow()}`
// console.log(myCow);


// 3.1: no parameter arrow function. return 89
let myFunc = () => 89;
// console.log(myFunc());


// 3.2: single parameter arrow function. will divide input by 7
const divide = num => num / 7
// console.log(divide(21));


// 3.3: দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও.
const add = (n1, n2) => (n1 + n2)/2
// console.log(add(10, 20));


// 3.4 একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
const moreAdd = (num1, num2) => {
    let first = num1 + 7
    let second = num2 + 7
    let result = first + second
    return result
}
// console.log(moreAdd(5, 6));

// .
// 4. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে
const arr = [14, 21, 10, 6, 9, 7]
const result = arr.map(num => num / 7)
// console.log(result);

// 5. map, forEach, filter, find
// forEach
let loopResult = []
arr.forEach(n => {
    let two = n * 2
    loopResult.push(two)
})

// filter
let filterdArr = arr.filter(n => n > 10)
// console.log(filterdArr);

// find
const small = arr.find(num => num < 10)
// console.log(small); // return the first matching element

// console.log(loopResult);

// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে
// 6. desctructuring on object and array
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const single = { name: 'water bottle', price: 50, color: 'yellow' }
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

const {name} = single
const [,,balance] = numbers
// console.log(name);
console.log(balance);
