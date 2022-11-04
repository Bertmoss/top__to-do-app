import { modal } from "./modal/modal";
import { searchModal } from "./modal/__search/modal__search";
import { display } from "./display/display";

const mainDiv = document.querySelector("main");
mainDiv.classList.add("main");

/* display form modal button */
const displayFormModal = document.createElement("button");
displayFormModal.setAttribute("type", "button");
displayFormModal.textContent = "+";
displayFormModal.classList.add("main__display-form-btn", "c-main__display-form-btn");
displayFormModal.addEventListener("click", () => {
  modal.classList.remove("main__modal--hidden");
  searchModal.classList.add("main__search-modal--hidden")
});
/*display search modal button*/
const displaySearchModal = document.createElement("button");
displaySearchModal.setAttribute("type", "button");
displaySearchModal.classList.add("main__display-search-btn", "c-main__display-search-btn");
displaySearchModal.addEventListener("click", () => {

  searchModal.classList.remove("main__search-modal--hidden");
  searchModal.setAttribute("style", "animation-name : swing-in-left; animation-duration: 0.5s"); //work on the animation so that it expands and add this https://techstacker.com/close-modal-click-outside-vanilla-javascript/
  
  modal.classList.add("main__modal--hidden");
});



mainDiv.appendChild(display);
mainDiv.appendChild(displayFormModal);
mainDiv.appendChild(displaySearchModal)
mainDiv.appendChild(modal);
mainDiv.appendChild(searchModal);

export { mainDiv };
