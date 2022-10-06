import { compareAsc, parseISO } from "date-fns";
import { pubSubFactory } from "../general/general__js/pub-sub";
import { subscribeNote } from "./display/__container/display__container--note";
import {
  subscribeProject,
  subTaskListItem,
  subRmvProjectDisplay,
  subRmvTasks,
} from "./display/__container/display__container--project";
import {
  subscribeTask,
  subRmvTaskContainer,
  subCompleteTask,
} from "./display/__container/display__container--task";
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
class TaskObjectArrClass extends ObjectArrClass {
  customSort(value) {
    if (value == "most") {
      this.objArr.sort(function (a, b) {
        return b.countPriority() - a.countPriority();
      });
    } else if (value == "least") {
      this.objArr.sort(function (a, b) {
        return a.countPriority() - b.countPriority();
      });
    } else if (value == "date-ascending") {
      this.objArr.sort(function (a,b) {
        return compareAsc(parseISO(a.date), parseISO(b.date))
      });
    }  else if (value == "date-descending") {
      this.objArr.sort(function (a,b) {
        return compareAsc(parseISO(b.date), parseISO(a.date))
      });
    }
  }
} 






let displayMod = (() => { 
  function _clear() {
    pubSubTasks.publish("clear", true);
  }

 function _displayTasks() {
    tasks.objArr.forEach((object) => {
      if (object.status == "complete") {
      } else {
        object.publish(object);
      }
    });
  }
 function update() {
    _clear();
    _displayTasks()
  };
  
  function updateSearch(searchValue) {
    _clear();
    tasks.objArr.forEach((object) => {
      let published;
      for (const [key, value] of Object.entries(object)) {
        if ( key == "id", key == "status", key== "type" ) {
          continue;
        } else {
          let found = value.toString().toUpperCase().includes(searchValue.toUpperCase());
          if (found && !published) {
            object.publish(object);
            published = true;
          } 
        }
      }
    })
  }
  
  function _displayCompleteTasks() {
    tasks.objArr.forEach((object) => {
      if (object.status == "complete") {
        object.publishComplete(object);
      }})
  }
  function updateComplete() {
    _clear()
    _displayCompleteTasks()
  }


 return {
  update,
  updateSearch,
  updateComplete
 }
})() 


/* REMOVE CONSTRUCTOR */
/* used to remove objects from the display by matching the data index to the index property in each object */
/* REFACTOR REMOVE CONSTRUCTOR IT EXPOSES PUBSUB and CLASSOBJ  instead of hereditary use a composite model. Create different functions that take pubSub/ObjectArr as an argument
and prototype them!*/

function RemoveConstructor(pubSub, classObj) {
  this.pubSub = pubSub;
  this.classObj = classObj;
} 
/* both projectRemover and taskRemover use this */
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


RemoveConstructor.prototype.displaySorted = function(value) {
  tasks.customSort(value);
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
  } else if (obj.type == "task") {
    pubSub = pubSubTasks;
  }
  pubSub.publish("display", obj.obj);
}

function subDisplayAllRequest(obj) {
  let pubSub;
  let objArr;
  if (obj.type == "project") {
    pubSub = pubSubProjects;
    objArr = projects;
  } else if (obj.type == "task") {
    pubSub = pubSubTasks;
    objArr = tasks;
  }
  pubSub.publish("clear", true);
  objArr.push(obj.obj);
  console.log(objArr.objArr);
  objArr.objArr.forEach((object) => {
    if (object.status == "complete") {
    } else {
      object.publish(object);
    }
    
  });
}

pubSubObjectConstructors.subscribe("publish", subPublishRequest);

pubSubObjectConstructors.subscribe("displayAll", subDisplayAllRequest);

/* Object Constructor*/
function ObjectConstructor(/* pubSub, objArr */) {
  /*   this.pubSub = pubSub;
  this.objArr = objArr; */
}
/* 
ObjectConstructor.prototype.getId = function() {this.objArr.objIdGen += 1};
 */
ObjectConstructor.prototype.publish = function (obj) {
  /* this.pubSub.publish("display", obj); */
  pubSubObjectConstructors.publish("publish", { type: this.type, obj });
};

