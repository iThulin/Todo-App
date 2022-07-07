import { createHTMLElement, $frame } from '../index.js';

function renderHeader() {
    // Create the main Nav Section
    const $header = document.createElement('div');
    $header.id = 'header';
    $frame.appendChild($header);

    // Create the menu collapse button
    $header.appendChild(createHTMLElement('button', 'menuToggle',));

    // Create the title
    $header.appendChild(createHTMLElement('h1', 'title', null, 'Simple To Do'));

    // Create the color scheme toggle
    const $label = document.createElement('label')
    $header.appendChild($label);
    $label.classList.add('switch');

    const $colorToggle = document.createElement('input');
    $label.appendChild($colorToggle);
    $colorToggle.type = 'checkbox';

    const $span = document.createElement('span');
    $label.appendChild($span);
    $span.classList.add('slider');
}

function updateHeader(text) {
    const $header = document.getElementById('header')
    $header.innerText = text
}

export { renderHeader, updateHeader };