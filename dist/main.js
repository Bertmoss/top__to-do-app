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
/* harmony export */   "subRmvTaskContainer": () => (/* binding */ subRmvTaskContainer),
/* harmony export */   "subscribeTask": () => (/* binding */ subscribeTask),
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
/* harmony import */ var _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main-pub-sub */ "./src/main/main-pub-sub.js");
/* harmony import */ var _general_general_js_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../general/general__js/_input */ "./src/general/general__js/_input.js");




const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden");

/* SORT BUTTON */
let sortDiv = document.createElement("div");
sortDiv.setAttribute(
  "style",
  "width: 50px, height:50px, border: 1px solid black"
);
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

const taskContainer = document.createElement("div");
taskDisplay.appendChild(taskContainer);

function createTable(obj, parent) {
  let table = document.createElement("table");
  for (const [key, value] of Object.entries(obj)) {
    if (key == "type" || key === "id" || key == "project") {
      /* not sure why I have type task in the first place */
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

  /*Have to create labels and hide them for accessibility ??*/

  editBtn.addEventListener("click", () => {
    let tableData = document.querySelectorAll(
      `[data-id="${obj.id}"] .table__td`
    );
    //let table = document.querySelector(`[data-id="${obj.id}"] table`) //Do I really need this?
    tableData.forEach(function (td) {
      let editInput;

      if (td.classList.contains("table__td--title")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)(
          "table__edit-input",
          "text",
          "title",
          "edit-title"
        );
        editInput.setAttribute("placeholder", obj.title);
      } else if (td.classList.contains("table__td--details")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createTextArea)(
          "table__edit-input",
          "details",
          "edit-details"
        );
        editInput.textContent = obj.details;
      } else if (td.classList.contains("table__td--date")) {
        editInput = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createBasicInput)(
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
        let low = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createRadioInput)("low", "edit-btn__input--radio");
        let medium = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createRadioInput)("medium", "edit-btn__input--radio");
        let high = (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.createRadioInput)("high", "edit-btn__input--radio");
        (0,_general_general_js_input__WEBPACK_IMPORTED_MODULE_1__.appendRadioInputs)(editInput, [low, medium, high]);
      }

      td.parentNode.replaceChild(editInput, td);
    });
    /* SUBMIT CHANGES BTN */
    let submitChangeBtn = document.createElement("button");
    submitChangeBtn.textContent = "Submit";
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
      console.log(_main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover);
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

RemoveConstructor.prototype.clearDisplay = function () {
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

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
    object.publish(object);
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

function ProjectConstructor(title) {
  this.title = title; /* 
  this.pubSub = pubSubProjects;
  this.objArr = projects; */ /* 
  this.id = this.objArr.objIdGen += 1; */
  this.id = projects.objIdGen += 1;
  this.type = "project";
}

let test = new ObjectConstructor();
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
  (this.title = title),
    (this.details = details),
    (this.date = date),
    (this.priority = priority),
    (this.project = project),
    (this.type = "task");
  this.id = tasks.objIdGen += 1;
}

TaskConstructor.prototype = Object.create(ObjectConstructor.prototype);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSwwQkFBMEI7QUFDWTtBQUNIOzs7QUFHbkM7O0FBRUEsaUJBQWlCLGtEQUFNOztBQUV2QixpQkFBaUIsK0NBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19zaWRlL2Rpc3BsYXlfX3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLXB1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19zaWRlL21vZGFsX19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVCYXNpY0lucHV0KGNsYXNzTmFtZSwgdHlwZSwgaW5wdXROYW1lLCBpZCkge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEoY2xhc3NOYW1lLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufSBcblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5wdXQsIHRleHQpIHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExhYmVsSW5wdXQoZm9ybSwgbGFiZWwsIGlucHV0KSB7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmFkaW9JbnB1dChwcmlvcml0eUxldmVsLCBjbGFzc05hbWUpIHtcbiAgbGV0IHJhZGlvID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICBjbGFzc05hbWUsXG4gICAgXCJyYWRpb1wiLFxuICAgIFwicHJpb3JpdHlcIixcbiAgICBgcHJpb3JpdHktJHtwcmlvcml0eUxldmVsfWBcbiAgKTtcbiAgcmFkaW8uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJpb3JpdHlMZXZlbCk7XG4gIHJldHVybiByYWRpbztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmFkaW9JbnB1dHMocGFyZW50LCBhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGxldCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGNyZWF0ZUxhYmVsLCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVSYWRpb0lucHV0LCBhcHBlbmRSYWRpb0lucHV0cywgY3JlYXRlVGV4dEFyZWF9IiwiXG5cbmZ1bmN0aW9uIHB1YlN1YkZhY3RvcnkoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0ge307XG5cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgcHVibGlzaCxcbiAgICBcbiAgfTtcbn1cblxuZXhwb3J0IHtwdWJTdWJGYWN0b3J5IH07XG4iLCJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fdGl0bGVcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiSnVzdCBEbyBJdFwiO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiLCBcImJvZHlfX2hlYWRlclwiKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuZXhwb3J0IHsgaGVhZGVyIH0gOyIsIlxuXG5sZXQgbm90ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm90ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG5cbmZ1bmN0aW9uIHN1YnNjcmliZU5vdGUob2JqKSB7XG4gIGxldCB0aXRsZU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRpdGxlTm90ZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQodGl0bGVOb3RlKTtcbiAgbGV0IGRldGFpbHNOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRldGFpbHNOb3RlLnRleHRDb250ZW50ID0gb2JqLmRldGFpbHM7XG4gIG5vdGVEaXNwbGF5LmFwcGVuZENoaWxkKGRldGFpbHNOb3RlKVxufVxuXG5cblxuXG5cblxuZXhwb3J0IHtzdWJzY3JpYmVOb3RlLCBub3RlRGlzcGxheX0iLCJpbXBvcnQgeyBwcm9qZWN0UmVtb3ZlciwgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuIFxuZnVuY3Rpb24gc3Vic2NyaWJlUHJvamVjdChvYmopIHtcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgXG4gIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RSZW1vdmVyLnJlbW92ZShvYmouaWQpO1xuICAgIHRhc2tSZW1vdmVyLnJlbW92ZUJ5UHJvamVjdChvYmopO1xuXG4gIH0pO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG5cbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChvYmoudGl0bGUsIFwidGFzay1saXN0XCIpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlByb2plY3REaXNwbGF5KCkge1xuICB3aGlsZSAocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5Lmxhc3RDaGlsZCk7XG4gIH1cbn1cbi8qIFJlbW92ZXMgVGFza3MgSXRlbXMgd2hlbiAqL1xuZnVuY3Rpb24gc3ViUm12VGFza3MoKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpXG4gIHRhc2tMaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgd2hpbGUgKGxpc3RJdGVtLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RJdGVtLnJlbW92ZUNoaWxkKGxpc3RJdGVtLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9IClcbn1cblxuICBcbmZ1bmN0aW9uIHN1YlRhc2tMaXN0SXRlbShvYmopIHtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9iai5wcm9qZWN0KTtcbiAgY29uc29sZS5sb2cob2JqLmlkKVxuICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRldGFpbHMudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwibGlzdC1pdGVtX19kZXRhaWxzXCIpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXRlLnRleHRDb250ZW50ID0gb2JqLmRhdGU7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiLCBcImxpc3QtaXRlbV9fZGF0ZVwiKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gb2JqLnByaW9yaXR5O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBwcm9qZWN0RGlzcGxheSxcbiAgc3ViVGFza0xpc3RJdGVtLFxuICBzdWJSbXZQcm9qZWN0RGlzcGxheSxcbiAgc3ViUm12VGFza3NcbiAgLyogZ2VuZXJhdGVQcm9qZWN0RGlzcGxheSAqL1xufTtcbiIsImltcG9ydCB7IHRhc2tSZW1vdmVyIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHsgcHJvamVjdFJlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge1xuICBjcmVhdGVSYWRpb0lucHV0LFxuICBhcHBlbmRSYWRpb0lucHV0cyxcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuXG5jb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcblxuLyogU09SVCBCVVRUT04gKi9cbmxldCBzb3J0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNvcnREaXYuc2V0QXR0cmlidXRlKFxuICBcInN0eWxlXCIsXG4gIFwid2lkdGg6IDUwcHgsIGhlaWdodDo1MHB4LCBib3JkZXI6IDFweCBzb2xpZCBibGFja1wiXG4pO1xubGV0IHNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xubGV0IHNvcnRQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwiXCIpXG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIgXCIpO1xuc29ydFBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJTb3J0XCI7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQbGFjZWhvbGRlcik7XG5cbmxldCBzb3J0UHJpb3JpdHlEZXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuc29ydFByaW9yaXR5RGVzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiTW9zdCBJbXBvcnRhbnRcIjtcbnNvcnRQcmlvcml0eURlc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtb3N0XCIpO1xuXG5sZXQgc29ydFByaW9yaXR5QXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuc29ydFByaW9yaXR5QXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJMZWFzdCBJbXBvcnRhbnRcIjtcbnNvcnRQcmlvcml0eUFzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxlYXN0XCIpXG5cbnNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuZGlzcGxheVNvcnRlZChzb3J0LnZhbHVlKTtcbiAgIFxufSk7XG5cbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5RGVzY2VuZGluZyk7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eUFzY2VuZGluZyk7XG5zb3J0RGl2LmFwcGVuZENoaWxkKHNvcnQpO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoc29ydERpdik7XG5cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKG9iaiwgcGFyZW50KSB7XG4gIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgIGlmIChrZXkgPT0gXCJ0eXBlXCIgfHwga2V5ID09PSBcImlkXCIgfHwga2V5ID09IFwicHJvamVjdFwiKSB7XG4gICAgICAvKiBub3Qgc3VyZSB3aHkgSSBoYXZlIHR5cGUgdGFzayBpbiB0aGUgZmlyc3QgcGxhY2UgKi9cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCByb3cgPSBjcmVhdGVSb3coa2V5LCB2YWx1ZSk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdyhrZXksIHZhbHVlKSB7XG4gIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgbGV0IHRhYmxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgdGFibGVIZWFkaW5nLnRleHRDb250ZW50ID0ga2V5O1xuICBsZXQgdGFibGVEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgYXNzaWduQ2xhc3Moa2V5LCB0YWJsZURhdGEpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZUhlYWRpbmcpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZURhdGEpO1xuICByZXR1cm4gdGFibGVSb3c7XG59XG5mdW5jdGlvbiBhc3NpZ25DbGFzcyhrZXksIGVsZW1lbnQpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tdGl0bGVcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGV0YWlsc1wiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1kZXRhaWxzXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRhdGVcIjpcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhYmxlX190ZC0tZGF0ZVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1wcmlvcml0eVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZVRhc2sob2JqKSB7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIC8qIERFTEVURSBCVVRUT04gKi9cbiAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkbHRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZGx0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza1JlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gIH0pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG5cbiAgLypFRElUIEJVVFRPTiovXG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgLypIYXZlIHRvIGNyZWF0ZSBsYWJlbHMgYW5kIGhpZGUgdGhlbSBmb3IgYWNjZXNzaWJpbGl0eSA/PyovXG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYFtkYXRhLWlkPVwiJHtvYmouaWR9XCJdIC50YWJsZV9fdGRgXG4gICAgKTtcbiAgICAvL2xldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRhYmxlYCkgLy9EbyBJIHJlYWxseSBuZWVkIHRoaXM/XG4gICAgdGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24gKHRkKSB7XG4gICAgICBsZXQgZWRpdElucHV0O1xuXG4gICAgICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS10aXRsZVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVCYXNpY0lucHV0KFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgICAgXCJlZGl0LXRpdGxlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai50aXRsZSk7XG4gICAgICB9IGVsc2UgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX190ZC0tZGV0YWlsc1wiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBjcmVhdGVUZXh0QXJlYShcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkZXRhaWxzXCIsXG4gICAgICAgICAgXCJlZGl0LWRldGFpbHNcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQudGV4dENvbnRlbnQgPSBvYmouZGV0YWlscztcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kYXRlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwiZWRpdC1kYXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG9iai5kYXRlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1wcmlvcml0eVwiKSkge1xuICAgICAgICBlZGl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gICAgICAgIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgICAgIGVkaXRJbnB1dC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuICAgICAgICBsZXQgbG93ID0gY3JlYXRlUmFkaW9JbnB1dChcImxvd1wiLCBcImVkaXQtYnRuX19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGxldCBtZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgbGV0IGhpZ2ggPSBjcmVhdGVSYWRpb0lucHV0KFwiaGlnaFwiLCBcImVkaXQtYnRuX19pbnB1dC0tcmFkaW9cIik7XG4gICAgICAgIGFwcGVuZFJhZGlvSW5wdXRzKGVkaXRJbnB1dCwgW2xvdywgbWVkaXVtLCBoaWdoXSk7XG4gICAgICB9XG5cbiAgICAgIHRkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGVkaXRJbnB1dCwgdGQpO1xuICAgIH0pO1xuICAgIC8qIFNVQk1JVCBDSEFOR0VTIEJUTiAqL1xuICAgIGxldCBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0Q2hhbmdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgZWRpdGVkSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fZWRpdC1pbnB1dFwiKTtcbiAgICAgIGVkaXRlZElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICBpbnB1dC50aXRsZSA9PSBcIlwiID8gb2JqLnRpdGxlIDogKG9iai50aXRsZSA9IGlucHV0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGV0YWlsc1wiKSB7XG4gICAgICAgICAgb2JqLmRldGFpbHMgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPT0gXCJcIiA/IG9iai5kYXRlIDogKG9iai5kYXRlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBlZGl0ZWRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZWRpdC1idG5fX2lucHV0LS1yYWRpbzpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBlZGl0ZWRQcmlvcml0eUlucHV0ID09IG51bGxcbiAgICAgICAgPyBvYmoucHJpb3JpdHlcbiAgICAgICAgOiAob2JqLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4ucmVtb3ZlKCk7XG4gICAgICB0YXNrUmVtb3Zlci5jbGVhckRpc3BsYXkoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tSZW1vdmVyKTtcbiAgICB9KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHN1Ym1pdENoYW5nZUJ0bik7XG4gIH0pO1xuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgdGFza0Rpdik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlRhc2tDb250YWluZXIoKSB7XG4gIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdWJzY3JpYmVUYXNrLCB0YXNrRGlzcGxheSwgc3ViUm12VGFza0NvbnRhaW5lciB9O1xuIiwiXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19uYXZcIilcbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5uYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXZfX2xpc3RcIiwgXCJjLW5hdl9fbGlzdFwiKVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbSh0ZXh0KSB7XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdC1pdGVtXCIsIFwiYy1uYXZfX2xpc3QtaXRlbVwiKVxuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gIHJldHVybiBsaXN0SXRlbTtcbn1cblxubmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpXG5cblxuXG5cbmV4cG9ydCB7bmF2LCBjcmVhdGVMaXN0SXRlbX1cbiIsImltcG9ydCAqIGFzIHNpZGUgZnJvbSBcIi4vX19zaWRlL2Rpc3BsYXlfX3NpZGVcIjtcblxuLyogRGlzcGxheSBDb250YWluZXJzICovXG5pbXBvcnQgeyB0YXNrRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFza1wiO1xuaW1wb3J0IHsgbm90ZURpc3BsYXkgfSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLW5vdGVcIjtcbmltcG9ydCB7IHByb2plY3REaXNwbGF5fSBmcm9tIFwiLi9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcblxuXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlTmF2LmFwcGVuZENoaWxkKHNpZGUubmF2KVxuXG5sZXQgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXJcIilcbmxldCBkaXNwbGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXNwbGF5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGVudFwiKVxuXG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChub3RlRGlzcGxheSk7XG5kaXNwbGF5Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGlzcGxheSk7XG5cbi8qIFNIT1VMRCBSRUZPUk1BVCBUSElTICovXG5cbmNvbnN0IGhvbWUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiSG9tZVwiKTtcbmNvbnN0IHByb2plY3QgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiUHJvamVjdHNcIik7XG5jb25zdCBub3RlID0gc2lkZS5jcmVhdGVMaXN0SXRlbShcIk5vdGVzXCIpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxubm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xufSk7XG5cblxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtX19kZXRhaWxzXCIpO1xuICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1pdGVtX19kYXRlXCIpO1xuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgXG59KTtcblxuZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGVudClcbmRpc3BsYXkuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XG5kaXNwbGF5LmFwcGVuZENoaWxkKGRpc3BsYXlDb250YWluZXIpO1xuXG5leHBvcnQgeyBkaXNwbGF5IH07XG4iLCJpbXBvcnQgeyBwdWJTdWJGYWN0b3J5IH0gZnJvbSBcIi4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvcHViLXN1YlwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90ZSB9IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVQcm9qZWN0LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrcyxcbn0gZnJvbSBcIi4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3RcIjtcbmltcG9ydCB7XG4gIHN1YnNjcmliZVRhc2ssXG4gIHN1YlJtdlRhc2tDb250YWluZXIsXG59IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQge1xuICBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsXG4gIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyxcbn0gZnJvbSBcIi4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrXCI7XG5cbi8qIE9CSkVDVCBDTEFTUyAqL1xuLyogaG9sZHMgYW4gYXJyYXkgb2YgYWxsIHRoZSBvYmplY3RzLiBUaGUgb2JqSWRHZW4gaXMgdXNlZCB0byBhc3NpZ24gdW5pcXVlIGlkcyB0byBlYWNoIG9iaiAqL1xuY2xhc3MgT2JqZWN0QXJyQ2xhc3Mge1xuICBvYmpBcnIgPSBbXTtcbiAgb2JqSWRHZW4gPSAwO1xuXG4gIGdldCBvYmpBcnIoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqQXJyO1xuICB9XG5cbiAgc2V0IG9iakFycihhcnIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwiTm90IGFuIGFycmF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMub2JqQXJyID0gYXJyKTtcbiAgfVxuXG4gIHB1c2gob2JqKSB7XG4gICAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5vYmpBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvKiBzb3J0QnlQcmlvcml0eSgpIHtcbiAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYi5jb3VudFByaW9yaXR5KCkgLSBhLmNvdW50UHJpb3JpdHkoKTtcbiAgICB9KTtcbiAgfSAqL1xufVxuY2xhc3MgVGFza09iamVjdEFyckNsYXNzIGV4dGVuZHMgT2JqZWN0QXJyQ2xhc3Mge1xuICBzb3J0QnlQcmlvcml0eSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBcIm1vc3RcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5jb3VudFByaW9yaXR5KCkgLSBhLmNvdW50UHJpb3JpdHkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gXCJsZWFzdFwiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmNvdW50UHJpb3JpdHkoKSAtIGIuY291bnRQcmlvcml0eSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59IFxuXG4vKiBSRU1PVkUgQ09OU1RSVUNUT1IgKi9cbi8qIHVzZWQgdG8gcmVtb3ZlIG9iamVjdHMgZnJvbSB0aGUgZGlzcGxheSBieSBtYXRjaGluZyB0aGUgZGF0YSBpbmRleCB0byB0aGUgaW5kZXggcHJvcGVydHkgaW4gZWFjaCBvYmplY3QgKi9cbi8qIFJFRkFDVE9SIFJFTU9WRSBDT05TVFJVQ1RPUiBJVCBFWFBPU0VTIFBVQlNVQiBhbmQgQ0xBU1NPQkogIGluc3RlYWQgb2YgaGVyZWRpdGFyeSB1c2UgYSBjb21wb3NpdGUgbW9kZWwuIENyZWF0ZSBkaWZmZXJlbnQgZnVuY3Rpb25zIHRoYXQgdGFrZSBwdWJTdWIvT2JqZWN0QXJyIGFzIGFuIGFyZ3VtZW50XG5hbmQgcHJvdG90eXBlIHRoZW0hKi9cblxuZnVuY3Rpb24gUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViLCBjbGFzc09iaikge1xuICB0aGlzLnB1YlN1YiA9IHB1YlN1YjtcbiAgdGhpcy5jbGFzc09iaiA9IGNsYXNzT2JqO1xufSAvKiBcblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn0gKi9cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZUJ5UHJvamVjdCA9IGZ1bmN0aW9uIChwcmpSbXYpIHtcbiAgbGV0IGluZGV4T2ZNYXRjaCA9IHRoaXMuY2xhc3NPYmoub2JqQXJyLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5wcm9qZWN0ID09PSBwcmpSbXYudGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuICB0aGlzLmNsYXNzT2JqLnJlbW92ZShpbmRleE9mTWF0Y2gpO1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xufTtcblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgbGV0IGluZGV4T2ZNYXRjaCA9IHRoaXMuY2xhc3NPYmoub2JqQXJyLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5pZCA9PT0gZGF0YUlkID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcbiAgdGhpcy5jbGFzc09iai5yZW1vdmUoaW5kZXhPZk1hdGNoKTtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jbGVhckRpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5jbGFzc09iai5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgfSk7XG59O1xuXG5SZW1vdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheVNvcnRlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRhc2tzLnNvcnRCeVByaW9yaXR5KHZhbHVlKTtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07XG5cbmxldCBwcm9qZWN0cyA9IG5ldyBPYmplY3RBcnJDbGFzcygpO1xuXG5sZXQgcHViU3ViUHJvamVjdHMgPSBwdWJTdWJGYWN0b3J5KCk7XG5sZXQgcHJvamVjdFJlbW92ZXIgPSBuZXcgUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViUHJvamVjdHMsIHByb2plY3RzKTtcblxubGV0IHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycyA9IHB1YlN1YkZhY3RvcnkoKTtcblxuLyogV0VJUkQgT0JKIG1ha2UgdGhpcyBpbnRvIHB1YlN1YiA/ICovXG5mdW5jdGlvbiBzdWJQdWJsaXNoUmVxdWVzdChvYmopIHtcbiAgbGV0IHB1YlN1YjtcbiAgaWYgKG9iai50eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgcHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJ0YXNrXCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJUYXNrcztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcImRpc3BsYXlcIiwgb2JqLm9iaik7XG59XG5cbmZ1bmN0aW9uIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KG9iaikge1xuICBsZXQgcHViU3ViO1xuICBsZXQgb2JqQXJyO1xuICBpZiAob2JqLnR5cGUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJQcm9qZWN0cztcbiAgICBvYmpBcnIgPSBwcm9qZWN0cztcbiAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInRhc2tcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlRhc2tzO1xuICAgIG9iakFyciA9IHRhc2tzO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIG9iakFyci5wdXNoKG9iai5vYmopO1xuICBjb25zb2xlLmxvZyhvYmpBcnIub2JqQXJyKTtcbiAgb2JqQXJyLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn1cblxucHViU3ViT2JqZWN0Q29uc3RydWN0b3JzLnN1YnNjcmliZShcInB1Ymxpc2hcIiwgc3ViUHVibGlzaFJlcXVlc3QpO1xuXG5wdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMuc3Vic2NyaWJlKFwiZGlzcGxheUFsbFwiLCBzdWJEaXNwbGF5QWxsUmVxdWVzdCk7XG5cbi8qIE9iamVjdCBDb25zdHJ1Y3RvciovXG5mdW5jdGlvbiBPYmplY3RDb25zdHJ1Y3RvcigvKiBwdWJTdWIsIG9iakFyciAqLykge1xuICAvKiAgIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLm9iakFyciA9IG9iakFycjsgKi9cbn1cbi8qIFxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7dGhpcy5vYmpBcnIub2JqSWRHZW4gKz0gMX07XG4gKi9cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKG9iaikge1xuICAvKiB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiZGlzcGxheVwiLCBvYmopOyAqL1xuICBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMucHVibGlzaChcInB1Ymxpc2hcIiwgeyB0eXBlOiB0aGlzLnR5cGUsIG9iaiB9KTtcbn07XG5cbk9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5QWxsID0gZnVuY3Rpb24gKG9iaikge1xuICBwdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMucHVibGlzaChcImRpc3BsYXlBbGxcIiwgeyB0eXBlOiB0aGlzLnR5cGUsIG9iaiB9KTtcbiAgLyogIHRoaXMucHViU3ViLnB1Ymxpc2goXCJjbGVhclwiLCB0cnVlKTtcbiAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB0aGlzLm9iakFyci5vYmpBcnIuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhvYmplY3QpXG4gIH0pOyAqL1xufTtcblxuZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTsgLyogXG4gIHRoaXMucHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIHRoaXMub2JqQXJyID0gcHJvamVjdHM7ICovIC8qIFxuICB0aGlzLmlkID0gdGhpcy5vYmpBcnIub2JqSWRHZW4gKz0gMTsgKi9cbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG4gIHRoaXMudHlwZSA9IFwicHJvamVjdFwiO1xufVxuXG5sZXQgdGVzdCA9IG5ldyBPYmplY3RDb25zdHJ1Y3RvcigpO1xuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuLyogUHJvamVjdCBDb25zdHJ1Y3RvciAqL1xuLyogZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG59XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcInByb2plY3RcIiwgb2JqKTtcbn07XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07ICovXG5cbi8qIFBVQlNVQiBNT0RVTEUgRk9STVMgYW5kIERJU1BMQVkqL1xubGV0IHB1YlN1YkZvcm1zID0gcHViU3ViRmFjdG9yeSgpO1xuXG4vKiBOb3RlIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIE5vdGVDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59XG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbn07XG5cbi8qIFRhc2sgQ29uc3RydWN0b3IgKi9cblxubGV0IHRhc2tzID0gbmV3IFRhc2tPYmplY3RBcnJDbGFzcygpO1xubGV0IHB1YlN1YlRhc2tzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHRhc2tSZW1vdmVyID0gbmV3IFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YlRhc2tzLCB0YXNrcyk7XG5cbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgKHRoaXMudGl0bGUgPSB0aXRsZSksXG4gICAgKHRoaXMuZGV0YWlscyA9IGRldGFpbHMpLFxuICAgICh0aGlzLmRhdGUgPSBkYXRlKSxcbiAgICAodGhpcy5wcmlvcml0eSA9IHByaW9yaXR5KSxcbiAgICAodGhpcy5wcm9qZWN0ID0gcHJvamVjdCksXG4gICAgKHRoaXMudHlwZSA9IFwidGFza1wiKTtcbiAgdGhpcy5pZCA9IHRhc2tzLm9iaklkR2VuICs9IDE7XG59XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY291bnRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0aGlzLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICByZXR1cm4gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICByZXR1cm4gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuLyogXG5mdW5jdGlvbiBUYXNrQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyxcbiAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LFxufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRoaXMudGl0bGUsXG4gICAgdGhpcy5kZXRhaWxzLFxuICAgIHRoaXMuZGF0ZSxcbiAgICB0aGlzLnByaW9yaXR5LFxuICAgIHRoaXMucHJvamVjdFxuICApO1xuICBwdWJTdWJGb3Jtcy5wdWJsaXNoKFwidGFza1wiLCBvYmopO1xufTsgKi9cblxuLyogU3Vic2NyaWJlcnMgKi9cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlUHJvamVjdCk7XG4vKiBcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViUHJvamVjdERpc3BsYXkpOyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwibm90ZVwiLCBzdWJzY3JpYmVOb3RlKTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInRhc2tcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJ0YXNrXCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5cbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZUYXNrQ29udGFpbmVyKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlRhc2tzKTtcbi8qIFxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIixzdWJSbXZQcm9qZWN0RGlzcGxheSkgKi9cblxuLyogXG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZQcm9qZWN0RGlzcGxheSkgLyogPz8gKi9cblxucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpO1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zKTtcblxuZXhwb3J0IHtcbiAgTm90ZUNvbnN0cnVjdG9yLFxuICBQcm9qZWN0Q29uc3RydWN0b3IsXG4gIFRhc2tDb25zdHJ1Y3RvcixcbiAgcHJvamVjdFJlbW92ZXIsXG4gIHRhc2tSZW1vdmVyLFxufTtcbiIsImltcG9ydCB7bW9kYWx9IGZyb20gXCIuL21vZGFsL21vZGFsXCI7XG5pbXBvcnQge2Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXkvZGlzcGxheVwiXG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbm1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbi8qIGRpc3BsYXkgbW9kYWwgYnV0dG9uICovXG5jb25zdCBkaXNwbGF5TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGlzcGxheU1vZGFsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kaXNwbGF5TW9kYWwudGV4dENvbnRlbnQgPSBcIitcIjsvKiBcbmRpc3BsYXlNb2RhbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi9nZW5lcmFsL2ltYWdlcy9zdmctcGx1cy5zdmdcIilgKSAqL1xuZGlzcGxheU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtYWluX19kaXNwbGF5LWJ0blwiLFwiYy1tYWluX19kaXNwbGF5LWJ0blwiICk7XG5kaXNwbGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5fX21vZGFsLS1oaWRkZW5cIilcbn0pXG5tYWluRGl2LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5TW9kYWwpO1xubWFpbkRpdi5hcHBlbmRDaGlsZChtb2RhbCk7XG5cblxuZXhwb3J0IHttYWluRGl2fSIsImltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9faW5wdXRcIjtcbmltcG9ydCB7IE5vdGVDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi9tYWluLXB1Yi1zdWJcIjtcblxuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBub3RlVGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFxuICBcImZvcm1fX2lucHV0XCIsXG4gIFwidGV4dFwiLFxuICBcIm5vdGUtdGl0bGVcIixcbiAgXCJub3RlLXRpdGxlXCJcbik7XG5jb25zdCBub3RlVGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGVUaXRsZSwgXCJUaXRsZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KG5vdGVGb3JtLCBub3RlVGl0bGVMYWJlbCwgbm90ZVRpdGxlKTtcblxuY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3RlXCIpO1xubm90ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZVwiKTtcblxuY29uc3Qgbm90ZUxhYmVsID0gY3JlYXRlTGFiZWwobm90ZSwgXCJEZXRhaWxzXCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZUxhYmVsLCBub3RlKTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpOyAvKiBtYXliZSBjbGVhciBpbnN0ZWFkKi9cbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIE5vdGVcIjtcbm5vdGVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbi8qIFBVQlNVQiAqL1xuXG5mdW5jdGlvbiBwdWJsaXNoTm90ZSgpIHtcbiAgbGV0IG9iaiA9IG5ldyBOb3RlQ29uc3RydWN0b3Iobm90ZVRpdGxlLnZhbHVlLCBub3RlLnZhbHVlKTtcbiAgb2JqLnB1Ymxpc2goKTtcbn1cblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwdWJsaXNoTm90ZSk7XG5cbmV4cG9ydCB7IG5vdGVGb3JtIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBQcm9qZWN0Q29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8qIGlucHV0cyAqL1xuY29uc3QgcHJvamVjdCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gIFwiZm9ybV9faW5wdXRcIixcbiAgXCJ0ZXh0XCIsXG4gIFwicHJvamVjdC10aXRsZVwiLFxuICBcInByb2plY3RcIlxuKTtcbmNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwocHJvamVjdCwgXCJUaXRsZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KHByb2plY3RGb3JtLCBsYWJlbCwgcHJvamVjdCk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcbnByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgbGV0IG9iaiA9IG5ldyBQcm9qZWN0Q29uc3RydWN0b3IocHJvamVjdC52YWx1ZSk7XG4gIG9iai5kaXNwbGF5QWxsKG9iaik7XG59XG5sZXQgb2JqID0gbmV3IFByb2plY3RDb25zdHJ1Y3RvcihcImdlbmVyYWxcIik7XG5vYmouZGlzcGxheUFsbChvYmopO1xuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQcm9qZWN0cyk7XG5cbmV4cG9ydCB7IHByb2plY3RGb3JtIH07XG4iLCIvKiBUTyBETyBGT1JNICovXG5pbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlUmFkaW9JbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGFwcGVuZFJhZGlvSW5wdXRzXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgVGFza0NvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbnRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuXG5sZXQgdGl0bGUgPSBjcmVhdGVCYXNpY0lucHV0KFwiZm9ybV9faW5wdXRcIiwgXCJ0ZXh0XCIsIFwidGl0bGVcIiwgXCJ0aXRsZVwiKTtcbnRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGU6IEdyb2Nlcmllc1wiKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC0tdGV4dFwiKTtcbmxldCB0aXRsZUxhYmVsID0gY3JlYXRlTGFiZWwodGl0bGUsIFwiVGl0bGVcIik7XG50aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbC0taGlkZGVuXCIpO1xuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgdGl0bGVMYWJlbCwgdGl0bGUpO1xuXG5cbmxldCB0ZXh0QXJlYSA9IGNyZWF0ZVRleHRBcmVhKFwiZm9ybV9faW5wdXQtLXRleHRBcmVhXCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0QXJlYVwiKVxudGV4dEFyZWEuY2xhc3NMaXN0LmFkZCggLyogYXJlIHRoZXNlIG5lY2Vzc2FyeT8/ICovXG4gIFwiZm9ybV9faW5wdXQtLXRleHRcIixcbiAgXCJmb3JtLWlucHV0XCJcbik7XG50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjIgcG90YXRvZXNcIik7XG5cbmxldCB0ZXh0QXJlYUxhYmVsID0gY3JlYXRlTGFiZWwodGV4dEFyZWEsIFwiRGV0YWlsc1wiKTtcbnRleHRBcmVhTGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcm1fX2xhYmVsLS1oaWRkZW5cIik7XG5hcHBlbmRMYWJlbElucHV0KHRhc2tGb3JtLCB0ZXh0QXJlYUxhYmVsLCB0ZXh0QXJlYSk7XG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IGRhdGUgPSBjcmVhdGVCYXNpY0lucHV0KFwiZm9ybV9faW5wdXRcIiwgXCJkYXRlXCIsIFwiZGF0ZVwiLCBcImRhdGVcIik7XG5sZXQgZGF0ZUxhYmVsID0gY3JlYXRlTGFiZWwoZGF0ZSwgXCJEdWUgZGF0ZTpcIik7XG5hcHBlbmRMYWJlbElucHV0KGRpdiwgZGF0ZUxhYmVsLCBkYXRlKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGRpdik7XG5cbi8qIFNFTEVDVCBQUk9KRUNUICovXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3QtcHJvamVjdFwiKTtcbnNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RcIik7XG5cbi8qIGNsZWFycyB0aGUgc2VsZWN0IG9wdGlvbnMgYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgcHJvamVjdCBkaXNwbGF5IGlzIGNsZWFyZWQgKi9cbmZ1bmN0aW9uIHN1YkNsZWFyU2VsZWN0T3B0aW9ucygpIHtcbiAgd2hpbGUgKHNlbGVjdFByb2plY3QuZmlyc3RDaGlsZCkge1xuICAgIHNlbGVjdFByb2plY3QucmVtb3ZlQ2hpbGQoc2VsZWN0UHJvamVjdC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8qIHVwZGF0ZXMgdGhlIHNlbGVjdCBvcHRpb25zIHdoZW4gbmV3IHByb2plY3RzIGFyZSBhZGRlZCAqL1xuZnVuY3Rpb24gc3ViU2VsZWN0UHJvamVjdElucHV0KG9iaikge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgb2JqLnRpdGxlKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59XG5cbmNvbnN0IHNlbGVjdExhYmVsID0gY3JlYXRlTGFiZWwoc2VsZWN0UHJvamVjdCwgXCJQcm9qZWN0XCIpO1xuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgc2VsZWN0TGFiZWwsIHNlbGVjdFByb2plY3QpO1xuXG4vKlJBRElPIEJVVFRPTlMqL1xubGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xubGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG5sZWdlbmQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG5maWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG5cbmxldCBwcmlvcml0eUxvdyA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJsb3dcIiwgXCJmb3JtX19pbnB1dFwiKTtcbmxldCBwcmlvcml0eU1lZGl1bSA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJtZWRpdW1cIiwgXCJmb3JtX19pbnB1dFwiKTtcbmxldCBwcmlvcml0eUhpZ2ggPSBjcmVhdGVSYWRpb0lucHV0KFwiaGlnaFwiLCBcImZvcm1fX2lucHV0XCIpO1xuXG5cblxuYXBwZW5kUmFkaW9JbnB1dHMoZmllbGRzZXQsIFtwcmlvcml0eUxvdywgcHJpb3JpdHlNZWRpdW0sIHByaW9yaXR5SGlnaF0pO1xuXG50YXNrRm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIjtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRpdGxlLnZhbHVlLFxuICAgIHRleHRBcmVhLnZhbHVlLFxuICAgIGRhdGUudmFsdWUsXG4gICAgcmFkaW8udmFsdWUsXG4gICAgc2VsZWN0UHJvamVjdC52YWx1ZVxuICApO1xuICBvYmouZGlzcGxheUFsbChvYmopO1xufVxuXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUYXNrcyk7XG4vKiBcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgcmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcbiAgbGV0IG9iaiA9IG5ldyBUYXNrQ29uc3RydWN0b3IodGl0bGUudmFsdWUsIHRleHRBcmVhLnZhbHVlLCBkYXRlLnZhbHVlLCByYWRpby52YWx1ZSwgc2VsZWN0UHJvamVjdC52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKCk7XG59KVxuICovXG5leHBvcnQgeyB0YXNrRm9ybSwgc3ViU2VsZWN0UHJvamVjdElucHV0LCBzdWJDbGVhclNlbGVjdE9wdGlvbnMgfTtcbiIsImxldCBzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVEaXYuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19zaWRlXCIpO1xuXG5sZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG50YXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1RBU0snO1xuXG5sZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5wcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQUk9KRUNUXCI7XG5cbmxldCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5PVEVcIjtcblxuc2lkZURpdi5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pXG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbilcblxuZXhwb3J0IHtzaWRlRGl2LCB0YXNrQnV0dG9uLCBub3RlQnV0dG9uLCBwcm9qZWN0QnV0dG9ufSAiLCJpbXBvcnQgKiBhcyBzaWRlIGZyb20gXCIuL19fc2lkZS9tb2RhbF9fc2lkZVwiXG5pbXBvcnQge3Rhc2tGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXRhc2tcIiBcbmltcG9ydCB7cHJvamVjdEZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tcHJvamVjdFwiIFxuaW1wb3J0IHtub3RlRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS1ub3RlXCJcblxubGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwibWFpbl9fbW9kYWxcIik7XG5cbmxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjphYnNvbHV0ZVwiKSAvKiBoYXMgdG8gYmUgbW92ZWQgdG8gc2NzcyEhISAqL1xuY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcInhcIjtcbm1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fbW9kYWwtLWhpZGRlblwiKTtcbn0gXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZU1vZGFsKVxuXG4vKiBzaWRlICovXG5tb2RhbC5hcHBlbmRDaGlsZChzaWRlLnNpZGVEaXYpO1xuXG4vKiBmb3JtIG9uIGluaXRpYWwgbG9hZCAqL1xubGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fZm9ybVwiKVxubW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbi8qIHJlbW92ZSBmb3JtIGZ1bmMgKi9cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gIHdoaWxlIChmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JtQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVzZXQoKVxuICAgIGZvcm1Db250YWluZXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKVxuICB9XG59XG5cbi8qIHNpZGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVycyAqL1xuc2lkZS50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbn0pXG5zaWRlLnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xufSlcbnNpZGUubm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG59KVxuXG5cbmV4cG9ydCB7bW9kYWx9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7ICovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiXG5pbXBvcnQge21haW5EaXZ9IGZyb20gXCIuL21haW4vbWFpblwiIFxuXG5cbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9