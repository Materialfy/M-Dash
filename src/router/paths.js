/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true
    },
    redirect: {
      path: '/control/dashboard'
    }
  },
  // This /control allows you to have pages apart of the app but no rendered inside the dash
  {
    path: '/control',
    meta: {
      name: '',
      requiresAuth: false
    },
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/LoginHome.vue`
    ),
    children: [
      {
        path: '',
        component: () => import(
          `@/components/LoginForm.vue`
        )
      }
    ]
  },
  // add any extra routes that you want rendered in the dashboard as a child below
  {
    path: '/control/dashboard',
    meta: {
      name: 'Dashboard View',
      requiresAuth: true
    },
    component: () => import(
      `@/views/DashboardView.vue`
    ),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(
          `@/views/Dashboard.vue`
        )
      },
      {
        path: 'user-profile',
        meta: {
          name: 'User Profile',
          requiresAuth: true
        },
        component: () => import(
          `@/views/UserProfile.vue`
        )
      },
      {
        path: 'table-list',
        meta: {
          name: 'Table List',
          requiresAuth: true
        },
        component: () => import(
          `@/views/SimpleTables.vue`
        )
      },
      {
        path: 'tables',
        meta: {
          name: 'Complex Tables',
          requiresAuth: true
        },
        component: () => import(
          `@/views/ComplexTables.vue`
        )
      },
      {
        path: 'tablestest',
        meta: {
          name: 'Complex Tables test',
          requiresAuth: true
        },
        component: () => import(
          `@/views/TableList.vue`
        )
      },
      {
        path: 'typography',
        meta: {
          name: 'Typography',
          requiresAuth: true
        },
        component: () => import(
          `@/views/Typography.vue`
        )
      },
      {
        path: 'icons',
        meta: {
          name: 'Icons',
          requiresAuth: true
        },
        component: () => import(
          `@/views/Icons.vue`
        )
      },
      {
        path: 'maps',
        meta: {
          name: '',
          requiresAuth: true
        },
        component: () => import(
          `@/views/Maps.vue`
        )
      },
      {
        path: 'notifications',
        meta: {
          name: '',
          requiresAuth: true
        },
        component: () => import(
          `@/views/Notifications.vue`
        )
      }
      ]
  }
]
