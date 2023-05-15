// Check weather a given Number/String is palindrome or not.

const checkPalindrome = (num)=>{
    let str = "" + num;
    let i = 0;
    let j = str.length - 1;

    while(i <= j){
        if(str[i] == str[j]){
            i++;
            j--;
        } else{
            return false;
        }
    }
    return true;
}



if(checkPalindrome(192391)){
    console.log("Number is Palindrome");
}else{
    console.log("Number is Not Palindrome");
}