/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden");
 
function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  
  dltBtn.addEventListener("click", () => {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeByProject(obj);

  });
  projectDiv.appendChild(dltBtn);

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
  console.log(obj.id)
  taskList.setAttribute("data-id", obj.id);
  let listItem = document.createElement("li");
  let title = document.createElement("h4");
  title.textContent = obj.title;
  listItem.appendChild(title);

  let details = document.createElement("p");
  details.textContent = obj.details;
  details.classList.add("hidden", "list-item__details");
  listItem.appendChild(details);

  let date = document.createElement("p");
  date.textContent = obj.date;
  date.classList.add("hidden", "list-item__date");
  listItem.appendChild(date);

  let priority = document.createElement("p");
  priority.textContent = obj.priority;
  listItem.appendChild(priority);
  taskList.appendChild(listItem);

  listItem.addEventListener("click", () => {
    details.classList.toggle("hidden");
    date.classList.toggle("hidden");
  });
}




/***/ }),

/***/ "./src/main/display/__container/display__container--task.js":
/*!******************************************************************!*\
  !*** ./src/main/display/__container/display__container--task.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subRmvTaskDisplay": () => (/* binding */ subRmvTaskDisplay),
/* harmony export */   "subscribeTask": () => (/* binding */ subscribeTask),
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");



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
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.remove(obj.id);
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
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)("table__edit-input", "text", "title", "edit-title"); 
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createTextArea)("table__edit-input", "details", "edit-details");
        editInput.textContent = obj.details;
      } else if (td.classList.contains("table__td--date")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)("table__edit-input", "date", "date", "edit-date");
        editInput.setAttribute("placeholder", obj.date);
      } else if (td.classList.contains("table__td--priority")){
        editInput = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.textContent = "Priority";
        editInput.appendChild(legend);
        let low = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createRadioInput)("low", "edit-btn__input");
        let medium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createRadioInput)("medium", "edit-btn__input")
        let high = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createRadioInput)("high", "edit-btn__input")
        ;(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.appendRadioInputs)(editInput, [low, medium, high]);
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
/* harmony import */ var _container_display_container_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _container_display_container_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _container_display_container_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__container/display__container--project */ "./src/main/display/__container/display__container--project.js");


/* Display Containers */





const display = document.createElement("div");

const sideNav = document.createElement("div");
sideNav.appendChild(_side_display_side__WEBPACK_IMPORTED_MODULE_0__.nav)

let displayContainer = document.createElement("div");
displayContainer.classList.add("display__container")
let displayContent = document.createElement("div");
displayContent.classList.add("display__content")

displayContent.appendChild(_container_display_container_task__WEBPACK_IMPORTED_MODULE_1__.taskDisplay);
displayContent.appendChild(_container_display_container_note__WEBPACK_IMPORTED_MODULE_2__.noteDisplay);
displayContent.appendChild(_container_display_container_project__WEBPACK_IMPORTED_MODULE_3__.projectDisplay);

/* SHOULD REFORMAT THIS */

const home = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Home");
const project = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Projects");
const note = _side_display_side__WEBPACK_IMPORTED_MODULE_0__.createListItem("Notes");

home.addEventListener("click", () => {
  console.log("hello");
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_2__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_3__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_1__.taskDisplay.classList.remove("display__container-task--hidden");
});

