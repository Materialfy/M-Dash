
![version](https://img.shields.io/badge/version-2.0-blue.svg)


[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1512-shield.svg)](https://madewithvuejs.com/p/functional-vuetify-admin-dashboard/shield-link)


### Formerly known by Vuetify Admin Dashboard

<img src="" width="600" height="450" />


![Preview]("picture link")

M-Dashboard is a simple (Hopefully not ugly) productivity Dashboard to monitor tasks/work, it can also be used as an crud admin panel.
Using the Dashboard is pretty simple but requires basic knowledge of Javascript, and the above libraries (Really just the last four)

## Built with

### [Vue](https://vuejs.org/v2/guide/)

### [Vuetify](https://vuetifyjs.com/en/)
Vuetify 2.x is a frontend Vue UI library that allows you to quickly develop designs according to Material Design spec.

### [Vue-Router](https://router.vuejs.org/en/)
Vue Router is allows you to build routes/paths and handle the single page app routing.

### [Vuex](https://vuex.vuejs.org/installation.html)
Vuex 3.x is a state management library for Vue.js applications. It serves as a centralized store for all the components.

### [Vue CLI](https://github.com/vuejs/vue-cli)
Vue-CLI 4.x handles a lot of the set up and boilerplate also configures webpack and more 

### Axios
Handles making requests and custom instances for different urls

## Table of Contents

- [Whats New in 2.0](#Whats-new)
- [Versions](#versions)
- [Demo](#2.0-Demo-Site)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)

## [2.0 Demo Site](https://materialfy-demo.netlify.app) 
### logout button is in user menu in app bar
## login data is already saved

# Dashboard Features

![Crud Table]()
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
  - Such as: Dark/light themes, theme colors, components, sidebar images, site name, colors, logo, Menu and footer...
- **It Has:**
  - data in demo that is get requesting from https://reqres.in/ 
  - A cool user page?(lol) 
  - Support for REST Api's

- **Authentication**
  - login form (communication with rest API via axios, basic validation),
  - redirecting to from login depending on auth status and JWT
  - Gets JWT Refresh token once its expires(pretty sure we put that in)
  - stores JWT in secured local storage(using Secure-LS)
  - beforeEach Router gaurds in router/index.js
- **App layout components**
  - The core layout components are pretty standard if you have worked with Vuetify before. I tried to stick to that library only to simplfy.


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
* idk man 


## Few things on the roadmap
- user roles
- user page api's
- more prepackaged components
- pro version(if I get to it)
- this will always be free
- more features and support
- dynamic inline edit 


### [Old version 1.0 Demo](https://clintoxx.github.io/vuetify-admin-dashboard/)


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

## Documentation

The documentation for the Vuetify Admin Dashboard is coming soon tm.

There are also comments in a lot of files.

## Current Bugs
Checkout the Issues tab to see if any have been reported or closed.

## Reporting Issues
1. Make sure that you are using the latest version of the M-Dashboard and installed corerct versions of the dependcies with NPM/YARN.
2. Provide reproducible steps on how to recreate the issue, this can speed things up & will help a lot.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.
4. Provide screenshots if you are trying to point out an visual bug

You can [send us a tweet](https://twitter.com/Materialfy) if you need faster minorish assistance, otherwise create an issue on here.



