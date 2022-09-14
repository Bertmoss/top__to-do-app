import { pubSubFactory } from "../general/general__js/pub-sub";
import { subscribeNote } from "./display/__container/display__container--note";
import { subscribeProject, subTaskListItem, subscribeClearProjectDisplay } from "./display/__container/display__container--project";
import { subscribeTask } from "./display/__container/display__container--task";
import {subSelectProjectInput, subClearSelectOptions} from "./modal/__form/modal__form--task";


class ObjectClass {
   objArr = [];

   get objArr() {
    return this.objArr;
   }

   set objArr(arr) {
    if (!Array.isArray(arr)) {
      return alert("Not an array");
    }
    return this.objArr = arr;
   }

   push(obj) {
    this.objArr.push(obj);
   }

   remove(index) {
    this.objArr.splice(index, 1);
   }

}

let projects = new ObjectClass();
let pubSubProjects = pubSubFactory();


/* Project Constructor */
function ProjectConstructor(title) {
  this.title = title;
  this.index = projects.objArr.length;
}

ProjectConstructor.prototype.publish = function(obj) {
  pubSubProjects.publish("project", obj);
};

ProjectConstructor.prototype.displayAll = function(obj) {
  pubSubProjects.publish("clear", true);
  projects.push(obj);
  projects.objArr.forEach((object) => {
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