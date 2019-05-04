
const _import = (name) => () => import( `@/views/element/${name}` )

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
    component: () => import(/* webpackChunkName: "form" */ '@/views/element/form'),
  },
  {
    path: 'tabs',
    name: 'tabs',
    component: _import('tabs'),
  },
  {
    path: 'table',
    name: 'table',
    component: _import('table'),
  },
]

export default elements
