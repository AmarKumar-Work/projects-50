const text = document.querySelector("#text");
const total_char = document.querySelector("#total_char");
const remaining_char = document.querySelector("#remaining_char");

text.addEventListener("input",()=>{
    const total = text.value.length;
    total_char.innerHTML = total;

    remaining_char.innerHTML = 50-total;

    if(total===50){
        text.disabled = true;
    }else{
        text.disabled = false;
    }
});