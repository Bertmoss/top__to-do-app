import {
  createBasicInput,
  appendLabelInput,
  createLabel,
} from "../../../general/general__js/_input";
import { NoteConstructor } from "../../main-pub-sub";

const noteForm = document.createElement("form");

/* inputs */
const noteTitle = createBasicInput(
  "form__input",
  "text",
  "note-title",
  "note-title"
);
const noteTitleLabel = createLabel(noteTitle, "Title:");
appendLabelInput(noteForm, noteTitleLabel, noteTitle);

const note = document.createElement("textarea");
note.setAttribute("id", "note");
note.setAttribute("name", "note");

const noteLabel = createLabel(note, "Details");
appendLabelInput(noteForm, noteLabel, note);

/* "submit" button */
const submit = document.createElement("button");
submit.setAttribute("type", "reset"); /* maybe clear instead*/
submit.textContent = "Create Note";
noteForm.appendChild(submit);

/* PUBSUB */

function publishNote() {
  let obj = new NoteConstructor(noteTitle.value, note.value);
  obj.displayAll();
}

submit.addEventListener("click", publishNote);

export { noteForm };
