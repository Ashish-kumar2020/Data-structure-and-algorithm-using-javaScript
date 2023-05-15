// find the sum of digits

const sumDigit = (x)=>{
    let sum = 0;
    while(x > 0){
        let lastDigit = x%10;
        sum += lastDigit;
        x = Math.floor(x/10);
    }
    return sum;
};

let num = 162345673;
console.log("Sum of digit" , num ," is ", sumDigit(num));