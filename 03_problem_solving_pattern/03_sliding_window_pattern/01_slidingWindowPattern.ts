// Definition - This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes. Very useful for keeping track of  subset of data in an array/string etc.

// Q. Write a function which accepts an array of integers and a number called n. This should calculate the maximum sum of n consecutive elements in the array.

// ----------- Naive or Brute force approach -------- time complexity O(n ** 2) -------

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

function maxSubArraySum2(arr: number[], n: number): number | null {
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



// ------ Sliding Window pattern --------- time complexity O(n) ------------

/*
Applying sliding window technique : 

We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable window_sum.
Then we will graze linearly over the array till it reaches the end and simultaneously keep track of maximum sum.
To get the current sum of block of k elements just subtract the first element from the previous block and add the last element of the current block .
*/

/* 
Problem solving approach -
- Understand the problem
- Explore concrete examples
- Break it down
- Solve / simplify
- Look back & refactor
*/