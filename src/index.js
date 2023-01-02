import './style.css';
import * as renderPage from './home.js';

const ControllerFactory = () => {

    let currentState = 'home'

    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const contactButton = document.querySelector('.contact');

    homeButton.addEventListener('click', changePage);
    menuButton.addEventListener('click', changePage);
    contactButton.addEventListener('click', changePage);

    homeButton.setAttribute('data-page', 'home');
    menuButton.setAttribute('data-page', 'menu');
    contactButton.setAttribute('data-page', 'contact');

    const container = document.querySelector('#content');
    // console.log(container.childNodes);    

    function changePage(e) {
        // console.log(e.target.dataset.page);
        let clickState = e.target.dataset.page;

        if (currentState === clickState) {
            return;
        } else {
            currentState = clickState;
            renderNewPage(currentState);
        }
    }

    function renderNewPage(pageState) {
        const replacable = document.querySelector('#replacable');
        switch (pageState) {
            case 'home':
                container.removeChild(replacable);
                container.appendChild(renderPage.renderHome(), 1);

                break;

            case 'menu':
                container.removeChild(replacable);
                container.appendChild(renderPage.renderMenu(), 1);

                break;

            case 'contact':
                container.removeChild(replacable);
                container.appendChild(renderPage.renderContact(), 1);

                break;
        
            default:
                break;
        }
    }

}

ControllerFactory();