/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 1, next = 1, temp = 0;
    for(let i =0; i < n-1; i++){
        temp = next;
        next = prev + next;
        prev = temp;
    }
    return next;
};