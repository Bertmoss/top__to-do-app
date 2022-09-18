import { taskRemover } from "../../main-pub-sub";
import { projectRemover } from "../../main-pub-sub";
const taskDisplay = document.createElement("div");
taskDisplay.classList.add("display__container-task--hidden")


function subscribeTask(obj) {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("data-id", obj.id);
  /* DELETE BUTTON */
  let dltBtn = document.createElement("button");
  dltBtn.textContent = "x";
  dltBtn.setAttribute("type", "button");
  dltBtn.addEventListener("click", () => {
    taskRemover.remove(obj.id);
  });
  taskDiv.appendChild(dltBtn); 

  /*EDIT BUTTON*/
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.setAttribute("type", "button");

/* This works in principle! Now need to find a way to condense it! */

  editBtn.addEventListener("click", () => {
    let newTitleValue = document.createElement("input");
    newTitleValue.setAttribute("placeholder", obj.title);
    taskDiv.replaceChild(newTitleValue, titleValue)

    let submitChange = document.createElement("button");
    submitChange.addEventListener("click", () => {
      obj.title = newTitleValue.value;
      titleValue.textContent = obj.title;
      taskDiv.replaceChild(titleValue, newTitleValue);
      console.log(obj)
    })
    taskDiv.appendChild(submitChange)

  })
  taskDiv.appendChild(editBtn)

  

  let title = document.createElement("p");
  title.textContent = "title:";
  let titleValue = document.createElement("p")
  titleValue.textContent = obj.title;
  taskDiv.appendChild(title);
  taskDiv.appendChild(titleValue);

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
function createForm(obj) {
  v
}


export { subscribeTask, taskDisplay, subRmvTaskDisplay };
