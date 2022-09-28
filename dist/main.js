/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/general/general__js/_alert.js":
/*!*******************************************!*\
  !*** ./src/general/general__js/_alert.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAlert": () => (/* binding */ createAlert)
/* harmony export */ });
function createAlert(text) {
  let alertDiv = document.createElement("div")
  alertDiv.setAttribute("style", "position: fixed; top: 250px; left: 0; right: 0; margin: 0 auto; width: 200px;  border: 2px solid black;  text-align: center; background-color: white " );

  let closeBtn = document.createElement("button"); 
  closeBtn.textContent = "x";
  closeBtn.addEventListener("click", () => {
    alertDiv.remove();
  })
  alertDiv.appendChild(closeBtn);
  let alertText = document.createElement("p");
  alertText.textContent = text;
  alertDiv.appendChild(alertText)
  
  let body = document.querySelector("body");
  body.appendChild(alertDiv);
}


/***/ }),

/***/ "./src/general/general__js/_input.js":
/*!*******************************************!*\
  !*** ./src/general/general__js/_input.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendLabelInput": () => (/* binding */ appendLabelInput),
/* harmony export */   "appendRadioInputs": () => (/* binding */ appendRadioInputs),
/* harmony export */   "createBasicInput": () => (/* binding */ createBasicInput),
/* harmony export */   "createLabel": () => (/* binding */ createLabel),
/* harmony export */   "createRadioInput": () => (/* binding */ createRadioInput),
/* harmony export */   "createTextArea": () => (/* binding */ createTextArea)
/* harmony export */ });
function createBasicInput(className, type, inputName, id) {
  let input = document.createElement("input");
  input.classList.add(className);
  input.setAttribute("type", type);
  input.setAttribute("name", inputName);
  input.setAttribute("id", id);
  return input;
}

function createTextArea(className, inputName, id) {
  let textArea = document.createElement("textarea");
  textArea.classList.add(className);
  textArea.setAttribute("name", inputName);
  textArea.setAttribute("id", id);
  return textArea;
} 

function createLabel(input, text) {
  let label = document.createElement("label");
  label.classList.add("form__label")
  label.textContent = text;
  label.setAttribute("for", input.getAttribute("id"));
  return label;
}

function appendLabelInput(form, label, input) {
  form.appendChild(label);
  form.appendChild(input);
}

function createRadioInput(priorityLevel, className) {
  let radio = createBasicInput(
    className,
    "radio",
    "priority",
    `priority-${priorityLevel}`
  );
  radio.setAttribute("value", priorityLevel);
  return radio;
}

function appendRadioInputs(parent, array) {
  array.forEach((element) => {
    parent.appendChild(element);
    let label = createLabel(element, element.getAttribute("value"));
    parent.appendChild(label);
  });
}



/***/ }),

/***/ "./src/general/general__js/_table.js":
/*!*******************************************!*\
  !*** ./src/general/general__js/_table.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTable": () => (/* binding */ createTable)
/* harmony export */ });
function createTable(obj, parent) {
  let table = document.createElement("table");
  for (const [key, value] of Object.entries(obj)) {
    if (key == "type" || key === "id" || key == "project" || key == "status") {
      continue;
    }
    let row = createRow(key, value);
    table.appendChild(row);
  }
  return parent.appendChild(table);
}

function createRow(key, value) {
  let tableRow = document.createElement("tr");
  let tableHeading = document.createElement("th");
  tableHeading.textContent = key;
  let tableData = document.createElement("td");
  tableData.textContent = value;
  assignClass(key, tableData);
  tableRow.appendChild(tableHeading);
  tableRow.appendChild(tableData);
  return tableRow;
}
function assignClass(key, element) {
  switch (key) {
    case "title":
      element.classList.add("table__td--title", "table__td");
      break;
    case "details":
      element.classList.add("table__td--details", "table__td");
      break;
    case "date":
      element.classList.add("table__td--date", "table__td");
      break;
    case "priority":
      element.classList.add("table__td--priority", "table__td");
      break;
  }
}



/***/ }),

/***/ "./src/general/general__js/pub-sub.js":
/*!********************************************!*\
  !*** ./src/general/general__js/pub-sub.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubSubFactory": () => (/* binding */ pubSubFactory)
/* harmony export */ });


function pubSubFactory() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;

    return {
      unsubscribe() {
        subscribers[eventName].splice(index, 1);
      },
    };
  }
  return {
    subscribe,
    publish,
    
  };
}




/***/ }),

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });

const title = document.createElement("h1");
title.classList.add("header__title");
title.textContent = "Just Do It";

const header = document.querySelector("header");

header.classList.add("header", "body__header");

header.appendChild(title);



/***/ }),

/***/ "./src/main/display/__container/display__container--note.js":
/*!******************************************************************!*\
  !*** ./src/main/display/__container/display__container--note.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteDisplay": () => (/* binding */ noteDisplay),
/* harmony export */   "subscribeNote": () => (/* binding */ subscribeNote)
/* harmony export */ });


let noteDisplay = document.createElement("div");
noteDisplay.classList.add("display__container-note--hidden");

function subscribeNote(obj) {
  let titleNote = document.createElement("h4");
  titleNote.textContent = obj.title;
  noteDisplay.appendChild(titleNote);
  let detailsNote = document.createElement("p");
  detailsNote.textContent = obj.details;
  noteDisplay.appendChild(detailsNote)
}








/***/ }),

/***/ "./src/main/display/__container/display__container--project.js":
/*!*********************************************************************!*\
  !*** ./src/main/display/__container/display__container--project.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDisplay": () => (/* binding */ projectDisplay),
/* harmony export */   "subRmvProjectDisplay": () => (/* binding */ subRmvProjectDisplay),
/* harmony export */   "subRmvTasks": () => (/* binding */ subRmvTasks),
/* harmony export */   "subTaskListItem": () => (/* binding */ subTaskListItem),
/* harmony export */   "subscribeProject": () => (/* binding */ subscribeProject)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _general_general_js_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_table */ "./src/general/general__js/_table.js");






const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden");
 
function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  /* delete button */
  if (obj.id !== 1) { //exemption for the general project
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "x";
    dltBtn.setAttribute("type", "button"); 
    dltBtn.addEventListener("click", () => {
      if (obj.taskIdArr.length > 0) {
        alert("yo it works")
      }
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeByProject(obj);
    });
    projectDiv.appendChild(dltBtn);
  }
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  projectDiv.appendChild(heading);
  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title, "task-list");
  projectDiv.appendChild(taskList);
  projectDisplay.appendChild(projectDiv);
}

function subRmvProjectDisplay() {
  while (projectDisplay.firstChild) {
    projectDisplay.removeChild(projectDisplay.lastChild);
  }
}



/* Removes Tasks Items when */
function subRmvTasks() {
  let taskList = document.querySelectorAll(".task-list")
  taskList.forEach((listItem) => {
    while (listItem.firstChild) {
      listItem.removeChild(listItem.lastChild);
    }
  } )
}

  
function subTaskListItem(obj) {
  let taskList = document.querySelector("." + obj.project);
  taskList.setAttribute("data-id", obj.id);

  /* Finished checkbox */
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)("project-div__done-input", "checkbox", "complete-input", "complete-input");
  
  
  let listItem = document.createElement("li");
  listItem.setAttribute("data-li-id", obj.id)
  completeInput.addEventListener("click", ()=> {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.complete(obj.id);
    (obj.status == "complete") ? _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeTaskFromProjectIdArr(obj): obj.pushId() ;  
    let taskTable = document.querySelectorAll(`li[data-li-id = "${obj.id}"] th,li[data-li-id = "${obj.id}"] td`);
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })
  listItem.appendChild(completeInput);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_2__.createTable)(obj, listItem);
  listItem.addEventListener("click", () => {
    let hiddenRows = document.querySelectorAll(`li[data-li-id = "${obj.id}"] tr:not(:first-child)`);
    hiddenRows.forEach((row) => {
      row.classList.toggle("hidden");
    })
   
  })
  taskList.appendChild(listItem);
}




/***/ }),

/***/ "./src/main/display/__container/display__container--task.js":
/*!******************************************************************!*\
  !*** ./src/main/display/__container/display__container--task.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subCompleteTask": () => (/* binding */ subCompleteTask),
/* harmony export */   "subRmvTaskContainer": () => (/* binding */ subRmvTaskContainer),
/* harmony export */   "subscribeTask": () => (/* binding */ subscribeTask),
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_table */ "./src/general/general__js/_table.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");





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

sort.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.displaySorted(sort.value);
   
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sortDiv.appendChild(sort);
taskDisplay.appendChild(sortDiv);


