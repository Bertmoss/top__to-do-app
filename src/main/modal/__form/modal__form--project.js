
import {createBasicInput, appendLabelInput, createLabel} from "../../../general/general__js/_input"
import { ProjectConstructor, publish } from "../../main-pub-sub";


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

const projectsArr = [new ProjectConstructor("general"),];

function createProject() {
  projectsArr.push(new ProjectConstructor(project.value));
}

function publishProjects() {
  projectsArr.forEach((obj) => {
    obj.publish(obj);
  })
}
function  displayProjects() {
  publish("clearProject", true)
  createProject();
  publishProjects()
}
publishProjects();

submit.addEventListener("click", displayProjects)

export {projectForm}
