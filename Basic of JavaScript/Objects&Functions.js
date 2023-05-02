function foo(){
    return "Hello From Functions";  
    // return 42;
}
foo.bar = "Hello Functions";
// console.log(typeof(foo));   // function
// console.log(typeof(foo()));  // it depends on what type of value is returned from the function
// console.log(typeof(foo.bar));   // string

// Objects
// ------------------------------------------------------------------------------------------------

var obj  = {
    a: "Hello world",
    b: 20,
};
var b = "b";
var a = 'a';
console.log(typeof(b))
console.log(obj[b]);
console.log(obj[a])

// Arrays
// ------------------------------------------------------------------------------------------------

var arr = ['hello world', 23, true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);