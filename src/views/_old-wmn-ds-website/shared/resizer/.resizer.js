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

// Define breakpoints
const BP_DESKTOP = 1200;
const BP_LAPTOP = 1024;
const BP_TABLET = 768;

// Define viewport width
// const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const viewportWidth = window.innerWidth;

function ResizerDesktop() {
  // Update classes on buttons to make desktop button show as active
  btnMob.classList.remove(BTN_ACTIVE_CLASS);
  btnTablet.classList.remove(BTN_ACTIVE_CLASS);
  btnLaptop.classList.remove(BTN_ACTIVE_CLASS);
  btnDesktop.classList.add(BTN_ACTIVE_CLASS);

  // Update resizer classes to set width to desktop
  resizer.classList.remove(LAPTOP_CLASS);
  resizer.classList.remove(TABLET_CLASS);
  resizer.classList.remove(MOB_CLASS);
  resizer.classList.add(DESKTOP_CLASS);
}

function ResizerLaptop() {
  // Update classes on buttons to make laptop button show as active
  btnMob.classList.remove(BTN_ACTIVE_CLASS);
  btnTablet.classList.remove(BTN_ACTIVE_CLASS);
  btnDesktop.classList.remove(BTN_ACTIVE_CLASS);
  btnLaptop.classList.add(BTN_ACTIVE_CLASS);

  // Update resizer classes to set width to laptop
  resizer.classList.remove(DESKTOP_CLASS);
  resizer.classList.remove(TABLET_CLASS);
  resizer.classList.remove(MOB_CLASS);
  resizer.classList.add(LAPTOP_CLASS);
}

function ResizerTablet() {
  // Update classes on buttons to make tablet button show as active
  btnMob.classList.remove(BTN_ACTIVE_CLASS);
  btnLaptop.classList.remove(BTN_ACTIVE_CLASS);
  btnDesktop.classList.remove(BTN_ACTIVE_CLASS);
  btnTablet.classList.add(BTN_ACTIVE_CLASS);

  // Update resizer classes to set width to tablet
  resizer.classList.remove(DESKTOP_CLASS);
  resizer.classList.remove(LAPTOP_CLASS);
  resizer.classList.remove(MOB_CLASS);
  resizer.classList.add(TABLET_CLASS);
}

function ResizerMob() {
  // Update classes on buttons to make mob button show as active
  btnTablet.classList.remove(BTN_ACTIVE_CLASS);
  btnLaptop.classList.remove(BTN_ACTIVE_CLASS);
  btnDesktop.classList.remove(BTN_ACTIVE_CLASS);
  btnMob.classList.add(BTN_ACTIVE_CLASS);

  // Update resizer classes to set width to mobile
  resizer.classList.remove(DESKTOP_CLASS);
  resizer.classList.remove(LAPTOP_CLASS);
  resizer.classList.remove(TABLET_CLASS);
  resizer.classList.add(MOB_CLASS);
}

// Set resizer type based on clients viewport size
function SetResizer() {
  if (viewportWidth >= BP_DESKTOP) {
    // Show relevant buttons
    btnDesktop.setAttribute('style', 'display: block');
    btnLaptop.setAttribute('style', 'display: block');
    btnTablet.setAttribute('style', 'display: block');
    btnMob.setAttribute('style', 'display: block');

    ResizerDesktop();
  } else if (viewportWidth >= BP_LAPTOP && viewportWidth < BP_DESKTOP) {
    // Hide relevant buttons
    btnDesktop.setAttribute('style', 'display: none');

    // Show relevant buttons
    btnLaptop.setAttribute('style', 'display: block');
    btnTablet.setAttribute('style', 'display: block');
    btnMob.setAttribute('style', 'display: block');

    // resizer.setAttribute('style', 'margin: 0 !important');

    ResizerLaptop();
  } else if (viewportWidth >= BP_TABLET && viewportWidth < BP_LAPTOP) {
    // Hide resizer buttons
    btnDesktop.setAttribute('style', 'display: none');
    btnLaptop.setAttribute('style', 'display: none');
    btnTablet.setAttribute('style', 'display: none');
    btnMob.setAttribute('style', 'display: none');

    // resizer.setAttribute('style', 'margin: 0 !important');

    ResizerTablet();
  } else if (viewportWidth < BP_TABLET) {
    // Hide resizer buttons
    btnDesktop.setAttribute('style', 'display: none');
    btnLaptop.setAttribute('style', 'display: none');
    btnTablet.setAttribute('style', 'display: none');
    btnMob.setAttribute('style', 'display: none');

    // resizer.setAttribute('style', 'margin: 0 !important');

    ResizerMob();
  }
}

// Update resizer to display desktop
btnDesktop.addEventListener('click', () => {
  ResizerDesktop();
});

// Update resizer to display laptop
btnLaptop.addEventListener('click', () => {
  ResizerLaptop();
});

// Update resizer to display tablet
btnTablet.addEventListener('click', () => {
  ResizerTablet();
});

// Update resizer to display mobile
btnMob.addEventListener('click', () => {
  ResizerMob();
});

document.onresize = SetResizer();

SetResizer();
