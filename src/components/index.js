import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/* 
  This file automatically imports the components in this folder Aka Automatic Global Registration
  Components are registered using the PascalCased version of their file name.
  files like the nav bar get them name from the folder name + the component file name i.e core-navbar, material-card
*/
// eslint-disable-next-line no-undef
const requireComponent = require.context( //gets config of component
  // The relative path of the components folder
  '@/components',
  // Whether or not to look in subfolders
  true,
  //matches component filenames that have: .vue
  /\.vue$/
)
//iterates using the context module  .keys array with foreach
//passes in each filename and sets the config with the filename for each file
requireComponent.keys().forEach(fileName => {
  // sets component config with the filename
  const componentConfig = requireComponent(fileName)
 
  /* 
    Get PascalCase name of component. This uses two lodash methods to convert to pascal
    The _.upperFirst() method is used to convert the first character of the string to the upper case. 
  */
  const componentName = upperFirst(
    /* 
      _.camelCase() converts a string to camel case. 
      The string can be separated by space, dash, underscores  
    */
    camelCase(
      fileName
      /* 
        searches for a "./" and deletes them
        ^ asserts position at start of a line
        \. matches the character "." literally (case sensitive)
        \/ matches the character "/" literally (case sensitive)
        '' matches the characters , "''" literally (case sensitive)
        .replace method  replaces first value with second
      */
        .replace(/^\.\//, '')

      /* 
        searches for ".vue"
        \. matches the character "." literally (case sensitive)
        \w matches any word character (equivalent to [a-zA-Z0-9_])
        + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
        $ asserts position at the end of a line
      */
        .replace(/\.\w+$/, '')
    )
  )
    /* 
      At the end the componantName to be exported will be:
      the foldername + .vue filename (.core/NavBar.vue -> CoreNavBar -> <core-navbar>)  
    */


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

