import { createHTMLElement, $frame } from "../index.js";

function renderSidebar() {
    // Create main div and set id
    const $sidebar = document.createElement('div');
    $sidebar.id = 'sideBar';

    // Create Today section
    const $todayContainer = createHTMLElement('div', 'todayContainer');
    $sidebar.appendChild($todayContainer);

    $todayContainer.appendChild(createHTMLElement('button', null, ['Header'], 'Today'));
   
    // Create Top Priority section
    const $topPriorityContainer = createHTMLElement('div', 'topPriorityContainer')
    $sidebar.appendChild($topPriorityContainer);

    $topPriorityContainer.appendChild(createHTMLElement('button', null, ['Header'], 'Top Priority'));

    // Create Projects section
    const $projectsContainer = createHTMLElement('div', 'Projects');
    $sidebar.appendChild($projectsContainer)

    $projectsContainer.appendChild(createHTMLElement('button', null, ['Header'], 'Projects'));

    // Create Categories section


    
    $frame.appendChild($sidebar);
}

export { renderSidebar };