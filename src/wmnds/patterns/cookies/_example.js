const cookies = () => {
  const cookiesBanner = document.querySelector('header .wmnds-cookies-banner');

  const hideCookieBanner = () => {
    cookiesBanner.style.display = 'none';
  };
  const showCookieBanner = () => {
    const codeExample = document.querySelector('.wmnds-website-code-example .wmnds-cookies-banner');

    cookiesBanner.style.display = 'block';
    if (codeExample) codeExample.style.display = 'block'; // Ensure the cookie banner in the component example stays visible even if the user has already accepted cookies
  };

  // Set cookie based on name, value and expiry date supplied
  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const domain = `domain=${window.location.hostname}`;
    document.cookie = `${cname}=${cvalue};${expires};${domain};path=/`;
  };

  // Get cookie based on name supplied
  const getCookie = cname => {
    const name = `${cname}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  // Check if cookie(s) created or not
  const checkCookie = cname => {
    const isCookieCreated = getCookie(cname);
    if (isCookieCreated === '') {
      return false;
    }
    return true;
  };

  const getCookiePolicy = () => JSON.parse(getCookie('cookies-policy'));

  const updateCookiePreferences = () => {
    if (document.querySelector('.wmnds-cookies-manager__preferences')) {
      hideCookieBanner();
      const cookiesOptions = document
        .querySelector('.wmnds-cookies-manager__preferences')
        .querySelectorAll('.wmnds-fe-checkboxes__input');
      const currentOptions = [
        getCookiePolicy().essential,
        getCookiePolicy().functional,
        getCookiePolicy().performance
      ];
      for (let i = 0; i < cookiesOptions.length; i += 1) {
        cookiesOptions[i].checked = currentOptions[i];
      }
    }
  };

  const setCookiePolicy = (essentialValue, functionalValue, performanceValue) => {
    const cookieValue = {
      essential: essentialValue,
      functional: functionalValue,
      performance: performanceValue
    };
    setCookie('cookies-policy', JSON.stringify(cookieValue), 181);
    updateCookiePreferences();
  };

  const acceptAllCookies = () => {
    setCookiePolicy(true, true, true);
    setCookie('cookies-preference', true, 181);
    hideCookieBanner();
  };

  const savePreferences = () => {
    if (document.querySelector('.wmnds-cookies-manager__form')) {
      const elements = document
        .querySelector('.wmnds-cookies-manager__form')
        .querySelectorAll('.wmnds-fe-checkboxes__input');
      const selectedOptions = [];
      for (let i = 0; i < elements.length; i += 1) {
        selectedOptions[i] = elements.item(i).checked;
      }
      setCookiePolicy(...selectedOptions);
      setCookie('cookies-preference', true, 181);
    }
  };

  const cookiesScan = () => {
    // if cookies-preference doesn't exist, show cookie banner
    if (!checkCookie('cookies-preference')) {
      showCookieBanner();
      setCookiePolicy(true, false, false);
    }

    // verify if we are at Cookies Manager page and update the selected options to match the already created cookie
    updateCookiePreferences();
  };

  const isInIframe = window.frameElement && window.frameElement.nodeName === 'IFRAME'; // check if we are in an iframe

  // Creation of default Cookies permissions when the DOM is fully loaded
  if (!isInIframe) document.addEventListener('DOMContentLoaded', cookiesScan);

  // When Accept all cookies button is triggered
  const acceptAllCookiesBtn = document.querySelector('.wmnds-cookies-banner__accept-all-cookies');

  if (!isInIframe) {
    acceptAllCookiesBtn.addEventListener('click', acceptAllCookies);
    acceptAllCookiesBtn.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
        event.preventDefault();
        acceptAllCookies();
      }
    });
  }

  // When Safe Preferences button is triggered
  const cookieForm = document.querySelector('.wmnds-cookies-manager__form');
  if (cookieForm) cookieForm.addEventListener('submit', savePreferences);
};

export default cookies;
