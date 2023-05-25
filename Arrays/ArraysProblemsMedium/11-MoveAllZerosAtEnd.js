// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


var moveZeroes = function(nums) {
    let j = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums[i] == 0){
            j++;
        } else{
            [nums[i-j],nums[i]] = [nums[i],nums[i-j]];
        }
    }
    return nums;
};

const nums = [0,1,0,3,12];
console.log(moveZeroes(nums));

