function square(ele){
    return ele * ele;
};


const arr =[1,2,3,4,5,6,7,8,9,10];
const result = arr.map(square);
console.log(result);


const cubeResult = arr.map((ele)=>{
    return ele * ele * ele
});

console.log(cubeResult);


function isEvenOdd(ele){
    if(ele %2 == 0){
        return "Even";
    } else{
        return "Odd";
    }
};

const evenOddResult =arr.map(isEvenOdd);
console.log(evenOddResult);