/* Complete Display button */
const completeDiv = document.createElement("div");
const completeDisplayBtn = document.createElement("button");
completeDisplayBtn.setAttribute("type", "button");
completeDisplayBtn.textContent = "COMPLETE" // change to check svg later;
completeDisplayBtn.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.displayComplete();
  
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
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)("task-div__done-input", "checkbox", "complete-input", "complete-input");
  completeInput.setAttribute("checked", "");
  completeInput.addEventListener("click", ()=> {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.complete(obj.id);
    let taskTable = document.querySelectorAll(`div[data-id="${obj.id}"] th, div[data-id="${obj.id}"] td`);
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })

  taskDiv.appendChild(completeInput);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);
  
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
  let completeInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)("task-div__done-input", "checkbox", "complete-input", "complete-input");
  
  completeInput.addEventListener("click", ()=> {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.complete(obj.id);
    (obj.status == "complete") ? _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeTaskFromProjectIdArr(obj): obj.pushId() ;
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
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.remove(obj.id);
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeTaskFromProjectIdArr(obj);
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
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
          "table__edit-input",
          "text",
          "title",
          "edit-title"
        );
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createTextArea)(
          "table__edit-input",
          "details",
          "edit-details"
        );
        editInput.textContent = obj.details;
      } else if (td.classList.contains("table__td--date")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createBasicInput)(
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
        let low = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("low", "edit-btn__input--radio");
        let medium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("medium", "edit-btn__input--radio");
        let high = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.createRadioInput)("high", "edit-btn__input--radio");
        (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_2__.appendRadioInputs)(editInput, [low, medium, high]);
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
          input.value == "" ? obj.date : (obj.date = input.value);
        }
      });
      let editedPriorityInput = document.querySelector(
        ".edit-btn__input--radio:checked"
      );
      editedPriorityInput == null
        ? obj.priority
        : (obj.priority = editedPriorityInput.value);
      submitChangeBtn.remove();
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.clearDisplay();
    });
    taskDiv.appendChild(submitChangeBtn);
  });

  taskDiv.appendChild(editBtn);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);
  taskContainer.appendChild(taskDiv);
}

function subRmvTaskContainer() {
  while (taskContainer.firstChild) {
    taskContainer.removeChild(taskContainer.lastChild);
  }
}




/***/ }),

/***/ "./src/main/display/__side/display__side.js":
/*!**************************************************!*\
  !*** ./src/main/display/__side/display__side.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createListItem": () => (/* binding */ createListItem),
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });

const nav = document.createElement("nav");
nav.classList.add("display__nav")
const navList = document.createElement("ul");
navList.classList.add("nav__list", "c-nav__list")

function createListItem(text) {
  let listItem = document.createElement("li");
  listItem.classList.add("nav__list-item", "c-nav__list-item")
  let span = document.createElement("span");
  span.textContent = text;
  listItem.appendChild(span);
  navList.appendChild(listItem)
  return listItem;
}

nav.appendChild(navList)







/***/ }),

/***/ "./src/main/display/display.js":
/*!*************************************!*\
  !*** ./src/main/display/display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _side_display_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__side/display__side */ "./src/main/display/__side/display__side.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./__container/display__container--project */ "./src/main/display/__container/display__container--project.js");


/* Display Containers */





const display = document.createElement("div");

const sideNav = document.createElement("div");
sideNav.appendChild(_side_display_side__WEBPACK_IMPORTED_MODULE_0__.nav)

let displayContainer = document.createElement("div");
displayContainer.classList.add("display__container")
let displayContent = document.createElement("div");
displayContent.classList.add("display__content")

displayContent.appendChild(_container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay);
displayContent.appendChild(_container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay);
displayContent.appendChild(_container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay);

/* SHOULD REFORMAT THIS */

const home = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Home");
const project = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Projects");
const note = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Notes");

home.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.taskRemover.clearDisplay();
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.remove("display__container-task--hidden");

});

note.addEventListener("click", () => {
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.remove("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.add("display__container-task--hidden");
});


project.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.taskRemover.clearDisplay();
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_3__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_4__.projectDisplay.classList.remove("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_2__.taskDisplay.classList.add("display__container-task--hidden");
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  })
  
   
});

displayContainer.appendChild(displayContent)
display.appendChild(sideNav);
display.appendChild(displayContainer);




/***/ }),

/***/ "./src/main/main-pub-sub.js":
/*!**********************************!*\
  !*** ./src/main/main-pub-sub.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteConstructor": () => (/* binding */ NoteConstructor),
/* harmony export */   "ProjectConstructor": () => (/* binding */ ProjectConstructor),
/* harmony export */   "TaskConstructor": () => (/* binding */ TaskConstructor),
/* harmony export */   "projectRemover": () => (/* binding */ projectRemover),
/* harmony export */   "taskRemover": () => (/* binding */ taskRemover)
/* harmony export */ });
/* harmony import */ var _general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/general__js/pub-sub */ "./src/general/general__js/pub-sub.js");
/* harmony import */ var _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/__container/display__container--project */ "./src/main/display/__container/display__container--project.js");
/* harmony import */ var _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");






/* OBJECT CLASS */
/* holds an array of all the objects. The objIdGen is used to assign unique ids to each obj */
class ObjectArrClass {
  objArr = [];
  objIdGen = 0;

  get objArr() {
    return this.objArr;
  }

  set objArr(arr) {
    if (!Array.isArray(arr)) {
      return alert("Not an array");
    }
    return (this.objArr = arr);
  }

  push(obj) {
    this.objArr.push(obj);
  }

  remove(index) {
    this.objArr.splice(index, 1);
  }
  /* sortByPriority() {
    this.objArr.sort(function (a, b) {
      return b.countPriority() - a.countPriority();
    });
  } */
}
class TaskObjectArrClass extends ObjectArrClass {
  sortByPriority(value) {
    if (value == "most") {
      this.objArr.sort(function (a, b) {
        return b.countPriority() - a.countPriority();
      });
    } else if (value == "least") {
      this.objArr.sort(function (a, b) {
        return a.countPriority() - b.countPriority();
      });
    }
  }
} 

/* REMOVE CONSTRUCTOR */
/* used to remove objects from the display by matching the data index to the index property in each object */
/* REFACTOR REMOVE CONSTRUCTOR IT EXPOSES PUBSUB and CLASSOBJ  instead of hereditary use a composite model. Create different functions that take pubSub/ObjectArr as an argument
and prototype them!*/

function RemoveConstructor(pubSub, classObj) {
  this.pubSub = pubSub;
  this.classObj = classObj;
} /* 
RemoveConstructor.prototype.removeAll = function() {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
} */


RemoveConstructor.prototype.removeByProject = function (prjRmv) {
  let indexOfMatch = this.classObj.objArr.findIndex((obj) => {
    return obj.project === prjRmv.title ? true : false;
  });
  this.classObj.remove(indexOfMatch);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

RemoveConstructor.prototype.removeTaskFromProjectIdArr = function (obj) { 
  let projectObject = projects.objArr.find(project => project.title == obj.project);
  let indexNum = projectObject.taskIdArr.findIndex(id => id == obj.id );
  projectObject.taskIdArr.splice(indexNum, 1);
  console.log(projectObject);
}

RemoveConstructor.prototype.remove = function (dataId) {
  let indexOfMatch = this.classObj.objArr.findIndex((obj) => {
    return obj.id === dataId ? true : false;
  });

  this.classObj.remove(indexOfMatch);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

RemoveConstructor.prototype.complete = function (dataId) {
  let match = this.classObj.objArr.find((obj) => {
    return obj.id === dataId ? true : false;
  });

  (match.status == "active") ? (match.status = "complete"): (match.status = "active");
  console.log(match);

}

RemoveConstructor.prototype.clearDisplay = function () {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    if (object.status == "complete") {
    } else {
      object.publish(object);
    }
  });
};
RemoveConstructor.prototype.displayComplete = function() {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    if (object.status == "complete") {
      object.publishComplete(object);
    }}
  )
}


RemoveConstructor.prototype.displaySorted = function(value) {
  tasks.sortByPriority(value);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

let projects = new ObjectArrClass();

let pubSubProjects = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let projectRemover = new RemoveConstructor(pubSubProjects, projects);

let pubSubObjectConstructors = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();

/* WEIRD OBJ make this into pubSub ? */
function subPublishRequest(obj) {
  let pubSub;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
  } else if (obj.type == "task") {
    pubSub = pubSubTasks;
  }
  pubSub.publish("display", obj.obj);
}

function subDisplayAllRequest(obj) {
  let pubSub;
  let objArr;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
    objArr = projects;
  } else if (obj.type == "task") {
    pubSub = pubSubTasks;
    objArr = tasks;
  }
  pubSub.publish("clear", true);
  objArr.push(obj.obj);
  console.log(objArr.objArr);
  objArr.objArr.forEach((object) => {
    if (object.status == "complete") {
    } else {
      object.publish(object);
    }
    
  });
}

pubSubObjectConstructors.subscribe("publish", subPublishRequest);

pubSubObjectConstructors.subscribe("displayAll", subDisplayAllRequest);

/* Object Constructor*/
function ObjectConstructor(/* pubSub, objArr */) {
  /*   this.pubSub = pubSub;
  this.objArr = objArr; */
}
/* 
ObjectConstructor.prototype.getId = function() {this.objArr.objIdGen += 1};
 */
ObjectConstructor.prototype.publish = function (obj) {
  /* this.pubSub.publish("display", obj); */
  pubSubObjectConstructors.publish("publish", { type: this.type, obj });
};

ObjectConstructor.prototype.displayAll = function (obj) {
  pubSubObjectConstructors.publish("displayAll", { type: this.type, obj });
  /*  this.pubSub.publish("clear", true);
  this.objArr.push(obj);
  this.objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
  }); */
};
ObjectConstructor.prototype.publishComplete = function(obj) {
  pubSubTasks.publish("displayComplete", obj);
}

