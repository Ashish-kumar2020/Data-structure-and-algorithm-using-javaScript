//  2 sum : given an array of integer and a target value return indexes of two number such that they add up to target value

function twoSumBrute(arr,target){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                result.push(i,j);
            }
        }
    }
    return result;
};


// 2 sum if input array is sorted

function twoSumSorted(arr,target){
    let start = 0; 
    let end = arr.length-1;
    while(start < end){
        if(arr[start] + arr[end] == target){
            return [start + 1, end + 1];
        } else if(arr[start] + arr[end] > target){
            end--;
        } else{
            start++;
        }
    }
}



const arr = [2,3,4];   // [2,3,4]   //[2,7,11,15]
const target = 6;
console.log(twoSumSorted(arr,target));
// console.log(twoSumBrute(arr,target));