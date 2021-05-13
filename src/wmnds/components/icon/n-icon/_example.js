const nIcons = () => {
  const svgIcon = () => {
    return `
    <svg class="wmnds-n-icon__svg">
      <title>Network icon</title>
      <desc>A light green rectangle with rounded corners and a dark green border.</desc>
      <use xlink:href="#wmnds-general-n-ticket" href="#wmnds-general-n-ticket"></use>
    </svg>`;
  };

  function highlightInHtml(html, textToHighlight) {
    const text = textToHighlight;
    const textWithoutN = text.substring(1);

    const tagsRe = new RegExp('(<.+?>|&\\w+;)');

    const htmlParts = html.split(tagsRe).filter(Boolean);

    const replaceText = item => {
      if (!item.includes(textToHighlight)) return item;

      return item.replace(
        new RegExp(text, 'ig'),
        `<span class="wmnds-n-icon">${svgIcon()}${textWithoutN}</span>`
      );
    };

    const r = htmlParts.map(item => (tagsRe.test(item) ? item : replaceText(item))).join('');

    return r;
  }

  document.querySelector('body').innerHTML = highlightInHtml(
    document.querySelector('body').innerHTML,
    'nBus'
  );
};

export default nIcons();
