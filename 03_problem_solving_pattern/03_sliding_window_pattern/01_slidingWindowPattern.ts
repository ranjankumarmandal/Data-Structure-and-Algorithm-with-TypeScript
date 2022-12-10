// Definition - This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes. Very useful for keeping track of  subset of data in an array/string etc.

// Q. Write a function which accepts an array of integers and a number called n. This should calculate the maximum sum of n consecutive elements in the array.

/*
problem solving approach -
- Understand the problem
- Explore concrete examples
- Break it down
- Solve / simplify
- Look back & refactor
*/

function maxSubArraySum1(arr: number[], n: number): number {
    // let maxSum = 0
    // loop over arr with i
      // let temp = 0;
      // loop over arr with j = i; j < num + i
        // temp = temp + arr[j]
        // maxSum = Math.max(temp, max)
    // return max
    return 1;
}

function maxSubArraySum(arr: number[], n: number): number | null {
    if(n > arr.length) return null;
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        let temp = 0;
        for(let j = i; j < n + i; j++) {
            temp = temp + arr[j];
            if(maxSum < temp) maxSum = temp;
        }
    }
    return maxSum;
}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // output - 10
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubArraySum([], 4); // null