note.addEventListener("click", () => {
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_2__.noteDisplay.classList.remove("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_3__.projectDisplay.classList.add("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_1__.taskDisplay.classList.add("display__container-task--hidden");
});


project.addEventListener("click", () => {
  _container_display_container_note__WEBPACK_IMPORTED_MODULE_2__.noteDisplay.classList.add("display__container-note--hidden");
  _container_display_container_project__WEBPACK_IMPORTED_MODULE_3__.projectDisplay.classList.remove("display__container-project--hidden");
  _container_display_container_task__WEBPACK_IMPORTED_MODULE_1__.taskDisplay.classList.add("display__container-task--hidden");
  let details = document.querySelector(".list-item__details");
  let date = document.querySelector(".list-item__date");
  details.classList.add("hidden");
  date.classList.add("hidden")
   
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
}

/* REMOVE CONSTRUCTOR */
/* used to remove objects from the display by matching the data index to the index property in each object */

function RemoveConstructor(pubSub, classObj) {
  this.pubSub = pubSub;
  this.classObj = classObj;
}/* 
RemoveConstructor.prototype.removeAll = function() {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
} */

RemoveConstructor.prototype.removeByProject = function(prjRmv) {
  let indexOfMatch = this.classObj.objArr.findIndex((obj) => {
    return obj.project === prjRmv.title ? true : false;
  });
  this.classObj.remove(indexOfMatch);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });

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

let projects = new ObjectArrClass();

let pubSubProjects = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let projectRemover = new RemoveConstructor(pubSubProjects, projects);




let pubSubObjectConstructors = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();


/* WEIRD OBJ make this into pubSub ? */
function subPublishRequest(obj) {
  let pubSub;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
  } else if(obj.type == "task") {
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
  console.log(objArr.objArr)
  objArr.objArr.forEach((object) => {
    object.publish(object);
  });

}

pubSubObjectConstructors.subscribe("publish", subPublishRequest );

pubSubObjectConstructors.subscribe("displayAll", subDisplayAllRequest);

/* Object Constructor*/
function ObjectConstructor( /* pubSub, objArr */) {
/*   this.pubSub = pubSub;
  this.objArr = objArr; */
}
/* 
ObjectConstructor.prototype.getId = function() {this.objArr.objIdGen += 1};
 */
ObjectConstructor.prototype.publish = function(obj) {
  /* this.pubSub.publish("display", obj); */
  pubSubObjectConstructors.publish("publish", {type:this.type, obj})
}

ObjectConstructor.prototype.displayAll = function(obj) {
  pubSubObjectConstructors.publish("displayAll",{type:this.type, obj});
 /*  this.pubSub.publish("clear", true);
  this.objArr.push(obj);
  this.objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
  }); */
};

function ProjectConstructor(title) {
  this.title = title;/* 
  this.pubSub = pubSubProjects;
  this.objArr = projects; *//* 
  this.id = this.objArr.objIdGen += 1; */
  this.id = projects.objIdGen += 1;
  this.type = "project";
}

let test = new ObjectConstructor()
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

let tasks = new ObjectArrClass();
let pubSubTasks = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();
let taskRemover = new RemoveConstructor(pubSubTasks, tasks);

function TaskConstructor(title, details, date, priority, project) {
  this.title = title,
  this.details = details,
  this.date = date,
  this.priority = priority,
  this.project = project,
  this.type = "task";
  this.id = tasks.objIdGen += 1;
}

TaskConstructor.prototype = Object.create(ObjectConstructor.prototype)


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
pubSubTasks.subscribe("clear", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subRmvTaskDisplay);
pubSubTasks.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subRmvTasks)
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
submit.setAttribute("type", "reset");
submit.textContent = "Create Task";
taskForm.appendChild(submit);

