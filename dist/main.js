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


function subscribeProject(obj) {
  /* have to clear the project Display element first */
 /*  
  } */
  let projectDiv = document.createElement("div"); 
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
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
  console.log(obj.project)
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
/* harmony export */   "TaskConstructor": () => (/* binding */ TaskConstructor),
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var _general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general/general__js/pub-sub */ "./src/general/general__js/pub-sub.js");
/* harmony import */ var _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/__container/display__container--note */ "./src/main/display/__container/display__container--note.js");
/* harmony import */ var _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/__container/display__container--project */ "./src/main/display/__container/display__container--project.js");
/* harmony import */ var _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/__container/display__container--task */ "./src/main/display/__container/display__container--task.js");
/* harmony import */ var _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/__form/modal__form--task */ "./src/main/modal/__form/modal__form--task.js");








/* PUBSUB MODULE FORMS and DISPLAY*/
let pubSubForms = (0,_general_general_js_pub_sub__WEBPACK_IMPORTED_MODULE_0__.pubSubFactory)();

function publish(key, data) {
  pubSubForms.publish(key, data)
}

/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
}
NoteConstructor.prototype.publish = function () {
  pubSubForms.publish("note", { title: this.title, details: this.details });
};

/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
}

ProjectConstructor.prototype.publish = function (obj) {
  /* let obj = new ProjectConstructor(this.title) */;
  pubSubForms.publish("project", obj);
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
pubSubForms.subscribe("project", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeProject);
pubSubForms.subscribe("project", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subSelectProjectInput);
pubSubForms.subscribe("note", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subscribeNote);
pubSubForms.subscribe("task", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubForms.subscribe("task", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);
pubSubForms.subscribe("clearProject", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subscribeClearProjectDisplay);





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
displayModal.textContent = "+";
displayModal.setAttribute("style", `background-image:url("../general/images/svg-plus.svg")`)
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
submit.setAttribute("type", "reset"); /* maybe clear instead*/
submit.textContent = "Create Project";
projectForm.appendChild(submit);

const projectsArr = [new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor("general"),];

function createProject() {
  projectsArr.push(new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor(project.value));
}

function publishProjects() {
  projectsArr.forEach((obj) => {
    obj.publish(obj);
  })
}
function test () {
  (0,_main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.publish)("clearProject", true)
  createProject();
  publishProjects()
  console.log(projectsArr)
}


function publishProject() { 
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor(project.value);
  obj.publish(obj)
}



submit.addEventListener("click", test)




/***/ }),

