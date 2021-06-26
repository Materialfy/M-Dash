// https://vuex.vuejs.org/en/state.html

export default {
  authStatus: '',
  token: localStorage.getItem('token') || '',
  user: {},
  tableList: [],
  notifications: [
    {
      header: '',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?', 
      subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; 
      I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      divider: true, inset: true 
    },
    {
      header: '',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?', 
      subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
    },
    {
      header: '',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?', 
      subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
    },
  ],
}
