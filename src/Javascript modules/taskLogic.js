import { createHTMLElement, $frame } from "../index.js";
import { currentProjects } from "./projectLogic.js";
let activeTasks = [];

function newTask(title, project, priority, dueDate, recurring, notes) {
  return {
    title: title,
    project: project,
    priority: priority,
    dueDate: dueDate,
    recurring: recurring,
    notes: notes,
    setTitle(title) {
      this.title = title;
    },
  };
}

function createTask(currentProjects) {
  // Create's a form that is used as an interface for the creation of a new task
  // If an input is left blank the resulting property will be set to undefined.
  let form = document.createElement("form");
  form.id = "pendingTask";

  let taskTitle = document.createElement("input");
  taskTitle.setAttribute("placeholder", "Title");
  taskTitle.classList.add("task-input");
  form.appendChild(taskTitle);

  // Create a dropdown selection that contains options for all available projects
  let taskProject = document.createElement("select");
  taskProject.classList.add("task-input");
  let projectList = currentProjects;
  projectList.forEach((project) => {
    let projectOption = document.createElement("option");
    projectOption.setAttribute("value", project);
    projectOption.innerHTML = project;
    taskProject.appendChild(projectOption);
  });
  form.appendChild(taskProject);

  // Create a select div and populate it with options for priority levels
  let taskPriority = document.createElement("select");
  taskPriority.classList.add("task-input");
  let priorityLevels = [
    "No priority",
    "Important",
    "Time sensitive",
    "Top priority",
  ];
  priorityLevels.forEach((element) => {
    let priorityOption = document.createElement("option");
    priorityOption.setAttribute("value", element);
    priorityOption.innerHTML = element;
    taskPriority.appendChild(priorityOption);
  });
  form.append(taskPriority);

  let dueDate = document.createElement("input");
  dueDate.setAttribute("type", "date");
  dueDate.classList.add("task-input");
  form.appendChild(dueDate);

  let taskRecurring = document.createElement("input");
  taskRecurring.setAttribute("placeholder", "Recurring");
  taskRecurring.classList.add("task-input");
  form.appendChild(taskRecurring);

  let taskNotes = document.createElement("textarea");
  taskNotes.setAttribute("placeholder", "Notes");
  taskNotes.classList.add("task-input");
  taskNotes.id = "Notes";
  form.appendChild(taskNotes);

  // Add buttons for submitting and terminating the form
  let buttonContainer = createHTMLElement("div", "formButtons");
  form.appendChild(buttonContainer);

  let submitButton = createHTMLElement("button", "Submit", null, "Submit");
  buttonContainer.appendChild(submitButton);

  let discardButton = createHTMLElement("button", "discard", null, "Discard");
  buttonContainer.appendChild(discardButton);

  document.body.appendChild(form);
}

export { newTask, createTask };
