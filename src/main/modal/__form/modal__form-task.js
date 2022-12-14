/* TO DO FORM */
import {
  createBasicInput,
  appendLabelInput,
  createLabel,
  createRadioInput,
  createTextArea,
  appendRadioInputs
} from "../../../general/general__js/_input";
import { TaskConstructor } from "../../main-pub-sub";
import {createAlert} from "../../../general/general__js/_alert";





let taskForm = document.createElement("form");
taskForm.classList.add("form-task");

let title = createBasicInput("form__input", "text", "title", "title");
title.setAttribute("placeholder", "Title");
title.classList.add("form__input--text");
let titleLabel = createLabel(title, "Title");
titleLabel.classList.add("form__label--hidden");
appendLabelInput(taskForm, titleLabel, title);


let textArea = createTextArea("form__input", "textArea", "textArea")

textArea.setAttribute("placeholder", "Details");

let textAreaLabel = createLabel(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden");
appendLabelInput(taskForm, textAreaLabel, textArea);

let div = document.createElement("div");
div.classList.add("form__div");
let date = createBasicInput("form__input", "date", "date", "date");
let dateLabel = createLabel(date, "Due Date:");
appendLabelInput(div, dateLabel, date);
taskForm.appendChild(div);

/* SELECT PROJECT */
const selectProject = document.createElement("select");
selectProject.setAttribute("id", "select-project");
selectProject.setAttribute("name", "project");
selectProject.classList.add("form__input")

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

const selectLabel = createLabel(selectProject, "Project:");
appendLabelInput(div, selectLabel, selectProject);


/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
fieldset.classList.add("form__fieldset")
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);


let priorityLow = createRadioInput("low", "fieldset__input-radio");
let priorityMedium = createRadioInput("medium", "fieldset__input-radio");
let priorityHigh = createRadioInput("high", "fieldset__input-radio");


appendRadioInputs(fieldset, [priorityLow, priorityMedium, priorityHigh]);
taskForm.appendChild(fieldset);


let submit = document.createElement("button");

submit.textContent = "Create Task";
submit.setAttribute("type", "button");
submit.classList.add("form-task__btn")
taskForm.appendChild(submit);

 
function checkDate() {
  let dateProcessed = new Date(date.value);
  if (date.value) {
    dateProcessed = dateProcessed.toISOString().split("T")[0];   
  }
  return (!date.value ) ? "" : dateProcessed;
}

function displayTasks() {
  let radio = document.querySelector("input:checked");
  if (!title.value) {
    return createAlert("Please create a title for your task!");
  }
  if (!radio) {
   return createAlert("Please select a priority for your task!");
  }

  
  let obj = new TaskConstructor(
    title.value,
    textArea.value,
    checkDate(),
    radio.value,
    selectProject.value
  );
  obj.pushId();
  obj.displayAll();
  taskForm.reset();
}

submit.addEventListener("click", displayTasks);

export { taskForm, subSelectProjectInput, subClearSelectOptions };
