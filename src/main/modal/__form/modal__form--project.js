
import {createBasicInput, appendLabelInput, createLabel} from "../../../general/general__js/_input"
import { ProjectConstructor,} from "../../main-pub-sub";


const projectForm = document.createElement("form");

/* inputs */
const project = createBasicInput("text", "project-title", "project");
const label = createLabel(project, "Title:" );
appendLabelInput(projectForm, label, project);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset"); 
submit.textContent = "Create Project";
projectForm.appendChild(submit);

function displayProjects() {
  let obj = new ProjectConstructor(project.value);
  obj.displayAll(obj);
}
let obj = new ProjectConstructor("general");
obj.displayAll(obj);

submit.addEventListener("click", displayProjects)

export {projectForm}
