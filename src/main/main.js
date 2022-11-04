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
  modal.setAttribute("style", "animation-name : swirl-in-fwd; animation-duration: 0.5s");
  

});
/*display search modal button*/
const displaySearchModal = document.createElement("button");
displaySearchModal.setAttribute("type", "button");
displaySearchModal.classList.add("main__display-search-btn", "c-main__display-search-btn");


displaySearchModal.addEventListener("click", () => {

  searchModal.classList.remove("main__search-modal--hidden");
  searchModal.setAttribute("style", "animation-name : swing-in-left; animation-duration: 0.5s");
 
  
  modal.classList.add("main__modal--hidden");
});

function hide() {
  searchModal.classList.add("main__search-modal--hidden")
}
function hideModal() {
  modal.classList.add("main__modal--hidden")

}
document.addEventListener("click", function (event) {
  if (!event.target.closest(".main__search-modal")&& !event.target.matches(".main__display-search-btn")  && (searchModal.classList.contains("main__search-modal--hidden")== false)) {
    searchModal.setAttribute("style", "animation-name : swing-out-left; animation-duration: 0.5s");
    setTimeout(hide, 500) 
  }   else if (!event.target.closest(".main__modal")&& !event.target.matches(".main__display-form-btn")  && (searchModal.classList.contains("main__modal--hidden")== false)) {
    modal.setAttribute("style", "animation-name : swirl-out-bck; animation-duration: 0.6s");
    setTimeout(hideModal, 600) 
  } 
})

mainDiv.appendChild(display);
mainDiv.appendChild(displayFormModal);
mainDiv.appendChild(displaySearchModal)
mainDiv.appendChild(modal);
mainDiv.appendChild(searchModal);

export { mainDiv };
