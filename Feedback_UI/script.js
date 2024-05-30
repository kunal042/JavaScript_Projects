const rating = document.querySelectorAll(".rating")
const btn = document.getElementById("btn")
const container = document.getElementById("container")
let selectedRating = ""

rating.forEach((rating)  => {
    rating.addEventListener("click", ()=>{
        console.log(event.target.innerText || event.target.parentNode.innerText);
        
        removeActive()
        selectedRating =   event.target.innerText || event.target.parentNode.innerText;
        
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
   
    })
})

btn.addEventListener("click", ()=>{
    if (selectedRating  !== ""){
        container.innerHTML = `
        <strong> Thank You! </stong>
        <br><br>
        <strong> Feedbak :  ${selectedRating} </stong>
        <br> <br>
        <p> We'll use your feedback to improve our 
        customer support. </p>

        `
    }
})


function removeActive(){
    rating.forEach((rating)  => {

        rating.classList.remove('active')
        
    })
}