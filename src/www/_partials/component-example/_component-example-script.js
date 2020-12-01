// The commented out code below is for compiling ES6 to ES5 in the browser. Commented out for now as it doesn't work great in IE11
// import * as babel from '@babel/standalone';

const componentExampleScript = () => {
  const exampleScripts = document.querySelectorAll('.wmnds-website-code-example__js'); // Get all code examples that have the js tab enabled

  exampleScripts.forEach(exampleScript => {
    const parentEle = exampleScript; // get parent element for easier querying
    const scriptTag = parentEle.querySelector('script').innerHTML; // Grab our javascript from the hidden script tag

    // Func to replace special chars with nice html chars
    const escapeCharacters = str => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace('<br>', '<br />')
        .trim();
    };

    const escapeCharScriptES6 = escapeCharacters(scriptTag); // Run our code through the escaper func

    // *** BABEL COMPILER ES6 => ES5 (TURNED OFF DUE TO IE11 ISSUE) ***
    // compile fn
    // const compileJs = input => babel.transform(input, { presets: ['env'] }).code;
    // const escapedCharScriptES5 = escapeCharacters(compileJs(scriptTag));

    // parentEle.querySelector('.wmnds-details--js .js').innerHTML = escapedCharScriptES5;

    // *** END BABEL ES6 => ES5 ***

    parentEle.querySelector('.wmnds-details--es6 .js').innerHTML = escapeCharScriptES6; // The find the es6 pre/code block and drop our formatted code in there
  });
};

export default componentExampleScript;
