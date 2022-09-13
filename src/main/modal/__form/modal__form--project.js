
import {createBasicInput, appendLabelInput, createLabel} from "../../../general/general__js/_input"
import { ProjectConstructor, publish } from "../../main-pub-sub";


const projectForm = document.createElement("form");

/* inputs */
const project = createBasicInput("text", "project-title", "project");
const label = createLabel(project, "Title:" );
appendLabelInput(projectForm, label, project);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset"); /* maybe clear instead*/
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
function test () {
  publish("clearProject", true)
  createProject();
  publishProjects()
  console.log(projectsArr)
}


function publishProject() { 
  let obj = new ProjectConstructor(project.value);
  obj.publish(obj)
}



submit.addEventListener("click", test)

export {projectForm}
