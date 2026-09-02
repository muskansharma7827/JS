/*
class Human{
    //properties
     age = 22;
     weight = 70; //public
     #height = 180;   //private
     
     //behaviors
     walking(){
        console.log("human can walk");
     }
     eating(){
        console.log("human can eat", this.#height);
     }

     get fetchHeight(){
        return this.#height;
     }
     set modifyHeight(value){
        this.#height = value;
     }
}

let h1 = new Human();
h1.walking();
h1.eating();
console.log(h1.age);
console.log(h1.fetchHeight);
h1.modifyHeight = 190;
console.log(h1.fetchHeight);
*/


/*
class Human{
    //properties
     age;
     weight = 70; //public
     #height = 180;   //private
     

     constructor(newage,newheight){
        this.age = newage;
        this.#height = newheight; 
     }
     //behaviors
     walking(){
        console.log("human can walk");
     }
     eating(){
        console.log("human can eat", this.#height);
     }

     get fetchHeight(){
        return this.#height;
     }
     set modifyHeight(value){
        this.#height = value;
     }
}

let h1 = new Human(22,180);
console.log(h1.age);
console.log(h1.fetchHeight);
*/

/*
function sayhello(greeting){
    console.log(greeting , "people");
}
sayhello("hey");
*/

/*
function name(fname,lname="Doe"){
    console.log(fname + " " + lname);
}
name("John");

function name(fname,lname="Doe"){
    console.log(fname + " " + lname);
}
name("John");

function name(fname="John",lname="Doe"){
    console.log(fname + " " + lname);
}
name();
*/

/*
function sayhello(greeting = "HELLO", name = greeting.toLowerCase()){
    console.log(greeting , name);
}
sayhello();
*/

/*
function solve(value ={age:22, weight:70}){
    console.log(value);
}
solve();

function solve1(value =["muskan" , "sharma" , "cse"]){
    console.log(value);
}
solve1();
*/

/*
function solve(value = "hii"){
    console.log(value);
}
solve(null);

function solve2(value = "hii"){
    console.log(value);
}
solve2(undefined);
*/

function getAge(){
    return 22;
}
function utility(name = "muskan", age = getAge()){
    console.log(name, age);
}
utility("muskan");