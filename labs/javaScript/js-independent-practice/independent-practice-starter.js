//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
function lengths(array) {
    let lengthArray = [];
    array.forEach(function(word) {
        lengthArray.push(word.length);
    }, this);
    return lengthArray;
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

function transmogrifier(a, b, c) {
    let tot = a * b;
    if (c === undefined) {
        c = 1;
    }
    tot = Math.pow(tot, c);
    return tot;
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
function wordReverse(str) {
    var reversed = str.split(' ').reverse().join(" ");
    return reversed;
}