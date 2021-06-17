/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from "../store";
export default [
	// This section is primarily for the login but it allows you to add other pages to be rendered outside the dashboard layout like the login
	//if you want to add more external routes make them in the children array
	{
		path: "/",
		meta: {
			name: "",
			requiresAuth: false,
		},
		component: () => import(`@/components/layout/ExternalView.vue`),
		// This checks the state to see if you are already signed in, if so  it redirects. "to" and "from" are unused
		beforeEnter: (to, from, next) => {
			if (store.getters.authorized) {
				next("/dashboard");
			} else {
				next("login");
			}
		},
		children: [
			//any components in this path auto render in External
			{
				path: "", // you leave this blank if you want it to default to the parents path
				name: "login",
				component: () => import(`@/components/externalviews/LoginForm.vue`),
			},
		],
	},
	// add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
	{
		path: "/dashboard",
		meta: {
			name: "DashboardView",
			requiresAuth: true,
		},
		component: () => import(`@/components/layout/DashboardView.vue`),
		children: [
			{
				path: "",
				name: "Dashboard",
				component: () => import(`@/components/DashboardViews/Dashboard.vue`),
			},
			{
				path: "user-profile", // ends up as /dashboard/user-profile
				meta: {
					name: "UserProfile",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/UserProfile.vue`),
			},
			{
				path: "table-list",
				meta: {
					name: "TableList",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/SimpleTablesView.vue`),
			},
			{
				path: "user-tables",
				meta: {
					name: "UserTable",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/UsersTable.vue`),
			},
			{
				path: "tablestest",
				meta: {
					name: "ComplexTablesTest",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/TableListView.vue`),
			},
			{
				path: "typography",
				meta: {
					name: "Typography",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/Typography.vue`),
			},
			{
				path: "icons",
				meta: {
					name: "Icons",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/Icons.vue`),
			},
			{
				path: "maps",
				meta: {
					name: "Maps",
					requiresAuth: true,
				},
				component: () => import(`@/components/DashboardViews/Maps.vue`),
			},
			{
				path: "notifications",
				meta: {
					name: "Notifications",
					requiresAuth: true,
				},
				component: () =>
					import(`@/components/DashboardViews/Notifications.vue`),
			},
		],
	},
	// This is a catch all aka page not found route. it will send you to the dashboard
	{
		path: "*",
		redirect: {
			path: "/dashboard",
		},
		meta: {
			requiresAuth: true,
		},
	},
	//Error component fallback
	{
		path: "/:catchAll(.*)",
		component: () => import(`@/components/error/NotFound.vue`),
		name: "NotFound",
	},
];
