// Definition - Creting pointers or values that correspond to an index or position and move towards the begining, end or middle based on a certain condition.
// - Very efficient for solving problems with minimal space ompleity as well

// problem - write a function which accepts a sorted array of integers. It should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefindd if a pair does not exist.

// ---------------------------------- Naive Solution ---------------- Time complexity = O(n ** 2)

/*
 Problem Solving Approach -
 - Understand the problem
 - Explore concrete examples
 - Break it down
 - Solve / simplify
 - Look back & refactor
*/

function sumZero1(arr: number[]): number[] | undefined {
    // loop over arr with index i
      // loop over with j = i+1 && j < arr.length
        // compare arr[i] with arr[j], if sum is 0, return [arr[i], arr[j]]
    // else return undefined
    return [];
}

function sumZero2(arr: number[]): number[] | undefined {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) return [arr[i], arr[j]];
        }
    }
    return undefined;
}

// --------------------------------------- Oprimized solution with Multiple Pointer Pattern ------ Time complexity only O(n) ----------

function sumZero3(arr: number[]): number[] | undefined {
    // Create two pointer varibale left = 0, right = arr.length - 1
    // Loop while left < right
      // let sum = left + right
      // check if sum === 0, return [arr[left], arr[right]]
      // else if sum < 0, left = left + 1
      // else if sum > 0, right = right + 1
    // return undefined

    return undefined;
}

function sumZero(arr: number[]): number[] | undefined {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left], arr[right]];
        else if(sum < 0) left = left + 1;
        else if(sum > 0) right = right - 1;
    }

    return undefined;
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // output - [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
sumZero([-1, 0, 1, 2, 3]); // [-1, 1]
