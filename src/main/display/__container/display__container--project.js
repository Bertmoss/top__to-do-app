import { projectRemover, taskRemover } from "../../main-pub-sub";
import { createBasicInput } from "../../../general/general__js/_input";
import { createTable } from "../../../general/general__js/_table";
import { add } from "date-fns";
import { createAlert } from "../../../general/general__js/_alert";


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
        let alert = createAlert("There seem to be some unfinished tasks in this project. Are you sure you would like to delete it?");
        let yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", () => {
          
          taskRemover.removeByProject(obj);
          console.log(`this one yo ${obj}`)
          console.log(obj)
          projectRemover.remove(obj.id);

         
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
        projectRemover.remove(obj.id);
        taskRemover.removeByProject(obj);
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
  taskRemover.clearDisplay();
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
  console.log(obj);
  let taskList = document.querySelector("." + obj.project);

  if (taskList) {
  taskList.setAttribute("data-id", obj.id); 
  } else {
    return;
  }

  let completeInput = createBasicInput("project-div__done-input", "checkbox", "complete-input", "complete-input"); //finished checkbox
  
  
  let listItem = document.createElement("li");
  listItem.setAttribute("data-li-id", obj.id)
  completeInput.addEventListener("click", ()=> {
    taskRemover.complete(obj.id);
    (obj.status == "complete") ? taskRemover.removeTaskFromProjectIdArr(obj): obj.pushId() ;  
    let taskTable = document.querySelectorAll(`li[data-li-id = "${obj.id}"] th,li[data-li-id = "${obj.id}"] td`);
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    })
  })
  listItem.appendChild(completeInput);
  createTable(obj, listItem);

  listItem.addEventListener("click", () => {
    let hiddenRows = document.querySelectorAll(`li[data-li-id = "${obj.id}"] tr:not(:first-child)`);
    hiddenRows.forEach((row) => {
      row.classList.toggle("hidden");
    })
   
  })
  
  taskList.appendChild(listItem);
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  })
}

export {
  subscribeProject,
  projectDisplay,
  subTaskListItem,
  subRmvProjectDisplay,
  subRmvTasks
  /* generateProjectDisplay */
};
