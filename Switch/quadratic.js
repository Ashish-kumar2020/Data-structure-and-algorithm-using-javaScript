// find the roots of a quadratic equation


function solveEquation(a,b,c){
    let sqartValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqartValue) / (2*a);
    let root2 = (-b - sqartValue) / (2*a);
    console.log(root1,root2);
};

solveEquation(2,5,3);