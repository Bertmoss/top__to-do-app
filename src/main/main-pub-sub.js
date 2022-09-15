import { pubSubFactory } from "../general/general__js/pub-sub";
import { subscribeNote } from "./display/__container/display__container--note";
import {
  subscribeProject,
  subTaskListItem,
  subscribeClearProjectDisplay,
} from "./display/__container/display__container--project";
import { subscribeTask } from "./display/__container/display__container--task";
import {
  subSelectProjectInput,
  subClearSelectOptions,
} from "./modal/__form/modal__form--task";

/* OBJECT CLASS */
/* holds an array of all the objects. The objIdGen is used to assign unique ids to each obj */
class ObjectArrClass {
  objArr = [];
  objIdGen = 0;

  get objArr() {
    return this.objArr;
  }

  set objArr(arr) {
    if (!Array.isArray(arr)) {
      return alert("Not an array");
    }
    return (this.objArr = arr);
  }

  push(obj) {
    this.objArr.push(obj);
  }

  remove(index) {
    this.objArr.splice(index, 1);
  }
}

/* REMOVE CONSTRUCTOR */
/* used to remove objects from the display by matching the data index to the index property in each object */

function RemoveConstructor(pubSub, classObj) {
  this.pubSub = pubSub;
  this.classObj = classObj;
}

RemoveConstructor.prototype.remove = function (dataId) {
  let indexOfMatch = this.classObj.objArr.findIndex((obj) => {
    return obj.id === dataId ? true : false;
  });
  this.classObj.remove(indexOfMatch);
  this.pubSub.publish("clear", true);
  this.classObj.objArr.forEach((object) => {
    object.publish(object);
  });
};

let projects = new ObjectArrClass();
let pubSubProjects = pubSubFactory();
let projectRemover = new RemoveConstructor(pubSubProjects, projects);



let pubSubObjectConstructors = pubSubFactory();


/* WEIRD OBJ make this into pubSub ? */
function subPublishRequest(obj) {
  let pubSub;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
  }
  pubSub.publish("display", obj.obj);  
}


function subDisplayAllRequest(obj) {
  let pubSub;
  let objArr;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
    objArr = projects;
  }
  pubSub.publish("clear", true);
  objArr.push(obj.obj);
  objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
  });

}

pubSubObjectConstructors.subscribe("publish", subPublishRequest );

pubSubObjectConstructors.subscribe("displayAll", subDisplayAllRequest);

/* Object Constructor*/
function ObjectConstructor( /* pubSub, objArr */) {
/*   this.pubSub = pubSub;
  this.objArr = objArr; */
}
/* 
ObjectConstructor.prototype.getId = function() {this.objArr.objIdGen += 1};
 */
ObjectConstructor.prototype.publish = function(obj) {
  /* this.pubSub.publish("display", obj); */
  pubSubObjectConstructors.publish("publish", {type:this.type, obj})
}

ObjectConstructor.prototype.displayAll = function(obj) {
  pubSubObjectConstructors.publish("displayAll",{type:this.type, obj});
 /*  this.pubSub.publish("clear", true);
  this.objArr.push(obj);
  this.objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
  }); */
};

function ProjectConstructor(title) {
  this.title = title;/* 
  this.pubSub = pubSubProjects;
  this.objArr = projects; *//* 
  this.id = this.objArr.objIdGen += 1; */
  this.id = projects.objIdGen += 1;
  this.type = "project";
}

let test = new ObjectConstructor(pubSubProjects, projects)
ProjectConstructor.prototype = Object.create(ObjectConstructor.prototype);


/* Project Constructor */
/* function ProjectConstructor(title) {
  this.title = title;
  this.id = projects.objIdGen += 1;
}

ProjectConstructor.prototype.publish = function (obj) {
  pubSubProjects.publish("project", obj);
};

ProjectConstructor.prototype.displayAll = function (obj) {
  pubSubProjects.publish("clear", true);
  projects.push(obj);
  projects.objArr.forEach((object) => {
    object.publish(object);
  });
}; */

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
  this.project = project;
}

TaskConstructor.prototype.publish = function () {
  let obj = new TaskConstructor(
    this.title,
    this.details,
    this.date,
    this.priority,
    this.project
  );
  pubSubForms.publish("task", obj);
};

/* Subscribers */
pubSubProjects.subscribe("display", subscribeProject);
pubSubProjects.subscribe("display", subSelectProjectInput);
pubSubForms.subscribe("note", subscribeNote);
pubSubForms.subscribe("task", subscribeTask);
pubSubForms.subscribe("task", subTaskListItem);
pubSubProjects.subscribe("clear", subscribeClearProjectDisplay);
pubSubProjects.subscribe("clear", subClearSelectOptions);

export { NoteConstructor, ProjectConstructor, TaskConstructor, projectRemover };
