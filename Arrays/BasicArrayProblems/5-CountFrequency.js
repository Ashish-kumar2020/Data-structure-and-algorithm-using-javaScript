// Problem statement: Given an array, we have found the number of occurrences of each element in the array.

const countFrequency= (arr)=>{
    let frequencyMap = {};
    for(let val of arr){
        if(frequencyMap[val]){
            frequencyMap[val] += 1;
        } else{
            frequencyMap[val] = 1;
        };
    };
    return frequencyMap;
};

const arr = [10,5,10,15,10,5,1,2,3];
console.log(countFrequency(arr));

