const input = document.getElementById("input")
const infoText = document.getElementById("info-text")
const meaningContainer = document.getElementById("meaning-container")
const title = document.getElementById("title")
const meaning = document.getElementById("meaning")
const audio = document.getElementById("audio")




async function fetchAPI(word){
    // console.log(word);

    try {

        infoText.style.display = "block"
        meaningContainer.style.display = "none";

        infoText.innerText = `Searching the Meaning of " ${word}" `
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=> res.json());

        if (result.title){

            infoText.style.display = "none"
            meaningContainer.style.display = "block";

            title.innerText = word;
            meaning.innerText = "N/A"
            audio.style.display = "None"
        }else{
            // console.log(result);
            infoText.style.display = "none"
            meaningContainer.style.display = "block";
         title.innerText = result[0].word
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;

        }
        
    } catch (error) {
        console.log(error);
        infoText.innerText = `an Error happened , try again later." `
   
    }
    
}



input.addEventListener("keyup", (e)=>{
    // console.log(e.target.value);
    // console.log(e.key);

    if (e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})