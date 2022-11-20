import { displayMod } from "../../main-pub-sub";
import { createTable } from "../../../general/general__js/_table";

import {
  createRadioInput,
  appendRadioInputs,
  createBasicInput,
  createTextArea,
} from "../../../general/general__js/_input";
import { endOfWeek, isAfter, isBefore, parseISO } from "date-fns";

const taskDisplay = document.createElement("div");
taskDisplay.classList.add(
  "display__container-task"
);


/* SORT BUTTON */
let srtCpltDiv = document.createElement("div");
srtCpltDiv.classList.add("srt-cplt-div", "p-container-task__srt-cplt-div");
let sort = document.createElement("select");
sort.classList.add("srt-cplt-div__srt-btn","p-srt-cplt-div__srt-btn")
let sortPlaceholder = document.createElement("option");
sortPlaceholder.setAttribute("disabled", "");
sortPlaceholder.setAttribute("selected", "");
sortPlaceholder.setAttribute("value", " ");
sortPlaceholder.textContent = "Sort";
sort.appendChild(sortPlaceholder);

let sortPriorityDescending = document.createElement("option");

sortPriorityDescending.textContent = "Most Important";
sortPriorityDescending.setAttribute("value", "most");

let sortPriorityAscending = document.createElement("option");

sortPriorityAscending.textContent = "Least Important";
sortPriorityAscending.setAttribute("value", "least");

let sortDateAscending = document.createElement("option");
sortDateAscending.textContent = "Date (Ascending)";
sortDateAscending.setAttribute("value", "date-ascending");

let sortDateDescending = document.createElement("option");
sortDateDescending.textContent = "Date (Descending)";
sortDateDescending.setAttribute("value", "date-descending");

