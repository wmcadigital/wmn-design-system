function pageRouting() {
  // Define DOM elements
  const iframe = document.getElementById('resizer');
  const links = document.querySelectorAll('.side-menu__sub-menu__item-link'); // Get all sidebar links

  // Define url vars
  const pagesDir = 'pages/';

  // Foreach link in links
  links.forEach(link => {
    const href = `${pagesDir + link.getAttribute('href').replace('#', '')}.html`; // Define the actual href of the page
    // On link click, inject the above href into iframe
    link.addEventListener('click', () => {
      iframe.setAttribute('src', href);
    });
  });

  // If the URL contains a hash element
  if (window.location.hash) {
    const href = `${pagesDir + window.location.hash.replace('#', '')}.html`; // Define the actual href of the page
    iframe.setAttribute('src', href); // inject the above href into iframe
  }
}

window.addEventListener('DOMContentLoaded', pageRouting); // call pageRouting as soon as DOM is loaded (need to wait for DOM due to iframe injection)
