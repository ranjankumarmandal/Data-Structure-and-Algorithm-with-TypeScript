// Difinition - This pattern involves dividing a data set into smaller chunks nd then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.

// Q. Given a sorted array of integers, write a function called search that accepts  value and returns the index where the value passed to the function is located. If the values is not found, rethrn -1.

// -------------- Naive approach - Linear Search - O(n) -------------------

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

function search2(arr: number[], k: number): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === k) return i;
    }

    return -1;
}


// ---------- Divide and conquer pattern - Binary search - O(logn) -----------

/*
Problem solving appraoch -
- Understand the problem
- Explore concrete examples
- Break it down
- Solve / simplify
- Look back & refactor
*/

function search3(arr: number[], k: number): number {
    // let l = 0, r = arr.length - 1
    // loop over arr when l <= r
      // let m = Math.floor((l + r)  / 2)
      // if k > arr[m], l = m + 1
      // else if k < arr[m], r = m - 1
      // else return m
    // return -1

    return 1;
}

function search(arr: number[], k: number): number {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if(k > arr[m]) l = m + 1;
        else if(k < arr[m]) r = m - 1;
        else return m;
    }

    return -1;
}

search([1, 2, 3, 4, 5, 6], 4); 
search([1, 2, 3, 4, 5, 6], 6); 
search([1, 2, 3, 4, 5, 6], 11); 