// Problem Statement: Given an array, we have to find the largest element in the array.

// Approach 1
const findLargestElementUsingSorting = (arr)=>{
    let sortedArray = arr.sort((a,b)=>{return a-b});
    return sortedArray[sortedArray.length - 1];
};


// console.log(findLargestElementUsingSorting(arr));

// Approach 2

const findLargestUsingLoop = (arr)=>{
    let maxValue = -Infinity;
    for(let i = 0; i<arr.length;i++){
        if(arr[i] > maxValue){
            maxValue = arr[i];
        };
    };
    return maxValue;
};
const arr = [9,5,1,3,0];
console.log(findLargestUsingLoop(arr));