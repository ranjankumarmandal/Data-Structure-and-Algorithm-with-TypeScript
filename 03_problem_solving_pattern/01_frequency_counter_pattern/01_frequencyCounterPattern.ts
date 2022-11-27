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

same([1, 2, 3], [4, 1, 9]); // output - true
same([1, 2, 3],  [1, 1, 9, 4]); // false
same([1, 2, 3], [1, 12, 9]); // false