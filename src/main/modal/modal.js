import * as side from "./__side/modal__side";
import { taskForm } from "./__form/modal__form--task";
import { projectForm } from "./__form/modal__form--project";
import { noteForm } from "./__form/modal__form-note";

let modal = document.createElement("div");
modal.classList.add("modal", "p-main__modal");

let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.setAttribute(
  "style",
  "position:absolute"
); /* has to be moved to scss!!! */
closeBtn.textContent = "x";
modal.appendChild(closeBtn);

function hideModal() {
  removeForm();
  formContainer.appendChild(taskForm);
  modal.classList.add("main__modal--hidden");
}
closeBtn.addEventListener("click", hideModal);

/* side */
modal.appendChild(side.sideDiv);

/* form on initial load */
let formContainer = document.createElement("div");
formContainer.appendChild(taskForm);
formContainer.classList.add("modal__form");
modal.appendChild(formContainer);

/* remove form func */
function removeForm() {
  while (formContainer.firstChild) {
    formContainer.firstChild.reset();
    formContainer.removeChild(formContainer.firstChild);
  }
}

/* side button event listeners */
side.taskButton.addEventListener("click", () => {
  removeForm();
  formContainer.appendChild(taskForm);
});
side.projectButton.addEventListener("click", () => {
  removeForm();
  formContainer.appendChild(projectForm);
});
side.noteButton.addEventListener("click", () => {
  removeForm();
  formContainer.appendChild(noteForm);
});
/* hide modal when clicked outside of the modal */
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".p-main__modal") &&
    !event.target.matches(".main__display-form-btn") &&
    modal.classList.contains("main__modal--hidden") == false
  ) {
    modal.setAttribute(
      "style",
      "animation-name : swirl-out-bck; animation-duration: 0.6s"
    );
    setTimeout(hideModal, 600);
  }
});

export { modal };
