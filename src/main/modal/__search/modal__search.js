import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import { displayMod } from "../../main-pub-sub";

/* search modal */
let searchModal = document.createElement("div");
searchModal.classList.add("main__search-modal--hidden", "p-main__search-modal", "main__search-modal");


/* search form */
let searchForm = document.createElement("form");
let searchInput = createBasicInput("search-modal__input", "text", "search", "search");
searchInput.setAttribute("placeholder", "Search")
searchInput.setAttribute("autocomplete", "off")

let searchLabel = createLabel(searchInput, "Search");
searchLabel.classList.add("search-modal__label")
appendLabelInput(searchForm, searchLabel, searchInput);

searchInput.addEventListener("input", ()=> {
  displayMod.updateSearch(searchInput.value);
})

function hide() {
  searchModal.classList.add("main__search-modal--hidden")
}

/* search modal hides when click outside of it */
document.addEventListener("click", function (event) {
  if (!event.target.closest(".main__search-modal")&& !event.target.matches(".main__display-search-btn")  && (searchModal.classList.contains("main__search-modal--hidden")== false)) {
    searchModal.setAttribute("style", "animation-name : swing-out-left; animation-duration: 0.5s");
    searchInput.value = "";
    setTimeout(hide, 500) 
  } 
}) 

searchModal.appendChild(searchForm);

export {searchModal, searchInput};

