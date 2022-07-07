import { createHTMLElement, $frame } from "../index.js";

function renderMain() {
    const $main = document.createElement('div');
    $main.id = 'main'
    $frame.appendChild($main);
}

export { renderMain };