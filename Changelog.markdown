This is a general changelog

## Additions/changes:
updated loginview -> externalview.vue. Makes more sense and i suck at naming things
moved externalview.vue into externalviews folder
created drawer.js to house the modules in various file in one places
deleted the vuex.vue file in utils and put the few functions into drawer.js
removed app folder and index and put into drawer.js : I did this to simplify things
Moved packages from devdependencies to dependencies
fixed a lot of the "dependency hell" lol
added error catch to logout action
removed unused commit on updatetable action
updated drawer.js and created drawersettoggle.js
removed the extra <template> in the same slot that was unnecessary in Complextables.vue/inlineedit.vue
renamed unused complextables.vue to complextables page to clarify what it is, its a view
ranamed simpletable/tablelist
renamed DashboardViews to dashboard views to clarify where those components render
removed unused response from UsersTables .then((response) => {
switched from vuetify full install to vuetify plugin, same for vue router to the plugin version
switched from vuetify in main.js to the one in the plugin folder to simplify that file(a lot ended up in there)
switched icon imports into vuetify.js
removed extra vue/use(vuetify) in main
add external and dashboard names in paths.js
commented out nprogres in main.js and router/index.js
updated vueitfy.js to new icon format
tried adding v-main to externalviews.vue
switching v-content to v-main Loginform.vue, Externalview, dashboardview
moved helloworld to externalviews
changed import of hellowworld
removed the path from external view parent
changed beforeenter naivagation gaurds so they check for route name and auth status
added switch to beforeeach route gaurd to check for auth or redirect
disabled per route guards, the are still theere if you want to use them
updated external meta data
reverted switch and just used if else in global nav guard
removed one of the per route guards, left one for example
revert nprogress being commented out to test
switched to use axios in plugins to simplfy main.js
made base isntance called rest for axios and set the vue http to it
hopefully it works otherwise gotta find proper way to import
also imported rest into main.js and made vue use it

## Made/Clarified documenting comments to explain code in:
router index.js
router paths.js
getters.js
actions.js
LoginForm.vue
app.vue
drawer.js
