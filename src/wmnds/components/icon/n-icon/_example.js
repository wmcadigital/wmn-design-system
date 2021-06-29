import * as findAndReplaceDOMText from 'findandreplacedomtext'; // https://github.com/padolsey/findAndReplaceDOMText

const nIcons = () => {
  // Convert a html string into an actual HTML node
  const convertHtmlStringToNode = htmlString =>
    document.createRange().createContextualFragment(htmlString).firstChild;

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
    const htmlString = `<span class="wmnds-n-icon">${svgIcon}${textWithoutN}</span>`;

    return convertHtmlStringToNode(htmlString);
  };

  const replaceNText = () => {
    const wordsToReplace = /(nNetwork|nTicket|nTrain|nBus)/; // Pipe in any words that we should replace the 'n' with the SVG 'n' icon (not case sensitive)
    const bodyEle = document.querySelector('body');

    // Read https://github.com/padolsey/findAndReplaceDOMText on how this works
    findAndReplaceDOMText(bodyEle, {
      preset: 'prose',
      find: new RegExp(wordsToReplace, 'gi'),
      replace: (_portion, match) => convertStringToNode(match[0])
    });
  };

  // START HERE
  replaceNText();
};

export default nIcons;
