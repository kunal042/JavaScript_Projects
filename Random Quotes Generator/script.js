const btn = document.getElementById("btn")
const quotes = document.getElementById("quotes")
const author = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"


async function getQuotes(){
    // console.log("clicked");


    try {

        btn.innerText = "Loading..."
        btn.disabled = true

        quotes.innerText = "Updating quotes..."
        author.innerText = " author..."



        const response = await fetch(apiURL)
        const data = await response.json()
    
        const quotesContent = data.content
        let quotesAuthor = data.author
    
    
        quotes.innerText = quotesContent
        author.innerText = ` ~ ${quotesAuthor}`

        btn.innerText = "Get a Quote"
        btn.disabled = false


        // console.log(data);
        
    } catch (error) {
        // console.log(error);
            
        quotes.innerText = "An Error happened, try"
        author.innerText = ` An errror happened`

        
    }

}
getQuotes()


btn.addEventListener("click", getQuotes)