// Question 1
function maxOfTwoNumbers(a, b) {
    return Math.max(a, b);
}

// Question 2
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// Question 3
function isCharacterAVowel(str) {
    //return (str === "a" || str === "e" || str === "i" || str === "o" || str === "u");
    return (/^[aeiou]$/.test(str));
}

// Question 4
function sumArray(array) {
    let total = 0;
    array.forEach(function(element) {
            total += element;
        };
    }


    // Question 4
    function multiplyArray(array) {
        let total = 0;
        array.forEach(function(element) {
            total += element;
        });
    }

    // Question 5
    var numberOfArguments = function() {
        return arguments.length;
    }



    // Question 6
    var reverseString = function(str) {
        return str.split('').reverse().join('');
    };


    // Question 7
    function findLongestWord(array) {
        let charCount = 0;
        let longestWord;
        array.forEach(function(element) {
            if (chraCount < element.length) {
                charCount = element.length;
                longestWord = element;
            }
        }, this);
        return longestWord;
    }


    // Question 8
    function filterLongWords(array, i) {
        let longWords = [];
        array.forEach(function(element) {
            if (element.length > i) {
                longWords.push(element);
            }
        }, this);
        return longWords;
    }


    // Bonus 1
    //??????
    String.prototype.reverseString = function() {
        return this.split('').reverse().join('');
    }

    // Bonus 2
    function charactersOccurencesCount1(text) {
        let charOccur = {};
        let textNew = text.split("").sort().join('');
        for (let i = 0; i < textNew.length; i++) {
            if (textNew.charAt(i) !== " ") {
                let re = new RegExp(textNew.charAt(i), 'gi');
                charOccur[textNew.charAt(i).toLowerCase()] = textNew.match(re).length;
            }
        }
        return charOccur;
    }

    function charactersOccurencesCount2(text) {
        let charOccur = {};
        let textNew = text.toLowerCase().replace(/ /g).split("").sort();
        for (let i = 0; i < textNew.length; i++) {
            let charCount = [];
            for (let j = 0; j < textNew.length; j++) {
                if (textNew[j] === textNew[i]) {
                    charCount.push(textNew[j]);
                }
            }
            charOccur[textNew[i]] = charCount.length;
        }
        return charOccur;
    }

    function charactersOccurencesCount3(text) {
        let charOccur = {};
        let textNew = text.toLowerCase().replace(/ /g).split("").sort();
        textNew.forEach(function(element) {
            if (!charOccur.hasOwnProperty(element))
                charOccur[element] = 1;
            else
                charOccur[element]++;
        });
        return charOccur;
    }