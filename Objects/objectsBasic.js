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