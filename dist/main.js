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
/* harmony export */   "createBasicInput": () => (/* binding */ createBasicInput),
/* harmony export */   "createLabel": () => (/* binding */ createLabel)
/* harmony export */ });
function createBasicInput(type, inputName, id) {
  let input = document.createElement("input");
  input.classList.add("form__input");
  input.setAttribute("type", type);
  input.setAttribute("name", inputName);
  input.setAttribute("id", id);
  return input;
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
/* harmony export */   "subTaskListItem": () => (/* binding */ subTaskListItem),
/* harmony export */   "subscribeClearProjectDisplay": () => (/* binding */ subscribeClearProjectDisplay),
/* harmony export */   "subscribeProject": () => (/* binding */ subscribeProject)
/* harmony export */ });
const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden")

/* should this be publish? send the data and then clear projectDisplay */


function subscribeProject(obj) {
  let projectDiv = document.createElement("div"); 
  projectDiv.setAttribute("data-index", obj.index)
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x"
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener

  
  let heading = document.createElement("h3");
  heading.textContent = obj.title + obj.index;
  projectDiv.appendChild(heading);
  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title);
  projectDiv.appendChild(taskList);
  projectDisplay.appendChild(projectDiv);
}






function subscribeClearProjectDisplay() {
  while (projectDisplay.firstChild) {
    projectDisplay.removeChild(projectDisplay.lastChild);
  }}




function subTaskListItem(obj) {
  let taskList = document.querySelector("." + obj.project);
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
    date.classList.toggle("hidden")
  })


}



/***/ }),

/***/ "./src/main/display/__container/display__container--task.js":
/*!******************************************************************!*\
  !*** ./src/main/display/__container/display__container--task.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribeTask": () => (/* binding */ subscribeTask),
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden")


function subscribeTask(obj) {
  let title = document.createElement("h6");
  title.textContent = obj.title;
  taskDisplay.appendChild(title);

  let details = document.createElement("p");
  details.textContent = obj.details;
  taskDisplay.appendChild(details);

  let date = document.createElement("p");
  date.textContent = obj.date;
  taskDisplay.appendChild(date);

  let priority = document.createElement("p");
  priority.textContent = obj.priority;
  taskDisplay.appendChild(priority);
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
/* harmony export */   "TaskConstructor": () => (/* binding */ TaskConstructor)
/* harmony export */ });
/* harmony import */ var _general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/general__js/pub-sub */ "./src/general/general__js/pub-sub.js");
/* harmony import */ var _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/__container/display__container--project */ "./src/main/display/__container/display__container--project.js");
/* harmony import */ var _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");







class ObjectClass {
   objArr = [];

   get objArr() {
    return this.objArr;
   }

   set objArr(arr) {
    if (!Array.isArray(arr)) {
      return alert("Not an array");
    }
    return this.objArr = arr;
   }

   push(obj) {
    this.objArr.push(obj);
   }

   remove(index) {
    this.objArr.splice(index, 1);
   }

}

let projects = new ObjectClass();
let pubSubProjects = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();


/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
  this.index = projects.objArr.length;
}

ProjectConstructor.prototype.publish = function(obj) {
  pubSubProjects.publish("project", obj);
};

ProjectConstructor.prototype.displayAll = function(obj) {
  pubSubProjects.publish("clear", true);
  projects.push(obj);
  projects.objArr.forEach((object) => {
    object.publish(object);        
  });
}


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

function TaskConstructor(title, details, date, priority, project) {
  (this.title = title),
    (this.details = details),
    (this.date = date),
    (this.priority = priority);
    (this.project = project)
}

TaskConstructor.prototype.publish = function () {
  let obj = new TaskConstructor(
    this.title,
    this.details,
    this.date,
    this.priority,
    this.project,
  );
  pubSubForms.publish("task", obj);
};

