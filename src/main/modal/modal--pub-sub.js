import { pubSubFactory } from "../../general/general__js/pub-sub";
import { subscribeNote } from "../../main/display/__container/display__container--note";
import { subscribeProject, subTaskListItem } from "../../main/display/__container/display__container--project";
import { subscribeTask } from "../../main/display/__container/display__container--task";
import {subSelectProjectInput} from "./__form/modal__form--task";



/* PUBSUB MODULE FORMS and DISPLAY*/
let pubSubForms = pubSubFactory();

/* Note Constructor */

function NoteConstructor(title, details) {
  this.title = title;
  this.details = details;
}
NoteConstructor.prototype.publish = function () {
  pubSubForms.publish("note", { title: this.title, details: this.details });
};

/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
}

ProjectConstructor.prototype.publish = function (obj) {
  /* let obj = new ProjectConstructor(this.title) */;
  pubSubForms.publish("project", obj);
};

/* Task Constructor */

function TaskConstructor(title, details, date, priority, project) {
  (this.title = title),
    (this.details = details),
    (this.date = date),
    (this.priority = priority);
    (this.project = project)
}

TaskConstructor.prototype.publish = function () {
  let obj = new TaskConstructor(
    this.title,
    this.details,
    this.date,
    this.priority,
    this.project,
  );
  pubSubForms.publish("task", obj);
};

/* Subscribers */
pubSubForms.subscribe("project", subscribeProject);
pubSubForms.subscribe("project", subSelectProjectInput);
pubSubForms.subscribe("note", subscribeNote);
pubSubForms.subscribe("task", subscribeTask);
pubSubForms.subscribe("task", subTaskListItem);

export { NoteConstructor, ProjectConstructor, TaskConstructor,}