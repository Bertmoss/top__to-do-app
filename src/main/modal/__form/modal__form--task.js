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
import {createAlert} from "../../../general/general__js/_alert"

let taskForm = document.createElement("form");
taskForm.classList.add("form");

let title = createBasicInput("form__input", "text", "title", "title");
title.setAttribute("placeholder", "Title: Groceries");
title.classList.add("form__input--text");
let titleLabel = createLabel(title, "Title");
titleLabel.classList.add("form__label--hidden");
appendLabelInput(taskForm, titleLabel, title);


let textArea = createTextArea("form__input--textArea", "textArea", "textArea")
textArea.classList.add( /* are these necessary?? */
  "form__input--text",
  "form-input"
);
textArea.setAttribute("placeholder", "2 potatoes");

let textAreaLabel = createLabel(textArea, "Details");
textAreaLabel.classList.add("form__label--hidden");
appendLabelInput(taskForm, textAreaLabel, textArea);

let div = document.createElement("div");
let date = createBasicInput("form__input", "date", "date", "date");
let dateLabel = createLabel(date, "Due date:");
appendLabelInput(div, dateLabel, date);
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

const selectLabel = createLabel(selectProject, "Project");
appendLabelInput(taskForm, selectLabel, selectProject);

/*RADIO BUTTONS*/
let fieldset = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.textContent = "Priority";
fieldset.appendChild(legend);


let priorityLow = createRadioInput("low", "form__input");
let priorityMedium = createRadioInput("medium", "form__input");
let priorityHigh = createRadioInput("high", "form__input");




appendRadioInputs(fieldset, [priorityLow, priorityMedium, priorityHigh]);

taskForm.appendChild(fieldset);

let submit = document.createElement("button");

submit.textContent = "Create Task";
submit.setAttribute("type", "button");
taskForm.appendChild(submit);

function displayTasks() {
  submit.setAttribute("type", "button");
  let radio = document.querySelector("input:checked");
  if (!title.value) {
    return createAlert("Please create a title for your task!");
  }
  if (!radio) {
   return createAlert("Please select a priority for your task!");
  }
  submit.setAttribute("type", "reset");
  let obj = new TaskConstructor(
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
export { taskForm, subSelectProjectInput, subClearSelectOptions };
