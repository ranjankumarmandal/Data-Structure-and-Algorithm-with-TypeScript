// -------------- 1st approach ------------ time complexity = O(n)---

function sum1(n): void {
    let total = 0;
    for(let i = 1; i <= n; i++) total += i;
    console.log(total);
}

sum1(9);