/***/ "./src/main/modal/__form/modal__form--task.js":
/*!****************************************************!*\
  !*** ./src/main/modal/__form/modal__form--task.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMEJBQTBCO0FBQ1k7QUFDSDs7O0FBR25DOztBQUVBLGlCQUFpQixrREFBTTs7QUFFdkIsaUJBQWlCLCtDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fc2lkZS9kaXNwbGF5X19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi1wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fc2lkZS9tb2RhbF9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQmFzaWNJbnB1dCh0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5wdXQsIHRleHQpIHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExhYmVsSW5wdXQoZm9ybSwgbGFiZWwsIGlucHV0KSB7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBjcmVhdGVMYWJlbCwgYXBwZW5kTGFiZWxJbnB1dH0iLCJcblxuZnVuY3Rpb24gcHViU3ViRmFjdG9yeSgpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBwdWJsaXNoLFxuICAgIFxuICB9O1xufVxuXG5leHBvcnQge3B1YlN1YkZhY3RvcnkgfTtcbiIsIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aXRsZVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0XCI7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIsIFwiYm9keV9faGVhZGVyXCIpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5leHBvcnQgeyBoZWFkZXIgfSA7IiwiXG5cbmxldCBub3RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlTm90ZShvYmopIHtcbiAgbGV0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGVOb3RlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZU5vdGUpO1xuICBsZXQgZGV0YWlsc05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlsc05vdGUudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsc05vdGUpXG59XG5cblxuXG5cblxuXG5leHBvcnQge3N1YnNjcmliZU5vdGUsIG5vdGVEaXNwbGF5fSIsImNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpXG5cblxuZnVuY3Rpb24gc3Vic2NyaWJlUHJvamVjdChvYmopIHtcbiAgLyogaGF2ZSB0byBjbGVhciB0aGUgcHJvamVjdCBEaXNwbGF5IGVsZW1lbnQgZmlyc3QgKi9cbiAvKiAgXG4gIH0gKi9cbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChvYmoudGl0bGUpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZUNsZWFyUHJvamVjdERpc3BsYXkoKSB7XG4gIHdoaWxlIChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkubGFzdENoaWxkKTtcbiAgfX1cblxuXG5mdW5jdGlvbiBzdWJUYXNrTGlzdEl0ZW0ob2JqKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBvYmoucHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKG9iai5wcm9qZWN0KVxuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXRhaWxzLnRleHRDb250ZW50ID0gb2JqLmRldGFpbHM7XG4gIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiLCBcImxpc3QtaXRlbV9fZGV0YWlsc1wiKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gIFxuXG4gIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBvYmouZGF0ZTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwibGlzdC1pdGVtX19kYXRlXCIpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcblxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBvYmoucHJpb3JpdHk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuXG4gIH0pXG59XG5cbmV4cG9ydCB7c3Vic2NyaWJlUHJvamVjdCwgcHJvamVjdERpc3BsYXksIHN1YlRhc2tMaXN0SXRlbSwgc3Vic2NyaWJlQ2xlYXJQcm9qZWN0RGlzcGxheX0iLCJjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKVxuXG5cbmZ1bmN0aW9uIHN1YnNjcmliZVRhc2sob2JqKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXRhaWxzLnRleHRDb250ZW50ID0gb2JqLmRldGFpbHM7XG4gIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBvYmouZGF0ZTtcbiAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqLnByaW9yaXR5O1xuICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZVRhc2ssIHRhc2tEaXNwbGF5IH07XG4iLCJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcImMtbmF2X19saXN0XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRleHQpIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW1cIiwgXCJjLW5hdl9fbGlzdC1pdGVtXCIpXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuZXhwb3J0IHtuYXYsIGNyZWF0ZUxpc3RJdGVtfVxuIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvZGlzcGxheV9fc2lkZVwiO1xuXG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcblxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZU5hdi5hcHBlbmRDaGlsZChzaWRlLm5hdilcblxubGV0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyXCIpXG5sZXQgZGlzcGxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGlzcGxheUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRlbnRcIilcblxuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZURpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4vKiBTSE9VTEQgUkVGT1JNQVQgVEhJUyAqL1xuXG5jb25zdCBob21lID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIkhvbWVcIik7XG5jb25zdCBwcm9qZWN0ID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIlByb2plY3RzXCIpO1xuY29uc3Qgbm90ZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJOb3Rlc1wiKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xufSk7XG5cbm5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1fX2RldGFpbHNcIik7XG4gIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1fX2RhdGVcIik7XG4gIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gIFxufSk7XG5cbmRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQpXG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgcHViU3ViRmFjdG9yeSB9IGZyb20gXCIuLi9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWJcIjtcbmltcG9ydCB7IHN1YnNjcmliZU5vdGUgfSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlUHJvamVjdCwgc3ViVGFza0xpc3RJdGVtLCBzdWJzY3JpYmVDbGVhclByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7IHN1YnNjcmliZVRhc2sgfSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFza1wiO1xuaW1wb3J0IHtzdWJTZWxlY3RQcm9qZWN0SW5wdXR9IGZyb20gXCIuL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFza1wiO1xuXG5cblxuLyogUFVCU1VCIE1PRFVMRSBGT1JNUyBhbmQgRElTUExBWSovXG5sZXQgcHViU3ViRm9ybXMgPSBwdWJTdWJGYWN0b3J5KCk7XG5cbmZ1bmN0aW9uIHB1Ymxpc2goa2V5LCBkYXRhKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goa2V5LCBkYXRhKVxufVxuXG4vKiBOb3RlIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIE5vdGVDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59XG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbn07XG5cbi8qIFByb2plY3QgQ29uc3RydWN0b3IgKi9cbmZ1bmN0aW9uIFByb2plY3RDb25zdHJ1Y3Rvcih0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG59XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgLyogbGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IodGhpcy50aXRsZSkgKi87XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJwcm9qZWN0XCIsIG9iaik7XG59O1xuXG4vKiBUYXNrIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgKHRoaXMudGl0bGUgPSB0aXRsZSksXG4gICAgKHRoaXMuZGV0YWlscyA9IGRldGFpbHMpLFxuICAgICh0aGlzLmRhdGUgPSBkYXRlKSxcbiAgICAodGhpcy5wcmlvcml0eSA9IHByaW9yaXR5KTtcbiAgICAodGhpcy5wcm9qZWN0ID0gcHJvamVjdClcbn1cblxuVGFza0NvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKCkge1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3RvcihcbiAgICB0aGlzLnRpdGxlLFxuICAgIHRoaXMuZGV0YWlscyxcbiAgICB0aGlzLmRhdGUsXG4gICAgdGhpcy5wcmlvcml0eSxcbiAgICB0aGlzLnByb2plY3QsXG4gICk7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJ0YXNrXCIsIG9iaik7XG59O1xuXG4vKiBTdWJzY3JpYmVycyAqL1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwicHJvamVjdFwiLCBzdWJzY3JpYmVQcm9qZWN0KTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInByb2plY3RcIiwgc3ViU2VsZWN0UHJvamVjdElucHV0KTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcIm5vdGVcIiwgc3Vic2NyaWJlTm90ZSk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJ0YXNrXCIsIHN1YnNjcmliZVRhc2spO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwidGFza1wiLCBzdWJUYXNrTGlzdEl0ZW0pO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwiY2xlYXJQcm9qZWN0XCIsIHN1YnNjcmliZUNsZWFyUHJvamVjdERpc3BsYXkpO1xuXG5cblxuZXhwb3J0IHsgTm90ZUNvbnN0cnVjdG9yLCBQcm9qZWN0Q29uc3RydWN0b3IsIFRhc2tDb25zdHJ1Y3RvciwgcHVibGlzaH0iLCJpbXBvcnQge21vZGFsfSBmcm9tIFwiLi9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IHtkaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5L2Rpc3BsYXlcIlxuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5tYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4vKiBkaXNwbGF5IG1vZGFsIGJ1dHRvbiAqL1xuY29uc3QgZGlzcGxheU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRpc3BsYXlNb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGlzcGxheU1vZGFsLnRleHRDb250ZW50ID0gXCIrXCI7XG5kaXNwbGF5TW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vZ2VuZXJhbC9pbWFnZXMvc3ZnLXBsdXMuc3ZnXCIpYClcbmRpc3BsYXlNb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fZGlzcGxheS1idG5cIixcImMtbWFpbl9fZGlzcGxheS1idG5cIiApO1xuZGlzcGxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluX19tb2RhbC0taGlkZGVuXCIpXG59KVxubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1vZGFsKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG5cbmV4cG9ydCB7bWFpbkRpdn0iLCJpbXBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGFwcGVuZExhYmVsSW5wdXQsIGNyZWF0ZUxhYmVsfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIlxuaW1wb3J0IHsgTm90ZUNvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuXG5jb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4vKiBpbnB1dHMgKi9cbmNvbnN0IG5vdGVUaXRsZSA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0ZXh0XCIsIFwibm90ZS10aXRsZVwiLCBcIm5vdGUtdGl0bGVcIik7XG5jb25zdCBub3RlVGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGVUaXRsZSwgXCJUaXRsZTpcIiApO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZVRpdGxlTGFiZWwsIG5vdGVUaXRsZSk7XG5cbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVcIik7XG5cbmNvbnN0IG5vdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGUsIFwiRGV0YWlsc1wiKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVMYWJlbCwgbm90ZSlcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpOyAvKiBtYXliZSBjbGVhciBpbnN0ZWFkKi9cbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5vdGVcIjtcbm5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbi8qIFBVQlNVQiAqL1xuXG5mdW5jdGlvbiBwdWJsaXNoTm90ZSgpIHsgIFxuICBsZXQgb2JqID0gbmV3IE5vdGVDb25zdHJ1Y3Rvcihub3RlVGl0bGUudmFsdWUsIG5vdGUudmFsdWUpO1xuICBvYmoucHVibGlzaCgpO1xufSBcblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwdWJsaXNoTm90ZSlcblxuZXhwb3J0IHtub3RlRm9ybX1cbiIsIlxuaW1wb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVMYWJlbH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCJcbmltcG9ydCB7IFByb2plY3RDb25zdHJ1Y3RvciwgcHVibGlzaCB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4vKiBpbnB1dHMgKi9cbmNvbnN0IHByb2plY3QgPSBjcmVhdGVCYXNpY0lucHV0KFwidGV4dFwiLCBcInByb2plY3QtdGl0bGVcIiwgXCJwcm9qZWN0XCIpO1xuY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChwcm9qZWN0LCBcIlRpdGxlOlwiICk7XG5hcHBlbmRMYWJlbElucHV0KHByb2plY3RGb3JtLCBsYWJlbCwgcHJvamVjdCk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTsgLyogbWF5YmUgY2xlYXIgaW5zdGVhZCovXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG5wcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5jb25zdCBwcm9qZWN0c0FyciA9IFtuZXcgUHJvamVjdENvbnN0cnVjdG9yKFwiZ2VuZXJhbFwiKSxdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBwcm9qZWN0c0Fyci5wdXNoKG5ldyBQcm9qZWN0Q29uc3RydWN0b3IocHJvamVjdC52YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoUHJvamVjdHMoKSB7XG4gIHByb2plY3RzQXJyLmZvckVhY2goKG9iaikgPT4ge1xuICAgIG9iai5wdWJsaXNoKG9iaik7XG4gIH0pXG59XG5mdW5jdGlvbiB0ZXN0ICgpIHtcbiAgcHVibGlzaChcImNsZWFyUHJvamVjdFwiLCB0cnVlKVxuICBjcmVhdGVQcm9qZWN0KCk7XG4gIHB1Ymxpc2hQcm9qZWN0cygpXG4gIGNvbnNvbGUubG9nKHByb2plY3RzQXJyKVxufVxuXG5cbmZ1bmN0aW9uIHB1Ymxpc2hQcm9qZWN0KCkgeyBcbiAgbGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IocHJvamVjdC52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKG9iailcbn1cblxuXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGVzdClcblxuZXhwb3J0IHtwcm9qZWN0Rm9ybX1cbiIsIi8qIFRPIERPIEZPUk0gKi9cbmltcG9ydCB7Y3JlYXRlQmFzaWNJbnB1dCwgYXBwZW5kTGFiZWxJbnB1dCwgY3JlYXRlTGFiZWx9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiXG5pbXBvcnQge1Rhc2tDb25zdHJ1Y3Rvcn0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuXG5cbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xudGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIilcblxubGV0IHRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcInRleHRcIiwgXCJ0aXRsZVwiLCBcInRpdGxlXCIpO1xudGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTogR3JvY2VyaWVzXCIpXG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLXRleHRcIilcbmxldCB0aXRsZUxhYmVsID0gY3JlYXRlTGFiZWwodGl0bGUsIFwiVGl0bGVcIik7XG50aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbC0taGlkZGVuXCIpO1xuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgdGl0bGVMYWJlbCwgdGl0bGUpXG5cbmxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC0tdGV4dFwiLCBcImZvcm1fX2lucHV0LS10ZXh0QXJlYVwiLCBcImZvcm0taW5wdXRcIilcblxudGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZXh0LWFyZWFcIik7XG50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGV4dC1hcmVhXCIpO1xudGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIyIHBvdGF0b2VzXCIpO1xuXG5sZXQgdGV4dEFyZWFMYWJlbCA9IGNyZWF0ZUxhYmVsKHRleHRBcmVhLCBcIkRldGFpbHNcIik7XG50ZXh0QXJlYUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbC0taGlkZGVuXCIpXG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYSlcblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmxldCBkYXRlID0gY3JlYXRlQmFzaWNJbnB1dChcImRhdGVcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiKTtcbmxldCBkYXRlTGFiZWw9IGNyZWF0ZUxhYmVsKGRhdGUsIFwiRHVlIGRhdGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChkaXYsIGRhdGVMYWJlbCwgZGF0ZSlcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdik7XG5cbi8qIFNFTEVDVCBQUk9KRUNUICovXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3QtcHJvamVjdFwiKTtcbnNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RcIik7XG5cbmZ1bmN0aW9uIHN1YlNlbGVjdFByb2plY3RJbnB1dChvYmopIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9iai50aXRsZSk7XG4gIG9wdGlvbi50ZXh0Q29udGVudD0gb2JqLnRpdGxlO1xuICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbn1cblxuY29uc3Qgc2VsZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzZWxlY3RQcm9qZWN0LCBcIlByb2plY3RcIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCBzZWxlY3RMYWJlbCwgc2VsZWN0UHJvamVjdCk7XG5cbi8qUkFESU8gQlVUVE9OUyovXG5sZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5sZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbmxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbmZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0lucHV0KHByaW9yaXR5TGV2ZWwpIHsgXG4gIGxldCByYWRpbyA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJyYWRpb1wiLCBcInByaW9yaXR5XCIsIGBwcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YCk7XG4gIHJhZGlvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5TGV2ZWwpO1xuICByZXR1cm4gcmFkaW87XG59XG5cbmxldCBwcmlvcml0eUxvdyA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJsb3dcIik7XG5sZXQgcHJpb3JpdHlNZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIpO1xubGV0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIpO1xuXG5mdW5jdGlvbiBhcHBlbmRSYWRpb0lucHV0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGV0IGxhYmVsID0gY3JlYXRlTGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfSk7XG59XG5cbmFwcGVuZFJhZGlvSW5wdXRzKGZpZWxkc2V0LCBbcHJpb3JpdHlMb3csIHByaW9yaXR5TWVkaXVtLCBwcmlvcml0eUhpZ2hdKTtcblxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5cblxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKHRpdGxlLnZhbHVlLCB0ZXh0QXJlYS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmFkaW8udmFsdWUsIHNlbGVjdFByb2plY3QudmFsdWUpO1xuICBvYmoucHVibGlzaCgpO1xufSlcblxuZXhwb3J0IHt0YXNrRm9ybSwgc3ViU2VsZWN0UHJvamVjdElucHV0fTtcbiIsImxldCBzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlXCIpO1xuXG5sZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1RBU0snO1xuXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbmxldCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5PVEVcIjtcblxuc2lkZURpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbilcblxuZXhwb3J0IHtzaWRlRGl2LCB0YXNrQnV0dG9uLCBub3RlQnV0dG9uLCBwcm9qZWN0QnV0dG9ufSAiLCJpbXBvcnQgKiBhcyBzaWRlIGZyb20gXCIuL19fc2lkZS9tb2RhbF9fc2lkZVwiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIiBcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdFwiIFxuaW1wb3J0IHtub3RlRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1ub3RlXCJcblxubGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibWFpbl9fbW9kYWxcIik7XG5cbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjphYnNvbHV0ZVwiKSAvKiBoYXMgdG8gYmUgbW92ZWQgdG8gc2NzcyEhISAqL1xuY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbn0gXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vZGFsKVxuXG4vKiBzaWRlICovXG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlLnNpZGVEaXYpO1xuXG4vKiBmb3JtIG9uIGluaXRpYWwgbG9hZCAqL1xubGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fZm9ybVwiKVxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbi8qIHJlbW92ZSBmb3JtIGZ1bmMgKi9cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIHdoaWxlIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVzZXQoKVxuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKVxuICB9XG59XG5cbi8qIHNpZGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVycyAqL1xuc2lkZS50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbn0pXG5zaWRlLnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xufSlcbnNpZGUubm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG59KVxuXG5cbmV4cG9ydCB7bW9kYWx9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7ICovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiXG5pbXBvcnQge21haW5EaXZ9IGZyb20gXCIuL21haW4vbWFpblwiIFxuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9