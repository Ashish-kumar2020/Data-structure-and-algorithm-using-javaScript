/**
 * reduce is a higher order function
 * it also takes function f as an argument
 * what reduce does is it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f and accumulate the result of further function calls
 * with this particular result
 */

function sum(acc,curr){
    return (acc + curr);
};

let arr = [1,2,3,4,5,6,7,8,9,10,11];
const value = arr.reduce(sum);
console.log(value);