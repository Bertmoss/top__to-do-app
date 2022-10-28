import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import { ProjectConstructor } from "../../main-pub-sub";
import { createAlert } from "../../../general/general__js/_alert";

const projectForm = document.createElement("form");

/* inputs */
const project = createBasicInput(
  "form__input",
  "text",
  "project-title",
  "project"
);
const label = createLabel(project, "Title:");
appendLabelInput(projectForm, label, project);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset");
submit.textContent = "Create Project";
projectForm.appendChild(submit);

function displayProjects() {
  if (!project.value) {
    createAlert("Please provide a name for your project!")
  } else {
    let obj = new ProjectConstructor(project.value);
    obj.displayAll();
  }
}
let obj = new ProjectConstructor("general");
obj.displayAll();

submit.addEventListener("click", displayProjects);

export { projectForm };
