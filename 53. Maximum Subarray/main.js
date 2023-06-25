/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
var maxSubArray = function(nums) {
    let totalMax = nums[0];
    let localMax = 0;
    for(let i = 0; i < nums.length; i++){
        localMax = Math.max(nums[i], nums[i] + localMax);
        totalMax = Math.max(totalMax, localMax);
    }
    return totalMax;
};