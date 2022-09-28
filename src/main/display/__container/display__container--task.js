import { taskRemover } from "../../main-pub-sub";
import { createTable } from "../../../general/general__js/_table";
import { projectRemover } from "../../main-pub-sub";
import {
  createRadioInput,
  appendRadioInputs,
  createBasicInput,
  createTextArea,
} from "../../../general/general__js/_input";

const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden");

/* SORT BUTTON */
/* NEED TO ADD A SORT BY DATE OPTION */
let sortDiv = document.createElement("div");
let sort = document.createElement("select");
let sortPlaceholder = document.createElement("option");
sortPlaceholder.setAttribute("disabled","");
sortPlaceholder.setAttribute("selected","")
sortPlaceholder.setAttribute("value", " ");
sortPlaceholder.textContent = "Sort";
sort.appendChild(sortPlaceholder);

let sortPriorityDescending = document.createElement("option");

sortPriorityDescending.textContent = "Most Important";
sortPriorityDescending.setAttribute("value", "most");

let sortPriorityAscending = document.createElement("option");

sortPriorityAscending.textContent = "Least Important";
sortPriorityAscending.setAttribute("value", "least")

let sortDateDescending = document.createElement("option");
sortDateDescending.textContent = "Earliest"
sortDateDescending.setAttribute("value", "earliest");

let sortDateAscending = document.createElement("option");
sortDateAscending.textContent = "Latest"
sortDateAscending.setAttribute("value", "latest");


sort.addEventListener("click", () => {
  taskRemover.displaySorted(sort.value);
   
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sort.appendChild(sortDateDescending);
sort.appendChild(sortDateAscending)
sortDiv.appendChild(sort);
taskDisplay.appendChild(sortDiv);


/* Complete Display button */
const completeDiv = document.createElement("div");
const completeDisplayBtn = document.createElement("button");
completeDisplayBtn.setAttribute("type", "button");
completeDisplayBtn.textContent = "COMPLETE" // change to check svg later;
completeDisplayBtn.addEventListener("click", () => {
  taskRemover.displayComplete();
  
  /* 
  taskRemover.displayComplete();
  let checkedInput = document.querySelectorAll(".task-div__done-input");
  checkedInput.forEach((input) => {
    input.setAttribute("checked", "");
    input.addEventListener("click", () => {
      let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
      taskTable.forEach((element) => {
        console.log(element)
        console.log("yoo");
        element.classList.toggle("complete");
      })
    })
  })
  let tableRows = document.querySelectorAll("tr");
  tableRows.forEach((tr) => {
    tr.classList.add("complete");
  }) */
})
completeDiv.appendChild(completeDisplayBtn);
taskDisplay.appendChild(completeDiv);





/* TASK CONTAINER */
const taskContainer = document.createElement("div");
taskDisplay.appendChild(taskContainer);

/* Might have to make a separate subscribe for complete tasks */

function prioritySwitch(element, obj) {
  switch(obj.priority) {
    case "high":
      element.classList.add("priority-high");
      break;
    case "medium":
      element.classList.add("priority-medium");
      break;
    case "low":
      element.classList.add("priority-low");
  }
} 
function subCompleteTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  let completeInput = createBasicInput("task-div__done-input", "checkbox", "complete-input", "complete-input");
  completeInput.setAttribute("checked", "");
  completeInput.addEventListener("click", ()=> {
    taskRemover.complete(obj.id);
    let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })

  taskDiv.appendChild(completeInput);
  createTable(obj, taskDiv);
  
  taskContainer.appendChild(taskDiv);
  let allRows = document.querySelectorAll("th, td");
  allRows.forEach((row) => {
    row.classList.add("complete");
  })
}


function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  prioritySwitch(taskDiv, obj)
  /* Complete checkbox */
  let completeInput = createBasicInput("task-div__done-input", "checkbox", "complete-input", "complete-input");
  
  completeInput.addEventListener("click", ()=> {
    taskRemover.complete(obj.id);
    (obj.status == "complete") ? taskRemover.removeTaskFromProjectIdArr(obj): obj.pushId() ;
    let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
    
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
    editBtn.classList.toggle("hidden");
  })

  taskDiv.appendChild(completeInput);

  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    console.log(obj)
    taskRemover.remove(obj.id);
    taskRemover.removeTaskFromProjectIdArr(obj);
  });
  taskDiv.appendChild(dltBtn);

  /*EDIT BUTTON*/
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");

  /*Have to create labels and hide them for accessibility ??*/

  editBtn.addEventListener("click", () => {
    let tableData = document.querySelectorAll(
      `[data-id="${obj.id}"] .table__td`
    );
    //let table = document.querySelector(`[data-id="${obj.id}"] table`) //Do I really need this?
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
      } else if (td.classList.contains("table__td--date")) {
        editInput = createBasicInput(
          "table__edit-input",
          "date",
          "date",
          "edit-date"
        );
        editInput.setAttribute("placeholder", obj.date);
      } else if (td.classList.contains("table__td--priority")) {
        editInput = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.textContent = "Priority";
        editInput.appendChild(legend);
        let low = createRadioInput("low", "edit-btn__input--radio");
        let medium = createRadioInput("medium", "edit-btn__input--radio");
        let high = createRadioInput("high", "edit-btn__input--radio");
        appendRadioInputs(editInput, [low, medium, high]);
      }

      td.parentNode.replaceChild(editInput, td);
    });
    /* SUBMIT CHANGES BTN */
    let submitChangeBtn = document.querySelector(".submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("submit-edit-btn");
    }
    
    submitChangeBtn.addEventListener("click", () => {
      let editedInputs = document.querySelectorAll(".table__edit-input");
      editedInputs.forEach((input) => {
        if (input.getAttribute("name") == "title") {
          input.title == "" ? obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
          obj.details = input.value;
        } else if (input.getAttribute("name") == "date") {
          input.value == "" ? obj.date : (obj.date = new Date(input.value));
        }
      });
      let editedPriorityInput = document.querySelector(
        ".edit-btn__input--radio:checked"
      );
      editedPriorityInput == null
        ? obj.priority
        : (obj.priority = editedPriorityInput.value);
      submitChangeBtn.remove();
      taskRemover.clearDisplay();
    });
    taskDiv.appendChild(submitChangeBtn);
  });

  taskDiv.appendChild(editBtn);
  createTable(obj, taskDiv);
  taskContainer.appendChild(taskDiv);
}

function subRmvTaskContainer() {
  while (taskContainer.firstChild) {
    taskContainer.removeChild(taskContainer.lastChild);
  }
}

export { subscribeTask, taskDisplay, subRmvTaskContainer, subCompleteTask };
