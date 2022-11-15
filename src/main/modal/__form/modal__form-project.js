import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import { ProjectConstructor } from "../../main-pub-sub";
import { createAlert } from "../../../general/general__js/_alert";

const projectForm = document.createElement("form");
projectForm.classList.add("form-project")

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
submit.setAttribute("type", "button");
submit.textContent = "Create Project";
submit.classList.add("form-project__btn")
projectForm.appendChild(submit);

function displayProjects() {
  if (!project.value) {
   return createAlert("Please provide a name for your project!")
  } 
  let obj = new ProjectConstructor(project.value);
  projectForm.reset();
  obj.displayAll();
}
let obj = new ProjectConstructor("General");
obj.displayAll();

submit.addEventListener("click", displayProjects);

export { projectForm };
