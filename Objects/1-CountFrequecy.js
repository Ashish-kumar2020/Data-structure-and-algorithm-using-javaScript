// Count the frequency of string characters

function countFrequency(str){
    let frequencyMap = {};
    for(let char of str){
        if(frequencyMap[char]){
            frequencyMap[char] += 1;
        } else{
            frequencyMap[char] = 1;
        };
    };
    return frequencyMap;
};

let str = "javascript";
let output = countFrequency(str);
console.log(output);