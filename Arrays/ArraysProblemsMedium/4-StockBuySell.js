// Best Time to Buy and Sell Stocks - Part 1

// Brute Force Approach

const buySell = (arr)=>{
    let currMin = arr[0];
    let profit = 0;
    for(let i = 0; i<arr.length;i++){
        // sell
        if(arr[i] > currMin){
            profit = Math.max(profit,arr[i] - currMin);
        }
        // buy
        if(arr[i] < currMin){
            currMin = arr[i];
        };
    };
    return profit;
};

const arr = [7,1,5,3,6,4,10];
const value = buySell(arr);
console.log(value);