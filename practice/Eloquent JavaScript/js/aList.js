// A List
let result = [];

function arrayToList (array) {
    let endBracket = "";

    for (let i = 0; i < array.length; i++) {
        result += `{value: ${array[i]}, rest: `;
        endBracket += "}";
    }
    result += "null" + endBracket;
    return result;
}

function listToArray () {
    let list = [];

    for (let i = 0; i <= result.length; i++) {
        if (result[i] % 1 === 0 && result[i] != " " && result[i + 1] != ",") {
            list.push(result[i] + result[i + 1]);
        }
    }

    return list;
}

// console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));