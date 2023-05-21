// Problem Statement: You are given an array. The task is to reverse the array and print it. 

// Using inbuilt function - reverse()
const reverseArrayUsingReverseFun = (arr)=>{
    let reverseArray = arr.reverse();
    return reverseArray;
};


// console.log(reverseArrayUsingReverseFun(arr));

// Using loop
const reverseArrayUsingLoop = (arr)=>{
    let str = ""
    for(let i = arr.length-1;i>=0;i--){
        str = str + arr[i] + " ";
    };
    return str;
};

// const arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(reverseArrayUsingLoop(arr));

// Using swapping

const swap = (arr,start,end)=>{
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

const reverseArray = (arr)=>{
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        swap(arr,start,end);
        start++;
        end--;
    };
    return arr;
};

const arr = [9,8,7,6,5,4,3];
const value = reverseArray(arr);
console.log(value);