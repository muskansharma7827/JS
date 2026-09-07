

/*
try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here");

}
catch(err){
    console.log("An error occurred:" , err);
}
finally{
    console.log("I am the finally block that will execute everytime.")
}
    */

/*
try{
    let x = 10;
    console.log(x);
}
catch(err){
    console.log("the control will not come to catch block bcz when printing x x has alreday a valye, so, teh control will goes tom finally block.")
}
finally{
    console.log("hii I am the fianlly block,i will execute everytime.")
    
}
    */

try{
    console.log(x);
}
catch(err){
    throw new Error("this will print reference error but still i wnat to print that phle declare kr phir print kr statement that i can print in this throw error block.");
}
finally{
    console.log("hii , i will execute everytime.");
}