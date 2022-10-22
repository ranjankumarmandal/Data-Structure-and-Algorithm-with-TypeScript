// -------------- 1st approach ------------ time complexity = O(n)

function sum1(n): void {
    let total = 0;
    for(let i = 1; i <= n; i++) total += i;
    console.log(total);
}

sum1(9);

// --------------- 2nd approach ------------ time complexity = O(1)

function sum2(n): void {
    console.log(
        n * (n + 1) / 2
    );
}

sum2(12);