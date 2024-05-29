const btnEl = document.getElementById("btn")
const joke = document.getElementById("joke")
const apiKey = "IjMgAu/8+5VURHNaqFICrQ==gmQLDO68AMXxXcuQ"
const  options ={
    mrthod : "GET",
    headers :{
        "X-Api-Key" : apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes"

async function getJoke(){

    try {
    
    joke.innerText = "Updating..."

    btnEl.disabled = true
    btnEl.innerText = "Loading..."

    const response = await fetch(apiURL, options)
    const data = await response.json()
   
    btnEl.disabled = false
    btnEl.innerText = "Tell Me a Joke"

    joke.innerText  = data[0].joke
        
    } catch (error) {
        joke.innerText = "Check your internet Connection";
        btnEl.disabled = false
        btnEl.innerText = "Tell Me a Joke"


        console.log(error);
        
    }
}


btnEl.addEventListener("click", getJoke)