ObjectConstructor.prototype.displayAll = function (obj) {
  pubSubObjectConstructors.publish("displayAll", { type: this.type, obj });
  /*  this.pubSub.publish("clear", true);
  this.objArr.push(obj);
  this.objArr.objArr.forEach((object) => {
    object.publish(object);
    console.log(object)
  }); */
};
ObjectConstructor.prototype.publishComplete = function(obj) {
  pubSubTasks.publish("displayComplete", obj);
}


function ProjectConstructor(title) {
  this.title = title; /* 
  this.pubSub = pubSubProjects;
  this.objArr = projects; */ /* 
  this.id = this.objArr.objIdGen += 1; */
  this.id = projects.objIdGen += 1;
  this.type = "project";
  this.taskIdArr = [];
}

ProjectConstructor.prototype = Object.create(ObjectConstructor.prototype);

ProjectConstructor.prototype.removeByProject = function() {
  this.taskIdArr.forEach((element) => {
    let removeIndex = tasks.objArr.findIndex(task => task.id == element);
    tasks.objArr.splice(removeIndex, 1);
  })
};

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

let tasks = new TaskObjectArrClass();
let pubSubTasks = pubSubFactory();
let taskRemover = new RemoveConstructor(pubSubTasks, tasks);

function TaskConstructor(title, details, date, priority, project) {
  this.title = title;
  this.details = details;
  this.date = date;
  this.priority = priority;
  this.project = project;
  this.type = "task";
  this.status = "active";
  this.id = tasks.objIdGen += 1;
}

TaskConstructor.prototype = Object.create(ObjectConstructor.prototype);

TaskConstructor.prototype.removeTaskFromProjectIdArr = function () { 
  let projectObject = projects.objArr.find(project => project.title == this.project);
  let indexNum = projectObject.taskIdArr.findIndex(id => id == this.id );
  projectObject.taskIdArr.splice(indexNum, 1);
}

TaskConstructor.prototype.pushId = function() {
  let projectObject = projects.objArr.find(project => project.title == this.project)
  projectObject.taskIdArr.push(this.id);
}

TaskConstructor.prototype.complete = function () {
  return (this.status == "active") ? (this.status = "complete"): (this.status = "active");

  /* 
  let match = tasks.objArr.find(obj => obj.id == this.id);
  return (match.status == "active") ? (match.status = "complete"): (match.status = "active"); */
}


  /* 
  projectObject.taskIdArr.push(this.id); */ //THE ISSUE IS HERE


TaskConstructor.prototype.countPriority = function () {
  switch (this.priority) {
    case "low":
      return 1;
      break;
    case "medium":
      return 2;
      break;
    case "high":
      return 3;
      break;
    default:
      return 0;
  }
};

/* 
function TaskConstructor(title, details, date, priority, project) {
  this.title = title,
  this.details = details,
  this.date = date,
  this.priority = priority,
  this.project = project,
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
}; */

/* Subscribers */
pubSubProjects.subscribe("display", subscribeProject);
/* 
pubSubProjects.subscribe("display", subProjectDisplay); */
pubSubProjects.subscribe("display", subSelectProjectInput);
pubSubForms.subscribe("note", subscribeNote);
pubSubForms.subscribe("task", subscribeTask);
pubSubForms.subscribe("task", subTaskListItem);

pubSubTasks.subscribe("display", subscribeTask);
pubSubTasks.subscribe("display", subTaskListItem);
pubSubTasks.subscribe("clear", subRmvTaskContainer);
pubSubTasks.subscribe("clear", subRmvTasks);
pubSubTasks.subscribe("displayComplete", subCompleteTask); //added this trying to make the complete
/* 
pubSubTasks.subscribe("clear",subRmvProjectDisplay) */

/* 
pubSubTasks.subscribe("clear", subRmvProjectDisplay) /* ?? */

pubSubProjects.subscribe("clear", subRmvProjectDisplay);
pubSubProjects.subscribe("clear", subClearSelectOptions);

export {
  NoteConstructor,
  ProjectConstructor,
  TaskConstructor,
  projectRemover,
  taskRemover,
  displayMod,
};
