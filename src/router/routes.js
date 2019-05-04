import home from '@/views/home'
import elements from './elements'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/about')
  },
  {
    path: '/element',
    name: 'element',
    redirect: {name: 'input'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/element/index'),
    children: [
      ...elements
    ]
  }
]

export default routes