function ProjectConstructor(title) {
  this.title = title; /* 
  this.pubSub = pubSubProjects;
  this.objArr = projects; */ /* 
  this.id = this.objArr.objIdGen += 1; */
  this.id = projects.objIdGen += 1;
  this.type = "project";
  this.taskIdArr = [];
}

ProjectConstructor.prototype = Object.create(ObjectConstructor.prototype);

/* Project Constructor */
/* function ProjectConstructor(title) {
  this.title = title;
  this.id = projects.objIdGen += 1;
}

ProjectConstructor.prototype.publish = function (obj) {
  pubSubProjects.publish("project", obj);
};

ProjectConstructor.prototype.displayAll = function (obj) {
  pubSubProjects.publish("clear", true);
  projects.push(obj);
  projects.objArr.forEach((object) => {
    object.publish(object);
  });
}; */

/* PUBSUB MODULE FORMS and DISPLAY*/
let pubSubForms = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();

/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
}
NoteConstructor.prototype.publish = function () {
  pubSubForms.publish("note", { title: this.title, details: this.details });
};

/* Task Constructor */

let tasks = new TaskObjectArrClass();
let pubSubTasks = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let taskRemover = new RemoveConstructor(pubSubTasks, tasks);

function TaskConstructor(title, details, date, priority, project) {
  this.title = title;
  this.details = details;
  this.date = date;
  this.priority = priority;
  this.project = project;
  this.type = "task";
  this.status = "active";
  this.id = tasks.objIdGen += 1;
}

TaskConstructor.prototype = Object.create(ObjectConstructor.prototype);

TaskConstructor.prototype.pushId = function() {
  let projectObject = projects.objArr.find(project => project.title == this.project)
  projectObject.taskIdArr.push(this.id);
  console.log(projectObject)
}


  /* 
  projectObject.taskIdArr.push(this.id); */ //THE ISSUE IS HERE


TaskConstructor.prototype.countPriority = function () {
  switch (this.priority) {
    case "low":
      return 1;
      break;
    case "medium":
      return 2;
      break;
    case "high":
      return 3;
      break;
    default:
      return 0;
  }
};

/* 
function TaskConstructor(title, details, date, priority, project) {
  this.title = title,
  this.details = details,
  this.date = date,
  this.priority = priority,
  this.project = project,
}

TaskConstructor.prototype.publish = function () {
  let obj = new TaskConstructor(
    this.title,
    this.details,
    this.date,
    this.priority,
    this.project
  );
  pubSubForms.publish("task", obj);
}; */

/* Subscribers */
pubSubProjects.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeProject);
/* 
pubSubProjects.subscribe("display", subProjectDisplay); */
pubSubProjects.subscribe("display", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subSelectProjectInput);
pubSubForms.subscribe("note", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subscribeNote);
pubSubForms.subscribe("task", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubForms.subscribe("task", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);

pubSubTasks.subscribe("display", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubTasks.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);
pubSubTasks.subscribe("clear", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subRmvTaskContainer);
pubSubTasks.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subRmvTasks);
pubSubTasks.subscribe("displayComplete", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subCompleteTask); //added this trying to make the complete
/* 
pubSubTasks.subscribe("clear",subRmvProjectDisplay) */

/* 
pubSubTasks.subscribe("clear", subRmvProjectDisplay) /* ?? */

pubSubProjects.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subRmvProjectDisplay);
pubSubProjects.subscribe("clear", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subClearSelectOptions);




/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainDiv": () => (/* binding */ mainDiv)
/* harmony export */ });
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal */ "./src/main/modal/modal.js");
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display */ "./src/main/display/display.js");



const mainDiv = document.querySelector("main");
mainDiv.classList.add("main");

/* display modal button */
const displayModal = document.createElement("button");
displayModal.setAttribute("type", "button");
displayModal.textContent = "+";/* 
displayModal.setAttribute("style", `background-image:url("../general/images/svg-plus.svg")`) */
displayModal.classList.add("main__display-btn","c-main__display-btn" );
displayModal.addEventListener("click", () => {
  _modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal.classList.remove("main__modal--hidden")
})
mainDiv.appendChild(_display_display__WEBPACK_IMPORTED_MODULE_1__.display);
mainDiv.appendChild(displayModal);
mainDiv.appendChild(_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modal);




/***/ }),

/***/ "./src/main/modal/__form/modal__form--note.js":
/*!****************************************************!*\
  !*** ./src/main/modal/__form/modal__form--note.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteForm": () => (/* binding */ noteForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");



const noteForm = document.createElement("form");

/* inputs */
const noteTitle = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)(
  "form__input",
  "text",
  "note-title",
  "note-title"
);
const noteTitleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(noteTitle, "Title:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteTitleLabel, noteTitle);

const note = document.createElement("textarea");
note.setAttribute("id", "note");
note.setAttribute("name", "note");

const noteLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(note, "Details");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteLabel, note);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset"); /* maybe clear instead*/
submit.textContent = "Create Note";
noteForm.appendChild(submit);

/* PUBSUB */

function publishNote() {
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.NoteConstructor(noteTitle.value, note.value);
  obj.publish();
}

submit.addEventListener("click", publishNote);




/***/ }),

/***/ "./src/main/modal/__form/modal__form--project.js":
/*!*******************************************************!*\
  !*** ./src/main/modal/__form/modal__form--project.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectForm": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");



const projectForm = document.createElement("form");

/* inputs */
const project = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)(
  "form__input",
  "text",
  "project-title",
  "project"
);
const label = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(project, "Title:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(projectForm, label, project);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset");
submit.textContent = "Create Project";
projectForm.appendChild(submit);

function displayProjects() {
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor(project.value);
  obj.displayAll(obj);
}
let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor("general");
obj.displayAll(obj);

submit.addEventListener("click", displayProjects);




/***/ }),

/***/ "./src/main/modal/__form/modal__form--task.js":
/*!****************************************************!*\
  !*** ./src/main/modal/__form/modal__form--task.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subClearSelectOptions": () => (/* binding */ subClearSelectOptions),
/* harmony export */   "subSelectProjectInput": () => (/* binding */ subSelectProjectInput),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");
/* TO DO FORM */




let taskForm = document.createElement("form");
taskForm.classList.add("form");

let title = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("form__input", "text", "title", "title");
title.setAttribute("placeholder", "Title: Groceries");
title.classList.add("form__input--text");
let titleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(title, "Title");
titleLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, titleLabel, title);


let textArea = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createTextArea)("form__input--textArea", "textArea", "textArea")
textArea.classList.add( /* are these necessary?? */
  "form__input--text",
  "form-input"
);
textArea.setAttribute("placeholder", "2 potatoes");

let textAreaLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, textAreaLabel, textArea);

let div = document.createElement("div");
let date = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("form__input", "date", "date", "date");
let dateLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(date, "Due date:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(div, dateLabel, date);
taskForm.appendChild(div);

/* SELECT PROJECT */
const selectProject = document.createElement("select");
selectProject.setAttribute("id", "select-project");
selectProject.setAttribute("name", "project");

/* clears the select options at the same time as the project display is cleared */
function subClearSelectOptions() {
  while (selectProject.firstChild) {
    selectProject.removeChild(selectProject.lastChild);
  }
}

/* updates the select options when new projects are added */
function subSelectProjectInput(obj) {
  const option = document.createElement("option");
  option.setAttribute("value", obj.title);
  option.textContent = obj.title;
  selectProject.appendChild(option);
}

const selectLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(selectProject, "Project");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, selectLabel, selectProject);

/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);


let priorityLow = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("low", "form__input");
let priorityMedium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("medium", "form__input");
let priorityHigh = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createRadioInput)("high", "form__input");




(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendRadioInputs)(fieldset, [priorityLow, priorityMedium, priorityHigh]);

taskForm.appendChild(fieldset);

let submit = document.createElement("button");

submit.textContent = "Create Task";
submit.setAttribute("type", "button");
taskForm.appendChild(submit);

function displayTasks() {
  submit.setAttribute("type", "button");
  let radio = document.querySelector("input:checked");
  if (!title.value) {
    return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please create a title for your task!");
  }
  if (!radio) {
   return (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please select a priority for your task!");
  }
  submit.setAttribute("type", "reset");
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.TaskConstructor(
    title.value,
    textArea.value,
    date.value,
    radio.value,
    selectProject.value
  );
  obj.pushId();
  obj.displayAll(obj);
}

submit.addEventListener("click", displayTasks);
/* 
submit.addEventListener("click", () => {
  let radio = document.querySelector("input:checked");
  let obj = new TaskConstructor(title.value, textArea.value, date.value, radio.value, selectProject.value);
  obj.publish();
})
 */



/***/ }),

/***/ "./src/main/modal/__side/modal__side.js":
/*!**********************************************!*\
  !*** ./src/main/modal/__side/modal__side.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noteButton": () => (/* binding */ noteButton),
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "sideDiv": () => (/* binding */ sideDiv),
/* harmony export */   "taskButton": () => (/* binding */ taskButton)
/* harmony export */ });
let sideDiv = document.createElement("div");
sideDiv.classList.add("modal__side");

let taskButton = document.createElement("button");
taskButton.setAttribute("type", "button");
taskButton.textContent = 'TASK';

let projectButton = document.createElement("button");
projectButton.setAttribute("type", "button");
projectButton.textContent = "PROJECT";

