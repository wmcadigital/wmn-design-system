// The commented out code below is for compiling ES6 to ES5 in the browser. Commented out for now as it doesn't work great in IE11
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

    const escapeCharScriptES6 = escapeCharacters(scriptTag);

    // compile fn
    // const compileJs = input => babel.transform(input, { presets: ['env'] }).code;
    // const escapedCharScriptES5 = escapeCharacters(compileJs(scriptTag));

    // parentEle.querySelector('.wmnds-details--js .js').innerHTML = escapedCharScriptES5;
    parentEle.querySelector('.wmnds-details--es6 .js').innerHTML = escapeCharScriptES6;
  });
};

export default componentExampleScript;
