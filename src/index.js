import { renderHeader } from './Javascript modules/renderHeader';
import { renderSidebar } from './Javascript modules/renderSidebar';
import { renderMain, renderTask } from './Javascript modules/renderMain';
import { newTask } from './Javascript modules/taskLogic';
import './CSS/styles.sass';

// Creates a skeleton to hold all other generated content on the app.

const framework = document.createElement('div');
document.body.appendChild(framework);
framework.id = 'frame';
const $frame = document.getElementById('frame');

function createHTMLElement(type, id, classes, content) {
  // When passed the parameters this function will return a new HTML element
  // with all parameters applied.
  const element = document.createElement(type);

  if (id) element.id = id;
  if (classes) classes.forEach((newClass) => element.classList.add(newClass));
  if (content) element.innerText = content;

  return element;
};

function setButtonEvents() {
  // sets the on click event for all buttons rendered by other elements
  document.getElementById('newTask').onclick = function() {renderTask('test');}
}

function renderHomepage() {
  console.log('Render Homepage')
  renderHeader();
  renderSidebar();
  renderMain();
  setButtonEvents();
}


renderHomepage();


export { createHTMLElement, $frame };