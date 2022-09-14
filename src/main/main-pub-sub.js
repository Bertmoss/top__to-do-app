import { pubSubFactory } from "../general/general__js/pub-sub";
import { subscribeNote } from "./display/__container/display__container--note";
import { subscribeProject, subTaskListItem, subscribeClearProjectDisplay } from "./display/__container/display__container--project";
import { subscribeTask } from "./display/__container/display__container--task";
import {subSelectProjectInput, subClearSelectOptions} from "./modal/__form/modal__form--task";


/* PROJECT CONSTRUCTOR */
let pubSubProjects = pubSubFactory();
pubSubProjects["projectArr"] = [];

console.log(pubSubProjects.projectArr);

/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
  this.index = pubSubProjects.projectArr.length
}

ProjectConstructor.prototype.publish = function(obj) {
  pubSubProjects.publish("project", obj);
};

ProjectConstructor.prototype.push = function(obj) {
  pubSubProjects.projectArr.push(obj);
}

ProjectConstructor.prototype.displayAll = function(obj) {
  pubSubProjects.publish("clear", true);
  pubSubProjects.projectArr.push(obj)
  console.log(pubSubProjects.projectArr);
  pubSubProjects.projectArr.forEach((object) => {
    object.publish(object);        
  });
}


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
pubSubProjects.subscribe("project", subscribeProject);
pubSubProjects.subscribe("project", subSelectProjectInput);
pubSubForms.subscribe("note", subscribeNote);
pubSubForms.subscribe("task", subscribeTask);
pubSubForms.subscribe("task", subTaskListItem);
pubSubProjects.subscribe("clear", subscribeClearProjectDisplay);
pubSubProjects.subscribe("clear", subClearSelectOptions)



export { NoteConstructor, ProjectConstructor, TaskConstructor}