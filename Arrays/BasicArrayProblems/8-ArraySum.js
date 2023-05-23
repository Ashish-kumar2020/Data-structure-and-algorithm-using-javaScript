// Problem Statement: Given an array, we have to find the sum of all the elements in the array.

const arr = [1,2,3,4,5,8];
let sum = arr.reduce((acc,curr)=>{
    return acc += curr;
},0);
console.log(sum);

// using loop

const calculateSum = (arr)=>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    };
    return sum;
};

console.log(calculateSum(arr));