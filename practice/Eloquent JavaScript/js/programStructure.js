//Program Structure
let caught = 5*5;
let ten = 10;

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;

let one = 1, two = 2;

let name = "Ayda";
const greeting = "hello";

// prompt("Enter passcode (place random passcode)");

//let theNumber = Number(prompt("Pick a number"));
let theNumber = 4;

//let secondNumber = Number(prompt("Pick a number"));
let secondNumber = 3;
if (!Number.isNaN(secondNumber)) {
    secondNumber *= secondNumber
}

let answer;
let sum = 1 + 1;
if ( sum === 2 ) {answer = true}

// let thirdNumber = Number(prompt("Pick a number"));
let thirdNumber;
//if (!Number.isNaN(thirdNumber)) {
if ( thirdNumber ) {
    thirdNumber *= thirdNumber;
} else {
    thirdNumber = "not provided";
}

// let num = Number(prompt("Pick a Number"));
let num = 123;
if (num < 10 ) {
    num = "small";
} else if ( num < 100 ) {
    num = "medium";
} else {
    num = "large";
}

let counter = 0;
let counterString = "0"
while (counter < 12) {
    counter += 1;
    counterString += ", " + counter;
}

let result = 1;
let secondCounter = 0;
let showResult = "";
while (secondCounter < 10) {
    result *= 2;
    secondCounter++;
    showResult += "2 <sup>" + secondCounter + "</sup> = " + result + "; ";
}

let forCounter = " ";
for ( let i = 0; i <= 12; i = i + 2 ) {
    forCounter += i + " ";
}

let secondForCounter = " ";
for (let i = 0; i < 10; i = i + 1) {
    secondForCounter += i + " ";
}

let thirdForCounter = " ";
for ( let i = 20; ; i = i + 1) {
    if ( i % 7 == 0) {
        thirdForCounter += i + " ";
        break;
    }
}

let switchAnswer = " ";
//switch (prompt("What is the weather like?")){
switch (switchAnswer) {
    case "rainy":
        switchAnswer = "Remember to brind an umbrella.";
        break;
    case "sunny":
        switchAnswer = "Dress lightly.";
        break;
    case "cloudy":
        switchAnswer = "Go outside.";
        break;
    default:
        switchAnswer = "unknown weather type";
        break;
}

// Exercises
// Looping a triangle
//Write a loop that makes seven calls to console.log to output the following triangle:

//#
//##
//###
//####
//#####
//######
//#######

let triangle = 0;
let hashString = "";
let triangleString = "";

while (triangle<7) {
    triangle += 1;
    hashString += "#"
    triangleString += hashString + "<br>";
}

//FizzBuzz
//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
//print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still 
//print "Fizz" or "Buzz" for numbers divisible by only one of those).

let iString = "";

for ( let i = 1; i <= 100; i = i + 1 ) {
    if ( i % 3 === 0 ) {
        if ( i % 5 === 0) {
            iString += "FizzBuzz, ";
        } else {
            iString += "Fizz, ";
        }
    } else if ( i % 5 === 0 ) {
        iString += "Buzz, ";
    } else {
        iString += i + ", ";
    }
}

//Chessboard
//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each 
//position of the grid there is either a space or a "#" character. The characters should form a chessboard.
//Passing this string to console.log should show something like this:
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # #
//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works 
//for any size, outputting a grid of the given width and height.

width = (prompt("Please specify the chessboard's width!"));12
height = (prompt("Please specify the chessboard's height!"));
let oddLength = "";
let evenLength = "";
let boardSize = "";

for ( let i = 0; i < width; i = i + 1){
    if ( i % 2 === 0) {oddLength += " "} else {oddLength += "#"}
}
for ( let i = 0; i < width; i = i + 1){
    if ( i % 2 === 1) {evenLength += " "} else {evenLength += "#"}
}
for ( let j = 0; j < height; j = j + 1) {
    if ( j % 2 === 0) {boardSize += oddLength + "<br>";} else {boardSize += evenLength + "<br>";}
}

document.body.innerHTML = "<h2>Program Structure</h2>" +
    "<h3>Bindings</h3>" +
    "<p>caught = " + caught + "</p>" +
    "<p>ten * ten = " + ( ten * ten ) + "</p>" +
    "<p>luigisDebt = " + luigisDebt + "</p>" + 
    "<p> 1 + 2 = " + ( one + two ) + "</p>" + 
    "<p>" + name + "'s greeting: " + greeting + "!</p>" +
    "<h3>Return values</h3>" + 
    "<p> Max between 2 and 4 is: " + (Math.max(2, 4)) + "</p>" + 
    "<p> Min between 2 and 4 + 100 is: " + (Math.min(2, 4) + 100) + "</p>" + 
    "<h3>Control flow</h3>" +
    "<p>Your number is the square root of: " + (theNumber * theNumber) +
    "<h3>Conditional execution</h3>" +
    "<p>Your 2nd number is the square root of: " + secondNumber + "</p>" +
    "<p> 1 + 1 = 2 is " + answer + "</p>" +
    "<p> The the square root of the 3rd number is " + thirdNumber + "</p>" + 
    "<p> The chosen number is " + num + "!</p>" +
    "<h3>While and Do loops</h3>" + 
    "<p> Counter: " + counterString + "</p>" +
    "<p>Exponential counter: " + showResult + "</p>" +
    "<h3>For loops</h3>" + 
    "<p> For counter: " + forCounter + "</p>" +
    "<p> Second for counter: " + secondForCounter + "</p>" +
    "<h3>Breaking Out of a Loop</h3>" +
    "<p> Third for counter: " + thirdForCounter + "</p>" +
    "<h3>Dispatching on a value with switch</h3>" +
    "Switch weather: " + switchAnswer +
    "<h2> Excercises </h2>" +
    "<h3> Looping a triangle </h3>" +
    "<p>" + triangleString + "</p>" + 
    "<h3> FizzBuzz </h3>" +
    "<p>" + iString + "</p>" +
    "<h3> Chessboard </h3>" +
    "<pre>" + boardSize + "</pre>";