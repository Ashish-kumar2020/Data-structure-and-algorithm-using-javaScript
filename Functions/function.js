function isEven(num){
    if(num %2  === 0){
        return "Even";
    } else{
        return "Odd";
    }
};

// let num = 10;
// let result = isEven(num);
// if(result){
//     console.log("Even Number");
// } else{
//     console.log("Odd Number");
// }


// Print Even Number in a Range

for(let i = 0; i<= 20;i++){
    console.log(i, " is ", isEven(i));
}