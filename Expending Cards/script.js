const cards = document.querySelectorAll(".inner-container");

console.log(cards);



function removeActiveclasses(){
    cards.forEach(card=>{
        card.classList.remove("active");
    })
}

cards.forEach(card=>{
    card.addEventListener("click",()=>{
        removeActiveclasses();
        card.classList.add("active");
       
    });
});