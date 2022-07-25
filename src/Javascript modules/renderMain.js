import { createHTMLElement, $frame } from "../index.js";

function renderMain() {
  // Holds mainContainer and Sidebar
  const $main = document.createElement("div");
  $main.id = "main";
  $frame.appendChild($main);

  // Holds buttons that effect tasks
  const $buttonContainer = createHTMLElement("div", "taskButtonContainer");
  $main.appendChild($buttonContainer);
  $buttonContainer.appendChild(
    createHTMLElement("button", "newTask", null, "New Task")
  );
  $buttonContainer.appendChild(
    createHTMLElement("button", "load", null, "Load Tasks")
  );

  // Holds all tasks that are generated
  const $mainContainer = createHTMLElement("div", "mainContainer");
  $main.appendChild($mainContainer);
}

function renderTask(object) {
  let task = createHTMLElement("div", null, ["task"], null);

  // Create fields for the information stored in each task
  task.appendChild(
    createHTMLElement("p", "taskTitle", ["task-element"], `${object.title}`)
  );
  task.appendChild(
    createHTMLElement("p", "project", ["task-element"], `${object.project}`)
  );
  task.appendChild(
    createHTMLElement("p", "priority", ["task-element"], `${object.priority}`)
  );
  task.appendChild(
    createHTMLElement("p", "dueDate", ["task-element"], `${object.dueDate}`)
  );
  task.appendChild(
    createHTMLElement("p", "recurring", ["task-element"], `${object.recurring}`)
  );
  task.appendChild(
    createHTMLElement("p", "notes", ["task-element"], `${object.notes}`)
  );

  // Create buttons for editing and removing
  const buttonContainer = createHTMLElement("div", "buttonContainer");
  task.appendChild(buttonContainer);
  buttonContainer.appendChild(
    createHTMLElement("button", "Edit", null, "Edit")
  );
  buttonContainer.appendChild(createHTMLElement("button", "Remove", null, "X"));

  let $mainContainer = document.getElementById("mainContainer");
  $mainContainer.appendChild(task);
}

export { renderMain, renderTask };
