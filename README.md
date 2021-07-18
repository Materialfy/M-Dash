
![version](https://img.shields.io/badge/version-2.0-blue.svg)


[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1512-shield.svg)](https://madewithvuejs.com/p/functional-vuetify-admin-dashboard/shield-link)


##### Formerly known by Vuetify Admin Dashboard



#### [Materialfy](https://www.Materialfy.com)


### [2.0 Demo Site](https://materialfy-demo.netlify.app) 
- logout button is in user menu in app bar


![Preview](https://github.com/ClintOxx/M-Dashboard-Materialfy/blob/master/public/img/mwQYxL1mES.gif)

M-Dashboard is a simple (Hopefully not ugly) productivity Dashboard to monitor tasks/work, it can also be used as an crud admin panel.
Using the Dashboard is pretty simple but requires basic knowledge of Javascript, and the below libraries (Really just the first four)

## Table of Contents



- [Whats New in 2.0](#whats-new)
- [Quick Start](#getting-started)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)


### Built with

#### [Vue 2.x](https://vuejs.org/v2/guide/)

#### [Vuetify 2.x ](https://vuetifyjs.com/en/)
is a Vue UI library that allows you to quickly develop designs according to Material Design spec.

#### [Vue-Router](https://router.vuejs.org/en/)
allows you to build routes/paths and handle the single page app routing.

#### [Vuex3.x](https://vuex.vuejs.org/installation.html)
is a state management library for Vue.js applications. It serves as a centralized store for all the components.

#### [Vue CLI 4.x](https://github.com/vuejs/vue-cli)
handles a lot of the set up and boilerplate also configures webpack and more 

#### Axios
Handles making requests and custom instances for different urls

#### Apex charts
charts
#### Sentry
error monitoring



# Dashboard Features


![Crud Table](https://github.com/ClintOxx/M-Dashboard-Materialfy/blob/master/public/img/Screenshot%202021-07-15%20at%2021-28-53%20M-Dashboard%20by%20Materialfy%20.png)
- **CRUD Data Table** with sorting, pagination, searching, display images...
- Data Tables can:
  - Create
  - Read
  - Update/POST
  - Delete
  - Search filter:
    - Using search bar for filtering table content
    - Sorting by column
  - data table allows selection of the number of records per page, page transition and sorting,
  - Inline table editing
  - Edit item dialog
  - Rest APi support built in
  - dynamic table headers

- **Highly Configurable** 
  - Dark/light themes, theme colors, components, sidebar images, site name, colors, logo, Menu and footer...
- **It Has:**
  - data in demo that requests from https://reqres.in/ 
  - A cool user page?(lol) 
  - Support for REST Api's

- **Login**
  - login form (communication with rest API via axios, basic validation),
  - redirecting to from login depending on auth status and JWT
  - Gets JWT Refresh token once its expires(pretty sure we put that in)
  - stores JWT in secured local storage(using Secure-LS)
  - beforeEach Router gaurds in router/index.js
  - better off using Auth0

# Whats New in 2.0:
* rewrote from the ground up to fix many of the lingering issues and to make this simplier, easier to read and easier to miantain.
* Redid the design to make it simplier and less neon boy wonder cyberpunktastic
* Removed some baggage that was adding unnecessary weight to the project
* provided in file documentation on many of the more poterinally confusing things, some might have said we went too far.
* fixed routing issues forreal this time
* the process to get it up and running should be simplier now
* the documentation should actually exist now 
* functional basic noticiation component hooked up to state, same for new User Snippets component and settings
* theme picker and dark mode toggle
* toggle side nav drawer to temporary pop up or persistant 
* made a new user page then redid it at the last minute and made another when i should have been sleeping 
* made tables and card components with slots and props that are plug and play 
* 17 custom components
* idk man 


### Few things on the roadmap
- user roles
- user page api's
- more prepackaged components
- pro version(if I get to it)
- this will always be free
- more features and support
- dynamic inline edit 
- Cool new login screen


#### [Old version 1.0 Demo](https://clintoxx.github.io/M-Dashboard-Materialfy/)


## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Install @Vue/cli 4 [globally](https://cli.vuejs.org/guide/installation.html)
- clone repo
-  & navigate to the folder you cloned the repo to
- Open your terminal(CMD/Power Shell etc) to project root( or use Shift + right-click in the folder on windows)
- at project root (/M-Dashboard) run one of the following commands in the terminal depending on which you use:
  - `npm install`, or `yarn install`if you use [Yarn](https://yarnpkg.com/en/) 
- Run `npm run dev --open` or `yarn serve --open` to start a local development server or use [Vue UI](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui)
- A new tab will be opened in your browser or click the url in the terminal
- You can use [Reqres](https://reqres.in/) to test logging in/out, or for data tables api(its already hooked up)
  - otherwise use your own backend or a package like [Json Server](https://github.com/typicode/json-server) or [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

After installing the dependencies you can also run additional tasks such as these fun ones:
- `npm/yarn run build` to build your app for production
- `npm/yarn run lint` to run linting.

### Documentation

[Click here for docs](https://www.docs.materialfy.com)

There are also comments in files.

### Current Bugs
Checkout the Issues tab to see if any have been reported or closed.

### Reporting Issues
1. Make sure that you are using the latest version of the M-Dashboard and installed corerct versions of the dependcies with NPM/YARN.
2. Provide reproducible steps on how to recreate the issue, this can speed things up & will help a lot.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.
4. Provide screenshots if you are trying to point out an visual bug

You can [send us a tweet](https://twitter.com/Materialfy) if you need faster minorish assistance, otherwise create an issue on here.



