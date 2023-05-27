
const print2DArray = (grid)=>{
    let str = "";
    for(let i = 0;i<grid.length;i++){
        for(let j = 0; j<grid[i].length;j++){
            str += grid[i][j] + " ";
        };
    };
    console.log(str);
};

const grid = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
console.log(print2DArray(grid));