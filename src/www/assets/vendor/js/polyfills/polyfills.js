// Export * from any polyfill files in the polyfills folder
// Make sure that the file is exporting the function running like
// export default forEachPolyFill();

// This file is then included as the first import in the main tfwmds-website.js file so our polyfills get loaded
export * from './ie11-forEach';
export * from './includes';
export * from '../../../../../tfwmds/components/details/_example';
