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
/* harmony export */   "subRmvProjectDisplay": () => (/* binding */ subRmvProjectDisplay),
/* harmony export */   "subTaskListItem": () => (/* binding */ subTaskListItem),
/* harmony export */   "subscribeProject": () => (/* binding */ subscribeProject)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");

const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden");

/* should this be publish? send the data and then clear projectDisplay */

function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  
  dltBtn.addEventListener("click", () => {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);
  });
  projectDiv.appendChild(dltBtn);

  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  projectDiv.appendChild(heading);
  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title);
  projectDiv.appendChild(taskList);
  projectDisplay.appendChild(projectDiv);
}

function subRmvProjectDisplay() {
  while (projectDisplay.firstChild) {
    projectDisplay.removeChild(projectDisplay.lastChild);
  }
}

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

const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden")


function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");

  
  dltBtn.addEventListener("click", () => {
    _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.remove(obj.id);
  }); 

  taskDiv.appendChild(dltBtn);

  let title = document.createElement("h6");
  title.textContent = obj.title;
  taskDiv.appendChild(title);

  let details = document.createElement("p");
  details.textContent = obj.details;
  taskDiv.appendChild(details);

  let date = document.createElement("p");
  date.textContent = obj.date;
  taskDiv.appendChild(date);

  let priority = document.createElement("p");
  priority.textContent = obj.priority;
  taskDiv.appendChild(priority);
  taskDisplay.appendChild(taskDiv)
}

