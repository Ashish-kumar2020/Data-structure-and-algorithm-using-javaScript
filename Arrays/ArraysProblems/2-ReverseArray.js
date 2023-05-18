// Reverse an array 
/**
 * - Without using extra array
 * - WIthout using interal alogrithm
 * - without using reverse traversal
 */

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