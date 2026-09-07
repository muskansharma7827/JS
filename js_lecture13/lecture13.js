/*   insert at dioffrent position
let mydiv = document.querySelector("#mydiv");
let newElement = document.createElement("span");
newElement.textContent = "muskan"
mydiv.insertAdjacentElement("beforeend",newElement);
*/

let mydiv = document.querySelector("#mydiv");
let parent = document.querySelector("#mydiv");
let Child = document.querySelector("#fpara");
parent.removeChild(Child);