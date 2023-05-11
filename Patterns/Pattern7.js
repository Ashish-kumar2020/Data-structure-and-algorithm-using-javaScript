// *****
// *   *
// *   *
// *   *
// *****

// Print this pattern


function printPattern(n){
    let string = "";
    for(let i = 0; i < n; i++) { 
    for(let j = 0; j < n; j++) { 
        if(i === 0 || i === n - 1) {
        string += "*";
        }
        else {
        if(j === 0 || j === n - 1) {
            string += "*";
        }
        else {
            string += " ";
        }
        }
    }
    string += "\n";
    }
    console.log(string);
}

printPattern(5);