function displayTasks() {
  let radio = document.querySelector("input:checked");
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.TaskConstructor(
    title.value,
    textArea.value,
    date.value,
    radio.value,
    selectProject.value
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDRCQUE0QiwyREFBUTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IscURBQVk7O0FBRTlCO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQVE7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlFQUFnQztBQUNoQztBQUNBLDRCQUE0QiwyREFBUTtBQUNwQyxDQUFDO0FBQ0QsNEVBQW1DO0FBQ25DO0FBQ0EsNEJBQTRCLGlFQUFXO0FBQ3ZDLENBQUM7QUFDRCx5RUFBZ0M7QUFDaEM7QUFDQSw0QkFBNEIsMkRBQVE7QUFDcEMsQ0FBQzs7O0FBR2E7Ozs7OztVQ3JEZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLDBCQUEwQjtBQUNZO0FBQ0g7OztBQUduQzs7QUFFQSxpQkFBaUIsa0RBQU07O0FBRXZCLGlCQUFpQiwrQ0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2dlbmVyYWwvZ2VuZXJhbF9fanMvcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX3NpZGUvZGlzcGxheV9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21haW4tcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLW5vdGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9fX3NpZGUvbW9kYWxfX3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUJhc2ljSW5wdXQoY2xhc3NOYW1lLCB0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShjbGFzc05hbWUsIGlucHV0TmFtZSwgaWQpIHtcbiAgbGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICByZXR1cm4gdGV4dEFyZWE7XG59IFxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpbnB1dCwgdGV4dCkge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbFwiKVxuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTGFiZWxJbnB1dChmb3JtLCBsYWJlbCwgaW5wdXQpIHtcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0lucHV0KHByaW9yaXR5TGV2ZWwsIGNsYXNzTmFtZSkge1xuICBsZXQgcmFkaW8gPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgIGNsYXNzTmFtZSxcbiAgICBcInJhZGlvXCIsXG4gICAgXCJwcmlvcml0eVwiLFxuICAgIGBwcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YFxuICApO1xuICByYWRpby5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcmlvcml0eUxldmVsKTtcbiAgcmV0dXJuIHJhZGlvO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSYWRpb0lucHV0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGV0IGxhYmVsID0gY3JlYXRlTGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQmFzaWNJbnB1dCwgY3JlYXRlTGFiZWwsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZVJhZGlvSW5wdXQsIGFwcGVuZFJhZGlvSW5wdXRzLCBjcmVhdGVUZXh0QXJlYX0iLCJcblxuZnVuY3Rpb24gcHViU3ViRmFjdG9yeSgpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBwdWJsaXNoLFxuICAgIFxuICB9O1xufVxuXG5leHBvcnQge3B1YlN1YkZhY3RvcnkgfTtcbiIsIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aXRsZVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0XCI7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIsIFwiYm9keV9faGVhZGVyXCIpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5leHBvcnQgeyBoZWFkZXIgfSA7IiwiXG5cbmxldCBub3RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlTm90ZShvYmopIHtcbiAgbGV0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGVOb3RlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZU5vdGUpO1xuICBsZXQgZGV0YWlsc05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlsc05vdGUudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsc05vdGUpXG59XG5cblxuXG5cblxuXG5leHBvcnQge3N1YnNjcmliZU5vdGUsIG5vdGVEaXNwbGF5fSIsImltcG9ydCB7IHByb2plY3RSZW1vdmVyLCB0YXNrUmVtb3ZlciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gXG5mdW5jdGlvbiBzdWJzY3JpYmVQcm9qZWN0KG9iaikge1xuICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBcbiAgZGx0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdFJlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gICAgdGFza1JlbW92ZXIucmVtb3ZlQnlQcm9qZWN0KG9iaik7XG5cbiAgfSk7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGx0QnRuKTtcblxuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKG9iai50aXRsZSwgXCJ0YXNrLWxpc3RcIik7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbn1cblxuZnVuY3Rpb24gc3ViUm12UHJvamVjdERpc3BsYXkoKSB7XG4gIHdoaWxlIChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkubGFzdENoaWxkKTtcbiAgfVxufVxuLyogUmVtb3ZlcyBUYXNrcyBJdGVtcyB3aGVuICovXG5mdW5jdGlvbiBzdWJSbXZUYXNrcygpIHtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3RcIilcbiAgdGFza0xpc3QuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICB3aGlsZSAobGlzdEl0ZW0uZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdEl0ZW0ucmVtb3ZlQ2hpbGQobGlzdEl0ZW0ubGFzdENoaWxkKTtcbiAgICB9XG4gIH0gKVxufVxuXG4gIFxuZnVuY3Rpb24gc3ViVGFza0xpc3RJdGVtKG9iaikge1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgb2JqLnByb2plY3QpO1xuICBjb25zb2xlLmxvZyhvYmouaWQpXG4gIHRhc2tMaXN0LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlscy50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIiwgXCJsaXN0LWl0ZW1fX2RldGFpbHNcIik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBvYmouZGF0ZTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwibGlzdC1pdGVtX19kYXRlXCIpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcblxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBvYmoucHJpb3JpdHk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHByb2plY3REaXNwbGF5LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrc1xuICAvKiBnZW5lcmF0ZVByb2plY3REaXNwbGF5ICovXG59O1xuIiwiaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBwcm9qZWN0UmVtb3ZlciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcbmltcG9ydCB7IGNyZWF0ZVJhZGlvSW5wdXQsIGFwcGVuZFJhZGlvSW5wdXRzLCBjcmVhdGVCYXNpY0lucHV0LCBjcmVhdGVUZXh0QXJlYSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKG9iaiwgcGFyZW50KSB7XG4gIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGlmICgga2V5ID09IFwidHlwZVwiIHx8IGtleSA9PT0gXCJpZFwiIHx8IGtleSA9PSBcInByb2plY3RcIikgeyAvKiBub3Qgc3VyZSB3aHkgSSBoYXZlIHR5cGUgdGFzayBpbiB0aGUgZmlyc3QgcGxhY2UgKi9cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCByb3cgPSBjcmVhdGVSb3coa2V5LCB2YWx1ZSk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdyhrZXksIHZhbHVlKSB7XG4gIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgbGV0IHRhYmxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKVxuICB0YWJsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBrZXk7XG4gIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICBhc3NpZ25DbGFzcyhrZXksIHRhYmxlRGF0YSk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGluZyk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlRGF0YSk7XG4gIHJldHVybiB0YWJsZVJvdztcbn1cbmZ1bmN0aW9uIGFzc2lnbkNsYXNzKGtleSwgZWxlbWVudCkge1xuICBzd2l0Y2goa2V5KSB7XG4gICAgY2FzZSAoXCJ0aXRsZVwiKTpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tdGl0bGVcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIChcImRldGFpbHNcIik6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLWRldGFpbHNcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIChcImRhdGVcIik6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLWRhdGVcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1wcmlvcml0eVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIHN1YnNjcmliZVRhc2sob2JqKSB7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIC8qIERFTEVURSBCVVRUT04gKi9cbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZGx0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza1JlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gIH0pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG5cbiAgLypFRElUIEJVVFRPTiovXG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgLyogVGhpcyB3b3JrcyBpbiBwcmluY2lwbGUhIE5vdyBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gY29uZGVuc2UgaXQhICovXG4gIC8qIGFkZCBjbGFzc2xpc3QgZm9yIGVhY2ggdmFsdWUsIHRoZW4gZm9yIGVhY2ggLiBIYXZlIHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZXMgdGhlIG9sZCB0aXRsZSBpbiB0aGUgb2JqIHdpdGggdGhlIG5ldyBvbmUgXG5cbiBIYXZlIHRvIGNyZWF0ZSBsYWJlbHMgYW5kIGhpZGUgdGhlbSBmb3IgYWNjZXNzaWJpbGl0eSAqL1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSAudGFibGVfX3RkYClcbiAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0YWJsZWApIC8vRG8gSSByZWFsbHkgbmVlZCB0aGlzP1xuICAgIHRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHRkKSB7XG4gICAgICBsZXQgZWRpdElucHV0O1xuICAgICAgXG4gICAgICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS10aXRsZVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFwidGFibGVfX2VkaXQtaW5wdXRcIiwgXCJ0ZXh0XCIsIFwidGl0bGVcIiwgXCJlZGl0LXRpdGxlXCIpOyBcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai50aXRsZSk7XG4gICAgICB9IGVsc2UgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX190ZC0tZGV0YWlsc1wiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVUZXh0QXJlYShcInRhYmxlX19lZGl0LWlucHV0XCIsIFwiZGV0YWlsc1wiLCBcImVkaXQtZGV0YWlsc1wiKTtcbiAgICAgICAgZWRpdElucHV0LnRleHRDb250ZW50ID0gb2JqLmRldGFpbHM7XG4gICAgICB9IGVsc2UgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX190ZC0tZGF0ZVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFwidGFibGVfX2VkaXQtaW5wdXRcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcImVkaXQtZGF0ZVwiKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai5kYXRlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1wcmlvcml0eVwiKSl7XG4gICAgICAgIGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgICAgZWRpdElucHV0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIGxldCBsb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZWRpdC1idG5fX2lucHV0XCIpO1xuICAgICAgICBsZXQgbWVkaXVtID0gY3JlYXRlUmFkaW9JbnB1dChcIm1lZGl1bVwiLCBcImVkaXQtYnRuX19pbnB1dFwiKVxuICAgICAgICBsZXQgaGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZWRpdC1idG5fX2lucHV0XCIpXG4gICAgICAgIGFwcGVuZFJhZGlvSW5wdXRzKGVkaXRJbnB1dCwgW2xvdywgbWVkaXVtLCBoaWdoXSk7XG4gICAgICAgfVxuXG4gICAgICB0ZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlZGl0SW5wdXQsIHRkKTtcbiAgICB9KVxuICAgIC8qIGxldCBuZXdUaXRsZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1RpdGxlVmFsdWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICB0YXNrRGl2LnJlcGxhY2VDaGlsZChuZXdUaXRsZVZhbHVlLCB0aXRsZVZhbHVlKTtcbiAqL1xuICAgIFxuICAgIFxuICAgIGxldCBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0Q2hhbmdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgZWRpdGVkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fZWRpdC1pbnB1dFwiKTtcbiAgICAgIGVkaXRlZElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICBvYmoudGl0bGUgPSBpbnB1dC52YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkZXRhaWxzXCIpIHtcbiAgICAgICAgICBvYmouZGV0YWlscyA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICBvYmouZGF0ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgIHRhc2tEaXYucmVwbGFjZUNoaWxkKHRpdGxlVmFsdWUsIG5ld1RpdGxlVmFsdWUpXG4gICAgICB9KVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgb2JqLnRpdGxlID0gbmV3VGl0bGVWYWx1ZS52YWx1ZTtcbiAgICAgIHRpdGxlVmFsdWUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICB0YXNrRGl2LnJlcGxhY2VDaGlsZCh0aXRsZVZhbHVlLCBuZXdUaXRsZVZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICBzdWJtaXRDaGFuZ2UucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRDaGFuZ2VCdG4pO1xuICB9KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICBjcmVhdGVUYWJsZShvYmosIHRhc2tEaXYpO1xuICBcbiAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0Rpdilcbn1cblxuZnVuY3Rpb24gc3ViUm12VGFza0Rpc3BsYXkoKSB7XG4gIHdoaWxlICh0YXNrRGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgdGFza0Rpc3BsYXkucmVtb3ZlQ2hpbGQodGFza0Rpc3BsYXkubGFzdENoaWxkKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRm9ybShvYmopIHtcbiAgXG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZVRhc2ssIHRhc2tEaXNwbGF5LCBzdWJSbXZUYXNrRGlzcGxheSB9O1xuIiwiXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19uYXZcIilcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5uYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpc3RcIiwgXCJjLW5hdl9fbGlzdFwiKVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSh0ZXh0KSB7XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdC1pdGVtXCIsIFwiYy1uYXZfX2xpc3QtaXRlbVwiKVxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gIHJldHVybiBsaXN0SXRlbTtcbn1cblxubmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpXG5cblxuXG5cbmV4cG9ydCB7bmF2LCBjcmVhdGVMaXN0SXRlbX1cbiIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL2Rpc3BsYXlfX3NpZGVcIjtcblxuLyogRGlzcGxheSBDb250YWluZXJzICovXG5pbXBvcnQgeyB0YXNrRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFza1wiO1xuaW1wb3J0IHsgbm90ZURpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGVcIjtcbmltcG9ydCB7IHByb2plY3REaXNwbGF5fSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcblxuXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlTmF2LmFwcGVuZENoaWxkKHNpZGUubmF2KVxuXG5sZXQgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXJcIilcbmxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGVudFwiKVxuXG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChub3RlRGlzcGxheSk7XG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbi8qIFNIT1VMRCBSRUZPUk1BVCBUSElTICovXG5cbmNvbnN0IGhvbWUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiSG9tZVwiKTtcbmNvbnN0IHByb2plY3QgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiUHJvamVjdHNcIik7XG5jb25zdCBub3RlID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIk5vdGVzXCIpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxubm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xufSk7XG5cblxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtX19kZXRhaWxzXCIpO1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtX19kYXRlXCIpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgXG59KTtcblxuZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudClcbmRpc3BsYXkuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XG5kaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXlDb250YWluZXIpO1xuXG5leHBvcnQgeyBkaXNwbGF5IH07XG4iLCJpbXBvcnQgeyBwdWJTdWJGYWN0b3J5IH0gZnJvbSBcIi4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvcHViLXN1YlwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90ZSB9IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrcyxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7IHN1YnNjcmliZVRhc2ssIHN1YlJtdlRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2tcIjtcbmltcG9ydCB7XG4gIHN1YlNlbGVjdFByb2plY3RJbnB1dCxcbiAgc3ViQ2xlYXJTZWxlY3RPcHRpb25zLFxufSBmcm9tIFwiLi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIjtcblxuLyogT0JKRUNUIENMQVNTICovXG4vKiBob2xkcyBhbiBhcnJheSBvZiBhbGwgdGhlIG9iamVjdHMuIFRoZSBvYmpJZEdlbiBpcyB1c2VkIHRvIGFzc2lnbiB1bmlxdWUgaWRzIHRvIGVhY2ggb2JqICovXG5jbGFzcyBPYmplY3RBcnJDbGFzcyB7XG4gIG9iakFyciA9IFtdO1xuICBvYmpJZEdlbiA9IDA7XG5cbiAgZ2V0IG9iakFycigpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpBcnI7XG4gIH1cblxuICBzZXQgb2JqQXJyKGFycikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCJOb3QgYW4gYXJyYXlcIik7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5vYmpBcnIgPSBhcnIpO1xuICB9XG5cbiAgcHVzaChvYmopIHtcbiAgICB0aGlzLm9iakFyci5wdXNoKG9iaik7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm9iakFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbi8qIFJFTU9WRSBDT05TVFJVQ1RPUiAqL1xuLyogdXNlZCB0byByZW1vdmUgb2JqZWN0cyBmcm9tIHRoZSBkaXNwbGF5IGJ5IG1hdGNoaW5nIHRoZSBkYXRhIGluZGV4IHRvIHRoZSBpbmRleCBwcm9wZXJ0eSBpbiBlYWNoIG9iamVjdCAqL1xuXG5mdW5jdGlvbiBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWIsIGNsYXNzT2JqKSB7XG4gIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLmNsYXNzT2JqID0gY2xhc3NPYmo7XG59LyogXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59ICovXG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVCeVByb2plY3QgPSBmdW5jdGlvbihwcmpSbXYpIHtcbiAgbGV0IGluZGV4T2ZNYXRjaCA9IHRoaXMuY2xhc3NPYmoub2JqQXJyLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5wcm9qZWN0ID09PSBwcmpSbXYudGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuICB0aGlzLmNsYXNzT2JqLnJlbW92ZShpbmRleE9mTWF0Y2gpO1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xuXG59XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gIGxldCBpbmRleE9mTWF0Y2ggPSB0aGlzLmNsYXNzT2JqLm9iakFyci5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgIHJldHVybiBvYmouaWQgPT09IGRhdGFJZCA/IHRydWUgOiBmYWxzZTtcbiAgfSk7XG4gIHRoaXMuY2xhc3NPYmoucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5sZXQgcHJvamVjdHMgPSBuZXcgT2JqZWN0QXJyQ2xhc3MoKTtcblxubGV0IHB1YlN1YlByb2plY3RzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHByb2plY3RSZW1vdmVyID0gbmV3IFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YlByb2plY3RzLCBwcm9qZWN0cyk7XG5cblxuXG5cbmxldCBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMgPSBwdWJTdWJGYWN0b3J5KCk7XG5cblxuLyogV0VJUkQgT0JKIG1ha2UgdGhpcyBpbnRvIHB1YlN1YiA/ICovXG5mdW5jdGlvbiBzdWJQdWJsaXNoUmVxdWVzdChvYmopIHtcbiAgbGV0IHB1YlN1YjtcbiAgaWYgKG9iai50eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgcHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIH0gZWxzZSBpZihvYmoudHlwZSA9PSBcInRhc2tcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlRhc2tzO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFwiZGlzcGxheVwiLCBvYmoub2JqKTsgIFxufVxuXG5cbmZ1bmN0aW9uIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KG9iaikge1xuICBsZXQgcHViU3ViO1xuICBsZXQgb2JqQXJyO1xuICBpZiAob2JqLnR5cGUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJQcm9qZWN0cztcbiAgICBvYmpBcnIgPSBwcm9qZWN0cztcbiAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInRhc2tcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlRhc2tzO1xuICAgIG9iakFyciA9IHRhc2tzO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIG9iakFyci5wdXNoKG9iai5vYmopO1xuICBjb25zb2xlLmxvZyhvYmpBcnIub2JqQXJyKVxuICBvYmpBcnIub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xuXG59XG5cbnB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5zdWJzY3JpYmUoXCJwdWJsaXNoXCIsIHN1YlB1Ymxpc2hSZXF1ZXN0ICk7XG5cbnB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5zdWJzY3JpYmUoXCJkaXNwbGF5QWxsXCIsIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KTtcblxuLyogT2JqZWN0IENvbnN0cnVjdG9yKi9cbmZ1bmN0aW9uIE9iamVjdENvbnN0cnVjdG9yKCAvKiBwdWJTdWIsIG9iakFyciAqLykge1xuLyogICB0aGlzLnB1YlN1YiA9IHB1YlN1YjtcbiAgdGhpcy5vYmpBcnIgPSBvYmpBcnI7ICovXG59XG4vKiBcbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge3RoaXMub2JqQXJyLm9iaklkR2VuICs9IDF9O1xuICovXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uKG9iaikge1xuICAvKiB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiZGlzcGxheVwiLCBvYmopOyAqL1xuICBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMucHVibGlzaChcInB1Ymxpc2hcIiwge3R5cGU6dGhpcy50eXBlLCBvYmp9KVxufVxuXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMucHVibGlzaChcImRpc3BsYXlBbGxcIix7dHlwZTp0aGlzLnR5cGUsIG9ian0pO1xuIC8qICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMub2JqQXJyLnB1c2gob2JqKTtcbiAgdGhpcy5vYmpBcnIub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gICAgY29uc29sZS5sb2cob2JqZWN0KVxuICB9KTsgKi9cbn07XG5cbmZ1bmN0aW9uIFByb2plY3RDb25zdHJ1Y3Rvcih0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7LyogXG4gIHRoaXMucHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIHRoaXMub2JqQXJyID0gcHJvamVjdHM7ICovLyogXG4gIHRoaXMuaWQgPSB0aGlzLm9iakFyci5vYmpJZEdlbiArPSAxOyAqL1xuICB0aGlzLmlkID0gcHJvamVjdHMub2JqSWRHZW4gKz0gMTtcbiAgdGhpcy50eXBlID0gXCJwcm9qZWN0XCI7XG59XG5cbmxldCB0ZXN0ID0gbmV3IE9iamVjdENvbnN0cnVjdG9yKClcblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cblxuLyogUHJvamVjdCBDb25zdHJ1Y3RvciAqL1xuLyogZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG59XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcInByb2plY3RcIiwgb2JqKTtcbn07XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07ICovXG5cbi8qIFBVQlNVQiBNT0RVTEUgRk9STVMgYW5kIERJU1BMQVkqL1xubGV0IHB1YlN1YkZvcm1zID0gcHViU3ViRmFjdG9yeSgpO1xuXG4vKiBOb3RlIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIE5vdGVDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59XG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbn07XG5cbi8qIFRhc2sgQ29uc3RydWN0b3IgKi9cblxubGV0IHRhc2tzID0gbmV3IE9iamVjdEFyckNsYXNzKCk7XG5sZXQgcHViU3ViVGFza3MgPSBwdWJTdWJGYWN0b3J5KCk7XG5sZXQgdGFza1JlbW92ZXIgPSBuZXcgUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViVGFza3MsIHRhc2tzKTtcblxuZnVuY3Rpb24gVGFza0NvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHMsXG4gIHRoaXMuZGF0ZSA9IGRhdGUsXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSxcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdCxcbiAgdGhpcy50eXBlID0gXCJ0YXNrXCI7XG4gIHRoaXMuaWQgPSB0YXNrcy5vYmpJZEdlbiArPSAxO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpXG5cblxuLyogXG5mdW5jdGlvbiBUYXNrQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyxcbiAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LFxufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRoaXMudGl0bGUsXG4gICAgdGhpcy5kZXRhaWxzLFxuICAgIHRoaXMuZGF0ZSxcbiAgICB0aGlzLnByaW9yaXR5LFxuICAgIHRoaXMucHJvamVjdFxuICApO1xuICBwdWJTdWJGb3Jtcy5wdWJsaXNoKFwidGFza1wiLCBvYmopO1xufTsgKi9cblxuLyogU3Vic2NyaWJlcnMgKi9cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlUHJvamVjdCk7XG4vKiBcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViUHJvamVjdERpc3BsYXkpOyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwibm90ZVwiLCBzdWJzY3JpYmVOb3RlKTtcbiBwdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJ0YXNrXCIsIHN1YnNjcmliZVRhc2spO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwidGFza1wiLCBzdWJUYXNrTGlzdEl0ZW0pO1xuXG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YnNjcmliZVRhc2spO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJUYXNrTGlzdEl0ZW0pO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12VGFza0Rpc3BsYXkpO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12VGFza3MpXG4vKiBcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsc3ViUm12UHJvamVjdERpc3BsYXkpICovXG5cbi8qIFxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpIC8qID8/ICovXG5cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlByb2plY3REaXNwbGF5KTtcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyk7XG5cblxuXG5cblxuZXhwb3J0IHsgTm90ZUNvbnN0cnVjdG9yLCBQcm9qZWN0Q29uc3RydWN0b3IsIFRhc2tDb25zdHJ1Y3RvciwgcHJvamVjdFJlbW92ZXIsIHRhc2tSZW1vdmVyLCB9O1xuIiwiaW1wb3J0IHttb2RhbH0gZnJvbSBcIi4vbW9kYWwvbW9kYWxcIjtcbmltcG9ydCB7ZGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheS9kaXNwbGF5XCJcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuLyogZGlzcGxheSBtb2RhbCBidXR0b24gKi9cbmNvbnN0IGRpc3BsYXlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kaXNwbGF5TW9kYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmRpc3BsYXlNb2RhbC50ZXh0Q29udGVudCA9IFwiK1wiOy8qIFxuZGlzcGxheU1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uL2dlbmVyYWwvaW1hZ2VzL3N2Zy1wbHVzLnN2Z1wiKWApICovXG5kaXNwbGF5TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX2Rpc3BsYXktYnRuXCIsXCJjLW1haW5fX2Rpc3BsYXktYnRuXCIgKTtcbmRpc3BsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKVxufSlcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNb2RhbCk7XG5tYWluRGl2LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuXG5leHBvcnQge21haW5EaXZ9IiwiaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgTm90ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuXG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4vKiBpbnB1dHMgKi9cbmNvbnN0IG5vdGVUaXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gIFwiZm9ybV9faW5wdXRcIixcbiAgXCJ0ZXh0XCIsXG4gIFwibm90ZS10aXRsZVwiLFxuICBcIm5vdGUtdGl0bGVcIlxuKTtcbmNvbnN0IG5vdGVUaXRsZUxhYmVsID0gY3JlYXRlTGFiZWwobm90ZVRpdGxlLCBcIlRpdGxlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVUaXRsZUxhYmVsLCBub3RlVGl0bGUpO1xuXG5jb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xubm90ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3RlXCIpO1xuXG5jb25zdCBub3RlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlLCBcIkRldGFpbHNcIik7XG5hcHBlbmRMYWJlbElucHV0KG5vdGVGb3JtLCBub3RlTGFiZWwsIG5vdGUpO1xuXG4vKiBcInN1Ym1pdFwiIGJ1dHRvbiAqL1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7IC8qIG1heWJlIGNsZWFyIGluc3RlYWQqL1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgTm90ZVwiO1xubm90ZUZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuLyogUFVCU1VCICovXG5cbmZ1bmN0aW9uIHB1Ymxpc2hOb3RlKCkge1xuICBsZXQgb2JqID0gbmV3IE5vdGVDb25zdHJ1Y3Rvcihub3RlVGl0bGUudmFsdWUsIG5vdGUudmFsdWUpO1xuICBvYmoucHVibGlzaCgpO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHB1Ymxpc2hOb3RlKTtcblxuZXhwb3J0IHsgbm90ZUZvcm0gfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IFByb2plY3RDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBwcm9qZWN0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJwcm9qZWN0LXRpdGxlXCIsXG4gIFwicHJvamVjdFwiXG4pO1xuY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChwcm9qZWN0LCBcIlRpdGxlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQocHJvamVjdEZvcm0sIGxhYmVsLCBwcm9qZWN0KTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBsZXQgb2JqID0gbmV3IFByb2plY3RDb25zdHJ1Y3Rvcihwcm9qZWN0LnZhbHVlKTtcbiAgb2JqLmRpc3BsYXlBbGwob2JqKTtcbn1cbmxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKFwiZ2VuZXJhbFwiKTtcbm9iai5kaXNwbGF5QWxsKG9iaik7XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RzKTtcblxuZXhwb3J0IHsgcHJvamVjdEZvcm0gfTtcbiIsIi8qIFRPIERPIEZPUk0gKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVSYWRpb0lucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgYXBwZW5kUmFkaW9JbnB1dHNcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBUYXNrQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xudGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG5cbmxldCB0aXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcInRleHRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xudGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTogR3JvY2VyaWVzXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LS10ZXh0XCIpO1xubGV0IHRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbCh0aXRsZSwgXCJUaXRsZVwiKTtcbnRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0aXRsZUxhYmVsLCB0aXRsZSk7XG5cblxubGV0IHRleHRBcmVhID0gY3JlYXRlVGV4dEFyZWEoXCJmb3JtX19pbnB1dC0tdGV4dEFyZWFcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRBcmVhXCIpXG50ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCAvKiBhcmUgdGhlc2UgbmVjZXNzYXJ5Pz8gKi9cbiAgXCJmb3JtX19pbnB1dC0tdGV4dFwiLFxuICBcImZvcm0taW5wdXRcIlxuKTtcbnRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMiBwb3RhdG9lc1wiKTtcblxubGV0IHRleHRBcmVhTGFiZWwgPSBjcmVhdGVMYWJlbCh0ZXh0QXJlYSwgXCJEZXRhaWxzXCIpO1xudGV4dEFyZWFMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRleHRBcmVhTGFiZWwsIHRleHRBcmVhKTtcblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5sZXQgZGF0ZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJmb3JtX19pbnB1dFwiLCBcImRhdGVcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiKTtcbmxldCBkYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChkYXRlLCBcIkR1ZSBkYXRlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQoZGl2LCBkYXRlTGFiZWwsIGRhdGUpO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuLyogU0VMRUNUIFBST0pFQ1QgKi9cbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcm9qZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcblxuLyogY2xlYXJzIHRoZSBzZWxlY3Qgb3B0aW9ucyBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBwcm9qZWN0IGRpc3BsYXkgaXMgY2xlYXJlZCAqL1xuZnVuY3Rpb24gc3ViQ2xlYXJTZWxlY3RPcHRpb25zKCkge1xuICB3aGlsZSAoc2VsZWN0UHJvamVjdC5maXJzdENoaWxkKSB7XG4gICAgc2VsZWN0UHJvamVjdC5yZW1vdmVDaGlsZChzZWxlY3RQcm9qZWN0Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLyogdXBkYXRlcyB0aGUgc2VsZWN0IG9wdGlvbnMgd2hlbiBuZXcgcHJvamVjdHMgYXJlIGFkZGVkICovXG5mdW5jdGlvbiBzdWJTZWxlY3RQcm9qZWN0SW5wdXQob2JqKSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvYmoudGl0bGUpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuY29uc3Qgc2VsZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzZWxlY3RQcm9qZWN0LCBcIlByb2plY3RcIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCBzZWxlY3RMYWJlbCwgc2VsZWN0UHJvamVjdCk7XG5cbi8qUkFESU8gQlVUVE9OUyovXG5sZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5sZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbmxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbmZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cblxubGV0IHByaW9yaXR5TG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiLCBcImZvcm1fX2lucHV0XCIpO1xubGV0IHByaW9yaXR5TWVkaXVtID0gY3JlYXRlUmFkaW9JbnB1dChcIm1lZGl1bVwiLCBcImZvcm1fX2lucHV0XCIpO1xubGV0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZm9ybV9faW5wdXRcIik7XG5cblxuXG5hcHBlbmRSYWRpb0lucHV0cyhmaWVsZHNldCwgW3ByaW9yaXR5TG93LCBwcmlvcml0eU1lZGl1bSwgcHJpb3JpdHlIaWdoXSk7XG5cbnRhc2tGb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xudGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICBsZXQgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IoXG4gICAgdGl0bGUudmFsdWUsXG4gICAgdGV4dEFyZWEudmFsdWUsXG4gICAgZGF0ZS52YWx1ZSxcbiAgICByYWRpby52YWx1ZSxcbiAgICBzZWxlY3RQcm9qZWN0LnZhbHVlXG4gICk7XG4gIG9iai5kaXNwbGF5QWxsKG9iaik7XG59XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRhc2tzKTtcbi8qIFxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpjaGVja2VkXCIpO1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3Rvcih0aXRsZS52YWx1ZSwgdGV4dEFyZWEudmFsdWUsIGRhdGUudmFsdWUsIHJhZGlvLnZhbHVlLCBzZWxlY3RQcm9qZWN0LnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn0pXG4gKi9cbmV4cG9ydCB7IHRhc2tGb3JtLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyB9O1xuIiwibGV0IHNpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZURpdi5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX3NpZGVcIik7XG5cbmxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnVEFTSyc7XG5cbmxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlBST0pFQ1RcIjtcblxubGV0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm90ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xubm90ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTk9URVwiO1xuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbilcblxuc2lkZURpdi5hcHBlbmRDaGlsZChub3RlQnV0dG9uKVxuXG5leHBvcnQge3NpZGVEaXYsIHRhc2tCdXR0b24sIG5vdGVCdXR0b24sIHByb2plY3RCdXR0b259ICIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL21vZGFsX19zaWRlXCJcbmltcG9ydCB7dGFza0Zvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFza1wiIFxuaW1wb3J0IHtwcm9qZWN0Rm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1wcm9qZWN0XCIgXG5pbXBvcnQge25vdGVGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLW5vdGVcIlxuXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5tb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIiwgXCJtYWluX19tb2RhbFwiKTtcblxubGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvc2l0aW9uOmFic29sdXRlXCIpIC8qIGhhcyB0byBiZSBtb3ZlZCB0byBzY3NzISEhICovXG5jbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xubW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG5mdW5jdGlvbiBoaWRlTW9kYWwoKSB7XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19tb2RhbC0taGlkZGVuXCIpO1xufSBcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlTW9kYWwpXG5cbi8qIHNpZGUgKi9cbm1vZGFsLmFwcGVuZENoaWxkKHNpZGUuc2lkZURpdik7XG5cbi8qIGZvcm0gb24gaW5pdGlhbCBsb2FkICovXG5sZXQgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19mb3JtXCIpXG5tb2RhbC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuLyogcmVtb3ZlIGZvcm0gZnVuYyAqL1xuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgd2hpbGUgKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGZvcm1Db250YWluZXIuZmlyc3RDaGlsZC5yZXNldCgpXG4gICAgZm9ybUNvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuLyogc2lkZSBidXR0b24gZXZlbnQgbGlzdGVuZXJzICovXG5zaWRlLnRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xufSlcbnNpZGUucHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG59KVxuc2lkZS5ub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVGb3JtKTtcbn0pXG5cblxuZXhwb3J0IHttb2RhbH0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgKi9cbmltcG9ydCB7aGVhZGVyfSBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCJcbmltcG9ydCB7bWFpbkRpdn0gZnJvbSBcIi4vbWFpbi9tYWluXCIgXG5cblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=