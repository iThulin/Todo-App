import { createHTMLElement, $frame } from "../index.js";

function renderMain() {
    const $main = document.createElement('div');
    $main.id = 'main'
    $frame.appendChild($main);

    $main.appendChild(createHTMLElement('button', 'newTask', null, 'New Task'));
}

function renderTask(object) {
    let task = createHTMLElement('div', null, ['task'], null);

    task.appendChild(createHTMLElement('p', 'title', ['task-element'], object.title))
    task.appendChild(createHTMLElement('p', 'project', ['task-element'], object.project))
    task.appendChild(createHTMLElement('p', 'priority', ['task-element'], object.priority))
    task.appendChild(createHTMLElement('p', 'dueDate', ['task-element'], object.dueDate))
    task.appendChild(createHTMLElement('p', 'recurring', ['task-element'], object.recurring))
    task.appendChild(createHTMLElement('p', 'notes', ['task-element'], object.notes))

    let $main = document.getElementById('main');
    $main.appendChild(task);
}

export { renderMain, renderTask };