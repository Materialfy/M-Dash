


![version](https://img.shields.io/badge/version-.5.0-blue.svg)



## [Demo Site](https://clintoxx.github.io/vuetify-admin-dashboard/)

![Crud Table](2019-04-03_04-17-17.gif)


Vuetify Material Dashboard is a beautiful resource built over [Vuetify](https://vuetifyjs.com/en/) and [Vuex](https://vuex.vuejs.org/installation.html). It will help you get started developing dashboards in no time. Vuetify Material Dashboard is the official Vuejs version of the Original [Material Dashboard](https://www.creative-tim.com/product/material-dashboard). Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vue](https://vuejs.org/v2/guide/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vue-Router](https://router.vuejs.org/en/).


## Few things on the roadmap
* ~~Fix the cards being giant in the dash~~
* ~~add login view~~
* add in auth/user role 
* ~~log out button~~
* user screen actually functioning


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


Let us know your thoughts below. And good luck with development!

## Table of Contents

* [Versions](#versions)
* [Demo](#Demo Site)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)




## Quick start

Quick start options:

    Clone this repo

    npm i or npm --install 

    npm run serve 


## Documentation
The documentation for the Vuetify Material Dashboard is hosted at our [website]().


## File Structure

Within the download you'll find the following directories and files:

```
vuetify-material-dashboard
├── README.md
├── babel.config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   ├── core
│   │   │   ├── Drawer.vue
│   │   │   ├── Filter.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Toolbar.vue
│   │   │   └── View.vue
│   │   ├── helper
│   │   │   └── Offset.vue
│   │   ├── index.js
│   │   └── material
│   │       ├── Card.vue
│   │       ├── ChartCard.vue
│   │       ├── Notification.vue
│   │       └── StatsCard.vue
│   ├── i18n
│   │   └── index.js
│   ├── lang
│   │   ├── en
│   │   │   ├── Common.json
│   │   │   ├── Core
│   │   │   │   ├── Footer.json
│   │   │   │   └── Toolbar.json
│   │   │   └── Home.json
│   │   └── index.js
│   ├── main.js
│   ├── plugins
│   │   ├── axios.js
│   │   ├── chartist.js
│   │   ├── index.js
│   │   ├── theme.js
│   │   └── vuetify.js
│   ├── router
│   │   ├── index.js
│   │   └── paths.js
│   ├── store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── modules
│   │   │   ├── app
│   │   │   │   ├── mutations.js
│   │   │   │   └── state.js
│   │   │   └── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   ├── styles
│   │   ├── index.scss
│   │   └── material-dashboard
│   ├── utils
│   │   └── vuex.js
│   └── views
│       ├── Dashboard.vue
│       ├── Icons.vue
│       ├── Maps.vue
│       ├── Notifications.vue
│       ├── TableList.vue
│       ├── Typography.vue
│       ├── Upgrade.vue
│       └── UserProfile.vue
├── vue.config.js
└── yarn.lock
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Reporting Issues
Here is some advice for our users that want to report an issue:

1. Make sure that you are using the latest version of the Vuetify Admin Dashboard. 
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


## Licensing
MIT

##### Social Media

Twitter: <https://twitter.com/Cleesus>

Instagram: <https://instagram.com/Cleesus>
