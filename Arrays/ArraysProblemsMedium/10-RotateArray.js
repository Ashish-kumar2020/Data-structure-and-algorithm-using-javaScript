// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// const rotate = function(nums, k) {
//     // let n = nums.length;
//     // let temp = [];
//     // let res = [];
//     // let output = [];
//     // for(let i = nums.length - 1; i >= 0; i--) {
//     //    if(k>0){
//     //         temp.push(nums[i]); 
//     //         k--;
//     //     } else{
//     //         res.push(nums[i])
//     //     }
//     // }
//     //  res.sort((a,b)=> {return a-b});
//     // temp.sort((a,b)=> {return a-b});
//     // output = [...temp,...res];
   
//     // return output;
//     for(let i = 0; i<k; i++){

//             let temp = nums[nums.length - 1];//7
    
//             for(let j = nums.length - 1; j>0; j--){
    
//                 nums[j] = nums[j-1];
//             }
//             nums[0]=temp;
//         }
    
//         return nums;



        
// };

function reverse(a, i, j){

    let li = i;

    let ri = j;

    while(li<ri){

        let temp = a[li];

        a[li++] = a[ri];

        a[ri--] = temp;
    }

}
var rotate = function(nums, k) {

 // to decrease computation for same result
  k = k % nums.length;

  // if k is negative 
  // if(k < 0)

  // k = k + nums.length;
  
  
  //part 1
  //reverse left part
  reverse(nums, 0, nums.length-k-1);

  //part 2
  //reverse right part
   reverse(nums, nums.length-k, nums.length-1);

  //all
  
  reverse(nums, 0, nums.length-1);

  return nums;
};


const nums = [1,2,3,4,5,6,7];
const k = 3;
console.log(rotate(nums, k));