/* Subscribers */
pubSubProjects.subscribe("project", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeProject);
pubSubProjects.subscribe("project", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subSelectProjectInput);
pubSubForms.subscribe("note", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subscribeNote);
pubSubForms.subscribe("task", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubForms.subscribe("task", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);
pubSubProjects.subscribe("clear", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeClearProjectDisplay);
pubSubProjects.subscribe("clear", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subClearSelectOptions)





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
const noteTitle = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("text", "note-title", "note-title");
const noteTitleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(noteTitle, "Title:" );
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteTitleLabel, noteTitle);

const note = document.createElement("textarea");
note.setAttribute("id", "note");
note.setAttribute("name", "note");

const noteLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(note, "Details");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(noteForm, noteLabel, note)

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

submit.addEventListener("click", publishNote)




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
const project = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("text", "project-title", "project");
const label = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(project, "Title:" );
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

submit.addEventListener("click", displayProjects)




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
taskForm.classList.add("form")

let title = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("text", "title", "title");
title.setAttribute("placeholder", "Title: Groceries")
title.classList.add("form__input--text")
let titleLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(title, "Title");
titleLabel.classList.add("form__label--hidden");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, titleLabel, title)

let textArea = document.createElement("textarea");
textArea.classList.add("form__input--text", "form__input--textArea", "form-input")

textArea.setAttribute("id", "text-area");
textArea.setAttribute("name", "text-area");
textArea.setAttribute("placeholder", "2 potatoes");

let textAreaLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden")
;(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, textAreaLabel, textArea)

let div = document.createElement("div")
let date = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("date", "date", "date");
let dateLabel= (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(date, "Due date:");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(div, dateLabel, date)
taskForm.appendChild(div);

/* SELECT PROJECT */
const selectProject = document.createElement("select");
selectProject.setAttribute("id", "select-project");
selectProject.setAttribute("name", "project");

/* clears the select options at the same time as the project display is cleared */
function subClearSelectOptions() {
  while (selectProject.firstChild) {
    selectProject.removeChild(selectProject.lastChild);
  }}

/* updates the select options when new projects are added */
function subSelectProjectInput(obj) { 
  const option = document.createElement("option");
  option.setAttribute("value", obj.title);
  option.textContent= obj.title;
  selectProject.appendChild(option)
}

const selectLabel = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(selectProject, "Project");
(0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.appendLabelInput)(taskForm, selectLabel, selectProject);

/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);



function createRadioInput(priorityLevel) { 
  let radio = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createBasicInput)("radio", "priority", `priority-${priorityLevel}`);
  radio.setAttribute("value", priorityLevel);
  return radio;
}

let priorityLow = createRadioInput("low");
let priorityMedium = createRadioInput("medium");
let priorityHigh = createRadioInput("high");

function appendRadioInputs(parent, array) {
  array.forEach(element => {

    parent.appendChild(element);
    let label = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_0__.createLabel)(element, element.getAttribute("value"));
    parent.appendChild(label);
  });
}

appendRadioInputs(fieldset, [priorityLow, priorityMedium, priorityHigh]);

taskForm.appendChild(fieldset);

let submit = document.createElement("button");
submit.setAttribute("type", "reset");
submit.textContent = "Create Task";
taskForm.appendChild(submit);




