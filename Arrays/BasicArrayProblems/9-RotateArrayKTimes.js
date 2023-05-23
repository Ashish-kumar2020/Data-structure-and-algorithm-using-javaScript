
// Problem Statement: Given an array of n size, rotate the array by k elements using the Block Swap Algorithm.
// Approach 1 - Using Temp array

const rotateArrayTemp = (arr,d,n)=>{
    let temp = new Array(n);
    let k = 0;
    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }
 
    // Storing the first d elements of array arr[]
    //  into temp
    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
    return temp;
};

const arr = [1,2,3,4,5,6,7,8,9];
const d = 3;
const n = arr.length;
console.log(rotateArrayTemp(arr,d,n));