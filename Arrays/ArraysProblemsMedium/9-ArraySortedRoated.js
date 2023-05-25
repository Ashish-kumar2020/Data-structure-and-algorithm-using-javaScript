

function check(nums) {
    let k =0;
    let n = nums.length;
    for(let i =0;i<nums.length;i++){
        if(nums[i] > nums[(i+1)%n]) {
            k++;
        }
    }
    if(k > 1) return false;
    return true;
}

const nums = [3,4,5,1,2];
console.log(check(nums));