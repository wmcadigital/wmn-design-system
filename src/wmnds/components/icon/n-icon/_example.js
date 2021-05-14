const nIcons = () => {
  // Function to replace text with our icon
  const replaceTextWithIcon = (textNode, phraseToReplace) => {
    if (!textNode.includes(phraseToReplace)) return textNode; // If textNode doesn't include our matched text, then return

    // Otherwise...
    const textWithoutN = phraseToReplace.substring(1); // Chop the first character from our string (the 'n') as it will be replaced with an icon
    // HTML/SVG of icon we will use
    const svgIcon = `
    <svg class="wmnds-n-icon__svg">
      <title>N-Network icon</title>
      <desc>A hexagon with the letter 'n' inside of it.</desc>
      <use xlink:href="#wmnds-general-n-ticket" href="#wmnds-general-n-ticket"></use>
    </svg>`;
    // Then replace our found text with 'n' icon and text without 'n'
    const modifiedTextNode = textNode.replace(
      new RegExp(phraseToReplace, 'ig'),
      `<span class="wmnds-n-icon">${svgIcon}${textWithoutN}</span>`
    );

    return modifiedTextNode; // Return modified textNode back
  };

  function replacePhraseInHTML(htmlEle, phrase) {
    const phraseToReplace = phrase;
    const insideHTMLTags = new RegExp('(<.+?>|&\\w+;)'); // Get items within HTML </> tags
    const textNodes = htmlEle.split(insideHTMLTags).filter(Boolean); // Split on the HTML tags to avoid manipulating attributes etc.

    // Loop through textNodes and any that match 'insideHTMLTags', return straight away
    // Otherwise, that textNode is ready to be searched for our textToChange
    const updatedDOM = textNodes
      .map(DOMText =>
        insideHTMLTags.test(DOMText) ? DOMText : replaceTextWithIcon(DOMText, phraseToReplace)
      )
      .join('');

    return updatedDOM;
  }

  // START HERE
  const bodyElement = document.querySelector('body');
  const phrasesToReplace = ['nNetwork', 'nTicket', 'nTrain', 'nBus']; // These are the phrases we want to replace the first char with the 'n' icon SVG (they are not case sensitive - we match on upper and lowercase with regex 'i' on line 17)

  // Loop through each phrase and update the DOM body innerHTML with the replaced phrase
  phrasesToReplace.forEach(phraseToReplace => {
    bodyElement.innerHTML = replacePhraseInHTML(bodyElement.innerHTML, phraseToReplace);
  });
};

export default nIcons();
