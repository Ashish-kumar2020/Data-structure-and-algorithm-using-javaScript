// Merge Two sorted array

const mergeArray = (arr1,arr2,s1,s2,arr3)=>{
    let i = 0,j = 0,k =0;
    while(i < s1 && j < s2){
        if(arr1[i] < arr2[j]){
            arr3[k++] = arr1[i++];
        } else{
            arr3[k++] = arr2[j++];
        }
    }
    while(i < s1){
        arr3[k++] = arr1[i++];
    } 
    while(j < s2){
        arr3[k++] = arr2[j++];
    };
   return arr3;
};

const arr1 = [ 1, 3, 5, 7 ];
const arr2 = [ 2, 4, 6, 8];
const arr3 = [];
const s1 = arr1.length;
const s2 = arr2.length;

const value = mergeArray(arr1,arr2,s1,s2,arr3);
console.log(value);
