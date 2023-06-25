/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let n = Math.max(...nums);
    const dp = new Array(n+1).fill(0);
    for (const num of nums) dp[num]++;
    for (let i = 2; i < n+1; i++) {
        const points = dp[i] * i;
        dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);
    }
    return dp[n];
};