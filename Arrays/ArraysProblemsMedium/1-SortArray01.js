// Sort an given array of 0 and 1s
//  Note: Without using extra array
// Brute Force Approach
const sortArrayBrute = (arr)=>{
    let countOne = 0;
    let countZero = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            countZero++;
        }
        else{
            countOne++;
        }
    }
    arr = [];
    let i = 0;
    while(i <= countZero){
        arr.push(0);
        i++;
    }
    let j = 0;
    while(j <= countOne){
        arr.push(1);
        j++;
    }
    return arr;
};

// console.log(sortArrayBrute([1,0,0,1,0,1,0,0,0,1,1,1,0]));

// Optimal Approach

 function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};


function sortArrayOptimize(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i <= j){
        if(arr[i] == 1){
            swap(arr,i,j);
            j--;
        } else{
            i++;
        }
    };
    return arr;
};

console.log(sortArrayOptimize([1,0,0,1,0,1,0,0,0,1,1,1,0]));