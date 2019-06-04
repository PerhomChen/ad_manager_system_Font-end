


export default [{
    path: '/',
    name: '_home',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/login/login.vue')
  }
  ]