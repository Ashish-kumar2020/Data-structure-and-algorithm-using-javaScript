var maxSubArray = function(nums) {
    let maxi = -Infinity;
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
        maxi = Math.max(sum,maxi);
        if(sum < 0) sum = 0;
    }
    return maxi;
};

const nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));