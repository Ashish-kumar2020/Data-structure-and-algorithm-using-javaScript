// Find the missing number

function findMissing(arr){
    for(let i = 0; i < arr.length; i++){
        let x = Math.abs(arr[i]);
        let idx =  x - 1;
        if(arr[idx] > 0){
            arr[idx] *= -1;
        }
    }
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            result.push(i+1);
        }
    }
    return result;
};

const arr = [4,3,2,7,8,2,3,1];
console.log(findMissing(arr));