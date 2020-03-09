let argumentResult = [];

function range(argumentStart, argumentEnd) {
    while (argumentStart <= argumentEnd) {
        argumentResult.push(argumentStart);
        argumentStart++;
    }
    return argumentResult;
}

function sum() {
    let arrayLength = argumentResult.length + 1;
    let arraySum = argumentResult[argumentResult.indexOf(arrayLength)];
    /*
    while (arrayLength > 0) {
        arrayLength--;
        arraySum += argumentResult[argumentResult.indexOf(arrayLength)];
    }
    */
    return arraySum;
}

/*
function max(...argumentResult) {
    let maxResult = -Infinity;
    for (let argumentRes of argumentResult) {
        if (argumentRes > maxResult) maxResult = argumentRes;
    }
    return maxResult;
}
/*

/*
function sum(array = argumentResult, index = 2) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
*/

/*
function rangeSum() {
    let x = argumentResult.length - 1;
    let sum = argumentResult.x;
    while (x != 0) {
        argumentResult.slice(x);
        sum += argumentResult.x;
        x = argumentResult.length - 1;
    }
    return sum;
}
*/

console.log(range(2, 8));
console.log(sum());