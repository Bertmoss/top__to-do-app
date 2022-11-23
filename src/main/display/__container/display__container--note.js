import {createTable} from "../../../general/general__js/_table"
import {createBasicInput, createTextArea} from "../../../general/general__js/_input"
import {displayMod} from "../../main-pub-sub"


let noteDisplay = document.createElement("div");
noteDisplay.classList.add("display__container-note--hidden","display__container-note");

let noteContainer = document.createElement("div");

function subscribeNote(obj) {
  noteContainer.classList.add("note-container");
  //Note-Div
  let noteDiv = document.createElement("div");
  noteDiv.setAttribute("data-id", obj.id);
  noteDiv.classList.add("note-div")
  //Note-Div__Btn-Div
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("note-div__btn-div");
  //Btn-Div__Dlt-Btn
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.classList.add("btn-div__dlt-btn");
  dltBtn.addEventListener("click", () => {
    obj.remove();
  });
  btnDiv.appendChild(dltBtn);
  noteDiv.appendChild(btnDiv);
  

  //Btn-Div__Edit-Btn
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");
  editBtn.classList.add("btn-div__edit-btn");

  editBtn.addEventListener("click", () => {
    let tableData = document.querySelectorAll(
      `.display__container-note [data-id="${obj.id}"] .table__td`
    );
    tableData.forEach(function (td) {
      let editInput;
      if (td.classList.contains("table__td--title")) {
        editInput = createBasicInput(
          "table__edit-input",
          "text",
          "title",
          "edit-title"
        );
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = createTextArea(
          "table__edit-input",
          "details",
          "edit-details"
        );
        editInput.textContent = obj.details;
      } 
      td.parentNode.replaceChild(editInput, td);
    });

    /* Note-div__Submit-Edit-Btn */
    let submitChangeBtn = document.querySelector(".note-div__submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("note-div__submit-edit-btn", "p-note-div__submit-edit-btn");
    }

    submitChangeBtn.addEventListener("click", () => {
      let editedInputs = document.querySelectorAll(" .table__edit-input");
      editedInputs.forEach((input) => {
        console.log(obj)
        if (input.getAttribute("name") == "title") {
          input.value == "" ?  obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
          console.log(input.value)
          obj.details = input.value;
        }
      });
      submitChangeBtn.remove();
      displayMod.updateNotes();
    });
    noteDiv.appendChild(submitChangeBtn);
  });
  btnDiv.appendChild(editBtn);
  
  createTable(obj, noteDiv)
  noteContainer.appendChild(noteDiv)
  noteDisplay.appendChild(noteContainer);
}



function subRmvNoteDisplay() {
  while (noteContainer.firstChild) {
    noteContainer.removeChild(noteContainer.lastChild);
  }
}




export {subscribeNote, subRmvNoteDisplay, noteDisplay}