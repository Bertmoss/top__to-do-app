const projectDisplay = document.createElement("div");
projectDisplay.classList.add("display__container-project--hidden")


function subscribeProject(obj) {
  /* have to clear the project Display element first */
 /*  
  } */
  let projectDiv = document.createElement("div"); 
  let heading = document.createElement("h3");
  heading.textContent = obj.title;
  projectDiv.appendChild(heading);
  let taskList = document.createElement("ul");
  taskList.classList.add(obj.title);
  projectDiv.appendChild(taskList);
  projectDisplay.appendChild(projectDiv);
}

function subscribeClearProjectDisplay() {
  while (projectDisplay.firstChild) {
    projectDisplay.removeChild(projectDisplay.lastChild);
  }}


function subTaskListItem(obj) {
  let taskList = document.querySelector("." + obj.project);
  console.log(obj.project)
  let listItem = document.createElement("li");
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
    date.classList.toggle("hidden")

  })
}

export {subscribeProject, projectDisplay, subTaskListItem, subscribeClearProjectDisplay}