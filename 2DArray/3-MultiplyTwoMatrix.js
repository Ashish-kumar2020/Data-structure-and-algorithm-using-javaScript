function multiply(a,m,n,b,n,k){
    let c = Array(m);
    for(let i= 0;i<m;i++){
        c[i]=Array(k).fill(0);
    }

    // iterate over every cell of c
    for(let i = 0; i<m;i++){  // to go every row of c
        for(let j= 0;j<k;j++){ // to go every col of c
            for(let x = 0; x < n;x++){
                c[i][j] += a[i][x] * b[x][j];
            }
        }

    }
    console.table(c);
};

let a = [[1,1],[2,2],[3,3]];
let b = [[1,1,1],[2,2,2]];
multiply(a,3,3,b,2,3)