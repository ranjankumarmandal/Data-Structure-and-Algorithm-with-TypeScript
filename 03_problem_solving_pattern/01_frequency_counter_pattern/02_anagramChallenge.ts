// Problem - Write a function to determine if the given two strings are anagram of each other. Anagram means having word or phrase formed by re-arranging the letters of another.


/*
 Problem Solving Approach - 
 - Understand the problem
 - Explore concrete examples
 - Break it down
 - Solve / simplify
 - Look back & refactor
*/

function checkAnagram1(str1: string, str2: string): boolean {
    // check if length of both string not same, return false
    // create two freqCounterObject for each string - freq1, freq2
    // loop over freq1 with key
      // check if key does not exist in freq2, return false
      // check if value for key does not exist same in freq2, return false
    // return true

    return false;
}

function checkAnagram(str1: string, str2: string): boolean {
    

    return false;
}

checkAnagram('hello', 'ollhe'); // output - true
checkAnagram1('aaz', 'za'); // false
checkAnagram('aaz', 'azaz'); // false