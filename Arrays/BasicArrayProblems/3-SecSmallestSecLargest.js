// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

const secondLargest = (arr)=>{
    let largest = -1;
    let secLargest = -1;
    let n = arr.length;
    if(n == 0 || n == 1){
        return -1;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            secLargest = largest;
            largest = arr[i];
        };
        if(arr[i] > secLargest && arr[i] != largest){
            secLargest = arr[i];
        };
    };
    return secLargest;
};

// const arr = [1];
// console.log(secondLargest(arr));

const secSmallest = (arr)=>{
    let smallest = Infinity;
    let secSmallest = Infinity;
    let n = arr.length;
    if(n == 0 || n == 1){
        return -1;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < smallest){
            secSmallest = smallest;
            smallest = arr[i];
        }
        if(arr[i] < secSmallest && arr[i] != smallest){
            secSmallest = arr[i];
        };
    };
    return secSmallest;
};

const arr = [7,6,7,9,1,6,3,4,2];
console.log(secSmallest(arr));