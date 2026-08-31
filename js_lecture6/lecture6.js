/*
let obj = {
    name : "muskan",
    gender : "female",
    "full name" : " muskan sharma",  
    greet : function(){
        console.log("Goodmorning everybody")
        }

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
*/

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