sort.addEventListener("click", () => {
  taskContainer.classList.remove("task-container--srt-date")
  displayMod.updateSorted(sort.value)
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sort.appendChild(sortDateAscending);
sort.appendChild(sortDateDescending);
srtCpltDiv.appendChild(sort);
taskDisplay.appendChild(srtCpltDiv);

/* Complete Display button */
//const completeDiv = document.createElement("div");
const completeDisplayBtn = document.createElement("button");
completeDisplayBtn.classList.add("srt-cplt-div__cplt-btn", "p-srt-cplt-div__cplt-btn")
completeDisplayBtn.setAttribute("type", "button");
completeDisplayBtn.textContent = "COMPLETE"; 
completeDisplayBtn.addEventListener("click", () => {
  displayMod.updateComplete()
});
srtCpltDiv.appendChild(completeDisplayBtn);
//taskDisplay.appendChild(completeDiv);

/* TASK CONTAINER */
const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container")
taskDisplay.appendChild(taskContainer);

function priorityColorSwitch(element, obj) {
  switch (obj.priority) {
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
  taskDiv.classList.add("task-div")
  taskDiv.setAttribute("data-id", obj.id);
  //Btn Div 
  let btnCpltDiv = document.createElement("div");
  btnCpltDiv.classList.add("task-div__btn-div");
  let completeInput = createBasicInput(
    "btn-div__done-input",
    "checkbox",
    "complete-input",
    "complete-input"
  );
  completeInput.setAttribute("checked", "");
  completeInput.addEventListener("click", () => {
    obj.complete();
    let taskTable = document.querySelectorAll(
      `div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`
    );
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    });
  });
  btnCpltDiv.appendChild(completeInput);
  taskDiv.appendChild(btnCpltDiv);
  createTable(obj, taskDiv);

  taskContainer.appendChild(taskDiv);
  let allRows = document.querySelectorAll("th, td");
  allRows.forEach((row) => {
    row.classList.add("complete");
  });
}

function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);

  taskDiv.setAttribute("data-date", obj.date);
  taskDiv.classList.add("task-div")
  priorityColorSwitch(taskDiv, obj);
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("task-div__btn-div")
  let sideBtnDiv = document.createElement("div");
  sideBtnDiv.classList.add("btn-div__side-div")



  /* Complete checkbox */
  let completeInput = createBasicInput(
    "btn-div__done-input",
    "checkbox",
    "complete-input",
    "complete-input"
  );
  
  completeInput.addEventListener("click", () => {
    obj.complete();
    obj.status == "complete" ? obj.removeTaskFromProjectIdArr() : obj.pushId();
    let taskTable = document.querySelectorAll(
      `div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`
    );

    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    });
    editBtn.classList.toggle("hidden");
  });

  btnDiv.appendChild(completeInput);

  /*EDIT BUTTON*/

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn-div__edit-btn")
  editBtn.setAttribute("type", "button");


  editBtn.addEventListener("click", () => {
    editBtn.classList.add("hidden");
    let tableData = document.querySelectorAll(
      `.display__container-task [data-id="${obj.id}"] .table__td`
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
        editInput.classList.add("edit__fieldset")
        let legend = document.createElement("legend");
        legend.textContent = "Priority";
        editInput.appendChild(legend);
        let low = createRadioInput("low", "edit__input--radio");
        let medium = createRadioInput("medium", "edit__input--radio");
        let high = createRadioInput("high", "edit__input--radio");
        appendRadioInputs(editInput, [low, medium, high]);
      }

      td.parentNode.replaceChild(editInput, td);
    });
    /* SUBMIT CHANGES BTN */
    let submitChangeBtn = document.querySelector(".submit-edit-btn");
    if (!submitChangeBtn) {
      submitChangeBtn = document.createElement("button");
      submitChangeBtn.textContent = "Submit";
      submitChangeBtn.classList.add("task-div__submit-edit-btn", "p-task-div__submit-edit-btn");
    }

    submitChangeBtn.addEventListener("click", () => {
      editBtn.classList.remove("hidden");
      let editedInputs = document.querySelectorAll(" .table__edit-input");
      editedInputs.forEach((input) => {
        if (input.getAttribute("name") == "title") {
          input.value == "" ?  obj.title : (obj.title = input.value);
        } else if (input.getAttribute("name") == "details") {
          obj.details = input.value;
        } else if (input.getAttribute("name") == "date") {
          if (input.value !== "") {
            let dateProcessed = new Date(input.value);
            dateProcessed = dateProcessed.toISOString().split("T")[0];
            obj.date = dateProcessed;
          }
        }
      });
      let editedPriorityInput = document.querySelector(
        ".edit__input--radio:checked"
      );
      editedPriorityInput == null
        ? obj.priority
        : (obj.priority = editedPriorityInput.value);
      submitChangeBtn.remove();
      displayMod.update();
    });
    taskDiv.appendChild(submitChangeBtn);
  });
  sideBtnDiv.appendChild(editBtn);


  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.classList.add("btn-div__dlt-btn")
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    obj.remove();
    obj.removeTaskFromProjectIdArr();
  });
  
  
  sideBtnDiv.appendChild(dltBtn);
  btnDiv.appendChild(sideBtnDiv);
  taskDiv.appendChild(btnDiv);
  createTable(obj, taskDiv);

  //Date Ascending Display
  if (sort.value == "date-ascending") {
    taskContainer.classList.add("task-container--srt-date")
    let currentDate = new Date();
    currentDate = currentDate.toISOString().split("T")[0]; /* 
    currentDate = currentDate.split("-").reverse().join("-"); */
    let lastWeekDay = endOfWeek(new Date(), { weekStartsOn: 1 });

    if (taskDiv.getAttribute("data-date") == "") {
      //if date was not provided
      let noDateDiv = document.querySelector(".task-container__div--no-date");
      if (!noDateDiv) {
        noDateDiv = document.createElement("div");
        noDateDiv.classList.add("task-container__div--no-date", "task-container__div--srt-date");
        let noDateHeading = document.createElement("h1");
        noDateHeading.textContent = "Undated";
        noDateHeading.classList.add("div-srt-date__h1");
        noDateDiv.appendChild(noDateHeading);
      }
      noDateDiv.appendChild(taskDiv);
      return taskContainer.appendChild(noDateDiv);
    } else if (
      isBefore(
        parseISO(taskDiv.getAttribute("data-date")),
        parseISO(currentDate)
      )
    ) {
      let overdueDiv = document.querySelector(".task-container__div--overdue");
      if (!overdueDiv) {
        overdueDiv = document.createElement("div");
        overdueDiv.classList.add("task-container__div--overdue","task-container__div--srt-date" );
        let overdueHeading = document.createElement("h1");
        overdueHeading.classList.add("div-srt-date__h1");
        overdueHeading.textContent = "Overdue";
        overdueDiv.appendChild(overdueHeading);
      }
      overdueDiv.appendChild(taskDiv);
      return taskContainer.appendChild(overdueDiv);
    } else if (taskDiv.getAttribute("data-date") == currentDate) {
      //if date is today
      let todayDiv = document.querySelector(".task-container__div--today");
      if (!todayDiv) {
        todayDiv = document.createElement("div");
        todayDiv.classList.add("task-container__div--today", "task-container__div--srt-date");
        let todayHeading = document.createElement("h1");
        todayHeading.classList.add("div-srt-date__h1");
        todayHeading.textContent = "Today";
        todayDiv.appendChild(todayHeading);
      }
      todayDiv.appendChild(taskDiv);
      return taskContainer.appendChild(todayDiv);
    } else if (
      isBefore(parseISO(taskDiv.getAttribute("data-date")), lastWeekDay)
    ) {
      let weekDiv = document.querySelector(".task-container__div--week");
      if (!weekDiv) {
        weekDiv = document.createElement("div");
        weekDiv.classList.add("task-container__div--week", "task-container__div--srt-date");
        let weekHeading = document.createElement("h1");
        weekHeading.classList.add("div-srt-date__h1");
        weekHeading.textContent = "This Week";
        weekDiv.appendChild(weekHeading);
      }
      weekDiv.appendChild(taskDiv);
      return taskContainer.appendChild(weekDiv);
    } else if (
      isAfter(parseISO(taskDiv.getAttribute("data-date")), lastWeekDay)
    ) {
      let upcomingDiv = document.querySelector(
        ".task-container__div--upcoming"
      );
      if (!upcomingDiv) {
        upcomingDiv = document.createElement("div");
        upcomingDiv.classList.add("task-container__div--upcoming", "task-container__div--srt-date");
        let upcomingHeading = document.createElement("h1");
        upcomingHeading.textContent = "Upcoming";
        upcomingHeading.classList.add("div-srt-date__h1");
        upcomingDiv.appendChild(upcomingHeading);
      }
      upcomingDiv.appendChild(taskDiv);
      return taskContainer.appendChild(upcomingDiv);
    }
  }

  taskContainer.appendChild(taskDiv);
}

function subRmvTaskContainer() {
  while (taskContainer.firstChild) {
    taskContainer.removeChild(taskContainer.lastChild);
  }
}

export { subscribeTask, taskDisplay, subRmvTaskContainer, subCompleteTask };
