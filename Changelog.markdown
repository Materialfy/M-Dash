This is the public repo version, note changes made in this version that will need to be carried over

This is also a general changelog


## Additions/changes:
updated loginview -> externalview.vue. Makes more sense and i suck at naming things
moved externalview.vue into externalviews folder
created drawer.js to house the modules in various file in one places
deleted the vuex.vue file in utils and put the few functions into drawer.js
removed app folder and index and put into drawer.js : I did this to simplify things 
Moved packages from devdependencies to dependencies
fixed a lot of the "dependency hell" lol




## Made/Clarified documenting comments to explain code in:
router index.js
router paths.js
getters.js
actions.js
LoginForm.vue
app.vue
drawer.js