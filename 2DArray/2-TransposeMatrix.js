var transpose = function(matrix) {
    let result = new Array(matrix[0].length);
    for(let i =0;i<matrix[0].length;i++){
        let arr = Array(matrix.length);
        result[i] = arr;
    }
    for(let row = 0;row<matrix.length;row++){
        for(let col = 0; col < matrix[row].length;col++){
            result[col][row] = matrix[row][col];
        }
    }
    return result;
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(matrix));