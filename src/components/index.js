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
  // The regular expression used to match base component filenames
  // /Base[A-Z]\w+\.(vue|js)$/
  
  //  line 17 is regex that came with template
  /\.vue$/
)
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
      /* first line 28 is custom regex that came with template
      ^ asserts position at start of a line
      \. matches the character "." literally (case sensitive)
      \/ matches the character "/" literally (case sensitive)
      '' matches the characters , "''" literally (case sensitive)
      */
        .replace(/^\.\//, '')
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

