/*let src = {
    age:22,
    height:180
};

/*let dest = {...src};
console.log(src);
dest.age = 23;
console.log(dest);


let dest = src;
dest.age = 23;
console.log(src);

            console.log(dest);
*/

/*
let dest = Object.assign({},src);
console.log(src);
dest.age = 23;
console.log(dest);
*/

let src={
    age:22,
    height:180,
    weight:80,
}
let dest  = {};
for(let key in src){
    let newkey = key;
    let newvalue = src[key];
    //insert newkey and newvalue into dest and create a clone
    dest[newkey]= newvalue;
}
console.log(src);
console.log(dest);

src.age = 60;

console.log(src);
console.log(dest);
