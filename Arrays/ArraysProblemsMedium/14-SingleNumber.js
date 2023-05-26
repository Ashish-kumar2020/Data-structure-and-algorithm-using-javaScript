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

const nums = [4,1,2,1,2];
console.log(singleNumber(nums));

