import {createTable} from "../../../general/general__js/_table"

let noteDisplay = document.createElement("div");
noteDisplay.classList.add("display__container-note--hidden","display__container-note");

function subscribeNote(obj) {
  /* delete btn */
  let noteDiv = document.createElement("div");
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    obj.remove();
  });
  noteDiv.appendChild(dltBtn);
  createTable(obj, noteDiv)
  noteDisplay.appendChild(noteDiv);
}



function subRmvNoteDisplay() {
  while (noteDisplay.firstChild) {
    noteDisplay.removeChild(noteDisplay.lastChild);
  }
}




export {subscribeNote, subRmvNoteDisplay, noteDisplay}