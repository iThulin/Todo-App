import { createHTMLElement, $frame } from '../index.js';

function renderHeader() {
    const $header = document.createElement('div');
    $header.id = 'nav';

    $header.appendChild(createHTMLElement('p', null, ['test'], 'test element'));

    $frame.appendChild($header);
}

export { renderHeader };