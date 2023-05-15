// find the greates common divisor

const gcd = (a,b)=>{
    let ans = 1;
    for(let i = 2; i<= Math.min(a,b);i++){
        if(a%i == 0 && b%i == 0){
             ans = i;
        }
    }
    return ans;
};

console.log(gcd(24,28));

console.log(gcd(7,11));   // prime number will always give 1 as gcd