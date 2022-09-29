/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

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
  return alertDiv;
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
    } else if (key == "date") {
      if (value == "") {
        let row = createRow(key, value)
        table.appendChild(row);  
      } else {
      let date = value.toISOString().split("T")[0];
      date = date.split("-").reverse().join("-");  
      let row = createRow(key, date)
      table.appendChild(row);
      }  
    } else {
      let row = createRow(key, value);
      table.appendChild(row);
    }
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
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");







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
        let alert = (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_3__.createAlert)("There seem to be some unfinished tasks in this project. Are you sure you would like to delete it?");
        let yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", () => {
          _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);
          _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeByProject(obj);
          alert.remove();
        })
        alert.appendChild(yesBtn);
        let noBtn = document.createElement("button");
        noBtn.textContent = "No";
        noBtn.addEventListener("click", () => {
          alert.remove();
        })
        alert.appendChild(noBtn);
      } else {
        _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.projectRemover.remove(obj.id);
        _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.removeByProject(obj);
      }
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

let sortDateAscending = document.createElement("option");
sortDateAscending.textContent = "Date (Ascending)"
sortDateAscending.setAttribute("value", "date-ascending");

let sortDateDescending = document.createElement("option");
sortDateDescending.textContent = "Date (Descending)"
sortDateDescending.setAttribute("value", "date-descending");


sort.addEventListener("click", () => {
  _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.displaySorted(sort.value);
   
});

sort.appendChild(sortPriorityDescending);
sort.appendChild(sortPriorityAscending);
sort.appendChild(sortDateAscending)
sort.appendChild(sortDateDescending);
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

