var majorityElement = function(nums) {
    let ht = {};
    for(const num of nums){
        ht[num] = ht[num] + 1 || 1;
    }
    
    for(const key in ht){
        if(ht[key] > nums.length /2)
            return key;
    }
};

const nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums))