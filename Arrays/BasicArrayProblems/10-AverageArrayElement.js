// Problem Statement: Given an array, we have to find the average of all the elements in the array.

const averageSum = (arr)=>{
    let avgSum= 0;
    let sum =0;
    for(let i = 0; i < arr.length;i++){
        sum += arr[i];
    };
    avgSum = sum / arr.length;
    return avgSum;
};

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(averageSum(arr))