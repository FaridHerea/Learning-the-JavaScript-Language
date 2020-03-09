//Functions

const square = function(x) {
    return x * x;
}

const makeNoise = function() {
    return "Return of a string.";
}

const power = function(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

let x = 10;
// eslint-disable-next-line no-constant-condition
if (true) {
    let y = 20;
    var z = 30;
    var secondResult = (x + y + z);
}
//y is not visible here

const halve = function(n){
    return n / 2;
};
let n = 10;

function secondSquare(x){
    return x * x;
}


const humus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmmount = amount * factor;
        if (ingredientAmmount > 1) {
            unit += "s"
        }
        return ingredientAmmount,unit, name;
    }
    ingredient(1, "can", "chickpeas");
}

function future() {
    return "You'll never havea future!";
}

const secondPower = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => { return "Toot"};

function greet(who) {
    return "Hello " + who;
}

function chicken() {
    return egg();
}
function egg() {
    return chicken;
}

function thirdSquare(x) {return x * x;}

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

function thirdPower(base, exponent = 2) {
    let result = 1;
    for (let i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}

function wrapValue(n) {
    let local = n;
    return () => local
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);

function fourthPower(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find ( current + 5, "(" + history + "+ 5" ) ||
                    find ( current * 3 , "(" + history +  "* 3)" );
        }
    }
    return find(1, "1");
}

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    return cowString + " Cows<br>" + chickenString + " Chickens";
}

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    return numberString + label
}

function printFarmInventorySecondary(cows, chickens, pigs) {
    return printZeroPaddedWithLabel(cows, " Cows<br>") +
    printZeroPaddedWithLabel(chickens, " Chickens<br>") +
    printZeroPaddedWithLabel(pigs, " Pigs");
}

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventoryThird(cows, chickens, pigs) {
    return zeroPad(cows, 3) + " Cows<br>" +
    zeroPad(chickens, 3) + " Chickens<br>" +
    zeroPad(pigs, 3) + " Pigs";
}

// Exercises
// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something 
// like that now. Write a function min that takes two arguments and returns their minimum.

function min(x, y) {
    let result = Math.min(x, y)
    return result;
}

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see 
// whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter 
// (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(x) {
    let result;
    if (x % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string 
// containing only one character (for example, "b"). The first character has position 0, which causes the last one to 
// be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have 
// positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase 
// “B” characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates 
// the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use 
// of this new function.

function countBs(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "B")
        result += 1;
    }
    return result.length;
}

function countChar(x, y) {
    let counterResult = "";
    let letterResult = "";
    for (let i = 0; i < x.length; i++) {
        counterResult += 1;
    }
    for (let i = 0; i < x.length; i++){
        if (x[i] === y)
        letterResult += 1;
    }
    return counterResult.length + " charaters and " + letterResult.length + " " + y + "'s";
}

document.body.innerHTML = "<h2> Functions </h2>" +
    "<h3>Defining a function</h3>" +
    "<p> 12 * 12 = " + square(12) + "</p>" +
    "<p>" + makeNoise() + "</p>" + 
    "<p>2<sup>10</sup> = " + power(2, 10) + "</p>" +
    "<h3>Bindings and scopes</h3>" +
    secondResult + " " +  n + " " + halve(n) + "<br>" +
    "Nested scope: " +
    humus("can") +
    "<h3>Declaration notation</h3>" +
    secondSquare(2) + " " + future() +
    "<h3>Arrow functions</h3>" +
    secondPower(2,9) + " " + square1(2) + " " + square2(3) + " " + horn() + 
    "<h3>The call stack</h3>" +
    "<p>" + greet("Harry") + "</p>" +
    "<p>" + chicken() + "came first</p>" + 
    "<h3>Optional Arguments</h3>" +
    "<p> The Square of for is " + thirdSquare(4, true, "hedgehog") + "</p>" +
    "<p> 3 - 2 = " + minus( 3, 2 ) + "</p>" +
    "<p> 2<sup>2</sup> = " + thirdPower(2) + "; 2<sup>6</sup> = " + thirdPower(2, 6) + "</p>" +
    "<h3>Closure</h3>" +
    "<p>" + wrap1() + " " + wrap2() + "</p>" +
    "<p> 5 multiplied 2 times = " + twice(5) + "</p>" +
    "<h3>Recursion</h3>" +
    "<p>2<sup>3</sup> = " + fourthPower(2,3) + "</p>" + 
    "<p> Solution for 24 is " + findSolution(24) + "</p>" + 
    "<h3>Growing functions</h3>" +
    "<p>" + printFarmInventory(7, 11) + "</p>" +
    "<p>" + printFarmInventorySecondary(7, 11, 3) + "</p>" +
    "<p>" + printFarmInventoryThird(7, 16, 3) + "</p>" +
    "<h2>Exercises</h2>" +
    "<h3>Minimum</h3>" +
    "<p>" + min(10, 0) + " " + min(0, -10) + "</p>" + 
    "<h3>Recursion</h3>" +
    "<p> Is 50 even?<br>" + isEven(50) + "<br>How about 75?<br>" + isEven(75) + "<br>How about -1?<br>" + isEven(-1) + "</p>" +
    "<h3>Bean counting</h3>" +
    "<p>How many B's are in BBC? <br>"+countBs("BBC") + "<br>How many chars and how many k's are in kakkerlak?<br>" + countChar("kakkerlak", "k")
    ;