/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [...nums];
    
    for(let i=0; i<nums.length; i++) {
        const index = (i + k) % nums.length; 
        console.log(index, 'idx')
        nums[index] = temp[i];
    }
};