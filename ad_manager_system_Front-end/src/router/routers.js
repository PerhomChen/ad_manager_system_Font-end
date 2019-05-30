

export default [{

    path: '/login',
    name: 'login',
    component: () => import('../view/login/login.vue')

  },{
    path: '/',
    name: 'home',
    component: () => import('../view/home/home.vue')
  }
  ]