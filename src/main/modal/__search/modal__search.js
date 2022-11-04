import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import { displayMod } from "../../main-pub-sub";

/* search modal */
let searchModal = document.createElement("div");
searchModal.classList.add("main__search-modal--hidden", "p-main__search-modal", "main__search-modal");

/* close search modal btn */
let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.textContent = "x";
closeBtn.classList.add("search-modal__hide-btn", "p-search-modal__hide-btn")
closeBtn.addEventListener("click", () => {
  searchModal.classList.add("main__search-modal--hidden");
  searchInput.value = "";
})
searchModal.appendChild(closeBtn);

/* search form */
let searchForm = document.createElement("form");
let searchInput = createBasicInput("search-form__search-input", "text", "search", "search");
searchInput.setAttribute("placeholder", "Search")
let searchLabel = createLabel(searchInput, "Search");
searchLabel.classList.add("search-modal__label")
appendLabelInput(searchForm, searchLabel, searchInput);

searchInput.addEventListener("input", ()=> {
  displayMod.updateSearch(searchInput.value);
})


searchModal.appendChild(searchForm);

export {searchModal, searchInput};

