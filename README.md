
![version](https://img.shields.io/badge/version-2.0-blue.svg)


[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1512-shield.svg)](https://madewithvuejs.com/p/functional-vuetify-admin-dashboard/shield-link)


## Formerly named Vuetify-admin-dashboard

<img src="https://github.com/ClintOxx/vuetify-admin-dashboard/blob/dev/public/img/Screenshot%202021-07-01%20143732.png" width="600" height="450" />

## [2.0 Demo Site](https://materialfy-demo.netlify.app) 

## [Old version: 1 Demo](https://clintoxx.github.io/vuetify-admin-dashboard/)

- Login auth system is disabled in demo along with every other api besides the Get request to the users table
- demo has an extra login button on the side bar so you can see what it looks like

![Preview]()

M-Dashboard is a beautiful crud admin panel/Dashboard builwith [Vuetify](https://vuetifyjs.com/en/) and [Vuex](https://vuex.vuejs.org/installation.html).  
Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vue](https://vuejs.org/v2/guide/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vue-Router](https://router.vuejs.org/en/).

## Table of Contents

- [Whats New in 2.0](#Whats-new)
- [Versions](#versions)
- [Demo](#2.0-Demo-Site)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)


# Features
- Powerful **CRUD Data Table** with sorting, pagination, searching, display images...
- Powerful **Edit Form Builder** can display/edit any value of text, image, boolean...
- Fully support for REST Api's
- Vue-Chart js built in
- Rewrote the router to add support for nested/child routes. Also enabled external pages without the sidebar/footer/header etc.
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
  - VUEX
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


## Bugs
Checkout the Issues tab

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
- You can use [Reqres](https://reqres.in/)  to test log in/out, or for table data apis(its already hooked up)
  - otherwise use your own backend or a package like [Json Server](https://github.com/typicode/json-server) or [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - you can host the frontend on github pages or netlify for free

After installing the dependencies you can also run additional npm tasks such as

- `npm/yarn run build` to build your app for production
- `npm/yarn run lint` to run linting.

### Vuetify

Vuetify 2.x is a frontend Vue UI library that allows you to quickly develop designs according to Material Design spec.

### Vuex

Vuex 3.x is a state management library for Vue.js applications. It serves as a centralized store for all the components.

### Vue-cli

We used 4.x [Vue CLI](https://github.com/vuejs/vue-cli)


## Documentation

The documentation for the Vuetify Admin Dashboard is coming soon once i have some freetime. for now there is brief documentation in the [File-Structure](#File-Structure)

There is also a lot of comments in every file documenting functions

## Reporting Issues

1. Make sure that you are using the latest version of the M-Dashboard and installed the corerct versions of dependcies with NPM/YARN.
2. Provide reproducible steps on how to recreate the issue, this can speed things up & will help a lot.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.
4. Provide screenshots if you are trying to point out an visual bug

You can [send us a tweet](https://twitter.com/Materialfy) if you need faster minorish assistance, otherwise create an issue on here.


## File Structure

```
moving to documentation
```

### Note
* This Dashboard is no longer using the template desgin/code from CreativeTims vueitfy material dash that this repo originally based its design on. 


