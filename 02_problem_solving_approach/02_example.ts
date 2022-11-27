// Problem - Count the number of letters present in a given string [hint - do it only for alpanumerics]

/*
 Problem Solving Approach -
 - Understand the proeblem
 - Explore concrete examples
 - Break it down
 - Solve / simplify
 - Look back and refactor
*/

function countChar1(str: string): object {
    // intialize an empty object
    // start looping over string
      // if object has key with related character of string, means it matching and coming again, increase its value with +1
      // else assign that key with value 1
    // return that resultant object

    return {};
}

function countChar(str: string): object {
    const result: {[key: string]: number} = {};
    for(let char of str) {
        char = char.toLocaleLowerCase();
        if(/[a-z0-9]/.test(char)) result[char] = ++result[char] || 1;
    }

    return result;
}

countChar1('hello'); // {h: 1, e: 1, l: 2, o: 1}
console.log(countChar('hello WorLd')); // {h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}