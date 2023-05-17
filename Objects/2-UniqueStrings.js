// Find all the unique strings in an array

let arr = ["abc",'a','b','c','d','e','f','abc','b'];
let obj = {};

for(const element of arr){
    if(!obj[element]){
        obj[element] = true;
    };
};

for(const key in obj){
    console.log(key);
}