const empties = document.querySelectorAll(".empty");
const box = document.querySelector(".img-box");

console.log("empties",empties);
console.log("box",box);

box.addEventListener("dragstart",dragStart);
box.addEventListener("dragend",dragEnd);

function dragStart(){
    console.log("dragStart");
}

function dragEnd(){
    console.log("dragEnd");
}

// Drag Entry

function dragEnter(e){
    e.preventDefault();
    this.classList.add("hold");
    console.log("drag enter");
}


// Drag Leave

function dragLeave(){
    this.classList.remove("hold");
    console.log("drag leave");
} 


// Drag over

function dragOver(e){
    e.preventDefault();
    console.log("dragover");

}

// Drag drop

function drop(){
    this.classList.remove("hold");
    this.appendChild(box);
    console.log("drop");
}


for(let empty of empties){

    empty.addEventListener("dragenter",dragEnter);
    empty.addEventListener("dragover",dragOver);
    empty.addEventListener("dragleave",dragLeave);
    empty.addEventListener("drop",drop);
}