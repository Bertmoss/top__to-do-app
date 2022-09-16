import { taskRemover } from "../../main-pub-sub";
import { projectRemover } from "../../main-pub-sub";
const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden")


function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");

  
  dltBtn.addEventListener("click", () => {
    taskRemover.remove(obj.id);
    
  }); 

  taskDiv.appendChild(dltBtn);

  let title = document.createElement("h6");
  title.textContent = obj.title;
  taskDiv.appendChild(title);

  let details = document.createElement("p");
  details.textContent = obj.details;
  taskDiv.appendChild(details);

  let date = document.createElement("p");
  date.textContent = obj.date;
  taskDiv.appendChild(date);

  let priority = document.createElement("p");
  priority.textContent = obj.priority;
  taskDiv.appendChild(priority);
  taskDisplay.appendChild(taskDiv)
}

function subRmvTaskDisplay() {
  while (taskDisplay.firstChild) {
    taskDisplay.removeChild(taskDisplay.lastChild);
  }
}

export { subscribeTask, taskDisplay, subRmvTaskDisplay };