let noteButton = document.createElement("button");
noteButton.setAttribute("type", "button");
noteButton.textContent = "NOTE";

sideDiv.appendChild(taskButton)

sideDiv.appendChild(projectButton)

sideDiv.appendChild(noteButton)

 

/***/ }),

/***/ "./src/main/modal/modal.js":
/*!*********************************!*\
  !*** ./src/main/modal/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var _side_modal_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__side/modal__side */ "./src/main/modal/__side/modal__side.js");
/* harmony import */ var _form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");
/* harmony import */ var _form_modal_form_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__form/modal__form--project */ "./src/main/modal/__form/modal__form--project.js");
/* harmony import */ var _form_modal_form_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__form/modal__form--note */ "./src/main/modal/__form/modal__form--note.js");

 
 


let modal = document.createElement("div")
modal.classList.add("modal", "main__modal");

let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.setAttribute("style", "position:absolute") /* has to be moved to scss!!! */
closeBtn.textContent = "x";
modal.appendChild(closeBtn);

function hideModal() {
  removeForm();
  formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
  modal.classList.add("main__modal--hidden");
} 
closeBtn.addEventListener("click", hideModal)

/* side */
modal.appendChild(_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.sideDiv);

/* form on initial load */
let formContainer = document.createElement("div");
formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
formContainer.classList.add("modal__form")
modal.appendChild(formContainer);

/* remove form func */
function removeForm() {
  while (formContainer.firstChild) {
    formContainer.firstChild.reset()
    formContainer.removeChild(formContainer.firstChild)
  }
}

/* side button event listeners */
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.taskButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(_form_modal_form_task__WEBPACK_IMPORTED_MODULE_1__.taskForm);
})
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.projectButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(_form_modal_form_project__WEBPACK_IMPORTED_MODULE_2__.projectForm);
})
_side_modal_side__WEBPACK_IMPORTED_MODULE_0__.noteButton.addEventListener("click", () =>{
  removeForm();
  formContainer.appendChild(_form_modal_form_note__WEBPACK_IMPORTED_MODULE_3__.noteForm);
})


 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/header/header.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* import "./style.scss"; */

 


let body = document.querySelector("body");

body.appendChild(_header_header__WEBPACK_IMPORTED_MODULE_0__.header);

