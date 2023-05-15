const reverseNum = (num)=>{
    let reversedNumber = 0;
    let digitSum = 0;
    let ans = [];
    while(num > 0){
        let digit = num % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        digitSum += digit;
        num = Math.floor(num / 10);
    };
    ans.push(reversedNumber,digitSum);
    return ans;
};

console.log(reverseNum(12345));