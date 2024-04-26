const creatBtn = document.querySelector("#button-time");
const inputContainer = document.querySelector(".input-container");


function showText() {
    var delIcon = document.createElement("img");
    delIcon.src = "images/delete.png";
    var newNote = document.createElement("p");
    newNote.setAttribute('contenteditable', 'true');
    inputContainer.appendChild(newNote);
    newNote.appendChild(delIcon);
    newNote.focus();
    document.execCommand('selectAll', false, null);
    document.getSelection().collapseToStart();
    function startCursor() {
        newNote.focus();
        document.execCommand('selectAll', false, null);
        document.getSelection().collapseToStart();
    }
    startCursor();
    removeEle(delIcon);
}


function removeEle(delIcon) {
    delIcon.addEventListener("click", () => {
        delIcon.parentElement.remove();
    })
}

// delIcon.addEventListener("click", () => {
//     removeEle();
// })

creatBtn.addEventListener("click", () => {
    showText();
})



