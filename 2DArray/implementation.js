// Craete a 2D array of size 5 X 6
let arr = Array(5);
for(let i= 0;i<5;i++){
    let inner = new Array(6).fill(0);
    arr[i] = inner;
};

// adding values to the array
arr[0][1] = 12;
arr[1][3] = 33;
console.log(arr);