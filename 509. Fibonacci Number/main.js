/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let next = 1, prev = 0, temp = 0;
    if(n<1) return 0;
    for(let i = 0; i < n-1; i++){
        temp = next;
        next = prev + next;
        prev = temp;
    }
    return next;
};