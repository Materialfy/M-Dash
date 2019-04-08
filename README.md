


![version](https://img.shields.io/badge/version-1.0.0-blue.svg)



## [Demo Site](https://clintoxx.github.io/vuetify-admin-dashboard/)


![Features](2019-04-05_22-31-17.gif)



Vuetify Material Dashboard is a beautiful resource built over [Vuetify](https://vuetifyjs.com/en/) and [Vuex](https://vuex.vuejs.org/installation.html). It will help you get started developing dashboards in no time. Vuetify Material Dashboard is the official Vuejs version of the Original [Material Dashboard](https://www.creative-tim.com/product/material-dashboard). Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vue](https://vuejs.org/v2/guide/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vue-Router](https://router.vuejs.org/en/).


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
- Production ready.

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
* user role 
* ~~log out button~~
* user screen actually functioning
* jwt https cookie storage (still debating since cookies can be hit with xss)
* change route gaurd verification 
* selectable drawer colors 
* notification api so notifications function
* getting documentation up on vue press


## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal(Shiift + right-click in the folder on windows)
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser

After installiing the dependencies you can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run lint` to run linting.

## Vuetify
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.


## Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools](https://github.com/vuejs/vue-devtools) extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js`, `.eslintrc.js` and `.postcssrc.js`.

Let us know what you think and what we can improve below. And good luck with development!


#### Special thanks
To [creativetim](https://github.com/creativetimofficial/vuetify-material-dashboard) for the base template 

I added a lot of features to his base template but kept the overall theme.

## Quick start

Quick start options:

    Clone this repo

    npm i or npm --install 

    npm run serve 


## Documentation
The documentation for the Vuetify Admin Dashboard is coming soon once i have some freetime


## Reporting Issues

1. Make sure that you are using the latest version of the Vuetify Admin Dashboard. 
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Licensing
MIT


## File Structure

Within the download you'll find the following directories and files:

