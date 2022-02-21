// 1. multiplication table 
function multiplicationTable(num){
    for(var i = 1; i <= 10; i++){
        var result = i * num;
        console.log(num + '*' + i + '=' + result);
    }
}
// multiplicationTable(13)

// 2. convert character to lowercase
function lowerCase(str){
    console.log(str.toLowerCase());
}
// lowerCase('TEST')

// 3. return full name
function fullName(str1, str2){
    console.log(str1 + ' ' + str2);
}
// fullName('my', 'name')

// 4. square of a number
function squarNumber(n){
    console.log(n * n);
}
// squarNumber(8)

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
// console.log(pizza.toppings[2]);

// 5. leapyear

// function leapYear(year){
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         console.log(year + ' is a leap year');
//     } 
//     else {
//         console.log(year + ' is not a leap year');
//     }
// }
function leapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true
    } 
    else {
        return false
    }
}
// leapYear(2121)
// console.log(leapYear(2121));


// 6. even odd
function evenOdd(num){
    if(num % 2 == 0){
        console.log(num + " is even number");
    }
    else{
        console.log(num + " is odd number");
    }
}
// evenOdd(10);
// evenOdd(103);

// 7. hour to minute
function hourToMinute(hour){
    var minute =  hour * 60
    console.log(hour + " hour equals " + minute + " minutes");
}
// hourToMinute(2.5)
// hourToMinute(3)

// 8. factorial while loop
function factorial(num){
    let i = 1
    let fact = 1
    while(i <= num){
        fact = fact * i
        i++
    }
    console.log("Factorial of " + num + " is = " + fact);
}
// factorial(7)


// 9. factorial while loop decreasing
function factorial1(num){
    let i = num
    let fact = 1
    while(i >= 1){
        fact = fact * i
        i--
    }
    console.log("Factorial of " + num + " is = " + fact);
}
// factorial1(4)



// 10. factorial for loop
function factorial2(num){
    let fact = 1
    for(let i = 1; i <= num; i++){
        fact = fact * i
    }
    console.log("Factorial of " + num + " is = " + fact);
}
// factorial2(8)



// 11. factorial for loop decreasing
function factorial3(num){
    let fact = 1
    for(let i = num; i >= 1; i--){
        fact = fact * i
    }
    console.log("Factorial of " + num + " is = " + fact);
}
// factorial3(6)



// 12. celsius to fahrenheit

function celsiusToFahrenheit(temp){
    let fahrenheit = (temp * (9 / 5)) + 32
    console.log(temp + " degree celsius = " + fahrenheit + " degree fahrenheit");
}
// celsiusToFahrenheit(3)
// celsiusToFahrenheit(4)


//  13. fahrenheit to celsius

function fahrenheitToCelsius(temp){
    let celcius = (temp - 32) * (5/9)
    console.log(temp + " degree fahrenheit = " + celcius + " degree celsius");
}
// fahrenheitToCelsius(40)
// fahrenheitToCelsius(41)

// 14. simple interest calculation
function interest(amount, annualInterestRate, time){
    let totalInteret = (amount * annualInterestRate * time) / 100
    let finalAmount = amount + totalInteret
    // console.log("You provide =  " + amount + " taka");
    // console.log("Annual Interest rate =  " + annualInterestRate + " %");
    // console.log("Time =  " + time + " years");
    console.log("Final amount =  " + finalAmount + " taka");
    console.log("Total interest =  " + totalInteret + " taka");
}

// interest(1000, 5, 2)
// interest(1000, 5, 3)
// interest(1000, 5, 10)

// 15. find the last value from array
var array = [214, 23, 54, 69]
// console.log(array[array.length - 1]);

