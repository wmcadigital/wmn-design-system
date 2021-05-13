const nIcons = () => {
  // Function to replace text with our icon
  const replaceTextWithIcon = (textNode, text) => {
    if (!textNode.includes(text)) return textNode; // If textNode doesn't include our matched text, then return

    // Otherwise...
    const textWithoutN = text.substring(1); // Chop the first character from our string (the 'n') as it will be replaced with an icon
    const svgIcon = `
    <svg class="wmnds-n-icon__svg">
      <title>N-Network icon</title>
      <desc>A hexagon with the letter 'n' inside of it.</desc>
      <use xlink:href="#wmnds-general-n-ticket" href="#wmnds-general-n-ticket"></use>
    </svg>`; // HTML/SVG of icon we will use
    const modifiedTextNode = textNode.replace(
      new RegExp(text, 'ig'),
      `<span class="wmnds-n-icon">${svgIcon}${textWithoutN}</span>`
    ); // Then replace our found text with 'n' icon and text without 'n'

    return modifiedTextNode; // Return modified textNode back
  };

  function replaceTextInHTML(htmlEle, textToChange) {
    const text = textToChange;
    const insideHTMLTags = new RegExp('(<.+?>|&\\w+;)'); // Get items within HTML </> tags
    const textNodes = htmlEle.split(insideHTMLTags).filter(Boolean); // Split on the HTML tags to avoid manipulating attributes etc.

    // Loop through textNodes and any that match 'insideHTMLTags', return straight away
    // Otherwise, that textNode is ready to be searched for our textToChange
    const updatedDOM = textNodes
      .map(DOMText => (insideHTMLTags.test(DOMText) ? DOMText : replaceTextWithIcon(DOMText, text)))
      .join('');

    return updatedDOM;
  }

  const bodyElement = document.querySelector('body');
  bodyElement.innerHTML = replaceTextInHTML(bodyElement.innerHTML, 'nBus');
};

export default nIcons();
