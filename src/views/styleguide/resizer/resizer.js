// Define DOM elements
const resizer = document.getElementById('resizer');
let btnMob;
let btnTablet;
let btnLaptop;
let btnDesktop;

// Check buttons exist and asign to variables if they do
if (document.getElementById('resizer-mob') !== (null || undefined)) {
    btnMob = document.getElementById('resizer-mob');
}
if (document.getElementById('resizer-tablet') !== (null || undefined)) {
    btnTablet = document.getElementById('resizer-tablet');
}
if (document.getElementById('resizer-laptop') !== (null || undefined)) {
    btnLaptop = document.getElementById('resizer-laptop');
}
if (document.getElementById('resizer-desktop') !== (null || undefined)) {
    btnDesktop = document.getElementById('resizer-desktop');
}

// Define string constants
const DESKTOP_CLASS = 'resizer--desktop';
const LAPTOP_CLASS = 'resizer--laptop';
const TABLET_CLASS = 'resizer--tablet';
const MOB_CLASS = 'resizer--mob';
const BTN_ACTIVE_CLASS = 'resizer-btn-container__btn--active';

// // Update resizer to display desktop
btnDesktop.addEventListener('click', () => {
    // Update classes on buttons to make desktop button show as active
    btnMob.classList.remove(BTN_ACTIVE_CLASS);
    btnTablet.classList.remove(BTN_ACTIVE_CLASS);
    btnLaptop.classList.remove(BTN_ACTIVE_CLASS);
    btnDesktop.classList.add(BTN_ACTIVE_CLASS);

    resizer.classList.remove(LAPTOP_CLASS);
    resizer.classList.remove(TABLET_CLASS);
    resizer.classList.remove(MOB_CLASS);
    resizer.classList.add(DESKTOP_CLASS);
});

// // Update resizer to display laptop
btnLaptop.addEventListener('click', () => {
    // Update classes on buttons to make laptop button show as active
    btnMob.classList.remove(BTN_ACTIVE_CLASS);
    btnTablet.classList.remove(BTN_ACTIVE_CLASS);
    btnDesktop.classList.remove(BTN_ACTIVE_CLASS);
    btnLaptop.classList.add(BTN_ACTIVE_CLASS);

    resizer.classList.remove(DESKTOP_CLASS);
    resizer.classList.remove(TABLET_CLASS);
    resizer.classList.remove(MOB_CLASS);
    resizer.classList.add(LAPTOP_CLASS);
});

// // Update resizer to display tablet
btnTablet.addEventListener('click', () => {
    // Update classes on buttons to make tablet button show as active
    btnMob.classList.remove(BTN_ACTIVE_CLASS);
    btnLaptop.classList.remove(BTN_ACTIVE_CLASS);
    btnDesktop.classList.remove(BTN_ACTIVE_CLASS);
    btnTablet.classList.add(BTN_ACTIVE_CLASS);
å
    resizer.classList.remove(DESKTOP_CLASS);
    resizer.classList.remove(LAPTOP_CLASS);
    resizer.classList.remove(MOB_CLASS);
    resizer.classList.add(TABLET_CLASS);
});

// // Update resizer to display mobile
btnMob.addEventListener('click', () => {
    // Update classes on buttons to make mob button show as active
    btnTablet.classList.remove(BTN_ACTIVE_CLASS);
    btnLaptop.classList.remove(BTN_ACTIVE_CLASS);
    btnDesktop.classList.remove(BTN_ACTIVE_CLASS);
    btnMob.classList.add(BTN_ACTIVE_CLASS);

    resizer.classList.remove(DESKTOP_CLASS);
    resizer.classList.remove(LAPTOP_CLASS);
    resizer.classList.remove(TABLET_CLASS);
    resizer.classList.add(MOB_CLASS);
});
