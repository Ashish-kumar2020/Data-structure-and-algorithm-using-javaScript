/**
 * Filter function
 * FIlter is also a Higher Order function
 * It also loops over the array elements
 * there is one special thing about filter i.e the argument function f which we have to pass inside filter
 * function should always return a boolean value, otherwise output will be converted to boolean
 * 
 * Filters loop over every array element,passes that element in the argumnet function and if the output of
 * this function is call is true, then it stores the original element in a new array otherwise it
 *  doesn't add this add elemenr to the array.
 */

function oddEven(x){
    return (x%2 == 0);
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
const value = arr.filter(oddEven);
console.log(value);