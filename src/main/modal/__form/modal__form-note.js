import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import { NoteConstructor } from "../../main-pub-sub";
import { createAlert } from "../../../general/general__js/_alert";

const noteForm = document.createElement("form");
noteForm.classList.add("form-note")

/* inputs */
const noteTitle = createBasicInput(
  "form__input",
  "text",
  "note-title",
  "note-title"
);
noteTitle.setAttribute("required", "");
const noteTitleLabel = createLabel(noteTitle, "Title:");
appendLabelInput(noteForm, noteTitleLabel, noteTitle);

const note = document.createElement("textarea");
note.setAttribute("id", "note");
note.setAttribute("name", "note");
note.setAttribute("required", "");

const noteLabel = createLabel(note, "Details:");
appendLabelInput(noteForm, noteLabel, note);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "button");
submit.classList.add("form-note__btn")
submit.textContent = "Create Note";
noteForm.appendChild(submit);



/* PUBSUB */

function publishNote() {
  if (noteTitle.value == "" || note.value == "") {
    return createAlert("Please fill out both the title and details fields!")
  } 
  let obj = new NoteConstructor(noteTitle.value, note.value);
  noteForm.reset();
  obj.displayAll();
}

submit.addEventListener("click", publishNote);

export { noteForm };
