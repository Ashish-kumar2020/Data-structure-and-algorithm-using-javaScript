// Print the Fibonaaci number

const fibonaaci = (n)=>{
    if(n === 0){
        console.log(0);
        return;
    }
    if(n >= 1){
        console.log(0);
        console.log(1);
    }
    let last = 1;
    let secLast = 0;
    for(let i = 2; i<=n; i++){
        let fibSeries = last + secLast;
        console.log(fibSeries);
        secLast = last;
        last = fibSeries;
    };
};

console.log(fibonaaci(10));