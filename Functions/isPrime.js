function isPrime(x){
    for(let i = 2; i<x-1;i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
};
if(isPrime(9)){
    console.log("Prime Number");
} else{
    console.log("Not Prime Number");
}

