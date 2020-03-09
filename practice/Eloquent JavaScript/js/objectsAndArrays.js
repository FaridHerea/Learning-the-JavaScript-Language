// Data sets
let listOfNumbers = [2, 3, 5, 7, 11];

// Methods
let doh = "Doh";

let sequence = [1, 2, 3];

// Objects
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});

let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lassagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true}
]

// Mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

const score = {visitors: 0, home: 0};
score.visitors = 1;
// not allowed 
// score = {visitors: 1, home: 1};

// The lycanthrope’s log

let workingJournal = [];

function addEntry(events, squirrel) {
    workingJournal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "icecream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// Computing correlation
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1] /
        Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2])));
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index +=1;
        if (entry.squirrel) index +=2;
        table[index] +=1;
    }
    return table
}

// Further arrayology

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
}

// Strings and their properties
let sentence = "Seecretarybirds specialize in stomping";
let words = sentence.split(" ")

// Rest parameters
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

let numbers = [5, 1, 7];
console.log(max(...numbers));

let bigWords = ["never", "fully"];
console.log(["will", ...bigWords, "understand"]);

// The Math object
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

// Destructuring
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1] /
        Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2])));
}

let {name} = {name: "Faraji", age: 23};
console.log(name)

// JSON

let string = JSON.stringify({squirrel: false,
                            events: ["weekend"]});
console.log(string);
console.log(JSON.parse(string).events);

// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is 
// given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also 
// works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(argumentStart, argumentEnd) {
    let result = argumentStart;
    let argumentArray = [argumentStart]
    argumentArray.push(result);
    while ( result <= argumentEnd ) {
        result++;
        return result;
    }
}

console.log(range(5, 8));

document.body.innerHTML = "<h2>Data Structures: Objects and Arrays</h2>" +
    "<h3>Data sets</h3>" +
    "<p>List of numbers: " + listOfNumbers + "</p>" +
    "<h3>Methods</h3>" +
    "<p>To upper case: " + doh.toUpperCase() + "<p>" +
    "<p>Sequence push: " + sequence.push(4) + ", " + sequence.push(5) + "=>" + sequence + "; Sequence pop: " + sequence.pop() + "=>" + sequence + "</p>" +
    "<h3>Objects</h3>" +
    `<p> ${day1.squirrel}, ${day1.wolf}, ${day1.wolf = false, day1.wolf} <p>
    <p> ${descriptions.work}</p>
    <p>${anObject.left} and ${anObject.right} but ${"left" in anObject} and ${"right" in anObject}</p>
    <p>${Object.keys({x: 0, y: 0, z: 2})}</p>
    <p>${console.log(objectA)}, ${console.log(journal)}</p>
    <h3>Mutability</h3>
    <p>${object1 == object2} and ${object1 == object3} but ${object1.value = 15, object2.value} and ${object3.value}</p>
    <p>${score.visitors}</p>
    <h3>Computing correlation</h3>
    <p>${phi([76, 9, 4, 1])}</p>
    <p>${console.log(tableFor("pizza", journal))}</p>
    <h3> Array loops</h3>
    <p>${console.log(workingJournal)}</p>
    <h3>Further arrayology</h3>
    <p>Index of 2: ${[1, 2, 3, 2, 1].indexOf(2)} and the last index of 2: ${[1, 2, 3, 2, 1].lastIndexOf(2)}</p>
    <p>Slice 2,4: ${[0, 1, 2, 3, 4].slice(2, 4)} and slice 2: ${[0, 1, 2, 3, 4].slice(2)}</p>
    <p>Removed 2: ${remove(["a", "b", "c", "d", "e"], 2)}</p>
    <h3>Strings and their properties</h3>
    <p>Slice 4, 7: ${"coconuts".slice(4,7)} and index of "u": ${"coconut".indexOf("u")} and index of "ee" ${"one two three".indexOf("ee")}</p>
    <p>Trim to remove white spaces ${"    okay    \n".trim()}</p>
    <p>padStart at 3 of 0: ${String(6).padStart(3, "0")}</p>
    <p>Split sentence: ${words} ... and join sentence with dots: ${words.join(". ")}</p>
    <p>Repeat LA 3 times: ${"LA".repeat(3)}</p>
    <h3>Rest parameters</h3>
    <p>Return max: ${max(4, 1, 9, -2)}</p>
    <h3> The Math object</h3>
    <p>Random point on circle 2</p>
    <h2>Exercises</h2>
    <h3>The sum of a range</h3>
    <p>`
;