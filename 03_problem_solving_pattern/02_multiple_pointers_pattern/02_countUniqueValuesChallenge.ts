// Q. Write a function which acepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

/* 
Problem solving approach - 
- Understand the problem
- Explore concrete examples
- Break it down
- Solve / simplify
- Look back & refactor 
*/

function countUniqueValues(arr: number[]): number {
    // create two pointers x = 0, y = 1
    // create a counter count = 0
    // loop over arr
      // move y = y + 1 if arr[i] === arr[i + 1]
      // count = count + 1
      // else x = y & y = y + 1
    // return count
    return 2;
}

countUniqueValues([1, 1, 1, 1, 2]); // output - 2
countUniqueValues([-1, 1, 1, 2, 3, 3, 4, 5, 6]); // 7
countUniqueValues([]); // 0