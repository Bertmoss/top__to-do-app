let sideDiv = document.createElement("div");
sideDiv.classList.add("modal__side", "p-modal__side");

let taskButton = document.createElement("button");
taskButton.setAttribute("type", "button");
taskButton.textContent = 'TASK';
taskButton.classList.add("modal__side-btn")

let projectButton = document.createElement("button");
projectButton.setAttribute("type", "button");
projectButton.textContent = "PROJECT";

projectButton.classList.add("modal__side-btn")

let noteButton = document.createElement("button");
noteButton.setAttribute("type", "button");
noteButton.textContent = "NOTE";
noteButton.classList.add("modal__side-btn")


sideDiv.appendChild(taskButton)

sideDiv.appendChild(projectButton)

sideDiv.appendChild(noteButton)

export {sideDiv, taskButton, noteButton, projectButton} 