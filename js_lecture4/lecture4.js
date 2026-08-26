/*
for(let i=0;i<10;i++){
    console.log("Muskan");
}


for(let i=1;i<6;i++){
    console.log(i);
}


for(let i=5;i>0;i--){
    console.log(i);

}

for(let i=1;i<7;i++){
    if(i==5)       //if true then we will enter in if othrewise in else.
        break;
    else
        console.log(i);
}

for(let i=1;i<7;i++){
    if(i==5)       //if true then we will enter in if othrewise in else.
        continue
    else
        console.log(i);
}


let i=1;
while(i<=10){
    console.log("HELLO PEOPLE")
    i++;
}


console.log("counting form 1 to 5:");
let i =1;
while(i<6){
    console.log(i);
    i++;
}

console.log("reverse counting:");
  i=10;
while(i>5){
    console.log(i);
    i--;

}


let i=1;
while(i<6){
    if(i==4){
        i++;
        continue;
    }
    else{
        console.log(i);
    }
i++;
}


let i=1;
do{
    console.log("Muskan");
    i++;
}
while(i<6);

i=2;
do{
    console.log(i);
    i++;
}
while(i<7);

i=10;
do{
    console.log(i);
    i--;
}
while(i>5);


let s2=`hello
world`;
console.log(s2);

let sname = new String("muskan");
console.log(sname);
*/

let n1="muskan";
let n2="MUSKAN";
let n3= n1 + n2;
let n4 = `${n1} and ${n2}`;
console.log(n3);
console.log(n4);
console.log(n1.length);
console.log(n1.toUpperCase());
console.log(n2.toLowerCase());
console.log(n1.substring(0,4));
console.log(n1.substring(0));
console.log(n1.substring(4));

let sentence1="welcome to this beautiful world";
let words = sentence1.split(" ");
console.log(words);

let sentence2 = " welcome to the \*mesmersing\* world";
console.log(sentence2);

let s2= " hello \\jee \\kaise \\ho \\saare";
let w2 = s2.split("\\");
console.log(w2);
console.log(w2.join(","));

