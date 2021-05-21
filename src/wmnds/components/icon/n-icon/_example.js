import * as findAndReplaceDOMText from 'findandreplacedomtext';

const nIcons = () => {
  // Function to replace text with our icon
  // const replaceTextWithIcon = textNode => {
  //   const modifiedTextNode = textNode;
  //   if (modifiedTextNode.innerText.charAt(0) !== 'n') return textNode; // If textNode doesn't include our matched text, then return

  //   // Otherwise...
  //   const textWithoutN = modifiedTextNode.innerText.substring(1); // Chop the first character from our string (the 'n') as it will be replaced with an icon
  //   console.log({ textWithoutN });
  //   // HTML/SVG of icon we will use
  //   const svgIcon = `
  //   <svg class="wmnds-n-icon__svg">
  //     <title>N-Network icon</title>
  //     <desc>A hexagon with the letter 'n' inside of it.</desc>
  //     <use xlink:href="#wmnds-general-n-ticket" href="#wmnds-general-n-ticket"></use>
  //   </svg>`;
  //   // Then replace our found text with 'n' icon and text without 'n'
  //   modifiedTextNode.innerHTML = `${svgIcon}${textWithoutN}`;

  //   console.log({ modifiedTextNode });

  //   return modifiedTextNode; // Return modified textNode back
  // };

  // function replacePhraseInHTML(htmlEle, phrase) {
  //   const phraseToReplace = phrase;
  //   const insideHTMLTags = new RegExp('(<.+?>|&\\w+;)'); // Get items within HTML </> tags
  //   const textNodes = htmlEle.split(insideHTMLTags).filter(Boolean); // Split on the HTML tags to avoid manipulating attributes etc.

  //   // Loop through textNodes and any that match 'insideHTMLTags', return straight away
  //   // Otherwise, that textNode is ready to be searched for our textToChange
  //   const updatedDOM = textNodes
  //     .map(DOMText =>
  //       insideHTMLTags.test(DOMText) ? DOMText : replaceTextWithIcon(DOMText, phraseToReplace)
  //     )
  //     .join('');

  //   return updatedDOM;
  // }

  // START HERE
  // const phrasesToReplace = ['nNetwork', 'nTicket', 'nTrain', 'nBus']; // These are the phrases we want to replace the first char with the 'n' icon SVG (they are not case sensitive - we match on upper and lowercase with regex 'i' on line 17)
  // const elementsToCheck = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const t0 = performance.now();

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

  const replaceAll = () =>
    findAndReplaceDOMText(document.querySelector('body'), {
      preset: 'prose',
      find: /(nNetwork|nTicket|nTrain|nBus)/gi,
      // wrap: 'span',
      // wrapClass: 'wmnds-n-icon',
      replace: (portion, match) => {
        return convertStringToNode(match[0]);
      }
    });

  replaceAll();

  // const nIconNodes = document.querySelectorAll('.wmnds-n-icon');

  // nIconNodes.forEach(nIconNode => {
  //   let newNode = nIconNode;
  //   newNode = replaceTextWithIcon(nIconNode);

  //   return newNode;
  // });
  // const elementsToCheck = document.querySelectorAll('.wmnds-n-icon');
  // Loop through each phrase and update the DOM body innerHTML with the replaced phrase
  // elementsToCheck.forEach(element => {
  //   const getEle = element;
  //   if (!getEle) return;
  //   phrasesToReplace.forEach(phraseToReplace => {
  //     console.log({ getEle });
  //     getEle.innerHTML = replacePhraseInHTML(getEle.innerHTML, phraseToReplace);
  //   });
  // });
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
};

export default nIcons;