submit.addEventListener("click", () => {
  let radio = document.querySelector("input:checked");
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.TaskConstructor(title.value, textArea.value, date.value, radio.value, selectProject.value);
  obj.publish();
})




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUNELHlFQUFnQztBQUNoQztBQUNBLDRCQUE0QiwyREFBUTtBQUNwQyxDQUFDOzs7QUFHYTs7Ozs7O1VDckRkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMEJBQTBCO0FBQ1k7QUFDSDs7O0FBR25DOztBQUVBLGlCQUFpQixrREFBTTs7QUFFdkIsaUJBQWlCLCtDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fc2lkZS9kaXNwbGF5X19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi1wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fc2lkZS9tb2RhbF9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQmFzaWNJbnB1dCh0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5wdXQsIHRleHQpIHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExhYmVsSW5wdXQoZm9ybSwgbGFiZWwsIGlucHV0KSB7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBjcmVhdGVMYWJlbCwgYXBwZW5kTGFiZWxJbnB1dH0iLCJcblxuZnVuY3Rpb24gcHViU3ViRmFjdG9yeSgpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBwdWJsaXNoLFxuICAgIFxuICB9O1xufVxuXG5leHBvcnQge3B1YlN1YkZhY3RvcnkgfTtcbiIsIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aXRsZVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0XCI7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIsIFwiYm9keV9faGVhZGVyXCIpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5leHBvcnQgeyBoZWFkZXIgfSA7IiwiXG5cbmxldCBub3RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlTm90ZShvYmopIHtcbiAgbGV0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGVOb3RlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZU5vdGUpO1xuICBsZXQgZGV0YWlsc05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlsc05vdGUudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsc05vdGUpXG59XG5cblxuXG5cblxuXG5leHBvcnQge3N1YnNjcmliZU5vdGUsIG5vdGVEaXNwbGF5fSIsImNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpXG5cbi8qIHNob3VsZCB0aGlzIGJlIHB1Ymxpc2g/IHNlbmQgdGhlIGRhdGEgYW5kIHRoZW4gY2xlYXIgcHJvamVjdERpc3BsYXkgKi9cblxuXG5mdW5jdGlvbiBzdWJzY3JpYmVQcm9qZWN0KG9iaikge1xuICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgb2JqLmluZGV4KVxuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCJcbiAgZGx0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyXG5cbiAgXG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnRpdGxlICsgb2JqLmluZGV4O1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQob2JqLnRpdGxlKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gc3Vic2NyaWJlQ2xlYXJQcm9qZWN0RGlzcGxheSgpIHtcbiAgd2hpbGUgKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5sYXN0Q2hpbGQpO1xuICB9fVxuXG5cblxuXG5mdW5jdGlvbiBzdWJUYXNrTGlzdEl0ZW0ob2JqKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBvYmoucHJvamVjdCk7XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRldGFpbHMudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwibGlzdC1pdGVtX19kZXRhaWxzXCIpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgXG5cbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIiwgXCJsaXN0LWl0ZW1fX2RhdGVcIik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IG9iai5wcmlvcml0eTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gIH0pXG5cblxufVxuXG5leHBvcnQge3N1YnNjcmliZVByb2plY3QsIHByb2plY3REaXNwbGF5LCBzdWJUYXNrTGlzdEl0ZW0sIHN1YnNjcmliZUNsZWFyUHJvamVjdERpc3BsYXl9IiwiY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIilcblxuXG5mdW5jdGlvbiBzdWJzY3JpYmVUYXNrKG9iaikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlscy50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXRlLnRleHRDb250ZW50ID0gb2JqLmRhdGU7XG4gIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IG9iai5wcmlvcml0eTtcbiAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xufVxuXG5leHBvcnQgeyBzdWJzY3JpYmVUYXNrLCB0YXNrRGlzcGxheSB9O1xuIiwiXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19uYXZcIilcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5uYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpc3RcIiwgXCJjLW5hdl9fbGlzdFwiKVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSh0ZXh0KSB7XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdC1pdGVtXCIsIFwiYy1uYXZfX2xpc3QtaXRlbVwiKVxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gIHJldHVybiBsaXN0SXRlbTtcbn1cblxubmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpXG5cblxuXG5cbmV4cG9ydCB7bmF2LCBjcmVhdGVMaXN0SXRlbX1cbiIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL2Rpc3BsYXlfX3NpZGVcIjtcblxuLyogRGlzcGxheSBDb250YWluZXJzICovXG5pbXBvcnQgeyB0YXNrRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFza1wiO1xuaW1wb3J0IHsgbm90ZURpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGVcIjtcbmltcG9ydCB7IHByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0XCI7XG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVOYXYuYXBwZW5kQ2hpbGQoc2lkZS5uYXYpXG5cbmxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lclwiKVxubGV0IGRpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250ZW50XCIpXG5cbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKG5vdGVEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuLyogU0hPVUxEIFJFRk9STUFUIFRISVMgKi9cblxuY29uc3QgaG9tZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJIb21lXCIpO1xuY29uc3QgcHJvamVjdCA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJQcm9qZWN0c1wiKTtcbmNvbnN0IG5vdGUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiTm90ZXNcIik7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5ub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtX19kZXRhaWxzXCIpO1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtX19kYXRlXCIpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICBcbn0pO1xuXG5kaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDb250ZW50KVxuZGlzcGxheS5hcHBlbmRDaGlsZChzaWRlTmF2KTtcbmRpc3BsYXkuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRhaW5lcik7XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTtcbiIsImltcG9ydCB7IHB1YlN1YkZhY3RvcnkgfSBmcm9tIFwiLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVOb3RlIH0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGVcIjtcbmltcG9ydCB7IHN1YnNjcmliZVByb2plY3QsIHN1YlRhc2tMaXN0SXRlbSwgc3Vic2NyaWJlQ2xlYXJQcm9qZWN0RGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVUYXNrIH0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2tcIjtcbmltcG9ydCB7c3ViU2VsZWN0UHJvamVjdElucHV0LCBzdWJDbGVhclNlbGVjdE9wdGlvbnN9IGZyb20gXCIuL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFza1wiO1xuXG5cbmNsYXNzIE9iamVjdENsYXNzIHtcbiAgIG9iakFyciA9IFtdO1xuXG4gICBnZXQgb2JqQXJyKCkge1xuICAgIHJldHVybiB0aGlzLm9iakFycjtcbiAgIH1cblxuICAgc2V0IG9iakFycihhcnIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwiTm90IGFuIGFycmF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vYmpBcnIgPSBhcnI7XG4gICB9XG5cbiAgIHB1c2gob2JqKSB7XG4gICAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICAgfVxuXG4gICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm9iakFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgfVxuXG59XG5cbmxldCBwcm9qZWN0cyA9IG5ldyBPYmplY3RDbGFzcygpO1xubGV0IHB1YlN1YlByb2plY3RzID0gcHViU3ViRmFjdG9yeSgpO1xuXG5cbi8qIFByb2plY3QgQ29uc3RydWN0b3IgKi9cbmZ1bmN0aW9uIFByb2plY3RDb25zdHJ1Y3Rvcih0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuaW5kZXggPSBwcm9qZWN0cy5vYmpBcnIubGVuZ3RoO1xufVxuXG5Qcm9qZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbihvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcInByb2plY3RcIiwgb2JqKTtcbn07XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHByb2plY3RzLnB1c2gob2JqKTtcbiAgcHJvamVjdHMub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7ICAgICAgICBcbiAgfSk7XG59XG5cblxuLyogUFVCU1VCIE1PRFVMRSBGT1JNUyBhbmQgRElTUExBWSovXG5sZXQgcHViU3ViRm9ybXMgPSBwdWJTdWJGYWN0b3J5KCk7XG5cbi8qIE5vdGUgQ29uc3RydWN0b3IgKi9cblxuZnVuY3Rpb24gTm90ZUNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbn1cbk5vdGVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgcHViU3ViRm9ybXMucHVibGlzaChcIm5vdGVcIiwgeyB0aXRsZTogdGhpcy50aXRsZSwgZGV0YWlsczogdGhpcy5kZXRhaWxzIH0pO1xufTtcblxuLyogVGFzayBDb25zdHJ1Y3RvciAqL1xuXG5mdW5jdGlvbiBUYXNrQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICh0aGlzLnRpdGxlID0gdGl0bGUpLFxuICAgICh0aGlzLmRldGFpbHMgPSBkZXRhaWxzKSxcbiAgICAodGhpcy5kYXRlID0gZGF0ZSksXG4gICAgKHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSk7XG4gICAgKHRoaXMucHJvamVjdCA9IHByb2plY3QpXG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IoXG4gICAgdGhpcy50aXRsZSxcbiAgICB0aGlzLmRldGFpbHMsXG4gICAgdGhpcy5kYXRlLFxuICAgIHRoaXMucHJpb3JpdHksXG4gICAgdGhpcy5wcm9qZWN0LFxuICApO1xuICBwdWJTdWJGb3Jtcy5wdWJsaXNoKFwidGFza1wiLCBvYmopO1xufTtcblxuLyogU3Vic2NyaWJlcnMgKi9cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcInByb2plY3RcIiwgc3Vic2NyaWJlUHJvamVjdCk7XG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJwcm9qZWN0XCIsIHN1YlNlbGVjdFByb2plY3RJbnB1dCk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJub3RlXCIsIHN1YnNjcmliZU5vdGUpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwidGFza1wiLCBzdWJzY3JpYmVUYXNrKTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInRhc2tcIiwgc3ViVGFza0xpc3RJdGVtKTtcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YnNjcmliZUNsZWFyUHJvamVjdERpc3BsYXkpO1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zKVxuXG5cblxuZXhwb3J0IHsgTm90ZUNvbnN0cnVjdG9yLCBQcm9qZWN0Q29uc3RydWN0b3IsIFRhc2tDb25zdHJ1Y3Rvcn0iLCJpbXBvcnQge21vZGFsfSBmcm9tIFwiLi9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IHtkaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5L2Rpc3BsYXlcIlxuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5tYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4vKiBkaXNwbGF5IG1vZGFsIGJ1dHRvbiAqL1xuY29uc3QgZGlzcGxheU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRpc3BsYXlNb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGlzcGxheU1vZGFsLnRleHRDb250ZW50ID0gXCIrXCI7LyogXG5kaXNwbGF5TW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vZ2VuZXJhbC9pbWFnZXMvc3ZnLXBsdXMuc3ZnXCIpYCkgKi9cbmRpc3BsYXlNb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fZGlzcGxheS1idG5cIixcImMtbWFpbl9fZGlzcGxheS1idG5cIiApO1xuZGlzcGxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluX19tb2RhbC0taGlkZGVuXCIpXG59KVxubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1vZGFsKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG5cbmV4cG9ydCB7bWFpbkRpdn0iLCJpbXBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZUxhYmVsfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIlxuaW1wb3J0IHsgTm90ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuXG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4vKiBpbnB1dHMgKi9cbmNvbnN0IG5vdGVUaXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0ZXh0XCIsIFwibm90ZS10aXRsZVwiLCBcIm5vdGUtdGl0bGVcIik7XG5jb25zdCBub3RlVGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGVUaXRsZSwgXCJUaXRsZTpcIiApO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZVRpdGxlTGFiZWwsIG5vdGVUaXRsZSk7XG5cbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVcIik7XG5cbmNvbnN0IG5vdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGUsIFwiRGV0YWlsc1wiKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVMYWJlbCwgbm90ZSlcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpOyAvKiBtYXliZSBjbGVhciBpbnN0ZWFkKi9cbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5vdGVcIjtcbm5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbi8qIFBVQlNVQiAqL1xuXG5mdW5jdGlvbiBwdWJsaXNoTm90ZSgpIHsgIFxuICBsZXQgb2JqID0gbmV3IE5vdGVDb25zdHJ1Y3Rvcihub3RlVGl0bGUudmFsdWUsIG5vdGUudmFsdWUpO1xuICBvYmoucHVibGlzaCgpO1xufSBcblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwdWJsaXNoTm90ZSlcblxuZXhwb3J0IHtub3RlRm9ybX1cbiIsIlxuaW1wb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVMYWJlbH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCJcbmltcG9ydCB7IFByb2plY3RDb25zdHJ1Y3Rvcix9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4vKiBpbnB1dHMgKi9cbmNvbnN0IHByb2plY3QgPSBjcmVhdGVCYXNpY0lucHV0KFwidGV4dFwiLCBcInByb2plY3QtdGl0bGVcIiwgXCJwcm9qZWN0XCIpO1xuY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChwcm9qZWN0LCBcIlRpdGxlOlwiICk7XG5hcHBlbmRMYWJlbElucHV0KHByb2plY3RGb3JtLCBsYWJlbCwgcHJvamVjdCk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTsgXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gIGxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKHByb2plY3QudmFsdWUpO1xuICBvYmouZGlzcGxheUFsbChvYmopO1xufVxubGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IoXCJnZW5lcmFsXCIpO1xub2JqLmRpc3BsYXlBbGwob2JqKTtcblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UHJvamVjdHMpXG5cbmV4cG9ydCB7cHJvamVjdEZvcm19XG4iLCIvKiBUTyBETyBGT1JNICovXG5pbXBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZUxhYmVsfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIlxuaW1wb3J0IHtUYXNrQ29uc3RydWN0b3J9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbnRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpXG5cbmxldCB0aXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0ZXh0XCIsIFwidGl0bGVcIiwgXCJ0aXRsZVwiKTtcbnRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGU6IEdyb2Nlcmllc1wiKVxudGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LS10ZXh0XCIpXG5sZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKHRpdGxlLCBcIlRpdGxlXCIpO1xudGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRpdGxlTGFiZWwsIHRpdGxlKVxuXG5sZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG50ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLXRleHRcIiwgXCJmb3JtX19pbnB1dC0tdGV4dEFyZWFcIiwgXCJmb3JtLWlucHV0XCIpXG5cbnRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dC1hcmVhXCIpO1xudGV4dEFyZWEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRleHQtYXJlYVwiKTtcbnRleHRBcmVhLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMiBwb3RhdG9lc1wiKTtcblxubGV0IHRleHRBcmVhTGFiZWwgPSBjcmVhdGVMYWJlbCh0ZXh0QXJlYSwgXCJEZXRhaWxzXCIpO1xudGV4dEFyZWFMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKVxuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgdGV4dEFyZWFMYWJlbCwgdGV4dEFyZWEpXG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5sZXQgZGF0ZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJkYXRlXCIsIFwiZGF0ZVwiLCBcImRhdGVcIik7XG5sZXQgZGF0ZUxhYmVsPSBjcmVhdGVMYWJlbChkYXRlLCBcIkR1ZSBkYXRlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQoZGl2LCBkYXRlTGFiZWwsIGRhdGUpXG50YXNrRm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuXG4vKiBTRUxFQ1QgUFJPSkVDVCAqL1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByb2plY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0XCIpO1xuXG4vKiBjbGVhcnMgdGhlIHNlbGVjdCBvcHRpb25zIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIHByb2plY3QgZGlzcGxheSBpcyBjbGVhcmVkICovXG5mdW5jdGlvbiBzdWJDbGVhclNlbGVjdE9wdGlvbnMoKSB7XG4gIHdoaWxlIChzZWxlY3RQcm9qZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RQcm9qZWN0LnJlbW92ZUNoaWxkKHNlbGVjdFByb2plY3QubGFzdENoaWxkKTtcbiAgfX1cblxuLyogdXBkYXRlcyB0aGUgc2VsZWN0IG9wdGlvbnMgd2hlbiBuZXcgcHJvamVjdHMgYXJlIGFkZGVkICovXG5mdW5jdGlvbiBzdWJTZWxlY3RQcm9qZWN0SW5wdXQob2JqKSB7IFxuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgb2JqLnRpdGxlKTtcbiAgb3B0aW9uLnRleHRDb250ZW50PSBvYmoudGl0bGU7XG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxufVxuXG5jb25zdCBzZWxlY3RMYWJlbCA9IGNyZWF0ZUxhYmVsKHNlbGVjdFByb2plY3QsIFwiUHJvamVjdFwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHNlbGVjdExhYmVsLCBzZWxlY3RQcm9qZWN0KTtcblxuLypSQURJTyBCVVRUT05TKi9cbmxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbmxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xubGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJhZGlvSW5wdXQocHJpb3JpdHlMZXZlbCkgeyBcbiAgbGV0IHJhZGlvID0gY3JlYXRlQmFzaWNJbnB1dChcInJhZGlvXCIsIFwicHJpb3JpdHlcIiwgYHByaW9yaXR5LSR7cHJpb3JpdHlMZXZlbH1gKTtcbiAgcmFkaW8uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJpb3JpdHlMZXZlbCk7XG4gIHJldHVybiByYWRpbztcbn1cblxubGV0IHByaW9yaXR5TG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiKTtcbmxldCBwcmlvcml0eU1lZGl1bSA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJtZWRpdW1cIik7XG5sZXQgcHJpb3JpdHlIaWdoID0gY3JlYXRlUmFkaW9JbnB1dChcImhpZ2hcIik7XG5cbmZ1bmN0aW9uIGFwcGVuZFJhZGlvSW5wdXRzKHBhcmVudCwgYXJyYXkpIHtcbiAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBsZXQgbGFiZWwgPSBjcmVhdGVMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB9KTtcbn1cblxuYXBwZW5kUmFkaW9JbnB1dHMoZmllbGRzZXQsIFtwcmlvcml0eUxvdywgcHJpb3JpdHlNZWRpdW0sIHByaW9yaXR5SGlnaF0pO1xuXG50YXNrRm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIjtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cblxuXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IodGl0bGUudmFsdWUsIHRleHRBcmVhLnZhbHVlLCBkYXRlLnZhbHVlLCByYWRpby52YWx1ZSwgc2VsZWN0UHJvamVjdC52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKCk7XG59KVxuXG5leHBvcnQge3Rhc2tGb3JtLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsIHN1YkNsZWFyU2VsZWN0T3B0aW9uc307XG4iLCJsZXQgc2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZVwiKTtcblxubGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdUQVNLJztcblxubGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFwiO1xuXG5sZXQgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJOT1RFXCI7XG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbilcblxuc2lkZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKG5vdGVCdXR0b24pXG5cbmV4cG9ydCB7c2lkZURpdiwgdGFza0J1dHRvbiwgbm90ZUJ1dHRvbiwgcHJvamVjdEJ1dHRvbn0gIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvbW9kYWxfX3NpZGVcIlxuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS10YXNrXCIgXG5pbXBvcnQge3Byb2plY3RGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXByb2plY3RcIiBcbmltcG9ydCB7bm90ZUZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tbm90ZVwiXG5cbmxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1haW5fX21vZGFsXCIpO1xuXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9zaXRpb246YWJzb2x1dGVcIikgLyogaGFzIHRvIGJlIG1vdmVkIHRvIHNjc3MhISEgKi9cbmNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG5tb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX21vZGFsLS1oaWRkZW5cIik7XG59IFxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNb2RhbClcblxuLyogc2lkZSAqL1xubW9kYWwuYXBwZW5kQ2hpbGQoc2lkZS5zaWRlRGl2KTtcblxuLyogZm9ybSBvbiBpbml0aWFsIGxvYWQgKi9cbmxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Zvcm1cIilcbm1vZGFsLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4vKiByZW1vdmUgZm9ybSBmdW5jICovXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICB3aGlsZSAoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZm9ybUNvbnRhaW5lci5maXJzdENoaWxkLnJlc2V0KClcbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZClcbiAgfVxufVxuXG4vKiBzaWRlIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgKi9cbnNpZGUudGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG59KVxuc2lkZS5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbn0pXG5zaWRlLm5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xufSlcblxuXG5leHBvcnQge21vZGFsfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyAqL1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIlxuaW1wb3J0IHttYWluRGl2fSBmcm9tIFwiLi9tYWluL21haW5cIiBcblxuXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==