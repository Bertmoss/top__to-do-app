import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import {taskRemover, projectRemover} from "../../main-pub-sub";

/* search modal */
let searchModal = document.createElement("div");
searchModal.classList.add("main__search-modal--hidden");

/* close search modal btn */
let closeBtn = document.createElement("button");
closeBtn.setAttribute("type", "button");
closeBtn.textContent = "x";
closeBtn.addEventListener("click", () => {
  searchModal.classList.add("main__search-modal--hidden");
  searchInput.value = "";
})
searchModal.appendChild(closeBtn);

/* search form */
let searchForm = document.createElement("form");
let searchInput = createBasicInput("search-form__search-input", "text", "search", "search");
let searchLabel = createLabel(searchInput, "Search");
appendLabelInput(searchForm, searchLabel, searchInput);

searchInput.addEventListener("input", ()=> {/* 
  projectRemover.searchProjects(searchInput.value) */
  taskRemover.searchTasks(searchInput.value);
})


searchModal.appendChild(searchForm);

export {searchModal, searchInput};

