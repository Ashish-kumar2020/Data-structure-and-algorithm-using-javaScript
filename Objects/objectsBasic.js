let x = {
    name: 'Ashish',
    age: 23
};

let y = {name: 'Kumar',age: 23};

// console.log(y);

// console.log(x.name);
// console.log(y["age"]);

// Adding a new key value
// x["company"] = "Apple";
x.company = "Apple";

// deleting a key value
// delete x.name;
delete x["name"];
// console.log(x);



let obj = {
    name: 'Ashish',
    age: 23,
    address: 'Nethaur',
    company: 'Apple',
    laptop: 'Apple',
    city: 'Noida',
    team: 'Slot'
};

// console.log(obj);
// Accessing keys from object
console.log(Object.keys(obj));

// Accessing values from object
console.log(Object.values(obj));

// Accessing all entries from object
console.log(Object.entries(obj));

// Accessing keys using for-in loop from object
for(let key in obj){
    console.log(key,obj[key]);
}

let newArr = [4,5,6,7,8,9,10,11,12,13,14,15];

function printArray(element,index){
    return `Element at index ${index} is ${element}`;
};

const output = newArr.map(printArray);
console.log(output);

// creating our own map function
function customMap(arr,fun){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fun(arr[i],i));
    }
    return result;
};

const value = customMap(newArr,printArray);
console.log(value);