body.appendChild(_main_main__WEBPACK_IMPORTED_MODULE_1__.mainDiv);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQVE7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHFEQUFZOztBQUU5QjtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFRO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBZ0M7QUFDaEM7QUFDQSw0QkFBNEIsMkRBQVE7QUFDcEMsQ0FBQztBQUNELDRFQUFtQztBQUNuQztBQUNBLDRCQUE0QixpRUFBVztBQUN2QyxDQUFDO0FBQ0QseUVBQWdDO0FBQ2hDO0FBQ0EsNEJBQTRCLDJEQUFRO0FBQ3BDLENBQUM7OztBQUdhOzs7Ozs7VUNyRGQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSwwQkFBMEI7QUFDWTtBQUNIOzs7QUFHbkM7O0FBRUEsaUJBQWlCLGtEQUFNOztBQUV2QixpQkFBaUIsK0NBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19zaWRlL2Rpc3BsYXlfX3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLXB1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19zaWRlL21vZGFsX19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBbGVydCh0ZXh0KSB7XG4gIGxldCBhbGVydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgYWxlcnREaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjogZml4ZWQ7IHRvcDogMjUwcHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDIwMHB4OyAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlIFwiICk7XG5cbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWxlcnREaXYucmVtb3ZlKCk7XG4gIH0pXG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgbGV0IGFsZXJ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhbGVydFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBhbGVydERpdi5hcHBlbmRDaGlsZChhbGVydFRleHQpXG4gIFxuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGFsZXJ0RGl2KTtcbn1cbmV4cG9ydCB7Y3JlYXRlQWxlcnR9IiwiZnVuY3Rpb24gY3JlYXRlQmFzaWNJbnB1dChjbGFzc05hbWUsIHR5cGUsIGlucHV0TmFtZSwgaWQpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKGNsYXNzTmFtZSwgaW5wdXROYW1lLCBpZCkge1xuICBsZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn0gXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGlucHV0LCB0ZXh0KSB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsXCIpXG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0LmdldEF0dHJpYnV0ZShcImlkXCIpKTtcbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRMYWJlbElucHV0KGZvcm0sIGxhYmVsLCBpbnB1dCkge1xuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhZGlvSW5wdXQocHJpb3JpdHlMZXZlbCwgY2xhc3NOYW1lKSB7XG4gIGxldCByYWRpbyA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgY2xhc3NOYW1lLFxuICAgIFwicmFkaW9cIixcbiAgICBcInByaW9yaXR5XCIsXG4gICAgYHByaW9yaXR5LSR7cHJpb3JpdHlMZXZlbH1gXG4gICk7XG4gIHJhZGlvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5TGV2ZWwpO1xuICByZXR1cm4gcmFkaW87XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJhZGlvSW5wdXRzKHBhcmVudCwgYXJyYXkpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBsZXQgbGFiZWwgPSBjcmVhdGVMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBjcmVhdGVMYWJlbCwgYXBwZW5kTGFiZWxJbnB1dCwgY3JlYXRlUmFkaW9JbnB1dCwgYXBwZW5kUmFkaW9JbnB1dHMsIGNyZWF0ZVRleHRBcmVhfSIsImZ1bmN0aW9uIGNyZWF0ZVRhYmxlKG9iaiwgcGFyZW50KSB7XG4gIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGlmIChrZXkgPT0gXCJ0eXBlXCIgfHwga2V5ID09PSBcImlkXCIgfHwga2V5ID09IFwicHJvamVjdFwiIHx8IGtleSA9PSBcInN0YXR1c1wiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHJvdyA9IGNyZWF0ZVJvdyhrZXksIHZhbHVlKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3coa2V5LCB2YWx1ZSkge1xuICBsZXQgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGxldCB0YWJsZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIHRhYmxlSGVhZGluZy50ZXh0Q29udGVudCA9IGtleTtcbiAgbGV0IHRhYmxlRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIGFzc2lnbkNsYXNzKGtleSwgdGFibGVEYXRhKTtcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVIZWFkaW5nKTtcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVEYXRhKTtcbiAgcmV0dXJuIHRhYmxlUm93O1xufVxuZnVuY3Rpb24gYXNzaWduQ2xhc3Moa2V5LCBlbGVtZW50KSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBcInRpdGxlXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLXRpdGxlXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRldGFpbHNcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tZGV0YWlsc1wiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLWRhdGVcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicHJpb3JpdHlcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tcHJpb3JpdHlcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVUYWJsZSwgfTsiLCJcblxuZnVuY3Rpb24gcHViU3ViRmFjdG9yeSgpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBwdWJsaXNoLFxuICAgIFxuICB9O1xufVxuXG5leHBvcnQge3B1YlN1YkZhY3RvcnkgfTtcbiIsIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aXRsZVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0XCI7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIsIFwiYm9keV9faGVhZGVyXCIpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5leHBvcnQgeyBoZWFkZXIgfSA7IiwiXG5cbmxldCBub3RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlTm90ZShvYmopIHtcbiAgbGV0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGVOb3RlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZU5vdGUpO1xuICBsZXQgZGV0YWlsc05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlsc05vdGUudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsc05vdGUpXG59XG5cblxuXG5cblxuXG5leHBvcnQge3N1YnNjcmliZU5vdGUsIG5vdGVEaXNwbGF5fSIsImltcG9ydCB7IHByb2plY3RSZW1vdmVyLCB0YXNrUmVtb3ZlciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7IGNyZWF0ZUJhc2ljSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IGNyZWF0ZVRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX3RhYmxlXCI7XG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiBcbmZ1bmN0aW9uIHN1YnNjcmliZVByb2plY3Qob2JqKSB7XG4gIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIC8qIGRlbGV0ZSBidXR0b24gKi9cbiAgaWYgKG9iai5pZCAhPT0gMSkgeyAvL2V4ZW1wdGlvbiBmb3IgdGhlIGdlbmVyYWwgcHJvamVjdFxuICAgIGxldCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpOyBcbiAgICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChvYmoudGFza0lkQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWxlcnQoXCJ5byBpdCB3b3Jrc1wiKVxuICAgICAgfVxuICAgICAgcHJvamVjdFJlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gICAgICB0YXNrUmVtb3Zlci5yZW1vdmVCeVByb2plY3Qob2JqKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG4gIH1cbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChvYmoudGl0bGUsIFwidGFzay1saXN0XCIpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlByb2plY3REaXNwbGF5KCkge1xuICB3aGlsZSAocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuXG5cbi8qIFJlbW92ZXMgVGFza3MgSXRlbXMgd2hlbiAqL1xuZnVuY3Rpb24gc3ViUm12VGFza3MoKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpXG4gIHRhc2tMaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgd2hpbGUgKGxpc3RJdGVtLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RJdGVtLnJlbW92ZUNoaWxkKGxpc3RJdGVtLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9IClcbn1cblxuICBcbmZ1bmN0aW9uIHN1YlRhc2tMaXN0SXRlbShvYmopIHtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9iai5wcm9qZWN0KTtcbiAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuXG4gIC8qIEZpbmlzaGVkIGNoZWNrYm94ICovXG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInByb2plY3QtZGl2X19kb25lLWlucHV0XCIsIFwiY2hlY2tib3hcIiwgXCJjb21wbGV0ZS1pbnB1dFwiLCBcImNvbXBsZXRlLWlucHV0XCIpO1xuICBcbiAgXG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1saS1pZFwiLCBvYmouaWQpXG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIHRhc2tSZW1vdmVyLmNvbXBsZXRlKG9iai5pZCk7XG4gICAgKG9iai5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IHRhc2tSZW1vdmVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKG9iaik6IG9iai5wdXNoSWQoKSA7ICBcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgbGlbZGF0YS1saS1pZCA9IFwiJHtvYmouaWR9XCJdIHRoLGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KVxuICB9KVxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcbiAgY3JlYXRlVGFibGUob2JqLCBsaXN0SXRlbSk7XG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGhpZGRlblJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBsaVtkYXRhLWxpLWlkID0gXCIke29iai5pZH1cIl0gdHI6bm90KDpmaXJzdC1jaGlsZClgKTtcbiAgICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSlcbiAgIFxuICB9KVxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmV4cG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHByb2plY3REaXNwbGF5LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrc1xuICAvKiBnZW5lcmF0ZVByb2plY3REaXNwbGF5ICovXG59O1xuIiwiaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuaW1wb3J0IHsgcHJvamVjdFJlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge1xuICBjcmVhdGVSYWRpb0lucHV0LFxuICBhcHBlbmRSYWRpb0lucHV0cyxcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuXG5jb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcblxuLyogU09SVCBCVVRUT04gKi9cbi8qIE5FRUQgVE8gQUREIEEgU09SVCBCWSBEQVRFIE9QVElPTiAqL1xubGV0IHNvcnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IHNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xubGV0IHNvcnRQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwiXCIpXG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIgXCIpO1xuc29ydFBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJTb3J0XCI7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQbGFjZWhvbGRlcik7XG5cbmxldCBzb3J0UHJpb3JpdHlEZXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuc29ydFByaW9yaXR5RGVzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiTW9zdCBJbXBvcnRhbnRcIjtcbnNvcnRQcmlvcml0eURlc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtb3N0XCIpO1xuXG5sZXQgc29ydFByaW9yaXR5QXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuc29ydFByaW9yaXR5QXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJMZWFzdCBJbXBvcnRhbnRcIjtcbnNvcnRQcmlvcml0eUFzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxlYXN0XCIpXG5cbnNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuZGlzcGxheVNvcnRlZChzb3J0LnZhbHVlKTtcbiAgIFxufSk7XG5cbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5RGVzY2VuZGluZyk7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eUFzY2VuZGluZyk7XG5zb3J0RGl2LmFwcGVuZENoaWxkKHNvcnQpO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc29ydERpdik7XG5cblxuLyogQ29tcGxldGUgRGlzcGxheSBidXR0b24gKi9cbmNvbnN0IGNvbXBsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGNvbXBsZXRlRGlzcGxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb21wbGV0ZURpc3BsYXlCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNvbXBsZXRlRGlzcGxheUJ0bi50ZXh0Q29udGVudCA9IFwiQ09NUExFVEVcIiAvLyBjaGFuZ2UgdG8gY2hlY2sgc3ZnIGxhdGVyO1xuY29tcGxldGVEaXNwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmRpc3BsYXlDb21wbGV0ZSgpO1xuICBcbiAgLyogXG4gIHRhc2tSZW1vdmVyLmRpc3BsYXlDb21wbGV0ZSgpO1xuICBsZXQgY2hlY2tlZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWRpdl9fZG9uZS1pbnB1dFwiKTtcbiAgY2hlY2tlZElucHV0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRoLCBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b29cIik7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgICAgfSlcbiAgICB9KVxuICB9KVxuICBsZXQgdGFibGVSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRyXCIpO1xuICB0YWJsZVJvd3MuZm9yRWFjaCgodHIpID0+IHtcbiAgICB0ci5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gIH0pICovXG59KVxuY29tcGxldGVEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXNwbGF5QnRuKTtcbnRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGNvbXBsZXRlRGl2KTtcblxuXG5cblxuXG4vKiBUQVNLIENPTlRBSU5FUiAqL1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuLyogTWlnaHQgaGF2ZSB0byBtYWtlIGEgc2VwYXJhdGUgc3Vic2NyaWJlIGZvciBjb21wbGV0ZSB0YXNrcyAqL1xuXG5mdW5jdGlvbiBwcmlvcml0eVN3aXRjaChlbGVtZW50LCBvYmopIHtcbiAgc3dpdGNoKG9iai5wcmlvcml0eSkge1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1oaWdoXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICB9XG59IFxuZnVuY3Rpb24gc3ViQ29tcGxldGVUYXNrKG9iaikge1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0YXNrLWRpdl9fZG9uZS1pbnB1dFwiLCBcImNoZWNrYm94XCIsIFwiY29tcGxldGUtaW5wdXRcIiwgXCJjb21wbGV0ZS1pbnB1dFwiKTtcbiAgY29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICBjb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICB0YXNrUmVtb3Zlci5jb21wbGV0ZShvYmouaWQpO1xuICAgIGxldCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0aCwgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGRgKTtcbiAgICB0YXNrVGFibGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG4gICAgfSlcbiAgfSlcblxuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xuICBjcmVhdGVUYWJsZShvYmosIHRhc2tEaXYpO1xuICBcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgbGV0IGFsbFJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGgsIHRkXCIpO1xuICBhbGxSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gIH0pXG59XG5cblxuZnVuY3Rpb24gc3Vic2NyaWJlVGFzayhvYmopIHtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgcHJpb3JpdHlTd2l0Y2godGFza0Rpdiwgb2JqKVxuICAvKiBDb21wbGV0ZSBjaGVja2JveCAqL1xuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0YXNrLWRpdl9fZG9uZS1pbnB1dFwiLCBcImNoZWNrYm94XCIsIFwiY29tcGxldGUtaW5wdXRcIiwgXCJjb21wbGV0ZS1pbnB1dFwiKTtcbiAgXG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIHRhc2tSZW1vdmVyLmNvbXBsZXRlKG9iai5pZCk7XG4gICAgKG9iai5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IHRhc2tSZW1vdmVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKG9iaik6IG9iai5wdXNoSWQoKSA7XG4gICAgbGV0IHRhc2tUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRoLCBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgIFxuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KVxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSlcblxuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xuXG4gIC8qIERFTEVURSBCVVRUT04gKi9cbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZGx0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cob2JqKVxuICAgIHRhc2tSZW1vdmVyLnJlbW92ZShvYmouaWQpO1xuICAgIHRhc2tSZW1vdmVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKG9iaik7XG4gIH0pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG5cbiAgLypFRElUIEJVVFRPTiovXG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgLypIYXZlIHRvIGNyZWF0ZSBsYWJlbHMgYW5kIGhpZGUgdGhlbSBmb3IgYWNjZXNzaWJpbGl0eSA/PyovXG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtkYXRhLWlkPVwiJHtvYmouaWR9XCJdIC50YWJsZV9fdGRgXG4gICAgKTtcbiAgICAvL2xldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRhYmxlYCkgLy9EbyBJIHJlYWxseSBuZWVkIHRoaXM/XG4gICAgdGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24gKHRkKSB7XG4gICAgICBsZXQgZWRpdElucHV0O1xuXG4gICAgICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS10aXRsZVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgICAgXCJlZGl0LXRpdGxlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai50aXRsZSk7XG4gICAgICB9IGVsc2UgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX190ZC0tZGV0YWlsc1wiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVUZXh0QXJlYShcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkZXRhaWxzXCIsXG4gICAgICAgICAgXCJlZGl0LWRldGFpbHNcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kYXRlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwiZWRpdC1kYXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai5kYXRlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1wcmlvcml0eVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgICAgIGVkaXRJbnB1dC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBsZXQgbG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiLCBcImVkaXQtYnRuX19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGxldCBtZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgbGV0IGhpZ2ggPSBjcmVhdGVSYWRpb0lucHV0KFwiaGlnaFwiLCBcImVkaXQtYnRuX19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGFwcGVuZFJhZGlvSW5wdXRzKGVkaXRJbnB1dCwgW2xvdywgbWVkaXVtLCBoaWdoXSk7XG4gICAgICB9XG5cbiAgICAgIHRkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRJbnB1dCwgdGQpO1xuICAgIH0pO1xuICAgIC8qIFNVQk1JVCBDSEFOR0VTIEJUTiAqL1xuICAgIGxldCBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1lZGl0LWJ0blwiKTtcbiAgICBpZiAoIXN1Ym1pdENoYW5nZUJ0bikge1xuICAgICAgc3VibWl0Q2hhbmdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1lZGl0LWJ0blwiKTtcbiAgICB9XG4gICAgXG4gICAgc3VibWl0Q2hhbmdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgZWRpdGVkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fZWRpdC1pbnB1dFwiKTtcbiAgICAgIGVkaXRlZElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICBpbnB1dC50aXRsZSA9PSBcIlwiID8gb2JqLnRpdGxlIDogKG9iai50aXRsZSA9IGlucHV0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGV0YWlsc1wiKSB7XG4gICAgICAgICAgb2JqLmRldGFpbHMgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPT0gXCJcIiA/IG9iai5kYXRlIDogKG9iai5kYXRlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBlZGl0ZWRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZWRpdC1idG5fX2lucHV0LS1yYWRpbzpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBlZGl0ZWRQcmlvcml0eUlucHV0ID09IG51bGxcbiAgICAgICAgPyBvYmoucHJpb3JpdHlcbiAgICAgICAgOiAob2JqLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4ucmVtb3ZlKCk7XG4gICAgICB0YXNrUmVtb3Zlci5jbGVhckRpc3BsYXkoKTtcbiAgICB9KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHN1Ym1pdENoYW5nZUJ0bik7XG4gIH0pO1xuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgdGFza0Rpdik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlRhc2tDb250YWluZXIoKSB7XG4gIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdWJzY3JpYmVUYXNrLCB0YXNrRGlzcGxheSwgc3ViUm12VGFza0NvbnRhaW5lciwgc3ViQ29tcGxldGVUYXNrIH07XG4iLCJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcImMtbmF2X19saXN0XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRleHQpIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW1cIiwgXCJjLW5hdl9fbGlzdC1pdGVtXCIpXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuZXhwb3J0IHtuYXYsIGNyZWF0ZUxpc3RJdGVtfVxuIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvZGlzcGxheV9fc2lkZVwiO1xuaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vbWFpbi1wdWItc3ViXCI7XG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXl9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdFwiO1xuXG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVOYXYuYXBwZW5kQ2hpbGQoc2lkZS5uYXYpXG5cbmxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lclwiKVxubGV0IGRpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250ZW50XCIpXG5cbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKG5vdGVEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuLyogU0hPVUxEIFJFRk9STUFUIFRISVMgKi9cblxuY29uc3QgaG9tZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJIb21lXCIpO1xuY29uc3QgcHJvamVjdCA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJQcm9qZWN0c1wiKTtcbmNvbnN0IG5vdGUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiTm90ZXNcIik7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuY2xlYXJEaXNwbGF5KCk7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG5cbn0pO1xuXG5ub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmNsZWFyRGlzcGxheSgpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuICBsZXQgaGlkZGVuUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0IHRyOm5vdCg6Zmlyc3QtY2hpbGQpXCIpO1xuICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KVxuICBcbiAgIFxufSk7XG5cbmRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQpXG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgcHViU3ViRmFjdG9yeSB9IGZyb20gXCIuLi9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWJcIjtcbmltcG9ydCB7IHN1YnNjcmliZU5vdGUgfSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlUHJvamVjdCxcbiAgc3ViVGFza0xpc3RJdGVtLFxuICBzdWJSbXZQcm9qZWN0RGlzcGxheSxcbiAgc3ViUm12VGFza3MsXG59IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0XCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVUYXNrLFxuICBzdWJSbXZUYXNrQ29udGFpbmVyLFxuICBzdWJDb21wbGV0ZVRhc2ssXG59IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQge1xuICBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsXG4gIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyxcbn0gZnJvbSBcIi4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrXCI7XG5cbi8qIE9CSkVDVCBDTEFTUyAqL1xuLyogaG9sZHMgYW4gYXJyYXkgb2YgYWxsIHRoZSBvYmplY3RzLiBUaGUgb2JqSWRHZW4gaXMgdXNlZCB0byBhc3NpZ24gdW5pcXVlIGlkcyB0byBlYWNoIG9iaiAqL1xuY2xhc3MgT2JqZWN0QXJyQ2xhc3Mge1xuICBvYmpBcnIgPSBbXTtcbiAgb2JqSWRHZW4gPSAwO1xuXG4gIGdldCBvYmpBcnIoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqQXJyO1xuICB9XG5cbiAgc2V0IG9iakFycihhcnIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwiTm90IGFuIGFycmF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMub2JqQXJyID0gYXJyKTtcbiAgfVxuXG4gIHB1c2gob2JqKSB7XG4gICAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5vYmpBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvKiBzb3J0QnlQcmlvcml0eSgpIHtcbiAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYi5jb3VudFByaW9yaXR5KCkgLSBhLmNvdW50UHJpb3JpdHkoKTtcbiAgICB9KTtcbiAgfSAqL1xufVxuY2xhc3MgVGFza09iamVjdEFyckNsYXNzIGV4dGVuZHMgT2JqZWN0QXJyQ2xhc3Mge1xuICBzb3J0QnlQcmlvcml0eSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBcIm1vc3RcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5jb3VudFByaW9yaXR5KCkgLSBhLmNvdW50UHJpb3JpdHkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gXCJsZWFzdFwiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmNvdW50UHJpb3JpdHkoKSAtIGIuY291bnRQcmlvcml0eSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59IFxuXG4vKiBSRU1PVkUgQ09OU1RSVUNUT1IgKi9cbi8qIHVzZWQgdG8gcmVtb3ZlIG9iamVjdHMgZnJvbSB0aGUgZGlzcGxheSBieSBtYXRjaGluZyB0aGUgZGF0YSBpbmRleCB0byB0aGUgaW5kZXggcHJvcGVydHkgaW4gZWFjaCBvYmplY3QgKi9cbi8qIFJFRkFDVE9SIFJFTU9WRSBDT05TVFJVQ1RPUiBJVCBFWFBPU0VTIFBVQlNVQiBhbmQgQ0xBU1NPQkogIGluc3RlYWQgb2YgaGVyZWRpdGFyeSB1c2UgYSBjb21wb3NpdGUgbW9kZWwuIENyZWF0ZSBkaWZmZXJlbnQgZnVuY3Rpb25zIHRoYXQgdGFrZSBwdWJTdWIvT2JqZWN0QXJyIGFzIGFuIGFyZ3VtZW50XG5hbmQgcHJvdG90eXBlIHRoZW0hKi9cblxuZnVuY3Rpb24gUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViLCBjbGFzc09iaikge1xuICB0aGlzLnB1YlN1YiA9IHB1YlN1YjtcbiAgdGhpcy5jbGFzc09iaiA9IGNsYXNzT2JqO1xufSAvKiBcblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn0gKi9cblxuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlQnlQcm9qZWN0ID0gZnVuY3Rpb24gKHByalJtdikge1xuICBsZXQgaW5kZXhPZk1hdGNoID0gdGhpcy5jbGFzc09iai5vYmpBcnIuZmluZEluZGV4KChvYmopID0+IHtcbiAgICByZXR1cm4gb2JqLnByb2plY3QgPT09IHByalJtdi50aXRsZSA/IHRydWUgOiBmYWxzZTtcbiAgfSk7XG4gIHRoaXMuY2xhc3NPYmoucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIgPSBmdW5jdGlvbiAob2JqKSB7IFxuICBsZXQgcHJvamVjdE9iamVjdCA9IHByb2plY3RzLm9iakFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSBvYmoucHJvamVjdCk7XG4gIGxldCBpbmRleE51bSA9IHByb2plY3RPYmplY3QudGFza0lkQXJyLmZpbmRJbmRleChpZCA9PiBpZCA9PSBvYmouaWQgKTtcbiAgcHJvamVjdE9iamVjdC50YXNrSWRBcnIuc3BsaWNlKGluZGV4TnVtLCAxKTtcbiAgY29uc29sZS5sb2cocHJvamVjdE9iamVjdCk7XG59XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gIGxldCBpbmRleE9mTWF0Y2ggPSB0aGlzLmNsYXNzT2JqLm9iakFyci5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgIHJldHVybiBvYmouaWQgPT09IGRhdGFJZCA/IHRydWUgOiBmYWxzZTtcbiAgfSk7XG5cbiAgdGhpcy5jbGFzc09iai5yZW1vdmUoaW5kZXhPZk1hdGNoKTtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgbGV0IG1hdGNoID0gdGhpcy5jbGFzc09iai5vYmpBcnIuZmluZCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5pZCA9PT0gZGF0YUlkID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcblxuICAobWF0Y2guc3RhdHVzID09IFwiYWN0aXZlXCIpID8gKG1hdGNoLnN0YXR1cyA9IFwiY29tcGxldGVcIik6IChtYXRjaC5zdGF0dXMgPSBcImFjdGl2ZVwiKTtcbiAgY29uc29sZS5sb2cobWF0Y2gpO1xuXG59XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jbGVhckRpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgaWYgKG9iamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICBvYmplY3QucHVibGlzaENvbXBsZXRlKG9iamVjdCk7XG4gICAgfX1cbiAgKVxufVxuXG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5U29ydGVkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgdGFza3Muc29ydEJ5UHJpb3JpdHkodmFsdWUpO1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xufTtcblxubGV0IHByb2plY3RzID0gbmV3IE9iamVjdEFyckNsYXNzKCk7XG5cbmxldCBwdWJTdWJQcm9qZWN0cyA9IHB1YlN1YkZhY3RvcnkoKTtcbmxldCBwcm9qZWN0UmVtb3ZlciA9IG5ldyBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWJQcm9qZWN0cywgcHJvamVjdHMpO1xuXG5sZXQgcHViU3ViT2JqZWN0Q29uc3RydWN0b3JzID0gcHViU3ViRmFjdG9yeSgpO1xuXG4vKiBXRUlSRCBPQkogbWFrZSB0aGlzIGludG8gcHViU3ViID8gKi9cbmZ1bmN0aW9uIHN1YlB1Ymxpc2hSZXF1ZXN0KG9iaikge1xuICBsZXQgcHViU3ViO1xuICBpZiAob2JqLnR5cGUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJQcm9qZWN0cztcbiAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInRhc2tcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlRhc2tzO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFwiZGlzcGxheVwiLCBvYmoub2JqKTtcbn1cblxuZnVuY3Rpb24gc3ViRGlzcGxheUFsbFJlcXVlc3Qob2JqKSB7XG4gIGxldCBwdWJTdWI7XG4gIGxldCBvYmpBcnI7XG4gIGlmIChvYmoudHlwZSA9PSBcInByb2plY3RcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlByb2plY3RzO1xuICAgIG9iakFyciA9IHByb2plY3RzO1xuICB9IGVsc2UgaWYgKG9iai50eXBlID09IFwidGFza1wiKSB7XG4gICAgcHViU3ViID0gcHViU3ViVGFza3M7XG4gICAgb2JqQXJyID0gdGFza3M7XG4gIH1cbiAgcHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgb2JqQXJyLnB1c2gob2JqLm9iaik7XG4gIGNvbnNvbGUubG9nKG9iakFyci5vYmpBcnIpO1xuICBvYmpBcnIub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIGlmIChvYmplY3Quc3RhdHVzID09IFwiY29tcGxldGVcIikge1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICAgIH1cbiAgICBcbiAgfSk7XG59XG5cbnB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5zdWJzY3JpYmUoXCJwdWJsaXNoXCIsIHN1YlB1Ymxpc2hSZXF1ZXN0KTtcblxucHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnN1YnNjcmliZShcImRpc3BsYXlBbGxcIiwgc3ViRGlzcGxheUFsbFJlcXVlc3QpO1xuXG4vKiBPYmplY3QgQ29uc3RydWN0b3IqL1xuZnVuY3Rpb24gT2JqZWN0Q29uc3RydWN0b3IoLyogcHViU3ViLCBvYmpBcnIgKi8pIHtcbiAgLyogICB0aGlzLnB1YlN1YiA9IHB1YlN1YjtcbiAgdGhpcy5vYmpBcnIgPSBvYmpBcnI7ICovXG59XG4vKiBcbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge3RoaXMub2JqQXJyLm9iaklkR2VuICs9IDF9O1xuICovXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgLyogdGhpcy5wdWJTdWIucHVibGlzaChcImRpc3BsYXlcIiwgb2JqKTsgKi9cbiAgcHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnB1Ymxpc2goXCJwdWJsaXNoXCIsIHsgdHlwZTogdGhpcy50eXBlLCBvYmogfSk7XG59O1xuXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnB1Ymxpc2goXCJkaXNwbGF5QWxsXCIsIHsgdHlwZTogdGhpcy50eXBlLCBvYmogfSk7XG4gIC8qICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMub2JqQXJyLnB1c2gob2JqKTtcbiAgdGhpcy5vYmpBcnIub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgY29uc29sZS5sb2cob2JqZWN0KVxuICB9KTsgKi9cbn07XG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaENvbXBsZXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gIHB1YlN1YlRhc2tzLnB1Ymxpc2goXCJkaXNwbGF5Q29tcGxldGVcIiwgb2JqKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTsgLyogXG4gIHRoaXMucHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIHRoaXMub2JqQXJyID0gcHJvamVjdHM7ICovIC8qIFxuICB0aGlzLmlkID0gdGhpcy5vYmpBcnIub2JqSWRHZW4gKz0gMTsgKi9cbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG4gIHRoaXMudHlwZSA9IFwicHJvamVjdFwiO1xuICB0aGlzLnRhc2tJZEFyciA9IFtdO1xufVxuXG5Qcm9qZWN0Q29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG4vKiBQcm9qZWN0IENvbnN0cnVjdG9yICovXG4vKiBmdW5jdGlvbiBQcm9qZWN0Q29uc3RydWN0b3IodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmlkID0gcHJvamVjdHMub2JqSWRHZW4gKz0gMTtcbn1cblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKG9iaikge1xuICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwicHJvamVjdFwiLCBvYmopO1xufTtcblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24gKG9iaikge1xuICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHByb2plY3RzLnB1c2gob2JqKTtcbiAgcHJvamVjdHMub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xufTsgKi9cblxuLyogUFVCU1VCIE1PRFVMRSBGT1JNUyBhbmQgRElTUExBWSovXG5sZXQgcHViU3ViRm9ybXMgPSBwdWJTdWJGYWN0b3J5KCk7XG5cbi8qIE5vdGUgQ29uc3RydWN0b3IgKi9cblxuZnVuY3Rpb24gTm90ZUNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbn1cbk5vdGVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgcHViU3ViRm9ybXMucHVibGlzaChcIm5vdGVcIiwgeyB0aXRsZTogdGhpcy50aXRsZSwgZGV0YWlsczogdGhpcy5kZXRhaWxzIH0pO1xufTtcblxuLyogVGFzayBDb25zdHJ1Y3RvciAqL1xuXG5sZXQgdGFza3MgPSBuZXcgVGFza09iamVjdEFyckNsYXNzKCk7XG5sZXQgcHViU3ViVGFza3MgPSBwdWJTdWJGYWN0b3J5KCk7XG5sZXQgdGFza1JlbW92ZXIgPSBuZXcgUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViVGFza3MsIHRhc2tzKTtcblxuZnVuY3Rpb24gVGFza0NvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgdGhpcy50eXBlID0gXCJ0YXNrXCI7XG4gIHRoaXMuc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgdGhpcy5pZCA9IHRhc2tzLm9iaklkR2VuICs9IDE7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVzaElkID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMub2JqQXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IHRoaXMucHJvamVjdClcbiAgcHJvamVjdE9iamVjdC50YXNrSWRBcnIucHVzaCh0aGlzLmlkKTtcbiAgY29uc29sZS5sb2cocHJvamVjdE9iamVjdClcbn1cblxuXG4gIC8qIFxuICBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5wdXNoKHRoaXMuaWQpOyAqLyAvL1RIRSBJU1NVRSBJUyBIRVJFXG5cblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5jb3VudFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKHRoaXMucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwibG93XCI6XG4gICAgICByZXR1cm4gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgIHJldHVybiAyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgIHJldHVybiAzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59O1xuXG4vKiBcbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzLFxuICB0aGlzLmRhdGUgPSBkYXRlLFxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gIHRoaXMucHJvamVjdCA9IHByb2plY3QsXG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IoXG4gICAgdGhpcy50aXRsZSxcbiAgICB0aGlzLmRldGFpbHMsXG4gICAgdGhpcy5kYXRlLFxuICAgIHRoaXMucHJpb3JpdHksXG4gICAgdGhpcy5wcm9qZWN0XG4gICk7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJ0YXNrXCIsIG9iaik7XG59OyAqL1xuXG4vKiBTdWJzY3JpYmVycyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVQcm9qZWN0KTtcbi8qIFxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJQcm9qZWN0RGlzcGxheSk7ICovXG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlNlbGVjdFByb2plY3RJbnB1dCk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJub3RlXCIsIHN1YnNjcmliZU5vdGUpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwidGFza1wiLCBzdWJzY3JpYmVUYXNrKTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInRhc2tcIiwgc3ViVGFza0xpc3RJdGVtKTtcblxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVUYXNrKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViVGFza0xpc3RJdGVtKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlRhc2tDb250YWluZXIpO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12VGFza3MpO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheUNvbXBsZXRlXCIsIHN1YkNvbXBsZXRlVGFzayk7IC8vYWRkZWQgdGhpcyB0cnlpbmcgdG8gbWFrZSB0aGUgY29tcGxldGVcbi8qIFxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIixzdWJSbXZQcm9qZWN0RGlzcGxheSkgKi9cblxuLyogXG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZQcm9qZWN0RGlzcGxheSkgLyogPz8gKi9cblxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpO1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zKTtcblxuZXhwb3J0IHtcbiAgTm90ZUNvbnN0cnVjdG9yLFxuICBQcm9qZWN0Q29uc3RydWN0b3IsXG4gIFRhc2tDb25zdHJ1Y3RvcixcbiAgcHJvamVjdFJlbW92ZXIsXG4gIHRhc2tSZW1vdmVyLFxufTtcbiIsImltcG9ydCB7bW9kYWx9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5pbXBvcnQge2Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXkvZGlzcGxheVwiXG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbm1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbi8qIGRpc3BsYXkgbW9kYWwgYnV0dG9uICovXG5jb25zdCBkaXNwbGF5TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGlzcGxheU1vZGFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kaXNwbGF5TW9kYWwudGV4dENvbnRlbnQgPSBcIitcIjsvKiBcbmRpc3BsYXlNb2RhbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi9nZW5lcmFsL2ltYWdlcy9zdmctcGx1cy5zdmdcIilgKSAqL1xuZGlzcGxheU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19kaXNwbGF5LWJ0blwiLFwiYy1tYWluX19kaXNwbGF5LWJ0blwiICk7XG5kaXNwbGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5fX21vZGFsLS1oaWRkZW5cIilcbn0pXG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5TW9kYWwpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChtb2RhbCk7XG5cblxuZXhwb3J0IHttYWluRGl2fSIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IE5vdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBub3RlVGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFxuICBcImZvcm1fX2lucHV0XCIsXG4gIFwidGV4dFwiLFxuICBcIm5vdGUtdGl0bGVcIixcbiAgXCJub3RlLXRpdGxlXCJcbik7XG5jb25zdCBub3RlVGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGVUaXRsZSwgXCJUaXRsZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KG5vdGVGb3JtLCBub3RlVGl0bGVMYWJlbCwgbm90ZVRpdGxlKTtcblxuY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlXCIpO1xubm90ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZVwiKTtcblxuY29uc3Qgbm90ZUxhYmVsID0gY3JlYXRlTGFiZWwobm90ZSwgXCJEZXRhaWxzXCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZUxhYmVsLCBub3RlKTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpOyAvKiBtYXliZSBjbGVhciBpbnN0ZWFkKi9cbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5vdGVcIjtcbm5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbi8qIFBVQlNVQiAqL1xuXG5mdW5jdGlvbiBwdWJsaXNoTm90ZSgpIHtcbiAgbGV0IG9iaiA9IG5ldyBOb3RlQ29uc3RydWN0b3Iobm90ZVRpdGxlLnZhbHVlLCBub3RlLnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn1cblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwdWJsaXNoTm90ZSk7XG5cbmV4cG9ydCB7IG5vdGVGb3JtIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBQcm9qZWN0Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8qIGlucHV0cyAqL1xuY29uc3QgcHJvamVjdCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gIFwiZm9ybV9faW5wdXRcIixcbiAgXCJ0ZXh0XCIsXG4gIFwicHJvamVjdC10aXRsZVwiLFxuICBcInByb2plY3RcIlxuKTtcbmNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwocHJvamVjdCwgXCJUaXRsZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KHByb2plY3RGb3JtLCBsYWJlbCwgcHJvamVjdCk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgbGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IocHJvamVjdC52YWx1ZSk7XG4gIG9iai5kaXNwbGF5QWxsKG9iaik7XG59XG5sZXQgb2JqID0gbmV3IFByb2plY3RDb25zdHJ1Y3RvcihcImdlbmVyYWxcIik7XG5vYmouZGlzcGxheUFsbChvYmopO1xuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQcm9qZWN0cyk7XG5cbmV4cG9ydCB7IHByb2plY3RGb3JtIH07XG4iLCIvKiBUTyBETyBGT1JNICovXG5pbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlUmFkaW9JbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGFwcGVuZFJhZGlvSW5wdXRzXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgVGFza0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHtjcmVhdGVBbGVydH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2FsZXJ0XCJcblxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxubGV0IHRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcImZvcm1fX2lucHV0XCIsIFwidGV4dFwiLCBcInRpdGxlXCIsIFwidGl0bGVcIik7XG50aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlOiBHcm9jZXJpZXNcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLXRleHRcIik7XG5sZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKHRpdGxlLCBcIlRpdGxlXCIpO1xudGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuXG5sZXQgdGV4dEFyZWEgPSBjcmVhdGVUZXh0QXJlYShcImZvcm1fX2lucHV0LS10ZXh0QXJlYVwiLCBcInRleHRBcmVhXCIsIFwidGV4dEFyZWFcIilcbnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoIC8qIGFyZSB0aGVzZSBuZWNlc3Nhcnk/PyAqL1xuICBcImZvcm1fX2lucHV0LS10ZXh0XCIsXG4gIFwiZm9ybS1pbnB1dFwiXG4pO1xudGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIyIHBvdGF0b2VzXCIpO1xuXG5sZXQgdGV4dEFyZWFMYWJlbCA9IGNyZWF0ZUxhYmVsKHRleHRBcmVhLCBcIkRldGFpbHNcIik7XG50ZXh0QXJlYUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbC0taGlkZGVuXCIpO1xuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgdGV4dEFyZWFMYWJlbCwgdGV4dEFyZWEpO1xuXG5sZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBkYXRlID0gY3JlYXRlQmFzaWNJbnB1dChcImZvcm1fX2lucHV0XCIsIFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJkYXRlXCIpO1xubGV0IGRhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKGRhdGUsIFwiRHVlIGRhdGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChkaXYsIGRhdGVMYWJlbCwgZGF0ZSk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuXG4vKiBTRUxFQ1QgUFJPSkVDVCAqL1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByb2plY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0XCIpO1xuXG4vKiBjbGVhcnMgdGhlIHNlbGVjdCBvcHRpb25zIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIHByb2plY3QgZGlzcGxheSBpcyBjbGVhcmVkICovXG5mdW5jdGlvbiBzdWJDbGVhclNlbGVjdE9wdGlvbnMoKSB7XG4gIHdoaWxlIChzZWxlY3RQcm9qZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RQcm9qZWN0LnJlbW92ZUNoaWxkKHNlbGVjdFByb2plY3QubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vKiB1cGRhdGVzIHRoZSBzZWxlY3Qgb3B0aW9ucyB3aGVuIG5ldyBwcm9qZWN0cyBhcmUgYWRkZWQgKi9cbmZ1bmN0aW9uIHN1YlNlbGVjdFByb2plY3RJbnB1dChvYmopIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9iai50aXRsZSk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG5jb25zdCBzZWxlY3RMYWJlbCA9IGNyZWF0ZUxhYmVsKHNlbGVjdFByb2plY3QsIFwiUHJvamVjdFwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHNlbGVjdExhYmVsLCBzZWxlY3RQcm9qZWN0KTtcblxuLypSQURJTyBCVVRUT05TKi9cbmxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbmxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xubGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuXG5sZXQgcHJpb3JpdHlMb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZm9ybV9faW5wdXRcIik7XG5sZXQgcHJpb3JpdHlNZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZm9ybV9faW5wdXRcIik7XG5sZXQgcHJpb3JpdHlIaWdoID0gY3JlYXRlUmFkaW9JbnB1dChcImhpZ2hcIiwgXCJmb3JtX19pbnB1dFwiKTtcblxuXG5cblxuYXBwZW5kUmFkaW9JbnB1dHMoZmllbGRzZXQsIFtwcmlvcml0eUxvdywgcHJpb3JpdHlNZWRpdW0sIHByaW9yaXR5SGlnaF0pO1xuXG50YXNrRm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpjaGVja2VkXCIpO1xuICBpZiAoIXRpdGxlLnZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFsZXJ0KFwiUGxlYXNlIGNyZWF0ZSBhIHRpdGxlIGZvciB5b3VyIHRhc2shXCIpO1xuICB9XG4gIGlmICghcmFkaW8pIHtcbiAgIHJldHVybiBjcmVhdGVBbGVydChcIlBsZWFzZSBzZWxlY3QgYSBwcmlvcml0eSBmb3IgeW91ciB0YXNrIVwiKTtcbiAgfVxuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3RvcihcbiAgICB0aXRsZS52YWx1ZSxcbiAgICB0ZXh0QXJlYS52YWx1ZSxcbiAgICBkYXRlLnZhbHVlLFxuICAgIHJhZGlvLnZhbHVlLFxuICAgIHNlbGVjdFByb2plY3QudmFsdWVcbiAgKTtcbiAgb2JqLnB1c2hJZCgpO1xuICBvYmouZGlzcGxheUFsbChvYmopO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrcyk7XG4vKiBcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IodGl0bGUudmFsdWUsIHRleHRBcmVhLnZhbHVlLCBkYXRlLnZhbHVlLCByYWRpby52YWx1ZSwgc2VsZWN0UHJvamVjdC52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKCk7XG59KVxuICovXG5leHBvcnQgeyB0YXNrRm9ybSwgc3ViU2VsZWN0UHJvamVjdElucHV0LCBzdWJDbGVhclNlbGVjdE9wdGlvbnMgfTtcbiIsImxldCBzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlXCIpO1xuXG5sZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1RBU0snO1xuXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbmxldCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5PVEVcIjtcblxuc2lkZURpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbilcblxuZXhwb3J0IHtzaWRlRGl2LCB0YXNrQnV0dG9uLCBub3RlQnV0dG9uLCBwcm9qZWN0QnV0dG9ufSAiLCJpbXBvcnQgKiBhcyBzaWRlIGZyb20gXCIuL19fc2lkZS9tb2RhbF9fc2lkZVwiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIiBcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdFwiIFxuaW1wb3J0IHtub3RlRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1ub3RlXCJcblxubGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibWFpbl9fbW9kYWxcIik7XG5cbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjphYnNvbHV0ZVwiKSAvKiBoYXMgdG8gYmUgbW92ZWQgdG8gc2NzcyEhISAqL1xuY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbn0gXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vZGFsKVxuXG4vKiBzaWRlICovXG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlLnNpZGVEaXYpO1xuXG4vKiBmb3JtIG9uIGluaXRpYWwgbG9hZCAqL1xubGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fZm9ybVwiKVxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbi8qIHJlbW92ZSBmb3JtIGZ1bmMgKi9cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIHdoaWxlIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVzZXQoKVxuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKVxuICB9XG59XG5cbi8qIHNpZGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVycyAqL1xuc2lkZS50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbn0pXG5zaWRlLnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xufSlcbnNpZGUubm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG59KVxuXG5cbmV4cG9ydCB7bW9kYWx9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7ICovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiXG5pbXBvcnQge21haW5EaXZ9IGZyb20gXCIuL21haW4vbWFpblwiIFxuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9