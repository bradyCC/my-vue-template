import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'person',
      component: () => import('./views/person/Index.vue'),
			title: '个人中心'
    },
		{
		  path: '/invite',
		  name: 'invite',
		  component: () => import('./views/person/Invite.vue'),
			title: '邀请赚钱'
		},
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
