// Find the missing number from given range of 1 to n

var missingNumber = function(nums) {
    let n = nums.length;
    let sumNatural = n * (n + 1) / 2;;
    
    // sum of array elment
    let sumArray = 0;
    for(let i =0;i<n;i++){
        sumArray += nums[i];
    };
    let result = sumNatural - sumArray;
    return result;
};

const nums = [1,0,3];
console.log(missingNumber(nums));