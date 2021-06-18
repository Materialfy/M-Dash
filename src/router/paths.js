/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

//import store from "../store";
export default [
	// This section is primarily for the login but it allows you to add external other pages to be rendered outside the dashboard layout like the login
	//if you want to add more external routes make them in the children array
	{// using the named route option 
		path: "/",
		meta: {
			name: "External",
			requiresAuth: false,
		},
		component: () => import(`@/components/layout/ExternalView.vue`),
		//per route guard if you dont want global
		// beforeEnter: (to, from, next) => {
		// 	// This checks to see which route you are going to, if you are trying to go to dashboard, if so it also checks the state 
		// 	// to see if you are already signed in, if not  it redirects to login. "from" is unused
		// 	// eslint-disable-next-line no-mixed-spaces-and-tabs
		// 	 if (to.name !== 'dashboard' && !store.getters.authorized) { //
		// 		next("/login");
		// 	}
		// 	else {
		// 		next(to.name); // this sends you to your original route if you arent trying to go to login
		// 	}
		//},
		children: [
			//any components in this path auto render in External
			{
				path: "/login", // you leave this blank if you want it to default to the parents path
				name: "login",
				component: () => import(`@/components/externalviews/LoginForm.vue`),
			},
			{
				path: "/home", // you leave this blank if you want it to default to the parents path
				name: "home",
				component: () => import(`@/components/externalviews/Home.vue`),
			},
		],
	},
	
	// add any extra routes that you want rendered inside the dashboard layout as a child below. Change toolbar names here
	// {
	// 	path: '/home',
	// 	meta: {
	// 		name: 'home',
	// 		requiresAuth: false,
	// 	},
	// 	component: () => import(`@/components/externalviews/Home.vue`)
	// },
	
	// This section rendered inside the dashboard layout with the toolbar and footer etc, 
	//add any extra routes that you want, as a child below. Change toolbar names here by changing name
	{
		path: '/dashboard',
		meta: {
			name: 'dashboard-view',
			requiresAuth: false,
		},
		component: () => import(`@/components/layout/DashboardView.vue`),
		children: [
			{
				path: "", //defaults to /dashboard if left blank
				meta: {
					name: 'Dashboard',
					requiresAuth: false,
				},
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
		//per route guard if you dont want global
		// beforeEnter: (to, from, next) => {
		// 	// checks to see if you are trying to go to dashboard and are logged in
		// 	if (to.name !== 'dashboard' && store.getters.authorized) {
		// 		next("/dashboard");
		// 	} 
		// 	// sends you to login if you arent authorized
		// 	else if (to.name !== 'dashboard' && !store.getters.authorized) { //
		// 		next("/login");
		// 	}
		// 	else {
		// 		next(to.name); // this sends you to your original route if you arent trying to go to login
		// 	}
		// },
	},
	// This is a catch all aka page not found route. it will send you to the dashboard
	{
		path: "*",
		redirect: {
			name: 'catchAll',
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
