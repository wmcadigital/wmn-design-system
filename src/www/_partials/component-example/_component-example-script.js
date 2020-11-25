import * as babel from '@babel/standalone';

const componentExampleScript = () => {
  const exampleScripts = document.querySelectorAll('.wmnds-details--js pre code');

  exampleScripts.forEach(exampleScript => {
    const getJSPath = `js/${exampleScript.dataset.path}_example.js`;

    // compile fn
    const compileJs = input => babel.transform(input, { presets: ['env'] }).code;

    console.log(compileJs(getJSPath));
  });
};

export default componentExampleScript;
