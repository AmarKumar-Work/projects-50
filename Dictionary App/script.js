const input = document.querySelector("#input");
const search = document.querySelector("#search");
const output = document.querySelector("#meaning");

search.addEventListener("click",async()=>{

    output.textContent = "Loading...";
    const inputval = input.value;

    if(inputval===""){
        alert("Please enter a word!")
    }else{

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputval}`;

        let meaning = await fetch(url);

        meaning = await meaning.json();

        console.log(meaning);

        console.log("meaning",meaning[0]['meanings'][0]['definitions'][0]['definition'])

        output.textContent = meaning[0]['meanings'][0]['definitions'][0]['definition']; 
    }
})