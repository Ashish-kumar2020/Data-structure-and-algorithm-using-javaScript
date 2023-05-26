const unionArray = (arr1,arr2,n,m)=>{
    const set1 = new Set();
    for(let i = 0;i<n;i++){
        set1.add(arr1[i]);
    };
    for(let j = 0;j<m;j++){
        set1.add(arr2[j]);
    };
    return set1;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1,2,3];
const n = arr1.length;
const m = arr2.length;
console.log(unionArray(arr1,arr2,n,m));