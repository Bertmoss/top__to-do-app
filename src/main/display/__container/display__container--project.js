import { projectRemover, taskRemover } from "../../main-pub-sub";
import { createBasicInput } from "../../../general/general__js/_input";
import { createTable } from "../../../general/general__js/_table";


const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden");
 
function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  
  dltBtn.addEventListener("click", () => {
    projectRemover.remove(obj.id);
    taskRemover.removeByProject(obj);
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
  let taskList = document.querySelector("." + obj.project);/* Finished checkbox */
  taskList.setAttribute("data-id", obj.id);
  
  let completeInput = createBasicInput("project-div__done-input", "checkbox", "complete-input", "complete-input");
  
  
  let listItem = document.createElement("li");
  completeInput.addEventListener("click", ()=> {
    taskRemover.complete(obj.id);
    let taskTable = document.querySelectorAll("th, td");
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })
  listItem.appendChild(completeInput);



  createTable(obj, listItem);
  taskList.appendChild(listItem);
  

  /* 
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
  }); */
}

export {
  subscribeProject,
  projectDisplay,
  subTaskListItem,
  subRmvProjectDisplay,
  subRmvTasks
  /* generateProjectDisplay */
};
