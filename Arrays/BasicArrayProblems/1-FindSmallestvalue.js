// Problem Statement: Given an array, we have to find the smallest element in the array.

// 1- Approach - sort the array and return the element at 0 index

const smallestElementUsingSort = (arr)=>{
    let sortedArray = arr.sort((a,b)=> {return a-b});
    return sortedArray[0];
};

// const arr = [2,4,5,3,2,1,6];
// console.log(smallestElementUsingSort(arr));


// Approach 2 - Using loop
// We will iterate over the array and store the smallest element on every iteration
// at the end we will return the smallest element

const smallestElementLoop = (arr)=>{
    let smallestElement = Infinity;
    for(let i = 0; i< arr.length;i++){
        if(arr[i] < smallestElement){
            smallestElement = arr[i];
        };
    };
    return smallestElement;
};
const arr = [2,4,5,3,2,1,6,0];
console.log(smallestElementLoop(arr));
