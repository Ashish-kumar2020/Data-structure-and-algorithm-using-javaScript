var singleNumber = function(nums) {
    let frequencyMap = {};
    for(let val of nums){
        if(frequencyMap[val]){
            frequencyMap[val] += 1;
        } else{
            frequencyMap[val] = 1;
        };
    };
    for(let s in frequencyMap){
        if(frequencyMap[s] == 1){
            return s;
        }
    }
};

// Better Approach using XOR Operator
var singleNumberBetter = function(nums) {
    let result = 0;
    for(let i =0;i<nums.length;i++){
        result = result ^ nums[i];
    }  
    return result;
  };

const nums = [4,1,2,1,2,3,4];
console.log(singleNumberBetter(nums));

