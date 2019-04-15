const elements = [
  {
    path: 'input',
    name: 'input',
    component: () => import(/* webpackChunkName: "input" */ '@/views/element/input'),
  },
  {
    path: 'select',
    name: 'select',
    component: () => import(/* webpackChunkName: "select" */ '@/views/element/select'),
  },
  {
    path: 'form',
    name: 'form',
    component: () => import(/* webpackChunkName: "select" */ '@/views/element/form'),
  },
]

export default elements
