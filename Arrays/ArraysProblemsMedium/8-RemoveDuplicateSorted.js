var removeDuplicates = function(arr) {
        let n = arr.length;
        if(n === 0){
            return 0;
        }    
        let i = 0;
        for(let j = 1; j<n;j++){
            if(arr[j]!== arr[i]){
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
};

const arr = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr))