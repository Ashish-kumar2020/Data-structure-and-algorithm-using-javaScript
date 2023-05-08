const countVowels = (str)=>{
    let count = 0;
    let splitString = str.split("");
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] == 'a' || splitString[i] == 'e' || splitString[i] == 'i' || splitString[i] == 'o' || splitString[i] == 'u' || splitString[i] == 'A' || splitString[i] == 'E' || splitString[i] == 'I' || splitString[i] == 'O' || splitString[i] == 'U'){
            count++;
        }
    }
    return count;
};

console.log(countVowels('aeIou'));