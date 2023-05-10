/**
 *          *
 *         **
 *        ***
 *       ****
 *      *****
 */

// Print the pattern

const printPattern = (n)=>{
    for(let row = 1;row<=n;row++){
        let str = "";
        let spaces = n - row;
        for(let j = 1; j<= spaces;j++){
            str += '_';
        }
        let stars = row;
        for(let col = 1; col<=stars;col++){
            str += "*";
        }
        console.log(str);
    }
};

console.log(printPattern(9));