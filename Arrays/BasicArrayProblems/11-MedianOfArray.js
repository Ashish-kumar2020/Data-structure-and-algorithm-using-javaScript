
// Problem Statement: Given an unsorted array, find the median of the given array.

const medianOfArray = (arr,)=>{
    let sortedArray =  arr.sort((a,b)=>{return a-b});
    if(n%2 == 0){
        let ind1 = (n/2)-1;
        let ind2 = (n/2);
        return (arr[ind1] + arr[ind2])/2;
    } else{
        return arr[(n)/2];
    }
};

const arr = [4,7,1,2,5,6];
const n = arr.length;
console.log(medianOfArray(arr,n));