import * as findAndReplaceDOMText from 'findandreplacedomtext';

const nIcons = () => {
  const convertStringToNode = string => {
    const textWithoutN = string.substring(1); // Chop the first character from our string (the 'n') as it will be replaced with an icon
    // HTML/SVG of icon we will use
    const svgIcon = `
      <svg class="wmnds-n-icon__svg">
        <title>N-Network icon</title>
        <desc>A hexagon with the letter 'n' inside of it.</desc>
        <use xlink:href="#wmnds-general-n-ticket" href="#wmnds-general-n-ticket"></use>
      </svg>`;
    // Then replace our found text with 'n' icon and text without 'n'
    const html = `<span class="wmnds-n-icon">${svgIcon}${textWithoutN}</span>`;
    return document.createRange().createContextualFragment(html).firstChild;
  };

  const replaceAll = () => {
    const body = document.querySelector('body');
    findAndReplaceDOMText(body, {
      preset: 'prose',
      find: /(nNetwork|nTicket|nTrain|nBus)/gi,
      replace: (portion, match) => {
        return convertStringToNode(match[0]);
      }
    });
  };

  replaceAll();
};

export default nIcons;
