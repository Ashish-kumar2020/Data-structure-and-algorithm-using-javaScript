

const wavePrint = (grid,m,n)=>{
    let str = "";
    for(let col = 0; col < n; col++){
        if(col %2 == 0){
            // print top to bottom
            for(let row = 0; row < m;row++){
                str += grid[row][col] + " ";
            }
        } else{
            // print bottom to top
            for(let row = m-1; row >= 0;row--){
                str += grid[row][col] + " ";
            }
        }
    }
    console.log(str);
};

let grid = [[1,2,3], [4,5,6], [7,8,9]];
console.log(wavePrint(grid,3,3));