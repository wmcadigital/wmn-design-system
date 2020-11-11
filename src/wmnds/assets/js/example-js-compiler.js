import * as babel from '@babel/standalone';
import { showCode, displayShowMore } from '../../../www/_partials/component-example/_component-example';

// -- Add the import to your javascript here
import cookies from '../../patterns/cookies/cookies';
import headerJs from '../../patterns/header-v2/_header-v2';
import footerJs from '../../patterns/footer/_footer';
import accordionsJS from '../../components/accordion/_accordion';
import searchFilterJs from '../../patterns/search/search-filter/_search-filter';
// --- insert your imported js to this array
const js = [headerJs, footerJs, cookies, accordionsJS, searchFilterJs];
const jsExampleCompiler = () => {
  const codeSnippets = document.querySelectorAll('code.js');
  const compiledJs = [];
  const { hljs } = window;

  // compile fn
  const compileJs = input => babel.transform(input, { presets: ['env'] }).code;

  // loop through js array and push compiled js to array
  js.forEach(jsFn => {
    const output = compileJs(jsFn);
    compiledJs.push(output);
  });

  // function sets the inner html of an element and adds code highlights
  const setInnerJs = (script, element) => {
    element.innerHTML = script; // eslint-disable-line no-param-reassign
    hljs.highlightBlock(element);
  };

  // loop through code examples
  codeSnippets.forEach(codeElement => {
    // toggle between compiled/uncompiled
    let showES6 = true;
    const toggleBtns = codeElement.parentNode.parentNode.querySelectorAll('.wmnds-code-toggle button');

    // returns compiled/uncompiled js based on toggle var
    const exampleJs = () => {
      const thisScriptIndex = js.findIndex(jsFunction => codeElement.dataset.content === jsFunction.name);
      let jsOutput = null;
      if (thisScriptIndex >= 0) {
        // find the index of js function that matches the string assigned to the code element data-content attribute
        jsOutput = showES6 ? js[thisScriptIndex] : compiledJs[thisScriptIndex];
      } else {
        jsOutput = codeElement.innerHTML;
      }
      return jsOutput;
    };

    // call fns on click
    toggleBtns.forEach(toggleBtn => {
      toggleBtn.addEventListener('click', () => {
        toggleBtns.forEach(btn => btn.classList.remove('wmnds-btn--dark-bg'));
        if (toggleBtn.classList.contains('es6')) {
          showES6 = true;
          toggleBtn.classList.add('wmnds-btn--dark-bg');
        } else {
          showES6 = false;
          toggleBtn.classList.add('wmnds-btn--dark-bg');
        }
        setInnerJs(exampleJs(), codeElement, true);
      });
    });

    // init functions
    setInnerJs(exampleJs(), codeElement);
    displayShowMore(codeElement);
    showCode(codeElement.parentNode.parentNode.querySelector('.wmnds-js-show-code'));
  });
};

window.addEventListener('DOMContentLoaded', jsExampleCompiler);
