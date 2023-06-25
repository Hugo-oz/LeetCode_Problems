/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let next = 1, mid = 1, prev = 0, temp = 0;
    if(n<1) return 0;
    for(let i = 0; i < n-2; i++){
        temp = mid + next + prev;
        prev = mid;
        mid = next;
        next = temp;
    }
    return next;
};