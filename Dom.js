gfg=1;
if (data=0){
    savenotes();
}
function addnotes(){
    const dock=document.getElementById("dock");
    const Divdoc=document.createElement("div");
    Divdoc.setAttribute("id",gfg);
    Divdoc.innerHTML = `
        <div class="bar2">
            <button onclick="savenotes()">Save</button>
            <button onclick="deletenotes(`+gfg+`)">Delete</button>
        </div>
        <textarea name="hii" class="notearea"></textarea>
    `;
    gfg++;
    dock.appendChild(Divdoc);

}
function deletenotes(index){
    const heoh =document.getElementById(index);
        heoh.parentNode.removeChild(heoh);
        ensureMinOneNote()
    }
function savenotes(){
    const savnote = document.querySelectorAll(".dock textarea");
    const data =[];
    savnote.forEach(
        (note)=>{
        data.push(note.value)

    })
    console.log(data);
    localStorage.setItem("notes",JSON.stringify(data))
    
}
(function() {
    const lsnotes = localStorage.getItem("notes"); // 'lsnotes' holds the raw string from localStorage
    console.log("Raw notes from localStorage:", lsnotes);

    if (lsnotes) { // Check if something is there
        try {
            const parsedLsnotes = JSON.parse(lsnotes);
            console.log("Parsed notes array:", parsedLsnotes);

            parsedLsnotes.forEach((noteContent) => { 
                addnotes();

                const savnote = document.querySelectorAll(".dock textarea"); 
                const lastNote = savnote[savnote.length - 1];
                if (lastNote) {
                    lastNote.value = noteContent; 
                }
            });
        } catch (e) {
            console.error("Error parsing notes from localStorage:", e);
            localStorage.removeItem("notes");
        }
    }
})();
function ensureMinOneNote() {
    const savnote = document.querySelectorAll(".dock textarea");
    if (savnote.length === 0) { 
        addnotes();
    }
}