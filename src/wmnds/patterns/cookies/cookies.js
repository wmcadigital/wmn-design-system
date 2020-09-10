const cookies = () => {
  const hideCookieBanner = () => {
    const cookiesBanner = document.querySelector('#wmnds-cookies-banner');
    cookiesBanner.style = 'display:none';
  };

  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    /* eslint-disable */
    const expires = 'expires=' + d.toUTCString(); 
    const domain = 'domain=' + window.location.hostname;
    document.cookie = cname + '=' + cvalue + ';' + expires + ';' + domain + ';path=/';
    /* eslint-enable */
  };

  const getCookie = cname => {
    const name = cname + '='; // eslint-disable-line
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) { // eslint-disable-line
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

  const checkCookie = cname => {
    const isCookieCreated = getCookie(cname);
    if (isCookieCreated === '') {
      return false;
    }
    return true;
  };

  const getCookiePolicy = () => JSON.parse(getCookie('cookies-policy'));

  const updateCookiePreferences = () => {
    if (document.querySelector('.wmnds-cookies-preferences')) {
      const cookiesOptions = document
        .querySelector('.wmnds-cookies-preferences')
        .querySelectorAll('.wmnds-fe-checkboxes__input');
      const currentOptions = [getCookiePolicy().essential, getCookiePolicy().functional, getCookiePolicy().performance];
      for (let i = 0; i < cookiesOptions.length; i++) { // eslint-disable-line
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

  function acceptAllCookies() {
    setCookiePolicy(true, true, true);
    setCookie('cookies-preference', true, 181);
    hideCookieBanner();
  }

  const savePreferences = () => {
    const elements = document
      .getElementById('wmnds-cookies-manager-form')
      .querySelectorAll('.wmnds-fe-checkboxes__input');
    const selectedOptions = [];
    for (let i = 0; i < elements.length; i++) { // eslint-disable-line
      selectedOptions[i] = elements.item(i).checked;
    }
    setCookiePolicy(...selectedOptions);
    setCookie('cookies-preference', true, 181);
  };

  const cookiesScan = () => {
    // if cookies-preference exist, hide cookie banner
    if (checkCookie('cookies-preference')) {
      hideCookieBanner();
    }
    // if not, create a default cookie, cookie banner will be show
    else {
      setCookiePolicy(true, false, false);
    }

    // verify if we are at Cookies Manager page and update the selected options to match the already created cookie
    updateCookiePreferences();
  };

  // Creation of default Cookies permissions when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', cookiesScan);

  // When Accept all cookies button is triggered
  const acceptAllCookiesBtn = document.querySelector('.wmnds-accept-all-cookies');
  acceptAllCookiesBtn.addEventListener('click', acceptAllCookies);
  acceptAllCookiesBtn.addEventListener('keydown', event => {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
      event.preventDefault();
      acceptAllCookies();
    }
  });

  // When Safe Preferences button is triggered
  const preferencesForm = document.getElementById('wmnds-cookies-manager-form');
  preferencesForm.addEventListener('submit', savePreferences);
};

export default cookies;
