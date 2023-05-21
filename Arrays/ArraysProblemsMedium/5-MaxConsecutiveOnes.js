// Given a Binary Array return the max Consecutive ones in the array

function maxConsecutiveOnes(arr){
    let finalAns = 0;
    let consecutiveOnes = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            consecutiveOnes++;
        } else{
            finalAns = Math.max(finalAns, consecutiveOnes);
            consecutiveOnes = 0;
        };
    };
    // Math.max(finalAns, consecutiveOnes) - to hanlde corner case if there is no zero in the array
    return Math.max(finalAns, consecutiveOnes);
};


const arr = [1,1,0,1,1,1];
console.log(maxConsecutiveOnes(arr));