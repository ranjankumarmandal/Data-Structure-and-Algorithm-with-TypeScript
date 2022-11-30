// Definition - Creting pointers or values that correspond to an index or position and move towards the begining, end or middle based on a certain condition.
// - Very efficient for solving problems with minimal space ompleity as well

// problem - write a function which accepts a sorted array of integers. It should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefindd if a pair does not exist.

/*
 Problem Solving Approach -
 - Understand the problem
 - Explore concrete examples
 - Break it down
 - Solve / simplify
 - Look back & refactor
*/

sumZero([-3, -2, -1, 0, 1, 2, 3]); // output - [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
sumZero([-1, 0, 1, 2, 3]); // [-1, 1]
