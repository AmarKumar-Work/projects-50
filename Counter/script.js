const count = document.querySelector("#count");
const sub = document.querySelector("#sub");
const reset = document.querySelector("#reset");
const add = document.querySelector("#add");

let counter = 0;
// count decrease 

sub.addEventListener("click",()=>{
    counter--;
    count.innerHTML = counter;

})

// count increase 

add.addEventListener("click",()=>{
    counter++;
    count.innerHTML = counter;

})

// count reset

reset.addEventListener("click",()=>{
    counter = 0;
    count.innerHTML = counter;

})
