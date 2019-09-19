const sideMenu = document.getElementById('side-menu');
const hamburger = document.getElementById('hamburger');
const hamburgerLines = document.getElementsByClassName('side-menu__hamburger__line');
// const items = document.getElementsByClassName('side-menu__sub-menu__item');
const links = document.getElementsByClassName('side-menu__sub-menu__item__text');
let isOpen = true;

function OpenMenu() {
    if (sideMenu) {
        // Close menu using classes
        sideMenu.classList.remove('side-menu--closed');
        sideMenu.classList.add('side-menu--open');

        // Update hamburger using classes
        hamburger.classList.remove('side-menu__hamburger--closed');
        hamburger.classList.add('side-menu__hamburger--open');

        hamburgerLines[0].classList.add('side-menu__hamburger__line-01--open');
        hamburgerLines[0].classList.remove('side-menu__hamburger__line-01--closed');

        hamburgerLines[1].classList.add('side-menu__hamburger__line-02--open');
        hamburgerLines[1].classList.remove('side-menu__hamburger__line-02--closed');

        hamburgerLines[2].classList.add('side-menu__hamburger__line-03--open');
        hamburgerLines[2].classList.remove('side-menu__hamburger__line-03--closed');

        // // Hide text
        for (let i = 0; i < links.length; i += 1) {
            links[i].classList.add('side-menu__sub-menu__item__text--open');
            links[i].classList.remove('side-menu__sub-menu__item__text--closed');
        }

        isOpen = true;
    }
}

function CloseMenu() {
    if (sideMenu) {
        // Close menu using classes
        sideMenu.classList.remove('side-menu--open');
        sideMenu.classList.add('side-menu--closed');

        // Update hamburger using classes
        hamburger.classList.remove('side-menu__hamburger--open');
        hamburger.classList.add('side-menu__hamburger--closed');

        hamburgerLines[0].classList.remove('side-menu__hamburger__line-01--open');
        hamburgerLines[0].classList.add('side-menu__hamburger__line-01--closed');

        hamburgerLines[1].classList.remove('side-menu__hamburger__line-02--open');
        hamburgerLines[1].classList.add('side-menu__hamburger__line-02--closed');

        hamburgerLines[2].classList.remove('side-menu__hamburger__line-03--open');
        hamburgerLines[2].classList.add('side-menu__hamburger__line-03--closed');

        // // Hide text
        for (let i = 0; i < links.length; i += 1) {
            links[i].classList.remove('side-menu__sub-menu__item__text--open');
            links[i].classList.add('side-menu__sub-menu__item__text--closed');
        }

        isOpen = false;
    }
}

function ToggleMenu() {
    if (isOpen) {
        CloseMenu();
    } else {
        OpenMenu();
    }
}

ToggleMenu();

// Listen for clicks on hamburger
if (sideMenu) {
    hamburger.addEventListener('click', () => {
        ToggleMenu();
    });
}