// 16. print all items 
function printAllItems(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
// printAllItems([214, 23, 54, 69])

// 17. Print even numbers
function printEven(arr){
    var evenArr = []
    for(var i = 0; i < arr.length; i++){
        
        if(arr[i] % 2 == 0){
            // console.log(arr[i]);
            evenArr.push(arr[i])
        }
    }
    return evenArr
}
var even = printEven([214, 23, 54, 69])
// console.log(even);


// 18. reverse a string
function reverseString(str){
    var revStr = ""
    for(var i = str.length - 1; i >= 0; i--){
        revStr = revStr + str[i]
    }
    return revStr
}
// console.log(reverseString("reverse"));


var numbers = [12, 32, 35, 65, 40, 9]
//  sort array ascending
function sort(arr){
    arr.sort(function(a,b){
        return a - b
    })
    return arr
}
// console.log(sort([2, 4, 9, 7]));

//  19. sort array descending find big number
function bigNumber(numArray){
    numArray.sort(function(a, b){
        return b - a
    })
    return numArray[0]
}
// console.log(bigNumber(numbers));
// console.log(numbers);

// 20. find big number
function bigNum(arr){
    let largest = arr[0]

    for(let i = 0; i < arr.length; i++){
        const element = arr[i]

        if(element > largest){
            largest = element
        }
    }
    return largest
}

// console.log(bigNum([20, 41, 65, 4]))

// 21. count word in a sentence
function wordCount(sentence){
    var count = 0
    for(var i = 0; i < sentence.length; i++){
        if(sentence[i] == " " && sentence[i - 1] != " "){
            count++
        }
    }
    count++
    return count
}

// console.log(wordCount("my  sentence has"));

// 22. find smallest number from an array

function smallestNumber(arr){
    let smallest = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

// console.log(smallestNumber([12, 32, 35, 65, 40, 9]));

// 23. find small number from 3 input

function smallNum(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1 + " is small");
    }
    else if(num2 < num1 && num2 < num3){
        console.log(num2 + " is small");
    }
    else{
        console.log(num3 + " is small");
    }
}

// smallNum(21, 44, 6)

// 24. find the average number from an array
function averageNum(arr){
    let count = arr.length
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    let average = sum / count
    return average
}

// console.log(averageNum([10,20,31,24]));

// 25. area of a rectangle

function areaOfRectangle(width, length){
    let area = width * length
    return area
}

// console.log(areaOfRectangle(10, 20));

// 26. area of a triangle
function areaOfTriangle(a, b, c){
    let s = (a + b + c)/2 // s = semi-perimeter
    let area = Math.sqrt(s*(s - a)*(s - b)*(s - c))
    return area
}

// console.log(areaOfTriangle(3, 6, 7));

// 27. second largest element from an array
function secondBigNum(arr){
    arr.sort(function(a, b){
        return b - a
    })
    // let secondItem = arr[1]
    arr.shift()
    return arr[0]
}

// console.log(secondBigNum([20, 41, 65, 4]))

// 28. check prime number
function isPrime(n){
    if(n == 1){
        console.log("1 is neither prime nor composite number.");
    }
    else if(n > 1){
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false
            }
            return true
        }
    }
    else{
        return false
    }
}
// console.log(isPrime(22));

// 29. find grade
function checkGradeResult(number){
    if(number >= 80 && number <= 100){
        console.log("you got A+");
    }
    else if(number >= 70 && number < 80){
        console.log("you got B+");
    }
    else if(number >= 60 && number < 70){
        console.log("you got C");
    }
    else if(number >= 40 && number < 60){
        console.log("you got D");
    }
    else{
        console.log("you got F");
    }
}
// checkGradeResult(30)

// 30. find matching array elements
let myArray = [
    'A Smarter Way to Learn JavaScript',
    'Eloquent JavaScript',
    'JavaScript & JQuery',
    'Js: The Good Parts',
    'Learn Js VISUALLY',
    'JavaScript: The Definitive Guide'
]

let jsArray = []
for(let array of myArray){
    if(array.toLowerCase().includes("javascript")){
        jsArray.push(array)
    }
}
// console.log(jsArray);

// 31. array elements sorting in increasing order
let arraySort = [10, 24, 91, 5, 75, 102, 39, 6, 30]

let sortedArray = arraySort.sort(function(a,b){
    return a - b
})
console.log(sortedArray);