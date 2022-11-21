import { displayMod } from "../../main-pub-sub";
import { createBasicInput } from "../../../general/general__js/_input";
import { createTable } from "../../../general/general__js/_table";
import { add } from "date-fns";
import { createAlert } from "../../../general/general__js/_alert";

const projectDisplay = document.createElement("div");
projectDisplay.classList.add(
  "display__container-project--hidden",
  "display__container-project"
);

let projectContainer = document.createElement("div");
projectContainer.classList.add("project-container")



function subscribeProject(obj) {
  let projectDiv = document.createElement("div");
  projectDiv.setAttribute("data-id", obj.id);
  projectDiv.classList.add("project-div", "p-project-container__project-div");
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("project-div__btn-div")
  projectDiv.appendChild(btnDiv)
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  heading.classList.add("p-btn-div__heading")
  btnDiv.appendChild(heading);
  /* delete button */
  if (obj.id !== 1) {
    //exemption for the general project
    let dltBtn = document.createElement("button");
    dltBtn.textContent = "delete";
    dltBtn.setAttribute("type", "button");
    dltBtn.classList.add("btn-div__dlt-btn")
    dltBtn.addEventListener("click", () => {
      if (obj.taskIdArr.length > 0) {
        let alert = createAlert(
          "There seem to be some unfinished tasks in this project. Are you sure you would like to delete it?"
        );
        let yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        yesBtn.addEventListener("click", () => {
          obj.removeByProject();
          obj.remove();
          alert.remove();
        });
        alert.appendChild(yesBtn);
        let noBtn = document.createElement("button");
        noBtn.textContent = "No";
        noBtn.addEventListener("click", () => {
          alert.remove();
        });
        alert.appendChild(noBtn);
      } else {
       obj.remove()

        obj.removeByProject();
      }
    });
    btnDiv.appendChild(dltBtn);
  }

  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title, "task-list", "p-task-div__task-list");
  projectDiv.appendChild(taskList);
  projectContainer.appendChild(projectDiv);
  /* projectDisplay.appendChild(projectDiv); */
  projectDisplay.appendChild(projectContainer)
  displayMod.update();
  console.log(displayMod)
}

function subRmvProjectDisplay() {
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.lastChild);
  }
}

/* Removes Tasks Items when */
function subRmvTasks() {
  let taskList = document.querySelectorAll(".task-list");
  taskList.forEach((listItem) => {
    while (listItem.firstChild) {
      listItem.removeChild(listItem.lastChild);
    }
  });
}

function subTaskListItem(obj) {
  console.log(obj);
  let taskList = document.querySelector("." + obj.project);

  if (taskList) {
    taskList.setAttribute("data-id", obj.id);
  } else {
    return;
  }

  let completeInput = createBasicInput(
    "project-div__done-input",
    "checkbox",
    "complete-input",
    "complete-input"
  ); 
  completeInput.classList.add("p-project-div__done-input")
  //finished checkbox
  let listItem = document.createElement("li");
  listItem.setAttribute("data-li-id", obj.id);
  completeInput.addEventListener("click", () => {
    obj.complete();
    obj.status == "complete" ? obj.removeTaskFromProjectIdArr() : obj.pushId();
    let taskTable = document.querySelectorAll(
      `li[data-li-id = "${obj.id}"] th,li[data-li-id = "${obj.id}"] td`
    );
    taskTable.forEach((element) => {
      element.classList.toggle("complete");
    });
  });
  listItem.appendChild(completeInput);
  createTable(obj, listItem);

  listItem.addEventListener("click", () => {
    let hiddenRows = document.querySelectorAll(
      `li[data-li-id = "${obj.id}"] tr:not(:first-child)`
    );
    hiddenRows.forEach((row) => {
      row.classList.toggle("hidden");
    });
  });

  taskList.appendChild(listItem);
  let hiddenRows = document.querySelectorAll(".task-list tr:not(:first-child)");
  hiddenRows.forEach((row) => {
    row.classList.add("hidden");
  });
}

export {
  subscribeProject,
  projectDisplay,
  subTaskListItem,
  subRmvProjectDisplay,
  subRmvTasks,
  /* generateProjectDisplay */
};
