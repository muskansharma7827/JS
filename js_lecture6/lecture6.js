/*
let obj = {
    name : "muskan",
    gender : "female",
    "full name" : " muskan sharma",  
    greet : function(){
        console.log("Goodmorning everybody")
        }

}

for(let key in obj){
    console.log(key, " ", obj[key]);
}

console.log(obj);
obj.greet();
console.log(typeof(obj))


let arr = [ "hii" , "everybody" , 1, 3.15];
console.log(arr);
let arr1 = new Array("hii" , "everybody" , 1, 3.15);       //array constructor
console.log(arr1);


let arr2= ["welcome" , "to" , "this", "beautiful" , "world"];    //accessing the elements of array
console.log(arr2[3]);


let arr5=["muskan"];
arr5.push("sharma","She is a developer");
arr5.pop();
console.log(arr5);


let arr6=["HTML","CSS","JS","ReactJS"];
//arr6.shift();
//arr6.unshift("NodeJS");
arr6.push("C");
arr6.push("C++");
arr6.push("Java");
console.log(arr6);
console.log(arr6.slice(0,4));


let a7=["tejasvi",19,"pretty"];
console.log(a7);
a7.splice(1,1,20);
console.log(a7);


let a7=["tejasvi",19,"pretty"];
console.log(a7);
a7.splice(1,0,"sharma");
console.log(a7);


let a8=[10,20,30];
let ans = a8.map((number) =>{
    return number*number;
})
console.log(ans);
let ans1= a8.map((number) =>{
    return number+1;
})
console.log(ans1);

 a8.map((number,index) =>{
    console.log(number);
    console.log(index);
})


let a9= [10,11,20,29];
let ans = a9.filter((number) => {
    return number%2==0;
    /*
    if(number%2 == 0){
       return true;
    }
    else{
       return false;
    }
       */
      /*
})
console.log(ans);


let a10=["yashu",20,1.4,-34];
let ans = a10.filter((value) => {
    if(typeof(value) === "number"){
        return true;
    }
    else{
        return false;
    }

})
console.log(ans);


let arr11=[10,20,30,40];
let ans =arr11.reduce((acc,curr) => {
    return acc+curr;
},0);
console.log(ans);


let arr12=[1,100,70,35,-56];
arr12.sort((a,b) => {
    return a-b;
})
console.log(arr12);
arr12.sort((a,b) => {
    return b-a;
})
console.log(arr12);


let arr13=[1,100,70,35,-56];
console.log(arr13.indexOf(1));
console.log(arr13.indexOf(100));
console.log(arr13.indexOf(70));
console.log(arr13.indexOf(35));
console.log(arr13.indexOf(-56));
console.log(arr13.indexOf(10));


let arr14=[189,-20,300,6779];
let ans =arr14.find(num => num > 1);
console.log(ans);


let arr15=[189,-20,300,6779];
arr15.forEach((value,index) => {
    console.log("Value:" , value , "Index:" , index) 
})


let arr16=[189,-20,300,6779];
for(let value of arr16){
    console.log(value);
}

let string = "life if full of surprises";
for(let char  of string){
    console.log(char);
}
*/


let arr17=[1,20,30];
function getsum(arr17){
    let len = arr17.length;
    let sum=0;
    for(let i=0;i<len;i++){
         sum = sum + arr17[i];
       
    }
    return sum;
}
let ans = getsum(arr17);
console.log(ans);


