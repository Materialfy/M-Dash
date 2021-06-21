import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/* This file automatically imports the base components so it can be used anywhere without implicitly importing
Aka Automatic Global Registration
files like the nav bar get them name from the folder name + the component file name i.e core-nav-bar, material-card
*/
// eslint-disable-next-line no-undef
const requireComponent = require.context(
  // The relative path of the components folder
  '@/components',
  // Whether or not to look in subfolders
  true,
  //matches component filenames that have: .vue f
  /\.vue$/
)
//iterates using the keys of each context module require function 
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
 
  /* 
  Get PascalCase name of component. This uses two lodash methods to convert to pascal
  The _.upperFirst() method is used to convert the first character of the string to the upper case. 
  */
  const componentName = upperFirst(
    /*The _.camelCase() method is used to convert a string into a camel case string. 
    The string can be space,  dash, underscores separated */
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
      /* 
      searches for a "./" and deletes them
      ^ asserts position at start of a line
      \. matches the character "." literally (case sensitive)
      \/ matches the character "/" literally (case sensitive)
      '' matches the characters , "''" literally (case sensitive)
      .replace method searches a string for a specified value, or a regular expression, 
      and replaces first value with second
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

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

