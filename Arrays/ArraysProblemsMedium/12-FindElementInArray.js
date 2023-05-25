// Check wheather the element is present in the array or not. If it is present then return 1 if not return -1


const searchElement = (nums,k)=>{
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === k){
            return 1;
        }
    }
    return -1;
};

const nums = [1,2,3,4,6];
const k = 30;
console.log(searchElement(nums,k));