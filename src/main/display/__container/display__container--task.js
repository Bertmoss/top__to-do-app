import { taskRemover } from "../../main-pub-sub";
import { projectRemover } from "../../main-pub-sub";
import { createRadioInput, appendRadioInputs, createBasicInput, createTextArea } from "../../../general/general__js/_input";
const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden");

function createTable(obj, parent) {
  let table = document.createElement("table");
  for (const [key, value] of Object.entries(obj)) {
    if ( key == "type" || key === "id" || key == "project") { /* not sure why I have type task in the first place */
      continue;
    }

    let row = createRow(key, value);
    table.appendChild(row);
  }
  return parent.appendChild(table);
}
function createRow(key, value) {
  let tableRow = document.createElement("tr");
  let tableHeading = document.createElement("th")
  tableHeading.textContent = key;
  let tableData = document.createElement("td");
  tableData.textContent = value;
  assignClass(key, tableData);
  tableRow.appendChild(tableHeading);
  tableRow.appendChild(tableData);
  return tableRow;
}
function assignClass(key, element) {
  switch(key) {
    case ("title"):
      element.classList.add("table__td--title", "table__td");
      break;
    case ("details"):
      element.classList.add("table__td--details", "table__td");
      break;
    case ("date"):
      element.classList.add("table__td--date", "table__td");
      break;
    case ("priority"):
      element.classList.add("table__td--priority", "table__td");
      break;
  }
}




function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    taskRemover.remove(obj.id);
  });
  taskDiv.appendChild(dltBtn);

  /*EDIT BUTTON*/
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");

  /* This works in principle! Now need to find a way to condense it! */
  /* add classlist for each value, then for each . Have to create a function that replaces the old title in the obj with the new one 

 Have to create labels and hide them for accessibility */

  editBtn.addEventListener("click", () => {

    let tableData = document.querySelectorAll(`[data-id="${obj.id}"] .table__td`)
    let table = document.querySelector(`[data-id="${obj.id}"] table`) //Do I really need this?
    tableData.forEach(function(td) {
      let editInput;
      
      if (td.classList.contains("table__td--title")) {
        editInput = createBasicInput("table__edit-input", "text", "title", "edit-title"); 
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = createTextArea("table__edit-input", "details", "edit-details");
        editInput.textContent = obj.details;
      } else if (td.classList.contains("table__td--date")) {
        editInput = createBasicInput("table__edit-input", "date", "date", "edit-date");
        editInput.setAttribute("placeholder", obj.date);
      } else if (td.classList.contains("table__td--priority")){
        editInput = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.textContent = "Priority";
        editInput.appendChild(legend);
        let low = createRadioInput("low", "edit-btn__input");
        let medium = createRadioInput("medium", "edit-btn__input")
        let high = createRadioInput("high", "edit-btn__input")
        appendRadioInputs(editInput, [low, medium, high]);
       }

      td.parentNode.replaceChild(editInput, td);
    })
    /* let newTitleValue = document.createElement("input");
    newTitleValue.setAttribute("placeholder", obj.title);
    taskDiv.replaceChild(newTitleValue, titleValue);
 */
    
    
    let submitChangeBtn = document.createElement("button");
    submitChangeBtn.textContent = "Submit";
    submitChangeBtn.addEventListener("click", () => {
      let editedInputs = document.querySelectorAll(".table__edit-input");
      editedInputs.forEach((input) => {
        if (input.getAttribute("name") == "title") {
          obj.title = input.value
        } else if (input.getAttribute("name") == "details") {
          obj.details = input.value;
        } else if (input.getAttribute("name") == "date") {
          obj.date = input.value;
        }

        input.textContent = obj.title;
        taskDiv.replaceChild(titleValue, newTitleValue)
      })
      
      
      
      obj.title = newTitleValue.value;
      titleValue.textContent = obj.title;
      taskDiv.replaceChild(titleValue, newTitleValue);
      console.log(obj);
      submitChange.remove();
    });
    taskDiv.appendChild(submitChangeBtn);
  });
  taskDiv.appendChild(editBtn);

  createTable(obj, taskDiv);
  
  taskDisplay.appendChild(taskDiv)
}

function subRmvTaskDisplay() {
  while (taskDisplay.firstChild) {
    taskDisplay.removeChild(taskDisplay.lastChild);
  }
}
function createForm(obj) {
  
}

export { subscribeTask, taskDisplay, subRmvTaskDisplay };