function subRmvTaskDisplay() {
  while (taskDisplay.firstChild) {
    taskDisplay.removeChild(taskDisplay.lastChild);
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
  objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
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
pubSubProjects.subscribe("display", _modal_form_modal_form_task__WEBPACK_IMPORTED_MODULE_4__.subSelectProjectInput);
pubSubForms.subscribe("note", _display_container_display_container_note__WEBPACK_IMPORTED_MODULE_1__.subscribeNote);
/* pubSubForms.subscribe("task", subscribeTask);
pubSubForms.subscribe("task", subTaskListItem);
 */
pubSubTasks.subscribe("display", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subscribeTask);
pubSubTasks.subscribe("display", _display_container_display_container_project__WEBPACK_IMPORTED_MODULE_2__.subTaskListItem);
pubSubTasks.subscribe("clear", _display_container_display_container_task__WEBPACK_IMPORTED_MODULE_3__.subRmvTaskDisplay);

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


function displayTasks() {
  let radio = document.querySelector("input:checked");
  let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.TaskConstructor(title.value, textArea.value, date.value, radio.value, selectProject.value);
  obj.displayAll(obj);
}

submit.addEventListener("click", displayTasks)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRCQUE0QiwyREFBUTtBQUNwQyxDQUFDOzs7QUFHYTs7Ozs7O1VDckRkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsMEJBQTBCO0FBQ1k7QUFDSDs7O0FBR25DOztBQUVBLGlCQUFpQixrREFBTTs7QUFFdkIsaUJBQWlCLCtDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhbC9nZW5lcmFsX19qcy9wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fc2lkZS9kaXNwbGF5X19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi1wdWItc3ViLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tbm90ZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fZm9ybS9tb2RhbF9fZm9ybS0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL19fc2lkZS9tb2RhbF9fc2lkZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQmFzaWNJbnB1dCh0eXBlLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIGlucHV0O1xufVxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5wdXQsIHRleHQpIHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExhYmVsSW5wdXQoZm9ybSwgbGFiZWwsIGlucHV0KSB7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBjcmVhdGVMYWJlbCwgYXBwZW5kTGFiZWxJbnB1dH0iLCJcblxuZnVuY3Rpb24gcHViU3ViRmFjdG9yeSgpIHtcbiAgY29uc3Qgc3Vic2NyaWJlcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgY29uc3QgaW5kZXggPSBzdWJzY3JpYmVyc1tldmVudE5hbWVdLmxlbmd0aCAtIDE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIHN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZSxcbiAgICBwdWJsaXNoLFxuICAgIFxuICB9O1xufVxuXG5leHBvcnQge3B1YlN1YkZhY3RvcnkgfTtcbiIsIlxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX190aXRsZVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0XCI7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIsIFwiYm9keV9faGVhZGVyXCIpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5leHBvcnQgeyBoZWFkZXIgfSA7IiwiXG5cbmxldCBub3RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlTm90ZShvYmopIHtcbiAgbGV0IHRpdGxlTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgdGl0bGVOb3RlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBub3RlRGlzcGxheS5hcHBlbmRDaGlsZCh0aXRsZU5vdGUpO1xuICBsZXQgZGV0YWlsc05vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlsc05vdGUudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsc05vdGUpXG59XG5cblxuXG5cblxuXG5leHBvcnQge3N1YnNjcmliZU5vdGUsIG5vdGVEaXNwbGF5fSIsImltcG9ydCB7IHByb2plY3RSZW1vdmVyIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG5cbi8qIHNob3VsZCB0aGlzIGJlIHB1Ymxpc2g/IHNlbmQgdGhlIGRhdGEgYW5kIHRoZW4gY2xlYXIgcHJvamVjdERpc3BsYXkgKi9cblxuZnVuY3Rpb24gc3Vic2NyaWJlUHJvamVjdChvYmopIHtcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgXG4gIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RSZW1vdmVyLnJlbW92ZShvYmouaWQpO1xuICB9KTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkbHRCdG4pO1xuXG4gIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQob2JqLnRpdGxlKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xufVxuXG5mdW5jdGlvbiBzdWJSbXZQcm9qZWN0RGlzcGxheSgpIHtcbiAgd2hpbGUgKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YlRhc2tMaXN0SXRlbShvYmopIHtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9iai5wcm9qZWN0KTtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGV0YWlscy50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIiwgXCJsaXN0LWl0ZW1fX2RldGFpbHNcIik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBvYmouZGF0ZTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwibGlzdC1pdGVtX19kYXRlXCIpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcblxuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBvYmoucHJpb3JpdHk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHByb2plY3REaXNwbGF5LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxufTtcbiIsImltcG9ydCB7IHRhc2tSZW1vdmVyIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIilcblxuXG5mdW5jdGlvbiBzdWJzY3JpYmVUYXNrKG9iaikge1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG4gIFxuICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrUmVtb3Zlci5yZW1vdmUob2JqLmlkKTtcbiAgfSk7IFxuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGx0QnRuKTtcblxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXRhaWxzLnRleHRDb250ZW50ID0gb2JqLmRldGFpbHM7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IG9iai5wcmlvcml0eTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tEaXYpXG59XG5cbmZ1bmN0aW9uIHN1YlJtdlRhc2tEaXNwbGF5KCkge1xuICB3aGlsZSAodGFza0Rpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tEaXNwbGF5LnJlbW92ZUNoaWxkKHRhc2tEaXNwbGF5Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlVGFzaywgdGFza0Rpc3BsYXksIHN1YlJtdlRhc2tEaXNwbGF5IH07XG4iLCJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcImMtbmF2X19saXN0XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRleHQpIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW1cIiwgXCJjLW5hdl9fbGlzdC1pdGVtXCIpXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuZXhwb3J0IHtuYXYsIGNyZWF0ZUxpc3RJdGVtfVxuIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvZGlzcGxheV9fc2lkZVwiO1xuXG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcblxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2lkZU5hdi5hcHBlbmRDaGlsZChzaWRlLm5hdilcblxubGV0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyXCIpXG5sZXQgZGlzcGxheUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGlzcGxheUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRlbnRcIilcblxuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQobm90ZURpc3BsYXkpO1xuZGlzcGxheUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdERpc3BsYXkpO1xuXG4vKiBTSE9VTEQgUkVGT1JNQVQgVEhJUyAqL1xuXG5jb25zdCBob21lID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIkhvbWVcIik7XG5jb25zdCBwcm9qZWN0ID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIlByb2plY3RzXCIpO1xuY29uc3Qgbm90ZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJOb3Rlc1wiKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xufSk7XG5cbm5vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbm90ZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG4gIHByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcbn0pO1xuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1fX2RldGFpbHNcIik7XG4gIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1fX2RhdGVcIik7XG4gIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gIFxufSk7XG5cbmRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQpXG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgcHViU3ViRmFjdG9yeSB9IGZyb20gXCIuLi9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWJcIjtcbmltcG9ydCB7IHN1YnNjcmliZU5vdGUgfSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlUHJvamVjdCxcbiAgc3ViVGFza0xpc3RJdGVtLFxuICBzdWJSbXZQcm9qZWN0RGlzcGxheSxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7IHN1YnNjcmliZVRhc2ssIHN1YlJtdlRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXRhc2tcIjtcbmltcG9ydCB7XG4gIHN1YlNlbGVjdFByb2plY3RJbnB1dCxcbiAgc3ViQ2xlYXJTZWxlY3RPcHRpb25zLFxufSBmcm9tIFwiLi9tb2RhbC9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIjtcblxuLyogT0JKRUNUIENMQVNTICovXG4vKiBob2xkcyBhbiBhcnJheSBvZiBhbGwgdGhlIG9iamVjdHMuIFRoZSBvYmpJZEdlbiBpcyB1c2VkIHRvIGFzc2lnbiB1bmlxdWUgaWRzIHRvIGVhY2ggb2JqICovXG5jbGFzcyBPYmplY3RBcnJDbGFzcyB7XG4gIG9iakFyciA9IFtdO1xuICBvYmpJZEdlbiA9IDA7XG5cbiAgZ2V0IG9iakFycigpIHtcbiAgICByZXR1cm4gdGhpcy5vYmpBcnI7XG4gIH1cblxuICBzZXQgb2JqQXJyKGFycikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYWxlcnQoXCJOb3QgYW4gYXJyYXlcIik7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5vYmpBcnIgPSBhcnIpO1xuICB9XG5cbiAgcHVzaChvYmopIHtcbiAgICB0aGlzLm9iakFyci5wdXNoKG9iaik7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm9iakFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbi8qIFJFTU9WRSBDT05TVFJVQ1RPUiAqL1xuLyogdXNlZCB0byByZW1vdmUgb2JqZWN0cyBmcm9tIHRoZSBkaXNwbGF5IGJ5IG1hdGNoaW5nIHRoZSBkYXRhIGluZGV4IHRvIHRoZSBpbmRleCBwcm9wZXJ0eSBpbiBlYWNoIG9iamVjdCAqL1xuXG5mdW5jdGlvbiBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWIsIGNsYXNzT2JqKSB7XG4gIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLmNsYXNzT2JqID0gY2xhc3NPYmo7XG59XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZGF0YUlkKSB7XG4gIGxldCBpbmRleE9mTWF0Y2ggPSB0aGlzLmNsYXNzT2JqLm9iakFyci5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgIHJldHVybiBvYmouaWQgPT09IGRhdGFJZCA/IHRydWUgOiBmYWxzZTtcbiAgfSk7XG4gIHRoaXMuY2xhc3NPYmoucmVtb3ZlKGluZGV4T2ZNYXRjaCk7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5sZXQgcHJvamVjdHMgPSBuZXcgT2JqZWN0QXJyQ2xhc3MoKTtcbmxldCBwdWJTdWJQcm9qZWN0cyA9IHB1YlN1YkZhY3RvcnkoKTtcbmxldCBwcm9qZWN0UmVtb3ZlciA9IG5ldyBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWJQcm9qZWN0cywgcHJvamVjdHMpO1xuXG5cblxuXG5sZXQgcHViU3ViT2JqZWN0Q29uc3RydWN0b3JzID0gcHViU3ViRmFjdG9yeSgpO1xuXG5cbi8qIFdFSVJEIE9CSiBtYWtlIHRoaXMgaW50byBwdWJTdWIgPyAqL1xuZnVuY3Rpb24gc3ViUHVibGlzaFJlcXVlc3Qob2JqKSB7XG4gIGxldCBwdWJTdWI7XG4gIGlmIChvYmoudHlwZSA9PSBcInByb2plY3RcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlByb2plY3RzO1xuICB9IGVsc2UgaWYob2JqLnR5cGUgPT0gXCJ0YXNrXCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJUYXNrcztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcImRpc3BsYXlcIiwgb2JqLm9iaik7ICBcbn1cblxuXG5mdW5jdGlvbiBzdWJEaXNwbGF5QWxsUmVxdWVzdChvYmopIHtcbiAgbGV0IHB1YlN1YjtcbiAgbGV0IG9iakFycjtcbiAgaWYgKG9iai50eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgcHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gICAgb2JqQXJyID0gcHJvamVjdHM7XG4gIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJ0YXNrXCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJUYXNrcztcbiAgICBvYmpBcnIgPSB0YXNrcztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBvYmpBcnIucHVzaChvYmoub2JqKTtcbiAgb2JqQXJyLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICAgIGNvbnNvbGUubG9nKG9iamVjdClcbiAgfSk7XG5cbn1cblxucHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnN1YnNjcmliZShcInB1Ymxpc2hcIiwgc3ViUHVibGlzaFJlcXVlc3QgKTtcblxucHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnN1YnNjcmliZShcImRpc3BsYXlBbGxcIiwgc3ViRGlzcGxheUFsbFJlcXVlc3QpO1xuXG4vKiBPYmplY3QgQ29uc3RydWN0b3IqL1xuZnVuY3Rpb24gT2JqZWN0Q29uc3RydWN0b3IoIC8qIHB1YlN1Yiwgb2JqQXJyICovKSB7XG4vKiAgIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLm9iakFyciA9IG9iakFycjsgKi9cbn1cbi8qIFxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7dGhpcy5vYmpBcnIub2JqSWRHZW4gKz0gMX07XG4gKi9cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24ob2JqKSB7XG4gIC8qIHRoaXMucHViU3ViLnB1Ymxpc2goXCJkaXNwbGF5XCIsIG9iaik7ICovXG4gIHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5wdWJsaXNoKFwicHVibGlzaFwiLCB7dHlwZTp0aGlzLnR5cGUsIG9ian0pXG59XG5cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24ob2JqKSB7XG4gIHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5wdWJsaXNoKFwiZGlzcGxheUFsbFwiLHt0eXBlOnRoaXMudHlwZSwgb2JqfSk7XG4gLyogIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB0aGlzLm9iakFyci5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhvYmplY3QpXG4gIH0pOyAqL1xufTtcblxuZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTsvKiBcbiAgdGhpcy5wdWJTdWIgPSBwdWJTdWJQcm9qZWN0cztcbiAgdGhpcy5vYmpBcnIgPSBwcm9qZWN0czsgKi8vKiBcbiAgdGhpcy5pZCA9IHRoaXMub2JqQXJyLm9iaklkR2VuICs9IDE7ICovXG4gIHRoaXMuaWQgPSBwcm9qZWN0cy5vYmpJZEdlbiArPSAxO1xuICB0aGlzLnR5cGUgPSBcInByb2plY3RcIjtcbn1cblxubGV0IHRlc3QgPSBuZXcgT2JqZWN0Q29uc3RydWN0b3IoKVxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuXG4vKiBQcm9qZWN0IENvbnN0cnVjdG9yICovXG4vKiBmdW5jdGlvbiBQcm9qZWN0Q29uc3RydWN0b3IodGl0bGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmlkID0gcHJvamVjdHMub2JqSWRHZW4gKz0gMTtcbn1cblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKG9iaikge1xuICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwicHJvamVjdFwiLCBvYmopO1xufTtcblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24gKG9iaikge1xuICBwdWJTdWJQcm9qZWN0cy5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHByb2plY3RzLnB1c2gob2JqKTtcbiAgcHJvamVjdHMub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xufTsgKi9cblxuLyogUFVCU1VCIE1PRFVMRSBGT1JNUyBhbmQgRElTUExBWSovXG5sZXQgcHViU3ViRm9ybXMgPSBwdWJTdWJGYWN0b3J5KCk7XG5cbi8qIE5vdGUgQ29uc3RydWN0b3IgKi9cblxuZnVuY3Rpb24gTm90ZUNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbn1cbk5vdGVDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgcHViU3ViRm9ybXMucHVibGlzaChcIm5vdGVcIiwgeyB0aXRsZTogdGhpcy50aXRsZSwgZGV0YWlsczogdGhpcy5kZXRhaWxzIH0pO1xufTtcblxuLyogVGFzayBDb25zdHJ1Y3RvciAqL1xuXG5sZXQgdGFza3MgPSBuZXcgT2JqZWN0QXJyQ2xhc3MoKTtcbmxldCBwdWJTdWJUYXNrcyA9IHB1YlN1YkZhY3RvcnkoKTtcbmxldCB0YXNrUmVtb3ZlciA9IG5ldyBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWJUYXNrcywgdGFza3MpO1xuXG5mdW5jdGlvbiBUYXNrQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyxcbiAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LFxuICB0aGlzLnR5cGUgPSBcInRhc2tcIjtcbiAgdGhpcy5pZCA9IHRhc2tzLm9iaklkR2VuICs9IDE7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSlcblxuXG4vKiBcbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzLFxuICB0aGlzLmRhdGUgPSBkYXRlLFxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gIHRoaXMucHJvamVjdCA9IHByb2plY3QsXG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IoXG4gICAgdGhpcy50aXRsZSxcbiAgICB0aGlzLmRldGFpbHMsXG4gICAgdGhpcy5kYXRlLFxuICAgIHRoaXMucHJpb3JpdHksXG4gICAgdGhpcy5wcm9qZWN0XG4gICk7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJ0YXNrXCIsIG9iaik7XG59OyAqL1xuXG4vKiBTdWJzY3JpYmVycyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJzY3JpYmVQcm9qZWN0KTtcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViU2VsZWN0UHJvamVjdElucHV0KTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcIm5vdGVcIiwgc3Vic2NyaWJlTm90ZSk7XG4vKiBwdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJ0YXNrXCIsIHN1YnNjcmliZVRhc2spO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwidGFza1wiLCBzdWJUYXNrTGlzdEl0ZW0pO1xuICovXG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YnNjcmliZVRhc2spO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJUYXNrTGlzdEl0ZW0pO1xucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12VGFza0Rpc3BsYXkpO1xuXG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZQcm9qZWN0RGlzcGxheSk7XG5wdWJTdWJQcm9qZWN0cy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJDbGVhclNlbGVjdE9wdGlvbnMpO1xuXG5cbmV4cG9ydCB7IE5vdGVDb25zdHJ1Y3RvciwgUHJvamVjdENvbnN0cnVjdG9yLCBUYXNrQ29uc3RydWN0b3IsIHByb2plY3RSZW1vdmVyLCB0YXNrUmVtb3ZlciB9O1xuIiwiaW1wb3J0IHttb2RhbH0gZnJvbSBcIi4vbW9kYWwvbW9kYWxcIjtcbmltcG9ydCB7ZGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheS9kaXNwbGF5XCJcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuLyogZGlzcGxheSBtb2RhbCBidXR0b24gKi9cbmNvbnN0IGRpc3BsYXlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kaXNwbGF5TW9kYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmRpc3BsYXlNb2RhbC50ZXh0Q29udGVudCA9IFwiK1wiOy8qIFxuZGlzcGxheU1vZGFsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uL2dlbmVyYWwvaW1hZ2VzL3N2Zy1wbHVzLnN2Z1wiKWApICovXG5kaXNwbGF5TW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX2Rpc3BsYXktYnRuXCIsXCJjLW1haW5fX2Rpc3BsYXktYnRuXCIgKTtcbmRpc3BsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKVxufSlcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNb2RhbCk7XG5tYWluRGl2LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuXG5leHBvcnQge21haW5EaXZ9IiwiaW1wb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVMYWJlbH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCJcbmltcG9ydCB7IE5vdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBub3RlVGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFwidGV4dFwiLCBcIm5vdGUtdGl0bGVcIiwgXCJub3RlLXRpdGxlXCIpO1xuY29uc3Qgbm90ZVRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlVGl0bGUsIFwiVGl0bGU6XCIgKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVUaXRsZUxhYmVsLCBub3RlVGl0bGUpO1xuXG5jb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xubm90ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3RlXCIpO1xuXG5jb25zdCBub3RlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlLCBcIkRldGFpbHNcIik7XG5hcHBlbmRMYWJlbElucHV0KG5vdGVGb3JtLCBub3RlTGFiZWwsIG5vdGUpXG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTsgLyogbWF5YmUgY2xlYXIgaW5zdGVhZCovXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOb3RlXCI7XG5ub3RlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4vKiBQVUJTVUIgKi9cblxuZnVuY3Rpb24gcHVibGlzaE5vdGUoKSB7ICBcbiAgbGV0IG9iaiA9IG5ldyBOb3RlQ29uc3RydWN0b3Iobm90ZVRpdGxlLnZhbHVlLCBub3RlLnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn0gXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHVibGlzaE5vdGUpXG5cbmV4cG9ydCB7bm90ZUZvcm19XG4iLCJcbmltcG9ydCB7Y3JlYXRlQmFzaWNJbnB1dCwgYXBwZW5kTGFiZWxJbnB1dCwgY3JlYXRlTGFiZWx9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiXG5pbXBvcnQgeyBQcm9qZWN0Q29uc3RydWN0b3IsfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBwcm9qZWN0ID0gY3JlYXRlQmFzaWNJbnB1dChcInRleHRcIiwgXCJwcm9qZWN0LXRpdGxlXCIsIFwicHJvamVjdFwiKTtcbmNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwocHJvamVjdCwgXCJUaXRsZTpcIiApO1xuYXBwZW5kTGFiZWxJbnB1dChwcm9qZWN0Rm9ybSwgbGFiZWwsIHByb2plY3QpO1xuXG4vKiBcInN1Ym1pdFwiIGJ1dHRvbiAqL1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7IFxuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBsZXQgb2JqID0gbmV3IFByb2plY3RDb25zdHJ1Y3Rvcihwcm9qZWN0LnZhbHVlKTtcbiAgb2JqLmRpc3BsYXlBbGwob2JqKTtcbn1cbmxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKFwiZ2VuZXJhbFwiKTtcbm9iai5kaXNwbGF5QWxsKG9iaik7XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RzKVxuXG5leHBvcnQge3Byb2plY3RGb3JtfVxuIiwiLyogVE8gRE8gRk9STSAqL1xuaW1wb3J0IHtjcmVhdGVCYXNpY0lucHV0LCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVMYWJlbH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCJcbmltcG9ydCB7VGFza0NvbnN0cnVjdG9yfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cblxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKVxuXG5sZXQgdGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFwidGV4dFwiLCBcInRpdGxlXCIsIFwidGl0bGVcIik7XG50aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlOiBHcm9jZXJpZXNcIilcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC0tdGV4dFwiKVxubGV0IHRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbCh0aXRsZSwgXCJUaXRsZVwiKTtcbnRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0aXRsZUxhYmVsLCB0aXRsZSlcblxubGV0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xudGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LS10ZXh0XCIsIFwiZm9ybV9faW5wdXQtLXRleHRBcmVhXCIsIFwiZm9ybS1pbnB1dFwiKVxuXG50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHQtYXJlYVwiKTtcbnRleHRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0ZXh0LWFyZWFcIik7XG50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjIgcG90YXRvZXNcIik7XG5cbmxldCB0ZXh0QXJlYUxhYmVsID0gY3JlYXRlTGFiZWwodGV4dEFyZWEsIFwiRGV0YWlsc1wiKTtcbnRleHRBcmVhTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIilcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRleHRBcmVhTGFiZWwsIHRleHRBcmVhKVxuXG5sZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubGV0IGRhdGUgPSBjcmVhdGVCYXNpY0lucHV0KFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJkYXRlXCIpO1xubGV0IGRhdGVMYWJlbD0gY3JlYXRlTGFiZWwoZGF0ZSwgXCJEdWUgZGF0ZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KGRpdiwgZGF0ZUxhYmVsLCBkYXRlKVxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuLyogU0VMRUNUIFBST0pFQ1QgKi9cbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdC1wcm9qZWN0XCIpO1xuc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcblxuLyogY2xlYXJzIHRoZSBzZWxlY3Qgb3B0aW9ucyBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBwcm9qZWN0IGRpc3BsYXkgaXMgY2xlYXJlZCAqL1xuZnVuY3Rpb24gc3ViQ2xlYXJTZWxlY3RPcHRpb25zKCkge1xuICB3aGlsZSAoc2VsZWN0UHJvamVjdC5maXJzdENoaWxkKSB7XG4gICAgc2VsZWN0UHJvamVjdC5yZW1vdmVDaGlsZChzZWxlY3RQcm9qZWN0Lmxhc3RDaGlsZCk7XG4gIH19XG5cbi8qIHVwZGF0ZXMgdGhlIHNlbGVjdCBvcHRpb25zIHdoZW4gbmV3IHByb2plY3RzIGFyZSBhZGRlZCAqL1xuZnVuY3Rpb24gc3ViU2VsZWN0UHJvamVjdElucHV0KG9iaikgeyBcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9iai50aXRsZSk7XG4gIG9wdGlvbi50ZXh0Q29udGVudD0gb2JqLnRpdGxlO1xuICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbn1cblxuY29uc3Qgc2VsZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzZWxlY3RQcm9qZWN0LCBcIlByb2plY3RcIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCBzZWxlY3RMYWJlbCwgc2VsZWN0UHJvamVjdCk7XG5cbi8qUkFESU8gQlVUVE9OUyovXG5sZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5sZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbmxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbmZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVSYWRpb0lucHV0KHByaW9yaXR5TGV2ZWwpIHsgXG4gIGxldCByYWRpbyA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJyYWRpb1wiLCBcInByaW9yaXR5XCIsIGBwcmlvcml0eS0ke3ByaW9yaXR5TGV2ZWx9YCk7XG4gIHJhZGlvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByaW9yaXR5TGV2ZWwpO1xuICByZXR1cm4gcmFkaW87XG59XG5cbmxldCBwcmlvcml0eUxvdyA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJsb3dcIik7XG5sZXQgcHJpb3JpdHlNZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIpO1xubGV0IHByaW9yaXR5SGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIpO1xuXG5mdW5jdGlvbiBhcHBlbmRSYWRpb0lucHV0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgbGV0IGxhYmVsID0gY3JlYXRlTGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfSk7XG59XG5cbmFwcGVuZFJhZGlvSW5wdXRzKGZpZWxkc2V0LCBbcHJpb3JpdHlMb3csIHByaW9yaXR5TWVkaXVtLCBwcmlvcml0eUhpZ2hdKTtcblxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG5sZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKHRpdGxlLnZhbHVlLCB0ZXh0QXJlYS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmFkaW8udmFsdWUsIHNlbGVjdFByb2plY3QudmFsdWUpO1xuICBvYmouZGlzcGxheUFsbChvYmopO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrcylcbi8qIFxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpjaGVja2VkXCIpO1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3Rvcih0aXRsZS52YWx1ZSwgdGV4dEFyZWEudmFsdWUsIGRhdGUudmFsdWUsIHJhZGlvLnZhbHVlLCBzZWxlY3RQcm9qZWN0LnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn0pXG4gKi9cbmV4cG9ydCB7dGFza0Zvcm0sIHN1YlNlbGVjdFByb2plY3RJbnB1dCwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zfTtcbiIsImxldCBzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlXCIpO1xuXG5sZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1RBU0snO1xuXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbmxldCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5PVEVcIjtcblxuc2lkZURpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbilcblxuZXhwb3J0IHtzaWRlRGl2LCB0YXNrQnV0dG9uLCBub3RlQnV0dG9uLCBwcm9qZWN0QnV0dG9ufSAiLCJpbXBvcnQgKiBhcyBzaWRlIGZyb20gXCIuL19fc2lkZS9tb2RhbF9fc2lkZVwiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIiBcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdFwiIFxuaW1wb3J0IHtub3RlRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1ub3RlXCJcblxubGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibWFpbl9fbW9kYWxcIik7XG5cbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjphYnNvbHV0ZVwiKSAvKiBoYXMgdG8gYmUgbW92ZWQgdG8gc2NzcyEhISAqL1xuY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbn0gXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vZGFsKVxuXG4vKiBzaWRlICovXG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlLnNpZGVEaXYpO1xuXG4vKiBmb3JtIG9uIGluaXRpYWwgbG9hZCAqL1xubGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fZm9ybVwiKVxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbi8qIHJlbW92ZSBmb3JtIGZ1bmMgKi9cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIHdoaWxlIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVzZXQoKVxuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKVxuICB9XG59XG5cbi8qIHNpZGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVycyAqL1xuc2lkZS50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbn0pXG5zaWRlLnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xufSlcbnNpZGUubm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG59KVxuXG5cbmV4cG9ydCB7bW9kYWx9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7ICovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiXG5pbXBvcnQge21haW5EaXZ9IGZyb20gXCIuL21haW4vbWFpblwiIFxuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9