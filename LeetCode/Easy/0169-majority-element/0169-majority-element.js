/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countMap = {};
    
    nums.forEach((num) => {
        if(countMap[num] === undefined) {
            countMap[num] = 1;
        } else {
            countMap[num] += 1;
        }
    });
    
    let maxNum = 0;
    
    for(let key in countMap) {
        if(countMap[key] > maxNum) {
            maxNum = countMap[key];    
        }       
    }
    
    for(let key in countMap) {
        if(countMap[key] === maxNum) {
            return key;
        }
    }
};