function priorityColorSwitch(element, obj) {
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
  taskDiv.setAttribute("data-date", obj.date);
  priorityColorSwitch(taskDiv, obj)
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
      _main_pub_sub__WEBPACK_IMPORTED_MODULE_0__.taskRemover.clearDisplay();
    });
    taskDiv.appendChild(submitChangeBtn);
  });

  taskDiv.appendChild(editBtn);
  (0,_general_general_js_table__WEBPACK_IMPORTED_MODULE_1__.createTable)(obj, taskDiv);
  if (sort.value == "date-ascending") {
    if (taskDiv.getAttribute("data-date")== "" ) {
      let noDateDiv = document.querySelector(".task-container__div--no-date");
      if (!noDateDiv) { 
        noDateDiv = document.createElement("div");
        noDateDiv.setAttribute("style", "background-color: pink");
        noDateDiv.classList.add("task-container__div--no-date")
        let noDateHeading = document.createElement("h1");
        noDateHeading.textContent = "Undated";
        noDateDiv.appendChild(noDateHeading);
      } //continue adding conditions here for today and for this week and for upcoming
      noDateDiv.appendChild(taskDiv);
      return taskContainer.appendChild(noDateDiv);
    } else {
      return taskContainer.appendChild(taskDiv);
    }
  }
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
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
class TaskObjectArrClass extends ObjectArrClass {
  customSort(value) {
    if (value == "most") {
      this.objArr.sort(function (a, b) {
        return b.countPriority() - a.countPriority();
      });
    } else if (value == "least") {
      this.objArr.sort(function (a, b) {
        return a.countPriority() - b.countPriority();
      });
    } else if (value == "date-ascending") {
      this.objArr.sort(function (a,b) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(a.date, b.date)
      });
    }  else if (value == "date-descending") {
      this.objArr.sort(function (a,b) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(b.date, a.date)
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
  tasks.customSort(value);
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
/* harmony import */ var _general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../general/general__js/_alert */ "./src/general/general__js/_alert.js");




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
  if (!project.value) {
    (0,_general_general_js_alert__WEBPACK_IMPORTED_MODULE_2__.createAlert)("Please provide a name for your project!")
  } else {
    let obj = new _main_pub_sub__WEBPACK_IMPORTED_MODULE_1__.ProjectConstructor(project.value);
    obj.displayAll(obj);
  }
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




/* 
format(new Date(2014, 1, 11), "yyyy-MM-dd"); */


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

 
function checkDate() {
  return (!date.value ) ? "" : new Date(date.value)
}

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
    checkDate(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSwwQkFBMEI7QUFDWTtBQUNIOzs7QUFHbkM7O0FBRUEsaUJBQWlCLGtEQUFNOztBQUV2QixpQkFBaUIsK0NBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dC5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZS5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vZGlzcGxheS9fX2NvbnRhaW5lci9kaXNwbGF5X19jb250YWluZXItLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tdGFzay5qcyIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9tYWluL2Rpc3BsYXkvX19zaWRlL2Rpc3BsYXlfX3NpZGUuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9kaXNwbGF5L2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLXB1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3QvLi9zcmMvbWFpbi9tYWluLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1ub3RlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvX19zaWRlL21vZGFsX19zaWRlLmpzIiwid2VicGFjazovL3RvcF90by1kby1saXN0Ly4vc3JjL21haW4vbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJmdW5jdGlvbiBjcmVhdGVBbGVydCh0ZXh0KSB7XG4gIGxldCBhbGVydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgYWxlcnREaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjogZml4ZWQ7IHRvcDogMjUwcHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDIwMHB4OyAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlIFwiICk7XG5cbiAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWxlcnREaXYucmVtb3ZlKCk7XG4gIH0pXG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgbGV0IGFsZXJ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhbGVydFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBhbGVydERpdi5hcHBlbmRDaGlsZChhbGVydFRleHQpXG4gIFxuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGFsZXJ0RGl2KTtcbiAgcmV0dXJuIGFsZXJ0RGl2O1xufVxuZXhwb3J0IHtjcmVhdGVBbGVydH0iLCJmdW5jdGlvbiBjcmVhdGVCYXNpY0lucHV0KGNsYXNzTmFtZSwgdHlwZSwgaW5wdXROYW1lLCBpZCkge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpbnB1dE5hbWUpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEoY2xhc3NOYW1lLCBpbnB1dE5hbWUsIGlkKSB7XG4gIGxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlucHV0TmFtZSk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufSBcblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaW5wdXQsIHRleHQpIHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExhYmVsSW5wdXQoZm9ybSwgbGFiZWwsIGlucHV0KSB7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmFkaW9JbnB1dChwcmlvcml0eUxldmVsLCBjbGFzc05hbWUpIHtcbiAgbGV0IHJhZGlvID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICBjbGFzc05hbWUsXG4gICAgXCJyYWRpb1wiLFxuICAgIFwicHJpb3JpdHlcIixcbiAgICBgcHJpb3JpdHktJHtwcmlvcml0eUxldmVsfWBcbiAgKTtcbiAgcmFkaW8uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJpb3JpdHlMZXZlbCk7XG4gIHJldHVybiByYWRpbztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmFkaW9JbnB1dHMocGFyZW50LCBhcnJheSkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGxldCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZUJhc2ljSW5wdXQsIGNyZWF0ZUxhYmVsLCBhcHBlbmRMYWJlbElucHV0LCBjcmVhdGVSYWRpb0lucHV0LCBhcHBlbmRSYWRpb0lucHV0cywgY3JlYXRlVGV4dEFyZWF9IiwiZnVuY3Rpb24gY3JlYXRlVGFibGUob2JqLCBwYXJlbnQpIHtcbiAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgaWYgKGtleSA9PSBcInR5cGVcIiB8fCBrZXkgPT09IFwiaWRcIiB8fCBrZXkgPT0gXCJwcm9qZWN0XCIgfHwga2V5ID09IFwic3RhdHVzXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiZGF0ZVwiKSB7XG4gICAgICBpZiAodmFsdWUgPT0gXCJcIikge1xuICAgICAgICBsZXQgcm93ID0gY3JlYXRlUm93KGtleSwgdmFsdWUpXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7ICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGF0ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgZGF0ZSA9IGRhdGUuc3BsaXQoXCItXCIpLnJldmVyc2UoKS5qb2luKFwiLVwiKTsgIFxuICAgICAgbGV0IHJvdyA9IGNyZWF0ZVJvdyhrZXksIGRhdGUpXG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgfSAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByb3cgPSBjcmVhdGVSb3coa2V5LCB2YWx1ZSk7XG4gICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRhYmxlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93KGtleSwgdmFsdWUpIHtcbiAgbGV0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBsZXQgdGFibGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICB0YWJsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBrZXk7XG4gIGxldCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICBhc3NpZ25DbGFzcyhrZXksIHRhYmxlRGF0YSk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGluZyk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlRGF0YSk7XG4gIHJldHVybiB0YWJsZVJvdztcbn1cbmZ1bmN0aW9uIGFzc2lnbkNsYXNzKGtleSwgZWxlbWVudCkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS10aXRsZVwiLCBcInRhYmxlX190ZFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkZXRhaWxzXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLWRldGFpbHNcIiwgXCJ0YWJsZV9fdGRcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3RkLS1kYXRlXCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIsIFwidGFibGVfX3RkXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFibGUsIH07IiwiXG5cbmZ1bmN0aW9uIHB1YlN1YkZhY3RvcnkoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0ge307XG5cbiAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5sZW5ndGggLSAxO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmUsXG4gICAgcHVibGlzaCxcbiAgICBcbiAgfTtcbn1cblxuZXhwb3J0IHtwdWJTdWJGYWN0b3J5IH07XG4iLCJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fdGl0bGVcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiSnVzdCBEbyBJdFwiO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiLCBcImJvZHlfX2hlYWRlclwiKTtcblxuaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuZXhwb3J0IHsgaGVhZGVyIH0gOyIsIlxuXG5sZXQgbm90ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm90ZURpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci1ub3RlLS1oaWRkZW5cIik7XG5cbmZ1bmN0aW9uIHN1YnNjcmliZU5vdGUob2JqKSB7XG4gIGxldCB0aXRsZU5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRpdGxlTm90ZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgbm90ZURpc3BsYXkuYXBwZW5kQ2hpbGQodGl0bGVOb3RlKTtcbiAgbGV0IGRldGFpbHNOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRldGFpbHNOb3RlLnRleHRDb250ZW50ID0gb2JqLmRldGFpbHM7XG4gIG5vdGVEaXNwbGF5LmFwcGVuZENoaWxkKGRldGFpbHNOb3RlKVxufVxuXG5cblxuXG5cblxuZXhwb3J0IHtzdWJzY3JpYmVOb3RlLCBub3RlRGlzcGxheX0iLCJpbXBvcnQgeyBwcm9qZWN0UmVtb3ZlciwgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVCYXNpY0lucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGVydCB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19hbGVydFwiO1xuXG5cbmNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb2plY3REaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItcHJvamVjdC0taGlkZGVuXCIpO1xuIFxuZnVuY3Rpb24gc3Vic2NyaWJlUHJvamVjdChvYmopIHtcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgb2JqLmlkKTtcbiAgLyogZGVsZXRlIGJ1dHRvbiAqL1xuICBpZiAob2JqLmlkICE9PSAxKSB7IC8vZXhlbXB0aW9uIGZvciB0aGUgZ2VuZXJhbCBwcm9qZWN0XG4gICAgbGV0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgZGx0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7IFxuICAgIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG9iai50YXNrSWRBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgYWxlcnQgPSBjcmVhdGVBbGVydChcIlRoZXJlIHNlZW0gdG8gYmUgc29tZSB1bmZpbmlzaGVkIHRhc2tzIGluIHRoaXMgcHJvamVjdC4gQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSBpdD9cIik7XG4gICAgICAgIGxldCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICAgICAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0UmVtb3Zlci5yZW1vdmUob2JqLmlkKTtcbiAgICAgICAgICB0YXNrUmVtb3Zlci5yZW1vdmVCeVByb2plY3Qob2JqKTtcbiAgICAgICAgICBhbGVydC5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgICAgICAgbGV0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbm9CdG4udGV4dENvbnRlbnQgPSBcIk5vXCI7XG4gICAgICAgIG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RSZW1vdmVyLnJlbW92ZShvYmouaWQpO1xuICAgICAgICB0YXNrUmVtb3Zlci5yZW1vdmVCeVByb2plY3Qob2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRsdEJ0bik7XG4gIH1cbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChvYmoudGl0bGUsIFwidGFzay1saXN0XCIpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlByb2plY3REaXNwbGF5KCkge1xuICB3aGlsZSAocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuXG5cbi8qIFJlbW92ZXMgVGFza3MgSXRlbXMgd2hlbiAqL1xuZnVuY3Rpb24gc3ViUm12VGFza3MoKSB7XG4gIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpXG4gIHRhc2tMaXN0LmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgd2hpbGUgKGxpc3RJdGVtLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RJdGVtLnJlbW92ZUNoaWxkKGxpc3RJdGVtLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9IClcbn1cblxuICBcbmZ1bmN0aW9uIHN1YlRhc2tMaXN0SXRlbShvYmopIHtcbiAgbGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIG9iai5wcm9qZWN0KTtcbiAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuXG4gIC8qIEZpbmlzaGVkIGNoZWNrYm94ICovXG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInByb2plY3QtZGl2X19kb25lLWlucHV0XCIsIFwiY2hlY2tib3hcIiwgXCJjb21wbGV0ZS1pbnB1dFwiLCBcImNvbXBsZXRlLWlucHV0XCIpO1xuICBcbiAgXG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1saS1pZFwiLCBvYmouaWQpXG4gIGNvbXBsZXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIHRhc2tSZW1vdmVyLmNvbXBsZXRlKG9iai5pZCk7XG4gICAgKG9iai5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IHRhc2tSZW1vdmVyLnJlbW92ZVRhc2tGcm9tUHJvamVjdElkQXJyKG9iaik6IG9iai5wdXNoSWQoKSA7ICBcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgbGlbZGF0YS1saS1pZCA9IFwiJHtvYmouaWR9XCJdIHRoLGxpW2RhdGEtbGktaWQgPSBcIiR7b2JqLmlkfVwiXSB0ZGApO1xuICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICB9KVxuICB9KVxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcbiAgY3JlYXRlVGFibGUob2JqLCBsaXN0SXRlbSk7XG4gIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGhpZGRlblJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBsaVtkYXRhLWxpLWlkID0gXCIke29iai5pZH1cIl0gdHI6bm90KDpmaXJzdC1jaGlsZClgKTtcbiAgICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSlcbiAgIFxuICB9KVxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmV4cG9ydCB7XG4gIHN1YnNjcmliZVByb2plY3QsXG4gIHByb2plY3REaXNwbGF5LFxuICBzdWJUYXNrTGlzdEl0ZW0sXG4gIHN1YlJtdlByb2plY3REaXNwbGF5LFxuICBzdWJSbXZUYXNrc1xuICAvKiBnZW5lcmF0ZVByb2plY3REaXNwbGF5ICovXG59O1xuIiwiaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZSB9IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL190YWJsZVwiO1xuaW1wb3J0IHsgcHJvamVjdFJlbW92ZXIgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge1xuICBjcmVhdGVSYWRpb0lucHV0LFxuICBhcHBlbmRSYWRpb0lucHV0cyxcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuXG5jb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXRhc2stLWhpZGRlblwiKTtcblxuLyogU09SVCBCVVRUT04gKi9cbi8qIE5FRUQgVE8gQUREIEEgU09SVCBCWSBEQVRFIE9QVElPTiAqL1xubGV0IHNvcnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGV0IHNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xubGV0IHNvcnRQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcIlwiKTtcbnNvcnRQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLFwiXCIpXG5zb3J0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIgXCIpO1xuc29ydFBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJTb3J0XCI7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQbGFjZWhvbGRlcik7XG5cbmxldCBzb3J0UHJpb3JpdHlEZXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuc29ydFByaW9yaXR5RGVzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiTW9zdCBJbXBvcnRhbnRcIjtcbnNvcnRQcmlvcml0eURlc2NlbmRpbmcuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtb3N0XCIpO1xuXG5sZXQgc29ydFByaW9yaXR5QXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuc29ydFByaW9yaXR5QXNjZW5kaW5nLnRleHRDb250ZW50ID0gXCJMZWFzdCBJbXBvcnRhbnRcIjtcbnNvcnRQcmlvcml0eUFzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxlYXN0XCIpXG5cbmxldCBzb3J0RGF0ZUFzY2VuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zb3J0RGF0ZUFzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiRGF0ZSAoQXNjZW5kaW5nKVwiXG5zb3J0RGF0ZUFzY2VuZGluZy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRhdGUtYXNjZW5kaW5nXCIpO1xuXG5sZXQgc29ydERhdGVEZXNjZW5kaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbnNvcnREYXRlRGVzY2VuZGluZy50ZXh0Q29udGVudCA9IFwiRGF0ZSAoRGVzY2VuZGluZylcIlxuc29ydERhdGVEZXNjZW5kaW5nLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGF0ZS1kZXNjZW5kaW5nXCIpO1xuXG5cbnNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuZGlzcGxheVNvcnRlZChzb3J0LnZhbHVlKTtcbiAgIFxufSk7XG5cbnNvcnQuYXBwZW5kQ2hpbGQoc29ydFByaW9yaXR5RGVzY2VuZGluZyk7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnRQcmlvcml0eUFzY2VuZGluZyk7XG5zb3J0LmFwcGVuZENoaWxkKHNvcnREYXRlQXNjZW5kaW5nKVxuc29ydC5hcHBlbmRDaGlsZChzb3J0RGF0ZURlc2NlbmRpbmcpO1xuc29ydERpdi5hcHBlbmRDaGlsZChzb3J0KTtcbnRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHNvcnREaXYpO1xuXG5cbi8qIENvbXBsZXRlIERpc3BsYXkgYnV0dG9uICovXG5jb25zdCBjb21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjb21wbGV0ZURpc3BsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29tcGxldGVEaXNwbGF5QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5jb21wbGV0ZURpc3BsYXlCdG4udGV4dENvbnRlbnQgPSBcIkNPTVBMRVRFXCIgLy8gY2hhbmdlIHRvIGNoZWNrIHN2ZyBsYXRlcjtcbmNvbXBsZXRlRGlzcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrUmVtb3Zlci5kaXNwbGF5Q29tcGxldGUoKTtcbiAgXG4gIC8qIFxuICB0YXNrUmVtb3Zlci5kaXNwbGF5Q29tcGxldGUoKTtcbiAgbGV0IGNoZWNrZWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kaXZfX2RvbmUtaW5wdXRcIik7XG4gIGNoZWNrZWRJbnB1dC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0aCwgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGRgKTtcbiAgICAgIHRhc2tUYWJsZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwieW9vXCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbiAgbGV0IHRhYmxlUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKTtcbiAgdGFibGVSb3dzLmZvckVhY2goKHRyKSA9PiB7XG4gICAgdHIuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICB9KSAqL1xufSlcbmNvbXBsZXRlRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlRGlzcGxheUJ0bik7XG50YXNrRGlzcGxheS5hcHBlbmRDaGlsZChjb21wbGV0ZURpdik7XG5cblxuXG5cblxuLyogVEFTSyBDT05UQUlORVIgKi9cbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbi8qIE1pZ2h0IGhhdmUgdG8gbWFrZSBhIHNlcGFyYXRlIHN1YnNjcmliZSBmb3IgY29tcGxldGUgdGFza3MgKi9cblxuZnVuY3Rpb24gcHJpb3JpdHlDb2xvclN3aXRjaChlbGVtZW50LCBvYmopIHtcbiAgc3dpdGNoKG9iai5wcmlvcml0eSkge1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1oaWdoXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbWVkaXVtXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktbG93XCIpO1xuICB9XG59IFxuZnVuY3Rpb24gc3ViQ29tcGxldGVUYXNrKG9iaikge1xuICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBvYmouaWQpO1xuICBsZXQgY29tcGxldGVJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXCJ0YXNrLWRpdl9fZG9uZS1pbnB1dFwiLCBcImNoZWNrYm94XCIsIFwiY29tcGxldGUtaW5wdXRcIiwgXCJjb21wbGV0ZS1pbnB1dFwiKTtcbiAgY29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xuICBjb21wbGV0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICB0YXNrUmVtb3Zlci5jb21wbGV0ZShvYmouaWQpO1xuICAgIGxldCB0YXNrVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBkaXZbZGF0YS1pZD1cIiR7b2JqLmlkfVwiXSB0aCwgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGRgKTtcbiAgICB0YXNrVGFibGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVcIik7XG4gICAgfSlcbiAgfSlcblxuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xuICBjcmVhdGVUYWJsZShvYmosIHRhc2tEaXYpO1xuICBcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgbGV0IGFsbFJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGgsIHRkXCIpO1xuICBhbGxSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gIH0pXG59XG4gXG5cbmZ1bmN0aW9uIHN1YnNjcmliZVRhc2sob2JqKSB7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG9iai5pZCk7XG4gIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIsIG9iai5kYXRlKTtcbiAgcHJpb3JpdHlDb2xvclN3aXRjaCh0YXNrRGl2LCBvYmopXG4gIC8qIENvbXBsZXRlIGNoZWNrYm94ICovXG4gIGxldCBjb21wbGV0ZUlucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcInRhc2stZGl2X19kb25lLWlucHV0XCIsIFwiY2hlY2tib3hcIiwgXCJjb21wbGV0ZS1pbnB1dFwiLCBcImNvbXBsZXRlLWlucHV0XCIpO1xuICBcbiAgY29tcGxldGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza1JlbW92ZXIuY29tcGxldGUob2JqLmlkKTtcbiAgICAob2JqLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpID8gdGFza1JlbW92ZXIucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIob2JqKTogb2JqLnB1c2hJZCgpIDtcbiAgICBsZXQgdGFza1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGgsIGRpdltkYXRhLWlkPVwiJHtvYmouaWR9XCJdIHRkYCk7XG4gICAgXG4gICAgdGFza1RhYmxlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlXCIpO1xuICAgIH0pXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KVxuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG5cbiAgLyogREVMRVRFIEJVVFRPTiAqL1xuICBsZXQgZGx0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRsdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhvYmopXG4gICAgdGFza1JlbW92ZXIucmVtb3ZlKG9iai5pZCk7XG4gICAgdGFza1JlbW92ZXIucmVtb3ZlVGFza0Zyb21Qcm9qZWN0SWRBcnIob2JqKTtcbiAgfSk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGx0QnRuKTtcblxuICAvKkVESVQgQlVUVE9OKi9cbiAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICAvKkhhdmUgdG8gY3JlYXRlIGxhYmVscyBhbmQgaGlkZSB0aGVtIGZvciBhY2Nlc3NpYmlsaXR5ID8/Ki9cblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHRhYmxlRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gLnRhYmxlX190ZGBcbiAgICApO1xuICAgIC8vbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke29iai5pZH1cIl0gdGFibGVgKSAvL0RvIEkgcmVhbGx5IG5lZWQgdGhpcz9cbiAgICB0YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbiAodGQpIHtcbiAgICAgIGxldCBlZGl0SW5wdXQ7XG5cbiAgICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXRpdGxlXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZUJhc2ljSW5wdXQoXG4gICAgICAgICAgXCJ0YWJsZV9fZWRpdC1pbnB1dFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgICBcImVkaXQtdGl0bGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX3RkLS1kZXRhaWxzXCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICAgICAgIFwidGFibGVfX2VkaXQtaW5wdXRcIixcbiAgICAgICAgICBcImRldGFpbHNcIixcbiAgICAgICAgICBcImVkaXQtZGV0YWlsc1wiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRJbnB1dC50ZXh0Q29udGVudCA9IG9iai5kZXRhaWxzO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLWRhdGVcIikpIHtcbiAgICAgICAgZWRpdElucHV0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgICAgICAgICBcInRhYmxlX19lZGl0LWlucHV0XCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgICAgXCJlZGl0LWRhdGVcIlxuICAgICAgICApO1xuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgb2JqLmRhdGUpO1xuICAgICAgfSBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fdGQtLXByaW9yaXR5XCIpKSB7XG4gICAgICAgIGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgICAgICAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIik7XG4gICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgICAgZWRpdElucHV0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgICAgIGxldCBsb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgbGV0IG1lZGl1bSA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJtZWRpdW1cIiwgXCJlZGl0LWJ0bl9faW5wdXQtLXJhZGlvXCIpO1xuICAgICAgICBsZXQgaGlnaCA9IGNyZWF0ZVJhZGlvSW5wdXQoXCJoaWdoXCIsIFwiZWRpdC1idG5fX2lucHV0LS1yYWRpb1wiKTtcbiAgICAgICAgYXBwZW5kUmFkaW9JbnB1dHMoZWRpdElucHV0LCBbbG93LCBtZWRpdW0sIGhpZ2hdKTtcbiAgICAgIH1cblxuICAgICAgdGQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWRpdElucHV0LCB0ZCk7XG4gICAgfSk7XG4gICAgLyogU1VCTUlUIENIQU5HRVMgQlROICovXG4gICAgbGV0IHN1Ym1pdENoYW5nZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIGlmICghc3VibWl0Q2hhbmdlQnRuKSB7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc3VibWl0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgIHN1Ym1pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWVkaXQtYnRuXCIpO1xuICAgIH1cbiAgICBcbiAgICBzdWJtaXRDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBlZGl0ZWRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19lZGl0LWlucHV0XCIpO1xuICAgICAgZWRpdGVkSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09IFwidGl0bGVcIikge1xuICAgICAgICAgIGlucHV0LnRpdGxlID09IFwiXCIgPyBvYmoudGl0bGUgOiAob2JqLnRpdGxlID0gaW5wdXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkZXRhaWxzXCIpIHtcbiAgICAgICAgICBvYmouZGV0YWlscyA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT0gXCJkYXRlXCIpIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9PSBcIlwiID8gb2JqLmRhdGUgOiAob2JqLmRhdGUgPSBuZXcgRGF0ZShpbnB1dC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxldCBlZGl0ZWRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuZWRpdC1idG5fX2lucHV0LS1yYWRpbzpjaGVja2VkXCJcbiAgICAgICk7XG4gICAgICBlZGl0ZWRQcmlvcml0eUlucHV0ID09IG51bGxcbiAgICAgICAgPyBvYmoucHJpb3JpdHlcbiAgICAgICAgOiAob2JqLnByaW9yaXR5ID0gZWRpdGVkUHJpb3JpdHlJbnB1dC52YWx1ZSk7XG4gICAgICBzdWJtaXRDaGFuZ2VCdG4ucmVtb3ZlKCk7XG4gICAgICB0YXNrUmVtb3Zlci5jbGVhckRpc3BsYXkoKTtcbiAgICB9KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHN1Ym1pdENoYW5nZUJ0bik7XG4gIH0pO1xuXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGNyZWF0ZVRhYmxlKG9iaiwgdGFza0Rpdik7XG4gIGlmIChzb3J0LnZhbHVlID09IFwiZGF0ZS1hc2NlbmRpbmdcIikge1xuICAgIGlmICh0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtZGF0ZVwiKT09IFwiXCIgKSB7XG4gICAgICBsZXQgbm9EYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lcl9fZGl2LS1uby1kYXRlXCIpO1xuICAgICAgaWYgKCFub0RhdGVEaXYpIHsgXG4gICAgICAgIG5vRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5vRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHBpbmtcIik7XG4gICAgICAgIG5vRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJfX2Rpdi0tbm8tZGF0ZVwiKVxuICAgICAgICBsZXQgbm9EYXRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgbm9EYXRlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVW5kYXRlZFwiO1xuICAgICAgICBub0RhdGVEaXYuYXBwZW5kQ2hpbGQobm9EYXRlSGVhZGluZyk7XG4gICAgICB9IC8vY29udGludWUgYWRkaW5nIGNvbmRpdGlvbnMgaGVyZSBmb3IgdG9kYXkgYW5kIGZvciB0aGlzIHdlZWsgYW5kIGZvciB1cGNvbWluZ1xuICAgICAgbm9EYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobm9EYXRlRGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfVxuICB9XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG59XG5cbmZ1bmN0aW9uIHN1YlJtdlRhc2tDb250YWluZXIoKSB7XG4gIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdWJzY3JpYmVUYXNrLCB0YXNrRGlzcGxheSwgc3ViUm12VGFza0NvbnRhaW5lciwgc3ViQ29tcGxldGVUYXNrIH07XG4iLCJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX25hdlwiKVxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbm5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fbGlzdFwiLCBcImMtbmF2X19saXN0XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKHRleHQpIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2X19saXN0LWl0ZW1cIiwgXCJjLW5hdl9fbGlzdC1pdGVtXCIpXG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5uYXYuYXBwZW5kQ2hpbGQobmF2TGlzdClcblxuXG5cblxuZXhwb3J0IHtuYXYsIGNyZWF0ZUxpc3RJdGVtfVxuIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvZGlzcGxheV9fc2lkZVwiO1xuaW1wb3J0IHsgdGFza1JlbW92ZXIgfSBmcm9tIFwiLi4vbWFpbi1wdWItc3ViXCI7XG4vKiBEaXNwbGF5IENvbnRhaW5lcnMgKi9cbmltcG9ydCB7IHRhc2tEaXNwbGF5IH0gZnJvbSBcIi4vX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQgeyBub3RlRGlzcGxheSB9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHsgcHJvamVjdERpc3BsYXl9IGZyb20gXCIuL19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tcHJvamVjdFwiO1xuXG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGVOYXYuYXBwZW5kQ2hpbGQoc2lkZS5uYXYpXG5cbmxldCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lclwiKVxubGV0IGRpc3BsYXlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpc3BsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250ZW50XCIpXG5cbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKG5vdGVEaXNwbGF5KTtcbmRpc3BsYXlDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcblxuLyogU0hPVUxEIFJFRk9STUFUIFRISVMgKi9cblxuY29uc3QgaG9tZSA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJIb21lXCIpO1xuY29uc3QgcHJvamVjdCA9IHNpZGUuY3JlYXRlTGlzdEl0ZW0oXCJQcm9qZWN0c1wiKTtcbmNvbnN0IG5vdGUgPSBzaWRlLmNyZWF0ZUxpc3RJdGVtKFwiTm90ZXNcIik7XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1JlbW92ZXIuY2xlYXJEaXNwbGF5KCk7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG5cbn0pO1xuXG5ub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5vdGVEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5X19jb250YWluZXItbm90ZS0taGlkZGVuXCIpO1xuICBwcm9qZWN0RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLXByb2plY3QtLWhpZGRlblwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlfX2NvbnRhaW5lci10YXNrLS1oaWRkZW5cIik7XG59KTtcblxuXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tSZW1vdmVyLmNsZWFyRGlzcGxheSgpO1xuICBub3RlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheV9fY29udGFpbmVyLW5vdGUtLWhpZGRlblwiKTtcbiAgcHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlfX2NvbnRhaW5lci1wcm9qZWN0LS1oaWRkZW5cIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5X19jb250YWluZXItdGFzay0taGlkZGVuXCIpO1xuICBsZXQgaGlkZGVuUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0IHRyOm5vdCg6Zmlyc3QtY2hpbGQpXCIpO1xuICBoaWRkZW5Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9KVxuICBcbiAgIFxufSk7XG5cbmRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbnRlbnQpXG5kaXNwbGF5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuZGlzcGxheS5hcHBlbmRDaGlsZChkaXNwbGF5Q29udGFpbmVyKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IHsgY29tcGFyZUFzYyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgcHViU3ViRmFjdG9yeSB9IGZyb20gXCIuLi9nZW5lcmFsL2dlbmVyYWxfX2pzL3B1Yi1zdWJcIjtcbmltcG9ydCB7IHN1YnNjcmliZU5vdGUgfSBmcm9tIFwiLi9kaXNwbGF5L19fY29udGFpbmVyL2Rpc3BsYXlfX2NvbnRhaW5lci0tbm90ZVwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlUHJvamVjdCxcbiAgc3ViVGFza0xpc3RJdGVtLFxuICBzdWJSbXZQcm9qZWN0RGlzcGxheSxcbiAgc3ViUm12VGFza3MsXG59IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS1wcm9qZWN0XCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVUYXNrLFxuICBzdWJSbXZUYXNrQ29udGFpbmVyLFxuICBzdWJDb21wbGV0ZVRhc2ssXG59IGZyb20gXCIuL2Rpc3BsYXkvX19jb250YWluZXIvZGlzcGxheV9fY29udGFpbmVyLS10YXNrXCI7XG5pbXBvcnQge1xuICBzdWJTZWxlY3RQcm9qZWN0SW5wdXQsXG4gIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyxcbn0gZnJvbSBcIi4vbW9kYWwvX19mb3JtL21vZGFsX19mb3JtLS10YXNrXCI7XG5cbi8qIE9CSkVDVCBDTEFTUyAqL1xuLyogaG9sZHMgYW4gYXJyYXkgb2YgYWxsIHRoZSBvYmplY3RzLiBUaGUgb2JqSWRHZW4gaXMgdXNlZCB0byBhc3NpZ24gdW5pcXVlIGlkcyB0byBlYWNoIG9iaiAqL1xuY2xhc3MgT2JqZWN0QXJyQ2xhc3Mge1xuICBvYmpBcnIgPSBbXTtcbiAgb2JqSWRHZW4gPSAwO1xuXG4gIGdldCBvYmpBcnIoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqQXJyO1xuICB9XG5cbiAgc2V0IG9iakFycihhcnIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFsZXJ0KFwiTm90IGFuIGFycmF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMub2JqQXJyID0gYXJyKTtcbiAgfVxuXG4gIHB1c2gob2JqKSB7XG4gICAgdGhpcy5vYmpBcnIucHVzaChvYmopO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5vYmpBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBcbn1cbmNsYXNzIFRhc2tPYmplY3RBcnJDbGFzcyBleHRlbmRzIE9iamVjdEFyckNsYXNzIHtcbiAgY3VzdG9tU29ydCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBcIm1vc3RcIikge1xuICAgICAgdGhpcy5vYmpBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5jb3VudFByaW9yaXR5KCkgLSBhLmNvdW50UHJpb3JpdHkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gXCJsZWFzdFwiKSB7XG4gICAgICB0aGlzLm9iakFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmNvdW50UHJpb3JpdHkoKSAtIGIuY291bnRQcmlvcml0eSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBcImRhdGUtYXNjZW5kaW5nXCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsYikge1xuICAgICAgICByZXR1cm4gY29tcGFyZUFzYyhhLmRhdGUsIGIuZGF0ZSlcbiAgICAgIH0pO1xuICAgIH0gIGVsc2UgaWYgKHZhbHVlID09IFwiZGF0ZS1kZXNjZW5kaW5nXCIpIHtcbiAgICAgIHRoaXMub2JqQXJyLnNvcnQoZnVuY3Rpb24gKGEsYikge1xuICAgICAgICByZXR1cm4gY29tcGFyZUFzYyhiLmRhdGUsIGEuZGF0ZSlcbiAgICAgIH0pO1xuICAgICAgXG5cbiAgICB9XG4gIH1cbn0gXG5cbi8qIFJFTU9WRSBDT05TVFJVQ1RPUiAqL1xuLyogdXNlZCB0byByZW1vdmUgb2JqZWN0cyBmcm9tIHRoZSBkaXNwbGF5IGJ5IG1hdGNoaW5nIHRoZSBkYXRhIGluZGV4IHRvIHRoZSBpbmRleCBwcm9wZXJ0eSBpbiBlYWNoIG9iamVjdCAqL1xuLyogUkVGQUNUT1IgUkVNT1ZFIENPTlNUUlVDVE9SIElUIEVYUE9TRVMgUFVCU1VCIGFuZCBDTEFTU09CSiAgaW5zdGVhZCBvZiBoZXJlZGl0YXJ5IHVzZSBhIGNvbXBvc2l0ZSBtb2RlbC4gQ3JlYXRlIGRpZmZlcmVudCBmdW5jdGlvbnMgdGhhdCB0YWtlIHB1YlN1Yi9PYmplY3RBcnIgYXMgYW4gYXJndW1lbnRcbmFuZCBwcm90b3R5cGUgdGhlbSEqL1xuXG5mdW5jdGlvbiBSZW1vdmVDb25zdHJ1Y3RvcihwdWJTdWIsIGNsYXNzT2JqKSB7XG4gIHRoaXMucHViU3ViID0gcHViU3ViO1xuICB0aGlzLmNsYXNzT2JqID0gY2xhc3NPYmo7XG59IC8qIFxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xufSAqL1xuXG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVCeVByb2plY3QgPSBmdW5jdGlvbiAocHJqUm12KSB7XG4gIGxldCBpbmRleE9mTWF0Y2ggPSB0aGlzLmNsYXNzT2JqLm9iakFyci5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgIHJldHVybiBvYmoucHJvamVjdCA9PT0gcHJqUm12LnRpdGxlID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcbiAgdGhpcy5jbGFzc09iai5yZW1vdmUoaW5kZXhPZk1hdGNoKTtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07XG5cblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW1vdmVUYXNrRnJvbVByb2plY3RJZEFyciA9IGZ1bmN0aW9uIChvYmopIHsgXG4gIGxldCBwcm9qZWN0T2JqZWN0ID0gcHJvamVjdHMub2JqQXJyLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IG9iai5wcm9qZWN0KTtcbiAgbGV0IGluZGV4TnVtID0gcHJvamVjdE9iamVjdC50YXNrSWRBcnIuZmluZEluZGV4KGlkID0+IGlkID09IG9iai5pZCApO1xuICBwcm9qZWN0T2JqZWN0LnRhc2tJZEFyci5zcGxpY2UoaW5kZXhOdW0sIDEpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0T2JqZWN0KTtcbn1cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChkYXRhSWQpIHtcbiAgbGV0IGluZGV4T2ZNYXRjaCA9IHRoaXMuY2xhc3NPYmoub2JqQXJyLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgcmV0dXJuIG9iai5pZCA9PT0gZGF0YUlkID8gdHJ1ZSA6IGZhbHNlO1xuICB9KTtcblxuICB0aGlzLmNsYXNzT2JqLnJlbW92ZShpbmRleE9mTWF0Y2gpO1xuICB0aGlzLnB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIHRoaXMuY2xhc3NPYmoub2JqQXJyLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIG9iamVjdC5wdWJsaXNoKG9iamVjdCk7XG4gIH0pO1xufTtcblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKGRhdGFJZCkge1xuICBsZXQgbWF0Y2ggPSB0aGlzLmNsYXNzT2JqLm9iakFyci5maW5kKChvYmopID0+IHtcbiAgICByZXR1cm4gb2JqLmlkID09PSBkYXRhSWQgPyB0cnVlIDogZmFsc2U7XG4gIH0pO1xuXG4gIChtYXRjaC5zdGF0dXMgPT0gXCJhY3RpdmVcIikgPyAobWF0Y2guc3RhdHVzID0gXCJjb21wbGV0ZVwiKTogKG1hdGNoLnN0YXR1cyA9IFwiYWN0aXZlXCIpO1xuICBjb25zb2xlLmxvZyhtYXRjaCk7XG5cbn1cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLmNsZWFyRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcblJlbW92ZUNvbnN0cnVjdG9yLnByb3RvdHlwZS5kaXNwbGF5Q29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgIG9iamVjdC5wdWJsaXNoQ29tcGxldGUob2JqZWN0KTtcbiAgICB9fVxuICApXG59XG5cblxuUmVtb3ZlQ29uc3RydWN0b3IucHJvdG90eXBlLmRpc3BsYXlTb3J0ZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0YXNrcy5jdXN0b21Tb3J0KHZhbHVlKTtcbiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLmNsYXNzT2JqLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07XG5cbmxldCBwcm9qZWN0cyA9IG5ldyBPYmplY3RBcnJDbGFzcygpO1xuXG5sZXQgcHViU3ViUHJvamVjdHMgPSBwdWJTdWJGYWN0b3J5KCk7XG5sZXQgcHJvamVjdFJlbW92ZXIgPSBuZXcgUmVtb3ZlQ29uc3RydWN0b3IocHViU3ViUHJvamVjdHMsIHByb2plY3RzKTtcblxubGV0IHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycyA9IHB1YlN1YkZhY3RvcnkoKTtcblxuLyogV0VJUkQgT0JKIG1ha2UgdGhpcyBpbnRvIHB1YlN1YiA/ICovXG5mdW5jdGlvbiBzdWJQdWJsaXNoUmVxdWVzdChvYmopIHtcbiAgbGV0IHB1YlN1YjtcbiAgaWYgKG9iai50eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgcHViU3ViID0gcHViU3ViUHJvamVjdHM7XG4gIH0gZWxzZSBpZiAob2JqLnR5cGUgPT0gXCJ0YXNrXCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJUYXNrcztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcImRpc3BsYXlcIiwgb2JqLm9iaik7XG59XG5cbmZ1bmN0aW9uIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KG9iaikge1xuICBsZXQgcHViU3ViO1xuICBsZXQgb2JqQXJyO1xuICBpZiAob2JqLnR5cGUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBwdWJTdWIgPSBwdWJTdWJQcm9qZWN0cztcbiAgICBvYmpBcnIgPSBwcm9qZWN0cztcbiAgfSBlbHNlIGlmIChvYmoudHlwZSA9PSBcInRhc2tcIikge1xuICAgIHB1YlN1YiA9IHB1YlN1YlRhc2tzO1xuICAgIG9iakFyciA9IHRhc2tzO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFwiY2xlYXJcIiwgdHJ1ZSk7XG4gIG9iakFyci5wdXNoKG9iai5vYmopO1xuICBjb25zb2xlLmxvZyhvYmpBcnIub2JqQXJyKTtcbiAgb2JqQXJyLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBpZiAob2JqZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0LnB1Ymxpc2gob2JqZWN0KTtcbiAgICB9XG4gICAgXG4gIH0pO1xufVxuXG5wdWJTdWJPYmplY3RDb25zdHJ1Y3RvcnMuc3Vic2NyaWJlKFwicHVibGlzaFwiLCBzdWJQdWJsaXNoUmVxdWVzdCk7XG5cbnB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5zdWJzY3JpYmUoXCJkaXNwbGF5QWxsXCIsIHN1YkRpc3BsYXlBbGxSZXF1ZXN0KTtcblxuLyogT2JqZWN0IENvbnN0cnVjdG9yKi9cbmZ1bmN0aW9uIE9iamVjdENvbnN0cnVjdG9yKC8qIHB1YlN1Yiwgb2JqQXJyICovKSB7XG4gIC8qICAgdGhpcy5wdWJTdWIgPSBwdWJTdWI7XG4gIHRoaXMub2JqQXJyID0gb2JqQXJyOyAqL1xufVxuLyogXG5PYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbigpIHt0aGlzLm9iakFyci5vYmpJZEdlbiArPSAxfTtcbiAqL1xuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAob2JqKSB7XG4gIC8qIHRoaXMucHViU3ViLnB1Ymxpc2goXCJkaXNwbGF5XCIsIG9iaik7ICovXG4gIHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5wdWJsaXNoKFwicHVibGlzaFwiLCB7IHR5cGU6IHRoaXMudHlwZSwgb2JqIH0pO1xufTtcblxuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLmRpc3BsYXlBbGwgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHB1YlN1Yk9iamVjdENvbnN0cnVjdG9ycy5wdWJsaXNoKFwiZGlzcGxheUFsbFwiLCB7IHR5cGU6IHRoaXMudHlwZSwgb2JqIH0pO1xuICAvKiAgdGhpcy5wdWJTdWIucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICB0aGlzLm9iakFyci5wdXNoKG9iaik7XG4gIHRoaXMub2JqQXJyLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICAgIGNvbnNvbGUubG9nKG9iamVjdClcbiAgfSk7ICovXG59O1xuT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2hDb21wbGV0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICBwdWJTdWJUYXNrcy5wdWJsaXNoKFwiZGlzcGxheUNvbXBsZXRlXCIsIG9iaik7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RDb25zdHJ1Y3Rvcih0aXRsZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7IC8qIFxuICB0aGlzLnB1YlN1YiA9IHB1YlN1YlByb2plY3RzO1xuICB0aGlzLm9iakFyciA9IHByb2plY3RzOyAqLyAvKiBcbiAgdGhpcy5pZCA9IHRoaXMub2JqQXJyLm9iaklkR2VuICs9IDE7ICovXG4gIHRoaXMuaWQgPSBwcm9qZWN0cy5vYmpJZEdlbiArPSAxO1xuICB0aGlzLnR5cGUgPSBcInByb2plY3RcIjtcbiAgdGhpcy50YXNrSWRBcnIgPSBbXTtcbn1cblxuUHJvamVjdENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0Q29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuLyogUHJvamVjdCBDb25zdHJ1Y3RvciAqL1xuLyogZnVuY3Rpb24gUHJvamVjdENvbnN0cnVjdG9yKHRpdGxlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5pZCA9IHByb2plY3RzLm9iaklkR2VuICs9IDE7XG59XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcInByb2plY3RcIiwgb2JqKTtcbn07XG5cblByb2plY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZGlzcGxheUFsbCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcHViU3ViUHJvamVjdHMucHVibGlzaChcImNsZWFyXCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIHByb2plY3RzLm9iakFyci5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBvYmplY3QucHVibGlzaChvYmplY3QpO1xuICB9KTtcbn07ICovXG5cbi8qIFBVQlNVQiBNT0RVTEUgRk9STVMgYW5kIERJU1BMQVkqL1xubGV0IHB1YlN1YkZvcm1zID0gcHViU3ViRmFjdG9yeSgpO1xuXG4vKiBOb3RlIENvbnN0cnVjdG9yICovXG5cbmZ1bmN0aW9uIE5vdGVDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscykge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59XG5Ob3RlQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHB1YlN1YkZvcm1zLnB1Ymxpc2goXCJub3RlXCIsIHsgdGl0bGU6IHRoaXMudGl0bGUsIGRldGFpbHM6IHRoaXMuZGV0YWlscyB9KTtcbn07XG5cbi8qIFRhc2sgQ29uc3RydWN0b3IgKi9cblxubGV0IHRhc2tzID0gbmV3IFRhc2tPYmplY3RBcnJDbGFzcygpO1xubGV0IHB1YlN1YlRhc2tzID0gcHViU3ViRmFjdG9yeSgpO1xubGV0IHRhc2tSZW1vdmVyID0gbmV3IFJlbW92ZUNvbnN0cnVjdG9yKHB1YlN1YlRhc2tzLCB0YXNrcyk7XG5cbmZ1bmN0aW9uIFRhc2tDb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIHRoaXMudHlwZSA9IFwidGFza1wiO1xuICB0aGlzLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gIHRoaXMuaWQgPSB0YXNrcy5vYmpJZEdlbiArPSAxO1xufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShPYmplY3RDb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1c2hJZCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcHJvamVjdE9iamVjdCA9IHByb2plY3RzLm9iakFyci5maW5kKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSB0aGlzLnByb2plY3QpXG4gIHByb2plY3RPYmplY3QudGFza0lkQXJyLnB1c2godGhpcy5pZCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RPYmplY3QpXG59XG5cblxuICAvKiBcbiAgcHJvamVjdE9iamVjdC50YXNrSWRBcnIucHVzaCh0aGlzLmlkKTsgKi8gLy9USEUgSVNTVUUgSVMgSEVSRVxuXG5cblRhc2tDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY291bnRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0aGlzLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImxvd1wiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICByZXR1cm4gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICByZXR1cm4gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuLyogXG5mdW5jdGlvbiBUYXNrQ29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyxcbiAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5LFxuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0LFxufVxuXG5UYXNrQ29uc3RydWN0b3IucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKFxuICAgIHRoaXMudGl0bGUsXG4gICAgdGhpcy5kZXRhaWxzLFxuICAgIHRoaXMuZGF0ZSxcbiAgICB0aGlzLnByaW9yaXR5LFxuICAgIHRoaXMucHJvamVjdFxuICApO1xuICBwdWJTdWJGb3Jtcy5wdWJsaXNoKFwidGFza1wiLCBvYmopO1xufTsgKi9cblxuLyogU3Vic2NyaWJlcnMgKi9cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlUHJvamVjdCk7XG4vKiBcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3ViUHJvamVjdERpc3BsYXkpOyAqL1xucHViU3ViUHJvamVjdHMuc3Vic2NyaWJlKFwiZGlzcGxheVwiLCBzdWJTZWxlY3RQcm9qZWN0SW5wdXQpO1xucHViU3ViRm9ybXMuc3Vic2NyaWJlKFwibm90ZVwiLCBzdWJzY3JpYmVOb3RlKTtcbnB1YlN1YkZvcm1zLnN1YnNjcmliZShcInRhc2tcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJGb3Jtcy5zdWJzY3JpYmUoXCJ0YXNrXCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5cbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlcIiwgc3Vic2NyaWJlVGFzayk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJkaXNwbGF5XCIsIHN1YlRhc2tMaXN0SXRlbSk7XG5wdWJTdWJUYXNrcy5zdWJzY3JpYmUoXCJjbGVhclwiLCBzdWJSbXZUYXNrQ29udGFpbmVyKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlRhc2tzKTtcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImRpc3BsYXlDb21wbGV0ZVwiLCBzdWJDb21wbGV0ZVRhc2spOyAvL2FkZGVkIHRoaXMgdHJ5aW5nIHRvIG1ha2UgdGhlIGNvbXBsZXRlXG4vKiBcbnB1YlN1YlRhc2tzLnN1YnNjcmliZShcImNsZWFyXCIsc3ViUm12UHJvamVjdERpc3BsYXkpICovXG5cbi8qIFxucHViU3ViVGFza3Muc3Vic2NyaWJlKFwiY2xlYXJcIiwgc3ViUm12UHJvamVjdERpc3BsYXkpIC8qID8/ICovXG5cbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YlJtdlByb2plY3REaXNwbGF5KTtcbnB1YlN1YlByb2plY3RzLnN1YnNjcmliZShcImNsZWFyXCIsIHN1YkNsZWFyU2VsZWN0T3B0aW9ucyk7XG5cbmV4cG9ydCB7XG4gIE5vdGVDb25zdHJ1Y3RvcixcbiAgUHJvamVjdENvbnN0cnVjdG9yLFxuICBUYXNrQ29uc3RydWN0b3IsXG4gIHByb2plY3RSZW1vdmVyLFxuICB0YXNrUmVtb3Zlcixcbn07XG4iLCJpbXBvcnQge21vZGFsfSBmcm9tIFwiLi9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IHtkaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5L2Rpc3BsYXlcIlxuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5tYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4vKiBkaXNwbGF5IG1vZGFsIGJ1dHRvbiAqL1xuY29uc3QgZGlzcGxheU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRpc3BsYXlNb2RhbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGlzcGxheU1vZGFsLnRleHRDb250ZW50ID0gXCIrXCI7LyogXG5kaXNwbGF5TW9kYWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vZ2VuZXJhbC9pbWFnZXMvc3ZnLXBsdXMuc3ZnXCIpYCkgKi9cbmRpc3BsYXlNb2RhbC5jbGFzc0xpc3QuYWRkKFwibWFpbl9fZGlzcGxheS1idG5cIixcImMtbWFpbl9fZGlzcGxheS1idG5cIiApO1xuZGlzcGxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluX19tb2RhbC0taGlkZGVuXCIpXG59KVxubWFpbkRpdi5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1vZGFsKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG5cbmV4cG9ydCB7bWFpbkRpdn0iLCJpbXBvcnQge1xuICBjcmVhdGVCYXNpY0lucHV0LFxuICBhcHBlbmRMYWJlbElucHV0LFxuICBjcmVhdGVMYWJlbCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBOb3RlQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5cbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8qIGlucHV0cyAqL1xuY29uc3Qgbm90ZVRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJub3RlLXRpdGxlXCIsXG4gIFwibm90ZS10aXRsZVwiXG4pO1xuY29uc3Qgbm90ZVRpdGxlTGFiZWwgPSBjcmVhdGVMYWJlbChub3RlVGl0bGUsIFwiVGl0bGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChub3RlRm9ybSwgbm90ZVRpdGxlTGFiZWwsIG5vdGVUaXRsZSk7XG5cbmNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5ub3RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZVwiKTtcbm5vdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVcIik7XG5cbmNvbnN0IG5vdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5vdGUsIFwiRGV0YWlsc1wiKTtcbmFwcGVuZExhYmVsSW5wdXQobm90ZUZvcm0sIG5vdGVMYWJlbCwgbm90ZSk7XG5cbi8qIFwic3VibWl0XCIgYnV0dG9uICovXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTsgLyogbWF5YmUgY2xlYXIgaW5zdGVhZCovXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBOb3RlXCI7XG5ub3RlRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4vKiBQVUJTVUIgKi9cblxuZnVuY3Rpb24gcHVibGlzaE5vdGUoKSB7XG4gIGxldCBvYmogPSBuZXcgTm90ZUNvbnN0cnVjdG9yKG5vdGVUaXRsZS52YWx1ZSwgbm90ZS52YWx1ZSk7XG4gIG9iai5wdWJsaXNoKCk7XG59XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHVibGlzaE5vdGUpO1xuXG5leHBvcnQgeyBub3RlRm9ybSB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQmFzaWNJbnB1dCxcbiAgYXBwZW5kTGFiZWxJbnB1dCxcbiAgY3JlYXRlTGFiZWwsXG59IGZyb20gXCIuLi8uLi8uLi9nZW5lcmFsL2dlbmVyYWxfX2pzL19pbnB1dFwiO1xuaW1wb3J0IHsgUHJvamVjdENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uLy4uL21haW4tcHViLXN1YlwiO1xuaW1wb3J0IHsgY3JlYXRlQWxlcnQgfSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuLyogaW5wdXRzICovXG5jb25zdCBwcm9qZWN0ID0gY3JlYXRlQmFzaWNJbnB1dChcbiAgXCJmb3JtX19pbnB1dFwiLFxuICBcInRleHRcIixcbiAgXCJwcm9qZWN0LXRpdGxlXCIsXG4gIFwicHJvamVjdFwiXG4pO1xuY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChwcm9qZWN0LCBcIlRpdGxlOlwiKTtcbmFwcGVuZExhYmVsSW5wdXQocHJvamVjdEZvcm0sIGxhYmVsLCBwcm9qZWN0KTtcblxuLyogXCJzdWJtaXRcIiBidXR0b24gKi9cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xucHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBpZiAoIXByb2plY3QudmFsdWUpIHtcbiAgICBjcmVhdGVBbGVydChcIlBsZWFzZSBwcm92aWRlIGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0IVwiKVxuICB9IGVsc2Uge1xuICAgIGxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKHByb2plY3QudmFsdWUpO1xuICAgIG9iai5kaXNwbGF5QWxsKG9iaik7XG4gIH1cbn1cbmxldCBvYmogPSBuZXcgUHJvamVjdENvbnN0cnVjdG9yKFwiZ2VuZXJhbFwiKTtcbm9iai5kaXNwbGF5QWxsKG9iaik7XG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RzKTtcblxuZXhwb3J0IHsgcHJvamVjdEZvcm0gfTtcbiIsIi8qIFRPIERPIEZPUk0gKi9cbmltcG9ydCB7XG4gIGNyZWF0ZUJhc2ljSW5wdXQsXG4gIGFwcGVuZExhYmVsSW5wdXQsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVSYWRpb0lucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgYXBwZW5kUmFkaW9JbnB1dHNcbn0gZnJvbSBcIi4uLy4uLy4uL2dlbmVyYWwvZ2VuZXJhbF9fanMvX2lucHV0XCI7XG5pbXBvcnQgeyBUYXNrQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vLi4vbWFpbi1wdWItc3ViXCI7XG5pbXBvcnQge2NyZWF0ZUFsZXJ0fSBmcm9tIFwiLi4vLi4vLi4vZ2VuZXJhbC9nZW5lcmFsX19qcy9fYWxlcnRcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tIFwiZGF0ZS1mbnNcIlxuLyogXG5mb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCBcInl5eXktTU0tZGRcIik7ICovXG5cblxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcblxubGV0IHRpdGxlID0gY3JlYXRlQmFzaWNJbnB1dChcImZvcm1fX2lucHV0XCIsIFwidGV4dFwiLCBcInRpdGxlXCIsIFwidGl0bGVcIik7XG50aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlOiBHcm9jZXJpZXNcIik7XG50aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtLXRleHRcIik7XG5sZXQgdGl0bGVMYWJlbCA9IGNyZWF0ZUxhYmVsKHRpdGxlLCBcIlRpdGxlXCIpO1xudGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fbGFiZWwtLWhpZGRlblwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHRpdGxlTGFiZWwsIHRpdGxlKTtcblxuXG5sZXQgdGV4dEFyZWEgPSBjcmVhdGVUZXh0QXJlYShcImZvcm1fX2lucHV0LS10ZXh0QXJlYVwiLCBcInRleHRBcmVhXCIsIFwidGV4dEFyZWFcIilcbnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoIC8qIGFyZSB0aGVzZSBuZWNlc3Nhcnk/PyAqL1xuICBcImZvcm1fX2lucHV0LS10ZXh0XCIsXG4gIFwiZm9ybS1pbnB1dFwiXG4pO1xudGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIyIHBvdGF0b2VzXCIpO1xuXG5sZXQgdGV4dEFyZWFMYWJlbCA9IGNyZWF0ZUxhYmVsKHRleHRBcmVhLCBcIkRldGFpbHNcIik7XG50ZXh0QXJlYUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19sYWJlbC0taGlkZGVuXCIpO1xuYXBwZW5kTGFiZWxJbnB1dCh0YXNrRm9ybSwgdGV4dEFyZWFMYWJlbCwgdGV4dEFyZWEpO1xuXG5sZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxldCBkYXRlID0gY3JlYXRlQmFzaWNJbnB1dChcImZvcm1fX2lucHV0XCIsIFwiZGF0ZVwiLCBcImRhdGVcIiwgXCJkYXRlXCIpO1xubGV0IGRhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKGRhdGUsIFwiRHVlIGRhdGU6XCIpO1xuYXBwZW5kTGFiZWxJbnB1dChkaXYsIGRhdGVMYWJlbCwgZGF0ZSk7XG50YXNrRm9ybS5hcHBlbmRDaGlsZChkaXYpO1xuXG4vKiBTRUxFQ1QgUFJPSkVDVCAqL1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0LXByb2plY3RcIik7XG5zZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0XCIpO1xuXG4vKiBjbGVhcnMgdGhlIHNlbGVjdCBvcHRpb25zIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIHByb2plY3QgZGlzcGxheSBpcyBjbGVhcmVkICovXG5mdW5jdGlvbiBzdWJDbGVhclNlbGVjdE9wdGlvbnMoKSB7XG4gIHdoaWxlIChzZWxlY3RQcm9qZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICBzZWxlY3RQcm9qZWN0LnJlbW92ZUNoaWxkKHNlbGVjdFByb2plY3QubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vKiB1cGRhdGVzIHRoZSBzZWxlY3Qgb3B0aW9ucyB3aGVuIG5ldyBwcm9qZWN0cyBhcmUgYWRkZWQgKi9cbmZ1bmN0aW9uIHN1YlNlbGVjdFByb2plY3RJbnB1dChvYmopIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9iai50aXRsZSk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufVxuXG5jb25zdCBzZWxlY3RMYWJlbCA9IGNyZWF0ZUxhYmVsKHNlbGVjdFByb2plY3QsIFwiUHJvamVjdFwiKTtcbmFwcGVuZExhYmVsSW5wdXQodGFza0Zvcm0sIHNlbGVjdExhYmVsLCBzZWxlY3RQcm9qZWN0KTtcblxuLypSQURJTyBCVVRUT05TKi9cbmxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbmxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xubGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuXG5sZXQgcHJpb3JpdHlMb3cgPSBjcmVhdGVSYWRpb0lucHV0KFwibG93XCIsIFwiZm9ybV9faW5wdXRcIik7XG5sZXQgcHJpb3JpdHlNZWRpdW0gPSBjcmVhdGVSYWRpb0lucHV0KFwibWVkaXVtXCIsIFwiZm9ybV9faW5wdXRcIik7XG5sZXQgcHJpb3JpdHlIaWdoID0gY3JlYXRlUmFkaW9JbnB1dChcImhpZ2hcIiwgXCJmb3JtX19pbnB1dFwiKTtcblxuXG5cblxuYXBwZW5kUmFkaW9JbnB1dHMoZmllbGRzZXQsIFtwcmlvcml0eUxvdywgcHJpb3JpdHlNZWRpdW0sIHByaW9yaXR5SGlnaF0pO1xuXG50YXNrRm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbmxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG5zdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiBcbmZ1bmN0aW9uIGNoZWNrRGF0ZSgpIHtcbiAgcmV0dXJuICghZGF0ZS52YWx1ZSApID8gXCJcIiA6IG5ldyBEYXRlKGRhdGUudmFsdWUpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dDpjaGVja2VkXCIpO1xuICBpZiAoIXRpdGxlLnZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFsZXJ0KFwiUGxlYXNlIGNyZWF0ZSBhIHRpdGxlIGZvciB5b3VyIHRhc2shXCIpO1xuICB9XG4gIGlmICghcmFkaW8pIHtcbiAgIHJldHVybiBjcmVhdGVBbGVydChcIlBsZWFzZSBzZWxlY3QgYSBwcmlvcml0eSBmb3IgeW91ciB0YXNrIVwiKTtcbiAgfVxuXG4gIFxuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuICBsZXQgb2JqID0gbmV3IFRhc2tDb25zdHJ1Y3RvcihcbiAgICB0aXRsZS52YWx1ZSxcbiAgICB0ZXh0QXJlYS52YWx1ZSxcbiAgICBjaGVja0RhdGUoKSxcbiAgICByYWRpby52YWx1ZSxcbiAgICBzZWxlY3RQcm9qZWN0LnZhbHVlXG4gICk7XG4gIG9iai5wdXNoSWQoKTtcbiAgb2JqLmRpc3BsYXlBbGwob2JqKTtcbn1cblxuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VGFza3MpO1xuLyogXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGV0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gIGxldCBvYmogPSBuZXcgVGFza0NvbnN0cnVjdG9yKHRpdGxlLnZhbHVlLCB0ZXh0QXJlYS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmFkaW8udmFsdWUsIHNlbGVjdFByb2plY3QudmFsdWUpO1xuICBvYmoucHVibGlzaCgpO1xufSlcbiAqL1xuZXhwb3J0IHsgdGFza0Zvcm0sIHN1YlNlbGVjdFByb2plY3RJbnB1dCwgc3ViQ2xlYXJTZWxlY3RPcHRpb25zIH07XG4iLCJsZXQgc2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fc2lkZVwiKTtcblxubGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xudGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdUQVNLJztcblxubGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xucHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFwiO1xuXG5sZXQgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub3RlQnV0dG9uLnRleHRDb250ZW50ID0gXCJOT1RFXCI7XG5cbnNpZGVEaXYuYXBwZW5kQ2hpbGQodGFza0J1dHRvbilcblxuc2lkZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKVxuXG5zaWRlRGl2LmFwcGVuZENoaWxkKG5vdGVCdXR0b24pXG5cbmV4cG9ydCB7c2lkZURpdiwgdGFza0J1dHRvbiwgbm90ZUJ1dHRvbiwgcHJvamVjdEJ1dHRvbn0gIiwiaW1wb3J0ICogYXMgc2lkZSBmcm9tIFwiLi9fX3NpZGUvbW9kYWxfX3NpZGVcIlxuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSBcIi4vX19mb3JtL21vZGFsX19mb3JtLS10YXNrXCIgXG5pbXBvcnQge3Byb2plY3RGb3JtfSBmcm9tIFwiLi9fX2Zvcm0vbW9kYWxfX2Zvcm0tLXByb2plY3RcIiBcbmltcG9ydCB7bm90ZUZvcm19IGZyb20gXCIuL19fZm9ybS9tb2RhbF9fZm9ybS0tbm90ZVwiXG5cbmxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcIm1haW5fX21vZGFsXCIpO1xuXG5sZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xvc2VCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmNsb3NlQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9zaXRpb246YWJzb2x1dGVcIikgLyogaGFzIHRvIGJlIG1vdmVkIHRvIHNjc3MhISEgKi9cbmNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG5tb2RhbC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1haW5fX21vZGFsLS1oaWRkZW5cIik7XG59IFxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVNb2RhbClcblxuLyogc2lkZSAqL1xubW9kYWwuYXBwZW5kQ2hpbGQoc2lkZS5zaWRlRGl2KTtcblxuLyogZm9ybSBvbiBpbml0aWFsIGxvYWQgKi9cbmxldCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Zvcm1cIilcbm1vZGFsLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4vKiByZW1vdmUgZm9ybSBmdW5jICovXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICB3aGlsZSAoZm9ybUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZm9ybUNvbnRhaW5lci5maXJzdENoaWxkLnJlc2V0KClcbiAgICBmb3JtQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIuZmlyc3RDaGlsZClcbiAgfVxufVxuXG4vKiBzaWRlIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgKi9cbnNpZGUudGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gIHJlbW92ZUZvcm0oKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG59KVxuc2lkZS5wcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgcmVtb3ZlRm9ybSgpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbn0pXG5zaWRlLm5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICByZW1vdmVGb3JtKCk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xufSlcblxuXG5leHBvcnQge21vZGFsfSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyAqL1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIlxuaW1wb3J0IHttYWluRGl2fSBmcm9tIFwiLi9tYWluL21haW5cIiBcblxuXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==