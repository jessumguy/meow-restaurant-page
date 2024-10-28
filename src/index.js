import './styles.css'
import { mainSection } from './common.js'
import { homePage } from './homePage.js'
import { menuPage } from './menuPage.js'


const togglePage = () => {
    const pageButtons = document.querySelectorAll('.page-buttons');

    const handleClick = (e) => {
        const page = e.target.dataset.page;

        mainSection.innerHTML = '';

        switch (page) {
            case 'home':
                homePage.render();
                break;
            case 'menu':
                menuPage.render();
                break;
        }
    };

    pageButtons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}

homePage.render();
togglePage();
