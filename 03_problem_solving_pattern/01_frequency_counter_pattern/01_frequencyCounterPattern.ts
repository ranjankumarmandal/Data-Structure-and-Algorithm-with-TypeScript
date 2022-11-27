/*
Q. Why frequency counter pattern?
-  It uses objects or sets to collect values / frequencies of values. I helps to avoid O(n ^ 2) and gives solution only in O(n).
*/

// Problem - 2 arrays given, where 2nd containes the same value but squared with the 1st one. [hint - same frequency is going to be there]

/*
 Problem Solving Approach -
 - Understand the problem
 - Explore concrete examples
 - Break it down
 - Solve / simplify
 - Look back & refactor
*/

function same1(arr1: number[], arr2: number[]): boolean {
    // if frequency of both array not same, return false

    // loop over arr1
      // find index = arr2.indexOf(arr1[i] ** 2)
      // if index doesn't exist, return false
      // remove element at index of arr2

    // return true

    return false;
}

function same(arr1: number[], arr2: number[]): boolean {
    
    return false;
}

same1([1, 2, 3], [4, 1, 9]); // output - true
same([1, 2, 3],  [1, 1, 9, 4]); // false
same([1, 2, 3], [1, 12, 9]); // false