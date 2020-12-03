


![version](https://img.shields.io/badge/version-1.0.0-blue.svg)



## [Demo Site](https://clintoxx.github.io/vuetify-admin-dashboard/)

- Login auth system is disabled in demo along with every other api besides the Get request to the users table
- demo has an extra login button on the side bar so you can see what it looks like

![Features](2019-04-05_22-31-17.gif)



Vuetify Admin Dashboard is a beautiful resource built over [Vuetify](https://vuetifyjs.com/en/) and [Vuex](https://vuex.vuejs.org/installation.html). It will help you get started developing dashboards in no time. Vuetify Material Dashboard is the official Vuejs version of the Original [Material Dashboard](https://www.creative-tim.com/product/material-dashboard). Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vue](https://vuejs.org/v2/guide/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vue-Router](https://router.vuejs.org/en/).


## Table of Contents

* [Versions](#versions)
* [Demo](#Demo-Site)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [File Structure](#File-Structure)



# Features

- Powerful **CRUD Data Table** with sorting, pagination, searching, display images...
- Powerful **Edit Form Builder** can display/edit any value of text, image, boolean...
- Fully support for REST Api's
- Vue-Chart js built in 
-  Rewrote the router to add support for nested/child routes. Also enabled external pages without the sidebar/footer/header etc.
- **Highly Configurable** Such as: Dark/light themes, sidebar images, site name, colors, logo, Menu and footer...
- data in demo is only hooked up to read from https://reqres.in/

- **CRUD Table Features**
  - operations on records:
    - Store,
    - Update,
    - Suspend/Restore,
    - Delete
  - Search filtering:
    - Search phrase in whole table,
    - Sorting by column
  - VUEX ACtions:
    - Table item, update/edit/delete and restore
  - other functions and features:
    - datatable mechanism allows selection of the number of records per page, page transition and sorting,
    - Inline table editing
    - Edit whole row menu 
    - Search 
    - Rest APi support built in
- **Authentication**
  - login form (built-in communication with API, validation),
  - redirecting from login to the app if already signed in
  - redirecting to login from app if you arent signed in
  - Automatically gets JWT Refresh token once its expires 
  - stores JWT in local storage(I havent made built in support for storing in https cookies yet) 
  - retrieves JWT when revisiting the page
- **App layout components** 
  - Toolbar (with optional elements):
    - title,
    - logo,
    - Notifications
    - user profile,
    - logout,
    - slots for developer
  - Sidebar/Drawer:
    - List of routes,
    - Slot for title or user avatar,
    - Slots for developer,
   - Drawer Filter:
     - Allows you to change Drawer background image and color scheme
  - Footer,
  - Maps
  - ... and others

![Crud Table](2019-04-03_04-17-17.gif)


## Few things on the roadmap
* ~~Fix the cards being giant in the dash~~
* ~~add login view~~
* ~~add in auth~~
* user roles 
* ~~log out button~~
* user screen api's
* jwt https cookie storage (still debating since cookies can be hit with xss)
* change route gaurd verification 
* selectable drawer colors 
* notification api so notifications function
* getting documentation up on vue press
* track time since last refresh token

## Bugs
- Notification drawer is currently shifted due to a change in the layout
- Chart js header is not correctly displaying in mobile due to aspect ratio change

## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal(Shift + right-click in the folder on windows)
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser

After installing the dependencies you can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run lint` to run linting.

### Vuetify

Vuetify is developed exactly according to Material Design spec. 

### Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components.

### Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) 

### Special thanks
To [creativetim](https://github.com/creativetimofficial/vuetify-material-dashboard) for the base template 

I added a lot of features to his base template but kept the overall theme/design. Will continue to add more!

## Quick start

Quick start options:

    Clone this repo

    npm i or npm --install 

    npm run serve 


## Documentation
The documentation for the Vuetify Admin Dashboard is coming soon once i have some freetime. for now there is brief documentation in the [File-Structure](#File-Structure) 


## Reporting Issues

1. Make sure that you are using the latest version of the Vuetify Admin Dashboard. 
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Licensing
MIT


## File Structure

Within the download you'll find the following directories and files:

```
└───src
    │   App.vue  # Where main router view switching between dashboard view and login home happens. Also axios 401 interceptor is here
    │   main.js # where some plugins like axios are registered, i need to clean up and use the axios file back in plugins
    │
    ├───assets
    │   └───img
    │           redditicon.png
    │
    ├───components
    │   │   index.js          # registers all components
    │   │   LoginForm.vue          # this is where you can edit the login form which sends the login action
    │   │
    │   ├───core
    │   │       Drawer.vue          # the side bar- add or remove links in the sidebar here
    │   │       Filter.vue             # controls the sidebar background images, it is the floating gray cog on the left
    │   │       Footer.vue
    │   │       Toolbar.vue
    │   │
    │   ├───DashViews
    │   │       ComplexTables.vue      # has pop up edit and inline edit crud tables without api. This is the page in the gif but its not         │   │        being used any more in the current build
    │   │
    │   │       Dashboard.vue          # this is the actual home screen dashboard with chartist js and other stuff
    │   │       Icons.vue
    │   │       Maps.vue 
    │   │       Notifications.vue
    │   │       SimpleTables.vue       # basic tables without any crud 
    │   │       TableList.vue           # basic tables without any crud  
    │   │       Typography.vue
    │   │       UserProfile.vue
    │   │       UsersTable.vue               # advanced crud table with search, inline editing and pop up edit hooked up to rest api
    │   │
    │   ├───error                       # unused error files that havent been hooked up
    │   │       Error.vue
    │   │       NotFound.vue
    │   │
    │   ├───helper
    │   │       Offset.vue                      # controls offset and such for elements in cards/chartcard and dashboard.vue
    │   │
    │   ├───material                   # all of these files where made by creative time to have a custom theme
    │   │       Card.vue  
    │   │       ChartCard.vue                 # you can change the charts aspect ratio and size with :ratio. 
    │   │                                       use the settings here https://github.com/Yopadd/vue-chartist
    │   │       Notification.vue
    │   │       StatsCard.vue
    │   │ 
    │   └───Tables                    # i havent set these up to be added like normal vue components yet
    │           CrudTable.vue                  # this is the default unedited template for the crud table with the pop up edit box
    │           InlineEditTable.vue             # this is the default unedited template for the crud table with the inline edit box
    │
    ├───i18n
    │       index.js
    │
    ├───lang
    │   │   index.js
    │   │
    │   └───en
    │       │   Common.json
    │       │   Home.json
    │       │
    │       └───Core
    │               Footer.json
    │               Toolbar.json
    │
    ├───plugins
    │       axios.js                # not being used since its not imported in index.js but its there if you rather use vs the main.js settings
    │       chartist.js
    │       index.js
    │       theme.js
    │       vuetify.js           # not being used since its not imported in index.js but its there if you rather use vs the main.js settings
    │
    ├───router
    │       index.js            #rewrote the routing, the router gaurd to redirect to login if not auth is here
    │       paths.js           #rewrote the routing, the router gaurd to redirect to home if auth is here
    │
    ├───store
    │   │   actions.js         # this is where all the main actions are and where stuff like token refresh is 
    │   │   getters.js
    │   │   index.js            # imports all the store folder and is imported into main.js
    │   │   mutations.js
    │   │   state.js
    │   │
    │   └───modules
    │       │   index.js          # this folder is the actions dealing with Filter.vue and their mutations and store
    │       │
    │       └───app
    │               mutations.js
    │               state.js
    │
    ├───styles
    │   │   index.scss
    │   │
    │   └───material-dashboard           # you can create or edit the vuetify brand/themes like "general" or "primary" here
    │           _alerts.scss
    │           _buttons.scss
    │           _cards.scss
    │           _checkboxes.scss
    │           _colors.scss
    │           _dropdown.scss
    │           _fixed-plugin.scss
    │           _footer.scss
    │           _inputs.scss
    │           _misc.scss
    │           _mixins.scss
    │           _sidebar.scss
    │           _tables.scss
    │           _tabs.scss
    │           _toolbar.scss
    │           _tooltips.scss
    │           _typography.scss
    │           _variables.scss
    │
    ├───utils
    │       vuex.js # used by the store in /store/modules/app 
    │
    └───views
            DashboardView.vue  #/ any views that are a child of this will render inside the dash
            LoginHome.vue # any views/components that are a child of this will not have the toolbar etc around it
```
