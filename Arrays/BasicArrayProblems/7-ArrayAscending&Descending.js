// Problem Statement: Rearrange the array such that the first half is arranged in increasing order, and the second half is arranged in decreasing order

const rearrangeArrayUsingSort = (arr)=>{
    let sortedArray = arr.sort((a,b)=> {return a-b});
    // print the first half of the array
    let str = "";
    for(let i = 0; i<sortedArray.length/2;i++){
        str += sortedArray[i];
        str += " ";
    };

    // print the second half of the array in reverse order
    for(let i= sortedArray.length-1;i>= sortedArray.length/2;i--){
        str += sortedArray[i];
        str += " ";
    };

    return str;
};

const arr = [8 ,7 ,1 ,6, 5 ,9];
console.log(rearrangeArrayUsingSort(arr));