// Difinition - This pattern involves dividing a data set into smaller chunks nd then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.

// Q. Given a sorted array of integers, write a function called search that accepts  value and returns the index where the value passed to the function is located. If the values is not found, rethrn -1.

/*
Problem Solving Approach -
- Understand the problem
- Explore concrete examples
- Break it down
- Solve / simplify
- Look back & refactor
*/

function search1(arr: number[], k: number): number {
    // loop over arr with i
      // if arr[i] === k, return i
    // return -1

    return 1;
}

function search(arr: number[], k: number): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === k) return i;
    }

    return -1;
}

search([1, 2, 3, 4, 5, 6], 4); // output - 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1