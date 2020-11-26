// import * as babel from '@babel/standalone';

const componentExampleScript = () => {
  const exampleScripts = document.querySelectorAll('.wmnds-website-code-example__js');

  exampleScripts.forEach(exampleScript => {
    const parentEle = exampleScript;
    const scriptTag = parentEle.querySelector('script').innerText;

    const escapeCharacters = str => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .trim();
    };

    const escapeCharScript = escapeCharacters(scriptTag);

    // compile fn
    // const compileJs = input => babel.transform(input, { presets: ['env'] }).code;
    // const escapedCharES6 = escapeCharacters(compileJs(scriptTag));

    parentEle.querySelector('.wmnds-details--js .js').innerHTML = escapeCharScript;
    // parentEle.querySelector('.wmnds-details--es6 .js').innerHTML = escapedCharES6;
  });
};

export default componentExampleScript;
