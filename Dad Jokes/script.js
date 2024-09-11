const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#get_joke");

jokebtn.addEventListener("click", generateJoke)


async function generateJoke(){
    
    // const header = {
    //     headers: { 'X-Api-Key': 'ooO9g57NGN1lgxctHFT6Xu8EFsnHJLVI5XfQsV4M'},
    // }

    const url = 'https://official-joke-api.appspot.com/random_joke';

    
let dadjoke = await fetch(url);
    
    dadjoke = await dadjoke.json();

    let setup = dadjoke.setup;
    let punchline = dadjoke.punchline;


console.log("dadjoke",dadjoke);
console.log(dadjoke);
console.log(dadjoke.setup);
console.log(dadjoke.punchline);

joke.innerHTML = `${setup} - ${punchline}`;
}