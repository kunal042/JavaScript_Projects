
const app = document.getElementById("app")
const btn = document.getElementById("btn")

getNotes().forEach((note) =>  {
    const noteEl = createNoteEL(note.id, note.content)
    app.insertBefore(noteEl, btn)
})





function createNoteEL(id, content){
    // console.log(id,content);

    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content


    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do You Want to delete this note?")
        if (warning){
            deleteNote(id, element)
        }
    })

    element.addEventListener("input", ()=>{
        UpdateNote(id, element.value)
    })
    return element
}

function deleteNote(id, element){
    const notes = getNotes().filter((notes)  => {
        notes.id != id
    })
    SaveNote(note)
    app.removeChild(element)  

}


function UpdateNote(id, content){
    const notes = getNotes()
    const target = notes.filter((notes) => notes.id == id)[0];
    target.content = content
    SaveNote(notes)

}




function addNote(){
    const notes = getNotes()
    const noteObj = {
        id : Math.floor(Math.random()*100000),
        content : "",
    };

    const noteEl = createNoteEL(noteObj.id, noteObj.content);
    app.insertBefore(noteEl,btn)

    notes.push(noteObj)
    SaveNote(notes)
}


function SaveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || '[]' )
}


btn.addEventListener("click", addNote)