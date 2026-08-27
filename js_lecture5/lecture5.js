/*
//function definition
function dosomething(){
    console.log("muskan");
}

//how to use function - function call
dosomething();


function hii(){
    for(let i=1;i<6;i++){
        console.log(i);
    }
}
hii();


function num(n1,n2){
    let n3;
    
    //let n3=n1+n2;
    //console.log(n3);
    //
    console.log(n3=n1+n2);


}
num(1,2);


function getavg(num1,num2){
    let num3= (num1 + num2) / 2;
    console.log("The average of 2 nos. are :", num3);

}
getavg(10,67);


function getmultiply(num1,num2,num3){
    let num4 = num1*num2*num3;
    return num4;

}
 let ans = getmultiply(20,3.15,5678);
 console.log("the result of multiplication of 3 nos. are:" , ans);
 


function getname(firstname,secondname){
    let name = firstname + " " + secondname;
    return name;
    //unreachable statements
    
    /*
    let a = 8;
    let b=0;
    let sum = a+b;
    console.log(a+b);
    */
   /*
}
let nameofperson = getname('Muskan','Sharma');
console.log("The name is:" , nameofperson);


let getmul = function(num1,num2){
    return num1*num2;
}
let ans1 = getmul(90,678);
console.log(ans1);
*/

let getexp = (num1,num2)=>{
    let num3 = num1**num2;
    return num3;
}
console.log(getexp(3,6));
