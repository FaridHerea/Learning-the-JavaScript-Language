// Reversing an array
let reverse = [];

function reverseArray (array) {
    for (let i = array.length - 1 ; i >= 0; i--) {
        reverse.push(array[i]);
    }
    return reverse;
}

function reverseArrayInPlace () {
    let reverseInPlace = reverse;
    let reverseInPlaceResult = [];
    for (let i = reverseInPlace.length - 1 ; i >= 0; i--) {
        reverseInPlaceResult.push(reverseInPlace[i]);
    }
    return reverseInPlaceResult;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace());

// A list
